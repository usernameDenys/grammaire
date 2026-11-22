/* eslint-disable */
// English grammar map content written for French speakers (native "fr", target "en").
// Same topics, examples and exercises as uk.js; explanations compare English with French.
// Target level: B2, for confident writing and speaking.
// Field "fr" holds the name in the target language (historical key shared with the French maps);
// field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Tenses",gloss:"les temps",c:"--l-v"},
  M:{fr:"Modals & future",gloss:"modaux et futur",c:"--l-m"},
  N:{fr:"Noun phrase",gloss:"groupe nominal",c:"--l-n"},
  P:{fr:"Patterns",gloss:"constructions",c:"--l-p"},
  Q:{fr:"Questions & speech",gloss:"questions, discours",c:"--l-o"},
  S:{fr:"Sentence & text",gloss:"phrase et texte",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Fondations",goal:"Des phrases simples sans faute : les deux présents, les articles, in/on/at, les questions et l'ordre des mots.",task:"Décris ta semaine habituelle et ce qui se passe cette semaine précisément (10 à 12 phrases). Ajoute 3 questions à ton interlocuteur. Raconte ensuite la même chose à voix haute et enregistre-toi."},
  {n:2,name:"Raconter",goal:"Raconter le passé et les projets : past simple, futur, -ing ou to, question tags, ponctuation.",task:"Une lettre à un ami sur ton dernier week-end et tes projets (150 mots). Vérifie les apostrophes, les majuscules et les virgules. Raconte la même histoire à l'oral en 2 minutes."},
  {n:3,name:"Relier les idées",goal:"Des phrases et des idées plus longues : present perfect, conditionnelles, relatives, questions indirectes polies.",task:"Essai « What has changed in your city in the last ten years? » (200 mots) : present perfect, 2 phrases conditionnelles, 3 relatives. Plus une lettre de demande polie avec des questions indirectes."},
  {n:4,name:"Nuances",goal:"Temps du récit, passé irréel, passif, discours rapporté, connecteurs logiques.",task:"L'histoire d'une journée où tout a mal tourné (250 mots) : past perfect, third conditional, passif. Puis rapporte au discours indirect une conversation de cette journée."},
  {n:5,name:"Style",goal:"La langue du B2 : perfect continuous, déduction, collocations, reporting verbs, mise en relief et registre soutenu.",task:"Un essai argumentatif au format B2 First (220 à 260 mots) et un monologue de 3 minutes sur le même sujet. Vérifie les collocations, les reporting verbs et le registre."}
];

