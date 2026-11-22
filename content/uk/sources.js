/* eslint-disable */
// Further reading for each topic of the Ukrainian map, keyed by topic id: [title, url].
// Shared by every native language. Ukrainian Lessons explains grammar in English for learners;
// the 2019 spelling code (Український правопис) and Ukrainian Wikipedia are the references.

const L = "https://www.ukrainianlessons.com/";
const P = "https://2019.pravopys.net/sections/";
const W = "https://uk.wikipedia.org/wiki/";
const w = (title) => W + encodeURIComponent(title.replace(/ /g, "_"));

export const SOURCES = {
  V1: [
    ["Ukrainian tenses", L + "ukrainian-tenses/"],
    ["Дієвідміна (Вікіпедія)", w("Дієвідміна")],
  ],
  V2: [
    ["Past tense in Ukrainian", L + "grammar-past-tense/"],
    ["Future tense in Ukrainian", L + "grammar-future/"],
  ],
  V3: [
    ["Verb aspect in Ukrainian: the differences", L + "verb-aspect-in-ukrainian-differences/"],
    ["Perfective verbs", L + "perfective-verbs/"],
  ],
  V4: [
    ["Reflexive verbs", L + "reflexive-verbs/"],
  ],
  V5: [
    ["Adjectival participles", L + "adjectival-participle/"],
    ["Дієприслівник (Вікіпедія)", w("Дієприслівник")],
  ],
  M1: [
    ["Наказовий спосіб (Вікіпедія)", w("Наказовий спосіб")],
  ],
  M2: [
    ["Verbs of motion", L + "motion/"],
    ["Transportation in Ukrainian", L + "transportation-ukrainian/"],
  ],
  M3: [
    ["Ukrainian verb prefixes", L + "ukrainian-verb-prefixes/"],
  ],
  M4: [
    ["Умовний спосіб (Вікіпедія)", w("Умовний спосіб")],
  ],
  M5: [
    ["Impersonal expressions", L + "impersonal-expressions/"],
  ],
  N1: [
    ["Noun genders in Ukrainian", L + "noun-genders-in-ukrainian/"],
    ["Plural nouns", L + "grammar-plural-nouns/"],
  ],
  N2: [
    ["Location and destination prepositions", L + "location-destination-prepositions/"],
    ["Prepositions у and на", L + "prepositions-u-na/"],
    ["Accusative case", L + "accusativecase/"],
  ],
  N3: [
    ["Genitive case", L + "genitive-case/"],
  ],
  N4: [
    ["Ukrainian cases chart", L + "ukrainian-cases-chart/"],
    ["Орудний відмінок (Вікіпедія)", w("Орудний відмінок")],
  ],
  N5: [
    ["Introduction to Ukrainian cases", L + "intro-cases/"],
    ["Давальний відмінок (Вікіпедія)", w("Давальний відмінок")],
  ],
  P1: [
    ["Personal pronouns", L + "personal-pronouns/"],
    ["Possessive pronouns", L + "grammar-possessive-pronouns/"],
  ],
  P2: [
    ["Adjectives and adverbs", L + "adjectives-and-adverbs/"],
  ],
  P3: [
    ["Ukrainian personal pronouns in cases", L + "ukrainian-personal-pronouns/"],
  ],
  P4: [
    ["Comparison of adjectives and adverbs", L + "grammar-comparison/"],
    ["§20. Зміни приголосних у вищому ступені порівняння", P + "20/"],
  ],
  P5: [
    ["The reflexive possessive pronoun свій", L + "reflexive-possessive-pronoun/"],
    ["Pronouns весь, всякий, кожен", L + "pronouns-ves-vsiakyi-kozhen/"],
  ],
  O1: [
    ["The Ukrainian alphabet", L + "ukrainian-alphabet/"],
    ["Г and Ґ", L + "h-g/"],
    ["§7. Апостроф", P + "7/"],
  ],
  O2: [
    ["Euphony in Ukrainian", L + "euphony-in-ukrainian/"],
    ["§23. У та В", P + "23/"],
    ["§25. З, ІЗ, ЗІ", P + "25/"],
  ],
  O3: [
    ["§9. Чергування О — І, Е — І", P + "9/"],
    ["§12. Чергування Г, К, Х із З, Ц, С", P + "12/"],
  ],
  O4: [
    ["Кличний відмінок (Вікіпедія)", w("Кличний відмінок")],
  ],
  O5: [
    ["§30. Подвоєння букв", P + "30/"],
    ["§26. Коли пишемо Ь", P + "26/"],
  ],
  S1: [
    ["Negation in Ukrainian", L + "negation-in-ukrainian/"],
    ["Question words", L + "question-words/"],
  ],
  S2: [
    ["Complex sentences", L + "complexsentences/"],
    ["тому and тому що", L + "tomu-and-tomu-shcho/"],
  ],
  S3: [
    ["Nouns after numbers", L + "nouns-after-numbers/"],
    ["Telling the time", L + "grammar-time/"],
    ["Dates in Ukrainian", L + "dates-in-ukrainian/"],
  ],
  S4: [
    ["“I have” in Ukrainian", L + "i-have/"],
    ["Impersonal expressions", L + "impersonal-expressions/"],
  ],
  S5: [
    ["Ukrainian punctuation", L + "ukrainian-punctuation/"],
    ["Ukrainian and Russian: the differences", L + "ukrainian-and-russian-languages/"],
  ],
};
