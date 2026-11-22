"use client";

import { useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";
import type { Lang } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";
import { currentUser, onAuthChange, sendLink, signOut, syncEnabled } from "@/lib/sync";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; email: string } | { kind: "error" };

/** Optional sign-in by email link; renders nothing when sync isn't configured. */
export default function AccountMenu({ native }: { native: Lang }) {
  const d = getDict(native).site;
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!syncEnabled) return;
    currentUser().then(setUser);
    return onAuthChange(setUser);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!syncEnabled) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    setStatus({ kind: "sending" });
    const error = await sendLink(value);
    setStatus(error ? { kind: "error" } : { kind: "sent", email: value });
  };

  const leave = async () => {
    await signOut();
    // The map script holds progress in memory; reload so it starts from the cleared browser state.
    window.location.reload();
  };

  return (
    <div className="acct" ref={root}>
      <button
        type="button"
        className={`acct-btn${user ? " on" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={user ? d.accountSignedInAria : d.accountAria}
        onClick={() => setOpen((v) => !v)}
      >
        {user ? (
          <span className="acct-initial" aria-hidden="true">
            {(user.email || "?").charAt(0).toUpperCase()}
          </span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="8" r="3.6" />
            <path d="M5 19.5c1.2-3.4 3.8-5 7-5s5.8 1.6 7 5" strokeLinecap="round" />
          </svg>
        )}
      </button>
      {open && (
        <div className="acct-menu">
          {user ? (
            <>
              <p className="acct-title">{d.accountTitle}</p>
              <p className="acct-email">{user.email}</p>
              <p className="acct-note">{d.accountSynced}</p>
              <button type="button" className="btn sm" onClick={leave}>
                {d.signOut}
              </button>
            </>
          ) : status.kind === "sent" ? (
            <>
              <p className="acct-title">{d.linkSentTitle}</p>
              <p className="acct-note">{d.linkSent(status.email)}</p>
              <button type="button" className="btn sm" onClick={() => setStatus({ kind: "idle" })}>
                {d.linkAgain}
              </button>
            </>
          ) : (
            <form onSubmit={submit}>
              <p className="acct-title">{d.signInTitle}</p>
              <p className="acct-note">{d.signInText}</p>
              <label className="acct-field">
                <span>{d.emailLabel}</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </label>
              {status.kind === "error" && <p className="acct-error">{d.linkError}</p>}
              <button type="submit" className="btn primary sm" disabled={status.kind === "sending"}>
                {status.kind === "sending" ? d.sending : d.sendLink}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
