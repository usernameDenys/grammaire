# Grammar Maps

Interactive grammar maps for language learners. The user picks their **native language**
(the whole interface switches to it) and the **language whose grammar they want to learn**.

Supported languages: Ukrainian (`uk`), English (`en`), French (`fr`).
Grammar content is written for a specific native language, so maps exist per language pair.
Working map: Ukrainian → French (`/uk/fr`). Every other pair shows a "coming soon" page
(`AVAILABLE_PAIRS` in `lib/i18n/config.ts`).
Code, comments and docs are in English.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routing

- `/{native}/{target}` — e.g. `/uk/fr` (Ukrainian interface, French grammar), `/en/fr`, `/fr/en`.
  All 9 pairs are statically generated; unknown languages return 404.
- `/` — redirected by `proxy.ts`. The native (interface) language follows the system language
  (`Accept-Language`, ordered by quality); unsupported systems fall back to English.
  It is stored (cookie `gm-native`) only when the user explicitly picks a language in the menu;
  "Same as system" clears that choice. Opening a link like `/uk/fr` does not override the system language.
  The last opened map is remembered in cookie `gm-target` (default French).
- Switching languages uses plain links (full page load), so the map script starts fresh.

## Structure

- `app/[native]/layout.tsx` — root layout per interface language (`<html lang>`), fonts, theme script
- `app/[native]/[target]/layout.tsx` — site header, footer, language cookie sync
- `app/[native]/[target]/page.tsx` — grammar map, or "coming soon" when the pair has no map yet
- `app/globals.css` — all styles; design tokens follow denys-holenko.com (warm paper, sage accent,
  Bricolage Grotesque / Hanken Grotesk / JetBrains Mono, Literata for French examples), light and dark theme
- `lib/i18n/config.ts` — languages, available pairs, cookies, locales, system-language matching
- `lib/i18n/ui.ts` — interface strings for every native language (UI only, no grammar content)
- `components/SiteHeader.tsx` — sticky header: in-page navigation, language switch (`UK → FR`),
  light/dark theme switch (saved in `localStorage` as `frmap-theme`)
- `components/SiteFooter.tsx` — footer with author info and links to denys-holenko.com
- `components/GrammarMap.tsx` + `components/markup.ts` — map page markup built from the dictionary
- `components/ComingSoon.tsx` — placeholder for maps without content
- `lib/grammar-app.js` — map logic (SVG map, topic panel, exercises, plan, timer); receives UI strings
  from the dictionary. It still contains the French map content (topics, explanations, exercises,
  in Ukrainian). Progress is stored in `localStorage` via the `Store` object.
- `content/fr/glossary.uk.ts` — glossary of terms for the French map (in Ukrainian)

## Content status

The French map content (topics, explanations, exercises, stage names, glossary) is in Ukrainian
and will be reworked; it is not translated. Interface strings for English and French exist
(`lib/i18n/ui.ts`) and are used by the header, footer and "coming soon" pages, and will be used by
future maps.
