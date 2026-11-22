"use client";

import { useEffect, useMemo } from "react";
import { buildMarkup } from "./markup";
import { initApp } from "@/lib/grammar-app";
import { onSave, prepare } from "@/lib/sync";
import { mailto } from "@/lib/contact";
import { getDict } from "@/lib/i18n/ui";
import type { Lang } from "@/lib/i18n/config";
import { getMap } from "@/content";

export default function GrammarMap({ native, target }: { native: Lang; target: Lang }) {
  const d = getDict(native);
  const map = getMap(native, target);
  if (!map) throw new Error(`No grammar map for ${native} → ${target}`);
  const html = useMemo(() => buildMarkup(d.map, map.copy, map.glossaryHtml), [d, map]);

  useEffect(() => {
    // For a signed-in user, bring the saved progress in line with the account first,
    // but never hold the map back for more than a few seconds.
    let live = true;
    const wait = new Promise<void>((resolve) => setTimeout(resolve, 4000));
    Promise.race([prepare().catch(() => {}), wait]).then(() => {
      if (live) initApp(d.app, map.content, { onSave, mailto });
    });
    return () => {
      live = false;
    };
  }, [d, map]);

  // The markup is static; all interactivity (SVG map, topic drawer, plan, timer)
  // is built imperatively by lib/grammar-app.js after mount.
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
