import type { Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { LANGS, isLang } from "@/lib/i18n/config";

// Root layout: one per interface language, so <html lang> is correct in the static HTML.

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((native) => ({ native }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#141418" },
  ],
};

// Applies the saved theme before first paint to avoid a light/dark flash.
const themeScript = `try{var t=localStorage.getItem("frmap-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

const FONTS =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Hanken+Grotesk:wght@400;500;600;700&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&family=JetBrains+Mono:wght@400;500&display=swap";

export default async function RootLayout({ children, params }: LayoutProps<"/[native]">) {
  const { native } = await params;
  if (!isLang(native)) notFound();
  return (
    <html lang={native} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
