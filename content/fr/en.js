/* eslint-disable */
// French grammar map content written for English speakers (native "en", target "fr").
// Same topics, examples and exercises as uk.js; explanations compare French with English.
// Field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Indicatif",gloss:"present and past",c:"--l-v"},
  M:{fr:"Futur & modes",gloss:"future and moods",c:"--l-m"},
  N:{fr:"Groupe nominal",gloss:"noun phrase",c:"--l-n"},
  P:{fr:"Pronoms",gloss:"pronouns",c:"--l-p"},
  O:{fr:"Orthographe",gloss:"spelling",c:"--l-o"},
  S:{fr:"Phrase",gloss:"sentence",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Foundations",goal:"Simple sentences without mistakes: correct présent endings, articles, object pronouns and the first homophones.",task:"Describe your typical day in 10–12 sentences (présent). Then underline every a/à, et/est, son/sont and check each one with the substitution test."},
  {n:2,name:"Storytelling",goal:"Talk about the past and the future: passé composé, futur, y/en, French punctuation.",task:"A letter to a friend about last weekend and your plans for the next one (150 words). Spaces before : ; ! ? and « » quotation marks."},
  {n:3,name:"Description",goal:"Longer sentences: imparfait vs passé composé, qui/que/où/dont, linking words, the [e] sound in writing.",task:"A childhood memory (200 words): imparfait for the background, passé composé for the events, at least two dont and three linking words."},
  {n:4,name:"Nuance",goal:"Subjonctif, si clauses, past participle agreement with avoir, double pronouns.",task:"A formal request letter (200 words): polite conditionnel, 3 sentences with il faut que / pour que / bien que, one sentence with si."},
  {n:5,name:"Style",goal:"Written French: reported speech, auquel/duquel, nominalisation, gérondif, tricky agreements.",task:"A 300-word argumentative essay plus a short conversation retold in reported speech. Check every participe passé."}
];

