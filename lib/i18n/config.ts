// Language configuration shared by routing, the proxy and the UI.
// URLs are /{native}/{target}: the interface language, then the grammar being learned.

export const LANGS = ["uk", "en", "fr"] as const;
export type Lang = (typeof LANGS)[number];

/** Interface language when the system language is not supported. */
export const DEFAULT_NATIVE: Lang = "en";
export const DEFAULT_TARGET: Lang = "fr";

/**
 * Language pairs (native → target) that have a working map. Content is written for a specific
 * native language, so a map exists per pair, not per target. Other pairs redirect to a map (next.config.ts).
 */
// Only maps of another language are published: a pair like fr → fr has no map and redirects.
export const AVAILABLE_PAIRS: readonly (readonly [native: Lang, target: Lang])[] = [
  ["uk", "fr"],
  ["uk", "en"],
  ["fr", "en"],
  ["fr", "uk"],
  ["en", "fr"],
  ["en", "uk"],
];

export const hasMap = (native: Lang, target: Lang) => AVAILABLE_PAIRS.some(([n, t]) => n === native && t === target);

/** Targets with a working map for this native language, in AVAILABLE_PAIRS order. */
export const mapsFor = (native: Lang): Lang[] => AVAILABLE_PAIRS.filter(([n]) => n === native).map(([, t]) => t);

/**
 * Path to a map that exists: the requested pair if it has one, otherwise the first map
 * for this native language. Pairs without a map are not published (see next.config.ts).
 */
export const mapPath = (native: Lang, target: Lang) =>
  pairPath(native, hasMap(native, target) ? target : (mapsFor(native)[0] ?? target));

/**
 * Native language follows the system (Accept-Language / navigator.languages) unless the user
 * explicitly picked one in the language menu; only then is it stored in this cookie.
 */
export const NATIVE_COOKIE = "gm-native";

/** Last grammar map the user opened; read by proxy.ts on "/". */
export const TARGET_COOKIE = "gm-target";

const YEAR = 60 * 60 * 24 * 365;
export const cookieAttrs = `path=/; max-age=${YEAR}; samesite=lax`;

/** Language names in the language itself (used in the "my language" list). */
export const AUTONYM: Record<Lang, string> = { uk: "Українська", en: "English", fr: "Français" };

export const CODE: Record<Lang, string> = { uk: "UK", en: "EN", fr: "FR" };


export const isLang = (v: unknown): v is Lang => typeof v === "string" && (LANGS as readonly string[]).includes(v);

export const pairPath = (native: Lang, target: Lang) => `/${native}/${target}`;

/**
 * Picks the first supported language from a preference list such as
 * navigator.languages or a parsed Accept-Language header ("fr-FR" -> "fr").
 */
export function matchLang(preferred: readonly string[]): Lang | null {
  for (const tag of preferred) {
    const base = tag.trim().slice(0, 2).toLowerCase();
    if (isLang(base)) return base;
  }
  return null;
}

/** Accept-Language header -> language tags ordered by quality. */
export function parseAcceptLanguage(header: string | null): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((x) => x.trim()).find((x) => x.startsWith("q="));
      return { tag, q: q ? Number(q.slice(2)) || 0 : 1, i };
    })
    .filter((x) => x.tag && x.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)
    .map((x) => x.tag);
}
