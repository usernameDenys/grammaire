"use client";

import { useEffect } from "react";
import { TARGET_COOKIE, cookieAttrs, type Lang } from "@/lib/i18n/config";

// Remembers the last opened grammar map so that "/" (see proxy.ts) reopens it.
// The native language is deliberately NOT stored here: it follows the system
// unless the user picks one in the language menu.
export default function LangSync({ target }: { target: Lang }) {
  useEffect(() => {
    document.cookie = `${TARGET_COOKIE}=${target}; ${cookieAttrs}`;
  }, [target]);
  return null;
}
