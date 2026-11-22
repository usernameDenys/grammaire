/* eslint-disable */
// Further reading for each topic of the French map, keyed by topic id: [title, url].
// Shared by every native language: the sources themselves are in French.
// Le Conjugueur (Le Figaro) for tenses and moods, the Le Robert language guide for grammar
// and punctuation, Projet Voltaire for spelling traps; a French Wikipedia article is appended
// as a further link where one fits (see WIKI below).
// O1, S3 and N5 have no fitting page on those three sites and keep FLE lessons instead.

const C = "https://leconjugueur.lefigaro.fr/regle/conjugaison/";
const R = "https://dictionnaire.lerobert.com/guide/";
const V = "https://www.projet-voltaire.fr/regles-orthographe/";
const F = "https://www.podcastfrancaisfacile.com/";
const P = "https://www.lepointdufle.net/p/";

export const SOURCES = {
  V1: [
    ["Le présent de l'indicatif", C + "present_indicatif.html"],
    ["Verbes du 1er groupe", R + "verbes-du-1er-groupe"],
    ["Verbes du 3e groupe", R + "verbes-du-3e-groupe"],
  ],
  V2: [
    ["Le passé composé de l'indicatif", C + "passe_compose_indicatif.html"],
    ["Accord du participe passé : la question de l'auxiliaire", R + "accord-du-participe-passe-la-question-de-l-auxiliaire"],
    ["Accord du participe passé employé avec l'auxiliaire être", R + "accord-du-participe-passe-employe-avec-l-auxiliaire-etre"],
  ],
  V3: [
    ["L'imparfait de l'indicatif", C + "imparfait_indicatif.html"],
    ["Aspect accompli, aspect non accompli", R + "aspect-accompli-aspect-non-accompli"],
  ],
  V4: [
    ["Le plus-que-parfait de l'indicatif", C + "plus-que-parfait_indicatif.html"],
  ],
  V5: [
    ["Le passé simple de l'indicatif", C + "passe_simple_indicatif.html"],
  ],
  M1: [
    ["Le présent de l'impératif", C + "present_imperatif.html"],
    ["Impératif", R + "imperatif"],
    ["« Dis-le-lui » : trait d'union et verbe à l'impératif", V + "dis-lui-trait-d-union-verbe-imperatif/"],
  ],
  M2: [
    ["Le futur simple de l'indicatif", C + "futur_simple_indicatif.html"],
    ["Périphrases verbales : futur proche, passé proche", R + "periphrases-verbales-futur-proche-passe-proche-action-en-cours"],
    ["« Je conclurai » ou « je concluerai » ?", V + "je-concluerai-ou-je-conclurai-je-concluerais-ou-je-conclurais/"],
  ],
  M3: [
    ["Le présent du conditionnel", C + "present_conditionnel.html"],
    ["Conditionnel", R + "conditionnel"],
    ["« Je ferai » ou « je ferais » ?", V + "je-ferai-ou-je-ferais/"],
  ],
  M4: [
    ["Le présent du subjonctif", C + "present_subjonctif.html"],
    ["Subjonctif", R + "subjonctif"],
    ["« Bien que », « pour que »… toujours avec le subjonctif", V + "bien-que-pour-que-subjonctif/"],
  ],
  M5: [
    ["Discours indirect", R + "discours-indirect"],
    ["Concordance des temps (subordonnée à l'indicatif ou au conditionnel)", R + "concordance-des-temps-entre-le-verbe-de-la-proposition-principale-et-le-verbe-d-une-subordonnee-a-l-indicatif-ou-au-conditionnel"],
    ["Interrogation indirecte", R + "interrogation-indirecte"],
  ],
  N1: [
    ["Articles", R + "articles"],
    ["Noms dénombrables, noms indénombrables", R + "noms-denombrables-noms-indenombrables"],
  ],
  N2: [
    ["Pluriel des noms communs", R + "pluriel-des-noms-communs"],
    ["Genre masculin, genre féminin", R + "genre-masculin-genre-feminin"],
  ],
  N3: [
    ["Féminin des adjectifs", R + "feminin-des-adjectifs"],
    ["Pluriel des adjectifs", R + "pluriel-des-adjectifs"],
    ["Adjectif épithète liée", R + "adjectif-epithete-liee"],
  ],
  N4: [
    ["Comparatif et superlatif", R + "comparatif-et-superlatif"],
    ["« Il faut mieux » ou « il vaut mieux » ?", V + "il-faut-mieux-ou-il-vaut-mieux/"],
  ],
  N5: [
    ["La nominalisation : du verbe au nom", F + "cours/nominalisation-verbe-nom.html"],
    ["La nominalisation : de l'adjectif au nom", F + "cours/nominalisation-adjectif-nom.html"],
  ],
  P1: [
    ["Pronoms personnels", R + "pronoms-personnels"],
    ["Qu'est-ce que le COD ?", R + "qu-est-ce-que-le-cod"],
    ["Qu'est-ce que le COI ?", R + "qu-est-ce-que-le-coi"],
  ],
  P2: [
    ["Pronoms adverbiaux (en, y)", R + "pronoms-adverbiaux"],
  ],
  P3: [
    ["Pronoms relatifs", R + "pronoms-relatifs"],
    ["« C'est de cela qu'il s'agit » ou « dont il s'agit » ?", V + "qu-il-s-agit-dont-il-s-agit/"],
  ],
  P4: [
    ["Place du COD", R + "place-du-cod"],
    ["Place du COI", R + "place-du-coi"],
  ],
  P5: [
    ["Pronoms relatifs", R + "pronoms-relatifs"],
  ],
  O1: [
    ["Homonymes grammaticaux : cours et exercices", P + "homonymes.htm"],
    ["Ne pas confondre !", P + "nepasconfondre.htm"],
  ],
  O2: [
    ["« Ces » ou « ses » ?", V + "ces-ou-ses/"],
    ["« Ce » ou « se » ?", V + "ce-ou-se/"],
  ],
  O3: [
    ["« Employer » ou « employé » ?", V + "employer-ou-employe/"],
    ["« Vous parler » ou « vous parlez » ?", V + "vous-parler-ou-vous-parlez/"],
    ["Le participe passé", C + "participe_passe.html"],
  ],
  O4: [
    ["Accord du participe passé employé avec l'auxiliaire avoir", R + "accord-du-participe-passe-employe-avec-l-auxiliaire-avoir"],
    ["Accord du participe passé avec que", R + "accord-du-participe-passe-avec-que"],
  ],
  O5: [
    ["Verbes pronominaux", R + "verbes-pronominaux"],
    ["« Leur » ou « leurs » ?", V + "leur-ou-leurs/"],
    ["Bien utiliser « tout » adverbe", V + "bien-utiliser-tout-adverbe/"],
  ],
  S1: [
    ["Adverbes de négation", R + "adverbes-de-negation"],
    ["Interrogation directe", R + "interrogation-directe"],
  ],
  S2: [
    ["Ponctuation et espace", R + "ponctuation-et-espace"],
    ["Guillemets", R + "guillemets"],
  ],
  S3: [
    ["Connecteurs de progression logique du texte", F + "cours/connecteurs-de-progression-logique-du-texte.html"],
    ["Connecteurs logiques d'opposition", F + "grammaire/connecteurs-logiques-dopposition.html"],
    ["Relations logiques : cours et exercices", P + "relationslogiques.htm"],
  ],
  S4: [
    ["Concordance des temps avec si", R + "concordance-des-temps-entre-le-verbe-de-la-proposition-principale-et-le-verbe-d-une-subordonnee-introduite-par-si"],
    ["« S'il neige, je prendrai » ou « je prendrais » ?", V + "s-il-neige-je-prendrai-mes-skis-ou-s-il-neige-je-prendrais-mes-skis/"],
  ],
  S5: [
    ["Le gérondif présent", C + "present_gerondif.html"],
    ["Participe présent", R + "participe-present"],
    ["C'est… qui, c'est… que", R + "c-est-qui-que"],
  ],
};

