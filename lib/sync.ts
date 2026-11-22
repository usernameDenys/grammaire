// Optional account sync through Supabase (sign-in by email link).
// Progress always lives in localStorage first; when someone is signed in, the synced keys are
// mirrored to the `progress` table (see supabase/migrations). Without the two NEXT_PUBLIC_
// variables the whole feature is off and the site works exactly as before.

import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const syncEnabled = Boolean(SUPABASE_URL && SUPABASE_KEY);

/** Keys worth syncing: progress per map. UI flags (open blocks, theme) stay on the device. */
const SYNCED = /^(fr|en|uk)map-(done|score|time|mistakes|settings)-v1$/;
/** Keys changed on this device and not yet confirmed by the server. */
const DIRTY_KEY = "gm-sync-dirty";
/** Users whose local progress has already been merged into their account on this device. */
const LINKED_KEY = "gm-sync-linked";

let client: SupabaseClient | null = null;
const getClient = () =>
  syncEnabled
    ? (client ??= createClient(SUPABASE_URL!, SUPABASE_KEY!, {
        auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true, autoRefreshToken: true },
      }))
    : null;

const readJSON = <T>(key: string, fallback: T): T => {
  try {
    const v = localStorage.getItem(key);
    return v == null ? fallback : (JSON.parse(v) as T);
  } catch {
    return fallback;
  }
};
const writeJSON = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};
const localSyncedKeys = () => {
  const keys: string[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && SYNCED.test(k)) keys.push(k);
    }
  } catch {}
  return keys;
};

const dirty = {
  all: () => new Set(readJSON<string[]>(DIRTY_KEY, [])),
  add(key: string) {
    const s = this.all();
    s.add(key);
    writeJSON(DIRTY_KEY, [...s]);
  },
  remove(key: string) {
    const s = this.all();
    if (s.delete(key)) writeJSON(DIRTY_KEY, [...s]);
  },
};

/* ---------- merging local and cloud values (used once per user per device) ---------- */
type Json = unknown;
const union = (a: Json, b: Json) => [...new Set([...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])])];
const maxPerKey = (a: Json, b: Json) => {
  const out: Record<string, number> = { ...((a as Record<string, number>) || {}) };
  for (const [k, v] of Object.entries((b as Record<string, number>) || {})) out[k] = Math.max(out[k] || 0, v || 0);
  return out;
};
function merge(key: string, local: Json, remote: Json): Json {
  if (local === undefined) return remote;
  if (remote === undefined) return local;
  if (/-(done|mistakes)-v1$/.test(key)) return union(local, remote);
  if (/-time-v1$/.test(key)) {
    const l = (local || {}) as { topics?: Json; days?: Json };
    const r = (remote || {}) as { topics?: Json; days?: Json };
    // The same study time may already be in both copies, so take the larger value, never the sum.
    return { topics: maxPerKey(l.topics, r.topics), days: maxPerKey(l.days, r.days) };
  }
  if (/-score-v1$/.test(key)) return { ...(remote as object), ...(local as object) };
  return local; // settings: this device's choice wins at link time
}

/* ---------- pushing ---------- */
const timers = new Map<string, ReturnType<typeof setTimeout>>();
async function push(key: string) {
  const c = getClient();
  if (!c) return;
  const { data } = await c.auth.getSession();
  if (!data.session) return;
  const value = readJSON<Json>(key, undefined);
  if (value === undefined) return;
  const { error } = await c.from("progress").upsert({ user_id: data.session.user.id, key, value, updated_at: new Date().toISOString() });
  if (!error) dirty.remove(key);
}

/** Called by the map script after every localStorage write. Debounced per key. */
export function onSave(key: string) {
  if (!syncEnabled || !SYNCED.test(key)) return;
  dirty.add(key);
  clearTimeout(timers.get(key));
  timers.set(key, setTimeout(() => void push(key), 1500));
}

/* ---------- pulling ---------- */
/**
 * Runs before the map starts. For a signed-in user it brings localStorage in line with the account:
 * the first time on a device local and cloud progress are merged; afterwards the cloud wins,
 * except for keys changed here that never reached the server.
 */
export async function prepare(): Promise<void> {
  const c = getClient();
  if (!c) return;
  const { data } = await c.auth.getSession(); // also completes a sign-in coming back from the email link
  cleanAuthParams();
  const user = data.session?.user;
  if (!user) return;

  const { data: rows, error } = await c.from("progress").select("key, value");
  if (error) return;
  const remote = new Map<string, Json>((rows || []).filter((r) => SYNCED.test(r.key)).map((r) => [r.key, r.value]));
  const linked = new Set(readJSON<string[]>(LINKED_KEY, []));
  const firstTime = !linked.has(user.id);
  const pending = dirty.all();
  const keys = new Set([...remote.keys(), ...localSyncedKeys()]);
  const toPush: string[] = [];

  for (const key of keys) {
    const local = readJSON<Json>(key, undefined);
    const cloud = remote.get(key);
    if (firstTime) {
      const merged = merge(key, local, cloud);
      writeJSON(key, merged);
      if (JSON.stringify(merged) !== JSON.stringify(cloud)) toPush.push(key);
    } else if (pending.has(key) || cloud === undefined) {
      toPush.push(key);
    } else {
      writeJSON(key, cloud);
    }
  }
  if (firstTime) {
    linked.add(user.id);
    writeJSON(LINKED_KEY, [...linked]);
  }
  toPush.forEach((k) => dirty.add(k));
  await Promise.all(toPush.map(push));
}

/** Removes ?code=… left by the email link so a reload doesn't try to use it twice. */
function cleanAuthParams() {
  try {
    const u = new URL(window.location.href);
    if (!u.searchParams.has("code") && !u.searchParams.has("error_description")) return;
    u.searchParams.delete("code");
    u.searchParams.delete("error");
    u.searchParams.delete("error_code");
    u.searchParams.delete("error_description");
    history.replaceState(null, "", u.pathname + u.search + u.hash);
  } catch {}
}

/* ---------- account ---------- */
export async function currentUser(): Promise<User | null> {
  const c = getClient();
  if (!c) return null;
  const { data } = await c.auth.getSession();
  return data.session?.user ?? null;
}

export function onAuthChange(cb: (user: User | null) => void): () => void {
  const c = getClient();
  if (!c) return () => {};
  const { data } = c.auth.onAuthStateChange((_event, session) => cb(session?.user ?? null));
  return () => data.subscription.unsubscribe();
}

/** Sends the sign-in link; the user comes back to the page they are on. */
export async function sendLink(email: string): Promise<string | null> {
  const c = getClient();
  if (!c) return "disabled";
  const { error } = await c.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.origin + window.location.pathname, shouldCreateUser: true },
  });
  return error ? error.message : null;
}

/**
 * Signs out on this device. Pending changes are sent first; then the synced progress is removed
 * from this browser (it is safe in the account), so the next person on a shared device starts clean
 * and their progress is never merged with this account's.
 */
export async function signOut(): Promise<void> {
  const c = getClient();
  if (!c) return;
  timers.forEach((t) => clearTimeout(t));
  await Promise.all([...dirty.all()].map(push));
  await c.auth.signOut();
  try {
    localSyncedKeys().forEach((k) => localStorage.removeItem(k));
    localStorage.removeItem(DIRTY_KEY);
  } catch {}
}
