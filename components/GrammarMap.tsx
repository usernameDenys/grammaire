"use client";

import { useEffect, useMemo } from "react";
import { buildMarkup } from "./markup";
import { initApp } from "@/lib/grammar-app";
import { getDict } from "@/lib/i18n/ui";
import type { Lang } from "@/lib/i18n/config";
import { glossaryHtml } from "@/content/fr/glossary.uk";

export default function GrammarMap({ native }: { native: Lang }) {
  const d = getDict(native);
  const html = useMemo(() => buildMarkup(d.map, glossaryHtml), [d]);

  useEffect(() => {
    initApp(d.app);
  }, [d]);

  // The markup is static; all interactivity (SVG map, topic panel, plan, timer)
  // is built imperatively by lib/grammar-app.js after mount.
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
