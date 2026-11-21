// Grammar map content per language pair (native → target).
// Each map ships its topics/explanations/exercises (MapContent) and a glossary (HTML).

import type { Lang } from "@/lib/i18n/config";
import { content as frForUk } from "./fr/uk";
import { glossaryHtml as frGlossaryUk } from "./fr/glossary.uk";
import { content as frForFr } from "./fr/fr";
import { glossaryHtml as frGlossaryFr } from "./fr/glossary.fr";

export type MapContent = typeof frForUk;
export type MapBundle = { content: MapContent; glossaryHtml: string };

const MAPS: Partial<Record<`${Lang}-${Lang}`, MapBundle>> = {
  "uk-fr": { content: frForUk, glossaryHtml: frGlossaryUk },
  "fr-fr": { content: frForFr, glossaryHtml: frGlossaryFr },
};

export const getMap = (native: Lang, target: Lang): MapBundle | null => MAPS[`${native}-${target}`] ?? null;
