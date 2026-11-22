// Grammar map content per language pair (native → target).
// Each map ships its topics/explanations/exercises (MapContent), a glossary (HTML)
// and the page copy that depends on the target language (MapCopy).

import type { Lang } from "@/lib/i18n/config";
import { content as frForUk } from "./fr/uk";
import { content as frForFr } from "./fr/fr";
import { content as frForEn } from "./fr/en";
import { glossaryHtml as frGlossaryUk } from "./fr/glossary.uk";
import { glossaryHtml as frGlossaryFr } from "./fr/glossary.fr";
import { glossaryHtml as frGlossaryEn } from "./fr/glossary.en";
import { copyUk as frCopyUk, copyFr as frCopyFr, copyEn as frCopyEn } from "./fr/copy";
import { content as enForUk } from "./en/uk";
import { content as enForFr } from "./en/fr";
import { content as enForEn } from "./en/en";
import { glossaryHtml as enGlossaryUk } from "./en/glossary.uk";
import { glossaryHtml as enGlossaryFr } from "./en/glossary.fr";
import { glossaryHtml as enGlossaryEn } from "./en/glossary.en";
import { copyUk as enCopyUk, copyFr as enCopyFr, copyEn as enCopyEn } from "./en/copy";
import { content as ukForEn } from "./uk/en";
import { content as ukForFr } from "./uk/fr";
import { glossaryHtml as ukGlossaryEn } from "./uk/glossary.en";
import { glossaryHtml as ukGlossaryFr } from "./uk/glossary.fr";
import { copyEn as ukCopyEn, copyFr as ukCopyFr } from "./uk/copy";

/** A map column (grammar section). `fr` is its name in the target language (historical key). */
type Section = { fr: string; gloss: string; c: string };
type Phase = { n: number; name: string; goal: string; task: string };
// Shapes are written loosely (arrays, not tuples) because they are inferred from plain JS files.
/** [question, options, index of the right option, explanation] */
type Quiz = (string | number | string[])[];
/** [wrong sentence, corrected sentence, hint] */
type Fix = string[];
/** A topic. `fr` is its short name in the target language (historical key). */
type Topic = {
  id: string; d: string; p: number; fr: string; gloss: string; t: string; s: string;
  /** rules (cheat sheet); e: [example, translation]; x: [wrong, right, why] */
  r: string[]; e: string[][]; x: string[]; q: Quiz[]; pre: string[];
};

export type MapContent = {
  DOM: Record<string, Section>;
  PHASES: Phase[];
  T: Topic[];
  EX: Record<string, { q: Quiz[]; c: Fix[] }>;
  /** detailed explanation per topic, in the small markup described in content files */
  LONG: Record<string, string>;
  /** why topic B builds on topic A, keyed "B<A" */
  WHY: Record<string, string>;
  /** further reading per topic: [title, url] */
  SOURCES: Record<string, string[][]>;
  /** recommended order of all topics */
  ROUTE: string[];
  /** topics whose fix-the-mistake answers also check spacing */
  STRICT: string[];
  /** localStorage key prefix, one per target language */
  STORE: string;
};

export type MapCopy = {
  badge: string;
  /** who the map is for and where to start from zero; shown under the hero text */
  audienceHtml: string;
  titleHtml: string;
  glossSub: string;
  mapHint: string;
  weekItemsHtml: string[];
  practiceTitle: string;
  practice: { name: string; url: string; desc: string }[];
};

export type MapBundle = { content: MapContent; glossaryHtml: string; copy: MapCopy };

const MAPS: Partial<Record<`${Lang}-${Lang}`, MapBundle>> = {
  "uk-fr": { content: frForUk, glossaryHtml: frGlossaryUk, copy: frCopyUk },
  "fr-fr": { content: frForFr, glossaryHtml: frGlossaryFr, copy: frCopyFr },
  "uk-en": { content: enForUk, glossaryHtml: enGlossaryUk, copy: enCopyUk },
  "fr-en": { content: enForFr, glossaryHtml: enGlossaryFr, copy: enCopyFr },
  "en-fr": { content: frForEn, glossaryHtml: frGlossaryEn, copy: frCopyEn },
  "en-en": { content: enForEn, glossaryHtml: enGlossaryEn, copy: enCopyEn },
  "en-uk": { content: ukForEn, glossaryHtml: ukGlossaryEn, copy: ukCopyEn },
  "fr-uk": { content: ukForFr, glossaryHtml: ukGlossaryFr, copy: ukCopyFr },
};

export const getMap = (native: Lang, target: Lang): MapBundle | null => MAPS[`${native}-${target}`] ?? null;