// Third link: a French Wikipedia article, only where one covers the topic itself.
// No article for O1, O2, O3 (homophones, é/er/ez) and S3 (connectors): Wikipedia has none on point.
const WIKI = {
  V1: "Indicatif présent en français",
  V2: "Passé composé en français",
  V3: "Imparfait de l'indicatif en français",
  V4: "Indicatif plus-que-parfait en français",
  V5: "Passé simple en français",
  M1: "Impératif (grammaire)",
  M2: "Futur simple en français",
  M3: "Conditionnel en français",
  M4: "Subjonctif en français",
  M5: "Discours rapporté",
  N1: "Article partitif",
  N2: "Morphologie du nom en français",
  N3: "Morphologie de l'adjectif en français",
  N4: "Degré de comparaison",
  N5: "Substantivation",
  P1: "Syntaxe du pronom personnel en français",
  P2: "Syntaxe du pronom personnel en français",
  P3: "Pronom relatif en français",
  P4: "Syntaxe du pronom personnel en français",
  P5: "Pronom relatif en français",
  O4: "Accord du participe passé en français",
  O5: "Accord du participe passé en français",
  S1: "Négation en français",
  S2: "Espace insécable",
  S4: "Phrase conditionnelle",
  S5: "Gérondif",
};
for (const [id, title] of Object.entries(WIKI)) {
  SOURCES[id].push([
    title,
    "https://fr.wikipedia.org/wiki/" +
      encodeURIComponent(title.replace(/ /g, "_")),
  ]);
}
