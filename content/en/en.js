/* eslint-disable */
// English grammar map content written in English (native "en", target "en").
// Same topics, examples and exercises as uk.js; explanations are for learners of any background.
// In examples (e), the second item is a short note on meaning instead of a translation.
// Field "fr" holds the name in the target language (historical key shared with the French maps);
// field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Tenses",gloss:"time and aspect",c:"--l-v"},
  M:{fr:"Modals & future",gloss:"possibility and plans",c:"--l-m"},
  N:{fr:"Noun phrase",gloss:"nouns and describing",c:"--l-n"},
  P:{fr:"Patterns",gloss:"verb patterns",c:"--l-p"},
  Q:{fr:"Questions & speech",gloss:"asking and reporting",c:"--l-o"},
  S:{fr:"Sentence & text",gloss:"building texts",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Foundations",goal:"Simple sentences without mistakes: the two present tenses, articles, in/on/at, questions and word order.",task:"Describe your usual week and what is different about this week (10–12 sentences). Add 3 questions for the person you're talking to. Then say the same thing out loud and record yourself."},
  {n:2,name:"Storytelling",goal:"Talk about the past and your plans: past simple, the future, -ing or to, question tags, punctuation.",task:"A letter to a friend about last weekend and your plans for the next one (150 words). Check apostrophes, capital letters and commas. Tell the same story out loud in 2 minutes."},
  {n:3,name:"Connections",goal:"Longer sentences and ideas: present perfect, conditionals, relative clauses, polite indirect questions.",task:"An essay, “What has changed in your city in the last ten years?” (200 words): present perfect, 2 conditional sentences, 3 relative clauses. Plus a polite enquiry letter with indirect questions."},
  {n:4,name:"Nuance",goal:"Narrative tenses, the unreal past, the passive, reported speech, linking words.",task:"The story of a day when everything went wrong (250 words): past perfect, third conditional, passive. Then report a conversation from that day in reported speech."},
  {n:5,name:"Style",goal:"B2 English: perfect continuous, deduction, collocations, reporting verbs, emphasis and formal style.",task:"An argumentative essay in the B2 First format (220–260 words) and a 3-minute talk on the same topic. Check collocations, reporting verbs and register."}
];

