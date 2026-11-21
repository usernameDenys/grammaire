"use client";

import { useEffect } from "react";
import { markup } from "./markup";
import { initApp } from "@/lib/grammar-app";

export default function GrammarMap() {
  useEffect(() => {
    initApp();
  }, []);

  // Розмітка статична; весь інтерактив (карта SVG, панель теми, план, таймер)
  // будується імперативно в lib/grammar-app.js після монтування.
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />;
}