const T = [
/* ---------- V: tenses ---------- */
{id:"V1",d:"V",p:1,fr:"Present",gloss:"les présents",t:"Present simple or present continuous?",
 s:"Deux présents là où le français n'en a qu'un. Le simple pour les habitudes et les faits, le continuous pour ce qui se passe maintenant ou temporairement.",
 r:["Present simple : <b>I work, she works</b>. À la 3<sup>e</sup> personne du singulier : <b>-s</b>. Questions et négations avec <b>do / does</b> : Does she work? She doesn't work.","Present continuous : <b>am / is / are + -ing</b> : I'm working, they're waiting.","Simple : habitudes, faits, horaires (usually, every day, never). Continuous : maintenant, en ce moment, temporaire (now, at the moment, this week).","Les verbes d'état (know, like, want, believe, need, own) ne prennent en général pas -ing : I <b>know</b>, et non I'm knowing."],
 e:[["She works in a bank, but this month she's working from home.","Elle travaille dans une banque, mais ce mois-ci elle travaille de chez elle."],["Water boils at 100 degrees.","L'eau bout à 100 degrés."],["What are you doing? — I'm cooking.","Qu'est-ce que tu fais ? — Je cuisine."]],
 x:["I am understanding you now.","I understand you now.","understand est un verbe d'état : pas de -ing, même « maintenant »."],
 q:[["He usually ___ to work by bus.",["go","goes","is going"],1,"usually = habitude ; 3e personne du singulier → goes."],["Listen! Someone ___ at the door.",["knocks","is knocking","knock"],1,"Listen! : l'action a lieu en ce moment → continuous."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Past simple",gloss:"le prétérit",t:"Past simple and used to",
 s:"Le temps principal du récit au passé terminé. Les difficultés : les verbes irréguliers et did dans les questions.",
 r:["Verbes réguliers : <b>-ed</b> (worked, stopped, studied). Les irréguliers s'apprennent : go → <b>went</b>, see → <b>saw</b>, buy → <b>bought</b>.","Questions et négations avec <b>did</b> + infinitif : Did you see? I didn't go. Après did, pas de -ed.","Le past simple va avec un moment précis du passé : yesterday, last week, in 2019, two days ago.","<b>used to</b> + infinitif : une habitude ou un état passé qui n'existe plus : I used to smoke."],
 e:[["We moved to Lviv two years ago.","Nous avons déménagé à Lviv il y a deux ans."],["Did you enjoy the film? — No, I didn't.","Le film t'a plu ? — Non."],["She used to live in Poland.","Avant, elle habitait en Pologne."]],
 x:["Did you went to the party?","Did you go to the party?","Après did, l'infinitif ne change pas : did porte déjà le passé."],
 q:[["I ___ him at the station yesterday.",["see","saw","seen"],1,"yesterday → past simple ; see → saw."],["They ___ come to the meeting.",["didn't","don't","wasn't"],0,"Négation au past simple : didn't + infinitif."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Present perfect",gloss:"passé et présent",t:"Present perfect or past simple?",
 s:"Le piège numéro un des francophones : le passé composé se traduit tantôt par l'un, tantôt par l'autre. Le present perfect relie le passé au présent.",
 r:["Forme : <b>have / has + participe passé</b> : I've finished, she has gone.","Present perfect : expérience sans date, résultat visible maintenant, période pas encore terminée : ever, never, already, yet, just, so far, this week.","Past simple : événement terminé à un moment précis : yesterday, in 2020, ago, last year, when I was young.","<b>for</b> + durée (for three years), <b>since</b> + point de départ (since 2020). L'action dure encore → present perfect, jamais le présent simple."],
 e:[["I've lost my keys. — When did you last see them?","J'ai perdu mes clés. — Tu les as vues pour la dernière fois quand ?"],["Have you ever been to London?","Tu es déjà allé à Londres ?"],["She has lived here since 2018.","Elle habite ici depuis 2018."]],
 x:["I live here for five years.","I've lived here for five years.","L'action a commencé dans le passé et dure encore → present perfect. « J'habite ici depuis cinq ans » est un faux ami grammatical."],
 q:[["I ___ this film three times.",["saw","have seen","see"],1,"Expérience sans moment précis → present perfect."],["We ___ to Paris in 2019.",["have gone","went","have been"],1,"Année précise → past simple."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Narrative tenses",gloss:"temps du récit",t:"Past continuous and past perfect",
 s:"Pour qu'une histoire sonne naturelle, il faut trois temps du passé : le décor, les événements et ce qui s'est passé encore avant.",
 r:["Past continuous : <b>was / were + -ing</b> : le décor, l'action en cours : It was raining.","Past simple : les événements qui font avancer l'histoire : Suddenly the phone rang.","Past perfect : <b>had + participe passé</b> : une action antérieure à une autre action passée : When I arrived, the film had started.","Schéma typique : <i>I was walking home when I saw that someone had broken my car window.</i>"],
 e:[["While we were having dinner, the lights went out.","Pendant que nous dînions, l'électricité a été coupée."],["She was tired because she had worked all night.","Elle était fatiguée parce qu'elle avait travaillé toute la nuit."],["By the time the police arrived, the thief had escaped.","Quand la police est arrivée, le voleur s'était déjà enfui."]],
 x:["When I arrived at the station, the train already left.","When I arrived at the station, the train had already left.","Le train est parti avant mon arrivée → past perfect."],
 q:[["I ___ TV when you called.",["watched","was watching","had watched"],1,"Action en cours, interrompue → past continuous."],["He couldn't get in because he ___ his keys.",["lost","was losing","had lost"],2,"Il avait perdu ses clés avant → past perfect."]],pre:["V3"]},
{id:"V5",d:"V",p:5,fr:"Perfect continuous",gloss:"durée et perspective",t:"Perfect continuous and future perfect",
 s:"Des formes de niveau B2 qui expriment une durée jusqu'à un moment donné. Naturelles à l'oral, utiles dans les essais et les rapports.",
 r:["Present perfect continuous : <b>have been + -ing</b> : durée jusqu'à maintenant ou trace visible : I've been waiting for an hour. You look tired — have you been running?","Past perfect continuous : <b>had been + -ing</b> : durée jusqu'à un moment du passé : She had been working there for ten years when it closed.","Future continuous : <b>will be + -ing</b> : action en cours à un moment du futur : This time tomorrow I'll be flying to Rome.","Future perfect : <b>will have + participe passé</b> : terminé avant un moment donné : By June I'll have finished the course."],
 e:[["How long have you been learning English?","Depuis combien de temps apprends-tu l'anglais ?"],["I'll have saved enough money by next summer.","D'ici l'été prochain, j'aurai économisé assez d'argent."],["Don't call at 8 — we'll be having dinner.","N'appelle pas à 8 h : nous serons en train de dîner."]],
 x:["I'm waiting for you since two o'clock!","I've been waiting for you since two o'clock!","« depuis » + durée jusqu'à maintenant → present perfect continuous."],
 q:[["She's tired because she ___ all day.",["has worked","has been working","is working"],1,"Durée et conséquence visible → perfect continuous."],["By 2030 they ___ the new bridge.",["will build","will have built","are building"],1,"by + moment futur → future perfect."]],pre:["V4"]},
/* ---------- M: modals and future ---------- */
{id:"M1",d:"M",p:1,fr:"can · must · should",gloss:"capacité et obligation",t:"Modal verbs: can, must, have to, should",
 s:"Les modaux expriment la capacité, la permission, l'obligation et le conseil. Impossible de demander ou de conseiller poliment sans eux.",
 r:["Après un modal : infinitif <b>sans to</b> : She can swim. Pas can to swim, pas cans.","<b>can</b> : capacité, possibilité, permission ; <b>could</b> : capacité passée ou demande polie.","<b>must</b> : obligation venant du locuteur ; <b>have to</b> : obligation extérieure (règles). <b>mustn't</b> : interdiction ; <b>don't have to</b> : pas besoin.","<b>should</b> : conseil : You should see a doctor."],
 e:[["Could you help me with this form?","Pourriez-vous m'aider avec ce formulaire ?"],["You mustn't smoke here, but you don't have to leave.","Il est interdit de fumer ici, mais vous n'êtes pas obligé de sortir."],["I had to work late yesterday.","Hier, j'ai dû travailler tard."]],
 x:["You don't must park here.","You mustn't park here.","Les modaux se mettent à la forme négative avec not, sans do : mustn't, can't, shouldn't."],
 q:[["You ___ wear a uniform; it's optional.",["mustn't","don't have to","can't"],1,"Optional = pas d'obligation → don't have to."],["She ___ speak three languages.",["can","cans","can to"],0,"Les modaux ne prennent ni -s ni to."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Future",gloss:"le futur",t:"Future: will, going to, present continuous",
 s:"L'anglais a plusieurs façons de parler du futur. Le choix dépend de ce qu'on exprime : une décision, un projet ou une prévision.",
 r:["<b>will</b> : décision prise sur le moment, promesse, prévision-opinion : I'll get it! I think it will rain.","<b>going to</b> : intention, projet ; prévision fondée sur des indices : I'm going to study law. Look at the clouds — it's going to rain.","<b>Present continuous</b> : rendez-vous fixé (heure, lieu) : I'm meeting Tom at six.","Après <b>when, if, as soon as, before, until</b>, on met le présent pour parler du futur : When I get home, I'll call you."],
 e:[["I'm going to start running next week.","Je vais commencer à courir la semaine prochaine (projet)."],["The phone's ringing. — I'll answer it.","Le téléphone sonne. — Je réponds."],["We're flying to Warsaw on Friday.","Nous prenons l'avion pour Varsovie vendredi."]],
 x:["I'll call you when I will arrive.","I'll call you when I arrive.","Après when, présent simple. Le français dit « quand j'arriverai », l'anglais non."],
 q:[["I've decided: I ___ a new laptop.",["'ll buy","'m going to buy","buy"],1,"Décision déjà prise → going to."],["Wait, I ___ help you with those bags.",["'ll","'m going to","am"],0,"Décision spontanée → will."]],pre:["V1"]},
{id:"M3",d:"M",p:3,fr:"Conditionals 0–2",gloss:"les conditionnelles",t:"Conditionals: zero, first and second",
 s:"Les phrases avec if, réelles et imaginaires. Le second conditional est la clé des conseils et des hypothèses à l'oral.",
 r:["Zero : <b>if + présent, présent</b> : vérité générale : If you heat ice, it melts.","First : <b>if + présent, will + infinitif</b> : possibilité réelle : If it rains, we'll stay in.","Second : <b>if + past simple, would + infinitif</b> : situation imaginaire ou peu probable : If I had more time, I would travel.","<b>If I were you, I'd…</b> : conseil. <b>unless</b> = if not."],
 e:[["If you don't hurry, you'll miss the bus.","Si tu ne te dépêches pas, tu vas rater le bus."],["If I lived by the sea, I'd swim every day.","Si j'habitais au bord de la mer, je nagerais tous les jours."],["If I were you, I wouldn't sign it.","À ta place, je ne le signerais pas."]],
 x:["If I would have money, I would buy a car.","If I had money, I would buy a car.","would seulement dans la principale, jamais après if — comme pas de conditionnel après « si »."],
 q:[["If you ___ water to 100°C, it boils.",["heat","will heat","heated"],0,"Vérité générale → zero conditional."],["If I ___ rich, I'd buy an island.",["am","were","would be"],1,"Situation imaginaire → past ; were pour toutes les personnes."]],pre:["M2","V2"]},
{id:"M4",d:"M",p:4,fr:"3rd conditional · wish",gloss:"passé irréel et regret",t:"Third conditional, mixed conditionals and wish",
 s:"Parler de ce qui aurait pu arriver mais n'est pas arrivé, et exprimer des regrets. Un classique des examens B2.",
 r:["Third : <b>if + past perfect, would have + participe passé</b> : If I had left earlier, I wouldn't have missed the train.","Mixed : condition passée → résultat présent : If I had studied medicine, I would be a doctor now.","<b>wish / if only + past simple</b> : regret sur le présent : I wish I had more time.","<b>wish + past perfect</b> : regret sur le passé : I wish I hadn't said that. <b>wish + would</b> : agacement face au comportement d'autrui : I wish you would stop."],
 e:[["If you had told me, I would have helped you.","Si tu me l'avais dit, je t'aurais aidé."],["I wish I could speak Spanish.","J'aimerais savoir parler espagnol."],["If only I hadn't sold that car!","Si seulement je n'avais pas vendu cette voiture !"]],
 x:["If I would have known, I would have come.","If I had known, I would have come.","Après if : past perfect ; would have seulement dans la principale."],
 q:[["If we ___ the map, we wouldn't have got lost.",["took","had taken","would take"],1,"Condition irréelle dans le passé → past perfect."],["I wish I ___ so much yesterday.",["didn't eat","hadn't eaten","wouldn't eat"],1,"Regret sur le passé → wish + past perfect."]],pre:["M3","V4"]},
{id:"M5",d:"M",p:5,fr:"Past modals",gloss:"déduction et passé",t:"Deduction and past modals: must have, might have, should have",
 s:"Faire des déductions et des suppositions, parler des erreurs passées et des occasions manquées.",
 r:["Déduction sur le présent : <b>must</b> (presque sûr que oui), <b>might / may / could</b> (peut-être), <b>can't</b> (sûr que non) : She must be at work. He can't be serious.","Sur le passé : <b>must have / might have / can't have + participe passé</b> : They must have left.","<b>should have done</b> : reproche, regret : You should have told me.","<b>needn't have done</b> : fait pour rien ; <b>didn't need to</b> : ce n'était pas nécessaire (et sans doute pas fait)."],
 e:[["The lights are off — they must have gone to bed.","Les lumières sont éteintes : ils ont dû aller se coucher."],["She can't have finished already; she only started at ten.","Elle ne peut pas avoir déjà fini : elle n'a commencé qu'à dix heures."],["I should have listened to you.","J'aurais dû t'écouter."]],
 x:["He mustn't be at home — his car isn't there.","He can't be at home — his car isn't there.","Déduction négative → can't. mustn't exprime une interdiction."],
 q:[["You ___ be hungry after that long walk.",["must","can't","should have"],0,"Déduction logique positive → must."],["I ___ revised more; I failed the test.",["must have","should have","can't have"],1,"Regret sur le passé → should have."]],pre:["M4","V3"]},
/* ---------- N: noun phrase ---------- */
{id:"N1",d:"N",p:1,fr:"Articles",gloss:"les articles",t:"Articles: a, an, the or nothing",
 s:"Le français et l'anglais ont des articles, mais ne les emploient pas de la même façon. L'erreur typique : mettre the là où l'anglais n'en met pas.",
 r:["<b>a / an</b> : un parmi d'autres, première mention, profession : I saw a dog. She's a teacher. an devant un son voyelle : an hour, a university.","<b>the</b> : connu des deux, unique, déjà mentionné : The dog was huge. the sun, the best.","Pas d'article (Ø) pour le général au pluriel et l'indénombrable : I like cats. Water is important.","Pas d'article : la plupart des pays et des villes, les langues, les repas : in Ukraine, speak English, have breakfast. Mais the UK, the USA."],
 e:[["I bought a book. The book is about Japan.","J'ai acheté un livre. Le livre parle du Japon."],["Life is short.","La vie est courte (en général)."],["She plays the piano and works as an engineer.","Elle joue du piano et travaille comme ingénieure."]],
 x:["She is doctor.","She is a doctor.","Profession au singulier : avec a / an (alors que le français dit « elle est médecin »)."],
 q:[["I need ___ umbrella.",["a","an","the"],1,"umbrella commence par un son voyelle → an."],["___ moon is very bright tonight.",["A","The","—"],1,"Objet unique → the."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Countable · uncountable",gloss:"dénombrable et quantité",t:"Countable and uncountable nouns, quantifiers",
 s:"Selon qu'un nom se compte ou non, on choisit l'article, le pluriel et les mots de quantité : much ou many, few ou little.",
 r:["Les dénombrables ont un pluriel et prennent a / an : a chair, two chairs. Les indénombrables, non : water, advice, information, furniture, news.","<b>many / few / a few</b> avec les dénombrables ; <b>much / little / a little</b> avec les indénombrables ; <b>a lot of</b> avec les deux.","<b>some</b> dans les affirmations et les demandes ; <b>any</b> dans les négations et les questions : Is there any milk? Would you like some tea?","<b>few / little</b> : peu (sens négatif) ; <b>a few / a little</b> : quelques-uns, un peu (suffisant)."],
 e:[["Can you give me some advice?","Tu peux me donner un conseil ?"],["There aren't many people here, but there's a lot of noise.","Il n'y a pas beaucoup de monde ici, mais il y a beaucoup de bruit."],["I have a few friends in Canada.","J'ai quelques amis au Canada."]],
 x:["She gave me many useful informations.","She gave me a lot of useful information.","information est indénombrable : ni pluriel ni many."],
 q:[["How ___ money do you need?",["many","much","few"],1,"money est indénombrable → much."],["There are ___ apples left — enough for a pie.",["a few","a little","few"],0,"Dénombrable, et en quantité suffisante → a few."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Adjectives · adverbs",gloss:"adjectifs et adverbes",t:"Adjectives and adverbs: order, -ed / -ing, so / such, too / enough",
 s:"Décrire avec précision : l'ordre des adjectifs, bored ou boring, good ou well, so ou such.",
 r:["L'adjectif est invariable et se place avant le nom : a <b>red</b> car, red cars.","Ordre : opinion → taille → âge → forme → couleur → origine → matière : a lovely small old round red Italian wooden table.","<b>-ed</b> : ce que ressent la personne (bored, interested) ; <b>-ing</b> : ce qui provoque ce sentiment (boring, interesting).","L'adverbe décrit l'action : She drives <b>carefully</b> ; good → <b>well</b>. <b>so</b> + adjectif, <b>such (a)</b> + nom ; <b>too</b> + adjectif (trop), adjectif + <b>enough</b>."],
 e:[["The film was boring, so I was bored.","Le film était ennuyeux, alors je me suis ennuyé."],["She speaks English very well.","Elle parle très bien anglais."],["It was such a beautiful day that we stayed outside.","Il faisait si beau que nous sommes restés dehors."]],
 x:["I'm very interesting in history.","I'm very interested in history.","Ce que ressent la personne → -ed."],
 q:[["He's not old ___ to drive.",["enough","too","so"],0,"Adjectif + enough."],["You did the job really ___.",["good","well","goodly"],1,"On décrit l'action → adverbe well."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Comparison",gloss:"la comparaison",t:"Comparatives and superlatives",
 s:"La comparaison sert dans les essais, les avis et la conversation de tous les jours. Les pièges : more ou -er, et comment renforcer une comparaison.",
 r:["Adjectifs courts : <b>-er / the -est</b> : cheaper, the cheapest ; big → bigger ; happy → happier.","Adjectifs longs (deux syllabes ou plus, sauf en -y) : <b>more / the most</b> : more expensive, the most interesting.","Irréguliers : good → better → the best ; bad → worse → the worst ; far → further.","<b>as … as</b> : aussi … que ; <b>not as … as</b> : moins … que ; renforcer : much / far / a lot bigger, slightly bigger ; <b>the more…, the better</b>."],
 e:[["This phone is much cheaper than that one.","Ce téléphone est beaucoup moins cher que celui-là."],["It's the most beautiful city I've ever seen.","C'est la plus belle ville que j'aie jamais vue."],["The more you practise, the more confident you become.","Plus tu t'entraînes, plus tu prends confiance."]],
 x:["She is more taller than her brother.","She is taller than her brother.","Soit -er, soit more, jamais les deux."],
 q:[["Today is ___ than yesterday.",["hotter","more hot","hoter"],0,"Adjectif court : hot → hotter (t doublé)."],["This is the ___ film of the year.",["better","best","most good"],1,"Superlatif de good → the best."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Noun phrases",gloss:"groupe nominal et style",t:"Noun phrases: compound nouns, 's or of, nominalisation",
 s:"L'anglais écrit concentre beaucoup d'information dans le groupe nominal. C'est une marque d'un B2 solide.",
 r:["Le nom complément se place devant le nom principal et reste au singulier : a <b>bus</b> stop, a <b>ten-minute</b> walk, a <b>car</b> park.","<b>'s</b> pour les personnes, les animaux, les organisations, le temps : my sister's car, the company's profits, today's news. <b>of</b> pour les choses et les groupes longs : the end of the film.","Nominalisation : le verbe ou l'adjectif devient un nom : decide → decision, improve → improvement, able → ability.","Reformulation typique dans un essai : Because prices increased → <b>Due to the increase in prices</b>."],
 e:[["There has been a significant improvement in air quality.","La qualité de l'air s'est nettement améliorée."],["The ten-year-old boy won a three-day trip.","Le garçon de dix ans a gagné un voyage de trois jours."],["The project's success surprised everyone.","Le succès du projet a surpris tout le monde."]],
 x:["We stayed in a five-stars hotel.","We stayed in a five-star hotel.","Le nom complément ne prend pas de pluriel, même avec un nombre."],
 q:[["We need a ___ solution.",["long-term","long-terms","term-long"],0,"Adjectif composé : long-term."],["I met ___ yesterday.",["the friend of my brother","my brother's friend","my brother friend"],1,"Pour une personne, 's est plus naturel."]],pre:["N4","S3"]},
/* ---------- P: prepositions and verb patterns ---------- */
{id:"P1",d:"P",p:1,fr:"in · on · at",gloss:"temps et lieu",t:"Prepositions of time and place: in, on, at",
 s:"Trois petits mots qui correspondent à « à », « en », « dans », « sur ». Le choix dépend de la « taille » du moment ou du lieu.",
 r:["Temps : <b>at</b> pour un moment précis (at 6, at night, at the weekend) ; <b>on</b> pour les jours et les dates (on Monday, on 5 May) ; <b>in</b> pour les périodes plus longues (in June, in 2020, in the morning).","Lieu : <b>at</b> pour un point (at the bus stop, at home, at work) ; <b>on</b> pour une surface (on the table, on the wall, on the 3rd floor) ; <b>in</b> pour un espace (in the room, in London).","Sans préposition : next / last / this / every + moment : next week, last Monday.","Transports : <b>on</b> the bus / train / plane, <b>in</b> a car / taxi ; <b>by</b> bus pour le moyen."],
 e:[["The meeting is on Monday at 10 in the main office.","La réunion a lieu lundi à 10 h dans le bureau principal."],["I was born in 1995 in Kharkiv.","Je suis né en 1995 à Kharkiv."],["See you at the weekend!","À ce week-end !"]],
 x:["I'll see you in Monday.","I'll see you on Monday.","Les jours de la semaine : avec on."],
 q:[["My birthday is ___ March.",["in","on","at"],0,"Un mois → in."],["She's waiting ___ the bus stop.",["in","on","at"],2,"Un point sur la carte → at."]],pre:[]},
{id:"P2",d:"P",p:2,fr:"-ing or to",gloss:"-ing ou to",t:"Gerund or infinitive: doing or to do?",
 s:"Certains verbes sont suivis de -ing, d'autres de to + infinitif. Sans ça, la phrase sonne faux.",
 r:["Après <b>enjoy, avoid, finish, mind, suggest, keep, consider, practise</b> : -ing : I enjoy reading.","Après <b>want, decide, hope, plan, agree, refuse, manage, would like</b> : to + infinitif : I decided to stay.","Après une préposition : toujours -ing : interested <b>in learning</b>, before <b>leaving</b>, look forward <b>to seeing</b>.","Changement de sens : <b>stop</b> doing (arrêter) / stop to do (s'arrêter pour) ; <b>remember</b> doing (se souvenir d'avoir fait) / remember to do (ne pas oublier de) ; <b>try</b> doing (essayer comme solution) / try to do (s'efforcer de)."],
 e:[["I look forward to hearing from you.","Dans l'attente de votre réponse."],["She refused to answer.","Elle a refusé de répondre."],["Remember to lock the door!","N'oublie pas de fermer la porte à clé !"]],
 x:["I'm looking forward to see you.","I'm looking forward to seeing you.","Ici to est une préposition, donc -ing."],
 q:[["Would you mind ___ the window?",["to open","opening","open"],1,"mind + -ing."],["We hope ___ you soon.",["seeing","to see","see"],1,"hope + to + infinitif."]],pre:["P1","V1"]},
{id:"P3",d:"P",p:3,fr:"Phrasal verbs",gloss:"verbes à particule",t:"Phrasal verbs",
 s:"Verbe + particule : get up, look after, give up. Sans eux, l'anglais parlé sonne livresque ; avec eux, il sonne naturel.",
 r:["Le sens ne se déduit souvent pas des éléments : give up = arrêter, renoncer ; put off = reporter ; run out of = être à court de.","Séparables : un nom peut se placer entre les deux : turn the TV off / turn off the TV. Un pronom va <b>forcément au milieu</b> : turn it off.","Inséparables : look after the kids, get over it, come across a problem.","À l'écrit soutenu, un verbe simple est souvent préférable : postpone (put off), tolerate (put up with), investigate (look into)."],
 e:[["Can you pick me up at the station?","Tu peux venir me chercher à la gare ?"],["We've run out of milk.","Nous n'avons plus de lait."],["She takes after her mother.","Elle ressemble à sa mère."]],
 x:["Turn off it, please.","Turn it off, please.","Avec un verbe séparable, le pronom se place au milieu."],
 q:[["I need to ___ smoking.",["give up","give in","give out"],0,"give up = arrêter (une habitude)."],["Could you ___ my cat while I'm away?",["look for","look after","look up"],1,"look after = s'occuper de."]],pre:["P2"]},
{id:"P4",d:"P",p:4,fr:"Passive",gloss:"la voix passive",t:"The passive and have something done",
 s:"Le passif met l'action ou le résultat au premier plan plutôt que l'auteur. Indispensable dans les rapports, les informations et les lettres formelles.",
 r:["Forme : <b>be + participe passé</b> au temps voulu : is made, was built, has been sold, will be done, is being repaired.","On ajoute l'auteur avec <b>by</b> seulement s'il est important : The book was written by Orwell.","Avec un modal : <b>can / must / should be + participe passé</b> : It must be done today.","<b>have / get something done</b> : quelqu'un le fait pour toi : I had my hair cut. I'm getting my car repaired."],
 e:[["English is spoken all over the world.","On parle anglais dans le monde entier."],["The bridge was built in 1890.","Le pont a été construit en 1890."],["We're having the kitchen painted next week.","Nous faisons repeindre la cuisine la semaine prochaine."]],
 x:["The letter was wrote yesterday.","The letter was written yesterday.","Au passif : participe passé (troisième forme)."],
 q:[["The room ___ every day.",["cleans","is cleaned","is cleaning"],1,"Passif au présent : is + participe passé."],["My bike ___ last night.",["was stolen","stole","has stolen"],0,"Passif au passé : was + participe passé."]],pre:["P3","V3"]},
{id:"P5",d:"P",p:5,fr:"Collocations",gloss:"collocations",t:"Dependent prepositions and collocations",
 s:"Quelles prépositions suivent les mots (depend on, interested in) et quels mots vont ensemble (make a decision, do homework). C'est ce qui distingue un B2 d'un B1.",
 r:["Verbe + préposition : depend <b>on</b>, listen <b>to</b>, wait <b>for</b>, apologise <b>for</b>, agree <b>with</b> someone / <b>on</b> something.","Adjectif + préposition : interested <b>in</b>, good <b>at</b>, afraid <b>of</b>, responsible <b>for</b>, different <b>from</b>.","<b>make</b> : créer, obtenir un résultat : make a decision, a mistake, money, progress. <b>do</b> : activité, travail : do homework, business, research, a favour.","Autres associations figées : take a photo, have a look, pay attention, catch a cold, keep a promise, break a rule."],
 e:[["It depends on the weather.","Ça dépend du temps."],["I've made a lot of progress this year.","J'ai fait beaucoup de progrès cette année."],["She's responsible for the marketing team.","Elle est responsable de l'équipe marketing."]],
 x:["I'm agree with you.","I agree with you.","agree est un verbe : pas de be. Calque de « je suis d'accord »."],
 q:[["Are you interested ___ art?",["on","in","for"],1,"interested in."],["I need to ___ a decision quickly.",["do","make","take up"],1,"make a decision."]],pre:["P3","P2"]},
/* ---------- Q: questions and reported speech ---------- */
{id:"Q1",d:"Q",p:1,fr:"Questions",gloss:"les questions",t:"Questions: word order, do and subject questions",
 s:"Les questions se construisent avec un auxiliaire et l'inversion. Le français parlé se contente souvent de l'intonation : d'où beaucoup d'erreurs à l'oral.",
 r:["Ordre : (mot interrogatif) + auxiliaire + sujet + verbe : <b>Where do you live?</b> What are you doing? Have you seen it?","Pas d'auxiliaire ? On utilise <b>do / does / did</b> : Does she like it? When did they arrive?","Question sur le sujet : sans do : <b>Who called you?</b> What happened? (compare : Who did you call?)","La préposition va à la fin : Where are you from? What are you talking about?"],
 e:[["How long have you been waiting?","Ça fait combien de temps que tu attends ?"],["Who told you that?","Qui t'a dit ça ?"],["What does this word mean?","Que veut dire ce mot ?"]],
 x:["Where you live?","Where do you live?","Sans do, la question au present simple est incorrecte."],
 q:[["What ___ you do last weekend?",["did","do","were"],0,"Passé → did."],["Who ___ the window?",["did break","broke","did broken"],1,"Question sur le sujet (qui ?) → sans did."]],pre:["V1"]},
{id:"Q2",d:"Q",p:2,fr:"Tags · so do I",gloss:"conversation",t:"Question tags, short answers, so do I / neither do I",
 s:"De petites tournures qui rendent la conversation vivante : « n'est-ce pas ? », « moi aussi », « moi non plus ».",
 r:["Le tag reprend l'auxiliaire avec le signe inverse : You're tired, <b>aren't you</b>? She doesn't smoke, <b>does she</b>?","Pas d'auxiliaire : do / does / did : You live here, <b>don't you</b>? He left, <b>didn't he</b>?","Cas particuliers : I'm late, <b>aren't I</b>? Let's go, <b>shall we</b>? Open the door, <b>will you</b>?","Accord : <b>So do I</b> / Me too (+) ; <b>Neither do I</b> / Me neither (−). L'auxiliaire suit le temps : So did I, Neither can I."],
 e:[["It's a lovely day, isn't it?","Il fait un temps magnifique, n'est-ce pas ?"],["I've never been to Japan. — Neither have I.","Je ne suis jamais allé au Japon. — Moi non plus."],["You won't tell anyone, will you?","Tu ne le diras à personne, hein ?"]],
 x:["You like coffee, isn't it?","You like coffee, don't you?","Le tag reprend l'auxiliaire de la phrase (ici do) : ce n'est pas un « n'est-ce pas ? » invariable."],
 q:[["She can drive, ___?",["can she","can't she","doesn't she"],1,"Affirmation → tag négatif avec le même auxiliaire."],["I love jazz. — ___.",["So do I","So am I","Neither do I"],0,"Accord avec une affirmation au present simple → So do I."]],pre:["Q1","V2"]},
{id:"Q3",d:"Q",p:3,fr:"Indirect questions",gloss:"questions indirectes",t:"Indirect questions",
 s:"Les questions polies : Could you tell me where…? Do you know if…? L'essentiel : l'ordre des mots de la phrase affirmative.",
 r:["Introduction : Could you tell me…, Do you know…, I wonder…, Would you mind telling me…","Après l'introduction : ordre affirmatif, sans do : Where is the station? → Could you tell me <b>where the station is</b>?","Questions fermées (oui / non) : avec <b>if / whether</b> : Is it open? → Do you know if it's open?","Point d'interrogation seulement si l'introduction est elle-même une question : Do you know where he lives? / I wonder where he lives."],
 e:[["Could you tell me what time the museum opens?","Pourriez-vous me dire à quelle heure ouvre le musée ?"],["Do you know if there's a pharmacy near here?","Savez-vous s'il y a une pharmacie près d'ici ?"],["I wonder why she didn't come.","Je me demande pourquoi elle n'est pas venue."]],
 x:["Can you tell me where is the bank?","Can you tell me where the bank is?","Dans une question indirecte : ordre direct, sujet puis verbe."],
 q:[["Do you know what time ___?",["does the train leave","the train leaves","leaves the train"],1,"Ordre direct, sans does."],["Could you tell me ___ the price includes breakfast?",["if","that","does"],0,"Question fermée → if / whether."]],pre:["Q1"]},
{id:"Q4",d:"Q",p:4,fr:"Reported speech",gloss:"discours rapporté",t:"Reported speech",
 s:"Rapporter les paroles d'autrui : He said that…, She asked if… Indispensable dans les lettres, les comptes rendus et la conversation.",
 r:["Si le verbe introducteur est au passé (said, told), le temps recule : présent → past, past et present perfect → past perfect, will → would, can → could.","<b>say</b> (something) / <b>tell</b> someone (something) : She said that… / She told me that… Pas said me.","Questions : ordre direct ; oui / non avec if / whether : He asked <b>where I lived</b>. She asked <b>if I was</b> OK.","Ordres et demandes : <b>tell / ask + quelqu'un + (not) to</b> : He told me to wait. She asked us not to smoke."],
 e:[["\"I'm tired.\" → She said she was tired.","Elle a dit qu'elle était fatiguée."],["\"Where do you work?\" → He asked me where I worked.","Il m'a demandé où je travaillais."],["\"Don't be late.\" → They told us not to be late.","Ils nous ont dit de ne pas être en retard."]],
 x:["He said me that he was busy.","He told me that he was busy.","tell + personne ; say sans personne (ou say to me)."],
 q:[["\"I will call you.\" → She said she ___ me.",["will call","would call","called"],1,"will → would."],["He asked me where ___.",["did I live","I lived","do I live"],1,"Ordre direct et recul du temps."]],pre:["Q3","V4"]},
{id:"Q5",d:"Q",p:5,fr:"Reporting verbs",gloss:"verbes introducteurs",t:"Reporting verbs: suggest, admit, deny, warn…",
 s:"Au lieu de répéter said, des verbes précis qui rendent l'intention du locuteur. Chacun a sa construction.",
 r:["+ to : <b>agree, refuse, offer, promise, threaten</b> : She refused to help.","+ quelqu'un + to : <b>advise, ask, encourage, invite, remind, warn, persuade</b> : He reminded me to call.","+ -ing : <b>admit, deny, suggest, recommend</b> ; + préposition + -ing : <b>apologise for, insist on, accuse someone of, blame someone for</b>.","+ that : <b>explain, claim, complain, point out</b> : He explained that the shop was closed."],
 e:[["He denied taking the money.","Il a nié avoir pris l'argent."],["She suggested going to the cinema.","Elle a proposé d'aller au cinéma."],["They warned us not to swim there.","Ils nous ont prévenus de ne pas nager là."]],
 x:["He suggested me to take a taxi.","He suggested taking a taxi.","suggest ne se construit pas avec quelqu'un + to (calque de « suggérer à qqn de »). Possible aussi : He suggested (that) I take a taxi."],
 q:[["She apologised ___ late.",["to be","for being","being"],1,"apologise for + -ing."],["He ___ to lend me his car.",["suggested","offered","admitted"],1,"offer + to + infinitif."]],pre:["Q4","P2"]},
/* ---------- S: sentence and text ---------- */
{id:"S1",d:"S",p:1,fr:"Word order",gloss:"ordre des mots",t:"Word order: subject, verb, object and adverbs",
 s:"L'ordre des mots est encore plus fixe qu'en français. La place de l'adverbe, surtout, n'est pas la même.",
 r:["Schéma de base : <b>sujet + verbe + complément + lieu + temps</b> : I met my friend at the café yesterday.","Le sujet est obligatoire, même « vide » : <b>It</b> is raining. <b>There</b> is a problem.","Adverbes de fréquence (always, usually, often, never) : avant le verbe principal, mais après be : She often reads. She is often late.","Rien entre le verbe et son complément : I like football <b>very much</b>, et non I like very much football."],
 e:[["We usually have dinner at seven.","Nous dînons généralement à sept heures."],["There are two problems with this plan.","Ce plan pose deux problèmes."],["It's important to sleep well.","C'est important de bien dormir."]],
 x:["Is very cold today.","It is very cold today.","Une phrase anglaise a toujours un sujet."],
 q:[["I ___ late for work.",["am never","never am","never"],0,"Adverbe de fréquence après be."],["She speaks ___.",["very well English","English very well","English well very"],1,"Verbe et complément ensemble, l'adverbe après."]],pre:[]},
{id:"S2",d:"S",p:2,fr:"Punctuation",gloss:"ponctuation",t:"Punctuation, capitals and apostrophes",
 s:"Les règles de l'écrit qui se voient tout de suite : majuscules, apostrophe, virgule, contractions. Et pas d'espace avant ? ! : ;",
 r:["Majuscule : <b>I</b>, les jours, les mois, les langues, les nationalités, les titres : on Monday, in May, English, French.","Apostrophe : contraction (it's = it is, don't) et possession (Anna's, the students' books). <b>its</b> = son / sa (sans apostrophe).","Virgule après un mot de liaison ou une subordonnée en tête : However, … / If it rains, … Pas de virgule avant that : I think that…","<b>Pas d'espace</b> avant ? ! : ; Guillemets : \"…\" ou ‘…’, jamais « »."],
 e:[["On Monday I'm flying to Paris with my French friends.","Lundi, je prends l'avion pour Paris avec mes amis français."],["It's a good company, and its staff are friendly.","C'est une bonne entreprise, et son personnel est sympathique."],["Unfortunately, the train was late.","Malheureusement, le train était en retard."]],
 x:["The cat hurt it's leg.","The cat hurt its leg.","its : possessif, sans apostrophe ; it's = it is."],
 q:[["Which is correct?",["i think that english is easy","I think that English is easy","I think, that English is easy"],1,"I et les langues prennent une majuscule ; pas de virgule avant that."],["___ going to rain.",["Its","It's","Its'"],1,"It is → It's."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Relative clauses",gloss:"propositions relatives",t:"Relative clauses: who, which, that, whose, where",
 s:"Relier deux phrases en une : the man who…, the book that… Il faut distinguer relatives déterminatives et explicatives : les virgules en dépendent.",
 r:["<b>who</b> : personnes ; <b>which</b> : choses ; <b>that</b> : les deux (seulement dans les déterminatives) ; <b>whose</b> : dont (possession) ; <b>where</b> : où (lieu) ; <b>when</b> : où (temps).","Déterminatives (defining) : sans virgules, elles identifient : The woman who lives next door is a doctor.","Explicatives (non-defining) : avec virgules, information en plus ; that interdit : My mother, who is 60, still works.","Si le pronom est complément, on peut l'omettre dans une déterminative : The film (that) we saw was great."],
 e:[["That's the girl whose brother plays for Dynamo.","C'est la fille dont le frère joue au Dynamo."],["Kyiv, which is the capital of Ukraine, stands on the Dnipro.","Kyiv, qui est la capitale de l'Ukraine, est située sur le Dniepr."],["Is this the book you were talking about?","C'est le livre dont tu parlais ?"]],
 x:["My father, that is a teacher, lives in Odesa.","My father, who is a teacher, lives in Odesa.","Dans une relative explicative (avec virgules), pas de that."],
 q:[["The man ___ car was stolen called the police.",["who","whose","which"],1,"« dont la voiture » → whose."],["This is the hotel ___ we stayed last year.",["where","which","who"],0,"Un lieu, et la relative est complète → where."]],pre:["S2"]},
{id:"S4",d:"S",p:4,fr:"Linking words",gloss:"connecteurs logiques",t:"Linking words: contrast, cause, result and purpose",
 s:"Les connecteurs rendent un texte et un discours logiques. L'essentiel est de savoir ce qui les suit : une phrase, un nom ou -ing.",
 r:["Opposition : <b>but, although / even though</b> + phrase ; <b>despite / in spite of</b> + nom ou -ing ; <b>However,</b> en début de nouvelle phrase.","Cause : <b>because</b> + phrase, <b>because of / due to</b> + nom ; <b>since / as</b> : plus soutenu.","Conséquence : <b>so</b> ; à l'écrit soutenu : <b>therefore, as a result, consequently</b>.","But : <b>to / in order to</b> + infinitif, <b>so that</b> + phrase (souvent avec can / could) : I left early so that I could catch the bus."],
 e:[["Although it was raining, we went out.","Bien qu'il pleuve, nous sommes sortis."],["Despite the rain, we went out.","Malgré la pluie, nous sommes sortis."],["The flight was cancelled due to bad weather.","Le vol a été annulé à cause du mauvais temps."]],
 x:["Despite it was cold, we swam.","Although it was cold, we swam.","despite + nom ou -ing, pas une phrase : Despite the cold, we swam."],
 q:[["___ he's rich, he's not happy.",["Despite","Although","However"],1,"Devant une phrase → although."],["The match was cancelled ___ the snow.",["because","because of","so"],1,"Devant un nom → because of."]],pre:["S3"]},
{id:"S5",d:"S",p:5,fr:"Emphasis & style",gloss:"mise en relief et style",t:"Emphasis and formal style: cleft sentences, inversion, register",
 s:"Mettre l'essentiel en valeur et adopter un registre soutenu. Phrases clivées, inversion et choix du registre sont des marques du niveau B2+.",
 r:["Phrases clivées : <b>It was Anna who</b> called (et pas quelqu'un d'autre). <b>What I need is</b> a holiday.","Inversion après une expression négative en tête : <b>Never have I</b> seen…, <b>Not only did she</b>…, <b>Hardly had we</b>…, <b>Only then did I</b> understand.","Insistance avec do / does / did dans une affirmation : I <b>do</b> like it! She <b>did</b> call.","Registre : dans une lettre formelle, formes complètes, passif, nominalisation, mots comme request, assist, obtain plutôt que ask for, help, get."],
 e:[["What surprised me most was his reaction.","Ce qui m'a le plus surpris, c'est sa réaction."],["Not only did he lie, but he also blamed me.","Non seulement il a menti, mais en plus il m'a accusé."],["I would be grateful if you could send me further information.","Je vous serais reconnaissant de bien vouloir m'envoyer des informations complémentaires."]],
 x:["Never I have seen such a mess.","Never have I seen such a mess.","Après never en tête de phrase : inversion, comme dans une question."],
 q:[["___ I need is a good night's sleep.",["That","What","Which"],1,"What-cleft : What I need is…"],["Not only ___ late, but he also forgot the tickets.",["he was","was he","he did be"],1,"Inversion après not only."]],pre:["S4","P4"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["I ___ what you mean.",["see","am seeing","sees"],0,"see au sens de « comprendre » est un verbe d'état."],["___ she speak French?",["Do","Does","Is"],1,"3e personne du singulier → does ; après does, verbe sans -s."],["They ___ a new house at the moment.",["build","are building","builds"],1,"at the moment → continuous."]],
 c:[["She don't like coffee.","She doesn't like coffee.","3e personne du singulier : doesn't."],["I'm wanting a new phone.","I want a new phone.","want est un verbe d'état."]]},
V2:{q:[["When I was a child, I ___ climb trees.",["used to","use to","was used to"],0,"Habitude passée : used to + infinitif."],["She ___ her keys last night.",["losed","lost","has lost"],1,"lose → lost ; last night → past simple."],["Where ___ you buy that jacket?",["did","do","were"],0,"Question sur le passé : did + infinitif."]],
 c:[["I didn't knew the answer.","I didn't know the answer.","Après didn't : l'infinitif."],["We buyed a new car last year.","We bought a new car last year.","buy est irrégulier : bought."]]},
V3:{q:[["She ___ here since Monday.",["is","was","has been"],2,"since + dure encore → present perfect."],["___ you finished your homework yet?",["Did","Have","Are"],1,"yet dans une question → present perfect."],["He ___ the company two years ago.",["has left","left","has leaved"],1,"ago → past simple."]],
 c:[["I have seen him yesterday.","I saw him yesterday.","yesterday → past simple, même si le français dit « je l'ai vu »."],["How long do you know her?","How long have you known her?","Durée jusqu'à maintenant (« depuis combien de temps ») → present perfect."]]},
V4:{q:[["What ___ you doing at 8 last night?",["did","were","had"],1,"Action en cours à un moment du passé → past continuous."],["After she ___ the letter, she posted it.",["had written","was writing","has written"],0,"D'abord écrite, puis envoyée."],["The sun ___ and the birds were singing.",["shone","was shining","had shone"],1,"Description du décor → past continuous."]],
 c:[["While I walked home, it started to rain.","While I was walking home, it started to rain.","while + action en cours → past continuous."],["I didn't recognise her because she has changed a lot.","I didn't recognise her because she had changed a lot.","Changement antérieur à un moment passé → past perfect."]]},
V5:{q:[["I ___ three emails this morning.",["have been writing","have written","had written"],1,"Quantité, résultat → perfect simple."],["We ___ for two hours when the bus finally came.",["had been waiting","have been waiting","were waiting"],0,"Durée jusqu'à un moment passé → past perfect continuous."],["At 10 tomorrow I ___ an exam, so I can't talk.",["will write","will be writing","will have written"],1,"Action en cours à un moment futur → future continuous."]],
 c:[["I've been knowing him for years.","I've known him for years.","know est un verbe d'état : pas de -ing."],["By the time you arrive, I will finish.","By the time you arrive, I will have finished.","by the time + achevé avant ce moment → future perfect."]]},
M1:{q:[["Yesterday I ___ get up at 5.",["must","had to","musted"],1,"must n'a pas de passé → had to."],["___ I open the window?",["Can","Do","Must I to"],0,"Demander la permission : Can / Could / May I…?"],["You look ill. You ___ go home.",["should","have","must to"],0,"Conseil → should."]],
 c:[["He can to drive.","He can drive.","Après can : infinitif sans to."],["We musn't to be late.","We mustn't be late.","Orthographe de mustn't et infinitif sans to."]]},
M2:{q:[["What ___ this weekend? — Nothing special.",["will you do","are you doing","do you do"],1,"Question sur les projets → present continuous (ou going to)."],["Don't worry, I ___ tell anyone.",["won't","'m not going","don't"],0,"Promesse → will / won't."],["As soon as she ___, we'll start.",["will come","comes","is going to come"],1,"Après as soon as : présent simple (alors que le français dit « dès qu'elle arrivera »)."]],
 c:[["If it will rain, we'll stay at home.","If it rains, we'll stay at home.","Après if : présent simple."],["I think it is raining tomorrow.","I think it will rain tomorrow.","Prévision-opinion → will."]]},
M3:{q:[["We won't go ___ the weather improves.",["if","unless","when not"],1,"unless = if not (« à moins que »)."],["If she studies, she ___ the exam.",["passes","will pass","would pass"],1,"Condition réelle dans le futur → first."],["What would you do if you ___ a ghost?",["see","saw","will see"],1,"Situation imaginaire → second ; après if : past simple."]],
 c:[["If I will see him, I'll tell him.","If I see him, I'll tell him.","Après if : présent, pas will."],["If I was you, I will apologise.","If I were you, I would apologise.","Conseil : If I were you, I would…"]]},
M4:{q:[["If she had taken the job, she ___ in London now.",["would live","would have lived","lived"],0,"Condition passée, résultat présent → mixed : would + infinitif."],["I wish it ___ so cold today.",["isn't","wasn't","hadn't been"],1,"Regret sur le présent → wish + past simple."],["He ___ the match if he hadn't been injured.",["would win","would have won","won"],1,"Third conditional : would have + participe passé."]],
 c:[["I wish I would be taller.","I wish I were taller.","Pas de wish + would pour son propre état : il faut le past."],["If he had asked me, I would help him.","If he had asked me, I would have helped him.","Condition et résultat dans le passé → would have helped."]]},
M5:{q:[["Where's Tom? — He ___ be in the garden, I'm not sure.",["must","might","can't"],1,"Incertitude → might / may / could."],["She ___ seen us — she didn't say hello.",["must have","can't have","should have"],1,"Déduction négative sûre sur le passé → can't have."],["You ___ brought food — there's plenty here.",["needn't have","mustn't have","couldn't"],0,"Apporté, mais inutile → needn't have."]],
 c:[["He must has forgotten.","He must have forgotten.","Modal + have + participe passé."],["You should told me earlier.","You should have told me earlier.","should have + participe passé."]]},
N1:{q:[["I love ___ music.",["the","a","—"],2,"La musique en général : pas d'article (« j'adore la musique » → I love music)."],["He's ___ honest man.",["a","an","the"],1,"honest se prononce avec un son voyelle → an."],["We went to ___ United States.",["—","a","the"],2,"Les noms avec States, Kingdom, Republic prennent the."]],
 c:[["The life is beautiful.","Life is beautiful.","Sens général : pas d'article, contrairement à « la vie »."],["I have a good news.","I have good news.","news est indénombrable : pas de a."]]},
N2:{q:[["I don't have ___ time today.",["many","much","some"],1,"Négation + indénombrable → much."],["He made ___ progress, unfortunately.",["little","a little","few"],0,"Peu, et c'est négatif → little (progress est indénombrable)."],["We bought new ___ for the flat.",["furnitures","furniture","a furniture"],1,"furniture est indénombrable (« des meubles »)."]],
 c:[["I need an advice.","I need some advice.","advice est indénombrable ; un conseil : a piece of advice."],["There is less people than yesterday.","There are fewer people than yesterday.","people est un pluriel : fewer, are."]]},
N3:{q:[["It's ___ expensive for me.",["too","enough","such"],0,"Trop → too + adjectif."],["They have ___ a lovely garden.",["so","such","too"],1,"such a + adjectif + nom."],["She bought a ___ dress.",["silk red beautiful","beautiful red silk","red beautiful silk"],1,"Opinion → couleur → matière."]],
 c:[["The lesson was very bored.","The lesson was very boring.","Le cours provoque l'ennui → -ing."],["He works very hardly.","He works very hard.","hard est un adverbe sans -ly ; hardly = à peine."]]},
N4:{q:[["My English isn't ___ good as yours.",["so","as","than"],1,"(not) as … as."],["This test was ___ easier than the last one.",["very","much","more"],1,"Renforcer un comparatif : much / far / a lot, pas very."],["He's the ___ person in the team.",["most experienced","experiencedest","more experienced"],0,"Adjectif long → the most."]],
 c:[["He is older than me in two years.","He is two years older than me.","L'écart se place devant le comparatif."],["It's the more expensive hotel in the city.","It's the most expensive hotel in the city.","Superlatif parmi plusieurs → the most."]]},
N5:{q:[["analyse → ___",["analysement","analysis","analyst"],1,"analyse → analysis (le processus)."],["The ___ of the new law caused protests.",["introduce","introduction","introducing of"],1,"Nominalisation : introduce → introduction."],["It's a ___ drive from here.",["two hours","two-hour","two-hours"],1,"Nombre + nom en position d'adjectif : trait d'union et singulier."]],
 c:[["We waited at the stop of the bus.","We waited at the bus stop.","Nom composé figé : bus stop (« l'arrêt de bus »)."],["After he arrived, prices went up.","After his arrival, prices went up.","Nominalisation : arrive → arrival."]]},
P1:{q:[["We'll meet ___ next Friday.",["on","at","—"],2,"next + jour : sans préposition."],["There's a picture ___ the wall.",["in","on","at"],1,"Une surface → on."],["I usually read ___ night.",["in","at","on"],1,"at night, mais in the morning / in the evening."]],
 c:[["I arrived to London yesterday.","I arrived in London yesterday.","arrive in (ville, pays), arrive at (bâtiment), jamais arrive to."],["She is in the work now.","She is at work now.","at work, at home, at school : sans article."]]},
P2:{q:[["He stopped ___ — it's bad for his health.",["to smoke","smoking","smoke"],1,"Il a arrêté de fumer → stop + -ing."],["I'm good at ___ people's names.",["remember","to remember","remembering"],2,"Après la préposition at → -ing (le français dirait « pour retenir »)."],["She managed ___ the exam.",["passing","to pass","pass"],1,"manage + to + infinitif."]],
 c:[["I suggest to take a taxi.","I suggest taking a taxi.","suggest + -ing (ou suggest that we take)."],["He avoided to answer the question.","He avoided answering the question.","avoid + -ing."]]},
P3:{q:[["The meeting was ___ until next week.",["put off","put on","put up"],0,"put off = reporter."],["I ___ an old friend in the street yesterday.",["came across","came up","came over"],0,"come across = tomber sur."],["If you don't know the word, ___.",["look up it","look it up","look up"],1,"Pronom au milieu : look it up."]],
 c:[["I can't put up this noise.","I can't put up with this noise.","Verbe à deux particules : put up with = supporter."],["Please fill in it.","Please fill it in.","Le pronom se place entre le verbe et la particule."]]},
P4:{q:[["The results ___ next week.",["will announce","will be announced","are announcing"],1,"Passif futur : will be + participe passé."],["The road ___ at the moment.",["is repaired","is being repaired","repairs"],1,"En cours → is being + participe passé."],["I ___ my eyes tested yesterday.",["had","did","made"],0,"have something done (« je me suis fait examiner les yeux »)."]],
 c:[["This house was build in 1920.","This house was built in 1920.","build → built."],["I cut my hair at the hairdresser's.","I had my hair cut at the hairdresser's.","Ce n'est pas toi qui coupes → have something done (« se faire couper les cheveux »)."]]},
P5:{q:[["Please don't ___ a noise.",["do","make","have"],1,"make a noise."],["He apologised ___ being late.",["for","about","of"],0,"apologise for + -ing."],["Can you ___ me a favour?",["make","do","give"],1,"do someone a favour."]],
 c:[["It depends of you.","It depends on you.","depend on (et non « de »)."],["I did a mistake in the test.","I made a mistake in the test.","make a mistake (« faire une erreur »)."]]},
Q1:{q:[["How often ___ to the gym?",["you go","do you go","you do go"],1,"L'auxiliaire se place avant le sujet."],["What ___ to you yesterday?",["happened","did happen","did it happen"],0,"Question sur le sujet : what happened."],["Who ___ you waiting for?",["do","are","is"],1,"waiting → continuous : are you waiting ; préposition à la fin."]],
 c:[["Why she is angry?","Why is she angry?","Inversion : is she."],["What means this word?","What does this word mean?","Question sur le complément → does + infinitif."]]},
Q2:{q:[["They haven't arrived yet, ___?",["haven't they","have they","did they"],1,"Négation → tag affirmatif."],["I didn't sleep well. — ___.",["Neither did I","So did I","Neither I did"],0,"« Moi non plus » au passé → Neither did I."],["I'm right, ___?",["amn't I","aren't I","am I"],1,"Forme particulière : aren't I."]],
 c:[["He went home, wasn't he?","He went home, didn't he?","went → auxiliaire did."],["I can't swim. — Me too.","I can't swim. — Me neither.","« Moi non plus » → Me neither / Neither can I."]]},
Q3:{q:[["I'd like to know how much ___.",["does it cost","it costs","costs it"],1,"Ordre direct, sans does."],["Do you remember where ___ the keys?",["did you put","you put","you did put"],1,"Sans did, ordre direct."],["I'm not sure ___ he's coming or not.",["whether","that","what"],0,"whether … or not."]],
 c:[["Do you know where does she work?","Do you know where she works?","Sans does ; verbe avec -s."],["Could you tell me is this seat free?","Could you tell me if this seat is free?","Oui / non → if + ordre direct."]]},
Q4:{q:[["\"Can you help?\" → She asked if I ___ help.",["can","could","will"],1,"can → could."],["\"We've finished.\" → They said they ___ finished.",["have","had","has"],1,"present perfect → past perfect."],["\"Sit down.\" → He told me ___.",["sit down","to sit down","that I sit down"],1,"Ordre → told + to."]],
 c:[["She asked me what was my name.","She asked me what my name was.","Question indirecte : ordre direct."],["He said to not worry.","He told me not to worry.","Ordre : tell someone not to."]]},
Q5:{q:[["They accused him ___ the documents.",["of stealing","to steal","for stealing"],0,"accuse someone of + -ing."],["The doctor ___ me to rest.",["suggested","advised","said"],1,"advise someone to."],["She admitted ___ a mistake.",["to make","making","make"],1,"admit + -ing."]],
 c:[["He insisted to pay the bill.","He insisted on paying the bill.","insist on + -ing."],["She explained me the problem.","She explained the problem to me.","explain something to someone."]]},
S1:{q:[["___ a lot of traffic in the city centre.",["Is","There is","It has"],1,"Il y a → there is."],["We ___ go to the cinema.",["sometimes","sometimes do","do sometimes not"],0,"Adverbe de fréquence avant le verbe principal."],["They moved ___.",["last year to Canada","to Canada last year","Canada to last year"],1,"Le lieu, puis le temps."]],
 c:[["I always am tired on Mondays.","I am always tired on Mondays.","Adverbe de fréquence après be."],["Yesterday I saw in the park Tom.","Yesterday I saw Tom in the park.","Le complément suit directement le verbe."]]},
S2:{q:[["Which is correct?",["Are you ready ?","Are you ready?","Are you ready ?!"],1,"Pas d'espace avant ? en anglais."],["The ___ toys are everywhere.",["childrens'","children's","childrens"],1,"Pluriel irrégulier children + 's."],["___ coming tomorrow.",["Their","There","They're"],2,"They are → They're."]],
 c:[["Your late again !","You're late again!","You are → You're ; pas d'espace avant !"],["My parent's house is in lyon.","My parents' house is in Lyon.","Deux parents → parents' ; le nom de ville prend une majuscule."]]},
S3:{q:[["The people ___ I met were very kind.",["which","—","whose"],1,"Le pronom complément d'une déterminative peut être omis (ou who / that)."],["He passed the exam, ___ surprised everyone.",["that","which","what"],1,"which reprend toute la phrase (« ce qui »)."],["The day ___ we met was rainy.",["when","which","where"],0,"Le temps → when (« le jour où »)."]],
 c:[["The book what I'm reading is great.","The book that I'm reading is great.","what n'est pas un pronom relatif après un nom."],["This is the woman who her son is my friend.","This is the woman whose son is my friend.","« dont le fils » → whose, sans her."]]},
S4:{q:[["I study hard. ___, I still find grammar difficult.",["Although","However","Despite"],1,"Nouvelle phrase avec virgule → However."],["She saved money ___ buy a car.",["for","in order to","so that"],1,"But + infinitif → (in order) to."],["He was ill; ___, he missed the meeting.",["therefore","although","despite"],0,"Conséquence → therefore."]],
 c:[["I went to the shop for buy some milk.","I went to the shop to buy some milk.","But → to + infinitif, pas for (calque de « pour acheter »)."],["In spite of he was tired, he worked late.","In spite of being tired, he worked late.","in spite of + -ing ou nom."]]},
S5:{q:[["It was my sister ___ found the solution.",["which","who","what"],1,"It-cleft avec une personne → who (ou that)."],["Hardly ___ arrived when it started to rain.",["we had","had we","did we"],1,"Hardly had we arrived when…"],["Which sentence is the most formal?",["Help me, please.","I would appreciate your assistance.","Can you give me a hand?"],1,"Registre soutenu."]],
 c:[["Only later I realised my mistake.","Only later did I realise my mistake.","Only later en tête → inversion avec did."],["The thing what I like is the music.","The thing that I like is the music.","Après un nom : that, pas what. Ou : What I like is the music."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Pourquoi deux présents
En français, « je travaille » veut dire à la fois « je travaille en général » et « je suis en train de travailler ». L'anglais sépare ces deux sens, et le choix du temps change le sens de la phrase : <i>I live in Paris</i> (de façon permanente) et <i>I'm living in Paris</i> (temporairement, pour l'instant).
| | Present simple | Present continuous |
| Forme | I work / she work<b>s</b> | I <b>am</b> work<b>ing</b> |
| Négation | I <b>don't</b> work / she <b>doesn't</b> work | I'm <b>not</b> working |
| Question | <b>Do</b> you work? <b>Does</b> she work? | <b>Are</b> you working? |
| Sens | habitude, fait, horaire | maintenant, temporaire, changement |
| Repères | always, usually, often, every day | now, at the moment, today, this week |
## Le -s de la 3<sup>e</sup> personne
L'erreur la plus fréquente, à l'écrit comme à l'oral. Après he, she, it et tout nom singulier : <i>My brother play<b>s</b></i>. Orthographe : -es après -s, -sh, -ch, -x, -o (watch<b>es</b>, go<b>es</b>) ; consonne + y → -ies (stud<b>ies</b>), mais play<b>s</b>. Après does, le -s disparaît : <i>Does he play?</i>, et non <s>Does he plays?</s>
## Les verbes d'état
Certains verbes décrivent un état et non une action ; ils ne se mettent pas au continuous : know, understand, believe, like, love, hate, want, need, prefer, own, belong, seem, mean. Certains ont deux sens : <i>I think it's true</i> (opinion) / <i>I'm thinking about it</i> (réflexion en cours) ; <i>She has a car</i> (possession) / <i>She's having lunch</i> (action).
## Horaires et projets
- Horaires de transports, de cinéma, de cours : present simple : <i>The train leaves at 6.</i>
- Rendez-vous fixés : present continuous : <i>I'm meeting Anna tomorrow.</i> (voir le thème sur le futur)
! Test : si on peut dire « en ce moment, ces temps-ci » et que l'action est bien en cours → continuous. Si on dit « d'habitude, toujours » → simple. « Être en train de » est un bon indice du continuous.`,
V2:`## Les verbes réguliers
On ajoute -ed : work → work<b>ed</b>. Orthographe : -e → +d (lived) ; consonne + y → -ied (studied) ; un mot court avec une voyelle accentuée entre deux consonnes double la consonne finale : stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed (mais visit → visited).
Prononciation de -ed : [t] après une consonne sourde (worked), [d] après une sonore (played), [ɪd] après t et d (wanted, needed). Seul ce dernier cas ajoute une syllabe : ne prononce pas <s>work-ed</s>.
## Les verbes irréguliers
Il y en a environ 150, mais une soixantaine reviennent sans cesse. Apprends-les par trois : <i>go – went – gone</i>, <i>take – took – taken</i>, <i>write – wrote – written</i>. La deuxième forme sert au past simple, la troisième au perfect et au passif.
| Infinitif | Past simple | Participe passé |
| be | was / were | been |
| have | had | had |
| do | did | done |
| make | made | made |
| get | got | got (BrE) / gotten (AmE) |
| think | thought | thought |
| bring | brought | brought |
| buy | bought | bought |
## Questions et négations
L'auxiliaire did porte le passé, donc le verbe reste à l'infinitif : <i>Did she call?</i> <i>She didn't call.</i> Exception : be : <i>Were you there? I wasn't.</i>
## used to et would
- <b>used to</b> : habitude ou état passés, terminés : <i>I used to have long hair.</i> C'est souvent l'équivalent de l'imparfait d'habitude.
- <b>would</b> : seulement pour des actions répétées dans un récit, pas pour des états : <i>Every summer we would go to the sea.</i>
- À ne pas confondre avec <b>be used to + -ing</b> : « être habitué à » : <i>I'm used to getting up early.</i>
! Le past simple correspond très souvent au passé composé français : « J'ai vu Paul hier » → <i>I saw Paul yesterday</i>, et non <s>I have seen</s>. Et l'imparfait ne se traduit pas toujours par le past continuous : « Quand j'étais petit, je jouais au foot » → <i>I played / I used to play football</i>.`,
V3:`## Une idée, deux temps
Le passé composé français couvre les deux. En anglais, la question est : qu'est-ce qui compte le plus, <b>quand</b> c'est arrivé (past simple) ou <b>ce qu'on a maintenant</b> (present perfect) ?
| Present perfect | Past simple |
| <i>I've lost my keys</i> (je ne les ai toujours pas) | <i>I lost my keys yesterday</i> |
| <i>Have you ever tried sushi?</i> | <i>Did you try sushi in Japan?</i> |
| <i>She's written three books</i> (elle peut en écrire d'autres) | <i>Shakespeare wrote 37 plays</i> |
| <i>I haven't seen him this week</i> (la semaine n'est pas finie) | <i>I didn't see him last week</i> |
## Les quatre emplois du present perfect
- <b>Expérience</b> sans date : <i>I've been to Spain twice.</i>
- <b>Résultat</b> visible maintenant : <i>Look, it's stopped raining.</i>
- <b>Nouvelle récente</b> : <i>The president has resigned.</i> Les détails passent ensuite au past simple : <i>He announced it this morning.</i>
- <b>Situation qui dure</b>, avec for / since : <i>We've known each other since school.</i>
## been ou gone
<i>She has <b>gone</b> to Rome</i> : elle est partie et elle y est encore. <i>She has <b>been</b> to Rome</i> : elle y est allée et elle est revenue.
## for, since, ago
| for | since | ago |
| durée | point de départ | il y a |
| for two hours | since 9 o'clock | two hours ago |
| present perfect ou past | present perfect | past simple seulement |
! Le grand piège des francophones : « depuis » + présent. « J'habite ici depuis cinq ans » → <i>I've lived here for five years</i> (ou <i>I've been living</i>), jamais <s>I live here since five years</s>. Et « il y a » se traduit par ago avec le past simple : <i>I arrived two years ago.</i>`,
V4:`## Trois rôles dans une histoire
| Temps | Rôle | Exemple |
| Past continuous | décor, action en cours | <i>It was getting dark and people were going home.</i> |
| Past simple | événement, étape du récit | <i>A man stopped me and asked for directions.</i> |
| Past perfect | encore avant, arrière-plan | <i>I realised I had seen him before.</i> |
## when et while
- <b>while</b> + action en cours : <i>While I was cooking, …</i>
- <b>when</b> + événement bref : <i>…when the phone rang.</i>
- Deux actions longues en parallèle : <i>I was reading while he was watching TV.</i>
- Deux événements successifs : tous deux au past simple : <i>When he arrived, we had dinner</i> (il est arrivé, puis on a dîné). Compare : <i>When he arrived, we had had dinner</i> (on avait dîné avant son arrivée).
## Quand le past perfect n'est pas nécessaire
Si before, after ou then indiquent déjà l'ordre, le past perfect est facultatif : <i>After I finished work, I went home.</i> Ne l'emploie pas pour tout ce qui est « ancien » : il faut un autre repère dans le passé.
## Les verbes d'état
Comme au présent, pas de -ing : <i>I knew</i>, et non <s>I was knowing</s>.
! Le past perfect correspond bien au plus-que-parfait. Le past continuous, lui, ne correspond qu'à l'imparfait de description ou d'action en cours (« il pleuvait », « je lisais »), pas à l'imparfait d'habitude.`,
V5:`## Simple ou continuous au perfect
| Perfect simple : résultat | Perfect continuous : activité |
| <i>I've read the book</i> (je l'ai fini) | <i>I've been reading the book</i> (je le lis, pas fini) |
| <i>She's written 20 pages</i> (quantité) | <i>She's been writing all morning</i> (durée) |
| <i>I've painted the room</i> (c'est fait) | <i>I've been painting — that's why I'm dirty</i> (trace visible) |
Un nombre, « combien de fois » → simple. « Depuis combien de temps » → plutôt continuous.
## Se projeter dans le futur
- <b>Future continuous</b> : action en cours à un moment futur : <i>Don't call at 9, I'll be driving.</i> Aussi pour demander poliment des projets : <i>Will you be using the car tonight?</i>
- <b>Future perfect</b> : action terminée avant un moment futur : <i>By the end of the year, I'll have read 30 books.</i> Repères : by, by the time, by then. C'est le futur antérieur.
- <b>Future perfect continuous</b> (rare) : <i>In May I'll have been working here for ten years.</i>
## La ligne du temps
| Repère | Durée jusqu'à ce repère |
| maintenant | have been doing |
| dans le passé | had been doing |
| dans le futur | will have been doing |
! « depuis » avec une action en cours → present perfect continuous : « J'attends depuis une heure » → <i>I've been waiting for an hour</i>. Au passé, « j'attendais depuis une heure quand… » → <i>I had been waiting for an hour when…</i>`,
M1:`## Comment fonctionnent les modaux
- Une seule forme pour toutes les personnes : <i>I can, she can</i> (et non <s>cans</s>).
- Ils sont suivis de l'infinitif sans to : <i>must go</i>, <i>should know</i>.
- Question par inversion : <i>Can you…? Should I…?</i> ; négation avec not : <i>can't, mustn't, shouldn't</i>.
- La plupart n'ont ni passé ni futur ; on utilise des équivalents : <i>was able to, had to, will be able to, will have to</i>.
| Sens | Présent | Passé | Futur |
| capacité | can | could / was able to | will be able to |
| obligation | must / have to | had to | will have to |
| absence d'obligation | don't have to | didn't have to | won't have to |
| interdiction | mustn't / can't | couldn't | — |
| conseil | should / ought to | should have done (thème M5) | — |
## must et have to
<i>I must call my mum</i> : c'est moi qui le décide. <i>I have to wear a tie at work</i> : c'est la règle. En anglais américain et à l'oral, have to est plus fréquent. L'essentiel est la négation : <b>mustn't</b> = c'est interdit ; <b>don't have to</b> = ce n'est pas obligatoire.
## La politesse
Du moins au plus poli : <i>Can you…? → Could you…? → Would you mind + -ing…? → I was wondering if you could…</i> Un impératif direct (« Give me… ») sonne sec en anglais, même avec please.
! « Devoir » recouvre plusieurs modaux : « tu dois voir un médecin » (conseil) → <i>you should see a doctor</i> ; « je dois partir » (obligation) → <i>I must / I have to leave</i> ; « il doit être malade » (déduction) → <i>he must be ill</i>.`,
M2:`## Quatre formes, quatre rôles
| Forme | Quand | Exemple |
| will | décision sur le moment, promesse, offre, opinion | <i>I'll have the soup. I promise I'll write.</i> |
| be going to | intention, projet ; prévision fondée sur des indices | <i>She's going to have a baby.</i> |
| present continuous | rendez-vous fixé | <i>I'm seeing the dentist at 3.</i> |
| present simple | horaire, programme | <i>The concert starts at 8.</i> |
Souvent, will et going to sont tous deux possibles ; going to sonne « prévu », will sonne « décidé à l'instant ».
## Subordonnées de temps et de condition
Après <b>when, if, as soon as, before, after, until, once</b>, l'anglais emploie le présent pour parler du futur : <i>I'll wait until you <b>finish</b>.</i> De même au perfect : <i>Call me when you <b>have finished</b>.</i>
## Autres formes utiles
- <b>be about to</b> : être sur le point de : <i>Hurry, the train is about to leave.</i>
- <b>shall</b> pour proposer : <i>Shall I open the window? Shall we go?</i>
- <b>will</b> pour les faits futurs : <i>I'll be 30 next year.</i>
! Le piège inverse du français : « Quand j'arriverai, je t'appellerai » → <i>When I arrive, I'll call you</i>. Le futur français après « quand » et « dès que » devient un présent en anglais. Le futur proche (« je vais partir ») correspond assez bien à going to.`,
M3:`## Réel ou imaginaire
| Type | Partie avec if | Principale | Sens |
| Zero | présent | présent | toujours vrai |
| First | présent | will / can / may + infinitif | possible, réel |
| Second | past simple | would / could / might + infinitif | imaginaire, peu probable |
Le choix entre first et second dépend de ce que pense le locuteur : <i>If I get the job, I'll move</i> (c'est bien possible) / <i>If I got the job, I'd move</i> (j'en doute).
## Un passé qui ne parle pas du passé
Dans le second conditional, le past simple n'indique pas le passé mais l'irréel : <i>If I knew his number</i> = je ne le connais pas maintenant. D'où <i>If I were</i> : en langue soignée, were à toutes les personnes. À l'oral, <i>If I was</i> est admis, mais dans <i>If I were you</i>, toujours were.
## Ordre et virgule
Si la phrase commence par if, on met une virgule après la condition : <i>If it rains, we'll stay in.</i> Si if est au milieu, pas de virgule : <i>We'll stay in if it rains.</i>
## Autres conjonctions
unless (à moins que), as long as / provided that (à condition que), in case (au cas où) : <i>Take an umbrella in case it rains.</i>
! Bonne nouvelle : la logique est la même qu'en français. « Si + imparfait → conditionnel » = second conditional ; « si + présent → futur » = first conditional. Et comme on ne met jamais de conditionnel après « si », on ne met jamais would après if.`,
M4:`## Le third conditional
On parle d'un passé qu'on ne peut plus changer :
| if + past perfect | would / could / might have + participe passé |
| If I had seen you, | I would have said hello. |
| If they hadn't helped us, | we might have failed. |
À l'oral, contractions : <i>If I'd known, I'd have come</i> ('d = had dans la condition, would dans la principale).
## Les conditionnelles mixtes
- Passé → présent : <i>If I <b>had taken</b> that job, I <b>would be</b> rich now.</i>
- Trait permanent → passé : <i>If I <b>were</b> braver, I <b>would have asked</b> her.</i>
## wish et if only
| Regret sur | Forme | Exemple |
| le présent | wish + past simple | <i>I wish I lived closer.</i> |
| le passé | wish + past perfect | <i>I wish I had listened.</i> |
| une capacité | wish + could | <i>I wish I could drive.</i> |
| le comportement d'autrui | wish + would | <i>I wish he would call.</i> |
If only est plus fort, plus émotif : <i>If only I had known!</i> C'est le « si seulement » français.
## Constructions voisines
<i>It's time we went</i> (il est temps qu'on parte), <i>I'd rather you didn't smoke</i> (je préférerais que tu ne fumes pas) : là aussi, un past à valeur présente.
! Même schéma qu'en français : « si + plus-que-parfait → conditionnel passé » = third conditional. « J'aimerais que… / je regrette que… » → <i>I wish…</i> + past, jamais avec le subjonctif ou le présent.`,
M5:`## L'échelle de certitude
| Certitude | Présent | Passé |
| 95 % oui | must be | must have been |
| ~50 % | might / may / could be | might / may / could have been |
| 95 % non | can't / couldn't be | can't / couldn't have been |
Attention : le contraire de must (déduction) est <b>can't</b>, pas mustn't.
## Modaux au passé : juger ce qui s'est passé
- <b>should have / ought to have</b> : ç'aurait été bien, mais ça n'a pas été fait : <i>We should have booked a table.</i>
- <b>shouldn't have</b> : c'a été fait, à tort : <i>I shouldn't have eaten so much.</i>
- <b>could have</b> : c'était possible : <i>You could have died!</i> <i>I could have helped you if you'd asked.</i>
- <b>would have</b> : dans le third conditional (thème M4).
## needn't have et didn't need to
<i>I <b>needn't have</b> taken a taxi</i> : je l'ai pris, pour rien. <i>I <b>didn't need to</b> take a taxi</i> : ce n'était pas nécessaire (et je ne l'ai sans doute pas pris).
## Prononciation
À l'oral, have se réduit : <i>must've, should've, could've</i>. D'où une faute fréquente même chez les natifs : <s>should of</s>. Écris toujours <b>should have</b>.
! Les équivalents français sont précieux : « il a dû partir » → <i>he must have left</i> ; « il aurait dû partir » → <i>he should have left</i> ; « il aurait pu partir » → <i>he could have left</i> ; « il n'a pas pu partir » (impossible) → <i>he can't have left</i>.`,
N1:`## La question clé : lequel ?
L'article indique si l'auditeur sait de quoi on parle précisément.
| | Singulier dénombrable | Pluriel | Indénombrable |
| général, n'importe lequel | <b>a</b> cat | cats | water |
| précis, connu | <b>the</b> cat | <b>the</b> cats | <b>the</b> water |
Un dénombrable singulier ne peut pas rester seul : <s>I have car</s> → <i>I have a car / my car / the car</i>.
## a ou an
C'est le son qui compte, pas la lettre : <i>an hour, an MBA, an honest man</i> / <i>a university, a European, a one-way ticket</i>.
## Quand mettre the
- Deuxième mention : <i>a man… the man</i>.
- Unique au monde ou dans la situation : <i>the sun, the government, Close the door.</i>
- Superlatifs et ordinaux : <i>the best, the first, the same, the only</i>.
- Instruments de musique, mers, fleuves, chaînes de montagnes, archipels : <i>the piano, the Black Sea, the Seine, the Alps</i>.
- Noms avec of et noms au pluriel : <i>the University of Oxford, the Netherlands</i>.
## Quand ne rien mettre
- Généralités : <i>Dogs are loyal. Money isn't everything.</i>
- La plupart des pays, villes, rues, lacs, sommets : <i>France, Oxford Street, Everest.</i>
- Langues, sports, repas : <i>speak French, play football, after lunch.</i>
- Certains lieux pris dans leur fonction : <i>go to school / to bed / to work / to hospital</i>.
! Le piège des francophones est l'inverse de celui des autres apprenants : le français met « le, la, les » pour les généralités, l'anglais non. « Les chats sont fidèles » → <i>Cats are loyal</i> ; « La vie est belle » → <i>Life is beautiful</i> ; « J'aime le café » → <i>I like coffee</i>. Et « du pain, de l'eau » → <i>bread, water</i> ou <i>some bread</i>.`,
N2:`## Des indénombrables qui sont dénombrables en français
Le piège : « des informations », « des conseils », « des meubles », « les nouvelles » se mettent au pluriel en français. En anglais, ces mots sont indénombrables : pas de a / an, pas de -s, verbe au singulier.
| Indénombrable | Pour compter |
| advice, information, news | a piece of advice / information / news |
| furniture, luggage, equipment | a piece of furniture, an item of luggage |
| work, homework, research | a task, a project |
| bread, money | a loaf of bread, a coin, a note |
<i>The news <b>is</b> good. Your hair <b>is</b> beautiful.</i>
## Les mots de quantité
| | Dénombrables | Indénombrables |
| beaucoup | many, a lot of | much, a lot of |
| quelques, un peu (positif) | a few | a little |
| peu (négatif) | few | little |
| moins | fewer | less |
| assez | enough | enough |
Dans une phrase affirmative, much et many sonnent soutenus ; à l'oral, on dit plutôt a lot of / lots of : <i>We have a lot of work</i>, mais <i>We don't have much work</i>.
## some et any
some : affirmations, offres et demandes quand on attend un « oui » : <i>Can I have some water?</i> any : questions, négations, et « n'importe quel » : <i>You can take any bus.</i> Même chose pour something / anything, someone / anyone.
## Mots à double sens
<i>a coffee</i> (une tasse) / <i>coffee</i> (la boisson), <i>a paper</i> (un journal) / <i>paper</i> (le papier), <i>a time</i> (une fois) / <i>time</i> (le temps).
! Erreurs typiques des francophones : <s>informations</s>, <s>advices</s>, <s>a news</s>, <s>furnitures</s>, <s>less people</s>. « Les gens » → <i>people</i> est déjà un pluriel : <i>People <b>are</b>…</i>`,
N3:`## Forme et place
L'adjectif est invariable et se place avant le nom : <i>a tall man, tall women</i> ; ou après be, seem, look, feel, become : <i>She looks tired.</i> Après les verbes de perception, on met un adjectif, pas un adverbe : <i>It smells good</i>, et non <s>well</s>.
## L'ordre de plusieurs adjectifs
| opinion | taille | âge | forme | couleur | origine | matière | nom |
| nice | big | old | square | black | German | leather | bag |
En pratique, deux ou trois suffisent : <i>a nice old leather bag</i>.
## -ed et -ing
| -ed : ce que je ressens | -ing : ce qui le provoque |
| I'm bored / tired / confused | The film is boring / tiring / confusing |
| She was surprised | The result was surprising |
C'est la différence entre « ennuyé » et « ennuyeux » : <s>I am boring</s> veut dire « je suis quelqu'un d'ennuyeux ».
## Les adverbes de manière
En général, adjectif + -ly : quick → quickly, careful → carefully, easy → easily. Irréguliers : good → well, fast → fast, hard → hard, late → late (lately = ces derniers temps). Certains mots en -ly sont des adjectifs : friendly, lovely, lonely (on dit <i>in a friendly way</i>).
## so et such, too et enough
- <b>so</b> + adjectif ou adverbe : <i>so hot, so quickly</i> ; <b>such</b> + (a) + (adjectif) + nom : <i>such a hot day, such nice people</i>.
- <b>too</b> + adjectif : trop (c'est un problème) : <i>too cold to swim</i>.
- adjectif + <b>enough</b>, enough + nom : <i>warm enough, enough money</i>.
! Deux réflexes français à corriger : l'adjectif ne suit pas le nom (<s>a car red</s>) et ne s'accorde pas (<s>reds cars</s>). Et l'adverbe ne se glisse pas entre le verbe et son complément (thème S1).`,
N4:`## Formation
| Adjectif | Comparatif | Superlatif |
| court : cheap, fast | cheap<b>er</b> | the cheap<b>est</b> |
| en -e : nice | nice<b>r</b> | the nice<b>st</b> |
| voyelle + consonne : big, hot | bi<b>gg</b>er | the bi<b>gg</b>est |
| en -y : easy, happy | eas<b>ier</b> | the eas<b>iest</b> |
| 2 syllabes et plus : modern, expensive | <b>more</b> expensive | <b>the most</b> expensive |
| good / bad / far | better / worse / further | the best / the worst / the furthest |
Certains adjectifs de deux syllabes acceptent les deux : <i>cleverer / more clever, quieter / more quiet</i>.
## Comparer avec précision
- Grand écart : <i>much, far, a lot, considerably</i> bigger.
- Petit écart : <i>slightly, a bit, a little</i> bigger.
- Égalité : <i>as fast as</i> ; infériorité : <i>not as fast as</i> (plus doux que <i>slower than</i>).
- Progression : <i>more and more expensive</i>, <i>bigger and bigger</i> (« de plus en plus »).
- Proportion : <i>The sooner, the better.</i> (« le plus tôt sera le mieux »)
## Après than et as
À l'oral, pronom complément : <i>He's taller than me.</i> En langue soignée, pronom sujet + verbe : <i>He's taller than I am.</i>
## Le superlatif
Avec the, et souvent in (lieu, groupe) ou un present perfect : <i>the best student in the class</i>, <i>the worst meal I've ever had</i>. Pas <s>of the class</s>.
! « plus … que » → -er than / more … than ; « moins … que » → less … than ou, plus naturel, not as … as ; « le plus » → the most. Et jamais <s>more good</s>, <s>more bad</s> : better, worse.`,
N5:`## Un nom devant un nom
L'anglais place souvent un nom devant un autre là où le français utilise « de » ou un adjectif : <i>a city centre</i> (un centre-ville), <i>a job interview</i> (un entretien d'embauche), <i>a coffee cup</i> (une tasse à café). Le premier nom reste au singulier : <i>a shoe shop</i>, et non <s>shoes shop</s> ; <i>a ten-pound note</i>, <i>a 300-page report</i>.
## 's ou of
| 's | of |
| personnes et animaux : <i>Anna's idea, the dog's bowl</i> | choses : <i>the roof of the house</i> |
| organisations, pays : <i>the government's plan</i> | groupes longs : <i>the son of the woman who lives next door</i> |
| temps : <i>yesterday's meeting, a week's holiday</i> | partie, quantité : <i>a cup of tea, most of the students</i> |
Pluriel en -s : apostrophe après le s : <i>my parents' house</i>. Pluriel irrégulier : <i>the children's room</i>.
## La nominalisation
| Verbe / adjectif | Nom |
| decide, improve, develop | decision, improvement, development |
| increase, rise, fall | an increase in, a rise in, a fall in |
| fail, succeed | failure, success |
| able, possible, important | ability, possibility, importance |
<i>The government decided to raise taxes, which surprised many people</i> → <i>The government's decision to raise taxes surprised many people.</i>
## Avec mesure
La nominalisation rend un texte concis et soutenu, mais trop de noms l'alourdissent. Dans un essai, une ou deux par phrase ; à l'oral, préfère les verbes.
! Le français ordonne « tête + de + complément » (« l'arrêt de bus »), l'anglais fait l'inverse : <i>the bus stop</i>. Et les prépositions après les noms changent : an increase <b>in</b> (« une hausse de »), a reason <b>for</b>, an effect <b>on</b>, a solution <b>to</b>.`,
P1:`## La pyramide : du point à l'espace
| | at : un point | on : une surface, un jour | in : un espace, une période |
| Temps | at 7:30, at noon, at night, at Christmas | on Friday, on 1 May, on my birthday | in July, in 2024, in summer, in the evening |
| Lieu | at the door, at home, at the station | on the table, on the screen, on page 5 | in the box, in Paris, in the kitchen |
## Lieu : at ou in
<i>at the cinema</i> : le lieu d'une activité (on voit un film) ; <i>in the cinema</i> : à l'intérieur du bâtiment. <i>at the airport</i> : une étape du trajet ; <i>in Paris</i> : une ville. Adresse : <i>at 15 Baker Street</i>, mais la rue : <i>in Baker Street</i> (BrE) / <i>on Baker Street</i> (AmE).
## Transports et déplacement
- <i>on the bus / train / plane / bike</i>, mais <i>in a car / taxi</i>.
- <i>by car / by bus / by train</i> : le moyen, sans article ; <i>on foot</i> : à pied.
- Mouvement : <i>go <b>to</b> school</i>, mais <i>go home</i> (sans to) ; <i>get <b>into</b> a car</i>, <i>get <b>on</b> a bus</i>.
## Sans préposition
Devant next, last, this, every, et avec tomorrow, yesterday : <i>I'll call you tomorrow morning.</i> <i>We met last summer.</i>
## Durée et limites
<b>for</b> : combien de temps (for two weeks : « pendant deux semaines ») ; <b>during</b> : à quel moment (during the meeting) ; <b>by</b> : au plus tard (by Friday : « d'ici vendredi ») ; <b>until</b> : jusqu'à (until Friday).
! « à » se traduit de trois façons : « à Paris » → <i>in Paris</i>, « à la gare » → <i>at the station</i>, « à 8 h » → <i>at 8</i>. « En juin » → <i>in June</i>, mais « le lundi » → <i>on Mondays</i>. Et « pendant » → <i>for</i> avec une durée, <i>during</i> avec un événement.`,
P2:`## Deux grands groupes
| + -ing | + to + infinitif |
| enjoy, like / love / hate, mind | want, would like, need |
| avoid, deny, risk, miss | decide, plan, hope, expect |
| finish, keep, give up, carry on | agree, refuse, promise, offer |
| suggest, recommend, consider | manage, fail, afford, learn |
| admit, imagine, practise, can't stand | seem, tend, pretend, arrange |
Après like, love, hate, les deux sont possibles : <i>I like swimming / I like to swim</i>. Mais après <b>would like</b>, seulement to : <i>I'd like to go.</i>
## Après une préposition : toujours -ing
<i>She left without saying goodbye. I'm tired of waiting. Thank you for helping.</i> Attention aux expressions où to est une préposition : <i>look forward to doing, be used to doing, object to doing, when it comes to doing</i>.
## Verbe + personne + to
want, ask, tell, expect, allow, advise + personne + to : <i>I want you to come.</i> Et non <s>I want that you come</s>, calque de « je veux que tu viennes ». Mais <b>make</b> et <b>let</b> : sans to : <i>She made me laugh. Let me help.</i>
## Changement de sens
| | + -ing | + to |
| stop | <i>I stopped drinking coffee</i> : j'ai arrêté | <i>I stopped to drink coffee</i> : je me suis arrêté pour en boire |
| remember | <i>I remember meeting him</i> : je me souviens de l'avoir rencontré | <i>Remember to call him</i> : n'oublie pas de |
| try | <i>Try restarting the computer</i> : essaie, pour voir | <i>I tried to open it</i> : j'ai essayé, je me suis efforcé |
| regret | <i>I regret saying that</i> : je regrette d'avoir dit | <i>We regret to inform you</i> : nous avons le regret de |
! Le réflexe français est l'infinitif après une préposition : « sans dire », « avant de partir », « au lieu de travailler ». En anglais, c'est -ing : <i>without saying, before leaving, instead of working</i>. Et -ing peut être sujet : <i>Learning languages is fun</i> (« apprendre des langues, c'est amusant »).`,
P3:`## Structure
Un phrasal verb = verbe + particule (up, out, off, on, in, down, away, back, over) ou deux particules (look forward to, get on with). La particule ajoute souvent une nuance :
| Particule | Nuance | Exemples |
| up | achèvement, augmentation | eat up, fill up, grow up, speed up |
| out | vers l'extérieur, jusqu'au bout | find out, run out, work out |
| off | séparation, arrêt | turn off, set off, take off |
| on | continuation, mise en marche | carry on, go on, turn on |
| down | diminution, mise par écrit | slow down, write down, cut down on |
## Séparables et inséparables
- Avec un nom, deux ordres possibles : <i>pick up the phone / pick the phone up</i>.
- Avec un pronom, seulement au milieu : <i>pick it up</i>, et non <s>pick up it</s>.
- Inséparables (look after, look for, get over, come across, deal with) : le complément vient toujours après : <i>look after them</i>.
- À deux particules (look forward to, get on with, run out of, put up with) : jamais séparés.
## Les 20 plus utiles
find out, give up, look for, look after, look forward to, get up, get on with, turn on / off, put off, set up, carry on, work out, come up with, figure out, pick up, run out of, take off, deal with, bring up, check in / out.
## Registre
| Oral | Écrit soutenu |
| find out | discover |
| put off | postpone |
| look into | investigate |
| come up with | devise, propose |
| cut down on | reduce |
! Les francophones ont un avantage à l'écrit : les verbes soutenus (postpone, tolerate, investigate, reduce) ressemblent au français. Mais à l'oral, ils sonnent raides : un anglophone dira <i>put off</i> plutôt que <i>postpone</i>. Apprends les phrasal verbs avec un exemple : <i>run out <b>of</b> time</i>, <i>come up <b>with</b> an idea</i>.`,
P4:`## Formation
| Temps | Actif | Passif |
| Present simple | They make cars here. | Cars <b>are made</b> here. |
| Present continuous | They are repairing it. | It <b>is being repaired</b>. |
| Past simple | Someone stole my bag. | My bag <b>was stolen</b>. |
| Present perfect | They have cancelled it. | It <b>has been cancelled</b>. |
| Futur | They will send it. | It <b>will be sent</b>. |
| Modaux | You must sign it. | It <b>must be signed</b>. |
## Quand employer le passif
- L'auteur est inconnu ou sans importance : <i>My phone was stolen.</i>
- Le résultat compte plus que l'auteur : <i>The decision has been made.</i>
- Style scientifique, administratif : <i>The samples were analysed.</i>
- Éviter poliment d'accuser quelqu'un : <i>Mistakes were made.</i>
## « On dit que… »
Style journalistique : <i>It is said that… / He is said to be…</i>, <i>It is believed that… / She is believed to have left.</i>
## have / get something done
Un service rendu par quelqu'un d'autre : <i>I had my car serviced. She's getting her nails done.</i> Aussi pour un désagrément : <i>He had his wallet stolen</i> (« il s'est fait voler son portefeuille »). get est plus familier.
! Le français utilise souvent « on » ou un verbe pronominal là où l'anglais met un passif : « On parle anglais ici » → <i>English is spoken here</i> ; « Ça se vend bien » → <i>It sells well / It is selling well</i> ; « Il s'est fait licencier » → <i>He was fired / He got fired</i>.`,
P5:`## La préposition appartient au mot
La préposition après un verbe ou un adjectif ne se traduit pas mot à mot : « dépendre de » → <i>depend <b>on</b></i>, « en colère contre quelqu'un » → <i>angry <b>with</b> someone</i>. Apprends ces paires ensemble.
| Verbe | Adjectif | Nom |
| depend on, rely on | interested in | a reason for |
| listen to, belong to | good / bad at | an increase in |
| wait for, pay for, ask for | afraid of, proud of, tired of | a solution to |
| think about / of | responsible for, famous for | an effect on |
| succeed in, believe in | similar to, married to | a demand for |
| complain about, worry about | different from, keen on | a lack of |
## Sans préposition
Certains verbes ont une préposition en français mais pas en anglais : <i>discuss the plan</i> (et non <s>discuss about</s>), <i>enter the room</i> (entrer dans), <i>answer the question</i> (répondre à), <i>call me</i>, <i>marry someone</i> (se marier avec), <i>reach the station</i> (arriver à).
## make ou do
| make : on crée quelque chose | do : on accomplit une activité |
| a decision, a mistake, a mess | homework, housework, the dishes |
| money, a profit, progress | business, research, an exercise |
| a phone call, a plan, an effort | your best, a favour, damage |
| friends, a noise, a suggestion | a job, a course, sport |
## Autres collocations
take a break / a risk / part in ; have a shower / a chat / fun ; pay attention / a compliment ; keep calm / in touch ; catch the bus / a cold ; raise a question ; meet a deadline ; heavy rain / traffic ; strong coffee ; a high price.
! « Faire » recouvre make et do : « faire une erreur » → <i>make a mistake</i>, « faire ses devoirs » → <i>do homework</i>, « faire du sport » → <i>do sport</i>, « faire une promenade » → <i>go for a walk</i>. Et « je suis d'accord » → <i>I agree</i>, jamais <s>I'm agree</s>.`,
Q1:`## La formule de la question
| Mot interrogatif | Auxiliaire | Sujet | Verbe | Suite |
| Where | do | you | work | ? |
| What | are | they | watching | ? |
| How long | have | you | lived | here? |
| — | Can | she | swim | ? |
Si l'affirmation contient un auxiliaire (be, have, can, will), il passe devant. Sinon, on ajoute do / does / did.
## Questions sur le sujet
Quand who ou what est sujet, l'ordre est celui de l'affirmation, sans do : <i>Who lives here? What made you change your mind?</i> Compare : <i>Who <b>does</b> Anna love?</i> (qui Anna aime-t-elle ?) / <i>Who loves Anna?</i> (qui aime Anna ?).
## Mots interrogatifs
what, which (choix limité), who, whose, where, when, why, how, how much / many, how long, how often, how far, what time, what kind of.
## Réponses
Les réponses courtes reprennent l'auxiliaire : <i>Do you like it? — Yes, I do. / No, I don't.</i> <i>Has he called? — No, he hasn't.</i> Un simple « Yes » ou « No » sonne sec.
! Le français parlé dit « Tu habites où ? » sans inversion. En anglais, l'équivalent de « est-ce que » est obligatoire : c'est do. <i>You live here?</i> n'est possible que pour exprimer la surprise.`,
Q2:`## Le fonctionnement du tag
| Phrase | Tag | Exemple |
| affirmative | négatif | <i>You're coming, aren't you?</i> |
| négative | affirmatif | <i>You aren't coming, are you?</i> |
Le pronom du tag reprend le sujet : <i>Your parents live in Lyon, don't <b>they</b>?</i> never, hardly, nobody rendent la phrase négative : <i>He never calls, <b>does</b> he?</i>
## L'intonation
Intonation descendante : « n'est-ce pas ? », on attend une confirmation. Montante : vraie question, on n'est pas sûr.
## Cas particuliers
- <i>I'm…, aren't I?</i>
- <i>Let's…, shall we?</i>
- Impératif : <i>Sit down, will you? / Don't be late, will you?</i>
- <i>There's a problem, isn't there?</i>
## « Moi aussi » et « moi non plus »
| Réplique | Accord | Désaccord |
| I like it. | So do I. / Me too. | I don't. |
| I don't like it. | Neither do I. / Nor do I. / Me neither. | I do. |
| I was there. | So was I. | I wasn't. |
| I can't swim. | Neither can I. | I can. |
Après so et neither : inversion, l'auxiliaire avant le sujet.
## Questions en écho
Pour montrer son intérêt : <i>I've just got married. — <b>Have you</b>? Congratulations!</i>
! « N'est-ce pas ? » et « hein ? » sont invariables en français, d'où l'erreur <s>isn't it?</s> après n'importe quelle phrase. En anglais, le tag se reconstruit chaque fois à partir de l'auxiliaire. Et « moi aussi » après une négation, c'est <i>me neither</i>, pas <s>me too</s>.`,
Q3:`## À quoi ça sert
Une question directe à un inconnu (<i>Where is the toilet?</i>) est tout à fait correcte, mais la question indirecte est plus polie. On l'emploie sans arrêt dans les lettres, au travail, dans les magasins.
## La transformation
| Directe | Indirecte |
| Where <b>is</b> the station? | Could you tell me where the station <b>is</b>? |
| What time <b>does</b> it <b>open</b>? | Do you know what time it <b>opens</b>? |
| Why <b>did</b> he <b>leave</b>? | I wonder why he <b>left</b>. |
| <b>Is</b> it far? | Do you know <b>if</b> it's far? |
| <b>Can</b> I pay by card? | Could you tell me <b>whether</b> I can pay by card? |
Étapes : 1) supprime do / does / did et rends le temps au verbe ; 2) mets le sujet avant le verbe ; 3) pour une question fermée, ajoute if ou whether.
## Formules d'introduction
Could you tell me…? Do you know…? Have you any idea…? Would you mind telling me…? I was wondering… I'd like to know… Can you remember…?
## if ou whether
Presque synonymes. whether est plus soutenu, et obligatoire devant or not et après une préposition : <i>It depends on whether we have time.</i>
! Le français tolère l'inversion après l'introduction : « Pouvez-vous me dire où est la gare ? ». En anglais, impossible : <i>where the station is</i>. Vérifie qu'après where, what ou if vient bien le sujet.`,
Q4:`## Le recul des temps
| Discours direct | Discours indirect (après said) |
| present simple : "I <b>live</b> here." | past simple : he <b>lived</b> there |
| present continuous : "I'm <b>working</b>." | past continuous : she <b>was working</b> |
| past simple, present perfect | past perfect : had done |
| will / can / may | would / could / might |
| must | had to (ou must) |
Le recul n'est pas obligatoire si ce qui est dit est toujours vrai, ou si le verbe introducteur est au présent : <i>He says he's tired. She said the Earth is round.</i>
## Expressions de temps et de lieu
now → then, today → that day, tomorrow → the next day / the following day, yesterday → the day before, here → there, this → that, ago → before.
## say ou tell
- <i>She <b>said</b> (that) she was busy.</i> / <i>She <b>said to me</b> that…</i>
- <i>She <b>told me</b> (that) she was busy.</i> : tell est toujours suivi d'une personne.
- À l'oral, that est souvent omis.
## Questions et ordres
- Question ouverte : <i>"Why are you late?" → He asked (me) why I was late.</i>
- Question fermée : <i>"Do you smoke?" → She asked if / whether I smoked.</i>
- Ordre : <i>"Close the door." → He told me to close the door.</i>
- Demande : <i>"Please help me." → She asked me to help her.</i>
! Bonne nouvelle : la concordance des temps fonctionne comme en français (« il a dit qu'il était fatigué », « qu'il viendrait »). Les pièges sont ailleurs : say / tell (« il m'a dit » → <i>he told me</i>, jamais <s>he said me</s>) et l'ordre direct dans les questions.`,
Q5:`## À quoi ça sert
<i>"I'll definitely call you."</i> → <i>She said she would call</i> : neutre ; <i>She <b>promised</b> to call</i> : plus précis et plus court. Au niveau B2, on attend ces verbes dans les comptes rendus, les essais et les lettres.
## Les constructions
| Modèle | Verbes | Exemple |
| + to | agree, refuse, offer, promise, threaten, decide | <i>He refused to sign.</i> |
| + personne + to | advise, ask, tell, encourage, invite, persuade, remind, warn | <i>She persuaded me to stay.</i> |
| + -ing | admit, deny, suggest, recommend, mention | <i>He admitted lying.</i> |
| + préposition + -ing | apologise for, insist on, object to | <i>They insisted on paying.</i> |
| + personne + préposition + -ing | accuse of, blame for, congratulate on, thank for | <i>I thanked her for helping.</i> |
| + that | explain, claim, complain, point out, announce | <i>She claimed (that) she was innocent.</i> |
## suggest, un piège à part
Correct : <i>He suggested going.</i> / <i>He suggested (that) we go</i> / <i>…we should go.</i> Incorrect : <s>He suggested me to go</s>, <s>He suggested to go</s>.
## explain
<i>Explain <b>the rule</b> to me</i>, et non <s>explain me</s>. De même pour describe et suggest.
! Plusieurs pièges viennent du français : « suggérer à quelqu'un de faire » → <i>suggest that someone do</i> ; « insister pour payer » → <i>insist on paying</i> ; « nier avoir pris » → <i>deny taking</i> ; « s'excuser d'être en retard » → <i>apologise for being late</i>.`,
S1:`## Un ordre fixe
| Sujet | Verbe | Complément | Lieu | Temps |
| My sister | bought | a new laptop | in town | last week. |
| We | 're watching | a film | at home | tonight. |
On peut placer le temps en tête pour insister : <i>Last week, my sister bought…</i> Mais le sujet et le verbe restent ensemble et dans cet ordre (sauf dans les questions).
## Les sujets « vides » it et there
- <b>it</b> : météo, heure, distance, jugement : <i>It's late. It's 5 km. It's hard to say.</i>
- <b>there is / there are</b> : existence, présence (« il y a ») : <i>There's a bank near here.</i>
## Les adverbes
| Type | Place | Exemple |
| fréquence : always, often, never | avant le verbe, après be et l'auxiliaire | <i>I have never seen it.</i> |
| manière : well, carefully | après le complément | <i>She did the work carefully.</i> |
| degré : really, almost | devant le mot qu'ils modifient | <i>I really like it.</i> |
| also, just, already, still | comme les adverbes de fréquence | <i>She's already left.</i> |
| commentaire : fortunately, actually | en tête, avec une virgule | <i>Fortunately, nobody was hurt.</i> |
## Deux compléments
<i>She gave <b>me</b> the book</i> ou <i>She gave the book <b>to me</b></i>. Avec deux pronoms : <i>She gave it to me</i>.
! Le réflexe français place l'adverbe entre le verbe et le complément : « Je parle souvent anglais », « J'aime beaucoup le foot ». En anglais : <i>I often speak English</i>, <i>I like football very much</i>. Et attention aux faux amis : <i>actually</i> = en fait, <i>eventually</i> = finalement.`,
S2:`## Les majuscules
Bien plus qu'en français : le pronom <b>I</b>, les jours et les mois (<i>Monday, July</i>), les langues et les nationalités, même adjectifs (<i>English, a French writer</i>), les fêtes, les noms d'organisations, les mots des titres (<i>The Lord of the Rings</i>). Les saisons restent en minuscules : <i>in summer</i>.
## L'apostrophe
| Usage | Exemple |
| contraction | it's, I'm, don't, they're, who's, you're |
| possession, singulier | my friend's car, James's idea |
| possession, pluriel en -s | my friends' cars, the Smiths' house |
| pluriel irrégulier | the children's room, women's rights |
Sans apostrophe : les possessifs <i>its, yours, theirs, whose</i> et les pluriels ordinaires (<i>CDs, the 1990s</i>, et non <s>CD's</s>).
## Les homophones que même les natifs confondent
its / it's, your / you're, their / there / they're, whose / who's, then / than, to / too / two, lose / loose, affect / effect.
## La virgule
- Après un mot ou une expression d'introduction : <i>However, … In my opinion, …</i>
- Après une subordonnée en tête : <i>When I got home, …</i> (si elle est à la fin, pas de virgule).
- Devant and / but entre deux propositions complètes : facultative ; plus fréquente devant but.
- Jamais : devant that (<i>I think that…</i>), entre le sujet et le verbe, dans une relative déterminative (thème S3).
- Ne relie pas deux phrases par une simple virgule : <s>I was tired, I went to bed.</s> → <i>I was tired, so I went to bed.</i>
## Espaces et guillemets
<b>Pas d'espace avant ? ! : ;</b> C'est la différence typographique la plus visible avec le français. Guillemets : <i>"…"</i> ou <i>'…'</i> (plutôt en BrE), jamais « ».
## Contractions et registre
À l'oral et dans les messages informels : it's, don't, I'd. Dans un essai ou une lettre officielle : formes complètes : it is, do not.
! Récapitulatif des réflexes français à désactiver : l'espace avant la ponctuation double, les guillemets « », la minuscule pour lundi, juin, anglais, français.`,
S3:`## Les pronoms relatifs
| Pronom | Pour | Exemple |
| who | personnes | <i>the teacher who helped me</i> |
| which | choses, animaux, toute une proposition | <i>the car which broke down</i> |
| that | personnes et choses, seulement en déterminative | <i>the car that broke down</i> |
| whose | possession (dont) | <i>the student whose phone rang</i> |
| where | lieu (où) | <i>the city where I was born</i> |
| when | temps (où) | <i>the year when we met</i> |
## Déterminatives et explicatives
| Defining | Non-defining |
| sans virgules | entre virgules |
| identifient de qui on parle | ajoutent une information qu'on peut supprimer |
| who, which, that, ou pas de pronom | who, which (pas that) |
| <i>Students who work hard pass.</i> (seuls ceux qui travaillent) | <i>The students, who work hard, passed.</i> (tous travaillent) |
Les virgules changent le sens : <i>My brother who lives in Canada</i> (j'ai plusieurs frères) / <i>My brother, who lives in Canada,</i> (je n'en ai qu'un).
## Omettre le pronom
Dans une déterminative, si le pronom est complément : <i>the film (that) I watched</i>. S'il est sujet, impossible : <i>the film that won the prize</i>.
## Les prépositions
À l'oral, en fin de relative : <i>the person I spoke to</i>. En langue soignée, en tête avec whom ou which : <i>the person to whom I spoke</i>.
## which pour reprendre une proposition
<i>She didn't call, which was strange.</i> (« ce qui était étrange ») : uniquement which, jamais what ni that.
! « dont » n'a pas d'équivalent unique : possession → <i>whose</i> (« la fille dont le frère… ») ; complément d'un verbe → préposition en fin de phrase (« le livre dont tu parlais » → <i>the book you were talking about</i>). « Ce qui / ce que » → <i>what</i> en début de phrase (<i>What I need is…</i>), <i>which</i> pour reprendre une proposition.`,
S4:`## Ce qui suit le connecteur
| Sens | + proposition | + nom / -ing | En début de phrase, avec virgule |
| opposition | although, even though, while, whereas | despite, in spite of | However, Nevertheless, On the other hand |
| cause | because, as, since | because of, due to, owing to | — |
| conséquence | so | — | Therefore, As a result, Consequently |
| but | so that | (in order) to + infinitif | — |
| addition | and | as well as, in addition to | Moreover, Furthermore, In addition |
## L'opposition
- <i>Although the hotel was expensive, it was dirty.</i>
- <i>Despite the high price, the hotel was dirty.</i> / <i>Despite being expensive, …</i>
- <i>The hotel was expensive. However, it was dirty.</i>
- <i>Despite <b>the fact that</b> it was expensive, …</i> : c'est ainsi qu'on peut faire suivre despite d'une proposition.
## Le but
<i>to / in order to</i> + infinitif ; <i>so that</i> + proposition, quand le sujet change ou avec un modal : <i>I'll explain it again so that everyone understands.</i> Jamais <s>for to buy</s> ni <s>for buy</s> : for + nom (<i>for a walk</i>).
## Registre
| Oral | Essai, lettre officielle |
| but, so, because, also | however, therefore, since, moreover |
| anyway, actually | in fact, nevertheless |
| first, then, in the end | firstly, subsequently, finally, in conclusion |
## Ponctuation
However, therefore, moreover : en début de phrase avec une virgule, ou après un point-virgule : <i>It was late; however, we continued.</i> (sans espace avant le point-virgule !)
! Équivalences : « bien que, quoique » → <i>although</i> (et pas de subjonctif en anglais) ; « malgré » → <i>despite</i> (jamais <s>despite of</s>) ; « pour + infinitif » → <i>to</i>, pas <s>for</s> ; « pour que » → <i>so that</i> ; « cependant » → <i>however</i> ; « à cause de » → <i>because of</i>.`,
S5:`## Les phrases clivées (cleft sentences)
On coupe une phrase en deux pour mettre un élément en valeur :
| Phrase neutre | It-cleft | What-cleft |
| Tom broke the window. | <i>It was Tom who broke the window.</i> | — |
| I want a holiday. | <i>It's a holiday that I want.</i> | <i>What I want is a holiday.</i> |
| The noise annoys me. | <i>It's the noise that annoys me.</i> | <i>What annoys me is the noise.</i> |
Variantes : <i>The reason why… is that…, The thing (that)… is…, All I want is…</i>
## L'inversion d'insistance
Après une expression négative ou restrictive en tête de phrase, l'ordre est celui de la question :
| Expression | Exemple |
| Never / Rarely / Seldom | <i>Rarely do we see such talent.</i> |
| Not only … but also | <i>Not only is it cheap, but it's also fast.</i> |
| Hardly / No sooner … when / than | <i>No sooner had I sat down than the phone rang.</i> |
| Only then / Only when / Only after | <i>Only when I left did I understand.</i> |
| Under no circumstances | <i>Under no circumstances should you open it.</i> |
L'inversion sonne soutenue : elle a sa place dans un essai, un discours, une lettre officielle, rarement dans la conversation.
## L'insistance à l'oral
<i>I <b>do</b> understand. She <b>did</b> apologise!</i> ; <i>the very best</i> ; <i>at all</i> : <i>I didn't like it at all.</i>
## Le registre
| Familier | Soutenu |
| ask for | request |
| get | obtain, receive |
| help | assist, support |
| tell | inform |
| need | require |
| Thanks for… | I am grateful for… |
| Can you…? | I would appreciate it if you could… |
| I'm sorry | Please accept my apologies |
! Le français parlé abuse de « c'est … qui » (« C'est Marie qui a appelé »). L'anglais l'utilise moins et préfère souvent l'accent tonique : <i>MARY called</i>. Garde le cleft pour une vraie opposition. Et au niveau B2, on évalue l'adéquation : une inversion dans un message à un ami sonne bizarre, « gonna » dans un essai est une faute de registre.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"les questions et négations du past simple se construisent comme au present simple, avec did au lieu de do / does.",
"V3<V2":"le present perfect se comprend par opposition au past simple, et sa forme demande le participe des verbes irréguliers.",
"V4<V3":"le past perfect est le même perfect, transposé dans le passé : have → had.",
"V5<V4":"le perfect continuous combine la logique du perfect et les formes en -ing déjà vues.",
"M1<V1":"les modaux forment questions et négations sans do : il faut voir la différence avec le present simple.",
"M2<V1":"le present continuous et le present simple servent aussi à parler du futur : rendez-vous et horaires.",
"M3<M2":"le first conditional, c'est will plus la règle du présent après if, déjà vue avec le futur.",
"M3<V2":"le second conditional emploie les formes du past simple pour un présent irréel.",
"M4<M3":"le third conditional prolonge la logique du second, mais pour le passé.",
"M4<V4":"le third conditional et wish sur le passé reposent sur le past perfect.",
"M5<M4":"should have, could have, would have sont les cousins du third conditional.",
"M5<V3":"modal + have + participe passé demande de bien connaître les participes.",
"N2<N1":"le choix entre a / an et l'absence d'article dépend du caractère dénombrable du nom.",
"N3<N2":"les adjectifs décrivent des noms : il faut d'abord savoir construire le groupe nominal.",
"N4<N3":"comparatifs et superlatifs se forment à partir des adjectifs et des adverbes.",
"N5<N4":"les groupes nominaux complexes réunissent tout : articles, adjectifs, comparaison.",
"N5<S3":"nominalisation et relatives sont deux façons de condenser l'information dans un essai.",
"P2<P1":"après une préposition, toujours -ing : interested in learning, good at speaking.",
"P2<V1":"la forme en -ing est la même que celle du present continuous.",
"P3<P2":"les phrasal verbs utilisent les mêmes particules, et look forward to doing relie les deux thèmes.",
"P4<P3":"les phrasal verbs ont aussi un passif : The meeting was put off.",
"P4<V3":"le passif demande le participe passé et be à tous les temps.",
"P5<P3":"collocations et prépositions après les mots : l'étape suivante après les phrasal verbs.",
"P5<P2":"après une préposition, le verbe prend -ing : apologise for being late.",
"Q1<V1":"les questions au present simple sont le premier usage de do / does.",
"Q2<Q1":"les tags et les réponses courtes reprennent l'auxiliaire de la question.",
"Q2<V2":"au passé, le tag demande did : You saw it, didn't you?",
"Q3<Q1":"pour rendre une question indirecte, il faut savoir décomposer la question directe : auxiliaire, sujet, verbe.",
"Q4<Q3":"au discours rapporté, les questions se transforment comme des questions indirectes.",
"Q4<V4":"le recul des temps au discours rapporté mène au past perfect.",
"Q5<Q4":"les reporting verbs remplacent le said neutre du discours rapporté.",
"Q5<P2":"chaque reporting verb se construit avec -ing ou to, comme les verbes du thème sur -ing et to.",
"S2<S1":"la ponctuation s'appuie sur la structure de la phrase : où est le sujet, où est l'introduction.",
"S3<S2":"dans les relatives, la virgule change le sens.",
"S4<S3":"les connecteurs construisent des phrases complexes, comme les pronoms relatifs.",
"S5<S4":"inversion et phrases clivées : un niveau stylistique au-dessus des connecteurs.",
"S5<P4":"le registre soutenu fait un large usage du passif."
};

/* recommended order of all 30 topics; within a stage, prerequisites come first */
const ROUTE = ["V1","N1","P1","S1","M1","Q1", "V2","M2","N2","P2","S2","Q2", "V3","M3","N3","P3","Q3","S3", "V4","M4","N4","P4","Q4","S4", "V5","M5","P5","Q5","S5","N5"];
/* fix-the-mistake answers in these topics also check spacing (no space before ? ! : ;) */
const STRICT = ["S2"];
/* localStorage key prefix: progress is kept per target language */
const STORE = "enmap-";

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES, ROUTE, STRICT, STORE };
