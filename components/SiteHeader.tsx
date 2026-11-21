"use client";

import { useEffect, useRef, useState } from "react";
import {
  AUTONYM,
  CODE,
  DEFAULT_NATIVE,
  LANGS,
  NATIVE_COOKIE,
  cookieAttrs,
  hasMap,
  isLang,
  matchLang,
  type Lang,
  pairPath,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";

const SECTION_IDS = ["now", "map-section", "road", "practice", "plan", "gloss"] as const;
const THEME_KEY = "frmap-theme";

type Props = { native: Lang; target: Lang; sections: boolean };

export default function SiteHeader({ native, target, sections }: Props) {
  const dict = getDict(native);
  const d = dict.site;
  const labels: Record<(typeof SECTION_IDS)[number], string> = {
    now: d.nav.now,
    "map-section": d.nav.map,
    road: d.nav.road,
    practice: d.nav.practice,
    plan: d.nav.plan,
    gloss: d.nav.gloss,
  };

  const [active, setActive] = useState<string | null>(null);
  const [dark, setDark] = useState(false);

  // Sync the switch with the theme applied by the inline script in the root layout.
  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    setDark(t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  // Highlight the nav item for the section currently on screen.
  useEffect(() => {
    if (!sections) return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-90px 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {}
  };

  const go = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    if (el instanceof HTMLDetailsElement) el.open = true; // expand collapsible sections (plan, glossary)
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <header className={`site-header${sections ? "" : " no-nav"}`}>
      <div className="sh-inner">
        <a
          className="sh-brand"
          href={pairPath(native, target)}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg className="sh-logo" viewBox="0 0 30 30" aria-hidden="true">
            <path className="ln" d="M5 24 L13 16 H25" />
            <circle className="stn" cx="5" cy="24" r="3.6" />
            <circle className="stn" cx="25" cy="16" r="3.6" />
          </svg>
          {d.brand}
        </a>
        {sections && (
          <nav className="sh-nav" aria-label={d.navAria}>
            {SECTION_IDS.map((id) => (
              <a key={id} href={`#${id}`} onClick={(e) => go(e, id)} aria-current={active === id ? "true" : undefined}>
                {labels[id]}
              </a>
            ))}
          </nav>
        )}
        {sections && <StudyTimer label={dict.map.timerAria} />}
        <div className="sh-tools">
          <LangSwitch native={native} target={target} />
          <button
            type="button"
            className="theme-sw"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={dark ? d.themeToLight : d.themeToDark}
          >
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <span className="knob" />
          </button>
        </div>
      </div>
    </header>
  );
}

/**
 * Study timer pill. Only the static shell is rendered here: lib/grammar-app.js fills in the time,
 * the play/pause icon and the status (shown as a tooltip), and toggles the "on" class.
 * Elements have no React children, so React re-renders never overwrite those updates.
 */
function StudyTimer({ label }: { label: string }) {
  return (
    <div className="tmr" id="tmr" role="group" aria-label={label}>
      <span className="tmr-time">
        <i aria-hidden="true" />
        <span id="tmrTime" />
      </span>
      <span className="sr-only" id="tmrSub" />
      <button type="button" className="tmr-btn" id="tmrBtn" />
    </div>
  );
}

/** Pill showing "UK → FR"; opens a menu with "my language" and "learning" lists. */
function LangSwitch({ native, target }: { native: Lang; target: Lang }) {
  const d = getDict(native).site;
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  // System language (from the browser/OS settings) and whether the user has overridden it.
  const [system, setSystem] = useState<Lang>(DEFAULT_NATIVE);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    setSystem(matchLang(navigator.languages?.length ? navigator.languages : [navigator.language]) ?? DEFAULT_NATIVE);
    const chosen = document.cookie.match(new RegExp(`(?:^|; )${NATIVE_COOKIE}=([^;]*)`))?.[1];
    setAuto(!isLang(chosen));
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

  // Plain <a> links on purpose: switching languages reloads the page so the map script starts fresh.
  return (
    <div className="lang-sw" ref={root}>
      <button
        type="button"
        className="lang-btn"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${d.langButtonAria}: ${AUTONYM[native]} → ${d.langName[target]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{CODE[native]}</span>
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="lang-target">{CODE[target]}</span>
      </button>
      {open && (
        <div className="lang-menu">
          <div className="lang-group">
            <span className="lang-head">{d.langNative}</span>
            <a
              href={pairPath(system, target)}
              onClick={() => (document.cookie = `${NATIVE_COOKIE}=; path=/; max-age=0`)}
              aria-current={auto ? "true" : undefined}
            >
              <span className="lang-code" aria-hidden="true">
                ⟳
              </span>
              {d.langAuto}
              <span className="lang-soon">{CODE[system]}</span>
            </a>
            {LANGS.map((l) => (
              <a
                key={l}
                href={pairPath(l, target)}
                lang={l}
                onClick={() => (document.cookie = `${NATIVE_COOKIE}=${l}; ${cookieAttrs}`)}
                aria-current={!auto && l === native ? "true" : undefined}
              >
                <span className="lang-code">{CODE[l]}</span>
                {AUTONYM[l]}
              </a>
            ))}
          </div>
          <div className="lang-group">
            <span className="lang-head">{d.langTarget}</span>
            {LANGS.map((l) => (
              <a key={l} href={pairPath(native, l)} aria-current={l === target ? "true" : undefined}>
                <span className="lang-code">{CODE[l]}</span>
                {d.langName[l]}
                {!hasMap(native, l) && <span className="lang-soon">{d.soon}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
