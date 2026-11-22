/* eslint-disable */
// Ukrainian grammar map content written for English speakers (native "en", target "uk").
// Field "fr" holds the name in the target language (historical key shared with the other maps);
// field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.
// Ukrainian examples follow the 2019 spelling code and the у/в, і/й euphony rules.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Дієслово",gloss:"the verb",c:"--l-v"},
  M:{fr:"Рух і способи",gloss:"motion and moods",c:"--l-m"},
  N:{fr:"Відмінки",gloss:"cases",c:"--l-n"},
  P:{fr:"Займенники",gloss:"pronouns, adjectives",c:"--l-p"},
  O:{fr:"Правопис",gloss:"spelling and sounds",c:"--l-o"},
  S:{fr:"Речення",gloss:"sentence",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Foundations",goal:"Read and say simple sentences: the present tense, gender, pronouns, the alphabet, questions and negation.",task:"Introduce yourself in 10 sentences: your name, where you live, what you do, what you like. Read it aloud, then check every и / і and every apostrophe."},
  {n:2,name:"First stories",goal:"Talk about the past and the future, say where you are and where you're going, describe things, join sentences.",task:"Write about last weekend and your plans for the next one (120 words): where you went and how. Check у / в and the gender of every past-tense verb."},
  {n:3,name:"Getting around",goal:"Aspect, the genitive, pronouns in cases, numbers and prefixed motion verbs.",task:"Plan a trip (150 words): how many days, what you'll do, who you'll travel with. Use at least 5 numbers and 3 motion verbs with prefixes."},
  {n:4,name:"Conversation",goal:"Reflexive verbs, the instrumental, comparison, the vocative, “I have” and “I'm cold”, the conditional.",task:"A polite message to a landlord or colleague (150 words) with the vocative, чи не могли б ви and two comparisons. Then act out the conversation aloud."},
  {n:5,name:"Fluency",goal:"Participles, the dative, свій and себе, spelling details, modal words and natural style without calques.",task:"A 200-word opinion text about your city. Check every треба / можна, every свій and the commas before що and який."}
];