const T = [
/* ---------- V: tenses ---------- */
{id:"V1",d:"V",p:1,fr:"Present",gloss:"present tenses",t:"Present simple or present continuous?",
 s:"English has two present tenses where many languages have one. Simple is for habits and facts, continuous for what's happening now or for a while.",
 r:["Present simple: <b>I work, she works</b>. The 3rd person singular takes <b>-s</b>. Questions and negatives use <b>do / does</b>: Does she work? She doesn't work.","Present continuous: <b>am / is / are + -ing</b>: I'm working, they're waiting.","Simple: habits, facts, timetables (usually, every day, never). Continuous: now, around now, temporary (now, at the moment, this week).","State verbs (know, like, want, believe, need, own) usually don't take -ing: I <b>know</b>, not I'm knowing."],
 e:[["She works in a bank, but this month she's working from home.","Her permanent job vs. a temporary arrangement."],["Water boils at 100 degrees.","A general fact → present simple."],["What are you doing? — I'm cooking.","Happening right now → continuous."]],
 x:["I am understanding you now.","I understand you now.","understand is a state verb: no -ing, even for “now”."],
 q:[["He usually ___ to work by bus.",["go","goes","is going"],1,"usually = habit; 3rd person singular → goes."],["Listen! Someone ___ at the door.",["knocks","is knocking","knock"],1,"Listen! — it's happening right now → continuous."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Past simple",gloss:"finished past",t:"Past simple and used to",
 s:"The main tense for telling stories about the finished past. The hard parts are irregular verbs and did in questions.",
 r:["Regular verbs: <b>-ed</b> (worked, stopped, studied). Irregular verbs have to be learned: go → <b>went</b>, see → <b>saw</b>, buy → <b>bought</b>.","Questions and negatives use <b>did</b> + base form: Did you see? I didn't go. No -ed after did.","The past simple goes with a specific time in the past: yesterday, last week, in 2019, two days ago.","<b>used to</b> + base form: a past habit or state that is no longer true: I used to smoke."],
 e:[["We moved to Lviv two years ago.","A finished action at a known time."],["Did you enjoy the film? — No, I didn't.","Question and short answer with did."],["She used to live in Poland.","She lived there before, but not any more."]],
 x:["Did you went to the party?","Did you go to the party?","After did, use the base form: did already shows the past."],
 q:[["I ___ him at the station yesterday.",["see","saw","seen"],1,"yesterday → past simple; see → saw."],["They ___ come to the meeting.",["didn't","don't","wasn't"],0,"Past simple negative: didn't + base form."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Present perfect",gloss:"past linked to now",t:"Present perfect or past simple?",
 s:"One of the hardest choices in English. Both talk about the past, but the present perfect connects it to now.",
 r:["Form: <b>have / has + past participle</b>: I've finished, she has gone.","Present perfect: experience with no date, a result now, a period that isn't over: ever, never, already, yet, just, so far, this week.","Past simple: a finished event at a specific time: yesterday, in 2020, ago, last year, when I was young.","<b>for</b> + a length of time (for three years), <b>since</b> + a starting point (since 2020). If it's still true now → present perfect, not present simple."],
 e:[["I've lost my keys. — When did you last see them?","Result now (present perfect) vs. a specific moment (past simple)."],["Have you ever been to London?","Life experience, no date."],["She has lived here since 2018.","Started in the past, still true now."]],
 x:["I live here for five years.","I've lived here for five years.","It started in the past and is still true → present perfect."],
 q:[["I ___ this film three times.",["saw","have seen","see"],1,"Experience with no specific time → present perfect."],["We ___ to Paris in 2019.",["have gone","went","have been"],1,"A specific year → past simple."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Narrative tenses",gloss:"telling stories",t:"Past continuous and past perfect",
 s:"A story sounds natural with three past tenses: the background, the events and what had happened before.",
 r:["Past continuous: <b>was / were + -ing</b> — background, an action in progress: It was raining.","Past simple — the events that move the story on: Suddenly the phone rang.","Past perfect: <b>had + past participle</b> — an action before another past action: When I arrived, the film had started.","A typical pattern: <i>I was walking home when I saw that someone had broken my car window.</i>"],
 e:[["While we were having dinner, the lights went out.","Background action interrupted by an event."],["She was tired because she had worked all night.","The work happened before she was tired."],["By the time the police arrived, the thief had escaped.","The escape came first."]],
 x:["When I arrived at the station, the train already left.","When I arrived at the station, the train had already left.","The train left before I arrived → past perfect."],
 q:[["I ___ TV when you called.",["watched","was watching","had watched"],1,"An action in progress that was interrupted → past continuous."],["He couldn't get in because he ___ his keys.",["lost","was losing","had lost"],2,"He lost them earlier → past perfect."]],pre:["V3"]},
{id:"V5",d:"V",p:5,fr:"Perfect continuous",gloss:"duration and outlook",t:"Perfect continuous and future perfect",
 s:"B2 forms that show duration up to a point in time. They sound natural in conversation and are useful in essays and reports.",
 r:["Present perfect continuous: <b>have been + -ing</b> — duration up to now, or a visible result: I've been waiting for an hour. You look tired — have you been running?","Past perfect continuous: <b>had been + -ing</b> — duration up to a past moment: She had been working there for ten years when it closed.","Future continuous: <b>will be + -ing</b> — in progress at a future moment: This time tomorrow I'll be flying to Rome.","Future perfect: <b>will have + past participle</b> — finished before a future moment: By June I'll have finished the course."],
 e:[["How long have you been learning English?","Duration up to now."],["I'll have saved enough money by next summer.","Finished before a future deadline."],["Don't call at 8 — we'll be having dinner.","In progress at that future moment."]],
 x:["I'm waiting for you since two o'clock!","I've been waiting for you since two o'clock!","since + duration up to now → present perfect continuous."],
 q:[["She's tired because she ___ all day.",["has worked","has been working","is working"],1,"Duration and a visible result → perfect continuous."],["By 2030 they ___ the new bridge.",["will build","will have built","are building"],1,"by + a future time → future perfect."]],pre:["V4"]},
/* ---------- M: modals and future ---------- */
{id:"M1",d:"M",p:1,fr:"can · must · should",gloss:"ability and obligation",t:"Modal verbs: can, must, have to, should",
 s:"Modal verbs express ability, permission, obligation and advice. You need them to ask politely and to give advice.",
 r:["After a modal: the base form <b>without to</b>: She can swim. Not can to swim, not cans.","<b>can</b> — ability, possibility, permission; <b>could</b> — past ability or a polite request.","<b>must</b> — obligation from the speaker, <b>have to</b> — obligation from outside (rules). <b>mustn't</b> — prohibition, <b>don't have to</b> — no need.","<b>should</b> — advice: You should see a doctor."],
 e:[["Could you help me with this form?","A polite request."],["You mustn't smoke here, but you don't have to leave.","Not allowed vs. not necessary."],["I had to work late yesterday.","must has no past form → had to."]],
 x:["You don't must park here.","You mustn't park here.","Modals form the negative with not, without do: mustn't, can't, shouldn't."],
 q:[["You ___ wear a uniform; it's optional.",["mustn't","don't have to","can't"],1,"Optional = no obligation → don't have to."],["She ___ speak three languages.",["can","cans","can to"],0,"Modals take no -s and no to."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Future",gloss:"talking about the future",t:"Future: will, going to, present continuous",
 s:"English has several ways to talk about the future. The choice depends on whether it's a decision, a plan or a prediction.",
 r:["<b>will</b> — a decision made now, a promise, a prediction based on opinion: I'll get it! I think it will rain.","<b>going to</b> — an intention or plan; a prediction based on evidence: I'm going to study law. Look at the clouds — it's going to rain.","<b>Present continuous</b> — an arrangement with a time and place: I'm meeting Tom at six.","After <b>when, if, as soon as, before, until</b>, use the present simple for the future: When I get home, I'll call you."],
 e:[["I'm going to start running next week.","A plan already decided."],["The phone's ringing. — I'll answer it.","A decision made on the spot."],["We're flying to Warsaw on Friday.","An arrangement: tickets are booked."]],
 x:["I'll call you when I will arrive.","I'll call you when I arrive.","After when, use the present simple even for the future."],
 q:[["I've decided: I ___ a new laptop.",["'ll buy","'m going to buy","buy"],1,"A decision made earlier → going to."],["Wait, I ___ help you with those bags.",["'ll","'m going to","am"],0,"A spontaneous decision → will."]],pre:["V1"]},
{id:"M3",d:"M",p:3,fr:"Conditionals 0–2",gloss:"if sentences",t:"Conditionals: zero, first and second",
 s:"Sentences with if, real and imagined. The second conditional is key for advice and hypotheses in conversation.",
 r:["Zero: <b>if + present, present</b> — a general truth: If you heat ice, it melts.","First: <b>if + present, will + base form</b> — a real possibility: If it rains, we'll stay in.","Second: <b>if + past simple, would + base form</b> — imagined now, or unlikely: If I had more time, I would travel.","<b>If I were you, I'd…</b> — advice. <b>unless</b> = if not."],
 e:[["If you don't hurry, you'll miss the bus.","A real possibility → first conditional."],["If I lived by the sea, I'd swim every day.","An imagined situation → second conditional."],["If I were you, I wouldn't sign it.","Advice."]],
 x:["If I would have money, I would buy a car.","If I had money, I would buy a car.","would only goes in the main clause, never after if."],
 q:[["If you ___ water to 100°C, it boils.",["heat","will heat","heated"],0,"A general truth → zero conditional."],["If I ___ rich, I'd buy an island.",["am","were","would be"],1,"An imagined situation → past; were for all persons."]],pre:["M2","V2"]},
{id:"M4",d:"M",p:4,fr:"3rd conditional · wish",gloss:"the unreal past",t:"Third conditional, mixed conditionals and wish",
 s:"How to talk about what could have happened but didn't, and how to express regret. A classic B2 exam topic.",
 r:["Third: <b>if + past perfect, would have + past participle</b>: If I had left earlier, I wouldn't have missed the train.","Mixed: a past condition → a present result: If I had studied medicine, I would be a doctor now.","<b>wish / if only + past simple</b> — regret about the present: I wish I had more time.","<b>wish + past perfect</b> — regret about the past: I wish I hadn't said that. <b>wish + would</b> — annoyance at someone else's behaviour: I wish you would stop."],
 e:[["If you had told me, I would have helped you.","You didn't tell me, so I didn't help."],["I wish I could speak Spanish.","I can't, and I'm sorry about it."],["If only I hadn't sold that car!","A strong regret about the past."]],
 x:["If I would have known, I would have come.","If I had known, I would have come.","After if: past perfect; would have only in the main clause."],
 q:[["If we ___ the map, we wouldn't have got lost.",["took","had taken","would take"],1,"An unreal past condition → past perfect."],["I wish I ___ so much yesterday.",["didn't eat","hadn't eaten","wouldn't eat"],1,"Regret about the past → wish + past perfect."]],pre:["M3","V4"]},
{id:"M5",d:"M",p:5,fr:"Past modals",gloss:"deduction and regret",t:"Deduction and past modals: must have, might have, should have",
 s:"How to draw conclusions and make guesses, and how to talk about past mistakes and missed chances.",
 r:["Guessing about now: <b>must</b> (almost sure it's true), <b>might / may / could</b> (possibly), <b>can't</b> (sure it's not true): She must be at work. He can't be serious.","About the past: <b>must have / might have / can't have + past participle</b>: They must have left.","<b>should have done</b> — criticism, regret: You should have told me.","<b>needn't have done</b> — done, but unnecessary; <b>didn't need to</b> — it wasn't necessary (and probably not done)."],
 e:[["The lights are off — they must have gone to bed.","A confident conclusion about the past."],["She can't have finished already; she only started at ten.","Sure it's not true."],["I should have listened to you.","Regret: I didn't listen."]],
 x:["He mustn't be at home — his car isn't there.","He can't be at home — his car isn't there.","A negative deduction → can't. mustn't means “not allowed”."],
 q:[["You ___ be hungry after that long walk.",["must","can't","should have"],0,"A logical positive conclusion → must."],["I ___ revised more; I failed the test.",["must have","should have","can't have"],1,"Regret about the past → should have."]],pre:["M4","V3"]},
/* ---------- N: noun phrase ---------- */
{id:"N1",d:"N",p:1,fr:"Articles",gloss:"a, an, the",t:"Articles: a, an, the or nothing",
 s:"Choosing between a, the and no article is one of the most visible issues in both writing and speech.",
 r:["<b>a / an</b> — one of many, first mention, jobs: I saw a dog. She's a teacher. an before a vowel sound: an hour, a university.","<b>the</b> — known to both speakers, unique, already mentioned: The dog was huge. the sun, the best.","No article (Ø) — general ideas with plurals and uncountable nouns: I like cats. Water is important.","No article: most countries and cities, languages, meals: in Ukraine, speak English, have breakfast. But the UK, the USA."],
 e:[["I bought a book. The book is about Japan.","First mention a, second mention the."],["Life is short.","Life in general → no article."],["She plays the piano and works as an engineer.","Instruments take the; jobs take a / an."]],
 x:["She is doctor.","She is a doctor.","A job in the singular takes a / an."],
 q:[["I need ___ umbrella.",["a","an","the"],1,"umbrella starts with a vowel sound → an."],["___ moon is very bright tonight.",["A","The","—"],1,"Something unique → the."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Countable · uncountable",gloss:"how much, how many",t:"Countable and uncountable nouns, quantifiers",
 s:"Whether a noun can be counted decides the article, the plural and the quantity words: much or many, few or little.",
 r:["Countable nouns have a plural and take a / an: a chair, two chairs. Uncountable nouns don't: water, advice, information, furniture, news.","<b>many / few / a few</b> with countable nouns; <b>much / little / a little</b> with uncountable nouns; <b>a lot of</b> with both.","<b>some</b> in positive sentences and offers; <b>any</b> in negatives and questions: Is there any milk? Would you like some tea?","<b>few / little</b> — not many / not much (negative); <b>a few / a little</b> — some (enough)."],
 e:[["Can you give me some advice?","advice is uncountable: no an, no -s."],["There aren't many people here, but there's a lot of noise.","many + countable, a lot of + uncountable."],["I have a few friends in Canada.","Some, and that's positive."]],
 x:["She gave me many useful informations.","She gave me a lot of useful information.","information is uncountable: no plural, no many."],
 q:[["How ___ money do you need?",["many","much","few"],1,"money is uncountable → much."],["There are ___ apples left — enough for a pie.",["a few","a little","few"],0,"Countable, and enough → a few."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Adjectives · adverbs",gloss:"describing well",t:"Adjectives and adverbs: order, -ed / -ing, so / such, too / enough",
 s:"How to describe precisely: the order of adjectives, bored or boring, good or well, so or such.",
 r:["Adjectives never change for number and come before the noun: a <b>red</b> car, red cars.","Order: opinion → size → age → shape → colour → origin → material: a lovely small old round red Italian wooden table.","<b>-ed</b> — how a person feels (bored, interested); <b>-ing</b> — what causes the feeling (boring, interesting).","Adverbs describe actions: She drives <b>carefully</b>; good → <b>well</b>. <b>so</b> + adjective, <b>such (a)</b> + noun; <b>too</b> + adjective, adjective + <b>enough</b>."],
 e:[["The film was boring, so I was bored.","-ing for the cause, -ed for the feeling."],["She speaks English very well.","An adverb describes how she speaks."],["It was such a beautiful day that we stayed outside.","such a + adjective + noun."]],
 x:["I'm very interesting in history.","I'm very interested in history.","How a person feels → -ed."],
 q:[["He's not old ___ to drive.",["enough","too","so"],0,"Adjective + enough."],["You did the job really ___.",["good","well","goodly"],1,"It describes an action → the adverb well."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Comparison",gloss:"comparing",t:"Comparatives and superlatives",
 s:"Comparison is everywhere: essays, reviews and everyday conversation. The traps: more or -er, and how to make a comparison stronger.",
 r:["Short adjectives: <b>-er / the -est</b>: cheaper, the cheapest; big → bigger; happy → happier.","Long adjectives (two syllables or more, except -y): <b>more / the most</b>: more expensive, the most interesting.","Irregular: good → better → the best; bad → worse → the worst; far → further.","<b>as … as</b> — the same; <b>not as … as</b> — less; stronger: much / far / a lot bigger, slightly bigger; <b>the more…, the better</b>."],
 e:[["This phone is much cheaper than that one.","much makes the comparison stronger."],["It's the most beautiful city I've ever seen.","Superlative + present perfect."],["The more you practise, the more confident you become.","Two things changing together."]],
 x:["She is more taller than her brother.","She is taller than her brother.","Either -er or more, never both."],
 q:[["Today is ___ than yesterday.",["hotter","more hot","hoter"],0,"Short adjective: hot → hotter (double t)."],["This is the ___ film of the year.",["better","best","most good"],1,"Superlative of good → the best."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Noun phrases",gloss:"dense writing",t:"Noun phrases: compound nouns, 's or of, nominalisation",
 s:"Written English packs a lot of information into noun phrases. Handling them well is a sign of a confident B2.",
 r:["A noun used as a modifier comes first and stays singular: a <b>bus</b> stop, a <b>ten-minute</b> walk, a <b>car</b> park.","<b>'s</b> for people, animals, organisations and time: my sister's car, the company's profits, today's news. <b>of</b> for things and long phrases: the end of the film.","Nominalisation: a verb or adjective becomes a noun: decide → decision, improve → improvement, able → ability.","A typical essay rewrite: Because prices increased → <b>Due to the increase in prices</b>."],
 e:[["There has been a significant improvement in air quality.","A noun (improvement) instead of a verb (improve)."],["The ten-year-old boy won a three-day trip.","Number + noun as a modifier: hyphens, singular."],["The project's success surprised everyone.","'s with an organisation or project."]],
 x:["We stayed in a five-stars hotel.","We stayed in a five-star hotel.","A noun used as a modifier has no plural, even with a number."],
 q:[["We need a ___ solution.",["long-term","long-terms","term-long"],0,"Compound modifier: long-term."],["I met ___ yesterday.",["the friend of my brother","my brother's friend","my brother friend"],1,"For people, 's sounds more natural."]],pre:["N4","S3"]},
/* ---------- P: prepositions and verb patterns ---------- */
{id:"P1",d:"P",p:1,fr:"in · on · at",gloss:"time and place",t:"Prepositions of time and place: in, on, at",
 s:"Three small words that cause big problems. The choice depends on how “big” the time or place is.",
 r:["Time: <b>at</b> — an exact moment (at 6, at night, at the weekend); <b>on</b> — days and dates (on Monday, on 5 May); <b>in</b> — longer periods (in June, in 2020, in the morning).","Place: <b>at</b> — a point (at the bus stop, at home, at work); <b>on</b> — a surface (on the table, on the wall, on the 3rd floor); <b>in</b> — an enclosed space or area (in the room, in London).","No preposition: next / last / this / every + time: next week, last Monday.","Transport: <b>on</b> the bus / train / plane, <b>in</b> a car / taxi; <b>by</b> bus — how you travel."],
 e:[["The meeting is on Monday at 10 in the main office.","Day → on, time → at, building → in."],["I was born in 1995 in Kharkiv.","Year and city → in."],["See you at the weekend!","British English; American English says on the weekend."]],
 x:["I'll see you in Monday.","I'll see you on Monday.","Days of the week take on."],
 q:[["My birthday is ___ March.",["in","on","at"],0,"A month → in."],["She's waiting ___ the bus stop.",["in","on","at"],2,"A point on a map → at."]],pre:[]},
{id:"P2",d:"P",p:2,fr:"-ing or to",gloss:"verb + verb",t:"Gerund or infinitive: doing or to do?",
 s:"Some verbs are followed by -ing, others by to + base form. Get it wrong and the sentence sounds unnatural.",
 r:["After <b>enjoy, avoid, finish, mind, suggest, keep, consider, practise</b> → -ing: I enjoy reading.","After <b>want, decide, hope, plan, agree, refuse, manage, would like</b> → to + base form: I decided to stay.","After a preposition → always -ing: interested <b>in learning</b>, before <b>leaving</b>, look forward <b>to seeing</b>.","Meaning changes: <b>stop</b> doing (quit) / stop to do (pause in order to); <b>remember</b> doing (a memory) / remember to do (don't forget); <b>try</b> doing (as an experiment) / try to do (make an effort)."],
 e:[["I look forward to hearing from you.","to is a preposition here → -ing."],["She refused to answer.","refuse + to."],["Remember to lock the door!","Don't forget to do it."]],
 x:["I'm looking forward to see you.","I'm looking forward to seeing you.","Here to is a preposition, so -ing follows."],
 q:[["Would you mind ___ the window?",["to open","opening","open"],1,"mind + -ing."],["We hope ___ you soon.",["seeing","to see","see"],1,"hope + to + base form."]],pre:["P1","V1"]},
{id:"P3",d:"P",p:3,fr:"Phrasal verbs",gloss:"verb + particle",t:"Phrasal verbs",
 s:"Verb + particle: get up, look after, give up. Without them spoken English sounds bookish; with them it sounds natural.",
 r:["The meaning often can't be guessed from the parts: give up = quit, put off = postpone, run out of = have none left.","Separable: a noun can go in the middle or after: turn the TV off / turn off the TV. A pronoun goes <b>only in the middle</b>: turn it off.","Inseparable: look after the kids, get over it, come across a problem.","In formal writing, a one-word verb is often better: postpone (put off), tolerate (put up with), investigate (look into)."],
 e:[["Can you pick me up at the station?","pick up = collect someone by car."],["We've run out of milk.","There's no milk left."],["She takes after her mother.","She looks or behaves like her mother."]],
 x:["Turn off it, please.","Turn it off, please.","With a separable phrasal verb, the pronoun goes in the middle."],
 q:[["I need to ___ smoking.",["give up","give in","give out"],0,"give up = quit (a habit)."],["Could you ___ my cat while I'm away?",["look for","look after","look up"],1,"look after = take care of."]],pre:["P2"]},
{id:"P4",d:"P",p:4,fr:"Passive",gloss:"the passive voice",t:"The passive and have something done",
 s:"The passive shifts attention from who did something to the action or the result. You need it for reports, news and formal letters.",
 r:["Form: <b>be + past participle</b> in the right tense: is made, was built, has been sold, will be done, is being repaired.","Add the agent with <b>by</b> only if it matters: The book was written by Orwell.","With modals: <b>can / must / should be + past participle</b>: It must be done today.","<b>have / get something done</b> — someone does it for you: I had my hair cut. I'm getting my car repaired."],
 e:[["English is spoken all over the world.","Who speaks it doesn't matter."],["The bridge was built in 1890.","The result matters, not the builders."],["We're having the kitchen painted next week.","Someone else will paint it for us."]],
 x:["The letter was wrote yesterday.","The letter was written yesterday.","The passive uses the past participle (third form)."],
 q:[["The room ___ every day.",["cleans","is cleaned","is cleaning"],1,"Present passive: is + past participle."],["My bike ___ last night.",["was stolen","stole","has stolen"],0,"Past passive: was + past participle."]],pre:["P3","V3"]},
{id:"P5",d:"P",p:5,fr:"Collocations",gloss:"words that go together",t:"Dependent prepositions and collocations",
 s:"Which prepositions follow which words (depend on, interested in) and which words naturally go together (make a decision, do homework). This is what separates B2 from B1.",
 r:["Verb + preposition: depend <b>on</b>, listen <b>to</b>, wait <b>for</b>, apologise <b>for</b>, agree <b>with</b> someone / <b>on</b> something.","Adjective + preposition: interested <b>in</b>, good <b>at</b>, afraid <b>of</b>, responsible <b>for</b>, different <b>from</b>.","<b>make</b> — create, produce a result: make a decision, a mistake, money, progress. <b>do</b> — activities and work: do homework, business, research, a favour.","Other fixed pairs: take a photo, have a look, pay attention, catch a cold, keep a promise, break a rule."],
 e:[["It depends on the weather.","depend on, never depend of."],["I've made a lot of progress this year.","make progress."],["She's responsible for the marketing team.","responsible for."]],
 x:["I'm agree with you.","I agree with you.","agree is a verb: no be."],
 q:[["Are you interested ___ art?",["on","in","for"],1,"interested in."],["I need to ___ a decision quickly.",["do","make","take up"],1,"make a decision."]],pre:["P3","P2"]},
/* ---------- Q: questions and reported speech ---------- */
{id:"Q1",d:"Q",p:1,fr:"Questions",gloss:"asking questions",t:"Questions: word order, do and subject questions",
 s:"English questions need an auxiliary verb and inversion. Intonation alone isn't enough — a frequent issue in speech.",
 r:["Order: (question word) + auxiliary + subject + verb: <b>Where do you live?</b> What are you doing? Have you seen it?","No auxiliary in the statement? Use <b>do / does / did</b>: Does she like it? When did they arrive?","Questions about the subject — no do: <b>Who called you?</b> What happened? (compare: Who did you call?)","Prepositions go at the end: Where are you from? What are you talking about?"],
 e:[["How long have you been waiting?","The auxiliary have comes before the subject."],["Who told you that?","who is the subject → no did."],["What does this word mean?","Present simple question → does + base form."]],
 x:["Where you live?","Where do you live?","Without do, a present simple question is wrong."],
 q:[["What ___ you do last weekend?",["did","do","were"],0,"Past → did."],["Who ___ the window?",["did break","broke","did broken"],1,"A question about the subject (who?) → no did."]],pre:["V1"]},
{id:"Q2",d:"Q",p:2,fr:"Tags · so do I",gloss:"conversation tools",t:"Question tags, short answers, so do I / neither do I",
 s:"Small phrases that make conversation come alive: “isn't it?”, “me too”, “me neither”.",
 r:["A tag repeats the auxiliary with the opposite polarity: You're tired, <b>aren't you</b>? She doesn't smoke, <b>does she</b>?","No auxiliary → do / does / did: You live here, <b>don't you</b>? He left, <b>didn't he</b>?","Special cases: I'm late, <b>aren't I</b>? Let's go, <b>shall we</b>? Open the door, <b>will you</b>?","Agreeing: <b>So do I</b> / Me too (+); <b>Neither do I</b> / Me neither (−). The auxiliary follows the tense: So did I, Neither can I."],
 e:[["It's a lovely day, isn't it?","Falling tone: you expect agreement."],["I've never been to Japan. — Neither have I.","Agreeing with a negative."],["You won't tell anyone, will you?","Negative statement → positive tag."]],
 x:["You like coffee, isn't it?","You like coffee, don't you?","The tag repeats the sentence's auxiliary (here do); isn't it doesn't fit every sentence."],
 q:[["She can drive, ___?",["can she","can't she","doesn't she"],1,"Positive statement → negative tag with the same auxiliary."],["I love jazz. — ___.",["So do I","So am I","Neither do I"],0,"Agreeing with a positive present simple statement → So do I."]],pre:["Q1","V2"]},
{id:"Q3",d:"Q",p:3,fr:"Indirect questions",gloss:"polite questions",t:"Indirect questions",
 s:"Polite questions: Could you tell me where…? Do you know if…? The key is statement word order.",
 r:["Openers: Could you tell me…, Do you know…, I wonder…, Would you mind telling me…","After the opener: statement word order and no do: Where is the station? → Could you tell me <b>where the station is</b>?","Yes / no questions use <b>if / whether</b>: Is it open? → Do you know if it's open?","Use a question mark only if the opener is itself a question: Do you know where he lives? / I wonder where he lives."],
 e:[["Could you tell me what time the museum opens?","No does; the verb takes -s."],["Do you know if there's a pharmacy near here?","A yes / no question → if."],["I wonder why she didn't come.","Not a question → full stop."]],
 x:["Can you tell me where is the bank?","Can you tell me where the bank is?","In an indirect question: subject first, then the verb."],
 q:[["Do you know what time ___?",["does the train leave","the train leaves","leaves the train"],1,"Statement order, no does."],["Could you tell me ___ the price includes breakfast?",["if","that","does"],0,"Yes / no question → if / whether."]],pre:["Q1"]},
{id:"Q4",d:"Q",p:4,fr:"Reported speech",gloss:"reporting what was said",t:"Reported speech",
 s:"Reporting what someone said: He said that…, She asked if… You need it in letters, reports and conversation.",
 r:["If the reporting verb is in the past (said, told), the tense moves back: present → past, past and present perfect → past perfect, will → would, can → could.","<b>say</b> (something) / <b>tell</b> someone (something): She said that… / She told me that… Not said me.","Questions: statement order; yes / no with if / whether: He asked <b>where I lived</b>. She asked <b>if I was</b> OK.","Orders and requests: <b>tell / ask + someone + (not) to</b>: He told me to wait. She asked us not to smoke."],
 e:[["\"I'm tired.\" → She said she was tired.","am → was."],["\"Where do you work?\" → He asked me where I worked.","Statement order, tense moved back."],["\"Don't be late.\" → They told us not to be late.","An order → told + not to."]],
 x:["He said me that he was busy.","He told me that he was busy.","tell + person; say without a person (or say to me)."],
 q:[["\"I will call you.\" → She said she ___ me.",["will call","would call","called"],1,"will → would."],["He asked me where ___.",["did I live","I lived","do I live"],1,"Statement order and backshift."]],pre:["Q3","V4"]},
{id:"Q5",d:"Q",p:5,fr:"Reporting verbs",gloss:"beyond said",t:"Reporting verbs: suggest, admit, deny, warn…",
 s:"Instead of said every time, precise verbs that show what the speaker meant. Each has its own pattern.",
 r:["+ to: <b>agree, refuse, offer, promise, threaten</b>: She refused to help.","+ someone + to: <b>advise, ask, encourage, invite, remind, warn, persuade</b>: He reminded me to call.","+ -ing: <b>admit, deny, suggest, recommend</b>; + preposition + -ing: <b>apologise for, insist on, accuse someone of, blame someone for</b>.","+ that: <b>explain, claim, complain, point out</b>: He explained that the shop was closed."],
 e:[["He denied taking the money.","deny + -ing."],["She suggested going to the cinema.","suggest + -ing."],["They warned us not to swim there.","warn + someone + not to."]],
 x:["He suggested me to take a taxi.","He suggested taking a taxi.","suggest doesn't take someone + to. Also possible: He suggested (that) I take a taxi."],
 q:[["She apologised ___ late.",["to be","for being","being"],1,"apologise for + -ing."],["He ___ to lend me his car.",["suggested","offered","admitted"],1,"offer + to + base form."]],pre:["Q4","P2"]},
/* ---------- S: sentence and text ---------- */
{id:"S1",d:"S",p:1,fr:"Word order",gloss:"word order",t:"Word order: subject, verb, object and adverbs",
 s:"English word order is fixed, and it carries meaning. Moving words around can change or break a sentence.",
 r:["The basic pattern: <b>subject + verb + object + place + time</b>: I met my friend at the café yesterday.","A subject is always needed, even an empty one: <b>It</b> is raining. <b>There</b> is a problem.","Frequency adverbs (always, usually, often, never) go before the main verb, but after be: She often reads. She is often late.","Nothing goes between a verb and its object: I like football <b>very much</b>, not I like very much football."],
 e:[["We usually have dinner at seven.","Frequency adverb before the main verb."],["There are two problems with this plan.","there are for existence."],["It's important to sleep well.","Empty subject it."]],
 x:["Is very cold today.","It is very cold today.","An English sentence always has a subject."],
 q:[["I ___ late for work.",["am never","never am","never"],0,"Frequency adverb after be."],["She speaks ___.",["very well English","English very well","English well very"],1,"Verb and object together, then the adverb."]],pre:[]},
{id:"S2",d:"S",p:2,fr:"Punctuation",gloss:"punctuation",t:"Punctuation, capitals and apostrophes",
 s:"The writing rules that show at a glance: capital letters, apostrophes, commas and contractions.",
 r:["Capital letters: <b>I</b>, days, months, languages, nationalities, titles: on Monday, in May, English, Ukrainian.","Apostrophes: contractions (it's = it is, don't) and possession (Anna's, the students' books). <b>its</b> = belonging to it (no apostrophe).","A comma after introductory words and after a clause at the start: However, … / If it rains, … No comma before that: I think that…","<b>No space</b> before ? ! : ; Quotation marks are \"…\" or ‘…’."],
 e:[["On Monday I'm flying to Paris with my Ukrainian friends.","Days, cities and nationalities take capitals."],["It's a good company, and its staff are friendly.","it's = it is; its = belonging to it."],["Unfortunately, the train was late.","Comma after an introductory word."]],
 x:["The cat hurt it's leg.","The cat hurt its leg.","its is possessive, with no apostrophe; it's = it is."],
 q:[["Which is correct?",["i think that english is easy","I think that English is easy","I think, that English is easy"],1,"I and languages take capitals; no comma before that."],["___ going to rain.",["Its","It's","Its'"],1,"It is → It's."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Relative clauses",gloss:"who, which, that",t:"Relative clauses: who, which, that, whose, where",
 s:"How to join two sentences into one: the man who…, the book that… The key is telling defining from non-defining clauses, because the commas depend on it.",
 r:["<b>who</b> — people, <b>which</b> — things, <b>that</b> — both (defining clauses only), <b>whose</b> — possession, <b>where</b> — place, <b>when</b> — time.","Defining clauses: no commas, they identify who or what: The woman who lives next door is a doctor.","Non-defining clauses: commas, extra information; that is not allowed: My mother, who is 60, still works.","If the pronoun is the object, you can leave it out of a defining clause: The film (that) we saw was great."],
 e:[["That's the girl whose brother plays for Dynamo.","whose = possession."],["Kyiv, which is the capital of Ukraine, stands on the Dnipro.","Extra information → commas, which."],["Is this the book you were talking about?","Object pronoun left out; preposition at the end."]],
 x:["My father, that is a teacher, lives in Odesa.","My father, who is a teacher, lives in Odesa.","No that in a non-defining clause (with commas)."],
 q:[["The man ___ car was stolen called the police.",["who","whose","which"],1,"His car → whose."],["This is the hotel ___ we stayed last year.",["where","which","who"],0,"A place, and the clause is complete → where."]],pre:["S2"]},
{id:"S4",d:"S",p:4,fr:"Linking words",gloss:"logic and flow",t:"Linking words: contrast, cause, result and purpose",
 s:"Linking words make writing and speech logical. The key is knowing what follows them: a clause, a noun or -ing.",
 r:["Contrast: <b>but, although / even though</b> + clause; <b>despite / in spite of</b> + noun or -ing; <b>However,</b> at the start of a new sentence.","Cause: <b>because</b> + clause, <b>because of / due to</b> + noun; <b>since / as</b> — more formal.","Result: <b>so</b>; formally: <b>therefore, as a result, consequently</b>.","Purpose: <b>to / in order to</b> + base form, <b>so that</b> + clause (often with can / could): I left early so that I could catch the bus."],
 e:[["Although it was raining, we went out.","although + clause."],["Despite the rain, we went out.","despite + noun."],["The flight was cancelled due to bad weather.","due to + noun."]],
 x:["Despite it was cold, we swam.","Although it was cold, we swam.","despite + noun or -ing, not a clause: Despite the cold, we swam."],
 q:[["___ he's rich, he's not happy.",["Despite","Although","However"],1,"Before a clause → although."],["The match was cancelled ___ the snow.",["because","because of","so"],1,"Before a noun → because of."]],pre:["S3"]},
{id:"S5",d:"S",p:5,fr:"Emphasis & style",gloss:"emphasis and register",t:"Emphasis and formal style: cleft sentences, inversion, register",
 s:"How to highlight what matters and write formally. Cleft sentences, inversion and choice of register mark a B2+ level.",
 r:["Cleft sentences: <b>It was Anna who</b> called (and not someone else). <b>What I need is</b> a holiday.","Inversion after a negative expression at the start: <b>Never have I</b> seen…, <b>Not only did she</b>…, <b>Hardly had we</b>…, <b>Only then did I</b> understand.","Emphatic do / does / did in a positive sentence: I <b>do</b> like it! She <b>did</b> call.","Register: in a formal letter, use full forms, the passive, nominalisation, and words like request, assist, obtain instead of ask for, help, get."],
 e:[["What surprised me most was his reaction.","A what-cleft puts the focus at the end."],["Not only did he lie, but he also blamed me.","Inversion for emphasis."],["I would be grateful if you could send me further information.","Formal register."]],
 x:["Never I have seen such a mess.","Never have I seen such a mess.","After never at the start: inversion, as in a question."],
 q:[["___ I need is a good night's sleep.",["That","What","Which"],1,"What-cleft: What I need is…"],["Not only ___ late, but he also forgot the tickets.",["he was","was he","he did be"],1,"Inversion after not only."]],pre:["S4","P4"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["I ___ what you mean.",["see","am seeing","sees"],0,"see meaning “understand” is a state verb."],["___ she speak French?",["Do","Does","Is"],1,"3rd person singular → does; after does, no -s on the verb."],["They ___ a new house at the moment.",["build","are building","builds"],1,"at the moment → continuous."]],
 c:[["She don't like coffee.","She doesn't like coffee.","3rd person singular: doesn't."],["I'm wanting a new phone.","I want a new phone.","want is a state verb."]]},
V2:{q:[["When I was a child, I ___ climb trees.",["used to","use to","was used to"],0,"Past habit: used to + base form."],["She ___ her keys last night.",["losed","lost","has lost"],1,"lose → lost; last night → past simple."],["Where ___ you buy that jacket?",["did","do","were"],0,"Question about the past: did + base form."]],
 c:[["I didn't knew the answer.","I didn't know the answer.","After didn't → base form."],["We buyed a new car last year.","We bought a new car last year.","buy is irregular: bought."]]},
V3:{q:[["She ___ here since Monday.",["is","was","has been"],2,"since + still true → present perfect."],["___ you finished your homework yet?",["Did","Have","Are"],1,"yet in a question → present perfect."],["He ___ the company two years ago.",["has left","left","has leaved"],1,"ago → past simple."]],
 c:[["I have seen him yesterday.","I saw him yesterday.","yesterday → past simple."],["How long do you know her?","How long have you known her?","Duration up to now → present perfect."]]},
V4:{q:[["What ___ you doing at 8 last night?",["did","were","had"],1,"In progress at a past moment → past continuous."],["After she ___ the letter, she posted it.",["had written","was writing","has written"],0,"First she wrote it, then she posted it."],["The sun ___ and the birds were singing.",["shone","was shining","had shone"],1,"Background description → past continuous."]],
 c:[["While I walked home, it started to rain.","While I was walking home, it started to rain.","while + action in progress → past continuous."],["I didn't recognise her because she has changed a lot.","I didn't recognise her because she had changed a lot.","A change before a past moment → past perfect."]]},
V5:{q:[["I ___ three emails this morning.",["have been writing","have written","had written"],1,"A number, a result → perfect simple."],["We ___ for two hours when the bus finally came.",["had been waiting","have been waiting","were waiting"],0,"Duration up to a past moment → past perfect continuous."],["At 10 tomorrow I ___ an exam, so I can't talk.",["will write","will be writing","will have written"],1,"In progress at a future moment → future continuous."]],
 c:[["I've been knowing him for years.","I've known him for years.","know is a state verb: no -ing."],["By the time you arrive, I will finish.","By the time you arrive, I will have finished.","by the time + finished before then → future perfect."]]},
M1:{q:[["Yesterday I ___ get up at 5.",["must","had to","musted"],1,"must has no past form → had to."],["___ I open the window?",["Can","Do","Must I to"],0,"Asking permission: Can / Could / May I…?"],["You look ill. You ___ go home.",["should","have","must to"],0,"Advice → should."]],
 c:[["He can to drive.","He can drive.","After can → base form without to."],["We musn't to be late.","We mustn't be late.","Spelling of mustn't, and no to."]]},
M2:{q:[["What ___ this weekend? — Nothing special.",["will you do","are you doing","do you do"],1,"Asking about plans → present continuous (or going to)."],["Don't worry, I ___ tell anyone.",["won't","'m not going","don't"],0,"A promise → will / won't."],["As soon as she ___, we'll start.",["will come","comes","is going to come"],1,"After as soon as → present simple."]],
 c:[["If it will rain, we'll stay at home.","If it rains, we'll stay at home.","After if → present simple."],["I think it is raining tomorrow.","I think it will rain tomorrow.","A prediction based on opinion → will."]]},
M3:{q:[["We won't go ___ the weather improves.",["if","unless","when not"],1,"unless = if not."],["If she studies, she ___ the exam.",["passes","will pass","would pass"],1,"A real future condition → first conditional."],["What would you do if you ___ a ghost?",["see","saw","will see"],1,"An imagined situation → second conditional, past simple after if."]],
 c:[["If I will see him, I'll tell him.","If I see him, I'll tell him.","After if → present, not will."],["If I was you, I will apologise.","If I were you, I would apologise.","Advice: If I were you, I would…"]]},
M4:{q:[["If she had taken the job, she ___ in London now.",["would live","would have lived","lived"],0,"Past condition, present result → mixed: would + base form."],["I wish it ___ so cold today.",["isn't","wasn't","hadn't been"],1,"Regret about the present → wish + past simple."],["He ___ the match if he hadn't been injured.",["would win","would have won","won"],1,"Third conditional: would have + past participle."]],
 c:[["I wish I would be taller.","I wish I were taller.","Don't use wish + would about yourself; use the past."],["If he had asked me, I would help him.","If he had asked me, I would have helped him.","Past condition and past result → would have helped."]]},
M5:{q:[["Where's Tom? — He ___ be in the garden, I'm not sure.",["must","might","can't"],1,"Not sure → might / may / could."],["She ___ seen us — she didn't say hello.",["must have","can't have","should have"],1,"Sure it's not true, about the past → can't have."],["You ___ brought food — there's plenty here.",["needn't have","mustn't have","couldn't"],0,"Brought, but it wasn't necessary → needn't have."]],
 c:[["He must has forgotten.","He must have forgotten.","Modal + have + past participle."],["You should told me earlier.","You should have told me earlier.","should have + past participle."]]},
N1:{q:[["I love ___ music.",["the","a","—"],2,"Music in general → no article."],["He's ___ honest man.",["a","an","the"],1,"honest starts with a vowel sound → an."],["We went to ___ United States.",["—","a","the"],2,"Names with States, Kingdom, Republic take the."]],
 c:[["The life is beautiful.","Life is beautiful.","General ideas → no article."],["I have a good news.","I have good news.","news is uncountable: no a."]]},
N2:{q:[["I don't have ___ time today.",["many","much","some"],1,"Negative + uncountable → much."],["He made ___ progress, unfortunately.",["little","a little","few"],0,"Not much, and that's bad → little (progress is uncountable)."],["We bought new ___ for the flat.",["furnitures","furniture","a furniture"],1,"furniture is uncountable."]],
 c:[["I need an advice.","I need some advice.","advice is uncountable; one piece → a piece of advice."],["There is less people than yesterday.","There are fewer people than yesterday.","people is plural: fewer, are."]]},
N3:{q:[["It's ___ expensive for me.",["too","enough","such"],0,"More than is acceptable → too + adjective."],["They have ___ a lovely garden.",["so","such","too"],1,"such a + adjective + noun."],["She bought a ___ dress.",["silk red beautiful","beautiful red silk","red beautiful silk"],1,"Opinion → colour → material."]],
 c:[["The lesson was very bored.","The lesson was very boring.","The lesson causes the feeling → -ing."],["He works very hardly.","He works very hard.","hard is an adverb without -ly; hardly = almost not."]]},
N4:{q:[["My English isn't ___ good as yours.",["so","as","than"],1,"(not) as … as."],["This test was ___ easier than the last one.",["very","much","more"],1,"Strengthening a comparative: much / far / a lot, not very."],["He's the ___ person in the team.",["most experienced","experiencedest","more experienced"],0,"Long adjective → the most."]],
 c:[["He is older than me in two years.","He is two years older than me.","The difference goes before the comparative."],["It's the more expensive hotel in the city.","It's the most expensive hotel in the city.","Superlative among many → the most."]]},
N5:{q:[["analyse → ___",["analysement","analysis","analyst"],1,"analyse → analysis (the process)."],["The ___ of the new law caused protests.",["introduce","introduction","introducing of"],1,"Nominalisation: introduce → introduction."],["It's a ___ drive from here.",["two hours","two-hour","two-hours"],1,"Number + noun as a modifier: hyphen and singular."]],
 c:[["We waited at the stop of the bus.","We waited at the bus stop.","A fixed compound noun: bus stop."],["After he arrived, prices went up.","After his arrival, prices went up.","Nominalisation: arrive → arrival."]]},
P1:{q:[["We'll meet ___ next Friday.",["on","at","—"],2,"next + day → no preposition."],["There's a picture ___ the wall.",["in","on","at"],1,"A surface → on."],["I usually read ___ night.",["in","at","on"],1,"at night, but in the morning / in the evening."]],
 c:[["I arrived to London yesterday.","I arrived in London yesterday.","arrive in (a city or country), arrive at (a building), never arrive to."],["She is in the work now.","She is at work now.","at work, at home, at school → no article."]]},
P2:{q:[["He stopped ___ — it's bad for his health.",["to smoke","smoking","smoke"],1,"He quit smoking → stop + -ing."],["I'm good at ___ people's names.",["remember","to remember","remembering"],2,"After the preposition at → -ing."],["She managed ___ the exam.",["passing","to pass","pass"],1,"manage + to + base form."]],
 c:[["I suggest to take a taxi.","I suggest taking a taxi.","suggest + -ing (or suggest that we take)."],["He avoided to answer the question.","He avoided answering the question.","avoid + -ing."]]},
P3:{q:[["The meeting was ___ until next week.",["put off","put on","put up"],0,"put off = postpone."],["I ___ an old friend in the street yesterday.",["came across","came up","came over"],0,"come across = meet by chance."],["If you don't know the word, ___.",["look up it","look it up","look up"],1,"The pronoun goes in the middle: look it up."]],
 c:[["I can't put up this noise.","I can't put up with this noise.","Three-part verb: put up with = tolerate."],["Please fill in it.","Please fill it in.","The pronoun goes between the verb and the particle."]]},
P4:{q:[["The results ___ next week.",["will announce","will be announced","are announcing"],1,"Future passive: will be + past participle."],["The road ___ at the moment.",["is repaired","is being repaired","repairs"],1,"In progress now → is being + past participle."],["I ___ my eyes tested yesterday.",["had","did","made"],0,"have something done."]],
 c:[["This house was build in 1920.","This house was built in 1920.","build → built."],["I cut my hair at the hairdresser's.","I had my hair cut at the hairdresser's.","You didn't cut it yourself → have something done."]]},
P5:{q:[["Please don't ___ a noise.",["do","make","have"],1,"make a noise."],["He apologised ___ being late.",["for","about","of"],0,"apologise for + -ing."],["Can you ___ me a favour?",["make","do","give"],1,"do someone a favour."]],
 c:[["It depends of you.","It depends on you.","depend on."],["I did a mistake in the test.","I made a mistake in the test.","make a mistake."]]},
Q1:{q:[["How often ___ to the gym?",["you go","do you go","you do go"],1,"The auxiliary goes before the subject."],["What ___ to you yesterday?",["happened","did happen","did it happen"],0,"Question about the subject: what happened."],["Who ___ you waiting for?",["do","are","is"],1,"waiting → continuous: are you waiting; preposition at the end."]],
 c:[["Why she is angry?","Why is she angry?","Inversion: is she."],["What means this word?","What does this word mean?","Question about the object → does + base form."]]},
Q2:{q:[["They haven't arrived yet, ___?",["haven't they","have they","did they"],1,"Negative statement → positive tag."],["I didn't sleep well. — ___.",["Neither did I","So did I","Neither I did"],0,"Agreeing with a negative in the past → Neither did I."],["I'm right, ___?",["amn't I","aren't I","am I"],1,"Special form: aren't I."]],
 c:[["He went home, wasn't he?","He went home, didn't he?","went → auxiliary did."],["I can't swim. — Me too.","I can't swim. — Me neither.","Agreeing with a negative → Me neither / Neither can I."]]},
Q3:{q:[["I'd like to know how much ___.",["does it cost","it costs","costs it"],1,"Statement order, no does."],["Do you remember where ___ the keys?",["did you put","you put","you did put"],1,"No did, statement order."],["I'm not sure ___ he's coming or not.",["whether","that","what"],0,"whether … or not."]],
 c:[["Do you know where does she work?","Do you know where she works?","No does; the verb takes -s."],["Could you tell me is this seat free?","Could you tell me if this seat is free?","Yes / no → if + statement order."]]},
Q4:{q:[["\"Can you help?\" → She asked if I ___ help.",["can","could","will"],1,"can → could."],["\"We've finished.\" → They said they ___ finished.",["have","had","has"],1,"present perfect → past perfect."],["\"Sit down.\" → He told me ___.",["sit down","to sit down","that I sit down"],1,"An order → told + to."]],
 c:[["She asked me what was my name.","She asked me what my name was.","Indirect question → statement order."],["He said to not worry.","He told me not to worry.","An order: tell someone not to."]]},
Q5:{q:[["They accused him ___ the documents.",["of stealing","to steal","for stealing"],0,"accuse someone of + -ing."],["The doctor ___ me to rest.",["suggested","advised","said"],1,"advise someone to."],["She admitted ___ a mistake.",["to make","making","make"],1,"admit + -ing."]],
 c:[["He insisted to pay the bill.","He insisted on paying the bill.","insist on + -ing."],["She explained me the problem.","She explained the problem to me.","explain something to someone."]]},
S1:{q:[["___ a lot of traffic in the city centre.",["Is","There is","It has"],1,"Existence → there is."],["We ___ go to the cinema.",["sometimes","sometimes do","do sometimes not"],0,"Frequency adverb before the main verb."],["They moved ___.",["last year to Canada","to Canada last year","Canada to last year"],1,"Place, then time."]],
 c:[["I always am tired on Mondays.","I am always tired on Mondays.","Frequency adverb after be."],["Yesterday I saw in the park Tom.","Yesterday I saw Tom in the park.","The object comes straight after the verb."]]},
S2:{q:[["Which is correct?",["Are you ready ?","Are you ready?","Are you ready ?!"],1,"No space before ?"],["The ___ toys are everywhere.",["childrens'","children's","childrens"],1,"Irregular plural children + 's."],["___ coming tomorrow.",["Their","There","They're"],2,"They are → They're."]],
 c:[["Your late again !","You're late again!","You are → You're; no space before !"],["My parent's house is in lviv.","My parents' house is in Lviv.","Two parents → parents'; city names take a capital."]]},
S3:{q:[["The people ___ I met were very kind.",["which","—","whose"],1,"An object pronoun in a defining clause can be left out (or who / that)."],["He passed the exam, ___ surprised everyone.",["that","which","what"],1,"which refers to the whole clause."],["The day ___ we met was rainy.",["when","which","where"],0,"Time → when."]],
 c:[["The book what I'm reading is great.","The book that I'm reading is great.","what isn't a relative pronoun after a noun."],["This is the woman who her son is my friend.","This is the woman whose son is my friend.","Possession → whose, without her."]]},
S4:{q:[["I study hard. ___, I still find grammar difficult.",["Although","However","Despite"],1,"A new sentence with a comma → However."],["She saved money ___ buy a car.",["for","in order to","so that"],1,"Purpose + base form → (in order) to."],["He was ill; ___, he missed the meeting.",["therefore","although","despite"],0,"Result → therefore."]],
 c:[["I went to the shop for buy some milk.","I went to the shop to buy some milk.","Purpose → to + base form, not for."],["In spite of he was tired, he worked late.","In spite of being tired, he worked late.","in spite of + -ing or a noun."]]},
S5:{q:[["It was my sister ___ found the solution.",["which","who","what"],1,"It-cleft about a person → who (or that)."],["Hardly ___ arrived when it started to rain.",["we had","had we","did we"],1,"Hardly had we arrived when…"],["Which sentence is the most formal?",["Help me, please.","I would appreciate your assistance.","Can you give me a hand?"],1,"Formal register."]],
 c:[["Only later I realised my mistake.","Only later did I realise my mistake.","Only later at the start → inversion with did."],["The thing what I like is the music.","The thing that I like is the music.","After a noun use that, not what. Or: What I like is the music."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Why two present tenses
Many languages use one present form for both “I work in general” and “I'm working right now”. English separates them, and the choice changes the meaning: <i>I live in Kyiv</i> (permanently) vs. <i>I'm living in Kyiv</i> (for now, temporarily).
| | Present simple | Present continuous |
| Form | I work / she work<b>s</b> | I <b>am</b> work<b>ing</b> |
| Negative | I <b>don't</b> work / she <b>doesn't</b> work | I'm <b>not</b> working |
| Question | <b>Do</b> you work? <b>Does</b> she work? | <b>Are</b> you working? |
| Meaning | habit, fact, timetable | now, temporary, changing |
| Signal words | always, usually, often, every day | now, at the moment, today, this week |
## The -s in the 3rd person
The most common mistake in both writing and speech. After he, she, it and any singular noun: <i>My brother play<b>s</b></i>. Spelling: -es after -s, -sh, -ch, -x, -o (watch<b>es</b>, go<b>es</b>); consonant + y → -ies (stud<b>ies</b>), but play<b>s</b>. After does the -s disappears: <i>Does he play?</i>, not <s>Does he plays?</s>
## State verbs
Some verbs describe a state rather than an action and aren't used in the continuous: know, understand, believe, like, love, hate, want, need, prefer, own, belong, seem, mean. Some have two meanings: <i>I think it's true</i> (opinion) / <i>I'm thinking about it</i> (process); <i>She has a car</i> (possession) / <i>She's having lunch</i> (action).
## Timetables and plans
- Transport, cinema and class timetables → present simple: <i>The train leaves at 6.</i>
- Arrangements → present continuous: <i>I'm meeting Anna tomorrow.</i> (see the future topic)
! Test: if you can add “now, these days” and the action really is in progress → continuous. If it's “usually, always” → simple.`,
V2:`## Regular verbs
Add -ed: work → work<b>ed</b>. Spelling: -e → +d (lived); consonant + y → -ied (studied); a short word with a stressed vowel between two consonants doubles the last one: stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed (but visit → visited).
Pronouncing -ed: [t] after voiceless sounds (worked), [d] after voiced sounds (played), [ɪd] after t and d (wanted, needed). Only the last case adds a syllable.
## Irregular verbs
There are about 150, but around 60 come up all the time. Learn them in threes: <i>go – went – gone</i>, <i>take – took – taken</i>, <i>write – wrote – written</i>. The second form is for the past simple, the third for perfect tenses and the passive.
| Base form | Past simple | Past participle |
| be | was / were | been |
| have | had | had |
| do | did | done |
| make | made | made |
| get | got | got (BrE) / gotten (AmE) |
| think | thought | thought |
| bring | brought | brought |
| buy | bought | bought |
## Questions and negatives
The auxiliary did carries the past tense, so the main verb stays in the base form: <i>Did she call?</i> <i>She didn't call.</i> The exception is be: <i>Were you there? I wasn't.</i>
## used to and would
- <b>used to</b> — a habit or state that is no longer true: <i>I used to have long hair.</i>
- <b>would</b> — only repeated actions in a story, not states: <i>Every summer we would go to the sea.</i>
- Don't confuse them with <b>be used to + -ing</b> — “be accustomed to”: <i>I'm used to getting up early.</i>
! Most past simple mistakes are about form rather than choice: <s>goed</s>, <s>did went</s>, <s>buyed</s>. Learn the irregular verbs in small groups and use each in a sentence about yourself.`,
V3:`## One idea, two tenses
Both tenses talk about the past. The question is what matters more: <b>when</b> it happened (past simple) or <b>what we have now</b> (present perfect).
| Present perfect | Past simple |
| <i>I've lost my keys</i> (I still don't have them) | <i>I lost my keys yesterday</i> |
| <i>Have you ever tried sushi?</i> | <i>Did you try sushi in Japan?</i> |
| <i>She's written three books</i> (she may write more) | <i>Shakespeare wrote 37 plays</i> |
| <i>I haven't seen him this week</i> (the week isn't over) | <i>I didn't see him last week</i> |
## Four uses of the present perfect
- <b>Experience</b> with no date: <i>I've been to Spain twice.</i>
- <b>A result</b> visible now: <i>Look, it's stopped raining.</i>
- <b>Recent news</b>: <i>The president has resigned.</i> The details then switch to the past simple: <i>He announced it this morning.</i>
- <b>A situation that continues</b>, with for / since: <i>We've known each other since school.</i>
## been or gone
<i>She has <b>gone</b> to Rome</i> — she left and is there now. <i>She has <b>been</b> to Rome</i> — she went and came back.
## for, since, ago
| for | since | ago |
| a length of time | a starting point | how long before now |
| for two hours | since 9 o'clock | two hours ago |
| present perfect or past | present perfect | past simple only |
! Many languages use a present tense for “I've lived here for three years”. English needs the present perfect: <i>I've lived here for three years</i> or <i>I've been living here for three years</i>, never <s>I live here for three years</s>.`,
V4:`## Three roles in one story
| Tense | Role | Example |
| Past continuous | background, process | <i>It was getting dark and people were going home.</i> |
| Past simple | event, a step in the story | <i>A man stopped me and asked for directions.</i> |
| Past perfect | even earlier, backstory | <i>I realised I had seen him before.</i> |
## when and while
- <b>while</b> + a process: <i>While I was cooking, …</i>
- <b>when</b> + a short event: <i>…when the phone rang.</i>
- Two long actions at the same time: <i>I was reading while he was watching TV.</i>
- Two events in sequence — both past simple: <i>When he arrived, we had dinner</i> (he arrived, then we ate). Compare: <i>When he arrived, we had had dinner</i> (dinner was over before he came).
## When you don't need the past perfect
If before, after or then already make the order clear, the past perfect is optional: <i>After I finished work, I went home.</i> Don't use it for everything that happened “long ago”: you need it only when the story has another past point of reference.
## State verbs
As in the present, state verbs don't take -ing: <i>I knew</i>, not <s>I was knowing</s>.
! A quick check for stories: the first sentence usually sets the scene (past continuous), then the events follow (past simple), and any flashback goes into the past perfect.`,
V5:`## Simple or continuous in the perfect
| Perfect simple — result | Perfect continuous — activity |
| <i>I've read the book</i> (finished) | <i>I've been reading the book</i> (still reading) |
| <i>She's written 20 pages</i> (how many) | <i>She's been writing all morning</i> (how long) |
| <i>I've painted the room</i> (done) | <i>I've been painting — that's why I'm dirty</i> (visible trace) |
A number or “how many times” → simple. “How long” → usually continuous.
## Looking from the future
- <b>Future continuous</b> — an action in progress: <i>Don't call at 9, I'll be driving.</i> Also a polite way to ask about plans: <i>Will you be using the car tonight?</i>
- <b>Future perfect</b> — finished before a certain moment: <i>By the end of the year, I'll have read 30 books.</i> Signal words: by, by the time, by then.
- <b>Future perfect continuous</b> (rare): <i>In May I'll have been working here for ten years.</i>
## The timeline
| Reference point | Duration up to it |
| now | have been doing |
| in the past | had been doing |
| in the future | will have been doing |
! People will understand you without these tenses, but B2 English sounds flat without them. Start with the present perfect continuous: half of everyday small talk runs on it (I've been thinking…, What have you been up to?).`,
M1:`## How modal verbs behave
- One form for all persons: <i>I can, she can</i> (not <s>cans</s>).
- They're followed by the base form without to: <i>must go</i>, <i>should know</i>.
- Questions use inversion: <i>Can you…? Should I…?</i>; negatives use not: <i>can't, mustn't, shouldn't</i>.
- Most have no past or future form, so we use replacements: <i>was able to, had to, will be able to, will have to</i>.
| Meaning | Present | Past | Future |
| ability | can | could / was able to | will be able to |
| obligation | must / have to | had to | will have to |
| no need | don't have to | didn't have to | won't have to |
| prohibition | mustn't / can't | couldn't | — |
| advice | should / ought to | should have done (topic M5) | — |
## must and have to
<i>I must call my mum</i> — I've decided it myself. <i>I have to wear a tie at work</i> — the rules say so. In American English and in conversation, have to is more common. The key difference is in the negative: <b>mustn't</b> = it's not allowed, <b>don't have to</b> = it's not necessary.
## Politeness
From less to more polite: <i>Can you…? → Could you…? → Would you mind + -ing…? → I was wondering if you could…</i> A direct imperative (“Give me…”) sounds abrupt in English, even with please.
! English always needs a subject: <i>It's necessary to go</i> or <i>I need to go</i>, never <s>Is need to go</s>; <i>We can start</i>, not <s>Can start</s>.`,
M2:`## Four forms and their jobs
| Form | When | Example |
| will | a decision now, a promise, an offer, an opinion | <i>I'll have the soup. I promise I'll write.</i> |
| be going to | intention, plan; prediction from evidence | <i>She's going to have a baby.</i> |
| present continuous | a personal arrangement | <i>I'm seeing the dentist at 3.</i> |
| present simple | a timetable, a schedule | <i>The concert starts at 8.</i> |
Often both will and going to are possible, but going to sounds “planned” and will sounds “just decided”.
## Time and condition clauses
After <b>when, if, as soon as, before, after, until, once</b>, English uses a present tense even though the meaning is future: <i>I'll wait until you <b>finish</b>.</i> The same with the perfect: <i>Call me when you <b>have finished</b>.</i>
## Other useful forms
- <b>be about to</b> — very soon: <i>Hurry, the train is about to leave.</i>
- <b>shall</b> in offers and suggestions: <i>Shall I open the window? Shall we go?</i>
- <b>will</b> for future facts: <i>I'll be 30 next year.</i>
! A simple rule of thumb: already decided → going to; deciding right now → will; arranged with someone → -ing.`,
M3:`## Real or imagined
| Type | if clause | Main clause | Meaning |
| Zero | present | present | always true |
| First | present | will / can / may + base form | really possible |
| Second | past simple | would / could / might + base form | imagined, unlikely |
The choice between first and second shows what the speaker thinks: <i>If I get the job, I'll move</i> (quite possible) / <i>If I got the job, I'd move</i> (I doubt it).
## A past tense that isn't about the past
In the second conditional, the past simple shows unreality, not time: <i>If I knew his number</i> — I don't know it now. Hence <i>If I were</i>: in formal English, were is used for all persons. In conversation <i>If I was</i> is acceptable, but in the fixed phrase <i>If I were you</i>, always were.
## Order and commas
If the sentence starts with if, put a comma after the condition: <i>If it rains, we'll stay in.</i> If if is in the middle, no comma: <i>We'll stay in if it rains.</i>
## Other conjunctions
unless (if not), as long as / provided that (on condition that), in case (as a precaution): <i>Take an umbrella in case it rains.</i>
! The golden rule: <b>never will or would right after if</b> in a condition. They belong in the main clause.`,
M4:`## The third conditional
For a past that can't be changed:
| if + past perfect | would / could / might have + past participle |
| If I had seen you, | I would have said hello. |
| If they hadn't helped us, | we might have failed. |
In speech, both parts are contracted: <i>If I'd known, I'd have come</i> ('d = had in the if clause and would in the main clause).
## Mixed conditionals
- Past → present: <i>If I <b>had taken</b> that job, I <b>would be</b> rich now.</i>
- Permanent trait → past: <i>If I <b>were</b> braver, I <b>would have asked</b> her.</i>
## wish and if only
| Regret about | Form | Example |
| the present | wish + past simple | <i>I wish I lived closer.</i> |
| the past | wish + past perfect | <i>I wish I had listened.</i> |
| an ability | wish + could | <i>I wish I could drive.</i> |
| someone else's behaviour | wish + would | <i>I wish he would call.</i> |
If only is stronger and more emotional: <i>If only I had known!</i>
## Similar structures
<i>It's time we went</i> (we should go now), <i>I'd rather you didn't smoke</i> (I'd prefer you not to) — also a past form with present meaning.
! The main rule again: <b>would never comes straight after if</b>. When you talk about the unreal, look for a past simple or past perfect after if.`,
M5:`## The certainty scale
| Certainty | Present | Past |
| 95% yes | must be | must have been |
| ~50% | might / may / could be | might / may / could have been |
| 95% no | can't / couldn't be | can't / couldn't have been |
Note: the opposite of must (deduction) is <b>can't</b>, not mustn't.
## Modals with the past: judging what happened
- <b>should have / ought to have</b> — it would have been right, but didn't happen: <i>We should have booked a table.</i>
- <b>shouldn't have</b> — it happened, but it was a mistake: <i>I shouldn't have eaten so much.</i>
- <b>could have</b> — it was possible: <i>You could have died!</i> <i>I could have helped you if you'd asked.</i>
- <b>would have</b> — in the third conditional (topic M4).
## needn't have and didn't need to
<i>I <b>needn't have</b> taken a taxi</i> — I took one, and it turned out to be unnecessary. <i>I <b>didn't need to</b> take a taxi</i> — it wasn't necessary (and I probably didn't take one).
## Pronunciation
In speech, have is reduced: <i>must've, should've, could've</i>. That's why even native speakers write <s>should of</s>. Always write <b>should have</b>.
! A quick map: confident guess → must have done; unsure → might have done; impossible → can't have done; regret → should have done.`,
N1:`## The key question: which one?
The article shows whether the listener knows exactly what you mean.
| | Singular countable | Plural | Uncountable |
| general, any | <b>a</b> cat | cats | water |
| specific, known | <b>the</b> cat | <b>the</b> cats | <b>the</b> water |
A singular countable noun can't stand alone: <s>I have car</s> → <i>I have a car / my car / the car</i>.
## a or an
The sound decides, not the letter: <i>an hour, an MBA, an honest man</i> / <i>a university, a European, a one-way ticket</i>.
## When to use the
- Second mention: <i>a man… the man</i>.
- Unique in the world or in the situation: <i>the sun, the government, Close the door.</i>
- Superlatives and ordinals: <i>the best, the first, the same, the only</i>.
- Musical instruments, seas, rivers, mountain ranges, island groups: <i>the piano, the Black Sea, the Thames, the Alps</i>.
- Names with of and plural names: <i>the University of Oxford, the Netherlands</i>.
## When to use nothing
- General statements: <i>Dogs are loyal. Money isn't everything.</i>
- Most countries, cities, streets, lakes, single mountains: <i>Poland, Oxford Street, Everest.</i>
- Languages, sports, meals: <i>speak Spanish, play football, after lunch.</i>
- Some places in their main function: <i>go to school / to bed / to work / to hospital</i> (to study, sleep, work, be treated).
! A quick test: if you could say “some / one” → a; “that particular one” → the; “in general” → nothing.`,
N2:`## Uncountable nouns that surprise learners
Some words are uncountable in English even though they are countable in many other languages: no a / an, no -s, singular verb.
| Uncountable | How to count it |
| advice, information, news | a piece of advice / information / news |
| furniture, luggage, equipment | a piece of furniture, an item of luggage |
| work, homework, research | a task, a project |
| bread, money | a loaf of bread, a coin, a note |
<i>The news <b>is</b> good. Your hair <b>is</b> beautiful.</i>
## Quantity words
| | Countable | Uncountable |
| a lot | many, a lot of | much, a lot of |
| some (positive) | a few | a little |
| not many / not much (negative) | few | little |
| less | fewer | less |
| enough | enough | enough |
In positive sentences much and many sound formal; in conversation, a lot of / lots of is more natural: <i>We have a lot of work</i>, but <i>We don't have much work</i>.
## some and any
some: positive sentences, offers and requests where you expect “yes”: <i>Can I have some water?</i> any: questions, negatives, and “it doesn't matter which”: <i>You can take any bus.</i> The compounds work the same way: something / anything, someone / anyone.
## Words with two meanings
<i>a coffee</i> (a cup) / <i>coffee</i> (the drink), <i>a paper</i> (a newspaper) / <i>paper</i> (the material), <i>a time</i> (an occasion) / <i>time</i>.
! The classic mistakes: <s>informations</s>, <s>advices</s>, <s>a news</s>, <s>furnitures</s>, <s>less people</s>.`,
N3:`## Form and position
Adjectives have one form for singular and plural: <i>a tall man, tall women</i>. They go before the noun, or after be, seem, look, feel, become: <i>She looks tired.</i> After sense verbs, use an adjective, not an adverb: <i>It smells good</i>, not <s>well</s>.
## The order of several adjectives
| opinion | size | age | shape | colour | origin | material | noun |
| nice | big | old | square | black | German | leather | bag |
In practice, two or three are enough: <i>a nice old leather bag</i>.
## -ed and -ing
| -ed: how I feel | -ing: what it's like |
| I'm bored / tired / confused | The film is boring / tiring / confusing |
| She was surprised | The result was surprising |
<s>I am boring</s> means “I'm a boring person”.
## Adverbs of manner
Usually adjective + -ly: quick → quickly, careful → carefully, easy → easily. Irregular: good → well, fast → fast, hard → hard, late → late (lately = recently). Some words ending in -ly are adjectives: friendly, lovely, lonely (we say <i>in a friendly way</i>).
## so and such, too and enough
- <b>so</b> + adjective or adverb: <i>so hot, so quickly</i>; <b>such</b> + (a) + (adjective) + noun: <i>such a hot day, such nice people</i>.
- <b>too</b> + adjective — more than is good: <i>too cold to swim</i>.
- adjective + <b>enough</b>, enough + noun: <i>warm enough, enough money</i>.
! good describes things, well describes actions: <i>a good driver</i>, but <i>she drives well</i>. The one exception: <i>I'm well</i> (healthy).`,
N4:`## Formation
| Adjective | Comparative | Superlative |
| short: cheap, fast | cheap<b>er</b> | the cheap<b>est</b> |
| ending in -e: nice | nice<b>r</b> | the nice<b>st</b> |
| vowel + consonant: big, hot | bi<b>gg</b>er | the bi<b>gg</b>est |
| ending in -y: easy, happy | eas<b>ier</b> | the eas<b>iest</b> |
| 2+ syllables: modern, expensive | <b>more</b> expensive | <b>the most</b> expensive |
| good / bad / far | better / worse / further | the best / the worst / the furthest |
Some two-syllable adjectives allow both: <i>cleverer / more clever, quieter / more quiet</i>.
## Comparing precisely
- A big difference: <i>much, far, a lot, considerably</i> bigger.
- A small difference: <i>slightly, a bit, a little</i> bigger.
- Equal: <i>as fast as</i>; not equal: <i>not as fast as</i> (softer than <i>slower than</i>).
- Increasing: <i>more and more expensive</i>, <i>bigger and bigger</i>.
- Changing together: <i>The sooner, the better.</i>
## After than and as
In conversation, an object pronoun: <i>He's taller than me.</i> In formal English, a subject pronoun + verb: <i>He's taller than I am.</i>
## The superlative
With the, and often in (a place or group) or a present perfect: <i>the best student in the class</i>, <i>the worst meal I've ever had</i>. Not <s>of the class</s>.
! Never combine the two methods: <s>more bigger</s>, <s>most cheapest</s>. And very doesn't go with comparatives: <i>much bigger</i>, not <s>very bigger</s>.`,
N5:`## A noun before a noun
English often puts one noun before another instead of using a preposition or an adjective: <i>a city centre, a job interview, a coffee cup</i>. The first noun stays singular: <i>a shoe shop</i>, not <s>shoes shop</s>; <i>a ten-pound note</i>, <i>a 300-page report</i>.
## 's or of
| 's | of |
| people and animals: <i>Anna's idea, the dog's bowl</i> | things: <i>the roof of the house</i> |
| organisations, countries: <i>the government's plan</i> | long phrases: <i>the son of the woman who lives next door</i> |
| time: <i>yesterday's meeting, a week's holiday</i> | parts and amounts: <i>a cup of tea, most of the students</i> |
Plural in -s: the apostrophe goes after the s: <i>my parents' house</i>. Irregular plural: <i>the children's room</i>.
## Nominalisation
| Verb / adjective | Noun |
| decide, improve, develop | decision, improvement, development |
| increase, rise, fall | an increase in, a rise in, a fall in |
| fail, succeed | failure, success |
| able, possible, important | ability, possibility, importance |
<i>The government decided to raise taxes, which surprised many people</i> → <i>The government's decision to raise taxes surprised many people.</i>
## In moderation
Nominalisation makes a text concise and formal, but too much of it makes the text heavy. In an essay, one or two per sentence; in conversation, verbs work better.
! Useful prepositions after nouns: an increase <b>in</b>, a reason <b>for</b>, an effect <b>on</b>, a solution <b>to</b>, a demand <b>for</b>.`,
P1:`## The pyramid: from a point to a space
| | at — a point | on — a surface, a day | in — a space, a period |
| Time | at 7:30, at noon, at night, at Christmas | on Friday, on 1 May, on my birthday | in July, in 2024, in summer, in the evening |
| Place | at the door, at home, at the station | on the table, on the screen, on page 5 | in the box, in Kyiv, in the kitchen |
## Place: at or in
<i>at the cinema</i> — as the place of an activity (watching a film); <i>in the cinema</i> — inside the building. <i>at the airport</i> — a point on a journey; <i>in Paris</i> — a city. An address: <i>at 15 Baker Street</i>, but the street: <i>in Baker Street</i> (BrE) / <i>on Baker Street</i> (AmE).
## Transport and movement
- <i>on the bus / train / plane / bike</i>, but <i>in a car / taxi</i>.
- <i>by car / by bus / by train</i> — how you travel, no article; <i>on foot</i> — walking.
- Movement: <i>go <b>to</b> school</i>, but <i>go home</i> (no to); <i>get <b>into</b> a car</i>, <i>get <b>on</b> a bus</i>.
## When you don't need a preposition
Before next, last, this, every, and with tomorrow, yesterday: <i>I'll call you tomorrow morning.</i> <i>We met last summer.</i>
## Duration and limits
<b>for</b> — how long (for two weeks), <b>during</b> — when, within (during the meeting), <b>by</b> — no later than (by Friday), <b>until</b> — up to (until Friday).
! Learn prepositions in chunks rather than one by one: <i>at work, at home, on holiday, in hospital, in the street, on the phone</i>.`,
P2:`## Two big groups
| + -ing | + to + base form |
| enjoy, like / love / hate, mind | want, would like, need |
| avoid, deny, risk, miss | decide, plan, hope, expect |
| finish, keep, give up, carry on | agree, refuse, promise, offer |
| suggest, recommend, consider | manage, fail, afford, learn |
| admit, imagine, practise, can't stand | seem, tend, pretend, arrange |
After like, love and hate both are possible: <i>I like swimming / I like to swim</i>. But after <b>would like</b>, only to: <i>I'd like to go.</i>
## After a preposition — always -ing
<i>She left without saying goodbye. I'm tired of waiting. Thank you for helping.</i> Watch out for expressions where to is a preposition: <i>look forward to doing, be used to doing, object to doing, when it comes to doing</i>.
## Verb + person + to
want, ask, tell, expect, allow, advise + person + to: <i>I want you to come.</i> Not <s>I want that you come</s>. But <b>make</b> and <b>let</b> take no to: <i>She made me laugh. Let me help.</i>
## Meaning changes
| | + -ing | + to |
| stop | <i>I stopped drinking coffee</i> — I quit | <i>I stopped to drink coffee</i> — I paused in order to drink |
| remember | <i>I remember meeting him</i> — a memory | <i>Remember to call him</i> — don't forget |
| try | <i>Try restarting the computer</i> — as an experiment | <i>I tried to open it</i> — I made an effort |
| regret | <i>I regret saying that</i> — I'm sorry I said it | <i>We regret to inform you</i> — formal bad news |
! -ing as a subject: <i>Learning languages is fun.</i> <s>To learn languages is fun</s> is grammatical but sounds bookish.`,
P3:`## Structure
A phrasal verb is a verb + particle (up, out, off, on, in, down, away, back, over) or two particles (look forward to, get on with). The particle often adds a shade of meaning:
| Particle | Idea | Examples |
| up | completion, increase | eat up, fill up, grow up, speed up |
| out | outwards, to the end | find out, run out, work out |
| off | separation, switching off | turn off, set off, take off |
| on | continuing, switching on | carry on, go on, turn on |
| down | decrease, writing | slow down, write down, cut down on |
## Separable and inseparable
- With a noun, both orders work: <i>pick up the phone / pick the phone up</i>.
- With a pronoun, only in the middle: <i>pick it up</i>, not <s>pick up it</s>.
- Inseparable (look after, look for, get over, come across, deal with): the object always comes after: <i>look after them</i>.
- Three-part verbs (look forward to, get on with, run out of, put up with) never split.
## The 20 most useful
find out, give up, look for, look after, look forward to, get up, get on with, turn on / off, put off, set up, carry on, work out, come up with, figure out, pick up, run out of, take off, deal with, bring up, check in / out.
## Register
| Conversation | Formal writing |
| find out | discover |
| put off | postpone |
| look into | investigate |
| come up with | devise, propose |
| cut down on | reduce |
! Learn phrasal verbs with an example and an object, not as a list: <i>run out <b>of</b> time</i>, <i>come up <b>with</b> an idea</i>.`,
P4:`## Formation
| Tense | Active | Passive |
| Present simple | They make cars here. | Cars <b>are made</b> here. |
| Present continuous | They are repairing it. | It <b>is being repaired</b>. |
| Past simple | Someone stole my bag. | My bag <b>was stolen</b>. |
| Present perfect | They have cancelled it. | It <b>has been cancelled</b>. |
| Future | They will send it. | It <b>will be sent</b>. |
| Modals | You must sign it. | It <b>must be signed</b>. |
## When to use the passive
- The agent is unknown or unimportant: <i>My phone was stolen.</i>
- The result matters more than who did it: <i>The decision has been made.</i>
- Scientific and official style: <i>The samples were analysed.</i>
- To avoid blaming someone: <i>Mistakes were made.</i>
## “People say that…”
Formal news style: <i>It is said that… / He is said to be…</i>, <i>It is believed that… / She is believed to have left.</i>
## have / get something done
A service done by someone else: <i>I had my car serviced. She's getting her nails done.</i> Also for bad experiences: <i>He had his wallet stolen.</i> get sounds more informal.
! Where many languages use “they” or an impersonal form (“They sell flowers here”, “They fired him”), English often prefers the passive: <i>Flowers are sold here. He was fired.</i>`,
P5:`## The preposition belongs to the word
Prepositions after verbs and adjectives can't be guessed — learn them as a pair: <i>depend <b>on</b></i>, <i>be angry <b>with</b> someone / <b>about</b> something</i>.
| Verb | Adjective | Noun |
| depend on, rely on | interested in | a reason for |
| listen to, belong to | good / bad at | an increase in |
| wait for, pay for, ask for | afraid of, proud of, tired of | a solution to |
| think about / of | responsible for, famous for | an effect on |
| succeed in, believe in | similar to, married to | a demand for |
| complain about, worry about | different from, keen on | a lack of |
## No preposition
Some verbs take a direct object with no preposition: <i>discuss the plan</i> (not <s>discuss about</s>), <i>enter the room</i>, <i>answer the question</i>, <i>call me</i>, <i>marry someone</i>, <i>reach the station</i>.
## make or do
| make — create something | do — carry out an activity |
| a decision, a mistake, a mess | homework, housework, the dishes |
| money, a profit, progress | business, research, an exercise |
| a phone call, a plan, an effort | your best, a favour, damage |
| friends, a noise, a suggestion | a job, a course, sport |
## Other collocations
take a break / a risk / part in; have a shower / a chat / fun; pay attention / a compliment; keep calm / in touch; catch the bus / a cold; raise a question; meet a deadline; heavy rain / traffic; strong coffee; a high price.
! It's heavy rain, not <s>strong rain</s>. Check collocations in a dictionary such as the Oxford Collocations Dictionary.`,
Q1:`## The question formula
| Question word | Auxiliary | Subject | Verb | Rest |
| Where | do | you | work | ? |
| What | are | they | watching | ? |
| How long | have | you | lived | here? |
| — | Can | she | swim | ? |
If the statement has an auxiliary (be, have, can, will), it moves to the front. If not, add do / does / did.
## Subject questions
When who or what is the subject, the word order is the same as in a statement, with no do: <i>Who lives here? What made you change your mind?</i> Compare: <i>Who <b>does</b> Anna love?</i> (Anna loves someone) / <i>Who loves Anna?</i> (someone loves Anna).
## Question words
what, which (a limited choice), who, whose, where, when, why, how, how much / many, how long, how often, how far, what time, what kind of.
## Answers
Short answers repeat the auxiliary: <i>Do you like it? — Yes, I do. / No, I don't.</i> <i>Has he called? — No, he hasn't.</i> A bare “Yes” or “No” can sound abrupt.
! Rising intonation alone (<i>You live here?</i>) is possible, but only to show surprise or to check. A normal question needs inversion.`,
Q2:`## How tags work
| Statement | Tag | Example |
| positive | negative | <i>You're coming, aren't you?</i> |
| negative | positive | <i>You aren't coming, are you?</i> |
The pronoun in the tag matches the subject: <i>Your parents live in Lviv, don't <b>they</b>?</i> never, hardly and nobody make the sentence negative: <i>He never calls, <b>does</b> he?</i>
## Intonation
Falling tone: “right?” — you expect agreement. Rising tone: a real question — you're not sure.
## Special cases
- <i>I'm…, aren't I?</i>
- <i>Let's…, shall we?</i>
- Imperatives: <i>Sit down, will you? / Don't be late, will you?</i>
- <i>There's a problem, isn't there?</i>
## “Me too” and “me neither”
| Statement | Agree | Disagree |
| I like it. | So do I. / Me too. | I don't. |
| I don't like it. | Neither do I. / Nor do I. / Me neither. | I do. |
| I was there. | So was I. | I wasn't. |
| I can't swim. | Neither can I. | I can. |
After so and neither, the auxiliary comes before the subject.
## Echo questions
To show interest: <i>I've just got married. — <b>Have you</b>? Congratulations!</i>
! There's no one-size-fits-all tag in English: <s>isn't it?</s> after any sentence is a typical mistake. Build the tag from the sentence's own auxiliary every time.`,
Q3:`## Why use them
A direct question to a stranger (<i>Where is the toilet?</i>) is perfectly fine, but an indirect one sounds more polite. They're used all the time in letters, at work and in shops.
## The transformation
| Direct | Indirect |
| Where <b>is</b> the station? | Could you tell me where the station <b>is</b>? |
| What time <b>does</b> it <b>open</b>? | Do you know what time it <b>opens</b>? |
| Why <b>did</b> he <b>leave</b>? | I wonder why he <b>left</b>. |
| <b>Is</b> it far? | Do you know <b>if</b> it's far? |
| <b>Can</b> I pay by card? | Could you tell me <b>whether</b> I can pay by card? |
Steps: 1) remove do / does / did and give the tense back to the verb; 2) put the subject before the verb; 3) for yes / no questions, add if or whether.
## Openers
Could you tell me…? Do you know…? Have you any idea…? Would you mind telling me…? I was wondering… I'd like to know… Can you remember…?
## if or whether
Almost the same. whether is more formal and required before or not and after a preposition: <i>It depends on whether we have time.</i>
! The most common slip is keeping question order: <s>where is the station</s>. After where, what or if, the subject must come next.`,
Q4:`## Backshift
| Direct speech | Reported (after said) |
| present simple: "I <b>live</b> here." | past simple: he <b>lived</b> there |
| present continuous: "I'm <b>working</b>." | past continuous: she <b>was working</b> |
| past simple, present perfect | past perfect: had done |
| will / can / may | would / could / might |
| must | had to (or must) |
Backshift is optional if what was said is still true, or if the reporting verb is in the present: <i>He says he's tired. She said the Earth is round.</i>
## Time and place words
now → then, today → that day, tomorrow → the next day / the following day, yesterday → the day before, here → there, this → that, ago → before.
## say or tell
- <i>She <b>said</b> (that) she was busy.</i> / <i>She <b>said to me</b> that…</i>
- <i>She <b>told me</b> (that) she was busy.</i> — tell always takes a person.
- that is often left out in conversation.
## Questions and orders
- Wh-questions: <i>"Why are you late?" → He asked (me) why I was late.</i>
- Yes / no: <i>"Do you smoke?" → She asked if / whether I smoked.</i>
- Orders: <i>"Close the door." → He told me to close the door.</i>
- Requests: <i>"Please help me." → She asked me to help her.</i>
! The two traps: say vs. tell (<s>He said me</s>) and question order in reported questions (<s>She asked what was my name</s>).`,
Q5:`## Why use them
<i>"I'll definitely call you."</i> → <i>She said she would call</i> — neutral; <i>She <b>promised</b> to call</i> — more precise and shorter. At B2, these verbs are expected in summaries, essays and letters.
## Patterns
| Pattern | Verbs | Example |
| + to | agree, refuse, offer, promise, threaten, decide | <i>He refused to sign.</i> |
| + person + to | advise, ask, tell, encourage, invite, persuade, remind, warn | <i>She persuaded me to stay.</i> |
| + -ing | admit, deny, suggest, recommend, mention | <i>He admitted lying.</i> |
| + preposition + -ing | apologise for, insist on, object to | <i>They insisted on paying.</i> |
| + person + preposition + -ing | accuse of, blame for, congratulate on, thank for | <i>I thanked her for helping.</i> |
| + that | explain, claim, complain, point out, announce | <i>She claimed (that) she was innocent.</i> |
## suggest — a trap of its own
Correct: <i>He suggested going.</i> / <i>He suggested (that) we go</i> / <i>…we should go.</i> Wrong: <s>He suggested me to go</s>, <s>He suggested to go</s>.
## explain
<i>Explain <b>the rule</b> to me</i>, not <s>explain me</s>. The same goes for describe and suggest.
! Choose the verb by intention: a promise → promise, a refusal → refuse, advice → advise / recommend, a warning → warn, an admission → admit.`,
S1:`## A fixed order
| Subject | Verb | Object | Place | Time |
| My sister | bought | a new laptop | in town | last week. |
| We | 're watching | a film | at home | tonight. |
Time can move to the front for emphasis: <i>Last week, my sister bought…</i> But the subject and verb always stay together and in this order (except in questions).
## Empty subjects: it and there
- <b>it</b> — weather, time, distance, opinions: <i>It's late. It's 5 km. It's hard to say.</i>
- <b>there is / there are</b> — existence: <i>There's a bank near here.</i> Not <s>In the city is a bank</s>.
## Adverbs
| Type | Position | Example |
| frequency: always, often, never | before the main verb, after be and auxiliaries | <i>I have never seen it.</i> |
| manner: well, carefully | after the object | <i>She did the work carefully.</i> |
| degree: really, almost | before the word they modify | <i>I really like it.</i> |
| also, just, already, still | like frequency adverbs | <i>She's already left.</i> |
| comment: fortunately, actually | at the start, with a comma | <i>Fortunately, nobody was hurt.</i> |
## Two objects
<i>She gave <b>me</b> the book</i> or <i>She gave the book <b>to me</b></i>. With two pronouns: <i>She gave it to me</i>.
! Fronting an object (<i>The book I've already read</i>) is possible only for strong emphasis. The neutral order is <i>I've already read the book.</i>`,
S2:`## Capital letters
More than in many languages: the pronoun <b>I</b>, days and months (<i>Monday, July</i>), languages and nationalities, even as adjectives (<i>English, a Ukrainian writer</i>), holidays, organisations and words in titles (<i>The Lord of the Rings</i>). Seasons are lower case: <i>in summer</i>.
## Apostrophes
| Use | Example |
| contraction | it's, I'm, don't, they're, who's, you're |
| possession, singular | my friend's car, James's idea |
| possession, plural in -s | my friends' cars, the Smiths' house |
| irregular plural | the children's room, women's rights |
No apostrophe: possessive pronouns <i>its, yours, theirs, whose</i> and ordinary plurals (<i>CDs, the 1990s</i>, not <s>CD's</s>).
## Words even native speakers mix up
its / it's, your / you're, their / there / they're, whose / who's, then / than, to / too / two, lose / loose, affect / effect.
## Commas
- After an introductory word or phrase: <i>However, … In my opinion, …</i>
- After a clause at the start: <i>When I got home, …</i> (no comma if it comes at the end).
- Before and / but between two full clauses: optional; more common before but.
- Not: before that (<i>I think that…</i>), between subject and verb, in defining relative clauses (topic S3).
- Don't join two sentences with just a comma: <s>I was tired, I went to bed.</s> → <i>I was tired, so I went to bed.</i>
## Spaces and quotation marks
No space before ? ! : ; Quotation marks: <i>"…"</i> or <i>'…'</i> (more common in BrE).
## Contractions and register
In conversation and informal messages: it's, don't, I'd. In essays and formal letters: full forms: it is, do not.
! Proofread with a separate pass just for its / it's and their / there / they're — they're the most visible slips in written English.`,
S3:`## Relative pronouns
| Pronoun | For | Example |
| who | people | <i>the teacher who helped me</i> |
| which | things, animals, a whole clause | <i>the car which broke down</i> |
| that | people and things, defining clauses only | <i>the car that broke down</i> |
| whose | possession | <i>the student whose phone rang</i> |
| where | place | <i>the city where I was born</i> |
| when | time | <i>the year when we met</i> |
## Defining and non-defining
| Defining | Non-defining |
| no commas | commas |
| identifies which one | adds information that could be removed |
| who, which, that, or no pronoun | who, which (not that) |
| <i>Students who work hard pass.</i> (only those who work hard) | <i>The students, who work hard, passed.</i> (all of them work hard) |
Commas change the meaning: <i>My brother who lives in Canada</i> (I have several brothers) / <i>My brother, who lives in Canada,</i> (I have one brother).
## Leaving out the pronoun
In defining clauses, if the pronoun is the object: <i>the film (that) I watched</i>. Not if it's the subject: <i>the film that won the prize</i>.
## Prepositions
In conversation, at the end: <i>the person I spoke to</i>. Formally, at the start with whom or which: <i>the person to whom I spoke</i>.
## which for a whole clause
<i>She didn't call, which was strange.</i> Only which works here — not what and not that.
! Before adding commas, ask: does this clause tell me <i>which one</i>? If yes, no commas. If it's just extra information, use commas and who / which.`,
S4:`## What comes after the linking word
| Meaning | + clause | + noun / -ing | At the start of a sentence, with a comma |
| contrast | although, even though, while, whereas | despite, in spite of | However, Nevertheless, On the other hand |
| cause | because, as, since | because of, due to, owing to | — |
| result | so | — | Therefore, As a result, Consequently |
| purpose | so that | (in order) to + base form | — |
| addition | and | as well as, in addition to | Moreover, Furthermore, In addition |
## Contrast
- <i>Although the hotel was expensive, it was dirty.</i>
- <i>Despite the high price, the hotel was dirty.</i> / <i>Despite being expensive, …</i>
- <i>The hotel was expensive. However, it was dirty.</i>
- <i>Despite <b>the fact that</b> it was expensive, …</i> — the way to put a clause after despite.
## Purpose
<i>to / in order to</i> + base form; <i>so that</i> + clause, when the subject changes or there's a modal: <i>I'll explain it again so that everyone understands.</i> Not <s>for to buy</s> or <s>for buy</s>: for + noun (<i>for a walk</i>).
## Register
| Conversation | Essay, formal letter |
| but, so, because, also | however, therefore, since, moreover |
| anyway, actually | in fact, nevertheless |
| first, then, in the end | firstly, subsequently, finally, in conclusion |
## Punctuation
However, therefore, moreover: at the start of a sentence with a comma, or after a semicolon: <i>It was late; however, we continued.</i> Don't join two sentences with just a comma + however.
! despite never takes of: <s>despite of</s>. of only appears in in spite of.`,
S5:`## Cleft sentences
Split one sentence into two parts to put the focus on one of them:
| Neutral | It-cleft | What-cleft |
| Tom broke the window. | <i>It was Tom who broke the window.</i> | — |
| I want a holiday. | <i>It's a holiday that I want.</i> | <i>What I want is a holiday.</i> |
| The noise annoys me. | <i>It's the noise that annoys me.</i> | <i>What annoys me is the noise.</i> |
Variants: <i>The reason why… is that…, The thing (that)… is…, All I want is…</i>
## Inversion for emphasis
After a negative or limiting expression at the start of a sentence, use question word order:
| Expression | Example |
| Never / Rarely / Seldom | <i>Rarely do we see such talent.</i> |
| Not only … but also | <i>Not only is it cheap, but it's also fast.</i> |
| Hardly / No sooner … when / than | <i>No sooner had I sat down than the phone rang.</i> |
| Only then / Only when / Only after | <i>Only when I left did I understand.</i> |
| Under no circumstances | <i>Under no circumstances should you open it.</i> |
Inversion sounds literary: it suits essays, speeches and formal letters, and is rare in conversation.
## Emphasis in speech
<i>I <b>do</b> understand. She <b>did</b> apologise!</i>; <i>the very best</i>; <i>at all</i>: <i>I didn't like it at all.</i>
## Register
| Informal | Formal |
| ask for | request |
| get | obtain, receive |
| help | assist, support |
| tell | inform |
| need | require |
| Thanks for… | I am grateful for… |
| Can you…? | I would appreciate it if you could… |
| I'm sorry | Please accept my apologies |
! At B2, examiners look for appropriateness, not complexity: inversion in a message to a friend sounds odd, and “gonna” in an essay is a register error.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"past simple questions and negatives work like present simple ones, with did instead of do / does.",
"V3<V2":"the present perfect is defined against the past simple, and its form needs the past participle of irregular verbs.",
"V4<V3":"the past perfect is the same perfect, moved into the past: have → had.",
"V5<V4":"perfect continuous tenses combine perfect logic with the continuous forms you already know.",
"M1<V1":"modals form questions and negatives without do — it helps to see the contrast with the present simple.",
"M2<V1":"the present continuous and present simple also describe the future: arrangements and timetables.",
"M3<M2":"the first conditional is will plus the present-after-if rule from the future topic.",
"M3<V2":"the second conditional uses past simple forms for an unreal present.",
"M4<M3":"the third conditional continues the logic of the second, but about the past.",
"M4<V4":"the third conditional and wish about the past are built on the past perfect.",
"M5<M4":"should have, could have and would have are relatives of the third conditional.",
"M5<V3":"modal + have + past participle needs a confident knowledge of past participles.",
"N2<N1":"the choice between a / an and no article depends on whether a noun is countable.",
"N3<N2":"adjectives describe nouns, so you first need to build noun phrases confidently.",
"N4<N3":"comparatives and superlatives are formed from adjectives and adverbs.",
"N5<N4":"complex noun phrases bring everything together: articles, adjectives, comparison.",
"N5<S3":"nominalisation and relative clauses are two ways to pack information into an essay.",
"P2<P1":"after a preposition, always -ing: interested in learning, good at speaking.",
"P2<V1":"the -ing form is the same as in the present continuous.",
"P3<P2":"phrasal verbs use the same particles, and look forward to doing links both topics.",
"P4<P3":"phrasal verbs have passives too: The meeting was put off.",
"P4<V3":"the passive needs the past participle and be in every tense.",
"P5<P3":"collocations and dependent prepositions are the next step after phrasal verbs.",
"P5<P2":"after a preposition the verb takes -ing: apologise for being late.",
"Q1<V1":"present simple questions are the main use of do / does.",
"Q2<Q1":"tags and short answers repeat the auxiliary from the question.",
"Q2<V2":"a tag about the past needs did: You saw it, didn't you?",
"Q3<Q1":"to make a question indirect, you need to take a direct one apart: auxiliary, subject, verb.",
"Q4<Q3":"reported questions work exactly like indirect questions.",
"Q4<V4":"backshift in reported speech leads to the past perfect.",
"Q5<Q4":"reporting verbs replace the neutral said of reported speech.",
"Q5<P2":"each reporting verb takes -ing or to, like the verbs in the -ing or to topic.",
"S2<S1":"punctuation follows sentence structure: where the subject is, where the introduction ends.",
"S3<S2":"in relative clauses, a comma changes the meaning.",
"S4<S3":"linking words build complex sentences, just like relative pronouns.",
"S5<S4":"inversion and cleft sentences are a style layer on top of linking words.",
"S5<P4":"formal style makes heavy use of the passive."
};

/* recommended order of all 30 topics; within a stage, prerequisites come first */
const ROUTE = ["V1","N1","P1","S1","M1","Q1", "V2","M2","N2","P2","S2","Q2", "V3","M3","N3","P3","Q3","S3", "V4","M4","N4","P4","Q4","S4", "V5","M5","P5","Q5","S5","N5"];
/* fix-the-mistake answers in these topics also check spacing (no space before ? ! : ;) */
const STRICT = ["S2"];
/* localStorage key prefix: progress is kept per target language */
const STORE = "enmap-";

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES, ROUTE, STRICT, STORE };
