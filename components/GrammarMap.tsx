"use client";

import { useEffect, useMemo } from "react";
import { buildMarkup } from "./markup";
import { initApp } from "@/lib/grammar-app";
import { getDict } from "@/lib/i18n/ui";
import type { Lang } from "@/lib/i18n/config";
import { getMap } from "@/content";

export default function GrammarMap({ native, target }: { native: Lang; target: Lang }) {
  const d = getDict(native);
  const map = getMap(native, target);
  if (!map) throw new Error(`No grammar map for ${native} → ${target}`);
  const html = useMemo(() => buildMarkup(d.map, map.glossaryHtml), [d, map]);

  useEffect(() => {
    initApp(d.app, map.content);
  }, [d, map]);

  // The markup is static; all interactivity (SVG map, topic drawer, plan, timer)
  // is built imperatively by lib/grammar-app.js after mount.
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