const T = [
/* ---------- V: the verb ---------- */
{id:"V1",d:"V",p:1,fr:"Теперішній час",gloss:"present tense",t:"Теперішній час: I і II дієвідміна",
 s:"Ukrainian verbs change their ending for every person. There are two main patterns, called conjugations, and the infinitive usually tells you which one to use.",
 r:["1st conjugation (most verbs in -ати, -яти, -ути): <b>-у/-ю, -еш/-єш, -е/-є, -емо/-ємо, -ете/-єте, -уть/-ють</b>: читаю, читаєш, читає… читають.","2nd conjugation (most verbs in -ити, -іти, -їти): <b>-у/-ю, -иш/-їш, -ить/-їть, -имо, -ите, -ать/-ять</b>: говорю, говориш, говорить… говорять.","In the я form, д → дж, з → ж, с → ш, т → ч: ходити → ходжу, возити → вожу, просити → прошу; after б, п, в, м, ф an л is added: робити → роблю, любити → люблю.","No “to be” in the present: Я студент. Він удома. Irregular: їсти (їм, їси, їсть), дати (дам, даси, дасть)."],
 e:[["Я читаю, а ти що робиш?","I'm reading, and what are you doing?"],["Вони говорять українською.","They speak Ukrainian."],["Він живе у Львові.","He lives in Lviv."]],
 x:["Я робю домашнє завдання.","Я роблю домашнє завдання.","After б, п, в, м, ф the я form adds л: робити → роблю."],
 q:[["Ти ___ (говорити) українською?",["говориш","говореш","говорить"],0,"2nd conjugation: ти → -иш."],["Вони ___ (читати) книжку.",["читають","читаять","читаєть"],0,"1st conjugation: вони → -ють after a vowel."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Минулий і майбутній",gloss:"past and future",t:"Минулий і майбутній час",
 s:"The past tense changes for gender, not for person. The future has two forms for unfinished actions and one for finished ones.",
 r:["Past: stem + <b>-в</b> (masc.), <b>-ла</b> (fem.), <b>-ло</b> (neut.), <b>-ли</b> (plural): читав, читала, читало, читали. A woman says я читала, a man я читав.","Future (imperfective): <b>буду, будеш… + infinitive</b> (буду читати) or one word: <b>читатиму, читатимеш…</b>","Future (perfective): just conjugate the verb: прочитаю, напишу, зроблю (topic V3).","Never буду + a perfective verb: <s>буду прочитати</s> → прочитаю."],
 e:[["Вчора Олена працювала вдома.","Yesterday Olena worked from home."],["Завтра ми будемо дивитися фільм.","Tomorrow we'll watch a film."],["Я напишу тобі ввечері.","I'll write to you in the evening."]],
 x:["Вона був у Києві.","Вона була в Києві.","The past agrees with the subject's gender: вона → була."],
 q:[["Вчора Олена ___ вдома.",["працювала","працював","працювало"],0,"Олена is feminine → -ла."],["Завтра ми ___ фільм.",["будемо дивитися","будемо подивитися","дивилися"],0,"Imperfective future: будемо + infinitive."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Вид дієслова",gloss:"aspect",t:"Вид дієслова: доконаний і недоконаний",
 s:"Most verbs come in pairs: one for the process or repetition (imperfective), one for a single completed result (perfective). Choosing the right one matters more than the tense.",
 r:["Imperfective: process, duration, habit: писати, читати, робити, купувати. Я писав лист дві години.","Perfective: one finished action, a result: написати, прочитати, зробити, купити. Я написав лист.","Pairs are formed with a prefix (писати → написати), a suffix change (купувати → купити) or a different word (брати → взяти, говорити → сказати).","Perfective verbs have no present tense: their present-looking forms mean the future: напишу = I will write."],
 e:[["Я щодня читаю новини.","I read the news every day (habit)."],["Вчора я нарешті прочитав цю книжку.","Yesterday I finally finished this book (result)."],["Зачекай, я зараз зроблю каву.","Wait, I'll make coffee right now."]],
 x:["Я завжди написав йому листи.","Я завжди писав йому листи.","завжди = a habit → imperfective."],
 q:[["Я щодня ___ новини.",["читаю","прочитаю"],0,"Every day → imperfective."],["Вчора я нарешті ___ лист.",["писав","написав"],1,"нарешті = a finished result → perfective."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Дієслова на -ся",gloss:"reflexive verbs",t:"Дієслова на -ся",
 s:"The ending -ся turns an action back onto the subject (вмиватися — to wash oneself) or makes it mutual or general. One very common verb, подобатися, works “backwards”: the thing you like is the subject.",
 r:["Present: вчуся, вчишся, вчиться, вчимося, вчитеся, вчаться. Past: вчився, вчилася, вчилося, вчилися.","-ся means “oneself” or “each other”: одягатися (get dressed), зустрічатися (meet each other).","Many verbs only exist with -ся: сміятися, боятися, посміхатися.","<b>Мені подобається</b> кава — literally “coffee pleases me”: the verb agrees with what you like: мені подобаються квіти."],
 e:[["Мені подобається цей фільм.","I like this film."],["Ми прокидаємося о сьомій.","We wake up at seven."],["Вона вчиться в університеті.","She studies at university."]],
 x:["Я подобаю цей фільм.","Мені подобається цей фільм.","The person who likes goes in the dative (мені); the thing you like is the subject."],
 q:[["Мені ___ цей фільм.",["подобається","подобаю","подобаєшся"],0,"Мені подобається + singular thing."],["Вона ___ в університеті.",["вчиться","вчить","вчаться"],0,"вчитися = to study; вона → вчиться."]],pre:["V3","P3"]},
{id:"V5",d:"V",p:5,fr:"Дієприкметники",gloss:"participles",t:"Дієприкметник і дієприслівник",
 s:"Verb forms for written style: participles describe nouns (зачинені двері), adverbial participles describe a second action (читаючи — while reading).",
 r:["Passive participles: -ний, -тий: написаний лист, зачинені двері, вимитий посуд. They agree like adjectives.","Impersonal forms in -но, -то: Лист написано. Двері зачинено. Very common in official texts.","Adverbial participles: <b>-учи, -ючи</b> (at the same time): читаючи; <b>-вши</b> (before): прочитавши. They don't change.","Avoid active participles in -учий, -ачий for actions: <s>працюючі люди</s> → люди, які працюють."],
 e:[["Лист написано вчора.","The letter was written yesterday."],["Читаючи книжку, він заснув.","While reading the book, he fell asleep."],["Повернувшись додому, я зателефонував мамі.","Having got home, I called my mum."]],
 x:["Працюючі люди мають право на відпустку.","Люди, які працюють, мають право на відпустку.","Active participles in -учий are a calque from Russian; use a clause with який."],
 q:[["Лист ___ вчора.",["написано","написав","пишучи"],0,"Impersonal -но: the letter was written."],["___ книжку, він заснув.",["Читаючи","Прочитаний","Читає"],0,"A simultaneous action → -ючи."]],pre:["V4","P2"]},
/* ---------- M: motion and moods ---------- */
{id:"M1",d:"M",p:1,fr:"Наказовий спосіб",gloss:"imperative",t:"Наказовий спосіб",
 s:"How to ask, invite and instruct. Formed from the present stem, with -й or -и for ти and -йте / -іть for ви.",
 r:["Stem ending in a vowel → <b>-й, -йте</b>: читай, читайте; стій, стійте.","Stem ending in a consonant → <b>-и, -іть</b>: пиши, пишіть; говори, говоріть.","Let's: <b>-ймо / -імо</b>: читаймо, ходімо, напишімо.","Add будь ласка to be polite; use ви-forms with strangers: Скажіть, будь ласка…"],
 e:[["Говоріть, будь ласка, повільніше.","Please speak more slowly."],["Ходімо в кіно!","Let's go to the cinema!"],["Не хвилюйся, все буде добре.","Don't worry, everything will be fine."]],
 x:["Скажите, будь ласка, де вокзал?","Скажіть, будь ласка, де вокзал?","The ви imperative ends in -іть; -ите is Russian."],
 q:[["___, будь ласка, повільніше! (говорити, ви)",["Говоріть","Говорите","Говорити"],0,"Consonant stem → -іть."],["___ мені завтра! (написати, ти)",["Напиши","Напишеш","Написати"],0,"ти → -и."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Йти чи ходити",gloss:"verbs of motion",t:"Дієслова руху: йти чи ходити, їхати чи їздити",
 s:"Ukrainian distinguishes going on foot from going by transport, and one trip in one direction from going regularly or there and back.",
 r:["On foot: <b>йти</b> (one direction, now): я йду, ти йдеш; <b>ходити</b> (habit, round trips, ability): я ходжу, ти ходиш.","By transport: <b>їхати</b> (one direction, now): я їду; <b>їздити</b> (habit, round trips): я їжджу, ти їздиш.","Past: йшов / ходив, їхав / їздив. Минулого літа ми їздили в Карпати = we went and came back.","Куди? + accusative: йти в школу, їхати на роботу (topic N2). Пішки = on foot."],
 e:[["Зараз я йду на роботу.","I'm walking to work right now."],["Щосуботи ми ходимо на ринок.","Every Saturday we go to the market."],["Куди ти їдеш? — У Львів, поїздом.","Where are you going? — To Lviv, by train."]],
 x:["Я щодня йду в спортзал.","Я щодня ходжу в спортзал.","щодня = a habit → ходити."],
 q:[["Зараз я ___ на роботу.",["йду","ходжу"],0,"Now, one direction → йти."],["Щосуботи ми ___ на ринок.",["ходимо","йдемо"],0,"A regular habit → ходити."]],pre:["V2","N2"]},
{id:"M3",d:"M",p:3,fr:"Префікси руху",gloss:"prefixed motion",t:"Дієслова руху з префіксами",
 s:"A prefix gives the direction: arrive, leave, enter, cross. Prefixed verbs from йти / їхати are perfective, their pairs from ходити / їздити are imperfective.",
 r:["<b>при-</b> arrive (прийти, приїхати), <b>ви-</b> go out (вийти), <b>у- / в-</b> go in (увійти), <b>пере-</b> cross (перейти), <b>до-</b> reach (дійти), <b>від-</b> move away (відійти), <b>за-</b> drop in (зайти), <b>піти</b> leave.","After a prefix ending in a consonant, йти becomes -ійти: увійти, підійти, відійти, обійти.","Pairs: прийти / приходити, виїхати / виїжджати. Я прийду завтра (once) / Він часто приходить (often).","Prefixes also combine with нести, везти, бігти: принести, привезти."],
 e:[["Коли ти прийдеш додому?","When will you get home?"],["Переходьте вулицю на зелене світло.","Cross the street on the green light."],["Я зайду до тебе на хвилинку.","I'll drop in on you for a minute."]],
 x:["Він вийшов у кімнату.","Він увійшов у кімнату.","Into a room → у- / в- (увійти); ви- means out."],
 q:[["Коли ти ___ додому сьогодні?",["прийдеш","прийшов","приходиш"],0,"One future arrival → perfective future."],["___ вулицю на зелене світло.",["Переходьте","Приходьте","Виходьте"],0,"пере- = across."]],pre:["M2","V3"]},
{id:"M4",d:"M",p:4,fr:"Умовний спосіб",gloss:"conditional",t:"Умовний спосіб: би, якби",
 s:"The past tense + би (б) gives “would”: for wishes, polite requests and unreal situations.",
 r:["Form: past tense + <b>би</b> (after a consonant) or <b>б</b> (after a vowel): я хотів би, я б хотіла.","Unreal condition: <b>якби</b> + past, … + би: Якби я мав час, я поїхав би.","Politeness: Чи не могли б ви…? Я хотіла б…","Real conditions use якщо + present / future: Якщо буде час, я поїду."],
 e:[["Я хотів би кави.","I'd like some coffee."],["Якби я мав гроші, я купив би машину.","If I had money, I'd buy a car."],["Чи не могли б ви мені допомогти?","Could you help me?"]],
 x:["Якби я буду мати час, я поїду.","Якби я мав час, я поїхав би.","After якби, use the past tense; the result takes би."],
 q:[["Якби я мав гроші, я ___ машину.",["купив би","куплю","купив"],0,"Unreal result → past + би."],["___ ви мені допомогти?",["Чи не могли б","Чи не можете б","Могли би б"],0,"Polite request: Чи не могли б ви…?"]],pre:["V3"]},
{id:"M5",d:"M",p:5,fr:"Треба, можна",gloss:"modal words",t:"Треба, можна, мусити, мати",
 s:"Ukrainian expresses “must”, “can” and “should” largely with impersonal words and the dative: мені треба — “it is necessary for me”.",
 r:["<b>треба, потрібно, слід, варто</b> + infinitive, with the dative: мені треба йти, вам варто відпочити.","<b>можна / не можна</b>: allowed / not allowed: Тут не можна палити.","Personal verbs: <b>мусити</b> (мушу — I must), <b>мати</b> + infinitive (маю зробити — I'm supposed to), <b>могти</b> (можу — I can).","<b>повинен, повинна, повинні</b> agree with the subject: Вона повинна прийти."],
 e:[["Мені треба йти.","I have to go."],["Тут не можна палити.","Smoking isn't allowed here."],["Я маю зателефонувати мамі.","I'm supposed to call my mum."]],
 x:["Я треба працювати.","Мені треба працювати.","треба is impersonal: the person goes in the dative."],
 q:[["Мені ___ йти.",["треба","потрібний","мушу"],0,"Мені + треба + infinitive."],["Тут ___ палити.",["не можна","не може","не можемо"],0,"Not allowed → не можна."]],pre:["M4","S4"]},
/* ---------- N: cases ---------- */
{id:"N1",d:"N",p:1,fr:"Рід і число",gloss:"gender and plural",t:"Рід, число і називний відмінок",
 s:"Every noun has a gender — masculine, feminine or neuter — usually visible from its ending. There are no articles: “a book” and “the book” are both книжка.",
 r:["Masculine: usually a consonant: стіл, брат, музей. Feminine: -а, -я: мама, земля (and some in -ь: ніч, сіль, любов). Neuter: -о, -е, -я: вікно, море, завдання.","Plural: masc. and fem. → <b>-и / -і</b>: столи, книжки, музеї, ночі; neuter → <b>-а / -я</b>: вікна, моря, завдання.","Words that agree change with the gender: мій брат, моя мама, моє вікно, мої друзі.","це = this is / these are: Це мій брат. Це мої друзі."],
 e:[["Це моя книжка.","This is my book."],["У кімнаті два вікна.","There are two windows in the room."],["Це мій брат, а це моя сестра.","This is my brother, and this is my sister."]],
 x:["Це моя кіт.","Це мій кіт.","кіт is masculine → мій."],
 q:[["Це моя ___.",["книжка","стіл","вікно"],0,"моя → a feminine noun."],["Plural of «місто»:",["міста","місти","містаи"],0,"Neuter -о → -а."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Де і куди",gloss:"where and where to",t:"Де? і куди? Місцевий і знахідний відмінки",
 s:"The same prepositions у / в and на take different cases: location (where?) takes the locative, direction (where to?) takes the accusative.",
 r:["Де? → <b>у / в, на + locative</b>: у Києві, в Україні, на роботі, у школі. Ending usually <b>-і</b>.","Куди? → <b>у / в, на + accusative</b>: у Київ, на роботу, в школу.","Accusative endings: fem. -а → <b>-у</b>, -я → <b>-ю</b> (книжку, землю); masc. things = nominative (стіл); masc. people and animals = genitive (брата).","на is used with events, open spaces and some places: на роботі, на концерті, на пошті, на ринку."],
 e:[["Я живу в Києві.","I live in Kyiv."],["Ми їдемо на море.","We're going to the seaside."],["Вона працює в банку.","She works at a bank."]],
 x:["Я йду в школі.","Я йду в школу.","Direction (куди?) → accusative."],
 q:[["Я живу ___.",["в Києві","в Київ","Київ"],0,"Location → locative."],["Ми їдемо ___.",["на море","на морі"],0,"Direction → accusative."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Родовий",gloss:"genitive",t:"Родовий відмінок",
 s:"The most frequent case after the nominative: for absence (немає), quantity, possession and many prepositions.",
 r:["<b>немає + genitive</b>: немає часу, немає води. Quantity: багато людей, склянка води.","Possession: книжка брата, машина мого друга (“of”).","After <b>без, для, до, з / із, від, біля, після, крім</b>: з Києва, до бабусі, для мене.","Endings (sing.): fem. <b>-и / -і</b> (води, землі); neut. <b>-а / -я</b> (вікна); masc. <b>-а / -я</b> for people and objects (брата, стола), <b>-у / -ю</b> for substances and abstract nouns (часу, цукру)."],
 e:[["У мене немає часу.","I don't have time."],["Я з Києва.","I'm from Kyiv."],["Дайте, будь ласка, склянку води.","A glass of water, please."]],
 x:["У мене немає сестра.","У мене немає сестри.","немає + genitive."],
 q:[["У мене немає ___.",["часу","час","часом"],0,"немає + genitive; abstract noun → -у."],["Це машина мого ___.",["брата","брат","братові"],0,"Possession → genitive."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Орудний",gloss:"instrumental",t:"Орудний відмінок",
 s:"The case for “with whom”, “by means of what” and “as whom”: з другом, ручкою, лікарем.",
 r:["<b>з / із / зі + instrumental</b> = with: з другом, з мамою, кава з молоком.","Instrument or means (no preposition): писати ручкою, їхати поїздом.","Profession or role after працювати, бути (in past / future), стати: працювати лікарем, стати вчителькою.","Location with <b>над, під, перед, за, між</b>: над столом, перед будинком. Endings: masc. / neut. <b>-ом, -ем, -єм</b>; fem. <b>-ою, -ею, -єю</b>."],
 e:[["Я працюю лікарем.","I work as a doctor."],["Я п'ю каву з молоком.","I drink coffee with milk."],["Ми їдемо поїздом.","We're travelling by train."]],
 x:["Я пишу з ручкою.","Я пишу ручкою.","An instrument takes the instrumental without з."],
 q:[["Я працюю ___.",["лікарем","лікар","лікаря"],0,"працювати ким? → instrumental."],["Я п'ю каву з ___.",["молоком","молоко","молока"],0,"з = with → instrumental."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Давальний",gloss:"dative",t:"Давальний відмінок і вся система",
 s:"The dative answers “to whom”: who receives, who is helped, who feels something. With it, you have all seven cases.",
 r:["Recipient: давати, дарувати, писати, телефонувати <b>кому</b>: подзвони братові.","Verbs that take the dative in Ukrainian but a direct object in English: <b>допомагати</b> мамі, <b>дякувати</b> вам, <b>заважати</b> сусідам.","Endings: masc. <b>-ові / -еві / -єві</b> or <b>-у / -ю</b> (братові, брату), fem. <b>-і</b> (мамі, сестрі), neut. <b>-у / -ю</b> (вікну). Plural: <b>-ам / -ям</b> (друзям).","Age and states use the dative too: Мені двадцять років. Мені холодно (topic S4)."],
 e:[["Я допомагаю мамі.","I help my mum."],["Дякую вам за допомогу.","Thank you for your help."],["Ми подарували вчительці квіти.","We gave the teacher flowers."]],
 x:["Я дякую тебе.","Я дякую тобі.","дякувати кому? → dative."],
 q:[["Я допомагаю ___.",["мамі","маму","мамою"],0,"допомагати кому? → dative."],["Подзвони ___!",["братові","брата","братом"],0,"дзвонити кому? → dative."]],pre:["N4","P3"]},
/* ---------- P: pronouns and adjectives ---------- */
{id:"P1",d:"P",p:1,fr:"Я, мій",gloss:"personal, possessive",t:"Особові та присвійні займенники",
 s:"Personal pronouns and “my, your, our”. Possessives agree with the thing owned, not the owner — except його, її, їхній.",
 r:["я, ти, він, вона, воно, ми, ви, вони. <b>Ви</b> is also the polite “you” for one person.","мій, моя, моє, мої; твій…; наш, наша, наше, наші; ваш… — agree with the noun.","<b>його</b> (his) and <b>її</b> (her) never change: його сестра, її брат.","<b>їхній, їхня, їхнє, їхні</b> (their) agree with the noun: їхня квартира."],
 e:[["Це моя сестра, а це її чоловік.","This is my sister, and this is her husband."],["Це наші нові сусіди.","These are our new neighbours."],["Ви звідки?","Where are you from?"]],
 x:["Це моє друзі.","Це мої друзі.","друзі is plural → мої."],
 q:[["Це ___ книжка.",["моя","мій","моє"],0,"книжка is feminine."],["Це машина Олега. Це ___ машина.",["його","її","свій"],0,"Олег is a man → його (it doesn't change)."]],pre:[]},
{id:"P2",d:"P",p:2,fr:"Прикметник",gloss:"adjectives",t:"Прикметник: узгодження",
 s:"Adjectives agree with the noun in gender, number and case. There are two groups: hard (новий) and soft (синій).",
 r:["Hard group: <b>-ий, -а, -е, -і</b>: новий стіл, нова книжка, нове вікно, нові друзі.","Soft group: <b>-ій, -я, -є, -і</b>: синій, синя, синє, сині (also літній, осінній, вечірній).","The adjective usually goes before the noun: цікавий фільм.","Adverbs from adjectives end in -о or -е: швидкий → швидко, добрий → добре."],
 e:[["Це дуже цікавий фільм.","It's a very interesting film."],["У мене синя сорочка.","I have a blue shirt."],["Великі вікна, світла кімната.","Big windows, a bright room."]],
 x:["Це дуже цікава фільм.","Це дуже цікавий фільм.","фільм is masculine → -ий."],
 q:[["Це ___ машина.",["нова","новий","нове"],0,"машина is feminine → -а."],["У мене ___ сорочка.",["синя","синьа","синій"],0,"Soft group, feminine → -я."]],pre:["P1","N1"]},
{id:"P3",d:"P",p:3,fr:"Мене, мені",gloss:"pronouns in cases",t:"Займенники у відмінках",
 s:"Personal pronouns change form in every case. After a preposition, він, вона, вони take an н-: у нього, до неї, з ними.",
 r:["я → <b>мене</b> (gen. / acc.), <b>мені</b> (dat. / loc.), <b>мною</b>; ти → тебе, тобі, тобою.","він → <b>його</b>, йому, ним; вона → <b>її</b>, їй, нею; вони → <b>їх</b>, їм, ними.","After a preposition: <b>нього, неї, них</b>: у нього, до неї, без них, про неї.","ми → нас, нам, нами; ви → вас, вам, вами."],
 e:[["У нього є машина.","He has a car."],["Я тебе люблю.","I love you."],["Дай мені ручку, будь ласка.","Give me a pen, please."]],
 x:["Я йду до його.","Я йду до нього.","After a preposition → нього."],
 q:[["У ___ є машина.",["нього","його","він"],0,"After у → нього."],["Я ___ люблю.",["тебе","тобі","ти"],0,"любити кого? → accusative."]],pre:["P2","N2"]},
{id:"P4",d:"P",p:4,fr:"Порівняння",gloss:"comparison",t:"Ступені порівняння",
 s:"Comparatives end in -ший or -іший, superlatives add най-. “Than” is ніж or за.",
 r:["<b>-іший / -ший</b>: новий → новіший, гарний → гарніший, короткий → коротший.","Irregular: великий → <b>більший</b>, малий → <b>менший</b>, добрий → <b>кращий</b>, поганий → <b>гірший</b>.","Superlative: <b>най-</b> + comparative: найновіший, найкращий. Not <s>самий кращий</s>.","Than: <b>ніж</b> + nominative or <b>за</b> + accusative: старший, ніж брат / старший за брата. Adverbs: швидше, краще."],
 e:[["Київ більший за Львів.","Kyiv is bigger than Lviv."],["Це найкращий день у моєму житті.","It's the best day of my life."],["Говоріть повільніше, будь ласка.","Please speak more slowly."]],
 x:["Це самий цікавий фільм.","Це найцікавіший фільм.","Superlative → най-; самий is a Russian calque."],
 q:[["Київ ___ за Львів.",["більший","більш великий","великіший"],0,"великий → більший."],["Це ___ день у моєму житті.",["найкращий","найдобріший","самий кращий"],0,"добрий → кращий → найкращий."]],pre:["P2"]},
{id:"P5",d:"P",p:5,fr:"Свій, хтось",gloss:"свій, себе, someone",t:"Свій, себе, хтось, кожен",
 s:"свій means “one's own”, referring back to the subject. With it come себе (oneself), indefinite words (хтось — someone) and quantifiers (весь, кожен).",
 r:["<b>свій, своя, своє, свої</b> = the subject's own: Олена любить свою роботу. її роботу would mean another woman's job.","<b>себе</b> (oneself) has no nominative: Він думає про себе. Купи собі щось.","<b>-сь</b> = some-: хтось, щось, десь, колись. <b>будь-</b> = any-: будь-хто, будь-що.","<b>весь, вся, все, всі</b> (all); <b>кожен, кожна, кожне</b> (every)."],
 e:[["Олена любить свою роботу.","Olena loves her (own) job."],["Хтось подзвонив тобі.","Someone called you."],["Він завжди думає тільки про себе.","He always thinks only about himself."]],
 x:["Олена любить її роботу.","Олена любить свою роботу.","Her own job → свою. її роботу would be another woman's job."],
 q:[["Вона любить ___ роботу.",["свою","її","себе"],0,"The subject's own → свою."],["___ подзвонив тобі, поки тебе не було.",["Хтось","Ніхто","Будь-хто"],0,"Someone → хтось."]],pre:["P3"]},
/* ---------- O: spelling and sounds ---------- */
{id:"O1",d:"O",p:1,fr:"Абетка",gloss:"alphabet",t:"Абетка, звуки й апостроф",
 s:"The Ukrainian alphabet has 33 letters and is largely phonetic. A few letters and the apostrophe cause most reading and spelling mistakes.",
 r:["<b>и</b> [ɪ] (like “i” in “bit”) vs <b>і</b> [i] (like “ee”): дим / дім. <b>ї</b> = [ji], <b>є</b> = [je], <b>щ</b> = [ʃtʃ].","<b>г</b> is a soft [ɦ] (like “h”), <b>ґ</b> is a hard [g]: гора, ґанок.","<b>ь</b> softens the consonant before it: день, сіль, Львів.","<b>Apostrophe</b> after б, п, в, м, ф and р before я, ю, є, ї: п'ять, м'ясо, сім'я, пір'я. Not if another consonant comes before the labial: свято, цвях."],
 e:[["п'ять, м'ясо, сім'я","five, meat, family"],["Привіт! Як справи?","Hi! How are you?"],["Мій брат вчиться в п'ятому класі.","My brother is in fifth grade."]],
 x:["сімя","сім'я","м before я → apostrophe."],
 q:[["Which spelling is correct?",["п'ять","пять","пьять"],0,"п before я → apostrophe."],["Which word has the sound [g]?",["ґанок","гора","голова"],0,"ґ is the hard [g]."]],pre:[]},
{id:"O2",d:"O",p:2,fr:"У чи в",gloss:"euphony",t:"Милозвучність: у / в, і / й, з / із / зі",
 s:"Ukrainian avoids clusters of vowels or consonants, so some short words change shape: у / в, і / й, з / із / зі. This is part of correct spelling, not just style.",
 r:["<b>в</b> after a vowel before a consonant: вона в місті. <b>у</b> between consonants and at the start of a sentence: брат у місті, У мене є…","Before в, ф, льв, св, тв, хв always <b>у</b>: у Львові, у Франції, у вівторок.","<b>й</b> after a vowel: мама й тато; <b>і</b> after a consonant: брат і сестра.","<b>з</b> by default; <b>із</b> between sibilants (з, с, ц, ч, ш); <b>зі</b> before з, с, ш + consonant: зі школи, зі мною."],
 e:[["Вона працює в лікарні.","She works in a hospital."],["Брат живе у Львові.","My brother lives in Lviv."],["Мама й тато прийшли зі школи.","Mum and dad came from the school."]],
 x:["Він живе в Львові.","Він живе у Львові.","Before льв → у."],
 q:[["Мама працює ___ лікарні.",["в","у"],0,"After a vowel, before a consonant → в."],["Брат живе ___ Львові.",["у","в"],0,"Before льв → у."]],pre:["O1"]},
{id:"O3",d:"O",p:3,fr:"Чергування",gloss:"sound changes",t:"Чергування звуків",
 s:"Sounds change when words change form. Spotting the pattern helps you recognise the word and spell it.",
 r:["<b>і ↔ о / е</b>: і in a closed syllable, о / е in an open one: кінь — коня, ніч — ночі, сіль — солі, Київ — Києва.","<b>г, к, х → з, ц, с</b> before -і: нога — на нозі, рука — у руці, Прага — у Празі, сумка — у сумці.","In verbs: д → дж, з → ж, с → ш, т → ч in the я form: ходити → ходжу, просити → прошу, писати → пишу.","Vowel drop: день — дня, вітер — вітру."],
 e:[["Я тримаю телефон у руці.","I'm holding my phone in my hand."],["Ми живемо в Празі.","We live in Prague."],["Немає солі.","There's no salt."]],
 x:["Я тримаю телефон у рукі.","Я тримаю телефон у руці.","к → ц before -і."],
 q:[["у ___ (рука)",["руці","рукі","руки"],0,"к → ц before -і."],["Genitive of «ніч»:",["ночі","нічі","ніча"],0,"і → о in an open syllable."]],pre:["O2","N2"]},
{id:"O4",d:"O",p:4,fr:"Кличний",gloss:"vocative",t:"Кличний відмінок",
 s:"Ukrainian has a special form for addressing someone. Using the nominative instead sounds rude or foreign, especially in letters and polite speech.",
 r:["Feminine -а → <b>-о</b>: Олена → Олено, мама → мамо; -я → <b>-є / -ю</b>: Марія → Маріє, Галя → Галю.","Masculine (hard) → <b>-е</b>: Іван → Іване, Тарас → Тарасе, пан → пане; after к, г, х: друг → друже.","Masculine (soft) → <b>-ю</b>: Андрій → Андрію, Ігор → Ігорю.","Formal address: <b>пане Андрію, пані Олено</b> (пані doesn't change). Шановний пане Іване!"],
 e:[["Олено, ходи сюди!","Olena, come here!"],["Добрий день, пане Іване!","Good afternoon, Mr Ivan!"],["Дякую, друже!","Thanks, my friend!"]],
 x:["Привіт, Андрій!","Привіт, Андрію!","Addressing someone → vocative: Андрію."],
 q:[["___, ходи сюди! (Олена)",["Олено","Олена","Оленою"],0,"-а → -о."],["Добрий день, пане ___! (Іван)",["Іване","Іван","Івану"],0,"Hard masculine → -е."]],pre:["O3","N1"]},
{id:"O5",d:"O",p:5,fr:"Подвоєння",gloss:"spelling details",t:"Подвоєння, м'який знак, дефіс, велика буква",
 s:"The spelling rules that show in every text: double letters, the soft sign, hyphens and capitals.",
 r:["Doubling in neuter nouns after a vowel: <b>життя, знання, питання, обличчя</b>. Not in the genitive plural: знань, питань.","Doubling at a boundary: віддати, беззахисний, письменник.","<b>ь</b> after д, т, з, с, ц, л, н at the end and before о: день, сіль, сьогодні. Not after ж, ч, ш: ніч, ріж.","Lower case for days, months, languages and nationalities: понеділок, січень, українська мова, українці. Hyphen: будь-хто, хто-небудь."],
 e:[["У мене є кілька питань.","I have a few questions."],["Ми зустрінемося у вівторок.","We'll meet on Tuesday."],["Будь-хто може прийти.","Anyone can come."]],
 x:["Я вивчаю Українську мову з Січня.","Я вивчаю українську мову з січня.","Languages and months are lower case."],
 q:[["Which spelling is correct?",["життя","житя","життє"],0,"Doubled тт: життя."],["Which is correct?",["у понеділок","у Понеділок"],0,"Days of the week are lower case."]],pre:["O4"]},
/* ---------- S: sentence ---------- */
{id:"S1",d:"S",p:1,fr:"Питання і «не»",gloss:"questions, negation",t:"Просте речення: питання і заперечення",
 s:"Word order is flexible but SVO is neutral. Yes / no questions start with чи or rely on intonation. Negation uses не, and negative words need не as well.",
 r:["Yes / no question: <b>чи</b> + statement, or just rising intonation: Чи ти говориш українською? Ти говориш українською?","Question words: хто, що, де (where), куди (where to), звідки (where from), коли, чому, як, скільки.","<b>не</b> goes before the verb: Я не знаю. Absence: <b>немає</b> (нема) + genitive.","Double negation is required: <b>ніхто не</b>, <b>нічого не</b>, <b>ніколи не</b>, <b>ніде не</b>: Ніхто не прийшов."],
 e:[["Чи ти говориш українською?","Do you speak Ukrainian?"],["Я нічого не знаю.","I don't know anything."],["Куди ти йдеш? — Додому.","Where are you going? — Home."]],
 x:["Я нічого знаю.","Я нічого не знаю.","Negative words need не before the verb."],
 q:[["___ ти говориш українською?",["Чи","Що","Як"],0,"Yes / no question → чи."],["Ніхто ___ прийшов.",["не","ні","—"],0,"Double negation: ніхто не."]],pre:["V1"]},
{id:"S2",d:"S",p:2,fr:"Що, бо, який",gloss:"complex sentences",t:"Складне речення: що, який, бо, щоб",
 s:"Joining clauses: що (that), який (who / which), бо / тому що (because), щоб (so that), коли, якщо. In Ukrainian a comma always separates the clauses.",
 r:["<b>що</b> = that: Я думаю, що він правий. Always with a comma.","<b>який, яка, яке, які</b> = who / which; it takes the gender and number of the noun and the case of its role: дівчина, якій я подзвонив.","<b>бо, тому що</b> = because; <b>щоб</b> + past form = so that / in order: Я хочу, щоб ти прийшов.","A comma before що, який, бо, коли, щоб, якщо, але, а — always."],
 e:[["Я думаю, що він правий.","I think he's right."],["Це книжка, яку я читаю.","This is the book I'm reading."],["Я не прийшов, бо хворів.","I didn't come because I was ill."]],
 x:["Я хочу, щоб ти прийдеш.","Я хочу, щоб ти прийшов.","After щоб → a past-tense form."],
 q:[["Я думаю, ___ він правий.",["що","який","чи"],0,"that → що."],["Це книжка, ___ я читаю.",["яку","який","яка"],0,"книжка (fem.) is the object → яку."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Числівники",gloss:"numbers",t:"Числівники з іменниками, час і дати",
 s:"The noun after a number changes form: one book, two books and five books all look different. The same logic is used for age and time.",
 r:["<b>1</b> (один, одна, одне) + nominative singular: один брат, одна книжка; also 21, 31: двадцять один студент.","<b>2, 3, 4</b> (два / дві, три, чотири) + nominative plural: два брати, дві сестри, три книжки.","<b>5 and more</b> + genitive plural: п'ять братів, десять книжок. рік: один рік, два роки, п'ять років.","Time: <b>о котрій?</b> — о першій, о сьомій; пів на третю (2:30). Dates: першого травня."],
 e:[["У мене два брати й дві сестри.","I have two brothers and two sisters."],["Йому тридцять п'ять років.","He's thirty-five."],["Зустрінемося о сьомій.","Let's meet at seven."]],
 x:["Мені двадцять п'ять роки.","Мені двадцять п'ять років.","5 and more → genitive plural: років."],
 q:[["У мене два ___.",["брати","брата","братів"],0,"2–4 + nominative plural."],["П'ять ___.",["книжок","книжки","книжка"],0,"5+ → genitive plural."]],pre:["S2","N3"]},
{id:"S4",d:"S",p:4,fr:"У мене є",gloss:"have, age, states",t:"У мене є, мені холодно, мене звати",
 s:"Many everyday ideas are impersonal in Ukrainian: “I have” is “at me there is”, “I'm cold” is “to me it's cold”, “I'm called” is “they call me”.",
 r:["Have: <b>у мене є</b> + nominative: У мене є брат. Not having: <b>у мене немає</b> + genitive.","States: <b>dative + adverb</b>: мені холодно, нам весело, йому сумно.","Age: <b>dative + number + рік / роки / років</b>: Мені тридцять років.","Name: <b>Мене звати</b> Олена. Як тебе звати? / Як вас звати?"],
 e:[["У тебе є машина?","Do you have a car?"],["Мені холодно.","I'm cold."],["Як тебе звати? — Мене звати Андрій.","What's your name? — I'm Andrii."]],
 x:["Я є 30 років.","Мені 30 років.","Age → dative + років."],
 q:[["___ є машина?",["У тебе","Ти","Тобі"],0,"have → у + genitive + є."],["___ холодно.",["Мені","Я","Мене"],0,"A state → dative."]],pre:["S3","P3"]},
{id:"S5",d:"S",p:5,fr:"Стиль",gloss:"style, calques",t:"Стиль і пунктуація: без кальок",
 s:"Learners often pick up phrases copied from Russian (calques) that sound wrong in standard Ukrainian. Knowing the natural equivalents, plus a few punctuation rules, makes your writing sound native.",
 r:["Calques → standard: <s>приймати участь</s> → брати участь; <s>на протязі</s> → протягом; <s>слідуючий</s> → наступний; <s>в залежності від</s> → залежно від; <s>згідно наказу</s> → згідно з наказом.","Apologising: <b>вибачте, перепрошую</b> (not <s>вибачаюсь</s>). Let's: <b>зробімо</b> rather than давайте зробимо.","A dash between two nouns in “X is Y”: Київ — столиця України.","Quotation marks « », commas before що, який, але, а; no space before ? ! : ;"],
 e:[["Ми взяли участь у конференції.","We took part in the conference."],["Ми працювали над проєктом протягом року.","We worked on the project for a year."],["Київ — столиця України.","Kyiv is the capital of Ukraine."]],
 x:["Ми працювали над проєктом на протязі року.","Ми працювали над проєктом протягом року.","на протязі is a calque; the standard word is протягом."],
 q:[["Я хочу ___ участь у конкурсі.",["взяти","прийняти","прийти"],0,"брати участь — to take part."],["___ зупинка — «Університет».",["Наступна","Слідуюча","Слідуєма"],0,"next → наступний."]],pre:["S4"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["Ми ___ (хотіти) їсти.",["хочемо","хотимо","хочимо"],0,"хотіти: хочу, хочеш, хоче, хочемо."],["Він ___ (жити) у Львові.",["живе","жиє","живить"],0,"жити: живу, живеш, живе."],["Я ___ (ходити) на роботу пішки.",["ходжу","ходю","хожу"],0,"д → дж in the я form."]],
 c:[["Ти пишиш дуже гарно.","Ти пишеш дуже гарно.","писати is 1st conjugation: ти пишеш."],["Вони говорють українською.","Вони говорять українською.","2nd conjugation: вони -ять."]]},
V2:{q:[["Діти ___ в парку.",["гралися","грався","гралась"],0,"Plural → -ли."],["Я ___ тобі завтра.",["напишу","буду написати","писав"],0,"Perfective future: напишу."],["Ми ___ (працювати) завтра весь день.",["працюватимемо","працюватиму","працювали"],0,"One-word future: -тимемо for ми."]],
 c:[["Я буду прочитати цю книжку.","Я прочитаю цю книжку.","Perfective verbs don't take буду."],["Вчора ми ходимо в кіно.","Вчора ми ходили в кіно.","вчора → past tense."]]},
V3:{q:[["Зачекай, я зараз ___ каву.",["зроблю","роблю","буду зробити"],0,"One action with a result → perfective future."],["Він два роки ___ українську.",["вчив","вивчив"],0,"Duration (two years) → imperfective."],["Нарешті я ___ квитки!",["купив","купував"],0,"A finished result → perfective."]],
 c:[["Ми цілий вечір подивилися телевізор.","Ми цілий вечір дивилися телевізор.","Duration (all evening) → imperfective."],["Я вже купувала квитки, ось вони.","Я вже купила квитки, ось вони.","The result is here now → perfective."]]},
V4:{q:[["Нам ___ ваші ідеї.",["подобаються","подобається"],0,"ідеї is plural → подобаються."],["Ми ___ о восьмій.",["прокидаємося","прокидаємо","прокидається"],0,"прокидатися; ми → -ємося."],["Чому ти ___?",["смієшся","смієш","сміється"],0,"сміятися; ти → смієшся."]],
 c:[["Мені подобається ці квіти.","Мені подобаються ці квіти.","The subject is квіти (plural)."],["Діти вже одягнули.","Діти вже одягнулися.","Dressing oneself → -ся."]]},
V5:{q:[["Двері ___.",["зачинені","зачиняючи","зачиняв"],0,"A passive participle describing двері (plural)."],["___ додому, я зателефонував мамі.",["Повернувшись","Повертаючий","Повернений"],0,"An earlier action → -вши."],["Роботу ___ вчасно.",["виконано","виконаний","виконуючи"],0,"Impersonal -но."]],
 c:[["Ми живемо в будинку, будуючому в 1990 році.","Ми живемо в будинку, збудованому в 1990 році.","Built → passive participle збудований."],["Вона йшла, співав пісню.","Вона йшла, співаючи пісню.","A simultaneous action → -ючи."]]},
M1:{q:[["___ в кіно! (ходити, ми)",["Ходімо","Ходимо","Ходіте"],0,"Let's → -імо."],["Не ___! (хвилюватися, ти)",["хвилюйся","хвилюєшся","хвилюватися"],0,"Vowel stem → -й + -ся."],["___ уважні! (бути, ви)",["Будьте","Будете","Бути"],0,"бути → будь, будьте."]],
 c:[["Пишите нам на пошту.","Пишіть нам на пошту.","The ви imperative → -іть."],["Не забудь купить хліба.","Не забудь купити хліба.","The Ukrainian infinitive ends in -ти."]]},
M2:{q:[["Куди ти ___? — У Львів, поїздом.",["їдеш","ходиш","їздиш"],0,"By train, now, one direction → їхати."],["Минулого літа ми ___ в Карпати.",["їздили","їхали","ходили"],0,"A trip there and back → їздити."],["Він уміє ___ на велосипеді.",["їздити","їхати"],0,"An ability → the multidirectional verb."]],
 c:[["Я їду на роботу пішки.","Я йду на роботу пішки.","On foot → йти."],["Ми щороку їдемо на море.","Ми щороку їздимо на море.","Every year → їздити."]]},
M3:{q:[["Я ___ до тебе на хвилинку.",["зайду","вийду","перейду"],0,"за- = drop in."],["Потяг ___ о 7:15.",["відходить","заходить","доходить"],0,"від- = leave, depart."],["Ми ледве ___ до вокзалу.",["дійшли","вийшли","зайшли"],0,"до- = reach."]],
 c:[["Він пришов о шостій.","Він прийшов о шостій.","при- + йти → прийти."],["Підіть сюди, будь ласка.","Підійдіть сюди, будь ласка.","під- + йти → підійти; imperative підійдіть."]]},
M4:{q:[["Я ___ чаю.",["хотів би","хочу би","хотіти б"],0,"would like → past + би."],["Що б ти ___ на моєму місці?",["зробив","зробиш","робиш"],0,"би + past tense."],["Якби вона ___ раніше, ми б встигли.",["прийшла","прийде","приходить"],0,"якби + past tense."]],
 c:[["Вона би прийшла, якби знала.","Вона б прийшла, якби знала.","After a vowel → б."],["Якщо б ти прийшов, було б весело.","Якби ти прийшов, було б весело.","An unreal condition → якби."]]},
M5:{q:[["Вона ___ закінчити звіт до п'ятниці.",["повинна","повинен","треба"],0,"повинен agrees: вона → повинна."],["Вам ___ відпочити.",["варто","маєте","мусите"],0,"Вам + impersonal варто."],["Я ___ зателефонувати мамі.",["маю","маю би","треба"],0,"мати + infinitive = I'm supposed to."]],
 c:[["Мені треба йде.","Мені треба йти.","After треба → infinitive."],["Вона повинен це зробити.","Вона повинна це зробити.","повинен agrees with the subject's gender."]]},
N1:{q:[["Which word is feminine?",["ніч","день","вікно"],0,"ніч is a feminine noun in -ь."],["Plural of «музей»:",["музеї","музеи","музейи"],0,"-й → -ї."],["Which word is neuter?",["море","земля","олівець"],0,"-е → neuter."]],
 c:[["Ця вікно дуже велике.","Це вікно дуже велике.","вікно is neuter → це."],["Моя друг живе в Києві.","Мій друг живе в Києві.","друг is masculine."]]},
N2:{q:[["Вона працює ___.",["в банку","в банк","банк"],0,"Location → locative."],["Я бачу ___.",["маму","мама","мамі"],0,"Direct object → accusative: -у."],["Покладіть книжку ___.",["на стіл","на столі"],0,"Direction → accusative."]],
 c:[["Я був на Київі.","Я був у Києві.","A city → у + locative."],["Ми чекаємо на автобусі.","Ми чекаємо на автобус.","чекати на + accusative."]]},
N3:{q:[["Я з ___.",["Києва","Київ","Києві"],0,"з (from) + genitive."],["Дайте, будь ласка, склянку ___.",["води","вода","воду"],0,"Quantity → genitive."],["Після ___ ми підемо гуляти.",["обіду","обід","обідом"],0,"після + genitive."]],
 c:[["Мені треба купити два кілограми цукор.","Мені треба купити два кілограми цукру.","Quantity → genitive: цукру."],["Ця кава для мій брат.","Ця кава для мого брата.","для + genitive."]]},
N4:{q:[["Ми їдемо ___.",["поїздом","поїзд","поїзду"],0,"Means of transport → instrumental."],["Лампа висить над ___.",["столом","стіл","столі"],0,"над + instrumental."],["Вона хоче стати ___.",["вчителькою","вчителька","вчительку"],0,"стати ким? → instrumental."]],
 c:[["Я гуляю з собака.","Я гуляю з собакою.","з + instrumental: -ою."],["Він працює як програміст.","Він працює програмістом.","працювати ким? → instrumental."]]},
N5:{q:[["Ми подарували ___ квіти.",["вчительці","вчительку","вчителька"],0,"дарувати кому? → dative."],["Скільки років твоєму ___?",["синові","сина","син"],0,"Age → dative."],["Я телефоную ___.",["друзям","друзів","друзі"],0,"Dative plural → -ям."]],
 c:[["Вона допомагає свого брата.","Вона допомагає своєму братові.","допомагати кому? → dative."],["Дякую вас за допомогу.","Дякую вам за допомогу.","дякувати кому? → вам."]]},
P1:{q:[["Це наш ___.",["дім","квартира","вікно"],0,"наш → masculine noun."],["Ольга й Петро — мої сусіди. Це ___ квартира.",["їхня","їхній","їхнє"],0,"квартира is feminine → їхня."],["Це ___ діти.",["мої","моє","моя"],0,"Plural → мої."]],
 c:[["Це наша нові сусіди.","Це наші нові сусіди.","Plural → наші."],["Це їхнє квартира.","Це їхня квартира.","квартира is feminine."]]},
P2:{q:[["___ вікна",["великі","великий","велика"],0,"Plural → -і."],["___ море (синій)",["синє","синеє","синій"],0,"Soft group, neuter → -є."],["___ ранок (добрий)",["добрий","добре","добра"],0,"ранок is masculine."]],
 c:[["У нас нова вчитель.","У нас новий вчитель.","вчитель is masculine."],["Ці квіти дуже гарна.","Ці квіти дуже гарні.","Plural → -і."]]},
P3:{q:[["Дай ___ ручку, будь ласка.",["мені","мене","я"],0,"давати кому? → dative."],["Ми говорили про ___.",["неї","її","вона"],0,"After a preposition → неї."],["Я давно не бачив ___.",["їх","них","їм"],0,"бачити кого? → їх (no preposition)."]],
 c:[["Я подзвоню тебе завтра.","Я подзвоню тобі завтра.","дзвонити кому? → тобі."],["Ми чекали на його цілий день.","Ми чекали на нього цілий день.","After a preposition → нього."]]},
P4:{q:[["Моя сестра старша ___ мене.",["за","як","чим"],0,"старший за + accusative."],["Говоріть ___, будь ласка.",["повільніше","повільніший","найповільніше"],0,"An adverb in the comparative."],["Сьогодні ___, ніж учора.",["холодніше","холодніший","холодно"],0,"The weather → adverb: холодніше."]],
 c:[["Він більш старший за мене.","Він старший за мене.","Don't combine більш and -ший."],["Цей план гірше, ніж той.","Цей план гірший, ніж той.","It describes план → adjective гірший."]]},
P5:{q:[["Він завжди думає тільки про ___.",["себе","собі","свій"],0,"про + accusative of себе."],["Я бачу її ___ дня.",["кожного","кожен","кожному"],0,"кожного дня — every day (genitive)."],["Візьми ___ сумку!",["свою","твою свою","себе"],0,"Your own → свою."]],
 c:[["Вона розповідала про себе й про її сім'ю.","Вона розповідала про себе й про свою сім'ю.","Her own family → свою."],["Всі студенти зробив завдання.","Всі студенти зробили завдання.","всі → plural verb."]]},
O1:{q:[["Choose the right letter: «пр_віт» (hi)",["и","і"],0,"привіт is spelled with и."],["Which spelling is correct?",["свято","св'ято"],0,"Another consonant before в → no apostrophe."],["Which spelling is correct?",["м'ясо","мясо","мьясо"],0,"м before я → apostrophe."]],
 c:[["Мені подобається мясо.","Мені подобається м'ясо.","м before я → apostrophe."],["Мій брат вчиться в пятому класі.","Мій брат вчиться в п'ятому класі.","п before я → apostrophe."]]},
O2:{q:[["Петро ___ Олена",["й","і"],0,"Between two vowels → й."],["Я прийшов ___ школи.",["зі","з","із"],0,"Before ш + consonant → зі."],["Ми поїдемо ___ вівторок.",["у","в"],0,"Before в → у."]],
 c:[["Вона була у Києві.","Вона була в Києві.","After a vowel, before a consonant → в."],["Я йду з школи.","Я йду зі школи.","Before ш + consonant → зі."]]},
O3:{q:[["на ___ (нога)",["нозі","ногі","нога"],0,"г → з before -і."],["Plural of «кінь»:",["коні","кіні","коня"],0,"і → о in an open syllable."],["Ми живемо в ___ (Прага).",["Празі","Прагі","Прагу"],0,"г → з before -і."]],
 c:[["Що в тебе в сумкі?","Що в тебе в сумці?","к → ц before -і."],["Немає ніякої сілі.","Немає ніякої солі.","сіль → солі."]]},
O4:{q:[["Дякую, ___! (друг)",["друже","друг","другу"],0,"друг → друже."],["___, ти вдома? (мама)",["Мамо","Мама","Мамі"],0,"-а → -о."],["Шановна пані ___! (Марія)",["Маріє","Марія","Марію"],0,"-ія → -іє."]],
 c:[["Тарас, допоможи мені!","Тарасе, допоможи мені!","Hard masculine → -е."],["Ольга, де ти?","Ольго, де ти?","-а → -о."]]},
O5:{q:[["Which is correct?",["будь-хто","будьхто","будь хто"],0,"будь- is joined with a hyphen."],["Which is correct?",["знання","знаня"],0,"Doubled нн after a vowel."],["Genitive plural of «питання»:",["питань","питаннь"],0,"No doubling in the genitive plural."]],
 c:[["У мене є кілька питаннь.","У мене є кілька питань.","Genitive plural: питань."],["Ми зустрінемося у Вівторок.","Ми зустрінемося у вівторок.","Days are lower case."]]},
S1:{q:[["___ ти живеш? — У Львові.",["Де","Куди","Звідки"],0,"Location → де."],["___ ти йдеш? — Додому.",["Куди","Де","Коли"],0,"Direction → куди."],["У нас ___ хліба.",["немає","не","ні"],0,"Absence → немає + genitive."]],
 c:[["Ми ніколи були в Одесі.","Ми ніколи не були в Одесі.","ніколи needs не."],["Де ти йдеш?","Куди ти йдеш?","Direction → куди."]]},
S2:{q:[["Я не прийшов, ___ хворів.",["бо","що","щоб"],0,"because → бо."],["Подзвони, ___ будеш удома.",["коли","що","який"],0,"when → коли."],["Скажи, ___ ти робиш.",["що","яке","щоб"],0,"what → що."]],
 c:[["Я знаю що ти маєш рацію.","Я знаю, що ти маєш рацію.","A comma before що."],["Це дівчина, який я подзвонив.","Це дівчина, якій я подзвонив.","дівчина is feminine; дзвонити кому → якій."]]},
S3:{q:[["У класі двадцять один ___.",["студент","студенти","студентів"],0,"…1 → nominative singular."],["Зустрінемося ___.",["о сьомій","в сім","сім годин"],0,"At what time → о + ordinal."],["Три ___.",["сестри","сестер","сестра"],0,"2–4 → nominative plural."]],
 c:[["У нас дві собаки й чотири котів.","У нас дві собаки й чотири коти.","2–4 → nominative plural."],["Фільм почнеться в восьмій.","Фільм почнеться о восьмій.","Time → о + locative."]]},
S4:{q:[["Як ___ звати?",["тебе","тобі","ти"],0,"Як тебе звати? — accusative."],["У неї ___ братів.",["немає","не має","нема є"],0,"немає + genitive."],["___ потрібна допомога?",["Вам","Ви","Вас"],0,"потрібно / потрібна + dative."]],
 c:[["Я холодно.","Мені холодно.","A state → dative."],["Я маю двадцять років.","Мені двадцять років.","Age → dative."]]},
S5:{q:[["___ від погоди.",["Залежно","В залежності","По залежності"],0,"depending on → залежно від."],["___, будь ласка, за запізнення.",["Вибачте","Вибачаюсь","Звиняюсь"],0,"Apologising → вибачте."],["Київ ___ столиця України.",["—","являється","є являється"],0,"A dash between two nouns."]],
 c:[["Ми прийняли участь у конференції.","Ми взяли участь у конференції.","брати участь, not приймати."],["Згідно наказу, офіс закрито.","Згідно з наказом, офіс закрито.","згідно з + instrumental."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Two conjugations
Every verb changes its ending for each person. Learn the two patterns once and most verbs fall into place.
| | читати (I) | писати (I) | говорити (II) | робити (II) |
| я | чита<b>ю</b> | пиш<b>у</b> | говор<b>ю</b> | роб<b>лю</b> |
| ти | чита<b>єш</b> | пиш<b>еш</b> | говор<b>иш</b> | роб<b>иш</b> |
| він / вона | чита<b>є</b> | пиш<b>е</b> | говор<b>ить</b> | роб<b>ить</b> |
| ми | чита<b>ємо</b> | пиш<b>емо</b> | говор<b>имо</b> | роб<b>имо</b> |
| ви | чита<b>єте</b> | пиш<b>ете</b> | говор<b>ите</b> | роб<b>ите</b> |
| вони | чита<b>ють</b> | пиш<b>уть</b> | говор<b>ять</b> | роб<b>лять</b> |
The quickest test is the вони form: -уть / -ють → 1st conjugation, -ать / -ять → 2nd.
## Consonant changes in the я form
2nd-conjugation verbs change the last consonant of the stem only in the я form: ходити → хо<b>дж</b>у (but ходиш), просити → про<b>ш</b>у, возити → во<b>ж</b>у, платити → пла<b>ч</b>у. After б, п, в, м, ф an <b>л</b> appears: робити → роб<b>л</b>ю, купити → куп<b>л</b>ю, любити → люб<b>л</b>ю (and роблять, люблять).
## “To be” and irregular verbs
In the present, бути is dropped: <i>Я студентка. Він удома. Це мій друг.</i> The form <b>є</b> appears only for emphasis or “there is”: <i>У мене є питання.</i>
| їсти | дати | хотіти |
| їм, їси, їсть | дам, даси, дасть | хочу, хочеш, хоче |
| їмо, їсте, їдять | дамо, дасте, дадуть | хочемо, хочете, хочуть |
## No continuous tense
Ukrainian has one present: <i>я читаю</i> = “I read” and “I'm reading”. Context and words like зараз (now), щодня (every day) do the work.
! Pronouns are often dropped because the ending already shows the person: <i>Читаю.</i> = “I'm reading.” In writing, keep them at first; in speech, dropping them sounds natural.`,
V2:`## The past tense
Take the infinitive, drop -ти, add the gender ending. Person doesn't matter — only gender and number.
| | masculine | feminine | neuter | plural |
| читати | читав | читала | читало | читали |
| писати | писав | писала | писало | писали |
| могти | міг | могла | могло | могли |
| іти | ішов / йшов | ішла / йшла | ішло | ішли |
So я, ти, він all share читав when the speaker or subject is male, and я, ти, вона share читала when female. In the plural and with polite ви — always -ли: <i>Ви були в Києві?</i>
## The future: three options
- Imperfective, two words: <b>буду, будеш, буде, будемо, будете, будуть</b> + infinitive: я буду читати.
- Imperfective, one word: infinitive + <b>-му, -меш, -ме, -мемо, -мете, -муть</b>: читатиму, читатимеш. Same meaning, slightly more written.
- Perfective: conjugate the perfective verb like a present: прочитаю, напишеш, зробимо (topic V3).
## The most common mistake
буду combines only with imperfective verbs. <s>Я буду прочитати</s> → <i>Я прочитаю</i> (I'll finish reading it) or <i>Я буду читати</i> (I'll be reading).
! The past of -ся verbs keeps -ся in the masculine and -ся / -сь in the others: <i>він сміявся, вона сміялася (сміялась)</i>.`,
V3:`## Why aspect matters
English marks “was doing / did / have done” with tenses. Ukrainian marks it with two different verbs. Every time you talk about the past or the future, you choose a verb, not just a tense.
| Imperfective (process) | Perfective (result) |
| писати — write, be writing | написати — write (and finish) |
| читати | прочитати |
| робити | зробити |
| купувати | купити |
| давати | дати |
| брати | взяти |
| говорити | сказати |
## How to choose
| Imperfective | Perfective |
| the action in progress: Я писав лист, коли ти подзвонив. | one completed action: Я написав лист. |
| habit, repetition: щодня, часто, завжди | a single time, a result: нарешті, вже, раз |
| duration: дві години, цілий вечір | a sequence of events: прийшов, сів, написав |
| general fact: Ти читав цю книжку? (have you ever) | completion: Ти прочитав цю книжку? (did you finish) |
## Tenses each aspect has
| | Imperfective | Perfective |
| past | писав | написав |
| present | пишу | — |
| future | буду писати / писатиму | напишу |
## Imperatives
Imperfective for invitations and ongoing instructions (<i>Сідайте!</i>), perfective for a specific one-time request (<i>Напишіть, будь ласка, ваше ім'я</i>). Negative imperatives are usually imperfective: <i>Не пиши йому!</i>
! Learn verbs in pairs from day one: писати / написати, купувати / купити. A dictionary entry like «робити (недок.) — зробити (док.)» gives you both.`,
V4:`## What -ся does
- Reflexive: the action is done to oneself: <i>вмиватися</i> (wash oneself), <i>одягатися</i> (get dressed).
- Reciprocal: to each other: <i>зустрічатися, цілуватися, листуватися</i>.
- Verbs that only exist with -ся: <i>сміятися, боятися, намагатися, посміхатися</i>.
- Passive / general: <i>Магазин відкривається о дев'ятій.</i> <i>Як це пишеться?</i>
## Forms
| | вчитися | сміятися |
| я | вчуся | сміюся |
| ти | вчишся | смієшся |
| він / вона | вчиться | сміється |
| ми | вчимося | сміємося |
| ви | вчитеся | смієтеся |
| вони | вчаться | сміються |
Past: <i>вчився, вчилася, вчилося, вчилися</i>. Spelling note: -ться sounds like [ttsʲa], but it is always written -ться.
## подобатися
The thing you like is the subject, the person who likes is in the dative:
| Ukrainian | Literally | Meaning |
| Мені подобається кава. | Coffee pleases me. | I like coffee. |
| Мені подобаються квіти. | Flowers please me. | I like flowers. |
| Їй подобався фільм. | The film pleased her. | She liked the film. |
| Тобі подобається грати? | Playing pleases you? | Do you like playing? |
For people and strong preferences, <b>любити</b> (кого? що?) is also common: <i>Я люблю каву.</i>
! вчити = teach or learn something (вчити слова), вчитися = study (вчитися в університеті). Both are correct; just keep the object in mind.`,
V5:`## Passive participles: -ний, -тий
They work like adjectives and agree with the noun: <i>написаний лист, написана книжка, написане слово, написані тексти</i>.
| Verb | Participle | Example |
| написати | написаний | написаний лист |
| зачинити | зачинений | зачинені двері |
| вимити | вимитий | вимитий посуд |
| збудувати | збудований | будинок, збудований у 1990 році |
## The -но / -то form
A short impersonal form, very typical of Ukrainian official style: <i>Лист написано. Роботу виконано. Двері зачинено.</i> It replaces the English passive “has been done”.
## Adverbial participles
| Form | Meaning | Example |
| -учи, -ючи (imperfective) | while doing | <i>Читаючи, він заснув.</i> |
| -вши (perfective) | having done | <i>Прочитавши лист, вона засміялася.</i> |
They don't change, and their subject must be the subject of the sentence.
## Avoid active participles
Forms like <s>працюючий, відпочиваючий, слідуючий</s> are Russian calques in Ukrainian. Use a clause or another word: люди, які працюють; відпочивальники; наступний.
! These forms belong to written language. In conversation, a clause with який or коли sounds more natural.`,
M1:`## Formation
Start from the present stem (the вони form without -уть / -ють, -ать / -ять).
| Infinitive | вони | ти | ви | ми (let's) |
| читати | читають | читай | читайте | читаймо |
| стояти | стоять | стій | стійте | стіймо |
| писати | пишуть | пиши | пишіть | пишімо |
| говорити | говорять | говори | говоріть | говорімо |
| сісти | сядуть | сядь | сядьте | сядьмо |
| бути | — | будь | будьте | будьмо |
## Politeness
- Use the ви forms with strangers, colleagues and older people.
- Add <b>будь ласка</b>: <i>Скажіть, будь ласка, котра година?</i>
- Softer requests: <i>Чи не могли б ви…?</i> (topic M4).
## Let's
The -ймо / -імо form is the natural “let's”: <i>Ходімо! Почнімо! Зробімо це разом.</i> <i>Давайте зробимо</i> is common in speech but is a Russian calque in writing.
## Imperatives you'll hear everywhere
Ходи сюди! Зачекай! Слухай! Дивись! Не хвилюйся! Будь ласка, проходьте. Сідайте!
! -ите instead of -іть (<s>скажите, пишите</s>) is the most typical Russian-influenced error. Ukrainian: скажіть, пишіть, робіть.`,
M2:`## Two pairs of verbs
| | one direction, now, once | habit, round trip, ability |
| on foot | йти (іти) | ходити |
| by transport | їхати | їздити |
## Forms
| | йти | ходити | їхати | їздити |
| я | йду | ходжу | їду | їжджу |
| ти | йдеш | ходиш | їдеш | їздиш |
| він / вона | йде | ходить | їде | їздить |
| ми | йдемо | ходимо | їдемо | їздимо |
| ви | йдете | ходите | їдете | їздите |
| вони | йдуть | ходять | їдуть | їздять |
Past: йшов, йшла / ходив, ходила; їхав, їхала / їздив, їздила.
## How to choose
- <i>Я йду в магазин</i> — I'm on my way to the shop now.
- <i>Я часто ходжу в магазин</i> — I go to the shop often.
- <i>Вчора я ходив у магазин</i> — I went to the shop yesterday (and came back).
- <i>Я їду в Київ</i> — I'm travelling to Kyiv (now / soon).
- <i>Ми щороку їздимо на море</i> — we go to the seaside every year.
## With transport and destinations
Куди? + accusative (topic N2): у Київ, на роботу, до бабусі (до + genitive). How: пішки (on foot), автобусом, поїздом, машиною (instrumental, topic N4), or на автобусі.
! English “go” covers all four verbs. Ask two questions: on foot or by transport? one trip now, or regular / there and back?`,
M3:`## Prefixes and their meanings
| Prefix | Meaning | On foot | By transport |
| при- | arrive | прийти | приїхати |
| ви- | go out, leave a place | вийти | виїхати |
| у- / в- | go in | увійти | в'їхати |
| пере- | cross | перейти | переїхати (also: move house) |
| до- | reach | дійти | доїхати |
| від- | move away | відійти | від'їхати |
| за- | drop in | зайти | заїхати |
| під- | approach | підійти | під'їхати |
| об- | go around | обійти | об'їхати |
| — | leave, set off | піти | поїхати |
After a prefix ending in a consonant, йти becomes -ійти (увійти, підійти); їхати gets an apostrophe (в'їхати, під'їхати).
## Aspect pairs
Prefixed verbs from йти / їхати are perfective; from ходити / їздити imperfective:
- <i>Я прийду о шостій</i> (once, future) / <i>Він завжди приходить вчасно</i> (habit).
- <i>Ми виїхали о восьмій</i> / <i>Ми виїжджаємо щоранку о восьмій.</i>
## Past forms
прийшов, прийшла, прийшли; пішов, пішла, пішли; увійшов, увійшла.
## Other motion verbs
The same prefixes work with нести (carry), везти (transport), бігти (run): <i>принести, привезти, прибігти; винести, перевезти, вибігти.</i>
! пішов (left) vs прийшов (arrived) is the most frequent pair in stories: <i>Він прийшов о сьомій і пішов о десятій.</i>`,
M4:`## Formation
Past tense + the particle <b>би</b> or <b>б</b>:
- <b>б</b> after a vowel: <i>я б хотіла, вона б прийшла, ми б поїхали</i>;
- <b>би</b> after a consonant: <i>я хотів би, він прийшов би</i>.
The particle can go before or after the verb: <i>я б пішов</i> = <i>я пішов би</i>.
## Unreal conditions
| Condition | Result |
| Якби я мав час, | я поїхав би на море. |
| Якби ти сказав раніше, | я б допоміг. |
Ukrainian doesn't distinguish “If I had” from “If I had had”: the same form covers present and past, and context decides. <i>Якби я знав…</i> = “If I knew…” or “If I had known…”.
## Real conditions
Use <b>якщо</b> with the present or future: <i>Якщо буде гарна погода, ми підемо в парк.</i> Never якщо + би.
## Politeness and wishes
- <i>Я хотів би / хотіла б…</i> — I'd like…
- <i>Чи не могли б ви…?</i> — Could you…?
- <i>Було б добре…</i> — It would be good…
- <i>Я б на твоєму місці…</i> — If I were you, I'd…
## щоб
The same past form follows щоб (so that): <i>Я хочу, щоб ти прийшов.</i> (topic S2)
! The past form in the conditional still agrees with gender: a woman says <i>я хотіла б</i>, a man <i>я хотів би</i>.`,
M5:`## Impersonal words + dative
| Word | Meaning | Example |
| треба, потрібно | need to, have to | Мені треба йти. |
| можна | may, it's allowed | Можна увійти? |
| не можна | mustn't, not allowed | Тут не можна палити. |
| слід | ought to (formal) | Вам слід відпочити. |
| варто | it's worth, should | Тобі варто прочитати цю книжку. |
| доводиться | have to (unwillingly) | Мені доводиться рано вставати. |
The person goes in the dative (мені, тобі, йому, нам…), the action in the infinitive.
## Personal verbs and words
- <b>мусити</b>: strong obligation: <i>Я мушу йти.</i>
- <b>мати</b> + infinitive: plan or duty: <i>Я маю зателефонувати мамі.</i> <i>Поїзд має прибути о сьомій.</i>
- <b>могти</b>: can, be able: <i>Я можу, ти можеш, він може.</i> Past: міг, могла.
- <b>вміти</b>: know how to: <i>Я вмію плавати.</i>
- <b>повинен, повинна, повинне, повинні</b>: should, must; agrees with the subject: <i>Ти повинна відпочити.</i>
## потрібний as an adjective
<i>Мені потрібна допомога</i> (I need help): потрібний agrees with the thing needed.
! можу = I'm able to; вмію = I know how; можна = it's permitted. <i>Я вмію плавати, але сьогодні не можу — тут не можна.</i>`,
N1:`## Gender
| | Masculine | Feminine | Neuter |
| typical ending | consonant, -й | -а, -я | -о, -е, -я (-ання, -ття) |
| examples | стіл, брат, музей, кінь | мама, книжка, земля | вікно, море, завдання, життя |
| traps | тато, дядько (-о, but male) | ніч, сіль, любов, радість (-ь) | ім'я, курча (-я) |
Words ending in -ь can be masculine (день, кінь) or feminine (ніч, сіль, радість) — learn them with an adjective: <i>новий день, темна ніч</i>.
## Plural (nominative)
| | Singular | Plural |
| masc. hard | стіл, брат | столи, брати |
| masc. soft / -й | кінь, музей | коні, музеї |
| fem. -а / -я | книжка, земля | книжки, землі |
| neut. -о / -е | вікно, море | вікна, моря |
| neut. -ння | завдання | завдання |
Some irregular plurals: друг → друзі, людина → люди, дитина → діти, око → очі.
## No articles
<i>книжка</i> = a book or the book. If you need “this” or “one”: цей, один: <i>Ця книжка цікава.</i>
## це
<i>Це</i> introduces things regardless of gender and number: <i>Це мій брат. Це моя мама. Це мої друзі.</i> Compare the demonstrative that agrees: <i>цей стіл, ця книжка, це вікно, ці книжки</i>.
! Gender isn't decoration: it decides the form of adjectives, possessives, past-tense verbs and numbers. Always learn a new noun with мій / моя / моє.`,
N2:`## One preposition, two cases
| Question | Case | Example |
| Де? (where) | locative | Я в Києві. Книжка на столі. |
| Куди? (where to) | accusative | Я їду в Київ. Поклади книжку на стіл. |
## Locative endings (singular)
| | Ending | Example |
| most nouns | -і | у місті, на столі, у Києві, у школі |
| г, к, х → з, ц, с | -і | на нозі, у руці (topic O3) |
| some short masc. | -у | на мосту, у саду, на льоду |
| neut. -ння | -і | у завданні |
Plural: <b>-ах / -ях</b>: у містах, на роботах.
## Accusative endings (singular)
| | Nominative | Accusative |
| fem. -а | книжка, мама | книжку, маму |
| fem. -я | земля | землю |
| fem. -ь | ніч | ніч (same) |
| masc. thing | стіл, Київ | стіл, Київ (same) |
| masc. person / animal | брат, кіт | брата, кота (like genitive) |
| neut. | вікно | вікно (same) |
## у / в or на
<b>на</b> goes with open spaces, events, surfaces and some fixed places: на вулиці, на концерті, на роботі, на пошті, на ринку, на вокзалі, на морі, на Закарпатті. Most buildings, cities and countries take у / в: у школі, в Україні, у Франції. Learn на-words as a list.
! Watch euphony: в after a vowel, у after a consonant (topic O2): <i>Я живу в Києві. Брат живе у Львові.</i>`,
N3:`## When to use the genitive
- Absence: <b>немає</b> (нема, не було, не буде) + genitive: <i>Немає часу. Не було води.</i>
- Quantity: багато, мало, кілька, скільки, кілограм, склянка + genitive: <i>багато людей, кілограм яблук.</i>
- Possession and “of”: <i>книжка брата, центр міста, кінець фільму.</i>
- Prepositions: <b>без, для, до, з / із / зі</b> (from), <b>від, біля, після, крім, замість, навколо</b>.
- Dates: <i>першого травня</i>; negation with some verbs: <i>я не бачив фільму / фільм</i>.
## Singular endings
| | Nominative | Genitive |
| fem. -а | вода, мама | води, мами |
| fem. -я, -ь | земля, ніч | землі, ночі |
| neut. | вікно, море | вікна, моря |
| masc. people, objects | брат, стіл | брата, стола |
| masc. substances, abstract, places | час, цукор, ліс | часу, цукру, лісу |
The -а / -у choice for masculine nouns is one of the hardest points of Ukrainian; a dictionary always gives it: «стіл, -у / -а».
## Plural
Endings vary: <b>-ів</b> (братів, студентів), zero ending (книжок, сестер, вікон, міст), <b>-ей</b> (людей, гостей). Learn them with numbers (topic S3): п'ять книжок, десять студентів.
! до + genitive means “to” a person's place or an object: <i>до бабусі, до лікаря, до вокзалу.</i> It's also the most natural way to say “to” for people: <i>Я йду до друга.</i>`,
N4:`## Uses
| Use | Example |
| with someone / something (з) | з другом, з мамою, кава з молоком |
| instrument, means | писати ручкою, їхати автобусом |
| role, profession | працювати лікарем, бути вчителькою, стати інженером |
| location with над, під, перед, за, між | над столом, під деревом, перед будинком |
| time | вранці, ввечері, взимку (fixed adverbs from this case) |
| with some verbs | цікавитися музикою, займатися спортом, пишатися сином |
## Endings
| | Nominative | Instrumental sing. | Instrumental pl. |
| masc. hard | брат, стіл | братом, столом | братами |
| masc. soft | вчитель, музей | вчителем, музеєм | вчителями |
| fem. -а | мама, книжка | мамою, книжкою | мамами |
| fem. -я | земля | землею | землями |
| fem. -ь | ніч, радість | ніччю, радістю | ночами |
| neut. | вікно, море | вікном, морем | вікнами |
Feminine -ь nouns double the consonant: ніч → ніччю, сіль → сіллю, радість → радістю.
## Pronouns
мною, тобою, ним, нею, нами, вами, ними: <i>Ходімо зі мною! Я говорив з нею.</i>
! The English “as” in “work as a doctor” has no word in Ukrainian: just the instrumental: <i>працювати лікарем.</i> <i>як лікар</i> means “like a doctor”.`,
N5:`## Uses of the dative
- Recipient: давати, дарувати, писати, телефонувати, показувати, пояснювати <b>кому</b>: <i>Я покажу тобі місто.</i>
- Verbs with the dative in Ukrainian but a direct object in English: <b>допомагати</b> (help), <b>дякувати</b> (thank), <b>заважати</b> (disturb), <b>вірити</b> (believe), <b>радити</b> (advise).
- States, age, liking: <i>Мені холодно. Мені тридцять років. Мені подобається.</i>
- Necessity: <i>Мені треба…</i> (topic M5). Prepositions: <b>до</b> doesn't take it; <b>завдяки</b> (thanks to), <b>всупереч</b> do.
## Endings
| | Nominative | Dative sing. | Dative pl. |
| masc. | брат, вчитель | братові / брату, вчителеві / вчителю | братам, вчителям |
| fem. -а / -я | мама, земля | мамі, землі | мамам, землям |
| fem. -ь | ніч | ночі | ночам |
| neut. | вікно, море | вікну, морю | вікнам, морям |
For masculine people, -ові / -еві is preferred, especially when two datives meet: <i>Іванові Петровичу</i>.
## The full system
| Case | Question | мама | брат | вікно |
| називний | хто? що? | мама | брат | вікно |
| родовий | кого? чого? | мами | брата | вікна |
| давальний | кому? чому? | мамі | братові | вікну |
| знахідний | кого? що? | маму | брата | вікно |
| орудний | ким? чим? | мамою | братом | вікном |
| місцевий | на кому? на чому? | (на) мамі | (на) братові | (на) вікні |
| кличний | — | мамо! | брате! | вікно! |
! The questions in the second column are what Ukrainian children learn; asking them is the fastest way to pick the right case.`,
P1:`## Personal pronouns
| | Singular | Plural |
| 1st | я | ми |
| 2nd | ти | ви (also polite “you”) |
| 3rd | він (m), вона (f), воно (n) | вони |
<b>він / вона</b> also replace things according to grammatical gender: <i>Де книжка? — Вона на столі.</i> <i>Де стіл? — Він там.</i>
## Possessives that agree with the noun
| | masc. | fem. | neut. | plural |
| my | мій | моя | моє | мої |
| your (ти) | твій | твоя | твоє | твої |
| our | наш | наша | наше | наші |
| your (ви) | ваш | ваша | ваше | ваші |
| their | їхній | їхня | їхнє | їхні |
| one's own | свій | своя | своє | свої |
## Possessives that never change
<b>його</b> (his, its) and <b>її</b> (her): <i>його сестра, його брат, його діти; її машина, її будинок.</i>
## Polite ви
In writing, polite <i>Ви, Вас, Ваш</i> may be capitalised in letters to one person. In speech, ви with the plural verb: <i>Ви знаєте?</i> The past tense also goes into the plural: <i>Ви були вчора вдома?</i>
! Possessives agree with the thing owned: Олена's brother is <i>її брат</i>, Ivan's sister is <i>його сестра</i>, my book is <i>моя книжка</i> whoever “I” am.`,
P2:`## Hard and soft groups
| | masc. | fem. | neut. | plural |
| hard: новий | новий | нова | нове | нові |
| soft: синій | синій | синя | синє | сині |
Soft adjectives are few: синій, літній, осінній, вечірній, ранній, пізній, давній, сусідній, справжній, крайній. Most adjectives are hard.
## Position and agreement
The adjective comes before the noun and copies its gender, number and case: <i>цікавий фільм, цікава книжка, цікаве місто, цікаві люди; у новому місті, з новою подругою</i>.
## Short adverbs
From adjectives: <b>-о</b> (hard) or <b>-е</b> (some): швидкий → швидко, повільний → повільно, добрий → добре, гарний → гарно. <i>Вона гарно співає.</i>
## Possessive adjectives
From names: <i>мамин телефон, батькова машина, Оленина сумка</i> (-ин, -ів) — very common in everyday speech.
! In cases, adjective endings follow their own table (нового, новому, новим, на новому…). Learning them together with the noun is easier: <i>у новому будинку, з новою подругою</i>.`,
P3:`## Personal pronouns in all cases
| | я | ти | він | вона | ми | ви | вони |
| nom. | я | ти | він | вона | ми | ви | вони |
| gen. | мене | тебе | його (нього) | її (неї) | нас | вас | їх (них) |
| dat. | мені | тобі | йому | їй | нам | вам | їм |
| acc. | мене | тебе | його (нього) | її (неї) | нас | вас | їх (них) |
| instr. | мною | тобою | ним | нею | нами | вами | ними |
| loc. | (на) мені | (на) тобі | (на) ньому | (на) ній | (на) нас | (на) вас | (на) них |
## The н- after prepositions
After a preposition, 3rd-person forms start with н: <i>у нього, до неї, без них, про нього, з ним, на ній</i>. Without a preposition: <i>я бачу його, я знаю її</i>.
## Typical patterns
- <i>У мене є…</i> (I have, topic S4), <i>Мене звати…</i> (my name is).
- <i>Мені подобається…</i> (I like, topic V4), <i>Мені треба…</i> (I need to).
- <i>Зі мною, з тобою</i> — with me, with you; <i>для мене</i> — for me.
## Word order
Unstressed pronouns usually come before the verb: <i>Я тебе люблю. Я йому скажу.</i> Putting them after the verb adds emphasis: <i>Я люблю тебе.</i>
! Many verbs choose a different case than English expects: дзвонити тобі (call you), допомагати йому (help him), дякувати вам (thank you).`,
P4:`## Synthetic forms
| Adjective | Comparative | Superlative |
| новий | новіший | найновіший |
| гарний | гарніший | найгарніший |
| дешевий | дешевший | найдешевший |
| короткий | коротший | найкоротший |
| дорогий | дорожчий | найдорожчий |
| великий | більший | найбільший |
| малий | менший | найменший |
| добрий, гарний | кращий (ліпший) | найкращий |
| поганий | гірший | найгірший |
Consonant changes: г → ж (дорогий → дорожчий), к → ч, з / зь → ж (вузький → вужчий).
## Analytic forms
<b>більш / менш</b> + adjective, <b>найбільш / найменш</b> + adjective: <i>більш зручний, найбільш популярний.</i> Use one method, never both: <s>більш старший</s>.
## “Than”
- <b>ніж</b> + nominative: <i>Брат старший, ніж я.</i>
- <b>за</b> + accusative: <i>Брат старший за мене.</i>
- <b>від</b> + genitive (spoken): <i>старший від мене.</i>
## Adverbs and intensifiers
швидко → швидше → найшвидше; добре → краще → найкраще. Stronger: <i>набагато кращий, значно дешевший.</i> Superlative of all: <i>найкращий з усіх.</i>
! <s>самий кращий</s>, <s>самий цікавий</s> are Russian calques. Ukrainian uses най-: найкращий, найцікавіший.`,
P5:`## свій
<b>свій</b> refers back to the subject of the clause and means “(one's) own”:
| Sentence | Meaning |
| Олена любить свою роботу. | her own job |
| Олена любить її роботу. | another woman's job |
| Ми продаємо свою машину. | our own car (наша машина also possible) |
| Візьми свою сумку! | your own bag |
With я, ти, ми, ви both свій and мій / твій / наш / ваш are possible; with він, вона, вони, свій is needed for “own”.
## себе
The reflexive pronoun has no nominative: себе (gen. / acc.), собі (dat. / loc.), собою (instr.): <i>Він думає про себе. Купи собі щось. Візьми з собою парасольку.</i>
## Indefinite and negative words
| some- (-сь) | any- (будь-, -небудь) | no- (ні-) + не |
| хтось | будь-хто, хто-небудь | ніхто не |
| щось | будь-що | нічого не |
| десь | будь-де | ніде не |
| колись | будь-коли | ніколи не |
## весь, кожен
весь, вся, все, всі (all, whole): <i>весь день, вся сім'я, всі люди.</i> кожен, кожна, кожне (every): <i>кожен день, кожного дня.</i>
! Using його / її instead of свій is the most common mistake: <i>Петро зателефонував своїй мамі</i> — his own mum; <i>його мамі</i> — someone else's.`,
O1:`## The letters that differ from Latin and Russian
| Letter | Sound | Example |
| и | [ɪ], like “i” in “bit” | ти, мир |
| і | [i], like “ee” | дім, ліс |
| ї | [ji] | їжа, Україна |
| є | [je] | є, моє |
| г | [ɦ], a voiced “h” | гора, голова |
| ґ | [g], hard “g” | ґанок, ґудзик |
| щ | [ʃtʃ] | що, борщ |
| ь | softens the consonant | день, сіль |
| ' | separates, no softening | п'ять, сім'я |
## и or і
Reading: и is a short, central sound; і is a clear “ee”. Spelling: they distinguish words: <i>дим</i> (smoke) / <i>дім</i> (house), <i>кит</i> (whale) / <i>кіт</i> (cat). When in doubt, check a dictionary such as Горох.
## The apostrophe
Write an apostrophe before я, ю, є, ї:
- after labials <b>б, п, в, м, ф</b>: п'ять, м'ясо, сім'я, в'язати, б'ю;
- after <b>р</b> at the end of a syllable: пір'я, бур'ян;
- after a prefix ending in a consonant: від'їзд, з'їсти, під'їзд.
No apostrophe if a consonant (other than р) comes before the labial: <i>свято, цвях, дзвякнути</i>, and before ю / я that mark softness: <i>рюкзак, буряк</i>.
## Pronunciation tips
- Ukrainian vowels aren't reduced: <i>молоко</i> is [mɔlɔˈkɔ], every о is clear.
- в at the end of a word or before a consonant sounds like a short [u]: <i>Львів</i> [lʲwiw].
! On a keyboard, type the apostrophe as ' or ’. The site accepts both in exercises.`,
O2:`## у or в
| Position | Choose | Example |
| after a vowel, before a consonant | в | Вона в місті. Мама в лікарні. |
| between vowels | в | Вона в Одесі. Мама в офісі. |
| after a consonant, before a consonant | у | Брат у місті. |
| at the start of a sentence, before a consonant | у | У мене є питання. |
| before в, ф, льв, св, тв, хв | у | у Львові, у Франції, у вівторок, у світі |
| after a pause (comma, dash) before a consonant | у | Він, у свою чергу, … |
The same choice applies to words that begin with у / в: <i>учитель / вчитель, удома / вдома, уже / вже.</i>
## і or й
- <b>й</b> after a vowel before a consonant or vowel: <i>мама й тато, Петро й Олена</i>.
- <b>і</b> after a consonant, at the start of a sentence, before й, є, ю, я, ї: <i>брат і сестра, Олена і Ярослав</i>.
## з, із, зі
- <b>з</b> by default: <i>з мамою, з Києва, з другом</i>.
- <b>із</b> between sibilants (з, с, ц, ч, ш, щ, ж): <i>брат із сестрою, ніж із шухляди</i>.
- <b>зі</b> before з, с, ш, щ + consonant: <i>зі школи, зі мною, зі сходу</i>.
## Why it matters
Euphony is part of the official spelling rules, and it's what makes Ukrainian sound fluid. In speech it happens naturally; in writing, check it consciously.
! A quick self-check: avoid two vowels or two consonants meeting across the small word. <i>Вона в місті</i>: а-в-м, smooth. <i>Брат у місті</i>: т-у-м, smooth.`,
O3:`## і ↔ о, е
In many words, a closed syllable (ending in a consonant) has і, while the open syllable in other forms has о or е:
| Closed (і) | Open (о / е) |
| кінь | коня, коні |
| ніч | ночі |
| сіль | солі |
| стіл | стола, столи |
| піч | печі |
| Київ | Києва |
| шість | шести |
This also explains genitive plurals: гора → гір, нога → ніг, школа → шкіл.
## г, к, х → з, ц, с
Before the ending -і (dative and locative of feminine nouns, locative of some masculine nouns):
| Word | Change | Example |
| нога | г → з | на нозі |
| Прага | г → з | у Празі |
| рука | к → ц | у руці |
| сумка | к → ц | у сумці |
| муха | х → с | на мусі |
| поверх | х → с | на поверсі |
## Consonant changes in verbs
| Infinitive | я form | Change |
| ходити | ходжу | д → дж |
| просити | прошу | с → ш |
| возити | вожу | з → ж |
| платити | плачу | т → ч |
| писати | пишу | с → ш |
| плакати | плачу | к → ч |
## Dropped vowels
Some о / е disappear when an ending is added: <i>день — дня, сон — сну, вітер — вітру, палець — пальця</i>.
! These changes are regular enough to guess, but a dictionary listing like «кінь, коня» shows them at once.`,
O4:`## Endings
| Group | Nominative | Vocative |
| fem. -а | Олена, мама, Ольга | Олено, мамо, Ольго |
| fem. -я after a consonant | Галя, Надя | Галю, Надю |
| fem. -ія | Марія, Наталія | Маріє, Наталіє |
| masc. hard | Іван, Тарас, пан, брат | Іване, Тарасе, пане, брате |
| masc. after к, г, х | друг, козак | друже, козаче |
| masc. soft / -й | Андрій, Ігор, вчитель | Андрію, Ігорю, вчителю |
| masc. -о | Петро, Дмитро | Петре, Дмитре |
| diminutives in -ко, -чик | Сашко, Михасик | Сашку, Михасику |
| пані | пані | пані (no change) |
## In speech
<i>Мамо, де мій телефон? Андрію, ходи сюди! Дякую, друже!</i> Using the nominative (<i>Андрій, ходи сюди</i>) is heard in some cities, but the vocative is the standard and sounds warmer.
## In letters and formal address
- <i>Шановний пане Іване!</i> / <i>Шановна пані Олено!</i>
- With a patronymic both words change: <i>Іване Петровичу, Олено Миколаївно</i>.
- In email: <i>Доброго дня, пане Андрію!</i>
## With titles
<i>пане директоре, пані професорко, друзі!</i> (plural vocative = nominative).
! Getting someone's name right in the vocative is one of the most noticed signs of respect for the language.`,
O5:`## Doubled consonants
- Neuter nouns in -ння, -ття, -сся, -ччя, -лля, -ддя, -ззя: <i>знання, життя, волосся, обличчя, весілля, суддя</i>.
- But not in the genitive plural: <i>знань, питань, облич.</i>
- At a boundary between prefix / root / suffix: <i>віддати, беззахисний, оббити, письменник, щоденний, іменний</i>.
- In adjectives in -нний: <i>осінній, щоденний, туманний</i>.
## The soft sign
Write ь after д, т, з, с, ц, л, н:
- at the end of a word: <i>день, мідь, сіль, кінь</i>;
- before о: <i>сьогодні, льон, дзьоб</i>;
- in suffixes -ськ-, -цьк-, -зьк-: <i>український, козацький</i>.
Never after ж, ч, ш, щ, р (at the end): <i>ніч, борщ, лікар.</i>
## Hyphen
- будь-, -небудь, казна-, хтозна-: <i>будь-хто, хто-небудь, казна-що.</i>
- Repeated or paired words: <i>ледве-ледве, біло-синій.</i>
- пів with a vowel or proper name follows special rules — check a dictionary.
## Capital letters
Lower case for days (понеділок), months (січень), languages (українська мова), nationalities (українці, англієць), and holidays' common words (Новий рік — capital only on the first word).
! The best habit: when a word looks unusual, look it up in Горох (goroh.pp.ua), which also shows stress and all its forms.`,
S1:`## Word order
Endings show who does what, so word order is freer than in English. The neutral order is still subject – verb – object: <i>Олена читає книжку.</i> Moving a word to the end gives it emphasis: <i>Книжку читає Олена</i> (it's Olena who reads it).
## Questions
| Type | Example |
| yes / no with чи | Чи ти говориш українською? |
| yes / no with intonation | Ти говориш українською? |
| question word | Де ти живеш? Куди ти йдеш? Звідки ти? |
Main question words: <b>хто</b> (who), <b>що</b> (what), <b>який</b> (which), <b>чий</b> (whose), <b>де</b> (where), <b>куди</b> (where to), <b>звідки</b> (where from), <b>коли</b> (when), <b>чому / навіщо</b> (why / what for), <b>як</b> (how), <b>скільки</b> (how much / many).
## Negation
- <b>не</b> before the word it negates: <i>Я не знаю. Не я, а він.</i>
- <b>ні</b> = no (answer) and “neither … nor”: <i>Ні, дякую. Ні він, ні вона.</i>
- <b>немає / нема</b> + genitive = there isn't: <i>Тут немає кави.</i>
## Double negation
Negative words <b>need</b> не with the verb — the opposite of standard English:
| Ukrainian | English |
| Ніхто не прийшов. | Nobody came. |
| Я нічого не знаю. | I don't know anything. |
| Він ніколи не запізнюється. | He's never late. |
| Ми ніде не були. | We haven't been anywhere. |
! Answering a negative question: <i>Ти не голодний? — Ні</i> (= no, I'm not hungry) / <i>— Так, голодний</i> (= yes, I am).`,
S2:`## Main conjunctions
| Word | Meaning | Example |
| що | that | Я знаю, що він прийде. |
| який / яка / яке / які | who, which | людина, яка мені допомогла |
| де, куди, коли | where, when | місто, де я народився |
| бо, тому що | because | Я не прийшов, бо хворів. |
| тому | so, that's why | Я хворів, тому не прийшов. |
| щоб | so that, in order to | Я прийшов, щоб допомогти. |
| якщо | if (real) | Якщо хочеш, приходь. |
| але, а | but, while | Я хочу, але не можу. |
## який
It takes the gender and number of the noun it refers to, and the case of its role in its own clause:
- <i>фільм, <b>який</b> я дивився</i> (masc., object);
- <i>дівчина, <b>якій</b> я подзвонив</i> (fem., дзвонити кому);
- <i>друзі, <b>з якими</b> я живу</i> (pl., instrumental).
## щоб
- Same subject → infinitive: <i>Я прийшов, щоб допомогти.</i>
- Different subject → past form: <i>Я хочу, щоб ти прийшов. Мама просить, щоб ми не запізнювалися.</i>
## Commas
In Ukrainian, every subordinate clause is separated by a comma: <i>Я думаю, що… Людина, яка… Я не знаю, коли…</i> This is stricter than in English.
! тому що and бо both mean “because”; бо is shorter and very common. Don't confuse тому що (because) with тому (that's why): <i>Я хворів, тому не прийшов.</i>`,
S3:`## Numbers and nouns
| Number | Noun form | Example |
| 1, 21, 31… (один, одна, одне) | nominative singular | один брат, одна книжка, двадцять один студент |
| 2, 3, 4, 22… (два / дві, три, чотири) | nominative plural | два брати, дві сестри, три книжки |
| 5–20, 25… | genitive plural | п'ять братів, десять книжок, одинадцять років |
два is for masculine and neuter, дві for feminine: <i>два столи, два вікна, дві книжки.</i>
## рік: years and age
| | |
| 1 | рік |
| 2–4 | роки |
| 5–20 | років |
<i>Мені двадцять один рік. Йому тридцять два роки. Їй сорок п'ять років.</i>
## Time
- <b>Котра година?</b> — Перша, друга, третя… (ordinals, feminine because година is feminine).
- <b>О котрій?</b> — о першій, о сьомій, о дев'ятій тридцять.
- Half past: <i>пів на третю</i> (2:30, literally “half to the third”). Quarter: <i>чверть на третю</i> (2:15), <i>за чверть третя</i> (2:45).
## Dates
<i>Сьогодні перше травня.</i> On a date: genitive: <i>першого травня, двадцять четвертого серпня.</i> Years: <i>у дві тисячі двадцять п'ятому році.</i>
! Numbers are the place where everyone hesitates, even native speakers. In speech, the noun form after the number matters more than the exact number ending.`,
S4:`## have
| Ukrainian | Literally | Meaning |
| У мене є брат. | At me there is a brother. | I have a brother. |
| У тебе є машина? | At you there is a car? | Do you have a car? |
| У нас немає часу. | At us there is no time. | We don't have time. |
| У нього було двоє дітей. | At him there were two children. | He had two children. |
The verb <b>мати</b> also exists (<i>Я маю брата</i>) and is fine, but у мене є is more natural in everyday speech.
## States: dative + adverb
<i>Мені холодно, тобі жарко, нам весело, їй сумно, мені погано, мені нудно.</i> Past and future: <i>Мені було холодно. Тобі буде цікаво.</i>
## Age and names
- <i>Скільки тобі років? — Мені двадцять п'ять (років).</i>
- <i>Як тебе / вас звати? — Мене звати Олена.</i> Also: <i>Моє ім'я Олена.</i>
## Weather and impersonal sentences
<i>Надворі тепло. Сьогодні хмарно. Темніє. Пахне кавою.</i> No “it” is needed.
## Need
<i>Мені потрібна допомога. Мені потрібен / потрібний час. Мені потрібно / треба йти.</i> The word agrees with the thing needed.
! English “I am cold” word for word (<s>Я холодний</s>) means “I'm a cold person”. For feelings, always use the dative.`,
S5:`## Calques to avoid
Many expressions copied from Russian are common in speech but count as mistakes in standard Ukrainian:
| Avoid | Use | Meaning |
| приймати участь | брати участь | take part |
| на протязі | протягом | during, for |
| слідуючий | наступний | next |
| в залежності від | залежно від | depending on |
| згідно наказу | згідно з наказом | according to the order |
| вибачаюсь | вибачте, перепрошую | sorry |
| давайте зробимо | зробімо | let's do |
| являтися | бути, є | to be |
| самий кращий | найкращий | the best |
| на рахунок | щодо | regarding |
| по питанню | з питання | on the issue of |
| співпадати | збігатися | coincide |
## Punctuation
- A dash between two nouns when the link verb is missing: <i>Київ — столиця України. Моя мама — лікарка.</i>
- Quotation marks « » (and „ “ inside).
- A comma before що, який, бо, але, а, щоб, коли, якщо in complex sentences.
- No space before ? ! : ; and the apostrophe sits inside the word: <i>п'ять</i>.
## Register
| Neutral | Formal |
| треба | необхідно, слід |
| зробити | здійснити, виконати |
| дати | надати |
| через | у зв'язку з |
| Дякую! | Щиро дякую за… |
## Feminine job titles
Modern Ukrainian readily forms feminine titles: <i>лікарка, вчителька, директорка, авторка, менеджерка.</i> In formal documents both forms are used.
! If a phrase sounds “like Russian with Ukrainian letters”, look it up. Sites such as onlinecorrector.com.ua and Ukrainian Lessons collect the most common calques.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"the future with буду and the perfective future reuse the present-tense endings.",
"V3<V2":"aspect is chosen mostly in the past and the future, so you need both tenses first.",
"V4<V3":"-ся verbs come in aspect pairs too: вчитися / навчитися.",
"V4<P3":"подобатися needs the dative pronouns мені, тобі, йому.",
"V5<V4":"participles are built from verbs, including reflexive ones.",
"V5<P2":"passive participles decline like adjectives.",
"M1<V1":"the imperative is formed from the present stem.",
"M2<V2":"motion verbs are mostly practised in the past: ходив, їздив, йшов.",
"M2<N2":"куди? needs the accusative: йти в школу, їхати на роботу.",
"M3<M2":"prefixes attach to йти / ходити and їхати / їздити.",
"M3<V3":"prefixed motion verbs come in perfective / imperfective pairs.",
"M4<V3":"the conditional is the past tense + би, usually of a perfective verb.",
"M5<M4":"polite modality (хотів би, могли б) combines with треба, можна, варто.",
"M5<S4":"треба, можна, варто follow the same dative pattern as мені холодно.",
"N2<N1":"case endings depend on gender, so you need it first.",
"N3<N2":"the masculine accusative of people equals the genitive.",
"N4<N3":"the instrumental completes the core cases after the genitive.",
"N5<N4":"the dative brings the case system together.",
"N5<P3":"the most frequent datives are pronouns: мені, тобі, йому.",
"P2<P1":"adjectives agree just like possessives: мій новий, моя нова.",
"P2<N1":"agreement depends on the noun's gender and number.",
"P3<P2":"pronouns in cases sit next to adjectives in cases.",
"P3<N2":"мене, тебе, його are the accusative forms you meet first.",
"P4<P2":"comparatives are formed from adjectives.",
"P5<P3":"свій and себе change by case like other pronouns.",
"O2<O1":"euphony rules depend on knowing which letters are vowels and consonants.",
"O3<O2":"both are about how sounds change at word boundaries and inside words.",
"O3<N2":"the locative -і triggers г, к, х → з, ц, с: у руці.",
"O4<O3":"vocative endings show the same consonant changes: друг → друже.",
"O4<N1":"the vocative ending depends on gender.",
"O5<O4":"spelling details round off the sound-and-spelling line.",
"S1<V1":"negation and questions wrap around a conjugated verb.",
"S2<S1":"complex sentences join simple ones.",
"S3<S2":"numbers are used in longer descriptions and plans.",
"S3<N3":"5 and more takes the genitive plural.",
"S4<S3":"age (мені 25 років) combines numbers with the dative.",
"S4<P3":"у мене, мені, мене звати all use pronoun cases.",
"S5<S4":"style work comes once everyday structures are in place."
};

/* recommended order of all 30 topics; within a stage, prerequisites come first */
const ROUTE = ["V1","N1","P1","O1","S1","M1", "V2","N2","P2","O2","S2","M2", "V3","N3","P3","O3","S3","M3", "V4","N4","P4","O4","S4","M4", "V5","N5","P5","O5","S5","M5"];
/* fix-the-mistake answers in these topics also check spacing */
const STRICT = [];
/* localStorage key prefix: progress is kept per target language */
const STORE = "ukmap-";

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES, ROUTE, STRICT, STORE };