const T = [
/* ---------- V ---------- */
{id:"V1",d:"V",p:1,fr:"Présent",gloss:"present tense",t:"Le présent de l'indicatif",
 s:"The basis of all writing. Many forms sound the same but are spelled differently, so this is where most written mistakes happen.",
 r:["Group 1 (-er): <b>-e, -es, -e, -ons, -ez, -ent</b>. The -ent of ils/elles is silent but always written.","Group 2 (finir): <b>-is, -is, -it, -issons, -issez, -issent</b>.","Group 3: mostly <b>-s, -s, -t</b>. Verbs in -dre keep the d: il prend, il répond.","pouvoir, vouloir, valoir: <b>-x, -x, -t</b> (je peux, tu veux, il veut)."],
 e:[["Ils parlent trop vite.","They speak too fast."],["Elle finit son travail à six heures.","She finishes work at six."],["Nous commençons, nous mangeons.","ç and e before -ons keep the soft sound."]],
 x:["Il prends le train.","Il prend le train.","3rd person singular: -t or -d, never -s."],
 q:[["Tu ___ (vouloir) venir ?",["veux","veut","veus"],0,"vouloir and pouvoir end in -x with je and tu."],["Ils ___ (finir) tard.",["finent","finissent","finisent"],1,"Group 2 adds -iss- in the plural."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Passé composé",gloss:"compound past",t:"Le passé composé",
 s:"The main tense for telling what happened. Two written difficulties: choosing avoir or être, and the right form of the past participle.",
 r:["Most verbs take <b>avoir</b>: j'ai mangé, elle a pris.","<b>être</b> goes with verbs of movement and change of state (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir, revenir…) and with all reflexive verbs (se lever).","With être, the participle agrees with the subject: elle est partie, ils sont venus.","Participle: -er → -é, -ir → -i; group 3 must be learned: pris, mis, fait, dit, écrit, vu, lu, su, pu, eu, été."],
 e:[["Elle est arrivée hier soir.","She arrived last night."],["Nous avons pris le train de 8 h.","We took the 8 o'clock train."],["Ils se sont levés tôt.","They got up early."]],
 x:["J'ai allé au cinéma.","Je suis allé(e) au cinéma.","aller is a verb of movement, so it takes être."],
 q:[["Elles ___ en retard.",["ont arrivé","sont arrivées","sont arrivé"],1,"arriver takes être, so the participle agrees: feminine plural."],["J'ai ___ une lettre.",["écris","écrit","écrite"],1,"The participle of écrire is écrit. The direct object comes after the verb, so no agreement."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Imparfait",gloss:"background vs event",t:"Imparfait ou passé composé ?",
 s:"Imparfait is the background, description and habit. Passé composé is the event that happened. In writing there are also the endings: -ais, -ais, -ait, -ions, -iez, -aient.",
 r:["Form: the nous stem of the présent (nous finiss-ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Exception: être → j'étais.","Imparfait: description (il faisait beau), state, past habit (chaque été, nous allions…), action in progress.","Passé composé: a specific completed event, often with soudain, un jour, hier, trois fois.","Together: <i>Je lisais quand le téléphone a sonné.</i>"],
 e:[["Quand j'étais petit, je jouais au foot tous les jours.","When I was little, I played football every day."],["Il pleuvait, alors nous sommes restés à la maison.","It was raining, so we stayed at home."]],
 x:["Hier, il a fait beau et je me promenais trois heures.","Hier, il faisait beau et je me suis promené trois heures.","The weather is background (imparfait); a walk with a set duration is an event (passé composé)."],
 q:[["Je ___ la télé quand tu as appelé.",["ai regardé","regardais","regardait"],1,"An action in progress that was interrupted → imparfait; je → -ais."],["Ils ___ souvent à la mer.",["sont allés","allaient","allait"],1,"souvent = habit, so imparfait; ils → -aient."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Plus-que-parfait",gloss:"past perfect",t:"Le plus-que-parfait",
 s:"The past before the past: an action that happened before another past action. It works like the English past perfect, but French writing uses it more strictly.",
 r:["avoir or être in the imparfait + participle: j'avais fini, elle était partie.","Same rules for choosing avoir/être and for agreement as in the passé composé.","Typical markers: déjà, parce que, quand…, ce jour-là."],
 e:[["Quand je suis arrivé, le film avait déjà commencé.","When I arrived, the film had already started."],["Elle m'a dit qu'elle était déjà venue.","She told me she had already come."]],
 x:["Quand je suis arrivé, ils sont déjà partis.","Quand je suis arrivé, ils étaient déjà partis.","They left before I arrived → plus-que-parfait."],
 q:[["Il a réussi parce qu'il ___ beaucoup.",["a travaillé","avait travaillé","travaillait"],1,"The work came before the success."],["Elle était fatiguée : elle ___ toute la nuit.",["avait dansé","était dansée","a dansée"],0,"danser takes avoir and has no direct object, so no agreement."]],pre:["V3"]},
{id:"V5",d:"V",p:5,fr:"Passé simple",gloss:"literary past",t:"Le passé simple",
 s:"The tense of literature and history books. You don't need to write it, but you need to recognise it when reading.",
 r:["-er: <b>-ai, -as, -a, -âmes, -âtes, -èrent</b> (il parla).","-ir / -re: <b>-is, -is, -it, -îmes, -îtes, -irent</b> (il finit, il prit).","Many others in -us: il fut, il eut, il put, il voulut; venir → il vint.","Trap: il finit is both présent and passé simple; context tells you which."],
 e:[["Il ouvrit la porte et sortit.","He opened the door and went out."],["Ils furent très surpris.","They were very surprised."]],
 x:["Hier, je mangeai une pizza avec Paul.","Hier, j'ai mangé une pizza avec Paul.","In a letter or a message, use the passé composé. The passé simple is only for literary narration."],
 q:[["« Ils vinrent » is:",["venir, passé simple","voir, passé simple","vendre, présent"],0,"venir → je vins, il vint, ils vinrent."],["Passé simple of aller (il):",["il alla","il allait","il allat"],0,"aller behaves like an -er verb: il alla."]],pre:["V4"]},
/* ---------- M ---------- */
{id:"M1",d:"M",p:1,fr:"Impératif",gloss:"imperative",t:"L'impératif",
 s:"Orders, advice, instructions. The main written trap: -er verbs lose their -s.",
 r:["Three forms without a pronoun: Parle ! Parlons ! Parlez !","-er verbs (and aller, ouvrir, offrir) in the tu form have <b>no -s</b>: Mange ! Va !","But the -s comes back before y and en: Vas-y ! Manges-en !","Irregular: sois/soyez, aie/ayez, sache/sachez, veuillez."],
 e:[["Ferme la porte, s'il te plaît.","Close the door, please."],["Ne t'inquiète pas !","Don't worry!"],["Veuillez trouver ci-joint mon CV.","Formal letter phrase: “please find my CV attached”."]],
 x:["Regardes ce film !","Regarde ce film !","An -er verb: no -s in the tu imperative."],
 q:[["___ au lit ! (aller, tu)",["Vas","Va","Allez"],1,"aller in the imperative: Va !"],["Which is correct?",["Parle-en","Parles-en"],1,"Before en and y, add -s for the sound."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Futur",gloss:"future",t:"Futur simple et futur proche",
 s:"Two ways to talk about the future. The futur simple is built on the infinitive, so the key is learning the irregular stems.",
 r:["Futur proche: aller + infinitive (je vais partir), spoken and near, like “going to”.","Futur simple: infinitive + <b>-ai, -as, -a, -ons, -ez, -ont</b>. Verbs in -re drop the e: prendre → je prendrai.","Irregular stems: ser-, aur-, ir-, fer-, pourr-, voudr-, devr-, viendr-, verr-, saur-, faudr-.","After quand about the future, use the futur too: <i>Quand je serai à Paris, je t'appellerai.</i>"],
 e:[["Demain, il fera beau.","The weather will be nice tomorrow."],["Quand tu auras le temps, tu m'écriras.","When you have time, write to me."]],
 x:["Quand j'arrive à Paris, je t'appellerai.","Quand j'arriverai à Paris, je t'appellerai.","Unlike English (“when I arrive”), French uses the futur after quand when talking about the future."],
 q:[["Nous ___ (voir) demain.",["voirons","verrons","verons"],1,"Irregular stem verr-."],["Which spelling is correct?",["J'appellerai","J'appelerai"],0,"appeler doubles the l: j'appelle → j'appellerai."]],pre:["V1"]},
{id:"M3",d:"M",p:3,fr:"Conditionnel",gloss:"conditional",t:"Le conditionnel présent",
 s:"Politeness, wishes, hypotheses — the French “would”. In writing, never confuse it with the futur: -rai and -rais sound almost the same.",
 r:["Futur stem + imparfait endings: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.","Politeness: Je voudrais…, Pourriez-vous… ?","Advice: Tu devrais dormir plus.","Test for je: switch to nous. nous ferons (futur) → je ferai; nous ferions (cond.) → je ferais."],
 e:[["J'aimerais vous rencontrer.","I would like to meet you."],["Pourriez-vous m'envoyer le document ?","Could you send me the document?"]],
 x:["Je voudrai un café, s'il vous plaît.","Je voudrais un café, s'il vous plaît.","A polite request is conditionnel, with -s."],
 q:[["Si j'avais le temps, je ___ plus.",["lirai","lirais","lisais"],1,"si + imparfait → conditionnel."],["Demain je te ___ sans faute.",["téléphonerai","téléphonerais"],0,"A definite future action → futur. Test: nous téléphonerons."]],pre:["M2","V3"]},
{id:"M4",d:"M",p:4,fr:"Subjonctif",gloss:"subjunctive",t:"Le subjonctif présent",
 s:"The mood of wishes, necessity, emotion and doubt. Almost gone from English, but in written French it is everywhere.",
 r:["The ils stem of the présent (ils finiss-ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>.","Triggers: il faut que, vouloir que, pour que, bien que, avant que, à moins que, être content que, douter que.","Irregular: être (que je sois), avoir (que j'aie), aller (que j'aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache).","Not after espérer que, penser que (affirmative) or après que: those take the indicative."],
 e:[["Il faut que tu viennes.","You have to come."],["Bien qu'il soit tard, je continue.","Although it's late, I'm carrying on."],["Je veux qu'elle fasse attention.","I want her to be careful."]],
 x:["Il faut que je vais à la banque.","Il faut que j'aille à la banque.","After il faut que → subjonctif."],
 q:[["Je suis content que tu ___ là.",["es","sois","soit"],1,"Emotion → subjonctif; tu → sois."],["J'espère qu'il ___ beau demain.",["fasse","fera"],1,"espérer que takes the indicative."]],pre:["M3","V1"]},
{id:"M5",d:"M",p:5,fr:"Concordance",gloss:"reported speech",t:"Concordance des temps et discours indirect",
 s:"How to report what someone said in the past. Essential for letters, reports and essays.",
 r:["If the main verb is in the past (il a dit que…), tenses shift back:","présent → imparfait; passé composé → plus-que-parfait; futur → conditionnel.","Time words too: demain → le lendemain, hier → la veille, ici → là.","Questions: Est-ce que tu viens ? → Il m'a demandé <b>si</b> je venais. Qu'est-ce que → <b>ce que</b>."],
 e:[["Elle a dit : « Je suis fatiguée. » → Elle a dit qu'elle était fatiguée.","Direct speech → reported speech."],["Il m'a demandé ce que je ferais le lendemain.","He asked me what I would do the next day."]],
 x:["Il m'a demandé qu'est-ce que je voulais.","Il m'a demandé ce que je voulais.","In an indirect question, qu'est-ce que becomes ce que."],
 q:[["« Je viendrai. » → Il a dit qu'il ___.",["viendra","viendrait","venait"],1,"futur → conditionnel."],["« Tu as fini ? » → Elle m'a demandé ___ j'avais fini.",["si","que","est-ce que"],0,"A yes/no question is introduced with si."]],pre:["M4","V4"]},
/* ---------- N ---------- */
{id:"N1",d:"N",p:1,fr:"Articles",gloss:"articles",t:"Les articles : le, un, du",
 s:"English has articles too, but French uses them more: almost every noun needs one, including general statements where English has none.",
 r:["Definite le/la/l'/les: something known, or a thing in general (J'aime le café = I like coffee).","Indefinite un/une/des: one of many.","Partitive du/de la/de l': an unspecified amount, often “some” or nothing in English (Je bois du café).","After a negative and quantities → <b>de</b>: pas de café, beaucoup de gens. Contractions: à + le = au, de + les = des."],
 e:[["Je mange du pain, mais je n'aime pas le pain blanc.","I eat bread, but I don't like white bread."],["Il n'a pas d'enfants.","He has no children."],["Beaucoup de gens parlent anglais.","Many people speak English."]],
 x:["Je n'ai pas des amis ici.","Je n'ai pas d'amis ici.","After pas, indefinite and partitive articles become de."],
 q:[["Elle ne boit jamais ___ alcool.",["de l'","d'","du"],1,"Negative → de (d' before a vowel)."],["Je vais ___ marché.",["à le","au","du"],1,"à + le = au."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Genre & pluriel",gloss:"gender and plural",t:"Genre et pluriel des noms",
 s:"Every noun has a gender, and most plural endings are silent, so they are easy to lose in writing.",
 r:["Plural: +s; -eau/-eu → <b>-x</b> (bateaux, jeux); -al → <b>-aux</b> (journal → journaux), but bals, festivals.","-ail → -ails, except travail → travaux.","Gender from the ending: -tion, -té, -ure, -ence are usually feminine; -ment, -age, -isme masculine.","Traps: le problème, le système, le musée (masc.); la plage, l'image (fem.)."],
 e:[["Les chevaux et les animaux du village.","The village's horses and animals."],["C'est un nouveau problème.","It's a new problem."]],
 x:["les journals locals","les journaux locaux","-al → -aux in nouns and adjectives alike."],
 q:[["Plural of « un travail »:",["des travails","des travaux"],1,"travail is an exception: travaux."],["Which word is feminine?",["fromage","liberté","message"],1,"-té → feminine."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Adjectifs",gloss:"agreement",t:"Accord et place de l'adjectif",
 s:"Adjectives agree with the noun in gender and number, and most of them come after the noun — the opposite of English.",
 r:["Feminine: +e; -if → -ive, -eux → -euse, -er → -ère, -el → -elle, -en → -enne.","Short common adjectives go before the noun (BAGS): beauty (beau, joli), age (jeune, vieux), goodness (bon, mauvais), size (grand, petit).","beau, nouveau, vieux before a vowel: un bel homme, un vieil ami.","Meaning can change: un grand homme (great) / un homme grand (tall)."],
 e:[["une voiture neuve et chère","a new, expensive car"],["de vieilles maisons blanches","old white houses (de before a plural adjective)"]],
 x:["Elles sont content.","Elles sont contentes.","Agreement: feminine + plural."],
 q:[["une ___ idée (bon)",["bon","bonne","bonnes"],1,"-on → -onne."],["un ___ arbre (vieux)",["vieux","vieil","vieille"],1,"Before a vowel in the masculine: vieil."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Comparaison",gloss:"comparison",t:"Comparatif et superlatif",
 s:"Comparatives and superlatives. The main trap is meilleur vs mieux — “better” has two French translations.",
 r:["plus / moins / aussi + adjective + que: plus grand que.","Superlative: le/la/les plus + adjective; after the noun, the article is repeated: la ville la plus belle.","bon → <b>meilleur</b> (adjective), bien → <b>mieux</b> (adverb).","Quantity: plus de / autant de / moins de + noun."],
 e:[["C'est le meilleur restaurant du quartier.","It's the best restaurant in the area."],["Elle parle mieux que moi.","She speaks better than I do."]],
 x:["Il chante plus bien que moi.","Il chante mieux que moi.","bien → mieux, not plus bien."],
 q:[["Ce gâteau est ___ que l'autre.",["mieux","meilleur","plus bon"],1,"It describes a noun (gâteau) → the adjective meilleur."],["Elle travaille ___ heures que lui.",["autant d'","aussi d'"],0,"With a noun → autant de."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Nominalisation",gloss:"written style",t:"La nominalisation",
 s:"Turning verbs and adjectives into nouns is a hallmark of mature writing in letters, reports and essays.",
 r:["Verb → noun: augmenter → l'augmentation, choisir → le choix, partir → le départ.","Adjective → noun: rapide → la rapidité, fort → la force.","It lets you condense: Parce que les prix ont augmenté → En raison de l'augmentation des prix.","Don't overdo it: one or two per sentence."],
 e:[["Après la publication du rapport, …","After the report was published, …"],["La réduction des coûts est prioritaire.","Cutting costs is the priority."]],
 x:["l'augmentement des prix","l'augmentation des prix","Suffixes can't be guessed: check a dictionary."],
 q:[["choisir → ___",["le choisissement","le choix","la choisie"],1,"choisir → le choix."],["Parce qu'il est parti → ___",["En raison de son départ","En raison de son partir"],0,"partir → le départ."]],pre:["N4","S3"]},
/* ---------- P ---------- */
{id:"P1",d:"P",p:1,fr:"le · lui",gloss:"direct and indirect",t:"Pronoms COD et COI",
 s:"le/la/les replace a direct object, lui/leur an indirect one (with à). The French verb decides, not the English one: “call him” is je lui téléphone.",
 r:["COD (no preposition): voir qqn → je <b>le</b> vois.","COI (à + person): parler à qqn → je <b>lui</b> parle; also téléphoner à, demander à, répondre à.","Position: before the verb (je le vois); in the passé composé, before the auxiliary (je l'ai vu).","With an infinitive: before the infinitive: Je vais le voir."],
 e:[["Tu connais Marie ? — Oui, je la connais.","Do you know Marie? — Yes, I know her."],["J'écris à mes parents → Je leur écris.","I'm writing to my parents → I'm writing to them."]],
 x:["Je le téléphone ce soir.","Je lui téléphone ce soir.","téléphoner À qqn → indirect object, even though English says “call him”."],
 q:[["Tu aides ta sœur ? — Oui, je ___ aide.",["l'","lui"],0,"aider qqn takes a direct object."],["Il répond à ses clients → Il ___ répond.",["les","leur","leurs"],1,"Plural indirect object → leur, never with -s."]],pre:["V1"]},
{id:"P2",d:"P",p:2,fr:"y · en",gloss:"y and en",t:"Les pronoms y et en",
 s:"Two pronouns English doesn't have — the closest are “there” and “some / of it”. Without them, French sentences sound heavy and repetitive.",
 r:["<b>en</b> replaces de + something: J'en veux (du café), J'en viens (de Paris), J'en parle (de ce problème).","en with a quantity: J'en ai trois. Il y en a beaucoup.","<b>y</b> replaces à + a thing or a place: J'y vais. J'y pense (à ce projet).","For people: à → lui/leur; de → de lui / d'elle. Je pense à elle."],
 e:[["Tu as des frères ? — Oui, j'en ai deux.","Do you have brothers? — Yes, I have two."],["Tu vas à Lyon ? — Oui, j'y vais demain.","Are you going to Lyon? — Yes, I'm going tomorrow."]],
 x:["Des frères ? J'ai deux.","Des frères ? J'en ai deux.","A number without a noun always needs en."],
 q:[["Tu t'occupes du dossier ? — Oui, je m'___ occupe.",["y","en"],1,"s'occuper DE → en."],["Tu as réfléchi à ma proposition ? — Oui, j'___ ai réfléchi.",["y","en","lui"],0,"réfléchir À + thing → y."]],pre:["P1","N1"]},
{id:"P3",d:"P",p:3,fr:"qui · que · dont",gloss:"relative pronouns",t:"Pronoms relatifs simples",
 s:"Relative pronouns join short sentences into long ones. Unlike English, French never drops them, and dont is the classic written trap.",
 r:["<b>qui</b> — subject: L'homme qui parle.","<b>que</b> (qu') — direct object: Le livre que je lis (“the book I'm reading” — que can't be left out).","<b>où</b> — place and time: la ville où j'habite, le jour où il est parti.","<b>dont</b> replaces de + …: le livre dont je parle (parler de), la fille dont le père est médecin."],
 e:[["C'est le film dont tout le monde parle.","It's the film everyone is talking about."],["Le jour où je suis arrivé, il pleuvait.","The day I arrived, it was raining."]],
 x:["C'est la chose que j'ai besoin.","C'est la chose dont j'ai besoin.","avoir besoin DE → dont."],
 q:[["La maison ___ je rêve.",["que","dont","où"],1,"rêver DE → dont."],["L'année ___ nous nous sommes rencontrés.",["où","quand","que"],0,"For time, use où, not quand."]],pre:["P2","S1"]},
{id:"P4",d:"P",p:4,fr:"Ordre",gloss:"two pronouns",t:"Double pronoms : l'ordre",
 s:"When a sentence has two pronouns, their order is fixed. In the affirmative imperative it changes.",
 r:["Order: me/te/se/nous/vous → le/la/les → lui/leur → y → en.","Il me le donne. Je le lui donne. Je leur en parle. Il y en a.","Affirmative imperative: verb-le-moi/lui-y-en: Donne-le-moi ! Donne-m'en !","Negative imperative: normal order: Ne me le donne pas."],
 e:[["Tu as montré les photos à Paul ? — Oui, je les lui ai montrées.","Did you show the photos to Paul? — Yes, I showed them to him."],["Envoie-la-moi.","Send it to me."]],
 x:["Je lui le donne.","Je le lui donne.","le/la/les always come before lui/leur."],
 q:[["Il ___ envoie. (le paquet, à moi)",["me le","le me"],0,"me comes before le."],["Donne-___ ! (du pain, à moi)",["m'en","moi-en","en-moi"],0,"moi + en → m'en."]],pre:["P2","M1"]},
{id:"P5",d:"P",p:5,fr:"lequel",gloss:"auquel, duquel",t:"Pronoms relatifs composés",
 s:"Relative pronouns after prepositions: auquel, duquel, sur lequel, pour laquelle. A typical feature of written French — where English often puts the preposition at the end.",
 r:["Preposition + lequel / laquelle / lesquels / lesquelles for things: la table sur laquelle…","à + lequel = <b>auquel</b>, auxquels, auxquelles; à laquelle.","de + lequel = <b>duquel</b> after compound prepositions: près duquel, à côté de laquelle.","For people, qui is more common: la personne à qui je parle."],
 e:[["Le projet auquel je travaille est urgent.","The project I'm working on is urgent."],["La raison pour laquelle je vous écris…","The reason why I'm writing to you…"]],
 x:["La raison pour qu'il est parti…","La raison pour laquelle il est parti…","After a preposition, for a thing → lequel/laquelle."],
 q:[["Les questions ___ tu as répondu.",["auxquelles","auquel","lesquelles"],0,"répondre À + questions (fem. plural) → auxquelles."],["Le parc près ___ j'habite.",["duquel","dont","lequel"],0,"After the compound preposition près de → duquel, not dont."]],pre:["P3"]},
/* ---------- O ---------- */
{id:"O1",d:"O",p:1,fr:"a/à · et/est",gloss:"homophones I",t:"Homophones grammaticaux (1)",
 s:"Words that sound the same but are spelled differently — mistakes even native speakers make. Each pair has a simple substitution test.",
 r:["<b>a</b> (avoir) / <b>à</b> (preposition): replace with avait. Il a faim → il avait faim ✓.","<b>et</b> (and) / <b>est</b> (être): replace with était.","<b>son</b> (his/her) / <b>sont</b> (être): replace with étaient.","<b>on</b> / <b>ont</b> (avoir): replace with avaient. <b>ou</b> (or) / <b>où</b> (where): replace with ou bien."],
 e:[["Il est à Paris et il a froid.","He's in Paris and he's cold."],["Ils ont dit qu'on partait.","They said we were leaving."],["Où vas-tu, à Lyon ou à Nice ?","Where are you going, Lyon or Nice?"]],
 x:["Il à un chien et sa maison et grande.","Il a un chien et sa maison est grande.","Tests: il avait un chien; sa maison était grande."],
 q:[["Ils ___ partis avec ___ frère.",["son / sont","sont / son","sont / sont"],1,"Ils étaient partis → sont; “his brother” → son."],["Tu viens ___ pas ?",["ou","où"],0,"“or not” → ou (ou bien)."]],pre:["V1"]},
{id:"O2",d:"O",p:2,fr:"ces/ses/c'est",gloss:"homophones II",t:"Homophones grammaticaux (2)",
 s:"The second wave of homophones: ces/ses/c'est/s'est/sait, ce/se, la/là/l'a, peu/peut, quel/qu'elle.",
 r:["<b>ces</b> (these) / <b>ses</b> (his/her, plural) / <b>c'est</b> (it is) / <b>s'est</b> (reflexive in the PC) / <b>sait</b> (savoir).","<b>ce</b> + noun or ce que; <b>se</b> before a verb (se laver).","<b>la</b> (article) / <b>là</b> (there) / <b>l'a</b> (→ l'avait).","<b>peu</b> (little) / <b>peut</b> (→ pouvait). <b>quel(le)</b> + noun / <b>qu'elle</b> (que + elle)."],
 e:[["C'est Marie qui s'est trompée.","It's Marie who got it wrong."],["Il sait que ses amis sont là.","He knows his friends are here."]],
 x:["Ses une bonne idée, mais il ses trompé.","C'est une bonne idée, mais il s'est trompé.","“it is” → c'est; se tromper in the PC → s'est."],
 q:[["Elle ___ levée tôt.",["c'est","s'est","sait"],1,"se lever → elle s'est levée."],["Je crois ___ viendra.",["quelle","qu'elle"],1,"que + elle; test: qu'il viendra."]],pre:["O1","P1"]},
{id:"O3",d:"O",p:3,fr:"-é / -er / -ez",gloss:"the [e] sound",t:"é, er, ez, ais, ait ?",
 s:"The [e] sound at the end of a verb can be spelled five ways. The single most common written mistake.",
 r:["After another verb or a preposition: the infinitive <b>-er</b>: je vais manger, pour parler.","After avoir/être: the participle <b>-é(e)(s)</b>: j'ai mangé.","Test: swap in a group 3 verb (vendre / vendu). Je vais vendre → -er; j'ai vendu → -é.","<b>-ez</b> — vous: vous parlez. <b>-ais / -ait</b> — imparfait: je parlais, il parlait."],
 e:[["Il faut acheter du pain ; j'ai oublié d'en acheter hier.","We need to buy bread; I forgot to buy some yesterday."],["Vous allez aimer ce film.","You're going to love this film."]],
 x:["Je vais te téléphoné demain.","Je vais te téléphoner demain.","Test: je vais te vendre → infinitive."],
 q:[["Il a ___ toute la journée.",["travaillé","travailler","travaillez"],0,"After avoir → participle; test: il a vendu."],["Elle veut ___ à Paris.",["habité","habiter","habitait"],1,"After vouloir → infinitive; test: elle veut vendre."]],pre:["V2"]},
{id:"O4",d:"O",p:4,fr:"Accord du PP",gloss:"avoir + object",t:"Accord du participe passé avec avoir",
 s:"The rule that shows real literacy: a participle with avoir agrees with the direct object only if that object comes BEFORE the verb.",
 r:["Object after the verb → no agreement: J'ai acheté des pommes.","Object before the verb (le/la/les, que, combien de, quel…) → agreement: Je les ai achetées. Les pommes que j'ai achetées.","With en → no agreement: Des pommes ? J'en ai acheté.","Method: ask “what?” after the verb and look where the answer is."],
 e:[["La lettre que tu m'as écrite.","The letter you wrote me."],["Quelles villes as-tu visitées ?","Which cities did you visit?"]],
 x:["Les photos que j'ai pris sont belles.","Les photos que j'ai prises sont belles.","que = les photos (fem. plural) and comes before the verb."],
 q:[["Ta robe ? Je l'ai ___ hier.",["vu","vue","vus"],1,"l' = la robe, before the verb → vue."],["J'ai ___ les clés.",["perdu","perdues"],0,"The object comes after the verb → no agreement."]],pre:["O3","P1"]},
{id:"O5",d:"O",p:5,fr:"se · tout · leur",gloss:"tricky agreements",t:"Pronominaux, tout, leur",
 s:"The hardest agreements: reflexive verbs in the passé composé and the chameleon words tout and leur.",
 r:["se + PC: agree if se is the direct object: Elle s'est lavée. If there is an object after the verb, or se is indirect, don't: Elle s'est lavé les mains; Ils se sont parlé.","<b>leur</b> before a verb is a pronoun and never changes: je leur parle. Before a noun it's a possessive: leur maison, leurs enfants.","tout / toute / tous / toutes agree with the noun. tout as an adverb (“quite”) doesn't change, except before a feminine adjective starting with a consonant: elle est toute petite."],
 e:[["Elles se sont téléphoné.","They called each other (téléphoner À)."],["Je leur ai donné leurs cadeaux.","I gave them their presents."]],
 x:["Ils se sont dits bonjour.","Ils se sont dit bonjour.","dire À qqn — se is an indirect object here, so no agreement."],
 q:[["Elle s'est ___ les cheveux.",["coupé","coupée"],0,"The object les cheveux comes after the verb."],["Je ___ ai envoyé ___ billets.",["leur / leurs","leurs / leur","leur / leur"],0,"The pronoun leur never changes; the possessive before a plural is leurs."]],pre:["O4","P4"]},
/* ---------- S ---------- */
{id:"S1",d:"S",p:1,fr:"Négation",gloss:"sentence structure",t:"Phrase simple, négation, question",
 s:"Basic sentence structure. In writing ne is compulsory, and questions are built differently from speech.",
 r:["Negation: ne… pas / jamais / plus / rien / personne. In writing, <b>ne</b> is never dropped.","ne… que = only: Je n'ai que dix euros.","Written questions use inversion: Parlez-vous français ? A-t-il fini ? (-t- between two vowels).","Spoken: Tu viens ? / Est-ce que tu viens ?"],
 e:[["Il ne mange jamais de viande.","He never eats meat."],["Pourquoi a-t-elle refusé ?","Why did she refuse?"]],
 x:["Je sais pas.","Je ne sais pas.","“Je sais pas” is fine in speech, but a mistake in writing."],
 q:[["Correct inversion:",["Parle-t-il anglais ?","Parle-il anglais ?","Parlet-il anglais ?"],0,"Between two vowels → -t-."],["“I only have one brother”:",["Je n'ai qu'un frère.","Je n'ai pas qu'un frère.","J'ai que un frère."],0,"ne… que, and que → qu' before a vowel."]],pre:["V1"]},
{id:"S2",d:"S",p:2,fr:"Ponctuation",gloss:"punctuation",t:"La ponctuation française",
 s:"French punctuation differs from English: spaces before some marks, « » quotation marks, lower-case days and languages.",
 r:["A (non-breaking) space before <b>; : ! ?</b> and inside « quotation marks ».","Quotation marks are « guillemets » with spaces; dialogue often uses a dash —.","As in English, no comma before que, qui, si in most cases: je pense que…","A comma after introductory words (Hier, Cependant,) and before mais."],
 e:[["Il m'a dit : « Viens demain ! »","He told me: “Come tomorrow!”"],["Je pense que tu as raison.","I think you're right."]],
 x:["Je crois, qu'il viendra.","Je crois qu'il viendra.","No comma before que."],
 q:[["Correct:",["Pourquoi ?","Pourquoi?"],0,"French puts a space before ?"],["Where is the comma wrong?",["Je sais, que tu es là.","Hier, il a plu.","Il est fatigué, mais content."],0,"No comma before que."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Connecteurs",gloss:"linking words",t:"Les connecteurs logiques",
 s:"Linking words turn a list of sentences into an argument. Some of them require the subjonctif.",
 r:["Cause: parce que, car, puisque; grâce à (positive), à cause de (negative).","Contrast: mais, cependant, pourtant, alors que; bien que + subjonctif.","Consequence: donc, alors, c'est pourquoi, si bien que.","Purpose: pour / afin de + infinitive; pour que / afin que + subjonctif."],
 e:[["Il est resté chez lui à cause de la pluie.","He stayed at home because of the rain."],["Bien qu'elle soit malade, elle travaille.","Although she's ill, she's working."]],
 x:["Grâce à la grève, je suis arrivé en retard.","À cause de la grève, je suis arrivé en retard.","grâce à is only for a positive cause (“thanks to”)."],
 q:[["Il a réussi ___ ses efforts.",["grâce à","à cause de"],0,"Positive result → grâce à."],["Je parle lentement ___ tu comprennes.",["pour que","parce que","donc"],0,"Purpose + subjonctif → pour que."]],pre:["S2"]},
{id:"S4",d:"S",p:4,fr:"Si…",gloss:"if clauses",t:"Les phrases avec si",
 s:"Three types of conditional sentences, matching the English ones. The key rule: never a futur or conditionnel straight after si — just like “if”.",
 r:["Real condition: si + présent → présent / futur / impératif. Si tu veux, je viendrai.","Hypothesis: si + imparfait → conditionnel. Si j'avais le temps, je voyagerais.","Unreal past: si + plus-que-parfait → conditionnel passé. Si j'avais su, je serais venu.","si + il / ils → s'il, s'ils (but si elle)."],
 e:[["S'il fait beau, nous irons à la plage.","If the weather's nice, we'll go to the beach."],["Si j'étais toi, je lui écrirais.","If I were you, I'd write to him."]],
 x:["Si j'aurais le temps, je viendrais.","Si j'avais le temps, je viendrais.","After si → imparfait, not conditionnel."],
 q:[["Si tu ___ plus tôt, tu ne serais pas fatigué.",["te couchais","te coucherais","te couches"],0,"si + imparfait → conditionnel."],["Si j'avais su, je ___.",["serais venu","viendrais","étais venu"],0,"si + plus-que-parfait → conditionnel passé."]],pre:["S3","M3","V4"]},
{id:"S5",d:"S",p:5,fr:"Style",gloss:"gérondif, emphasis",t:"Gérondif et mise en relief",
 s:"Style tools: fold two actions into one (en lisant — “while reading”), highlight what matters (c'est… qui).",
 r:["Gérondif: en + nous stem + -ant: en marchant. Simultaneous action or manner: Il travaille en écoutant de la musique.","Participe présent without en is written and invariable: Les étudiants ayant fini peuvent sortir.","Emphasis: C'est lui qui a gagné. C'est à toi que je parle. Ce qui m'intéresse, c'est…","Irregular: étant, ayant, sachant."],
 e:[["En arrivant, j'ai vu le problème.","When I arrived, I saw the problem."],["Ce qui compte, c'est la régularité.","What matters is regularity."]],
 x:["C'est moi qui a raison.","C'est moi qui ai raison.","After qui, the verb agrees with moi / toi / nous."],
 q:[["Il s'est blessé ___.",["en courant","en courrant","courant en"],0,"courir → nous courons → en courant (one r)."],["C'est nous qui ___ gagné.",["avons","ont","a"],0,"qui stands for nous → avons."]],pre:["S4","N5"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["Je ___ (appeler) mon frère.",["appele","appelle","apelle"],1,"appeler doubles the l before a silent e: j'appelle."],["Vous ___ (faire) quoi ?",["faisez","faites","fait"],1,"Irregular: vous faites, vous dites, vous êtes."],["Elle ___ (répondre) vite.",["répond","répondt","répons"],0,"Verbs in -dre: il répond, no -t."]],
 c:[["Nous mangons ensemble.","Nous mangeons ensemble.","Verbs in -ger keep the e before -ons."],["Tu peut venir demain.","Tu peux venir demain.","pouvoir: je peux, tu peux."]]},
V2:{q:[["Ils ___ (venir) hier.",["ont venu","sont venus","sont venu"],1,"venir takes être, agreement with ils."],["Nous ___ les courses.",["avons fait","sommes faits","avons faits"],0,"faire takes avoir, object after the verb."],["Elle ___ les valises.",["est descendue","a descendu","est descendu"],1,"With a direct object, movement verbs take avoir."]],
 c:[["Elle a tombé dans la rue.","Elle est tombée dans la rue.","tomber takes être, and the participle agrees."],["J'ai prendu le bus.","J'ai pris le bus.","prendre → pris."]]},
V3:{q:[["Soudain, la lumière ___.",["s'éteignait","s'est éteinte","s'éteint"],1,"soudain → an event, passé composé."],["Avant, nous ___ à Kyiv.",["habitions","avons habité","habitiont"],0,"A past state with no set limits → imparfait."],["Il ___ vingt ans quand il est parti.",["a eu","avait","avais"],1,"Age is description, imparfait; il → -ait."]],
 c:[["Quand j'étais jeune, je suis allé souvent à la plage.","Quand j'étais jeune, j'allais souvent à la plage.","souvent in the past = habit (“used to”) → imparfait."],["Nous mangions et soudain quelqu'un sonnait.","Nous mangions et soudain quelqu'un a sonné.","soudain → passé composé."]]},
V4:{q:[["J'ai perdu le livre que tu m'___.",["as prêté","avais prêté","prêtais"],1,"You lent it before I lost it."],["Elle ___ déjà ___ quand je l'ai appelée.",["était / partie","avait / partie","était / parti"],0,"partir takes être, agreement with elle."],["Si tu m'___, je serais venu.",["avais appelé","as appelé","appellerais"],0,"si + plus-que-parfait → conditionnel passé."]],
 c:[["Il a dit qu'il a déjà vu ce film.","Il a dit qu'il avait déjà vu ce film.","The past before the past → plus-que-parfait."],["Nous avions arrivés trop tard.","Nous étions arrivés trop tard.","arriver takes être."]]},
V5:{q:[["« Elle fit » — infinitive:",["faire","finir","fixer"],0,"faire → il fit."],["« Nous eûmes » — infinitive:",["avoir","être","aller"],0,"avoir → il eut, nous eûmes."],["Passé simple of être (ils):",["ils furent","ils étèrent","ils fûtes"],0,"être → il fut, ils furent."]],
 c:[["Il finissa son repas.","Il finit son repas.","Verbs in -ir: il finit."],["Ils parlairent longtemps.","Ils parlèrent longtemps.","Verbs in -er: ils -èrent."]]},
M1:{q:[["___ sages, les enfants !",["Soyez","Êtes","Soyiez"],0,"être in the imperative: sois, soyons, soyez."],["Ne ___ pas ! (s'inquiéter, vous)",["vous inquiétez","inquiétez-vous","vous inquiétez-vous"],0,"In the negative, the pronoun goes before the verb."],["___-moi ton adresse. (donner, tu)",["Donne","Donnes","Donnez"],0,"-er verbs in the tu form: no -s."]],
 c:[["Vas chez le médecin !","Va chez le médecin !","The -s only comes back before y and en: Vas-y !"],["Ne dis-le pas !","Ne le dis pas !","In the negative, the pronoun goes before the verb."]]},
M2:{q:[["Il ___ (falloir) partir tôt.",["faudra","fallira","faudrera"],0,"falloir → faudr-."],["Tu ___ (être) là ce soir ?",["seras","esteras","sera"],0,"être → ser-; tu → -as."],["Ils ___ (pouvoir) venir.",["pouvront","pourront","pouveront"],1,"pouvoir → pourr-."]],
 c:[["Demain, je prendrerai le train.","Demain, je prendrai le train.","Verbs in -re drop the e: prendr-."],["Nous allons partirons demain.","Nous allons partir demain.","futur proche: aller + infinitive."]]},
M3:{q:[["Vous ___ vous reposer. (devoir, advice)",["devriez","devrez","deviez"],0,"Advice → conditionnel (“you should”)."],["À ta place, je ne ___ rien.",["dirais","dirai","disais"],0,"À ta place → hypothesis, conditionnel."],["Nous ___ visiter Paris. (aimer, wish)",["aimerions","aimerons","aimions"],0,"A wish → conditionnel: -rions."]],
 c:[["Pourriez vous m'aider ?","Pourriez-vous m'aider ?","Inversion needs a hyphen."],["Si j'étais riche, j'achèterai une maison.","Si j'étais riche, j'achèterais une maison.","Hypothesis → conditionnel, with -s."]]},
M4:{q:[["Avant que tu ___, appelle-moi.",["pars","partes","partis"],1,"avant que + subjonctif."],["Je doute qu'il ___ raison.",["a","ait","aie"],1,"douter que + subjonctif; il → ait."],["Je pense qu'elle ___ là.",["soit","est"],1,"penser que in the affirmative → indicative."]],
 c:[["Il faut que nous faisons attention.","Il faut que nous fassions attention.","faire in the subjonctif: fass-."],["Je veux que tu viens.","Je veux que tu viennes.","vouloir que + subjonctif (English says “I want you to come”)."]]},
M5:{q:[["« J'ai faim. » → Il a dit qu'il ___ faim.",["avait","a","aura"],0,"présent → imparfait."],["« Où vas-tu ? » → Elle m'a demandé ___ j'allais.",["où","si","que"],0,"The question word stays."],["« Je suis venu hier. » → Il a dit qu'il était venu ___.",["la veille","hier","le lendemain"],0,"hier → la veille."]],
 c:[["Elle a dit qu'elle viendra demain.","Elle a dit qu'elle viendrait le lendemain.","futur → conditionnel; demain → le lendemain."],["Il m'a demandé est-ce que j'étais prêt.","Il m'a demandé si j'étais prêt.","est-ce que in reported speech → si."]]},
N1:{q:[["Il y a ___ eau sur la table.",["de l'","du","des"],0,"Partitive before a vowel: de l'."],["J'adore ___ chocolat.",["le","du","de"],0,"After aimer, adorer, détester → definite article (“I love chocolate”)."],["Je parle ___ professeurs.",["aux","à les","des"],0,"à + les = aux."]],
 c:[["Elle a beaucoup des livres.","Elle a beaucoup de livres.","After words of quantity → de."],["Je n'aime pas du fromage.","Je n'aime pas le fromage.","aimer + definite article, even in the negative."]]},
N2:{q:[["Plural of « un œil »:",["des œils","des yeux"],1,"Exception: un œil → des yeux."],["Which word is masculine?",["voiture","silence","chanson"],1,"le silence — an exception among words in -ence."],["Plural of « un cheveu »:",["des cheveus","des cheveux"],1,"-eu → -eux."]],
 c:[["Les bijous sont chers.","Les bijoux sont chers.","bijou, caillou, chou, genou, hibou, joujou, pou → -oux."],["La problème est grave.","Le problème est grave.","problème is masculine."]]},
N3:{q:[["une femme ___ (heureux)",["heureux","heureuse","heureuze"],1,"-eux → -euse."],["un ___ appartement (beau)",["beau","bel","belle"],1,"Before a vowel in the masculine: bel."],["des chemises ___ (blanc)",["blancs","blanches","blanchs"],1,"blanc → blanche (fem.), plural blanches."]],
 c:[["Une question importante et difficil.","Une question importante et difficile.","difficile ends in -e in both genders."],["Il a acheté une voiture rouge nouvelle.","Il a acheté une nouvelle voiture rouge.","nouveau goes before the noun, the colour after it."]]},
N4:{q:[["C'est le ___ jour de ma vie.",["meilleur","mieux","plus bon"],0,"Adjective → le meilleur."],["Paris est la ville ___ chère de France.",["la plus","plus","le plus"],0,"After the noun, the article is repeated: la ville la plus chère."],["Il est ___ grand ___ son frère.",["aussi / que","autant / que","aussi / comme"],0,"Equality with an adjective: aussi… que."]],
 c:[["Il chante plus mieux que moi.","Il chante mieux que moi.","mieux already means “better”."],["Elle a plus que dix ans d'expérience.","Elle a plus de dix ans d'expérience.","Before a number → plus de."]]},
N5:{q:[["arriver → ___",["l'arrivée","l'arrivement","l'arrivation"],0,"arriver → l'arrivée."],["développer → ___",["le développement","la développation"],0,"-ment → masculine."],["Quand le film a commencé → ___",["Au début du film","Au commencement de film"],0,"Nominalisation + article: du film."]],
 c:[["La construisation du pont a duré deux ans.","La construction du pont a duré deux ans.","construire → la construction."],["Après la décidation du directeur, tout a changé.","Après la décision du directeur, tout a changé.","décider → la décision."]]},
P1:{q:[["Tu vois tes amis ? — Oui, je ___ vois.",["les","leur","leurs"],0,"voir qqn takes a direct object."],["J'ai dit la vérité à Marie → Je ___ ai dit la vérité.",["l'","lui","la"],1,"dire à qqn → lui."],["Paul ? Je vais ___ appeler.",["l'","lui","le"],0,"appeler qqn takes a direct object; before a vowel, l'."]],
 c:[["Je leurs ai écrit.","Je leur ai écrit.","The pronoun leur never takes -s."],["Je vais lui voir demain.","Je vais le voir demain.","voir qqn takes a direct object."]]},
P2:{q:[["Tu bois du thé ? — Oui, j'___ bois.",["y","en","le"],1,"du thé → en."],["Tu penses à ton voyage ? — Oui, j'___ pense.",["y","en","lui"],0,"penser à + thing → y."],["Il y a des pommes ? — Oui, il y ___ a.",["en","y","les"],0,"Il y en a."]],
 c:[["Tu viens de la gare ? — Oui, j'y viens.","Tu viens de la gare ? — Oui, j'en viens.","venir DE → en."],["Combien de sœurs as-tu ? — J'ai deux.","Combien de sœurs as-tu ? — J'en ai deux.","A number without a noun → en."]]},
P3:{q:[["Le livre ___ est sur la table.",["que","qui","dont"],1,"Subject → qui."],["Le pays ___ je viens.",["où","dont","que"],1,"venir DE → dont (d'où also works)."],["La femme ___ tu as vue.",["qui","que","dont"],1,"Direct object → que."]],
 c:[["L'homme que parle est mon père.","L'homme qui parle est mon père.","Subject → qui."],["Voilà le projet dont je t'ai parlé de.","Voilà le projet dont je t'ai parlé.","dont already contains de."]]},
P4:{q:[["Tu donnes les clés à tes parents ? — Je ___ donne.",["les leur","leur les","les leurs"],0,"les before leur; leur without -s."],["Il y a du pain ? — Oui, il ___ a.",["y en","en y"],0,"y before en."],["Ne ___ dis pas ! (cela, à lui)",["le lui","lui le"],0,"Negative imperative → normal order."]],
 c:[["Donne-moi-le !","Donne-le-moi !","Affirmative imperative: le before moi."],["Je lui en ai parlé de ce problème.","Je lui en ai parlé.","en already replaces de ce problème."]]},
P5:{q:[["Le stylo avec ___ j'écris.",["lequel","laquelle","qui"],0,"stylo — masculine, a thing."],["Le film ___ je pense.",["auquel","duquel","dont"],0,"penser À → auquel."],["La maison au fond ___ il y a un jardin.",["de laquelle","dont","duquel"],0,"au fond de + feminine → de laquelle."]],
 c:[["Le problème à lequel je réfléchis.","Le problème auquel je réfléchis.","à + lequel = auquel."],["L'entreprise pour lequel je travaille.","L'entreprise pour laquelle je travaille.","entreprise is feminine."]]},
O1:{q:[["Elle ___ une voiture.",["a","à"],0,"Test: elle avait une voiture."],["Ils ___ faim.",["on","ont"],1,"Test: ils avaient faim."],["___ est mon sac ?",["Ou","Où"],1,"“where” → où."]],
 c:[["Mes parents son en vacances.","Mes parents sont en vacances.","Test: étaient → sont."],["On à fini le travail.","On a fini le travail.","Test: on avait fini → a."]]},
O2:{q:[["___ livres sont à moi.",["Ces","Ses","C'est"],0,"“these books” → ces."],["Il ne ___ pas nager.",["sait","s'est","c'est"],0,"savoir → il sait."],["Il ___ venir demain.",["peu","peut","peux"],1,"Test: il pouvait → peut."]],
 c:[["Je ne sais pas quel heure il est.","Je ne sais pas quelle heure il est.","heure is feminine → quelle."],["Il se lave et ce prépare.","Il se lave et se prépare.","Before a verb → se."]]},
O3:{q:[["Vous ___ ce livre ? (aimer)",["aimez","aimer","aimé"],0,"vous → -ez."],["Il est ___ à huit heures. (arriver)",["arrivé","arriver","arrivait"],0,"After être → participle."],["Il est parti sans ___ un mot. (parler)",["parler","parlé"],0,"After a preposition → infinitive; test: sans vendre."]],
 c:[["Elle est aller au marché.","Elle est allée au marché.","After être → participle, agreeing with elle."],["Nous allons commencé demain.","Nous allons commencer demain.","After aller → infinitive."]]},
O4:{q:[["Les fleurs que j'ai ___.",["acheté","achetées","achetés"],1,"que = les fleurs (fem. plural), before the verb."],["Combien de pages as-tu ___ ?",["lu","lues"],1,"combien de pages comes before the verb."],["Des gâteaux ? J'en ai ___ trois.",["mangé","mangés"],0,"No agreement with en."]],
 c:[["Ces chansons, je les ai déjà entendu.","Ces chansons, je les ai déjà entendues.","les = chansons, before the verb."],["Elle a écrite une lettre.","Elle a écrit une lettre.","Object after the verb → no agreement."]]},
O5:{q:[["Ils se sont ___ à Paris. (rencontrer)",["rencontré","rencontrés"],1,"rencontrer qqn: se is the direct object."],["___ les étudiants sont là.",["Tout","Tous","Toutes"],1,"les étudiants — masc. plural → tous."],["Elles sont ___ petites.",["tout","toutes"],1,"Before a feminine adjective starting with a consonant, tout changes: toutes."]],
 c:[["Elles se sont lavées les mains.","Elles se sont lavé les mains.","The object les mains comes after the verb."],["Ils ont pris leur sacs.","Ils ont pris leurs sacs.","Possessive before a plural → leurs."]]},
S1:{q:[["Je ne vois ___.",["personne","pas personne"],0,"ne… personne, without pas."],["Correct question:",["Où habite-t-elle ?","Où habite-elle ?","Où elle habite-t-elle ?"],0,"Between two vowels → -t-."],["Il ___ travaille plus.",["ne","n'","pas"],0,"ne… plus; before a consonant → ne."]],
 c:[["Il a rien dit.","Il n'a rien dit.","In writing, ne is compulsory."],["Est-ce que vous parlez-vous anglais ?","Est-ce que vous parlez anglais ?","No inversion after est-ce que."]]},
S2:{q:[["Correct quotation marks:",["« Bonjour »","\"Bonjour\"","«Bonjour»"],0,"French guillemets with spaces inside."],["Comma after an introductory word:",["Cependant, il a refusé.","Cependant il a refusé."],0,"Cependant at the start → comma."],["Correct:",["Attention : danger !","Attention: danger!"],0,"Space before : and !"]],
 c:[["Il a dit: «Je viens.»","Il a dit : « Je viens. »","Space before : and inside « ». On a Mac: « is Option+\\, » is Option+Shift+\\."],["Tu viens?","Tu viens ?","Space before ?"]]},
S3:{q:[["Il pleut, ___ je prends un parapluie.",["donc","bien que","pourtant"],0,"Consequence → donc."],["___ il soit riche, il est malheureux.",["Bien qu'","Parce qu'","Donc"],0,"Concession + subjonctif → bien que."],["Je suis venu ___ te voir.",["pour","pour que","parce que"],0,"Purpose + infinitive → pour."]],
 c:[["Bien qu'il est malade, il travaille.","Bien qu'il soit malade, il travaille.","bien que + subjonctif."],["Il est parti car de la pluie.","Il est parti à cause de la pluie.","car + clause; with a noun → à cause de."]]},
S4:{q:[["Si tu ___, on y va.",["veux","voudrais","voudras"],0,"Real condition: si + présent."],["S'il ___, nous resterions à la maison.",["pleuvait","pleuvrait","pleut"],0,"si + imparfait → conditionnel."],["Si elle ___, elle aurait réussi.",["avait travaillé","aurait travaillé","travaillerait"],0,"si + plus-que-parfait → conditionnel passé."]],
 c:[["Si il vient, je serai content.","S'il vient, je serai content.","si + il → s'il."],["Si tu viendras, je te montrerai.","Si tu viens, je te montrerai.","Never a futur after si."]]},
S5:{q:[["Il lit ___ le petit-déjeuner.",["en prenant","en prendant","prenant en"],0,"nous prenons → en prenant."],["C'est à elle ___ je pense.",["que","qui","dont"],0,"C'est + preposition… que."],["___ fatiguée, elle est restée chez elle.",["Étant","Étante","En étant"],0,"The participe présent is invariable: étant."]],
 c:[["En mangeons, il regarde la télé.","En mangeant, il regarde la télé.","Gérondif: en + -ant."],["C'est toi qui a gagné.","C'est toi qui as gagné.","qui = toi → tu as."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Three verb groups
<b>Group 1</b> — all verbs in -er except aller. That's about 90% of verbs, and every new word joins it (googler, liker). <b>Group 2</b> — verbs in -ir with -iss- in the plural: finir, choisir, réussir, grandir. <b>Group 3</b> — everything else: -ir without -iss- (partir, dormir, venir), -re (prendre, mettre), -oir (pouvoir, voir) and aller.
| | parler | finir | prendre | pouvoir |
| je | parl<b>e</b> | fin<b>is</b> | prend<b>s</b> | peu<b>x</b> |
| tu | parl<b>es</b> | fin<b>is</b> | prend<b>s</b> | peu<b>x</b> |
| il/elle | parl<b>e</b> | fin<b>it</b> | prend | peu<b>t</b> |
| nous | parl<b>ons</b> | fin<b>issons</b> | pren<b>ons</b> | pouv<b>ons</b> |
| vous | parl<b>ez</b> | fin<b>issez</b> | pren<b>ez</b> | pouv<b>ez</b> |
| ils/elles | parl<b>ent</b> | fin<b>issent</b> | pren<b>nent</b> | peuv<b>ent</b> |
## Why it's hard in writing
In parler, four forms sound identical: parle, parles, parle, parlent. You can't hear the difference, so only the subject tells you the ending. Hence the rule: find the subject first, then write the ending. Watch out when the subject is far from the verb: “Les enfants de ma voisine <b>jouent</b>” — the subject is enfants, not voisine.
## Stem changes in group 1
- -cer → ç before o: nous commen<b>ç</b>ons.
- -ger → ge before o: nous man<b>ge</b>ons.
- appeler, jeter double the consonant: j'appe<b>ll</b>e, je je<b>tt</b>e, but nous appelons.
- acheter, lever, préférer take è: j'ach<b>è</b>te, je pr<b>é</b>f<b>è</b>re, but nous achetons.
- -oyer, -uyer → i: j'envo<b>i</b>e, j'appu<b>i</b>e.
The “boot” pattern: the stem changes where the ending is silent (je, tu, il, ils) and stays like the infinitive with nous and vous.
## Four verbs to know by heart
| | être | avoir | aller | faire |
| je | suis | ai | vais | fais |
| tu | es | as | vas | fais |
| il | est | a | va | fait |
| nous | sommes | avons | allons | faisons |
| vous | êtes | avez | allez | faites |
| ils | sont | ont | vont | font |
! One présent covers both English presents: je travaille = “I work” and “I'm working”. If you need to stress “right now”, use être en train de + infinitive: je suis en train de travailler.`,
V2:`## Structure
Passé composé = auxiliary (avoir or être) in the présent + participe passé. The auxiliary is conjugated, the participle carries the meaning: j'<b>ai</b> parlé, nous <b>sommes</b> partis. It covers both the English simple past and present perfect: j'ai mangé = “I ate” or “I have eaten”.
## When to use être
The mnemonic <b>DR MRS VANDERTRAMP</b>: devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, rentrer, tomber, retourner, arriver, mourir, partir. Mostly movement “into and out of the house” and change of state (being born, dying, becoming). Plus <b>all reflexive</b> verbs: je me suis levé, elle s'est trompée.
! Trap: monter, descendre, sortir, rentrer, retourner, passer take avoir when they have a direct object. Je suis sorti (I went out) / J'ai sorti la poubelle (I took the bin out).
## How to form the participle
| Infinitive | Participle | Examples |
| -er | -é | parlé, mangé, allé |
| -ir (group 2, partir, dormir) | -i | fini, choisi, parti |
| -re (most) | -u | vendu, attendu, perdu |
| -oir | -u | voulu, pu, su, vu, dû |
Irregular ones you'll meet constantly: avoir → <b>eu</b>, être → <b>été</b>, faire → <b>fait</b>, dire → <b>dit</b>, écrire → <b>écrit</b>, prendre → <b>pris</b>, mettre → <b>mis</b>, ouvrir → <b>ouvert</b>, naître → <b>né</b>, mourir → <b>mort</b>, vivre → <b>vécu</b>, lire → <b>lu</b>, boire → <b>bu</b>, croire → <b>cru</b>.
## Agreement with être
With être, the participle behaves like an adjective: +e for feminine, +s for plural. Elle est parti<b>e</b>. Ils sont parti<b>s</b>. Elles sont parti<b>es</b>. A mixed group takes the masculine plural. Usually you can't hear the difference (parti / partie), so it's a mistake that only shows in writing.
## Word order
- The negation wraps around the auxiliary: Je <b>n'</b>ai <b>pas</b> compris.
- Pronouns go before the auxiliary: Je <b>l'</b>ai vu.
- Short adverbs go between the auxiliary and the participle: J'ai <b>bien</b> dormi. Il a <b>déjà</b> mangé.`,
V3:`## Formation
Take the nous form of the présent, drop -ons, add the endings. The only exception is être: j'<b>ét</b>ais.
| | parler (nous parl-ons) | finir (nous finiss-ons) | être |
| je | parlais | finissais | étais |
| tu | parlais | finissais | étais |
| il | parlait | finissait | était |
| nous | parlions | finissions | étions |
| vous | parliez | finissiez | étiez |
| ils | parlaient | finissaient | étaient |
Spelling traps: verbs with i in the stem get two i's: nous étud<b>ii</b>ons, vous r<b>ii</b>ez. -cer / -ger: je commen<b>ç</b>ais, je man<b>ge</b>ais (but nous commencions).
## How to choose: imparfait or passé composé
| Imparfait | Passé composé |
| background, the set of the scene | the action on stage |
| state: être, avoir, savoir, penser | change of state: j'ai compris |
| habit: tous les lundis, souvent | once, or how many times: deux fois |
| action in progress | the action that interrupted it |
| no time limits | with limits: pendant deux heures, de 8 h à 10 h |
## Does English help?
Often: “was doing” ≈ imparfait (in progress), “used to / would” ≈ imparfait (habit), a simple past event ≈ passé composé. But not always. “I worked there for three years” has clear limits, so it's J'<b>ai travaillé</b> là-bas trois ans, even though it describes a long period. The deciding question: does the action have limits in time?
## How it sounds together
<i>Il était sept heures. Il pleuvait et les rues étaient vides. Soudain, une voiture s'est arrêtée devant la maison. Un homme est sorti.</i> The first three verbs paint the picture (imparfait), the last two are events that move the story forward (passé composé).`,
V4:`## Formation
avoir or être in the imparfait + participe passé. The rules for choosing the auxiliary and for agreement are the same as in the passé composé.
| | parler | partir |
| je | avais parlé | étais parti(e) |
| tu | avais parlé | étais parti(e) |
| il / elle | avait parlé | était parti / partie |
| nous | avions parlé | étions parti(e)s |
| vous | aviez parlé | étiez parti(e)(s) |
| ils / elles | avaient parlé | étaient partis / parties |
## Why you need it
It's the English past perfect (“had done”), so the idea is familiar. The difference is discipline: spoken English often skips it (“When I got there, he left”), but written French expects you to show that one past action happened before another. Without it, the reader may get the order of events wrong.
## Compare
- Quand il est arrivé, nous <b>avons mangé</b>. — He arrived, and <i>then</i> we ate.
- Quand il est arrivé, nous <b>avions mangé</b>. — We had eaten <i>before</i> he arrived.
One tense changes the meaning of the sentence.
## Typical contexts
- explaining a cause: Il était fatigué parce qu'il <b>avait</b> mal <b>dormi</b>;
- reported speech: the passé composé shifts to the plus-que-parfait (topic M5);
- an unreal past condition: Si j'<b>avais su</b>, je serais venu (topic S4);
- regret: Si seulement je l'<b>avais écouté</b> !`,
V5:`## Where you'll meet it
Literature, fairy tales (<i>Il était une fois… Le prince partit</i>), history books, biographies. In speech, letters and messages it's replaced by the passé composé. Your job is to recognise the forms when reading, and only write them if you write fiction.
## Three types of endings
| | -a (parler) | -i (finir, prendre) | -u (vouloir, être) |
| je | parlai | finis | voulus |
| tu | parlas | finis | voulus |
| il | parla | finit | voulut |
| nous | parlâmes | finîmes | voulûmes |
| vous | parlâtes | finîtes | voulûtes |
| ils | parlèrent | finirent | voulurent |
## How to recognise it
In practice 95% of forms are in the 3rd person: il + <b>-a, -it, -ut</b>; ils + <b>-èrent, -irent, -urent</b>. Special forms worth remembering:
- être → il <b>fut</b>, avoir → il <b>eut</b>, faire → il <b>fit</b>;
- venir → il <b>vint</b>, ils <b>vinrent</b>; tenir → il <b>tint</b>;
- voir → il <b>vit</b>, vivre → il <b>vécut</b>; naître → il <b>naquit</b>; mourir → il <b>mourut</b>.
! Trap: “il vit” is both voir in the passé simple (he saw) and vivre in the présent (he lives). “Il finit” is both présent and passé simple. Tell them apart from the tense of the rest of the text.
## Paired with the imparfait
In literature, the passé simple works like the passé composé: the imparfait sets the background, the passé simple gives the events. <i>Il faisait nuit. Elle ouvrit la fenêtre et regarda dehors.</i>`,
M1:`## Formation
Take the tu, nous, vous forms of the présent and drop the pronoun.
| | parler | finir | aller | être | avoir | savoir |
| (tu) | parle | finis | va | sois | aie | sache |
| (nous) | parlons | finissons | allons | soyons | ayons | sachons |
| (vous) | parlez | finissez | allez | soyez | ayez | sachez |
In -er verbs, and in aller, ouvrir, offrir, cueillir, the tu form <b>loses its -s</b>: tu parles → Parle ! tu vas → Va ! The -s only comes back before y and en: Vas-y ! Parles-en !
## Reflexive verbs
The pronoun goes after the verb with a hyphen, and te becomes toi: Lève-toi ! Levons-nous ! Levez-vous ! In the negative, the pronoun goes back to its place: Ne te lève pas !
## Pronouns with the imperative
- Affirmative: after the verb, with a hyphen; me → moi, te → toi. Regarde-<b>moi</b>. Écoute-<b>le</b>.
- Negative: before the verb, as in an ordinary sentence. Ne <b>me</b> regarde pas.
## The imperative in letters
The imperative sounds blunt. In a formal letter, use instead:
- <b>Veuillez</b> + infinitive: Veuillez trouver ci-joint…
- <b>Merci de</b> + infinitive: Merci de me répondre avant vendredi.
- the conditionnel: Pourriez-vous… ?
The standard closing formula: <i>Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</i>
! nous forms (Parlons ! Allons-y !) are the French “let's”.`,
M2:`## Futur simple: formation
Infinitive + endings that match the présent of avoir: <b>-ai, -as, -a, -ons, -ez, -ont</b>. Verbs in -re drop the final e.
| | parler | finir | prendre |
| je | parlerai | finirai | prendrai |
| tu | parleras | finiras | prendras |
| il | parlera | finira | prendra |
| nous | parlerons | finirons | prendrons |
| vous | parlerez | finirez | prendrez |
| ils | parleront | finiront | prendront |
## Irregular stems
| Verb | Stem | Verb | Stem |
| être | ser- | venir | viendr- |
| avoir | aur- | tenir | tiendr- |
| aller | ir- | voir | verr- |
| faire | fer- | envoyer | enverr- |
| pouvoir | pourr- | savoir | saur- |
| vouloir | voudr- | falloir | faudr- |
| devoir | devr- | courir | courr- |
| recevoir | recevr- | mourir | mourr- |
## Spelling
Verbs that change their stem in the présent keep the change throughout the futur: j'appe<b>ll</b>erai, j'ach<b>è</b>terai, je je<b>tt</b>erai. In speech the e in -erai is often swallowed (je parl'rai), but it's always written.
## Futur simple or futur proche
- <b>Futur proche</b> (aller + infinitive): a plan, something decided, something close. Spoken. Like “going to”. Je vais appeler Marie ce soir.
- <b>Futur simple</b>: prediction, promise, condition, formal text. Like “will”. Je vous contacterai dès que possible.
## Futur antérieur
aurai / serai + participle: an action finished before another future one (“will have done”). Quand tu <b>auras fini</b>, tu m'appelleras.
! The big difference from English: after quand, dès que, lorsque about the future, French uses a future tense, never the présent. “When I get home” → Quand je <b>rentrerai</b>.`,
M3:`## Formation
Futur stem + imparfait endings. So you already know all the irregular stems from topic M2.
| | parler | faire | être |
| je | parlerais | ferais | serais |
| tu | parlerais | ferais | serais |
| il | parlerait | ferait | serait |
| nous | parlerions | ferions | serions |
| vous | parleriez | feriez | seriez |
| ils | parleraient | feraient | seraient |
## Six situations
- <b>Politeness</b>: Je voudrais…, Pourriez-vous…, Auriez-vous… ?
- <b>Advice</b>: Tu devrais… (“you should”), Vous feriez mieux de… (“you'd better”)
- <b>Wish</b>: J'aimerais…, Ce serait bien de…
- <b>Hypothesis with si</b>: Si j'avais le temps, je <b>voyagerais</b> (topic S4).
- <b>Unconfirmed information</b> in the press: Le ministre <b>serait</b> malade — “is reportedly ill”.
- <b>Future in the past</b>: Il a dit qu'il <b>viendrait</b> (topic M5).
## Futur or conditionnel in writing
Je ferai and je ferais sound the same for many speakers. Test: switch to another person. Il <b>fera</b> (futur) / il <b>ferait</b> (conditionnel); nous <b>ferons</b> / nous <b>ferions</b>. Then ask: is it a definite future (“will”) or something imagined, polite, conditional (“would”)?
## Conditionnel passé
aurais / serais + participle. Regret or reproach about the past: J'<b>aurais dû</b> venir (I should have come). Tu <b>aurais pu</b> me prévenir (you could have warned me). Unreal condition: Si j'avais su, je <b>serais venu</b>.`,
M4:`## What it is
The subjonctif is not a tense but a mood. It presents an action not as a fact but through an attitude towards it: wish, necessity, emotion, doubt. It almost always comes after <b>que</b> in a subordinate clause, when the subject there is <b>different</b> from the main clause.
## Formation
The ils stem of the présent + <b>-e, -es, -e, -ions, -iez, -ent</b>.
| | parler (ils parl-ent) | finir (ils finiss-ent) | venir (ils vienn-ent / nous ven-ons) |
| que je | parle | finisse | vienne |
| que tu | parles | finisses | viennes |
| qu'il | parle | finisse | vienne |
| que nous | parlions | finissions | venions |
| que vous | parliez | finissiez | veniez |
| qu'ils | parlent | finissent | viennent |
In -er verbs, the je, tu, il, ils forms match the présent, and nous and vous match the imparfait. Verbs with two stems (venir, prendre, boire, devoir) take nous / vous from the nous of the présent: que nous <b>prenions</b>, que vous <b>buviez</b>.
## Fully irregular
| être | avoir | aller | faire | pouvoir | savoir | vouloir |
| sois | aie | aille | fasse | puisse | sache | veuille |
| soit | ait | aille | fasse | puisse | sache | veuille |
| soyons | ayons | allions | fassions | puissions | sachions | voulions |
| soient | aient | aillent | fassent | puissent | sachent | veuillent |
## Triggers
| Category | Expressions |
| will, wish | vouloir que, souhaiter que, préférer que, demander que, exiger que |
| necessity | il faut que, il est nécessaire / important / essentiel que |
| emotion | être content / triste / surpris que, avoir peur que, regretter que |
| doubt, possibility | douter que, ne pas penser que, ne pas croire que, il est possible que |
| conjunctions | bien que, pour que, afin que, avant que, à moins que, sans que, jusqu'à ce que |
## When NOT to use it
- Same subject → infinitive: Je veux <b>partir</b> (not que je parte).
- espérer que, penser que, croire que (affirmative), il est probable que, il est sûr que → indicative.
- après que → indicative (French speakers often get this wrong themselves).
! English has a few traces of it (“I suggest that he <b>be</b> on time”, “If I <b>were</b> you”), but where English uses an infinitive — “I want you to come” — French needs que + subjonctif: Je veux que tu <b>viennes</b>.`,
M5:`## The principle
When the reporting verb is in the présent (Il dit que…), tenses don't change. When it's in the past (Il a dit que…, Il disait que…), every tense moves one step back.
| Direct speech | Reported (after il a dit que…) |
| présent: « Je suis prêt. » | imparfait: qu'il était prêt |
| passé composé: « J'ai fini. » | plus-que-parfait: qu'il avait fini |
| futur: « Je viendrai. » | conditionnel: qu'il viendrait |
| futur antérieur: « J'aurai fini. » | conditionnel passé: qu'il aurait fini |
| imparfait, plus-que-parfait, conditionnel | no change |
| impératif: « Viens ! » | de + infinitive: Il m'a dit de venir |
## Good news for English speakers
English backshifts in the same way (“He said he was tired”, “She said she would come”), so the logic will feel natural. Just map the tenses: was → imparfait, had done → plus-que-parfait, would → conditionnel.
## Persons and time words
Pronouns change logically: « Je t'aime » → Il a dit qu'il <b>m'</b>aimait.
| Direct | Reported |
| aujourd'hui | ce jour-là |
| hier | la veille |
| demain | le lendemain |
| la semaine prochaine | la semaine suivante |
| il y a deux jours | deux jours plus tôt |
| maintenant | à ce moment-là |
## Questions in reported speech
- yes / no → <b>si</b>: « Tu viens ? » → Il m'a demandé si je venais.
- qu'est-ce que → <b>ce que</b>; qu'est-ce qui → <b>ce qui</b>.
- où, quand, pourquoi, comment stay.
- No inversion and no question mark: Il m'a demandé où j'allais.`,
N1:`## The general logic
Almost every French noun needs a “companion”: an article, a possessive (mon), a demonstrative (ce) or a number. A bare noun is rare. English drops articles much more often, so this is where English speakers slip.
| | masculine | feminine | before a vowel | plural |
| definite | le | la | l' | les |
| indefinite | un | une | un / une | des |
| partitive | du | de la | de l' | des |
## How to choose: three questions
- Is it a specific, known thing, or a concept in general? → <b>le / la / les</b>. Le café est prêt. J'aime le café.
- Is it one countable thing, new to the reader? → <b>un / une / des</b>. J'ai acheté un livre.
- Is it part of something uncountable (food, liquid, a quality)? → <b>du / de la / de l'</b>. Je bois de l'eau. Il a du courage.
! The biggest trap for English speakers: general statements. “I like coffee”, “Dogs are loyal”, “Life is short” have no article in English, but French needs one: J'aime <b>le</b> café, <b>Les</b> chiens sont fidèles, <b>La</b> vie est courte. And “some”, or nothing at all, often becomes du / de la: “I'm drinking water” → Je bois <b>de l'</b>eau.
## When the article becomes de
- After a negative: Je n'ai pas <b>de</b> voiture. Exception — être: Ce n'est pas <b>un</b> problème.
- After words of quantity: beaucoup de, peu de, trop de, assez de, un kilo de, une bouteille de.
- Before a plural adjective (written standard): <b>de</b> bons amis.
## Contraction with à and de
à + le = <b>au</b>, à + les = <b>aux</b>, de + le = <b>du</b>, de + les = <b>des</b>. No contraction with la and l': à la gare, de l'hôtel.
## No article
- a profession after être: Il est médecin (unlike English “he's a doctor”);
- after en: en France, en voiture;
- after avec / sans with abstract nouns: avec plaisir, sans problème;
- in lists and headings.`,
N2:`## Gender
English has no gender for things, so every French noun is a small memory task: <i>la table</i>, <i>le livre</i>. Learn each new word with its article, and words starting with a vowel with an adjective: <i>un grand hôtel</i>.
| Usually feminine | Usually masculine |
| -tion, -sion: la nation | -ment: le moment |
| -té: la liberté | -age: le fromage (but la page, la plage, l'image) |
| -ure: la voiture | -isme: le tourisme |
| -ance, -ence: la chance (but le silence) | -eau: le bureau (but l'eau, la peau) |
| -ette, -ie, -ude | -oir, -ier, -et |
## Plural
| Ending | Rule | Exceptions |
| most | +s | — |
| -s, -x, -z | no change: le prix → les prix | — |
| -eau, -au, -eu | +x: bateaux, jeux | pneus, bleus |
| -al | -aux: journaux | bals, festivals, carnavals |
| -ail | +s: détails | travail → travaux, vitrail → vitraux |
| -ou | +s: trous | 7 words in -oux: bijou, caillou, chou, genou, hibou, joujou, pou |
Special: un œil → des <b>yeux</b>, le ciel → les <b>cieux</b>, monsieur → <b>messieurs</b>, madame → <b>mesdames</b>.
## Checking in writing
You almost never hear the plural. Check the whole chain: determiner → noun → adjective → verb. “Le<b>s</b> petite<b>s</b> maison<b>s</b> blanche<b>s</b> son<b>t</b> belle<b>s</b>” — six plural marks, of which you can hear only one (les).`,
N3:`## Agreement
The adjective takes the gender and number of the noun. With several nouns of different genders → masculine plural: un garçon et une fille content<b>s</b>.
## Feminine
| Rule | Example |
| +e | grand → grande |
| already ends in -e: no change | rouge → rouge |
| -er → -ère | cher → chère |
| -if → -ive | actif → active |
| -eux → -euse | heureux → heureuse |
| -el, -eil → -elle, -eille | naturel → naturelle |
| -en, -on → -enne, -onne | italien → italienne, bon → bonne |
| -et → -ette | muet → muette (but complet → complète) |
Irregular: blanc → blanche, frais → fraîche, long → longue, doux → douce, faux → fausse, gentil → gentille, fou → folle, beau → belle, nouveau → nouvelle, vieux → vieille.
## Position
By default the adjective comes <b>after</b> the noun — the opposite of English: une robe rouge (a red dress), un film intéressant. Always after: colours, nationality, shape, participles (une porte fermée).
Short common adjectives go before the noun (mnemonic BAGS):
- <b>B</b>eauty: beau, joli;
- <b>A</b>ge: jeune, vieux, nouveau;
- <b>G</b>oodness: bon, mauvais, gentil;
- <b>S</b>ize: grand, petit, gros, long.
## Meaning depends on position
| Before | After |
| un ancien collègue — former | un meuble ancien — antique |
| ma propre voiture — own | une voiture propre — clean |
| mon cher ami — dear | un livre cher — expensive |
| un grand homme — great | un homme grand — tall |
| la seule personne — only | une personne seule — lonely |
## Colours
Invariable if the colour comes from a noun (des yeux <b>marron</b>, des chaussures <b>orange</b>) or is compound (des robes <b>bleu clair</b>).`,
N4:`## Comparative
- With an adjective or adverb: <b>plus / moins / aussi</b> + word + <b>que</b>. Elle est plus grande que moi. Il parle aussi vite que toi.
- With a noun: <b>plus de / moins de / autant de</b> + noun + que. J'ai autant de travail que lui.
- With a verb: verb + <b>plus / moins / autant</b> + que. Il travaille plus que moi.
French has no -er ending: “taller” is always plus grand, “cheaper” moins cher or plus bon marché.
## Superlative
<b>le / la / les + plus / moins</b> + adjective. The group is introduced with <b>de</b>, not “in”: le plus grand <b>de</b> la classe, la plus belle ville <b>du</b> monde.
If the adjective comes after the noun, the article is repeated: la ville <b>la</b> plus chère. With an adverb it's always le: C'est elle qui court <b>le</b> plus vite.
## Irregular forms
| Base | Comparative | Superlative |
| bon (adj.) | meilleur | le meilleur |
| bien (adv.) | mieux | le mieux |
| mauvais | plus mauvais / pire | le pire |
| beaucoup | plus | le plus |
| peu | moins | le moins |
## Test: meilleur or mieux
English “better” covers both. Put the base form in the sentence. If <b>bon</b> fits (good), write <b>meilleur</b>: Ce vin est bon → meilleur. If <b>bien</b> fits (well), write <b>mieux</b>: Elle chante bien → mieux. The impersonal “it's better” is c'est mieux.
## Pronouns after que
After que, use the stressed form: plus grand que <b>moi, toi, lui, elle, nous, vous, eux, elles</b>.`,
N5:`## Why it matters
Formal and academic French leans heavily on nouns. Instead of “when prices went up, people started saving” you write <i>L'augmentation des prix a poussé les gens à économiser</i>. The text gets tighter and sounds like “grown-up” writing: letters to the administration, reports, DELF B2 essays.
## Verb → noun
| Suffix | Gender | Example |
| -tion, -ation | fem. | réaliser → la réalisation |
| -ment | masc. | changer → le changement |
| -age | masc. | laver → le lavage |
| -ure | fem. | ouvrir → l'ouverture |
| -ance, -ence | fem. | naître → la naissance |
| -ée | fem. | arriver → l'arrivée |
| no suffix | varies | choisir → le choix, attendre → l'attente, vendre → la vente |
## Adjective → noun
| Suffix | Example |
| -té, -ité | beau → la beauté, facile → la facilité |
| -esse | jeune → la jeunesse |
| -eur | long → la longueur |
| -ise | franc → la franchise |
## How to rebuild a sentence
- The subject becomes a complement with de: Le gouvernement a décidé → la décision <b>du</b> gouvernement.
- The adverb becomes an adjective: Il est parti brusquement → son départ <b>brusque</b>.
- The clause becomes a prepositional phrase: à cause de, grâce à, en raison de, avant, après, lors de, malgré, en cas de.
! Don't build chains of three or four nouns linked with de: the text gets heavy. One or two nominalisations per sentence is enough.`,
P1:`## The main rule
Don't translate from English. The French verb decides whether there is à after it, and it often differs from English:
| Pronoun | COD (no à) | COI (with à) |
| je | me | me |
| tu | te | te |
| il | le | lui |
| elle | la | lui |
| nous | nous | nous |
| vous | vous | vous |
| ils / elles | les | leur |
The difference only shows in the 3rd person — that's where the mistakes happen.
## Trap verbs
| Direct in French, preposition in English | Indirect in French, direct in English |
| écouter qqn (listen <b>to</b>) | téléphoner à qqn (call someone) |
| attendre qqn (wait <b>for</b>) | répondre à qqn (answer someone) |
| chercher qqn (look <b>for</b>) | obéir à qqn (obey someone) |
| regarder qqn (look <b>at</b>) | ressembler à qqn (look like someone) |
| demander qqch (ask <b>for</b> sth) | plaire à qqn (please someone) |
Also indirect: parler à, dire à, donner à, écrire à, demander à, conseiller à, sourire à.
## Position of the pronoun
Before the verb it belongs to:
- Je <b>le</b> vois. Je ne <b>le</b> vois pas.
- Je <b>l'</b>ai vu (before the auxiliary).
- Je vais <b>le</b> voir. Je ne veux pas <b>le</b> voir (before the infinitive).
- Affirmative imperative — after: Regarde-<b>le</b>.
## Special cases
- penser à, s'intéresser à, faire attention à + person → not lui, but <b>à lui / à elle</b>: Je pense à elle.
- The neutral le replaces a whole idea: Je <b>le</b> sais. Je te <b>l'</b>ai dit.
! English puts the pronoun after the verb (“I see him”); French puts it before (Je le vois). The most common slip is copying the English order: <s>Je vois le</s>.`,
P2:`## en: everything introduced by de
- Partitive or indefinite article: du pain → j'<b>en</b> mange; des amis → j'<b>en</b> ai. Close to English “some / any / of it”.
- With a quantity (the quantity stays): J'en ai <b>trois</b>. J'en veux <b>un kilo</b>. Il y en a <b>beaucoup</b>.
- Verbs and expressions with de: parler de, avoir besoin de, se souvenir de, s'occuper de, avoir peur de, être content de: J'<b>en</b> ai besoin.
- Place from which: Je viens de Lyon → J'<b>en</b> viens.
## y: place and à + thing
- Place (à, en, dans, chez, sur…): Je vais à Paris → J'<b>y</b> vais (“I'm going there”). Il est chez lui → Il <b>y</b> est.
- Verbs with à + a thing or idea: penser à, réfléchir à, s'intéresser à, répondre à (une lettre), participer à, croire à: J'<b>y</b> pense.
## And for people
| Construction | Thing | Person |
| de + … | J'en parle. | Je parle <b>de lui</b>. |
| penser à, s'intéresser à | J'y pense. | Je pense <b>à elle</b>. |
| parler à, répondre à (COI) | J'y réponds (à la lettre). | Je <b>lui</b> réponds. |
## Position in the sentence
Like other pronouns: before the verb, before the auxiliary, before the infinitive. If both appear, y comes before en: Il <b>y en</b> a. The participe passé doesn't agree with en (topic O4).
## Set phrases
Ça y est ! — Done! Vas-y ! / Allons-y ! — Go on! / Let's go! Je n'en peux plus — I can't take any more. Je m'en vais — I'm off. On y va — Let's go.
! English often leaves the “of it / some” unsaid: “Do you have brothers? — Yes, I have two.” French can't: J'<b>en</b> ai deux.`,
P3:`## Method: split into two sentences
Find what role the antecedent plays in the <b>second</b> sentence:
| Second sentence | Role | Relative |
| Le livre est sur la table. | subject | <b>qui</b>: le livre qui est sur la table |
| Je lis le livre. | direct object | <b>que</b>: le livre que je lis |
| Je parle du livre. | de + … | <b>dont</b>: le livre dont je parle |
| J'habite dans la ville. | place | <b>où</b>: la ville où j'habite |
| Je travaille avec le collègue. | preposition + … | <b>avec qui / avec lequel</b> (topic P5) |
## Never left out
English can drop the relative pronoun (“the book I'm reading”) and leave prepositions at the end (“the film everyone is talking about”). French can do neither: le livre <b>que</b> je lis, le film <b>dont</b> tout le monde parle.
## dont in detail
- After verbs with de: parler de, avoir besoin de, se souvenir de, avoir peur de, rêver de.
- After adjectives with de: fier de, content de, responsable de.
- Possession (“whose”): l'homme <b>dont</b> la fille est médecin (= la fille de l'homme).
- The order after dont is normal: dont + subject + verb + object: la femme dont je connais <b>le mari</b>.
## ce qui, ce que, ce dont
When there's no antecedent (“what”):
- <b>Ce qui</b> m'intéresse, c'est l'histoire. (subject)
- Je sais <b>ce que</b> tu veux. (direct object)
- <b>Ce dont</b> j'ai besoin, c'est du temps. (de)
## Details that show in writing
- que → qu' before a vowel, but qui never: l'homme qui arrive.
- For time, use où, not quand: le jour où, l'année où, au moment où.
- After que as a direct object, the participle agrees: la lettre que j'ai écrit<b>e</b> (topic O4).`,
P4:`## The column table
Pronouns go before the verb in a fixed order. Take at most one from each column, left to right.
| 1 | 2 | 3 | 4 | 5 |
| me, te, se, nous, vous | le, la, les | lui, leur | y | en |
Columns 1 and 3 never appear together.
## Examples
- Il <b>me le</b> donne.
- Je <b>le lui</b> donne. Je <b>les leur</b> envoie.
- Il <b>m'en</b> parle. Je <b>vous y</b> emmène.
- Il <b>y en</b> a.
## In the passé composé and with a negative
All pronouns go before the auxiliary: Je <b>le lui</b> ai donné. The negation wraps around the pronouns and the auxiliary: Je <b>ne</b> le lui ai <b>pas</b> donné.
## Affirmative imperative: a different order
Verb – direct – indirect – y – en, all hyphenated, like English word order:
- Donne-<b>le-moi</b> (“give it to me”). Donne-<b>le-lui</b>.
- moi / toi + en → <b>m'en, t'en</b>: Donne-m'en.
The negative imperative goes back to the normal order: <b>Ne me le</b> donne pas.
! Link with topic O4: in « Je les lui ai montrées », les comes before the verb, so the participle agrees.`,
P5:`## When you need it
After a preposition (avec, pour, sur, dans, sans, par, chez, vers…) in a relative clause. English often puts the preposition at the end (“the table I put it on”); French moves it to the front: la table <b>sur laquelle</b> je l'ai posé.
- For things — <b>lequel</b> and its forms.
- For people — usually <b>qui</b>: la personne avec qui je travaille.
- After parmi and entre — only lesquels / lesquelles: les amis <b>parmi lesquels</b>…
| | plain | à + | de + |
| masc. singular | lequel | auquel | duquel |
| fem. singular | laquelle | à laquelle | de laquelle |
| masc. plural | lesquels | auxquels | desquels |
| fem. plural | lesquelles | auxquelles | desquelles |
## auquel: verbs with à
penser à, participer à, s'intéresser à, répondre à, assister à: la réunion <b>à laquelle</b> j'ai assisté, les questions <b>auxquelles</b> j'ai répondu.
## duquel or dont
- <b>dont</b> — for a simple de straight after the word: le livre dont je parle.
- <b>duquel</b> — after compound prepositions: près de, à côté de, au milieu de, autour de, en face de, à cause de: le restaurant <b>en face duquel</b> j'habite.
- Also after a preposition + noun: la société <b>pour le compte de laquelle</b> je travaille.
## quoi
After a preposition, when the antecedent is neutral (ce, rien, quelque chose): C'est ce <b>à quoi</b> je pense. Il n'y a rien <b>sur quoi</b> compter.`,
O1:`## Why it's hard
A lot of French grammar is “silent”: different words sound the same, and only their role in the sentence tells them apart. The method is simple: replace the word with another one that sounds different. If the substitution works, that's the right form.
| Pair | What it is | Test | Example |
| a / à | avoir / preposition | → avait | Il <b>a</b> mal <b>à</b> la tête. |
| et / est | “and” / être | → était | Il <b>est</b> grand <b>et</b> fort. |
| son / sont | “his/her” / être | → étaient; son → mon | Ses parents <b>sont</b> là avec <b>son</b> frère. |
| on / ont | pronoun / avoir | → avaient; on → il | <b>On</b> sait qu'ils <b>ont</b> raison. |
| ou / où | “or” / “where, when” | → ou bien | <b>Où</b> vas-tu, ici <b>ou</b> là ? |
## Details
- À at the start of a sentence keeps its capital and accent: À bientôt.
- où is the only French word with ù.
- In speech, on means “we”: On est arrivés. In writing, nous is better.
## How to practise
Take your own text and do a separate pass for just these ten words. Underline each one and run the test in your head. After two or three weeks the tests become automatic.
! It's the same problem as English its / it's or there / their / they're — only more frequent.`,
O2:`## The ce / se / c'est group
| Word | What it is | Test |
| ces | “these” (plural of ce, cet, cette) | make it singular: ce livre |
| ses | “his / her” in the plural | replace with mes or son |
| c'est | “it is” | replace with c'était |
| s'est | se + être (reflexive verb in the PC) | replace with je me suis |
| sait, sais | savoir | replace with savait |
| ce / se | ce + noun or ce que; se + verb | se → me: il se lave → je me lave |
## Other pairs
| Word | What it is | Test |
| la / là / l'a | article or pronoun / “there” / le, la + avoir | la → le; là → ici; l'a → l'avait |
| peu / peut / peux | “little” / pouvoir | peu → beaucoup; peut → pouvait |
| quel(le)(s) / qu'elle(s) | question word + noun / que + elle | qu'elle → qu'il |
| sans / s'en / sent | “without” / se + en / sentir | s'en → m'en; sent → sentait |
| mais / mes / met | “but” / “my” / mettre | mes → tes; met → mettait |
## quel agrees
quel livre, quel<b>le</b> heure, quel<b>s</b> livres, quel<b>les</b> idées. Trap: « Quelle est ta question ? » — quelle agrees with question even across the verb.
! Make your own list of the homophones you get wrong most often, and reread each text with a separate pass just for them.`,
O3:`## Why it's hard
parler, parlé, parlez, parlais, parlait sound the same or almost the same. Pronunciation won't help — you need grammar.
## The main test
Swap in a group 3 verb whose forms sound different: <b>vendre / vendu / vendez / vendait</b> (or prendre / pris).
- Je veux (manger?) → je veux <b>vendre</b> ✓ → infinitive: manger.
- J'ai (mangé?) → j'ai <b>vendu</b> ✓ → participle: mangé.
| Form | When | Test |
| -er | infinitive after another verb (aller, vouloir, pouvoir, devoir, aimer…) or a preposition (à, de, pour, sans, avant de) | vendre |
| -é, -ée, -és, -ées | participle after avoir / être, or as an adjective | vendu |
| -ez | vous | vous vendez |
| -ais, -ait, -aient | imparfait | vendait |
## The participle as an adjective
Without an auxiliary, the participle behaves like an adjective and agrees: les portes <b>fermées</b>, une lettre <b>envoyée</b>, le travail <b>terminé</b>.
## Trap: a pronoun between the verbs
Je vais <b>te</b> (téléphoner), Je <b>l'</b>ai (vu), Il faut <b>les</b> (acheter). The pronoun doesn't change the rule: the test works the same. Je vais te vendre ✓ → téléphoner.
! The English equivalent is the difference between “to do” and “done”: if you could say “to sell” it's -er, if you could say “sold” it's -é.`,
O4:`## Three rules for the participe passé
- With <b>être</b> → agrees with the subject (topic V2).
- With <b>avoir</b> → agrees with the direct object (COD), only if it comes <b>before</b> the verb.
- Without an auxiliary → like an adjective (topic O3).
## Algorithm for avoir
- Find the participle with avoir.
- Ask “what? whom?” after the verb: J'ai mangé — quoi ?
- No answer, or the answer comes after the verb → no agreement.
- The answer comes before the verb → agree with it in gender and number.
## Where the object comes before the verb
| Case | Example |
| pronouns me, te, le, la, les, nous, vous | Il nous a invité<b>s</b>. Je l'ai vu<b>e</b>. |
| relative que | Les lettres que j'ai reçu<b>es</b>. |
| question words quel, combien de | Quelle robe as-tu choisi<b>e</b> ? Combien de livres as-tu lu<b>s</b> ? |
## When there's no agreement
- with en: Des pommes ? J'en ai mangé.
- with an indirect object: Je leur ai parlé (leur is a COI).
- in impersonal verbs: Les chaleurs qu'il a fait.
- fait + infinitive: Je les ai fait venir.
## Check by sound
In some verbs you can hear the agreement: écrit / écri<b>te</b>, fait / fai<b>te</b>, pris / pri<b>se</b>, mis / mi<b>se</b>, ouvert / ouver<b>te</b>. « La lettre que j'ai écrite » is pronounced [ekʁit]. If you hear the consonant in these verbs, add the e in writing for all the others.`,
O5:`## Reflexive verbs in the passé composé
They always take être but agree according to the avoir rule. Method: mentally replace être with avoir and find the direct object.
| Sentence | Swap | Direct object | Agreement |
| Elle s'est lavée. | elle a lavé qui ? | se (= elle), before | yes |
| Elle s'est lavé les mains. | a lavé quoi ? | les mains, after | no |
| Ils se sont parlé. | parler <b>à</b> qqn | se is indirect | no |
Verbs where se is indirect (no agreement): se parler, se téléphoner, se dire, se demander, s'écrire, se sourire, se plaire, se ressembler, se mentir, se succéder.
Purely reflexive verbs (s'en aller, se souvenir, se moquer, s'évanouir) always agree with the subject: Elle s'est souvenu<b>e</b>.
## leur
- Before a verb — a pronoun (= à eux, “to them”), <b>never with -s</b>: Je leur parle.
- Before a noun — a possessive (“their”): <b>leur</b> + singular (leur maison, one for all of them), <b>leurs</b> + plural (leurs enfants).
## tout
| Form | Example |
| tout (masc. singular) | tout le temps |
| toute (fem. singular) | toute la journée |
| tous (masc. plural) | tous les jours; pronoun: Ils sont tous là [tus] |
| toutes (fem. plural) | toutes les semaines |
As an adverb (“quite, completely”) tout doesn't change: Ils sont tout contents. But before a feminine adjective starting with a consonant, it does: Elle est tou<b>te</b> petite. Elles sont tou<b>tes</b> petites.`,
S1:`## Word order
Subject – (ne) – pronouns – verb – (pas) – objects. Adjectives usually after the noun, adverbs after the verb.
## Negation
| Construction | Meaning |
| ne… pas | not |
| ne… jamais | never |
| ne… plus | no longer, not any more |
| ne… rien | nothing |
| ne… personne | nobody |
| ne… aucun(e) | not a single, no |
| ne… ni… ni… | neither… nor… |
| ne… pas encore | not yet |
| ne… que | only (not a negation) |
The second part replaces pas, it isn't added to it: Je ne vois <b>personne</b> (not *pas personne).
## Details that show in writing
- personne and rien can be subjects: <b>Personne n'</b>est venu. <b>Rien ne</b> marche.
- In the passé composé, ne… pas wraps the auxiliary: Je n'ai pas vu. But personne goes after the participle: Je n'ai vu personne.
- Before an infinitive, ne pas stay together: Je préfère <b>ne pas</b> répondre.
## Three types of questions
| Type | Example | Where to use it |
| intonation | Tu viens ? | speech |
| est-ce que | Est-ce que tu viens ? | neutral |
| inversion | Viens-tu ? | writing, polite |
Inversion with a noun: the subject stays and a pronoun is added: Marie vient-<b>elle</b> ? Pierre a-<b>t-il</b> fini ? Between two vowels, add -t-: a-t-il, parle-t-elle, va-t-on.
! French has no “do” for questions and negatives: “Do you speak French?” → Parlez-vous français ? or Est-ce que vous parlez français ? Never <s>Faites-vous parler</s>.`,
S2:`## Spaces
In France, a non-breaking space goes before double punctuation marks. It keeps the mark attached to the word so it can't jump to a new line. English does the opposite: no space before ? ! : ;
| Mark | Space before | Space after |
| . , | no | yes |
| ; ! ? | yes | yes |
| : | yes | yes |
| « | — | yes |
| » | yes | — |
Non-breaking space on a Mac: Option + Space. In Canada and Switzerland, a thin space or no space is common before ; ! ?
## Quotation marks and dialogue
The main quotation marks are « guillemets » with spaces inside. Nested quotes use “ ”. In dialogue, each line starts with a dash: <i>— Tu viens ? — Oui, j'arrive.</i>
## Commas
As in English, there's usually no comma before que, si, quand, parce que when the clause follows the main one: Je sais que tu as raison. Il est resté parce qu'il pleuvait.
- With a comma if the subordinate clause comes first: Quand il est arrivé, nous mangions.
- qui / que without commas when they identify (“the brother who lives in Lyon” — one of several). With commas when they just add information: Mon frère, qui habite à Lyon, est médecin (only one brother).
## Commas are required
- after introductory words: Cependant, Ensuite, Par ailleurs, En effet;
- before mais, car;
- in lists, but not before the et of the last item (no Oxford comma): du pain, du fromage et du vin.
## Capital letters
Languages, days, months are lower case — unlike English: le français, lundi, janvier. A nationality as a noun takes a capital (les Français), as an adjective it doesn't (un livre français).`,
S3:`## Linking words by function
| Function | Words | Followed by |
| cause | parce que (answers pourquoi), car (written), puisque (known cause), comme (at the start) | indicative |
| cause + noun | grâce à (+), à cause de (−), en raison de (formal) | noun |
| consequence | donc, c'est pourquoi, par conséquent, si bien que | indicative |
| opposition | mais, cependant, pourtant, toutefois, néanmoins | indicative |
| contrast | alors que, tandis que | indicative |
| concession | bien que, quoique | subjonctif |
| concession + noun | malgré | noun |
| purpose, same subject | pour, afin de | infinitive |
| purpose, different subject | pour que, afin que | subjonctif |
| time | quand, lorsque, pendant que, dès que, après que | indicative |
| time | avant que, jusqu'à ce que | subjonctif |
## The skeleton of a text
- Order: Tout d'abord… Ensuite… De plus / En outre… Enfin…
- Argument: D'une part… d'autre part… Certes…, mais…
- Conclusion: En conclusion, Bref, En somme.
## Typical mistakes
- car at the start of a sentence: <s>Car il pleuvait, …</s> → Comme il pleuvait, …
- pour que with the same subject: <s>Je travaille pour que je réussisse</s> → Je travaille <b>pour réussir</b>.
- malgré que is colloquial; in writing use <b>bien que</b>.
- même si + conditionnel: <s>même si j'aurais</s> → même si j'<b>avais</b>.
! False friends: <i>actuellement</i> = currently, <i>éventuellement</i> = possibly, <i>finalement</i> = in the end. “Actually” is en fait, “eventually” is finalement.`,
S4:`## Three types
They match the English first, second and third conditionals.
| Type | After si | In the main clause | Meaning |
| 1 | présent | présent, futur, impératif | real condition |
| 2 | imparfait | conditionnel présent | imagined now or in the future |
| 3 | plus-que-parfait | conditionnel passé | unreal in the past |
- Si tu viens, je <b>serai</b> content. (If you come, I'll be happy.)
- Si tu venais, je <b>serais</b> content. (If you came, I'd be happy.)
- Si tu étais venu, j'<b>aurais été</b> content. (If you had come, I'd have been happy.)
## Mixed conditions
The two halves can belong to different times:
- Si j'<b>avais étudié</b> (then), je <b>parlerais</b> bien maintenant.
- Si j'<b>étais</b> plus organisé (always), je n'<b>aurais</b> pas <b>oublié</b> (that time).
## The ban and the exception
Straight after si in a condition, there's never a futur or conditionnel — just like no “will” or “would” after “if”. Exception: si meaning “whether” in an indirect question isn't a condition: Je ne sais pas s'il <b>viendra</b> ✓.
## Contraction
si + il → <b>s'il</b>, si + ils → <b>s'ils</b>. But si elle, si on — no contraction.
## Alternatives to si
- au cas où + conditionnel: Au cas où il pleuvrait, … (in case)
- à condition que + subjonctif (provided that);
- sans + noun: Sans ton aide, je n'aurais pas réussi (without your help);
- même si + indicative: Même si c'est difficile, … (even if)`,
S5:`## Gérondif
en + nous stem of the présent + -ant: nous faisons → <b>en faisant</b>; nous finissons → <b>en finissant</b>. Exceptions: en étant, en ayant, en sachant. It often translates “while / by / on doing”.
- simultaneous action: Il travaille en écoutant de la musique (while listening);
- manner: C'est en forgeant qu'on devient forgeron (by forging);
- condition: En travaillant plus, tu réussiras;
- tout en — contrast: Tout en étant riche, il vit simplement.
! The subject of the gérondif must be the subject of the sentence, as with English participles. « En sortant du bus, la pluie a commencé » is wrong: it says the rain got off the bus. Correct: En sortant du bus, j'ai vu qu'il pleuvait.
## Participe présent without en
A written replacement for qui + verb, invariable: les étudiants <b>ayant</b> réussi = qui ont réussi. Don't confuse it with the adjective in -ant, which agrees: des enfants obéissant<b>s</b>. Sometimes they're even spelled differently:
| Participe présent | Adjective |
| fatiguant | fatigant |
| convainquant | convaincant |
| différant | différent |
| négligeant | négligent |
## Emphasis: c'est… qui / que
- c'est… <b>qui</b> — highlights the subject: C'est Marie qui a gagné.
- c'est… <b>que</b> — everything else: C'est hier que je l'ai vue. C'est à toi que je parle.
- The verb after qui agrees with the highlighted word: C'est moi qui <b>suis</b>, c'est vous qui <b>avez</b>.
- Ce qui…, c'est… / Ce que…, c'est…: Ce que j'aime, c'est voyager.
English often stresses a word with the voice (“MARIE won”); French prefers the c'est… qui structure, even in speech.
## Other written style devices
- Passive: Le pont a été construit en 1890.
- Inversion after peut-être, ainsi, sans doute at the start: Peut-être viendra-t-il.
- Dislocation (Ce film, je l'ai adoré) — spoken, use with care in writing.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"the auxiliaries avoir and être in the passé composé are in the présent: j'ai, il est.",
"V3<V2":"the imparfait is learned together with the passé composé: to choose between them you need both.",
"V4<V3":"plus-que-parfait = avoir / être in the imparfait + participle: j'avais fini.",
"V5<V4":"you'll recognise the passé simple in texts where it sits next to the imparfait and plus-que-parfait.",
"M1<V1":"the imperative is the tu, nous, vous forms of the présent without the pronoun.",
"M2<V1":"the futur endings (-ai, -as, -a, -ons, -ez, -ont) are the présent of avoir.",
"M3<M2":"the conditionnel is built on the futur stem: fer-, ser-, pourr- …",
"M3<V3":"the conditionnel endings are the same as the imparfait: -ais, -ait, -aient.",
"M4<M3":"the subjonctif often sits next to the conditionnel: Je voudrais que tu viennes.",
"M4<V1":"the subjonctif stem comes from the ils form of the présent: ils finissent → que je finisse.",
"M5<M4":"in reported speech, requests and wishes become que + subjonctif or de + infinitive.",
"M5<V4":"in reported speech, the passé composé becomes the plus-que-parfait.",
"N2<N1":"gender shows in the article (le / la), the plural in les / des.",
"N3<N2":"adjectives take the gender and number of the noun, so you need to know them.",
"N4<N3":"comparisons work on adjectives, so you need their forms and position.",
"N5<N4":"nominalisation often turns an adjective into a noun: rapide → la rapidité.",
"N5<S3":"nominalisation works together with linking words + noun: en raison de, à cause de.",
"P1<V1":"the pronoun goes before a verb you first need to conjugate correctly.",
"P2<P1":"y and en take the same position as le / lui, and they're easy to mix up.",
"P2<N1":"en replaces du, de la, des — partitive and indefinite articles.",
"P3<P2":"dont is a “relative” of en: both replace de + …",
"P3<S1":"relative pronouns join simple sentences, so you need to build those confidently first.",
"P4<P2":"y and en take part in double pronouns.",
"P4<M1":"in the affirmative imperative the pronoun order changes: Donne-le-moi.",
"P5<P3":"lequel, auquel, duquel extend qui, que, dont after prepositions.",
"O1<V1":"a, est, sont, ont are forms of avoir and être in the présent.",
"O2<O1":"the same substitution method, just new pairs of words.",
"O2<P1":"ce / se and la / l'a get confused with the pronouns le, la, se.",
"O3<V2":"the -é ending is the participe passé of the passé composé.",
"O4<O3":"first you need to write -é correctly, then add -e / -s to it.",
"O4<P1":"agreement depends on the pronouns le, la, les before the verb.",
"O5<O4":"the rule for reflexive verbs extends the rule for avoir.",
"O5<P4":"leur as a pronoun and as a possessive get mixed up in sentences with several pronouns.",
"S1<V1":"the negation ne … pas wraps around the conjugated verb.",
"S2<S1":"punctuation depends on the type of sentence: question, negation, exclamation.",
"S3<S2":"most linking words need a comma: Cependant, …",
"S4<S3":"si is a linking word too, but with its own tense rules.",
"S4<M3":"the main clause of a conditional sentence is in the conditionnel.",
"S4<V4":"the third type of conditional needs the plus-que-parfait after si.",
"S5<S4":"style devices rely on confident complex sentences.",
"S5<N5":"both are tools of written style, and they work together."
};

/* recommended order of all 30 topics; within a stage, prerequisites come first */
const ROUTE = ["V1","N1","O1","S1","P1","M1", "V2","M2","N2","P2","S2","O2", "V3","O3","M3","N3","S3","P3", "V4","O4","M4","S4","P4","N4", "M5","O5","N5","S5","P5","V5"];
/* fix-the-mistake answers in these topics also check spacing (French punctuation) */
const STRICT = ["S2"];
/* localStorage key prefix: progress is kept per target language */
const STORE = "frmap-";

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES, ROUTE, STRICT, STORE };
