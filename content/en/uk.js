/* eslint-disable */
// English grammar map content written for Ukrainian speakers (native "uk", target "en").
// Target level: B2, for confident writing and speaking.
// Field "fr" holds the name in the target language (historical key shared with the French maps);
// field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Tenses",gloss:"часи",c:"--l-v"},
  M:{fr:"Modals & future",gloss:"модальні й майбутнє",c:"--l-m"},
  N:{fr:"Noun phrase",gloss:"іменна група",c:"--l-n"},
  P:{fr:"Patterns",gloss:"конструкції",c:"--l-p"},
  Q:{fr:"Questions & speech",gloss:"питання і переказ",c:"--l-o"},
  S:{fr:"Sentence & text",gloss:"речення і текст",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Фундамент",goal:"Прості речення без помилок: два теперішні часи, артиклі, in/on/at, питання й порядок слів.",task:"Опиши свій звичайний тиждень і те, що відбувається саме цього тижня (10–12 речень). Додай 3 питання до співрозмовника. Потім розкажи те саме вголос і запиши себе."},
  {n:2,name:"Розповідь",goal:"Розповідати про минуле й плани: past simple, майбутнє, -ing чи to, question tags, пунктуація.",task:"Лист другові про минулі вихідні й плани на наступні (150 слів). Перевір апострофи, великі літери й кому. Розкажи ту саму історію вголос за 2 хвилини."},
  {n:3,name:"Зв'язність",goal:"Довші речення й ідеї: present perfect, умовні речення, відносні підрядні, ввічливі непрямі питання.",task:"Есе «What has changed in your city in the last ten years?» (200 слів): present perfect, 2 умовні речення, 3 відносні підрядні. Плюс ввічливий лист-запит із непрямими питаннями."},
  {n:4,name:"Нюанси",goal:"Розповідні часи, нереальне минуле, пасив, непряма мова, логічні зв'язки.",task:"Історія про день, коли все пішло не так (250 слів): past perfect, третя умовна, пасив. Потім перекажи в непрямій мові розмову з цього дня."},
  {n:5,name:"Стиль",goal:"Мова B2: perfect continuous, припущення, колокації, reporting verbs, наголос і формальний стиль.",task:"Есе-аргументація у форматі B2 First (220–260 слів) і 3-хвилинний монолог на ту саму тему. Перевір колокації, reporting verbs і реєстр."}
];

const T = [
/* ---------- V: tenses ---------- */
{id:"V1",d:"V",p:1,fr:"Present",gloss:"теперішні часи",t:"Present simple or present continuous?",
 s:"Два теперішні часи замість одного українського. Simple — звички й факти, continuous — те, що відбувається зараз або тимчасово.",
 r:["Present simple: <b>I work, she works</b>. У 3-й особі однини — <b>-s</b>. Питання й заперечення через <b>do / does</b>: Does she work? She doesn't work.","Present continuous: <b>am / is / are + -ing</b>: I'm working, they're waiting.","Simple — звички, факти, розклади (usually, every day, never). Continuous — зараз, у цей період, тимчасово (now, at the moment, this week).","Дієслова стану (know, like, want, believe, need, own) зазвичай не мають -ing: I <b>know</b>, а не I'm knowing."],
 e:[["She works in a bank, but this month she's working from home.","Вона працює в банку, але цього місяця працює з дому."],["Water boils at 100 degrees.","Вода кипить при 100 градусах."],["What are you doing? — I'm cooking.","Що ти робиш? — Готую."]],
 x:["I am understanding you now.","I understand you now.","understand — дієслово стану: -ing з ним не вживається навіть «зараз»."],
 q:[["He usually ___ to work by bus.",["go","goes","is going"],1,"usually — звичка; 3-тя особа однини → goes."],["Listen! Someone ___ at the door.",["knocks","is knocking","knock"],1,"Listen! — дія відбувається саме зараз → continuous."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Past simple",gloss:"минулий",t:"Past simple and used to",
 s:"Головний час розповіді про завершене минуле. Складність — неправильні дієслова і did у питаннях.",
 r:["Правильні: <b>-ed</b> (worked, stopped, studied). Неправильні треба вчити: go → <b>went</b>, see → <b>saw</b>, buy → <b>bought</b>.","Питання й заперечення через <b>did</b> + інфінітив: Did you see? I didn't go. Після did — без -ed.","Past simple вживається з конкретним часом у минулому: yesterday, last week, in 2019, two days ago.","<b>used to</b> + інфінітив — минула звичка або стан, яких уже немає: I used to smoke."],
 e:[["We moved to Lviv two years ago.","Ми переїхали до Львова два роки тому."],["Did you enjoy the film? — No, I didn't.","Тобі сподобався фільм? — Ні."],["She used to live in Poland.","Раніше вона жила в Польщі."]],
 x:["Did you went to the party?","Did you go to the party?","Після did — інфінітив без змін: минулий час уже показує did."],
 q:[["I ___ him at the station yesterday.",["see","saw","seen"],1,"yesterday → past simple; see → saw."],["They ___ come to the meeting.",["didn't","don't","wasn't"],0,"Заперечення в past simple: didn't + інфінітив."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Present perfect",gloss:"минуле з результатом",t:"Present perfect or past simple?",
 s:"Найскладніший вибір для українців: обидва часи перекладаються минулим. Present perfect пов'язує минуле з теперішнім.",
 r:["Форма: <b>have / has + past participle</b>: I've finished, she has gone.","Present perfect — досвід без дати, результат зараз, період, що ще триває: ever, never, already, yet, just, so far, this week.","Past simple — завершена подія з конкретним часом: yesterday, in 2020, ago, last year, when I was young.","<b>for</b> + тривалість (for three years), <b>since</b> + точка відліку (since 2020). Дія триває досі → present perfect, а не present simple."],
 e:[["I've lost my keys. — When did you last see them?","Я загубив ключі. — Коли ти їх востаннє бачив?"],["Have you ever been to London?","Ти колись був у Лондоні?"],["She has lived here since 2018.","Вона живе тут з 2018 року."]],
 x:["I live here for five years.","I've lived here for five years.","Дія почалася в минулому і триває досі → present perfect. Українське «живу» тут обманює."],
 q:[["I ___ this film three times.",["saw","have seen","see"],1,"Досвід без конкретного часу → present perfect."],["We ___ to Paris in 2019.",["have gone","went","have been"],1,"Конкретний рік → past simple."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Narrative tenses",gloss:"розповідні часи",t:"Past continuous and past perfect",
 s:"Щоб історія звучала природно, потрібні три минулі часи: тло, події й те, що сталося ще раніше.",
 r:["Past continuous: <b>was / were + -ing</b> — тло, дія в процесі: It was raining.","Past simple — події, що рухають сюжет: Suddenly the phone rang.","Past perfect: <b>had + past participle</b> — дія раніше за іншу минулу: When I arrived, the film had started.","Типова схема: <i>I was walking home when I saw that someone had broken my car window.</i>"],
 e:[["While we were having dinner, the lights went out.","Поки ми вечеряли, зникло світло."],["She was tired because she had worked all night.","Вона була втомлена, бо працювала всю ніч."],["By the time the police arrived, the thief had escaped.","Коли приїхала поліція, злодій уже втік."]],
 x:["When I arrived at the station, the train already left.","When I arrived at the station, the train had already left.","Потяг поїхав раніше, ніж я прийшов → past perfect."],
 q:[["I ___ TV when you called.",["watched","was watching","had watched"],1,"Дія в процесі, яку перервали → past continuous."],["He couldn't get in because he ___ his keys.",["lost","was losing","had lost"],2,"Ключі він загубив раніше → past perfect."]],pre:["V3"]},
{id:"V5",d:"V",p:5,fr:"Perfect continuous",gloss:"тривалість і перспектива",t:"Perfect continuous and future perfect",
 s:"Форми рівня B2, які показують тривалість до певного моменту. Звучать природно в розмові й потрібні в есе та звітах.",
 r:["Present perfect continuous: <b>have been + -ing</b> — тривалість до зараз або видимий слід: I've been waiting for an hour. You look tired — have you been running?","Past perfect continuous: <b>had been + -ing</b> — тривалість до моменту в минулому: She had been working there for ten years when it closed.","Future continuous: <b>will be + -ing</b> — процес у певний момент майбутнього: This time tomorrow I'll be flying to Rome.","Future perfect: <b>will have + past participle</b> — завершиться до певного моменту: By June I'll have finished the course."],
 e:[["How long have you been learning English?","Скільки ти вже вчиш англійську?"],["I'll have saved enough money by next summer.","До наступного літа я назбираю достатньо грошей."],["Don't call at 8 — we'll be having dinner.","Не дзвони о 8 — ми вечерятимемо."]],
 x:["I'm waiting for you since two o'clock!","I've been waiting for you since two o'clock!","since + тривалість до зараз → present perfect continuous."],
 q:[["She's tired because she ___ all day.",["has worked","has been working","is working"],1,"Тривалість і видимий наслідок → perfect continuous."],["By 2030 they ___ the new bridge.",["will build","will have built","are building"],1,"by + момент у майбутньому → future perfect."]],pre:["V4"]},
/* ---------- M: modals and future ---------- */
{id:"M1",d:"M",p:1,fr:"can · must · should",gloss:"можливість і обов'язок",t:"Modal verbs: can, must, have to, should",
 s:"Модальні дієслова передають уміння, дозвіл, обов'язок і пораду. Без них неможливо ввічливо просити й радити.",
 r:["Після модального — інфінітив <b>без to</b>: She can swim. Не can to swim і не cans.","<b>can</b> — уміння, можливість, дозвіл; <b>could</b> — уміння в минулому або ввічливе прохання.","<b>must</b> — обов'язок від мовця, <b>have to</b> — обов'язок ззовні (правила). <b>mustn't</b> — заборона, <b>don't have to</b> — немає потреби.","<b>should</b> — порада: You should see a doctor."],
 e:[["Could you help me with this form?","Не могли б ви допомогти мені з цією формою?"],["You mustn't smoke here, but you don't have to leave.","Тут не можна палити, але виходити не обов'язково."],["I had to work late yesterday.","Учора мені довелося працювати допізна."]],
 x:["You don't must park here.","You mustn't park here.","Модальні дієслова заперечуються через not, без do: mustn't, can't, shouldn't."],
 q:[["You ___ wear a uniform; it's optional.",["mustn't","don't have to","can't"],1,"Optional — немає обов'язку → don't have to."],["She ___ speak three languages.",["can","cans","can to"],0,"Модальні не мають -s і to."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Future",gloss:"майбутнє",t:"Future: will, going to, present continuous",
 s:"Про майбутнє говорять кількома способами, і вибір залежить від того, рішення це, план чи прогноз.",
 r:["<b>will</b> — рішення в момент мовлення, обіцянка, прогноз-думка: I'll get it! I think it will rain.","<b>going to</b> — намір, план; прогноз за явними ознаками: I'm going to study law. Look at the clouds — it's going to rain.","<b>Present continuous</b> — домовленість із часом і місцем: I'm meeting Tom at six.","Після <b>when, if, as soon as, before, until</b> про майбутнє — present simple: When I get home, I'll call you."],
 e:[["I'm going to start running next week.","З наступного тижня я почну бігати (план)."],["The phone's ringing. — I'll answer it.","Телефон дзвонить. — Я візьму."],["We're flying to Warsaw on Friday.","У п'ятницю ми летимо до Варшави."]],
 x:["I'll call you when I will arrive.","I'll call you when I arrive.","Після when про майбутнє — present simple. Українське «коли приїду» тут обманює."],
 q:[["I've decided: I ___ a new laptop.",["'ll buy","'m going to buy","buy"],1,"Рішення ухвалене раніше → going to."],["Wait, I ___ help you with those bags.",["'ll","'m going to","am"],0,"Спонтанне рішення в момент мовлення → will."]],pre:["V1"]},
{id:"M3",d:"M",p:3,fr:"Conditionals 0–2",gloss:"умовні речення",t:"Conditionals: zero, first and second",
 s:"Умовні речення з if — реальні й уявні. Друга умовна — ключ до порад і гіпотез у розмові.",
 r:["Zero: <b>if + present, present</b> — загальна істина: If you heat ice, it melts.","First: <b>if + present, will + інфінітив</b> — реальна можливість: If it rains, we'll stay in.","Second: <b>if + past simple, would + інфінітив</b> — уявне зараз або малоймовірне: If I had more time, I would travel.","<b>If I were you, I'd…</b> — порада. <b>unless</b> = if not."],
 e:[["If you don't hurry, you'll miss the bus.","Якщо не поспішиш, запізнишся на автобус."],["If I lived by the sea, I'd swim every day.","Якби я жив біля моря, плавав би щодня."],["If I were you, I wouldn't sign it.","На твоєму місці я б це не підписував."]],
 x:["If I would have money, I would buy a car.","If I had money, I would buy a car.","would — тільки в головній частині, ніколи після if."],
 q:[["If you ___ water to 100°C, it boils.",["heat","will heat","heated"],0,"Загальна істина → zero conditional."],["If I ___ rich, I'd buy an island.",["am","were","would be"],1,"Уявна ситуація → past; were — для всіх осіб."]],pre:["M2","V2"]},
{id:"M4",d:"M",p:4,fr:"3rd conditional · wish",gloss:"нереальне минуле і жаль",t:"Third conditional, mixed conditionals and wish",
 s:"Як говорити про те, що могло статися, але не сталося, і про жаль. Типова тема іспитів B2.",
 r:["Third: <b>if + past perfect, would have + past participle</b>: If I had left earlier, I wouldn't have missed the train.","Mixed: минула умова → теперішній результат: If I had studied medicine, I would be a doctor now.","<b>wish / if only + past simple</b> — жаль про теперішнє: I wish I had more time.","<b>wish + past perfect</b> — жаль про минуле: I wish I hadn't said that. <b>wish + would</b> — роздратування чужою поведінкою: I wish you would stop."],
 e:[["If you had told me, I would have helped you.","Якби ти мені сказав, я б тобі допоміг."],["I wish I could speak Spanish.","Шкода, що я не говорю іспанською."],["If only I hadn't sold that car!","Якби ж я не продав ту машину!"]],
 x:["If I would have known, I would have come.","If I had known, I would have come.","Після if — past perfect; would have — лише в головній частині."],
 q:[["If we ___ the map, we wouldn't have got lost.",["took","had taken","would take"],1,"Нереальна умова в минулому → past perfect."],["I wish I ___ so much yesterday.",["didn't eat","hadn't eaten","wouldn't eat"],1,"Жаль про минуле → wish + past perfect."]],pre:["M3","V4"]},
{id:"M5",d:"M",p:5,fr:"Past modals",gloss:"припущення і минуле",t:"Deduction and past modals: must have, might have, should have",
 s:"Як робити висновки й припущення, а також говорити про минулі помилки й упущені можливості.",
 r:["Припущення про зараз: <b>must</b> (майже впевнений «так»), <b>might / may / could</b> (можливо), <b>can't</b> (впевнений «ні»): She must be at work. He can't be serious.","Про минуле: <b>must have / might have / can't have + past participle</b>: They must have left.","<b>should have done</b> — докір, жаль: You should have told me.","<b>needn't have done</b> — зробив, але не треба було; <b>didn't need to</b> — не було потреби (і, найімовірніше, не робив)."],
 e:[["The lights are off — they must have gone to bed.","Світло вимкнене — мабуть, вони лягли спати."],["She can't have finished already; she only started at ten.","Не може бути, щоб вона вже закінчила: вона почала лише о десятій."],["I should have listened to you.","Треба було тебе послухати."]],
 x:["He mustn't be at home — his car isn't there.","He can't be at home — his car isn't there.","Негативне припущення → can't. mustn't означає заборону."],
 q:[["You ___ be hungry after that long walk.",["must","can't","should have"],0,"Логічний висновок «так» → must."],["I ___ revised more; I failed the test.",["must have","should have","can't have"],1,"Жаль про минуле → should have."]],pre:["M4","V3"]},
/* ---------- N: noun phrase ---------- */
{id:"N1",d:"N",p:1,fr:"Articles",gloss:"артиклі",t:"Articles: a, an, the or nothing",
 s:"В українській артиклів немає, тому їх пропускають. Це найпомітніша помилка і на письмі, і в мові.",
 r:["<b>a / an</b> — одна з багатьох, перша згадка, професія: I saw a dog. She's a teacher. an — перед голосним звуком: an hour, a university.","<b>the</b> — відоме обом, єдине, уже згадане: The dog was huge. the sun, the best.","Без артикля (Ø) — загальне у множині й незлічуване: I like cats. Water is important.","Без артикля: більшість країн і міст, мови, прийоми їжі: in Ukraine, speak English, have breakfast. Але the UK, the USA."],
 e:[["I bought a book. The book is about Japan.","Я купив книжку. Книжка — про Японію."],["Life is short.","Життя коротке (загалом)."],["She plays the piano and works as an engineer.","Вона грає на піаніно і працює інженеркою."]],
 x:["She is doctor.","She is a doctor.","Професія в однині — з a / an."],
 q:[["I need ___ umbrella.",["a","an","the"],1,"umbrella починається з голосного звуку → an."],["___ moon is very bright tonight.",["A","The","—"],1,"Єдиний об'єкт → the."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Countable · uncountable",gloss:"злічувані і кількість",t:"Countable and uncountable nouns, quantifiers",
 s:"Від того, чи можна іменник порахувати, залежать артикль, множина і слова кількості: much чи many, few чи little.",
 r:["Злічувані мають множину й a / an: a chair, two chairs. Незлічувані — ні: water, advice, information, furniture, news.","<b>many / few / a few</b> — зі злічуваними; <b>much / little / a little</b> — з незлічуваними; <b>a lot of</b> — з обома.","<b>some</b> — у ствердженнях і проханнях; <b>any</b> — у запереченнях і питаннях: Is there any milk? Would you like some tea?","<b>few / little</b> — мало (негативно); <b>a few / a little</b> — трохи (достатньо)."],
 e:[["Can you give me some advice?","Можеш дати мені пораду?"],["There aren't many people here, but there's a lot of noise.","Людей тут небагато, але шуму багато."],["I have a few friends in Canada.","У мене є кілька друзів у Канаді."]],
 x:["She gave me many useful informations.","She gave me a lot of useful information.","information — незлічуване: без множини і без many."],
 q:[["How ___ money do you need?",["many","much","few"],1,"money — незлічуване → much."],["There are ___ apples left — enough for a pie.",["a few","a little","few"],0,"Злічувані, і їх достатньо → a few."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Adjectives · adverbs",gloss:"прикметники і прислівники",t:"Adjectives and adverbs: order, -ed / -ing, so / such, too / enough",
 s:"Як описувати точно: порядок прикметників, bored чи boring, good чи well, so чи such.",
 r:["Прикметник не змінюється за родом і числом і стоїть перед іменником: a <b>red</b> car, red cars.","Порядок: думка → розмір → вік → форма → колір → походження → матеріал: a lovely small old round red Italian wooden table.","<b>-ed</b> — що відчуває людина (bored, interested), <b>-ing</b> — що викликає це відчуття (boring, interesting).","Прислівник описує дію: She drives <b>carefully</b>; good → <b>well</b>. <b>so</b> + прикметник, <b>such (a)</b> + іменник; <b>too</b> + прикметник (надто), прикметник + <b>enough</b>."],
 e:[["The film was boring, so I was bored.","Фільм був нудний, тож мені було нудно."],["She speaks English very well.","Вона дуже добре говорить англійською."],["It was such a beautiful day that we stayed outside.","Був такий гарний день, що ми лишилися надворі."]],
 x:["I'm very interesting in history.","I'm very interested in history.","Почуття людини → -ed."],
 q:[["He's not old ___ to drive.",["enough","too","so"],0,"Прикметник + enough."],["You did the job really ___.",["good","well","goodly"],1,"Описує дію → прислівник well."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Comparison",gloss:"порівняння",t:"Comparatives and superlatives",
 s:"Порівняння потрібне в есе, відгуках і щоденній розмові. Головні пастки: more чи -er і як посилити порівняння.",
 r:["Короткі прикметники: <b>-er / the -est</b>: cheaper, the cheapest; big → bigger; happy → happier.","Довгі (два склади й більше, крім -y): <b>more / the most</b>: more expensive, the most interesting.","Неправильні: good → better → the best; bad → worse → the worst; far → further.","<b>as … as</b> — так само; <b>not as … as</b> — менш; посилення: much / far / a lot bigger, slightly bigger; <b>the more…, the better</b>."],
 e:[["This phone is much cheaper than that one.","Цей телефон набагато дешевший за той."],["It's the most beautiful city I've ever seen.","Це найкрасивіше місто, яке я колись бачив."],["The more you practise, the more confident you become.","Що більше практикуєшся, то впевненіше почуваєшся."]],
 x:["She is more taller than her brother.","She is taller than her brother.","Або -er, або more — ніколи разом."],
 q:[["Today is ___ than yesterday.",["hotter","more hot","hoter"],0,"Короткий прикметник: hot → hotter (подвоєння t)."],["This is the ___ film of the year.",["better","best","most good"],1,"Найвищий ступінь від good → the best."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Noun phrases",gloss:"іменні групи і стиль",t:"Noun phrases: compound nouns, 's or of, nominalisation",
 s:"У письмовій англійській багато інформації пакується в іменні групи. Це ознака впевненого B2.",
 r:["Іменник-означення стоїть перед головним і не має множини: a <b>bus</b> stop, a <b>ten-minute</b> walk, a <b>car</b> park.","<b>'s</b> — для людей, тварин, організацій, часу: my sister's car, the company's profits, today's news. <b>of</b> — для речей і довгих груп: the end of the film.","Номіналізація — дієслово або прикметник стає іменником: decide → decision, improve → improvement, able → ability.","Типова заміна в есе: Because prices increased → <b>Due to the increase in prices</b>."],
 e:[["There has been a significant improvement in air quality.","Якість повітря значно покращилася."],["The ten-year-old boy won a three-day trip.","Десятирічний хлопчик виграв триденну поїздку."],["The project's success surprised everyone.","Успіх проєкту всіх здивував."]],
 x:["We stayed in a five-stars hotel.","We stayed in a five-star hotel.","Іменник-означення не має множини, навіть із числом."],
 q:[["We need a ___ solution.",["long-term","long-terms","term-long"],0,"Складене означення: long-term."],["I met ___ yesterday.",["the friend of my brother","my brother's friend","my brother friend"],1,"Для людей природніше 's."]],pre:["N4","S3"]},
/* ---------- P: prepositions and verb patterns ---------- */
{id:"P1",d:"P",p:1,fr:"in · on · at",gloss:"прийменники часу і місця",t:"Prepositions of time and place: in, on, at",
 s:"Три короткі слова, які в українській відповідають «в», «на», «о». Вибір залежить від того, наскільки «великий» час чи місце.",
 r:["Час: <b>at</b> — точний момент (at 6, at night, at the weekend); <b>on</b> — дні й дати (on Monday, on 5 May); <b>in</b> — довші періоди (in June, in 2020, in the morning).","Місце: <b>at</b> — точка (at the bus stop, at home, at work); <b>on</b> — поверхня (on the table, on the wall, on the 3rd floor); <b>in</b> — простір (in the room, in London).","Без прийменника: next / last / this / every + час: next week, last Monday.","Транспорт: <b>on</b> the bus / train / plane, <b>in</b> a car / taxi; <b>by</b> bus — спосіб пересування."],
 e:[["The meeting is on Monday at 10 in the main office.","Зустріч у понеділок о 10 у головному офісі."],["I was born in 1995 in Kharkiv.","Я народився 1995 року в Харкові."],["See you at the weekend!","Побачимося на вихідних!"]],
 x:["I'll see you in Monday.","I'll see you on Monday.","Дні тижня — з on."],
 q:[["My birthday is ___ March.",["in","on","at"],0,"Місяць → in."],["She's waiting ___ the bus stop.",["in","on","at"],2,"Точка на мапі → at."]],pre:[]},
{id:"P2",d:"P",p:2,fr:"-ing or to",gloss:"-ing чи to",t:"Gerund or infinitive: doing or to do?",
 s:"Після одних дієслів іде -ing, після інших — to + інфінітив. Без цього речення звучить неприродно.",
 r:["Після <b>enjoy, avoid, finish, mind, suggest, keep, consider, practise</b> — -ing: I enjoy reading.","Після <b>want, decide, hope, plan, agree, refuse, manage, would like</b> — to + інфінітив: I decided to stay.","Після прийменника — завжди -ing: interested <b>in learning</b>, before <b>leaving</b>, look forward <b>to seeing</b>.","Зміна значення: <b>stop</b> doing (перестати) / stop to do (зупинитися, щоб); <b>remember</b> doing (пам'ятаю, що було) / remember to do (не забути); <b>try</b> doing (спробувати як спосіб) / try to do (намагатися)."],
 e:[["I look forward to hearing from you.","Чекаю на вашу відповідь."],["She refused to answer.","Вона відмовилася відповідати."],["Remember to lock the door!","Не забудь замкнути двері!"]],
 x:["I'm looking forward to see you.","I'm looking forward to seeing you.","to тут — прийменник, тому після нього -ing."],
 q:[["Would you mind ___ the window?",["to open","opening","open"],1,"mind + -ing."],["We hope ___ you soon.",["seeing","to see","see"],1,"hope + to + інфінітив."]],pre:["P1","V1"]},
{id:"P3",d:"P",p:3,fr:"Phrasal verbs",gloss:"фразові дієслова",t:"Phrasal verbs",
 s:"Дієслово + частка: get up, look after, give up. Без них розмовна англійська звучить книжно, з ними — природно.",
 r:["Значення часто не виводиться зі складників: give up = кинути, put off = відкласти, run out of = закінчитися.","Розділювані: іменник може стояти між частинами: turn the TV off / turn off the TV. Займенник — <b>лише посередині</b>: turn it off.","Нерозділювані: look after the kids, get over it, come across a problem.","У формальному письмі часто краще однослівний синонім: postpone (put off), tolerate (put up with), investigate (look into)."],
 e:[["Can you pick me up at the station?","Можеш забрати мене на вокзалі?"],["We've run out of milk.","У нас закінчилося молоко."],["She takes after her mother.","Вона схожа на маму."]],
 x:["Turn off it, please.","Turn it off, please.","Займенник у розділюваному фразовому дієслові стоїть посередині."],
 q:[["I need to ___ smoking.",["give up","give in","give out"],0,"give up = кинути (звичку)."],["Could you ___ my cat while I'm away?",["look for","look after","look up"],1,"look after = доглядати."]],pre:["P2"]},
{id:"P4",d:"P",p:4,fr:"Passive",gloss:"пасивний стан",t:"The passive and have something done",
 s:"Пасив переносить увагу з виконавця на дію або результат. Він потрібен у звітах, новинах і формальних листах.",
 r:["Форма: <b>be + past participle</b> у потрібному часі: is made, was built, has been sold, will be done, is being repaired.","Виконавця додаємо через <b>by</b>, лише якщо він важливий: The book was written by Orwell.","Модальні: <b>can / must / should be + past participle</b>: It must be done today.","<b>have / get something done</b> — хтось робить це для тебе: I had my hair cut. I'm getting my car repaired."],
 e:[["English is spoken all over the world.","Англійською розмовляють у всьому світі."],["The bridge was built in 1890.","Міст збудували 1890 року."],["We're having the kitchen painted next week.","Наступного тижня нам пофарбують кухню."]],
 x:["The letter was wrote yesterday.","The letter was written yesterday.","У пасиві — past participle (третя форма)."],
 q:[["The room ___ every day.",["cleans","is cleaned","is cleaning"],1,"Пасив у теперішньому: is + past participle."],["My bike ___ last night.",["was stolen","stole","has stolen"],0,"Пасив у минулому: was + past participle."]],pre:["P3","V3"]},
{id:"P5",d:"P",p:5,fr:"Collocations",gloss:"колокації",t:"Dependent prepositions and collocations",
 s:"Які прийменники йдуть після слів (depend on, interested in) і які слова «дружать» між собою (make a decision, do homework). Саме це відрізняє B2 від B1.",
 r:["Дієслово + прийменник: depend <b>on</b>, listen <b>to</b>, wait <b>for</b>, apologise <b>for</b>, agree <b>with</b> someone / <b>on</b> something.","Прикметник + прийменник: interested <b>in</b>, good <b>at</b>, afraid <b>of</b>, responsible <b>for</b>, different <b>from</b>.","<b>make</b> — створювати, результат: make a decision, a mistake, money, progress. <b>do</b> — діяльність, робота: do homework, business, research, a favour.","Інші стійкі пари: take a photo, have a look, pay attention, catch a cold, keep a promise, break a rule."],
 e:[["It depends on the weather.","Це залежить від погоди."],["I've made a lot of progress this year.","Цього року я зробив великий прогрес."],["She's responsible for the marketing team.","Вона відповідає за команду маркетингу."]],
 x:["I'm agree with you.","I agree with you.","agree — дієслово, be не потрібне."],
 q:[["Are you interested ___ art?",["on","in","for"],1,"interested in."],["I need to ___ a decision quickly.",["do","make","take up"],1,"make a decision."]],pre:["P3","P2"]},
/* ---------- Q: questions and reported speech ---------- */
{id:"Q1",d:"Q",p:1,fr:"Questions",gloss:"питання",t:"Questions: word order, do and subject questions",
 s:"Питання будуються через допоміжне дієслово й інверсію. Українська обходиться інтонацією, тому в мові тут багато помилок.",
 r:["Порядок: (питальне слово) + допоміжне + підмет + дієслово: <b>Where do you live?</b> What are you doing? Have you seen it?","Немає допоміжного — використовуємо <b>do / does / did</b>: Does she like it? When did they arrive?","Питання до підмета — без do: <b>Who called you?</b> What happened? (порівняй: Who did you call?)","Прийменник — у кінці: Where are you from? What are you talking about?"],
 e:[["How long have you been waiting?","Скільки ти вже чекаєш?"],["Who told you that?","Хто тобі це сказав?"],["What does this word mean?","Що означає це слово?"]],
 x:["Where you live?","Where do you live?","Без do питання в present simple неправильне."],
 q:[["What ___ you do last weekend?",["did","do","were"],0,"Минуле → did."],["Who ___ the window?",["did break","broke","did broken"],1,"Питання до підмета (хто?) → без did."]],pre:["V1"]},
{id:"Q2",d:"Q",p:2,fr:"Tags · so do I",gloss:"розмовні звороти",t:"Question tags, short answers, so do I / neither do I",
 s:"Маленькі звороти, які роблять розмову живою: «правда ж?», «я теж», «я ні».",
 r:["Tag повторює допоміжне з протилежним знаком: You're tired, <b>aren't you</b>? She doesn't smoke, <b>does she</b>?","Немає допоміжного — do / does / did: You live here, <b>don't you</b>? He left, <b>didn't he</b>?","Особливі: I'm late, <b>aren't I</b>? Let's go, <b>shall we</b>? Open the door, <b>will you</b>?","Згода: <b>So do I</b> / Me too (+); <b>Neither do I</b> / Me neither (−). Допоміжне — за часом: So did I, Neither can I."],
 e:[["It's a lovely day, isn't it?","Чудовий день, правда ж?"],["I've never been to Japan. — Neither have I.","Я ніколи не був у Японії. — Я теж."],["You won't tell anyone, will you?","Ти ж нікому не скажеш?"]],
 x:["You like coffee, isn't it?","You like coffee, don't you?","Tag повторює допоміжне з речення (тут do), а не завжди isn't it."],
 q:[["She can drive, ___?",["can she","can't she","doesn't she"],1,"Ствердження → заперечний tag із тим самим допоміжним."],["I love jazz. — ___.",["So do I","So am I","Neither do I"],0,"Згода зі ствердженням у present simple → So do I."]],pre:["Q1","V2"]},
{id:"Q3",d:"Q",p:3,fr:"Indirect questions",gloss:"непрямі питання",t:"Indirect questions",
 s:"Ввічливі питання: Could you tell me where…? Do you know if…? Головне — порядок слів як у ствердженні.",
 r:["Вступ: Could you tell me…, Do you know…, I wonder…, Would you mind telling me…","Після вступу — порядок ствердження і без do: Where is the station? → Could you tell me <b>where the station is</b>?","Загальні питання (так / ні) — через <b>if / whether</b>: Is it open? → Do you know if it's open?","Знак питання — лише якщо вступ сам є питанням: Do you know where he lives? / I wonder where he lives."],
 e:[["Could you tell me what time the museum opens?","Не підкажете, о котрій відкривається музей?"],["Do you know if there's a pharmacy near here?","Ви не знаєте, чи є тут поруч аптека?"],["I wonder why she didn't come.","Цікаво, чому вона не прийшла."]],
 x:["Can you tell me where is the bank?","Can you tell me where the bank is?","У непрямому питанні — прямий порядок: підмет, потім дієслово."],
 q:[["Do you know what time ___?",["does the train leave","the train leaves","leaves the train"],1,"Прямий порядок, без does."],["Could you tell me ___ the price includes breakfast?",["if","that","does"],0,"Питання «так / ні» → if / whether."]],pre:["Q1"]},
{id:"Q4",d:"Q",p:4,fr:"Reported speech",gloss:"непряма мова",t:"Reported speech",
 s:"Переказ чужих слів: He said that…, She asked if… Потрібен у листах, звітах і розмовах.",
 r:["Якщо вводимо в минулому (said, told), час зсувається назад: present → past, past і present perfect → past perfect, will → would, can → could.","<b>say</b> (something) / <b>tell</b> someone (something): She said that… / She told me that… Не said me.","Питання: прямий порядок; для «так / ні» — if / whether: He asked <b>where I lived</b>. She asked <b>if I was</b> OK.","Накази й прохання: <b>tell / ask + someone + (not) to</b>: He told me to wait. She asked us not to smoke."],
 e:[["\"I'm tired.\" → She said she was tired.","Вона сказала, що втомилася."],["\"Where do you work?\" → He asked me where I worked.","Він спитав, де я працюю."],["\"Don't be late.\" → They told us not to be late.","Нам сказали не запізнюватися."]],
 x:["He said me that he was busy.","He told me that he was busy.","tell + особа; say — без особи (або say to me)."],
 q:[["\"I will call you.\" → She said she ___ me.",["will call","would call","called"],1,"will → would."],["He asked me where ___.",["did I live","I lived","do I live"],1,"Прямий порядок і зсув часу."]],pre:["Q3","V4"]},
{id:"Q5",d:"Q",p:5,fr:"Reporting verbs",gloss:"дієслова переказу",t:"Reporting verbs: suggest, admit, deny, warn…",
 s:"Замість постійного said — точні дієслова, які передають намір мовця. Кожне має свою конструкцію.",
 r:["+ to: <b>agree, refuse, offer, promise, threaten</b>: She refused to help.","+ особа + to: <b>advise, ask, encourage, invite, remind, warn, persuade</b>: He reminded me to call.","+ -ing: <b>admit, deny, suggest, recommend</b>; + прийменник + -ing: <b>apologise for, insist on, accuse someone of, blame someone for</b>.","+ that: <b>explain, claim, complain, point out</b>: He explained that the shop was closed."],
 e:[["He denied taking the money.","Він заперечив, що взяв гроші."],["She suggested going to the cinema.","Вона запропонувала піти в кіно."],["They warned us not to swim there.","Нас попередили не плавати там."]],
 x:["He suggested me to take a taxi.","He suggested taking a taxi.","suggest не вживається з особою + to. Можна також: He suggested (that) I take a taxi."],
 q:[["She apologised ___ late.",["to be","for being","being"],1,"apologise for + -ing."],["He ___ to lend me his car.",["suggested","offered","admitted"],1,"offer + to + інфінітив."]],pre:["Q4","P2"]},
/* ---------- S: sentence and text ---------- */
{id:"S1",d:"S",p:1,fr:"Word order",gloss:"порядок слів",t:"Word order: subject, verb, object and adverbs",
 s:"В українській порядок слів вільний, в англійській — фіксований. Від нього залежить зміст речення.",
 r:["Базова схема: <b>підмет + дієслово + додаток + місце + час</b>: I met my friend at the café yesterday.","Підмет обов'язковий, навіть формальний: <b>It</b> is raining. <b>There</b> is a problem.","Прислівники частоти (always, usually, often, never) — перед основним дієсловом, але після be: She often reads. She is often late.","Між дієсловом і додатком нічого не ставимо: I like football <b>very much</b>, а не I like very much football."],
 e:[["We usually have dinner at seven.","Ми зазвичай вечеряємо о сьомій."],["There are two problems with this plan.","У цьому плані дві проблеми."],["It's important to sleep well.","Важливо добре висипатися."]],
 x:["Is very cold today.","It is very cold today.","Англійське речення не буває без підмета."],
 q:[["I ___ late for work.",["am never","never am","never"],0,"Прислівник частоти — після be."],["She speaks ___.",["very well English","English very well","English well very"],1,"Дієслово й додаток разом, прислівник — після них."]],pre:[]},
{id:"S2",d:"S",p:2,fr:"Punctuation",gloss:"пунктуація і правопис",t:"Punctuation, capitals and apostrophes",
 s:"Письмові правила, які видно одразу: великі літери, апостроф, кома і скорочення.",
 r:["Велика літера: <b>I</b>, дні, місяці, мови, національності, назви: on Monday, in May, English, Ukrainian.","Апостроф: скорочення (it's = it is, don't) і присвійність (Anna's, the students' books). <b>its</b> = його / її (без апострофа).","Кома після вступних слів і підрядного на початку: However, … / If it rains, … Перед that у підрядному — коми немає: I think that…","Перед ? ! : ; пробіл <b>не</b> ставиться. Лапки — \"…\" або ‘…’, а не « »."],
 e:[["On Monday I'm flying to Paris with my Ukrainian friends.","У понеділок я лечу до Парижа з друзями з України."],["It's a good company, and its staff are friendly.","Це хороша компанія, і її працівники привітні."],["Unfortunately, the train was late.","На жаль, потяг запізнився."]],
 x:["The cat hurt it's leg.","The cat hurt its leg.","its — присвійне, без апострофа; it's = it is."],
 q:[["Which is correct?",["i think that english is easy","I think that English is easy","I think, that English is easy"],1,"I і назви мов — з великої; перед that кома не потрібна."],["___ going to rain.",["Its","It's","Its'"],1,"It is → It's."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Relative clauses",gloss:"відносні підрядні",t:"Relative clauses: who, which, that, whose, where",
 s:"Як поєднати два речення в одне: the man who…, the book that… Важливо розрізняти обмежувальні й описові підрядні: від цього залежать коми.",
 r:["<b>who</b> — люди, <b>which</b> — речі, <b>that</b> — обидва (лише в обмежувальних), <b>whose</b> — чий, <b>where</b> — де, <b>when</b> — коли.","Обмежувальні (defining) — без ком, уточнюють, про кого мова: The woman who lives next door is a doctor.","Описові (non-defining) — з комами, додаткова інформація; that заборонене: My mother, who is 60, still works.","Якщо займенник — додаток, в обмежувальних його можна опустити: The film (that) we saw was great."],
 e:[["That's the girl whose brother plays for Dynamo.","Це дівчина, чий брат грає за «Динамо»."],["Kyiv, which is the capital of Ukraine, stands on the Dnipro.","Київ, столиця України, стоїть на Дніпрі."],["Is this the book you were talking about?","Це та книжка, про яку ти говорив?"]],
 x:["My father, that is a teacher, lives in Odesa.","My father, who is a teacher, lives in Odesa.","В описових підрядних (з комами) that не вживається."],
 q:[["The man ___ car was stolen called the police.",["who","whose","which"],1,"Чия машина → whose."],["This is the hotel ___ we stayed last year.",["where","which","who"],0,"Місце, і в підрядному є все потрібне → where."]],pre:["S2"]},
{id:"S4",d:"S",p:4,fr:"Linking words",gloss:"зв'язки і логіка",t:"Linking words: contrast, cause, result and purpose",
 s:"Зв'язки роблять текст і мову логічними. Головне — знати, що йде після них: речення, іменник чи -ing.",
 r:["Протиставлення: <b>but, although / even though</b> + речення; <b>despite / in spite of</b> + іменник або -ing; <b>However,</b> — на початку нового речення.","Причина: <b>because</b> + речення, <b>because of / due to</b> + іменник; <b>since / as</b> — формальніше.","Результат: <b>so</b>; формально — <b>therefore, as a result, consequently</b>.","Мета: <b>to / in order to</b> + інфінітив, <b>so that</b> + речення (часто з can / could): I left early so that I could catch the bus."],
 e:[["Although it was raining, we went out.","Хоча йшов дощ, ми вийшли."],["Despite the rain, we went out.","Незважаючи на дощ, ми вийшли."],["The flight was cancelled due to bad weather.","Рейс скасували через погану погоду."]],
 x:["Despite it was cold, we swam.","Although it was cold, we swam.","despite + іменник або -ing, а не речення: Despite the cold, we swam."],
 q:[["___ he's rich, he's not happy.",["Despite","Although","However"],1,"Перед реченням → although."],["The match was cancelled ___ the snow.",["because","because of","so"],1,"Перед іменником → because of."]],pre:["S3"]},
{id:"S5",d:"S",p:5,fr:"Emphasis & style",gloss:"наголос і стиль",t:"Emphasis and formal style: cleft sentences, inversion, register",
 s:"Як виділяти головне і робити текст формальним. Розщеплені речення, інверсія і вибір реєстру — ознаки рівня B2+.",
 r:["Розщеплені речення: <b>It was Anna who</b> called (а не хтось інший). <b>What I need is</b> a holiday.","Інверсія після заперечних слів на початку: <b>Never have I</b> seen…, <b>Not only did she</b>…, <b>Hardly had we</b>…, <b>Only then did I</b> understand.","Підсилення через do / does / did у ствердженні: I <b>do</b> like it! She <b>did</b> call.","Реєстр: у формальному листі — повні форми, пасив, номіналізація, слова на кшталт request, assist, obtain замість ask for, help, get."],
 e:[["What surprised me most was his reaction.","Найбільше мене здивувала його реакція."],["Not only did he lie, but he also blamed me.","Він не лише збрехав, а й звинуватив мене."],["I would be grateful if you could send me further information.","Буду вдячний, якщо ви надішлете мені додаткову інформацію."]],
 x:["Never I have seen such a mess.","Never have I seen such a mess.","Після never на початку — інверсія, як у питанні."],
 q:[["___ I need is a good night's sleep.",["That","What","Which"],1,"What-cleft: What I need is…"],["Not only ___ late, but he also forgot the tickets.",["he was","was he","he did be"],1,"Інверсія після not only."]],pre:["S4","P4"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["I ___ what you mean.",["see","am seeing","sees"],0,"see у значенні «розуміти» — дієслово стану."],["___ she speak French?",["Do","Does","Is"],1,"3-тя особа однини → does; після does — форма без -s."],["They ___ a new house at the moment.",["build","are building","builds"],1,"at the moment → continuous."]],
 c:[["She don't like coffee.","She doesn't like coffee.","3-тя особа однини: doesn't."],["I'm wanting a new phone.","I want a new phone.","want — дієслово стану."]]},
V2:{q:[["When I was a child, I ___ climb trees.",["used to","use to","was used to"],0,"Минула звичка: used to + інфінітив."],["She ___ her keys last night.",["losed","lost","has lost"],1,"lose → lost; last night → past simple."],["Where ___ you buy that jacket?",["did","do","were"],0,"Питання про минуле: did + інфінітив."]],
 c:[["I didn't knew the answer.","I didn't know the answer.","Після didn't — інфінітив."],["We buyed a new car last year.","We bought a new car last year.","buy — неправильне дієслово: bought."]]},
V3:{q:[["She ___ here since Monday.",["is","was","has been"],2,"since + триває досі → present perfect."],["___ you finished your homework yet?",["Did","Have","Are"],1,"yet у питанні → present perfect."],["He ___ the company two years ago.",["has left","left","has leaved"],1,"ago → past simple."]],
 c:[["I have seen him yesterday.","I saw him yesterday.","yesterday → past simple."],["How long do you know her?","How long have you known her?","Тривалість до теперішнього → present perfect."]]},
V4:{q:[["What ___ you doing at 8 last night?",["did","were","had"],1,"Процес у певний момент минулого → past continuous."],["After she ___ the letter, she posted it.",["had written","was writing","has written"],0,"Спершу написала, потім надіслала."],["The sun ___ and the birds were singing.",["shone","was shining","had shone"],1,"Опис тла → past continuous."]],
 c:[["While I walked home, it started to rain.","While I was walking home, it started to rain.","while + дія в процесі → past continuous."],["I didn't recognise her because she has changed a lot.","I didn't recognise her because she had changed a lot.","Зміна сталася раніше за минулий момент → past perfect."]]},
V5:{q:[["I ___ three emails this morning.",["have been writing","have written","had written"],1,"Кількість, результат → perfect simple."],["We ___ for two hours when the bus finally came.",["had been waiting","have been waiting","were waiting"],0,"Тривалість до моменту в минулому → past perfect continuous."],["At 10 tomorrow I ___ an exam, so I can't talk.",["will write","will be writing","will have written"],1,"Процес у момент майбутнього → future continuous."]],
 c:[["I've been knowing him for years.","I've known him for years.","know — дієслово стану, без -ing."],["By the time you arrive, I will finish.","By the time you arrive, I will have finished.","by the time + завершення до моменту → future perfect."]]},
M1:{q:[["Yesterday I ___ get up at 5.",["must","had to","musted"],1,"must не має минулого часу → had to."],["___ I open the window?",["Can","Do","Must I to"],0,"Прохання про дозвіл: Can / Could / May I…?"],["You look ill. You ___ go home.",["should","have","must to"],0,"Порада → should."]],
 c:[["He can to drive.","He can drive.","Після can — інфінітив без to."],["We musn't to be late.","We mustn't be late.","Правопис mustn't і інфінітив без to."]]},
M2:{q:[["What ___ this weekend? — Nothing special.",["will you do","are you doing","do you do"],1,"Питання про плани → present continuous (або going to)."],["Don't worry, I ___ tell anyone.",["won't","'m not going","don't"],0,"Обіцянка → will / won't."],["As soon as she ___, we'll start.",["will come","comes","is going to come"],1,"Після as soon as — present simple."]],
 c:[["If it will rain, we'll stay at home.","If it rains, we'll stay at home.","Після if про майбутнє — present simple."],["I think it is raining tomorrow.","I think it will rain tomorrow.","Прогноз-думка → will."]]},
M3:{q:[["We won't go ___ the weather improves.",["if","unless","when not"],1,"unless = if not."],["If she studies, she ___ the exam.",["passes","will pass","would pass"],1,"Реальна умова в майбутньому → first."],["What would you do if you ___ a ghost?",["see","saw","will see"],1,"Уявна ситуація → second, після if — past simple."]],
 c:[["If I will see him, I'll tell him.","If I see him, I'll tell him.","Після if — present, а не will."],["If I was you, I will apologise.","If I were you, I would apologise.","Порада: If I were you, I would…"]]},
M4:{q:[["If she had taken the job, she ___ in London now.",["would live","would have lived","lived"],0,"Умова в минулому, результат зараз → mixed: would + інфінітив."],["I wish it ___ so cold today.",["isn't","wasn't","hadn't been"],1,"Жаль про теперішнє → wish + past simple."],["He ___ the match if he hadn't been injured.",["would win","would have won","won"],1,"Third conditional: would have + past participle."]],
 c:[["I wish I would be taller.","I wish I were taller.","wish + would не вживаємо про власний стан; потрібен past."],["If he had asked me, I would help him.","If he had asked me, I would have helped him.","Умова й результат у минулому → would have helped."]]},
M5:{q:[["Where's Tom? — He ___ be in the garden, I'm not sure.",["must","might","can't"],1,"Невпевненість → might / may / could."],["She ___ seen us — she didn't say hello.",["must have","can't have","should have"],1,"Впевнений висновок «ні» про минуле → can't have."],["You ___ brought food — there's plenty here.",["needn't have","mustn't have","couldn't"],0,"Принесли, але не було потреби → needn't have."]],
 c:[["He must has forgotten.","He must have forgotten.","Модальне + have + past participle."],["You should told me earlier.","You should have told me earlier.","should have + past participle."]]},
N1:{q:[["I love ___ music.",["the","a","—"],2,"Музика взагалі — без артикля."],["He's ___ honest man.",["a","an","the"],1,"honest вимовляється з голосного звуку → an."],["We went to ___ United States.",["—","a","the"],2,"Назви з States, Kingdom, Republic — з the."]],
 c:[["The life is beautiful.","Life is beautiful.","Загальні поняття — без артикля."],["I have a good news.","I have good news.","news — незлічуване, a не вживається."]]},
N2:{q:[["I don't have ___ time today.",["many","much","some"],1,"Заперечення + незлічуване → much."],["He made ___ progress, unfortunately.",["little","a little","few"],0,"Мало, і це погано → little (progress — незлічуване)."],["We bought new ___ for the flat.",["furnitures","furniture","a furniture"],1,"furniture — незлічуване."]],
 c:[["I need an advice.","I need some advice.","advice — незлічуване; одна порада — a piece of advice."],["There is less people than yesterday.","There are fewer people than yesterday.","people — множина: fewer, are."]]},
N3:{q:[["It's ___ expensive for me.",["too","enough","such"],0,"Надто → too + прикметник."],["They have ___ a lovely garden.",["so","such","too"],1,"such a + прикметник + іменник."],["She bought a ___ dress.",["silk red beautiful","beautiful red silk","red beautiful silk"],1,"Думка → колір → матеріал."]],
 c:[["The lesson was very bored.","The lesson was very boring.","Урок викликає нудьгу → -ing."],["He works very hardly.","He works very hard.","hard — прислівник без -ly; hardly = ледве."]]},
N4:{q:[["My English isn't ___ good as yours.",["so","as","than"],1,"(not) as … as."],["This test was ___ easier than the last one.",["very","much","more"],1,"Посилення порівняння: much / far / a lot, а не very."],["He's the ___ person in the team.",["most experienced","experiencedest","more experienced"],0,"Довгий прикметник → the most."]],
 c:[["He is older than me in two years.","He is two years older than me.","Різниця ставиться перед порівнянням."],["It's the more expensive hotel in the city.","It's the most expensive hotel in the city.","Найвищий ступінь серед багатьох → the most."]]},
N5:{q:[["analyse → ___",["analysement","analysis","analyst"],1,"analyse → analysis (процес)."],["The ___ of the new law caused protests.",["introduce","introduction","introducing of"],1,"Номіналізація: introduce → introduction."],["It's a ___ drive from here.",["two hours","two-hour","two-hours"],1,"Число + іменник як означення — через дефіс і в однині."]],
 c:[["We waited at the stop of the bus.","We waited at the bus stop.","Усталений складений іменник: bus stop."],["After he arrived, prices went up.","After his arrival, prices went up.","Номіналізація: arrive → arrival."]]},
P1:{q:[["We'll meet ___ next Friday.",["on","at","—"],2,"next + день — без прийменника."],["There's a picture ___ the wall.",["in","on","at"],1,"Поверхня → on."],["I usually read ___ night.",["in","at","on"],1,"at night, але in the morning / in the evening."]],
 c:[["I arrived to London yesterday.","I arrived in London yesterday.","arrive in (місто, країна), arrive at (будівля), але не arrive to."],["She is in the work now.","She is at work now.","at work, at home, at school — без артикля."]]},
P2:{q:[["He stopped ___ — it's bad for his health.",["to smoke","smoking","smoke"],1,"Перестав палити → stop + -ing."],["I'm good at ___ people's names.",["remember","to remember","remembering"],2,"Після прийменника at → -ing."],["She managed ___ the exam.",["passing","to pass","pass"],1,"manage + to + інфінітив."]],
 c:[["I suggest to take a taxi.","I suggest taking a taxi.","suggest + -ing (або suggest that we take)."],["He avoided to answer the question.","He avoided answering the question.","avoid + -ing."]]},
P3:{q:[["The meeting was ___ until next week.",["put off","put on","put up"],0,"put off = відкласти."],["I ___ an old friend in the street yesterday.",["came across","came up","came over"],0,"come across = випадково зустріти."],["If you don't know the word, ___.",["look up it","look it up","look up"],1,"Займенник посередині: look it up."]],
 c:[["I can't put up this noise.","I can't put up with this noise.","Трислівне дієслово: put up with = терпіти."],["Please fill in it.","Please fill it in.","Займенник — між дієсловом і часткою."]]},
P4:{q:[["The results ___ next week.",["will announce","will be announced","are announcing"],1,"Майбутній пасив: will be + past participle."],["The road ___ at the moment.",["is repaired","is being repaired","repairs"],1,"Процес зараз → is being + past participle."],["I ___ my eyes tested yesterday.",["had","did","made"],0,"have something done."]],
 c:[["This house was build in 1920.","This house was built in 1920.","build → built."],["I cut my hair at the hairdresser's.","I had my hair cut at the hairdresser's.","Стрижеш не сам → have something done."]]},
P5:{q:[["Please don't ___ a noise.",["do","make","have"],1,"make a noise."],["He apologised ___ being late.",["for","about","of"],0,"apologise for + -ing."],["Can you ___ me a favour?",["make","do","give"],1,"do someone a favour."]],
 c:[["It depends of you.","It depends on you.","depend on."],["I did a mistake in the test.","I made a mistake in the test.","make a mistake."]]},
Q1:{q:[["How often ___ to the gym?",["you go","do you go","you do go"],1,"Допоміжне — перед підметом."],["What ___ to you yesterday?",["happened","did happen","did it happen"],0,"Питання до підмета: what happened."],["Who ___ you waiting for?",["do","are","is"],1,"waiting → continuous: are you waiting; прийменник — у кінці."]],
 c:[["Why she is angry?","Why is she angry?","Інверсія: is she."],["What means this word?","What does this word mean?","Питання до додатка → does + інфінітив."]]},
Q2:{q:[["They haven't arrived yet, ___?",["haven't they","have they","did they"],1,"Заперечення → ствердний tag."],["I didn't sleep well. — ___.",["Neither did I","So did I","Neither I did"],0,"Згода із запереченням у минулому → Neither did I."],["I'm right, ___?",["amn't I","aren't I","am I"],1,"Особлива форма: aren't I."]],
 c:[["He went home, wasn't he?","He went home, didn't he?","went → допоміжне did."],["I can't swim. — Me too.","I can't swim. — Me neither.","Згода із запереченням → Me neither / Neither can I."]]},
Q3:{q:[["I'd like to know how much ___.",["does it cost","it costs","costs it"],1,"Прямий порядок, без does."],["Do you remember where ___ the keys?",["did you put","you put","you did put"],1,"Без did, прямий порядок."],["I'm not sure ___ he's coming or not.",["whether","that","what"],0,"whether … or not."]],
 c:[["Do you know where does she work?","Do you know where she works?","Без does; дієслово з -s."],["Could you tell me is this seat free?","Could you tell me if this seat is free?","Так / ні → if + прямий порядок."]]},
Q4:{q:[["\"Can you help?\" → She asked if I ___ help.",["can","could","will"],1,"can → could."],["\"We've finished.\" → They said they ___ finished.",["have","had","has"],1,"present perfect → past perfect."],["\"Sit down.\" → He told me ___.",["sit down","to sit down","that I sit down"],1,"Наказ → told + to."]],
 c:[["She asked me what was my name.","She asked me what my name was.","Непряме питання — прямий порядок."],["He said to not worry.","He told me not to worry.","Наказ: tell someone not to."]]},
Q5:{q:[["They accused him ___ the documents.",["of stealing","to steal","for stealing"],0,"accuse someone of + -ing."],["The doctor ___ me to rest.",["suggested","advised","said"],1,"advise someone to."],["She admitted ___ a mistake.",["to make","making","make"],1,"admit + -ing."]],
 c:[["He insisted to pay the bill.","He insisted on paying the bill.","insist on + -ing."],["She explained me the problem.","She explained the problem to me.","explain something to someone."]]},
S1:{q:[["___ a lot of traffic in the city centre.",["Is","There is","It has"],1,"Наявність чогось → there is."],["We ___ go to the cinema.",["sometimes","sometimes do","do sometimes not"],0,"Прислівник частоти — перед основним дієсловом."],["They moved ___.",["last year to Canada","to Canada last year","Canada to last year"],1,"Спершу місце, потім час."]],
 c:[["I always am tired on Mondays.","I am always tired on Mondays.","Прислівник частоти — після be."],["Yesterday I saw in the park Tom.","Yesterday I saw Tom in the park.","Додаток — одразу після дієслова."]]},
S2:{q:[["Which is correct?",["Are you ready ?","Are you ready?","Are you ready ?!"],1,"Перед ? пробілу немає."],["The ___ toys are everywhere.",["childrens'","children's","childrens"],1,"Неправильна множина children + 's."],["___ coming tomorrow.",["Their","There","They're"],2,"They are → They're."]],
 c:[["Your late again !","You're late again!","You are → You're; перед ! пробілу немає."],["My parent's house is in lviv.","My parents' house is in Lviv.","Двоє батьків → parents'; назва міста — з великої."]]},
S3:{q:[["The people ___ I met were very kind.",["which","—","whose"],1,"Займенник-додаток в обмежувальному підрядному можна опустити (або who / that)."],["He passed the exam, ___ surprised everyone.",["that","which","what"],1,"which відсилає до всього речення."],["The day ___ we met was rainy.",["when","which","where"],0,"Час → when."]],
 c:[["The book what I'm reading is great.","The book that I'm reading is great.","what не вживається як відносний займенник після іменника."],["This is the woman who her son is my friend.","This is the woman whose son is my friend.","Чий → whose, без her."]]},
S4:{q:[["I study hard. ___, I still find grammar difficult.",["Although","However","Despite"],1,"Нове речення з комою → However."],["She saved money ___ buy a car.",["for","in order to","so that"],1,"Мета + інфінітив → (in order) to."],["He was ill; ___, he missed the meeting.",["therefore","although","despite"],0,"Результат → therefore."]],
 c:[["I went to the shop for buy some milk.","I went to the shop to buy some milk.","Мета → to + інфінітив, а не for."],["In spite of he was tired, he worked late.","In spite of being tired, he worked late.","in spite of + -ing або іменник."]]},
S5:{q:[["It was my sister ___ found the solution.",["which","who","what"],1,"It-cleft про людину → who (або that)."],["Hardly ___ arrived when it started to rain.",["we had","had we","did we"],1,"Hardly had we arrived when…"],["Which sentence is the most formal?",["Help me, please.","I would appreciate your assistance.","Can you give me a hand?"],1,"Формальний реєстр."]],
 c:[["Only later I realised my mistake.","Only later did I realise my mistake.","Only later на початку → інверсія з did."],["The thing what I like is the music.","The thing that I like is the music.","Після іменника — that, а не what. Або: What I like is the music."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Чому два часи
В українській «я працюю» означає і «працюю взагалі», і «працюю зараз». Англійська розділяє ці значення, і вибір часу — це не стиль, а зміст: <i>I live in Kyiv</i> (постійно) і <i>I'm living in Kyiv</i> (тимчасово, поки що).
| | Present simple | Present continuous |
| Форма | I work / she work<b>s</b> | I <b>am</b> work<b>ing</b> |
| Заперечення | I <b>don't</b> work / she <b>doesn't</b> work | I'm <b>not</b> working |
| Питання | <b>Do</b> you work? <b>Does</b> she work? | <b>Are</b> you working? |
| Значення | звичка, факт, розклад | зараз, тимчасово, зміна |
| Маркери | always, usually, often, every day | now, at the moment, today, this week |
## Закінчення -s у 3-й особі
Найчастіша помилка українців і на письмі, і в мові. Після he, she, it і будь-якого іменника в однині: <i>My brother play<b>s</b></i>. Правопис: -es після -s, -sh, -ch, -x, -o (watch<b>es</b>, go<b>es</b>); приголосна + y → -ies (stud<b>ies</b>), але play<b>s</b>. Після does закінчення зникає: <i>Does he play?</i>, а не <s>Does he plays?</s>
## Дієслова стану
Деякі дієслова описують стан, а не дію, і в continuous не вживаються: know, understand, believe, like, love, hate, want, need, prefer, own, belong, seem, mean. Деякі мають два значення: <i>I think it's true</i> (думка) / <i>I'm thinking about it</i> (процес); <i>She has a car</i> (володіє) / <i>She's having lunch</i> (дія).
## Розклад і плани
- Розклад транспорту, кіно, уроків — present simple: <i>The train leaves at 6.</i>
- Домовленості — present continuous: <i>I'm meeting Anna tomorrow.</i> (див. тему про майбутнє)
! Тест: якщо можна додати «зараз, у цей період» і дія справді триває — continuous. Якщо «зазвичай, завжди» — simple.`,
V2:`## Правильні дієслова
Додаємо -ed: work → work<b>ed</b>. Правопис: -e → +d (lived); приголосна + y → -ied (studied); коротке слово з наголошеним голосним між двома приголосними подвоює кінцеву: stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed (але visit → visited).
Вимова -ed: [t] після глухих (worked), [d] після дзвінких (played), [ɪd] після t і d (wanted, needed). Лише в останньому випадку з'являється додатковий склад.
## Неправильні дієслова
Їх близько 150, але в мові постійно трапляються десь 60. Вчи трійками: <i>go – went – gone</i>, <i>take – took – taken</i>, <i>write – wrote – written</i>. Друга форма потрібна для past simple, третя — для perfect і пасиву.
| Інфінітив | Past simple | Past participle |
| be | was / were | been |
| have | had | had |
| do | did | done |
| make | made | made |
| get | got | got (BrE) / gotten (AmE) |
| think | thought | thought |
| bring | brought | brought |
| buy | bought | bought |
## Питання і заперечення
Допоміжне did «забирає» минулий час на себе, тому основне дієслово стоїть в інфінітиві: <i>Did she call?</i> <i>She didn't call.</i> Виняток — be: <i>Were you there? I wasn't.</i>
## used to і would
- <b>used to</b> — звичка або стан, яких уже немає: <i>I used to have long hair.</i>
- <b>would</b> — лише повторювані дії в розповіді, не стани: <i>Every summer we would go to the sea.</i>
- Не плутай з <b>be used to + -ing</b> — «бути звиклим»: <i>I'm used to getting up early.</i>
! В українській один минулий час, тому найчастіше помиляються не у виборі часу, а у формі: <s>goed</s>, <s>did went</s>.`,
V3:`## Одна думка, два часи
В українській «я загубив ключі» підходить до будь-якої ситуації. В англійській питання в тому, що важливіше: <b>коли</b> це сталося (past simple) чи <b>що маємо зараз</b> (present perfect).
| Present perfect | Past simple |
| <i>I've lost my keys</i> (і досі не маю) | <i>I lost my keys yesterday</i> |
| <i>Have you ever tried sushi?</i> | <i>Did you try sushi in Japan?</i> |
| <i>She's written three books</i> (може написати ще) | <i>Shakespeare wrote 37 plays</i> |
| <i>I haven't seen him this week</i> (тиждень триває) | <i>I didn't see him last week</i> |
## Чотири значення present perfect
- <b>Досвід</b> у житті без дати: <i>I've been to Spain twice.</i>
- <b>Результат</b>, видимий зараз: <i>Look, it's stopped raining.</i>
- <b>Свіжа новина</b>: <i>The president has resigned.</i> А подробиці — уже в past simple: <i>He announced it this morning.</i>
- <b>Ситуація, що триває</b>, з for / since: <i>We've known each other since school.</i>
## been чи gone
<i>She has <b>gone</b> to Rome</i> — поїхала і зараз там. <i>She has <b>been</b> to Rome</i> — була і повернулася.
## for, since, ago
| for | since | ago |
| тривалість | початок | скільки часу тому |
| for two hours | since 9 o'clock | two hours ago |
| present perfect або past | present perfect | лише past simple |
! Пастка для українців: «Я працюю тут три роки» — не <s>I work here for three years</s>, а <i>I've worked here for three years</i> або <i>I've been working here for three years</i>.`,
V4:`## Три ролі в одній історії
| Час | Роль | Приклад |
| Past continuous | тло, процес | <i>It was getting dark and people were going home.</i> |
| Past simple | подія, крок сюжету | <i>A man stopped me and asked for directions.</i> |
| Past perfect | ще раніше, передісторія | <i>I realised I had seen him before.</i> |
## when і while
- <b>while</b> + процес: <i>While I was cooking, …</i>
- <b>when</b> + коротка подія: <i>…when the phone rang.</i>
- Дві паралельні тривалі дії: <i>I was reading while he was watching TV.</i>
- Дві послідовні події — обидві в past simple: <i>When he arrived, we had dinner</i> (спершу прийшов, потім вечеряли). Порівняй: <i>When he arrived, we had had dinner</i> (вечеря була до його приходу).
## Коли past perfect не потрібен
Якщо порядок подій зрозумілий зі слів before, after, then, past perfect необов'язковий: <i>After I finished work, I went home.</i> Не вживай його для всього «давнього»: він потрібен лише тоді, коли в історії є інша минула точка відліку.
## Дієслова стану
Як і в теперішньому, дієслова стану не мають -ing: <i>I knew</i>, а не <s>I was knowing</s>.
! Українська тут не допомагає: «Коли я прийшов, вони пішли» може означати і «пішли після», і «вже пішли». Англійська це розрізняє: <i>they left</i> / <i>they had left</i>.`,
V5:`## Simple чи continuous у perfect
| Perfect simple — результат | Perfect continuous — процес |
| <i>I've read the book</i> (дочитав) | <i>I've been reading the book</i> (читаю, ще не закінчив) |
| <i>She's written 20 pages</i> (кількість) | <i>She's been writing all morning</i> (тривалість) |
| <i>I've painted the room</i> (готово) | <i>I've been painting — that's why I'm dirty</i> (видимий слід) |
Якщо є число або «скільки разів» — simple. Якщо «як довго» — частіше continuous.
## Погляд із майбутнього
- <b>Future continuous</b> — дія буде в процесі: <i>Don't call at 9, I'll be driving.</i> Також ввічливе питання про плани: <i>Will you be using the car tonight?</i>
- <b>Future perfect</b> — дія завершиться до певного моменту: <i>By the end of the year, I'll have read 30 books.</i> Ключові слова: by, by the time, by then.
- <b>Future perfect continuous</b> (рідко): <i>In May I'll have been working here for ten years.</i>
## Часова лінія
| Момент відліку | Тривалість до нього |
| зараз | have been doing |
| у минулому | had been doing |
| у майбутньому | will have been doing |
! Без цих часів тебе зрозуміють, але мова B2 без них звучить «плоско». Почни з present perfect continuous: на ньому тримається половина розмовних фраз (I've been thinking…, What have you been up to?).`,
M1:`## Як поводяться модальні дієслова
- Одна форма для всіх осіб: <i>I can, she can</i> (а не <s>cans</s>).
- Після них — інфінітив без to: <i>must go</i>, <i>should know</i>.
- Питання — інверсією: <i>Can you…? Should I…?</i>; заперечення — через not: <i>can't, mustn't, shouldn't</i>.
- Більшість не має минулого й майбутнього часу, тому є замінники: <i>was able to, had to, will be able to, will have to</i>.
| Значення | Теперішнє | Минуле | Майбутнє |
| уміння | can | could / was able to | will be able to |
| обов'язок | must / have to | had to | will have to |
| немає потреби | don't have to | didn't have to | won't have to |
| заборона | mustn't / can't | couldn't | — |
| порада | should / ought to | should have done (тема M5) | — |
## must і have to
<i>I must call my mum</i> — я сам так вирішив. <i>I have to wear a tie at work</i> — так вимагають правила. В американській англійській і в розмові have to вживають частіше. Головне — заперечення: <b>mustn't</b> = не можна, <b>don't have to</b> = не обов'язково.
## Ввічливість
Від менш до більш ввічливого: <i>Can you…? → Could you…? → Would you mind + -ing…? → I was wondering if you could…</i> Пряме «Give me…» в англійській звучить різко, навіть з please.
! Українські «треба» і «можна» обходяться без підмета, тому легко сказати <s>Is need to go</s>. Англійська завжди вимагає підмета: <i>I need to go. We can start.</i>`,
M2:`## Чотири форми і їхні ролі
| Форма | Коли | Приклад |
| will | рішення зараз, обіцянка, пропозиція, думка | <i>I'll have the soup. I promise I'll write.</i> |
| be going to | намір, план; прогноз за явними ознаками | <i>She's going to have a baby.</i> |
| present continuous | особиста домовленість | <i>I'm seeing the dentist at 3.</i> |
| present simple | розклад, графік | <i>The concert starts at 8.</i> |
Часто можливі і will, і going to, але going to звучить «запланованіше», а will — «щойно вирішив».
## Підрядні часу й умови
Після <b>when, if, as soon as, before, after, until, once</b> англійська вживає теперішній час, хоча мова про майбутнє: <i>I'll wait until you <b>finish</b>.</i> Те саме з perfect: <i>Call me when you <b>have finished</b>.</i>
## Інші корисні форми
- <b>be about to</b> — от-от: <i>Hurry, the train is about to leave.</i>
- <b>shall</b> у пропозиціях: <i>Shall I open the window? Shall we go?</i>
- <b>will</b> для майбутніх фактів: <i>I'll be 30 next year.</i>
! В українській одна форма: «буду робити / зроблю». Почни з простого розрізнення: вже вирішив → going to; вирішуєш зараз → will; домовився → -ing.`,
M3:`## Реальне чи уявне
| Тип | if-частина | Головна частина | Значення |
| Zero | present | present | завжди так |
| First | present | will / can / may + інфінітив | реально можливо |
| Second | past simple | would / could / might + інфінітив | уявно, малоймовірно |
Вибір між first і second — це оцінка мовця: <i>If I get the job, I'll move</i> (цілком можливо) / <i>If I got the job, I'd move</i> (навряд чи).
## Минулий час, що не означає минулого
У second conditional past simple показує не час, а нереальність: <i>If I knew his number</i> — я не знаю його зараз. Звідси <i>If I were</i>: у формальній мові were — для всіх осіб. У розмові допустимо <i>If I was</i>, але в усталеному <i>If I were you</i> — лише were.
## Порядок і кома
Якщо речення починається з if, після умови ставимо кому: <i>If it rains, we'll stay in.</i> Якщо if у середині — коми немає: <i>We'll stay in if it rains.</i>
## Інші сполучники
unless (якщо не), as long as / provided that (за умови що), in case (на випадок, якщо): <i>Take an umbrella in case it rains.</i>
! Українські «якщо» і «якби» — гарна підказка: «якщо» → first, «якби» → second (або third — тема M4).`,
M4:`## Третя умовна
Говоримо про минуле, яке вже не змінити:
| if + past perfect | would / could / might have + past participle |
| If I had seen you, | I would have said hello. |
| If they hadn't helped us, | we might have failed. |
У розмові — скорочення: <i>If I'd known, I'd have come</i> ('d = had у першій частині і would — у другій).
## Змішані умовні
- Минуле → зараз: <i>If I <b>had taken</b> that job, I <b>would be</b> rich now.</i>
- Постійна риса → минуле: <i>If I <b>were</b> braver, I <b>would have asked</b> her.</i>
## wish і if only
| Про що жаль | Форма | Приклад |
| теперішнє | wish + past simple | <i>I wish I lived closer.</i> |
| минуле | wish + past perfect | <i>I wish I had listened.</i> |
| уміння | wish + could | <i>I wish I could drive.</i> |
| чужа поведінка | wish + would | <i>I wish he would call.</i> |
If only — сильніший, емоційніший варіант: <i>If only I had known!</i>
## Схожі конструкції
<i>It's time we went</i> (давно пора), <i>I'd rather you didn't smoke</i> (я б волів, щоб ти не) — теж past із теперішнім значенням.
! Головне правило: <b>would ніколи не стоїть після if</b>. Чуєш «якби» — шукай past simple або past perfect.`,
M5:`## Шкала впевненості
| Впевненість | Теперішнє | Минуле |
| 95% так | must be | must have been |
| ~50% | might / may / could be | might / may / could have been |
| 95% ні | can't / couldn't be | can't / couldn't have been |
Зверни увагу: протилежність must у значенні висновку — <b>can't</b>, а не mustn't.
## Модальні з минулим: оцінка того, що сталося
- <b>should have / ought to have</b> — було б правильно, але не зроблено: <i>We should have booked a table.</i>
- <b>shouldn't have</b> — зроблено, а не варто було: <i>I shouldn't have eaten so much.</i>
- <b>could have</b> — була можливість: <i>You could have died!</i> <i>I could have helped you if you'd asked.</i>
- <b>would have</b> — у третій умовній (тема M4).
## needn't have і didn't need to
<i>I <b>needn't have</b> taken a taxi</i> — узяв, а виявилося зайвим. <i>I <b>didn't need to</b> take a taxi</i> — потреби не було (найімовірніше, не брав).
## Вимова
У мові have скорочується: <i>must've, should've, could've</i>. Звідси часта помилка навіть у носіїв: <s>should of</s>. Пиши лише <b>should have</b>.
! Українське «мабуть, він пішов» → <i>He must have left</i>; «не може бути, щоб він пішов» → <i>He can't have left</i>.`,
N1:`## Головне питання: яке саме?
Артикль показує, чи знає слухач, про що саме йдеться.
| | Однина злічуваних | Множина | Незлічувані |
| загальне, будь-яке | <b>a</b> cat | cats | water |
| конкретне, відоме | <b>the</b> cat | <b>the</b> cats | <b>the</b> water |
Злічуваний іменник в однині не може стояти сам: <s>I have car</s> → <i>I have a car / my car / the car</i>.
## a чи an
Вирішує звук, а не літера: <i>an hour, an MBA, an honest man</i> / <i>a university, a European, a one-way ticket</i>.
## Коли the
- Друга згадка: <i>a man… the man</i>.
- Єдине у світі або в ситуації: <i>the sun, the government, Close the door.</i>
- Найвищий ступінь і порядкові числівники: <i>the best, the first, the same, the only</i>.
- Музичні інструменти, моря, річки, гірські хребти, групи островів: <i>the piano, the Black Sea, the Dnipro, the Alps</i>.
- Назви з of і множинні назви: <i>the University of Kyiv, the Netherlands</i>.
## Коли нічого
- Загальні твердження: <i>Dogs are loyal. Money isn't everything.</i>
- Більшість країн, міст, вулиць, озер, окремих гір: <i>Poland, Oxford Street, Everest.</i>
- Мови, спорт, прийоми їжі: <i>speak Ukrainian, play football, after lunch.</i>
- Місця за їхнім призначенням: <i>go to school / to bed / to work / to hospital</i> (вчитися, спати, працювати, лікуватися).
! Тест: якщо в перекладі можна додати «якийсь, один» — a; «цей, той самий» — the; «взагалі» — нічого.`,
N2:`## Незлічувані, які в українській злічувані
Пастка: «порада», «новина», «меблі» в українській поводяться як звичайні іменники. В англійській ці слова незлічувані: без a / an, без -s, дієслово — в однині.
| Незлічуване | Як порахувати |
| advice, information, news | a piece of advice / information / news |
| furniture, luggage, equipment | a piece of furniture, an item of luggage |
| work, homework, research | a task, a project |
| bread, money | a loaf of bread, a coin, a note |
<i>The news <b>is</b> good. Your hair <b>is</b> beautiful.</i>
## Слова кількості
| | Злічувані | Незлічувані |
| багато | many, a lot of | much, a lot of |
| трохи (позитивно) | a few | a little |
| мало (негативно) | few | little |
| менше | fewer | less |
| достатньо | enough | enough |
У ствердженнях much і many звучать формально, у розмові частіше кажуть a lot of / lots of: <i>We have a lot of work</i>, але <i>We don't have much work</i>.
## some і any
some — ствердження, пропозиції й прохання, коли чекаємо «так»: <i>Can I have some water?</i> any — питання й заперечення, а також «будь-який»: <i>You can take any bus.</i> Похідні працюють так само: something / anything, someone / anyone.
## Слова з двома значеннями
<i>a coffee</i> (чашка) / <i>coffee</i> (напій), <i>a paper</i> (газета) / <i>paper</i> (папір), <i>a time</i> (раз) / <i>time</i> (час).
! Найчастіші помилки українців: <s>informations</s>, <s>advices</s>, <s>a news</s>, <s>furnitures</s>, <s>less people</s>.`,
N3:`## Форма і місце
Прикметник однаковий для всіх родів і чисел: <i>a tall man, tall women</i>. Стоїть перед іменником або після be, seem, look, feel, become: <i>She looks tired.</i> Після дієслів відчуттів — прикметник, а не прислівник: <i>It smells good</i>, а не <s>well</s>.
## Порядок кількох прикметників
| думка | розмір | вік | форма | колір | походження | матеріал | іменник |
| nice | big | old | square | black | German | leather | bag |
Зазвичай досить двох-трьох: <i>a nice old leather bag</i>.
## -ed і -ing
| -ed: як я почуваюся | -ing: яке воно |
| I'm bored / tired / confused | The film is boring / tiring / confusing |
| She was surprised | The result was surprising |
<s>I am boring</s> означає «я нудна людина».
## Прислівники способу дії
Зазвичай прикметник + -ly: quick → quickly, careful → carefully, easy → easily. Неправильні: good → well, fast → fast, hard → hard, late → late (lately = останнім часом). Деякі слова на -ly — прикметники: friendly, lovely, lonely (кажемо <i>in a friendly way</i>).
## so і such, too і enough
- <b>so</b> + прикметник або прислівник: <i>so hot, so quickly</i>; <b>such</b> + (a) + (прикметник) + іменник: <i>such a hot day, such nice people</i>.
- <b>too</b> + прикметник — надто (це проблема): <i>too cold to swim</i>.
- прикметник + <b>enough</b>, enough + іменник: <i>warm enough, enough money</i>.
! Українське «добре» буває і прикметником, і прислівником, а англійська розділяє: <i>a good driver</i>, але <i>drives well</i>.`,
N4:`## Як утворюється
| Прикметник | Вищий ступінь | Найвищий ступінь |
| короткий: cheap, fast | cheap<b>er</b> | the cheap<b>est</b> |
| на -e: nice | nice<b>r</b> | the nice<b>st</b> |
| голосний + приголосний: big, hot | bi<b>gg</b>er | the bi<b>gg</b>est |
| на -y: easy, happy | eas<b>ier</b> | the eas<b>iest</b> |
| 2+ склади: modern, expensive | <b>more</b> expensive | <b>the most</b> expensive |
| good / bad / far | better / worse / further | the best / the worst / the furthest |
Деякі двоскладові мають обидва варіанти: <i>cleverer / more clever, quieter / more quiet</i>.
## Як порівнювати точно
- Велика різниця: <i>much, far, a lot, considerably</i> bigger.
- Мала різниця: <i>slightly, a bit, a little</i> bigger.
- Рівність: <i>as fast as</i>; нерівність: <i>not as fast as</i> (м'якше, ніж <i>slower than</i>).
- Наростання: <i>more and more expensive</i>, <i>bigger and bigger</i>.
- Паралельна зміна: <i>The sooner, the better.</i>
## Після than і as
У розмові — об'єктний займенник: <i>He's taller than me.</i> У формальній мові — займенник із дієсловом: <i>He's taller than I am.</i>
## Найвищий ступінь
З the і часто з in (місце, група) або з present perfect: <i>the best student in the class</i>, <i>the worst meal I've ever had</i>. Не <s>of the class</s>.
! Українське «ніж, за» → than; «такий самий, як» → as … as; «найбільш» → the most.`,
N5:`## Іменник перед іменником
Англійська часто ставить один іменник перед іншим замість прийменника чи прикметника: <i>a city centre, a job interview, a coffee cup</i>. Перший іменник — в однині: <i>a shoe shop</i>, а не <s>shoes shop</s>; <i>a ten-pound note</i>, <i>a 300-page report</i>.
## 's чи of
| 's | of |
| люди і тварини: <i>Anna's idea, the dog's bowl</i> | речі: <i>the roof of the house</i> |
| організації, країни: <i>the government's plan</i> | довгі групи: <i>the son of the woman who lives next door</i> |
| час: <i>yesterday's meeting, a week's holiday</i> | частина, кількість: <i>a cup of tea, most of the students</i> |
Множина на -s — апостроф після s: <i>my parents' house</i>. Неправильна множина: <i>the children's room</i>.
## Номіналізація
| Дієслово / прикметник | Іменник |
| decide, improve, develop | decision, improvement, development |
| increase, rise, fall | an increase in, a rise in, a fall in |
| fail, succeed | failure, success |
| able, possible, important | ability, possibility, importance |
<i>The government decided to raise taxes, which surprised many people</i> → <i>The government's decision to raise taxes surprised many people.</i>
## Міра
Номіналізація робить текст стислим і формальним, але надмір робить його важким. В есе — одна-дві на речення; у розмові краще дієслова.
! Корисні прийменники після іменників: an increase <b>in</b>, a reason <b>for</b>, an effect <b>on</b>, a solution <b>to</b>, a demand <b>for</b>.`,
P1:`## Піраміда: від точки до простору
| | at — точка | on — поверхня, день | in — простір, період |
| Час | at 7:30, at noon, at night, at Christmas | on Friday, on 1 May, on my birthday | in July, in 2024, in summer, in the evening |
| Місце | at the door, at home, at the station | on the table, on the screen, on page 5 | in the box, in Kyiv, in the kitchen |
## Місце: at чи in
<i>at the cinema</i> — як місце події (дивимося фільм); <i>in the cinema</i> — всередині будівлі. <i>at the airport</i> — точка маршруту, <i>in Paris</i> — місто. Адреса: <i>at 15 Baker Street</i>, але вулиця: <i>in Baker Street</i> (BrE) / <i>on Baker Street</i> (AmE).
## Транспорт і рух
- <i>on the bus / train / plane / bike</i>, але <i>in a car / taxi</i>.
- <i>by car / by bus / by train</i> — спосіб, без артикля; <i>on foot</i> — пішки.
- Рух: <i>go <b>to</b> school</i>, але <i>go home</i> (без to); <i>get <b>into</b> a car</i>, <i>get <b>on</b> a bus</i>.
## Коли прийменник не потрібен
Перед next, last, this, every, а також tomorrow, yesterday: <i>I'll call you tomorrow morning.</i> <i>We met last summer.</i>
## Тривалість і межі
<b>for</b> — скільки (for two weeks), <b>during</b> — коли, в межах (during the meeting), <b>by</b> — не пізніше (by Friday), <b>until</b> — аж до (until Friday).
! «в» і «на» не перекладаються напряму: «на роботі» — <i>at work</i>, «на вулиці» — <i>in the street / outside</i>, «в понеділок» — <i>on Monday</i>.`,
P2:`## Дві великі групи
| + -ing | + to + інфінітив |
| enjoy, like / love / hate, mind | want, would like, need |
| avoid, deny, risk, miss | decide, plan, hope, expect |
| finish, keep, give up, carry on | agree, refuse, promise, offer |
| suggest, recommend, consider | manage, fail, afford, learn |
| admit, imagine, practise, can't stand | seem, tend, pretend, arrange |
Після like, love, hate можливі обидва варіанти: <i>I like swimming / I like to swim</i>. Але після <b>would like</b> — тільки to: <i>I'd like to go.</i>
## Після прийменника — завжди -ing
<i>She left without saying goodbye. I'm tired of waiting. Thank you for helping.</i> Особливо підступні вирази, де to — прийменник: <i>look forward to doing, be used to doing, object to doing, when it comes to doing</i>.
## Дієслово + особа + to
want, ask, tell, expect, allow, advise + особа + to: <i>I want you to come.</i> Не <s>I want that you come</s> — це калька з української. Але <b>make</b> і <b>let</b> — без to: <i>She made me laugh. Let me help.</i>
## Зміна значення
| | + -ing | + to |
| stop | <i>I stopped drinking coffee</i> — перестав | <i>I stopped to drink coffee</i> — зупинився, щоб випити |
| remember | <i>I remember meeting him</i> — пам'ятаю, що було | <i>Remember to call him</i> — не забудь |
| try | <i>Try restarting the computer</i> — спробуй як спосіб | <i>I tried to open it</i> — намагався |
| regret | <i>I regret saying that</i> — шкодую про сказане | <i>We regret to inform you</i> — з жалем повідомляємо |
! -ing як підмет: <i>Learning languages is fun.</i> Українська тут вживає інфінітив («Вчити мови цікаво»), але <s>To learn languages is fun</s> звучить книжно.`,
P3:`## Будова
Фразове дієслово — це дієслово + частка (up, out, off, on, in, down, away, back, over) або дві частки (look forward to, get on with). Частка часто додає відтінок:
| Частка | Відтінок | Приклади |
| up | завершення, збільшення | eat up, fill up, grow up, speed up |
| out | назовні, до кінця | find out, run out, work out |
| off | від'єднання, вимкнення | turn off, set off, take off |
| on | продовження, увімкнення | carry on, go on, turn on |
| down | зменшення, запис | slow down, write down, cut down on |
## Розділювані й нерозділювані
- З іменником можливі обидва порядки: <i>pick up the phone / pick the phone up</i>.
- Із займенником — тільки посередині: <i>pick it up</i>, а не <s>pick up it</s>.
- Нерозділювані (look after, look for, get over, come across, deal with) — об'єкт завжди після: <i>look after them</i>.
- Трислівні (look forward to, get on with, run out of, put up with) не розділяються.
## 20 найкорисніших
find out, give up, look for, look after, look forward to, get up, get on with, turn on / off, put off, set up, carry on, work out, come up with, figure out, pick up, run out of, take off, deal with, bring up, check in / out.
## Стиль
| Розмова | Формальне письмо |
| find out | discover |
| put off | postpone |
| look into | investigate |
| come up with | devise, propose |
| cut down on | reduce |
! Вчи фразові дієслова з прикладом і об'єктом, а не списками: <i>run out <b>of</b> time</i>, <i>come up <b>with</b> an idea</i>.`,
P4:`## Як утворюється
| Час | Активний | Пасивний |
| Present simple | They make cars here. | Cars <b>are made</b> here. |
| Present continuous | They are repairing it. | It <b>is being repaired</b>. |
| Past simple | Someone stole my bag. | My bag <b>was stolen</b>. |
| Present perfect | They have cancelled it. | It <b>has been cancelled</b>. |
| Future | They will send it. | It <b>will be sent</b>. |
| Модальні | You must sign it. | It <b>must be signed</b>. |
## Коли пасив
- Виконавець невідомий або неважливий: <i>My phone was stolen.</i>
- Важливий результат, а не те, хто зробив: <i>The decision has been made.</i>
- Науковий, офіційний стиль: <i>The samples were analysed.</i>
- Ввічливо уникнути звинувачення: <i>Mistakes were made.</i>
## «Кажуть, що…»
Формальний стиль новин: <i>It is said that… / He is said to be…</i>, <i>It is believed that… / She is believed to have left.</i>
## have / get something done
Послуга, яку робить хтось інший: <i>I had my car serviced. She's getting her nails done.</i> Також неприємність: <i>He had his wallet stolen.</i> get звучить розмовніше.
! Українська часто вживає неозначено-особові речення («Тут продають квіти», «Його звільнили»). В англійській це майже завжди пасив: <i>Flowers are sold here. He was fired.</i>`,
P5:`## Прийменник належить слову
Прийменник після дієслова чи прикметника не перекладається з української: «залежить від» — <i>depend <b>on</b></i>, «злитися на когось» — <i>be angry <b>with</b> someone</i>. Вчи такі пари разом.
| Дієслово | Прикметник | Іменник |
| depend on, rely on | interested in | a reason for |
| listen to, belong to | good / bad at | an increase in |
| wait for, pay for, ask for | afraid of, proud of, tired of | a solution to |
| think about / of | responsible for, famous for | an effect on |
| succeed in, believe in | similar to, married to | a demand for |
| complain about, worry about | different from, keen on | a lack of |
## Без прийменника
Деякі дієслова в українській мають прийменник, а в англійській — ні: <i>discuss the plan</i> (а не <s>discuss about</s>), <i>enter the room</i>, <i>answer the question</i>, <i>call me</i>, <i>marry someone</i>, <i>reach the station</i>.
## make чи do
| make — створюємо щось | do — виконуємо дію |
| a decision, a mistake, a mess | homework, housework, the dishes |
| money, a profit, progress | business, research, an exercise |
| a phone call, a plan, an effort | your best, a favour, damage |
| friends, a noise, a suggestion | a job, a course, sport |
## Інші колокації
take a break / a risk / part in; have a shower / a chat / fun; pay attention / a compliment; keep calm / in touch; catch the bus / a cold; raise a question; meet a deadline; heavy rain / traffic; strong coffee; a high price.
! «Сильний дощ» — heavy rain, а не <s>strong rain</s>. Перевіряй колокації в словнику, наприклад Oxford Collocations Dictionary.`,
Q1:`## Формула питання
| Питальне слово | Допоміжне | Підмет | Дієслово | Решта |
| Where | do | you | work | ? |
| What | are | they | watching | ? |
| How long | have | you | lived | here? |
| — | Can | she | swim | ? |
Якщо у ствердженні є допоміжне (be, have, can, will), воно переходить наперед. Якщо немає — з'являється do / does / did.
## Питання до підмета
Коли who або what — підмет, порядок як у ствердженні, без do: <i>Who lives here? What made you change your mind?</i> Порівняй: <i>Who <b>does</b> Anna love?</i> (кого любить Анна?) / <i>Who loves Anna?</i> (хто любить Анну?).
## Питальні слова
what, which (вибір з обмеженого), who, whose, where, when, why, how, how much / many, how long, how often, how far, what time, what kind of.
## Відповіді
Короткі відповіді повторюють допоміжне: <i>Do you like it? — Yes, I do. / No, I don't.</i> <i>Has he called? — No, he hasn't.</i> Голе «Yes» чи «No» звучить різко.
! Українське «Ти живеш тут?» з інтонацією в англійській теж трапляється (You live here?), але лише як здивування. Звичайне питання вимагає інверсії.`,
Q2:`## Як працює tag
| Речення | Tag | Приклад |
| ствердження | заперечний | <i>You're coming, aren't you?</i> |
| заперечення | ствердний | <i>You aren't coming, are you?</i> |
Займенник у tag відповідає підмету: <i>Your parents live in Lviv, don't <b>they</b>?</i> Слова never, hardly, nobody роблять речення заперечним: <i>He never calls, <b>does</b> he?</i>
## Інтонація
Тон спадає — «правда ж?», ти чекаєш згоди. Тон підіймається — справжнє питання, ти не впевнений.
## Особливі випадки
- <i>I'm…, aren't I?</i>
- <i>Let's…, shall we?</i>
- Наказ: <i>Sit down, will you? / Don't be late, will you?</i>
- <i>There's a problem, isn't there?</i>
## «Я теж» і «я ні»
| Репліка | Згода | Незгода |
| I like it. | So do I. / Me too. | I don't. |
| I don't like it. | Neither do I. / Nor do I. / Me neither. | I do. |
| I was there. | So was I. | I wasn't. |
| I can't swim. | Neither can I. | I can. |
Після so і neither — інверсія: допоміжне перед підметом.
## Ехо-питання
Щоб показати інтерес: <i>I've just got married. — <b>Have you</b>? Congratulations!</i>
! Універсального «правда?» в англійській немає, тому <s>isn't it?</s> після будь-якого речення — типова помилка. Tag щоразу будується з допоміжного дієслова речення.`,
Q3:`## Навіщо
Пряме питання незнайомій людині (<i>Where is the toilet?</i>) цілком нормальне, але непряме звучить ввічливіше. Його постійно вживають у листах, на роботі, в магазині.
## Перетворення
| Пряме | Непряме |
| Where <b>is</b> the station? | Could you tell me where the station <b>is</b>? |
| What time <b>does</b> it <b>open</b>? | Do you know what time it <b>opens</b>? |
| Why <b>did</b> he <b>leave</b>? | I wonder why he <b>left</b>. |
| <b>Is</b> it far? | Do you know <b>if</b> it's far? |
| <b>Can</b> I pay by card? | Could you tell me <b>whether</b> I can pay by card? |
Кроки: 1) прибери do / does / did і поверни дієслову час; 2) постав підмет перед дієсловом; 3) для «так / ні» додай if або whether.
## Вступні фрази
Could you tell me…? Do you know…? Have you any idea…? Would you mind telling me…? I was wondering… I'd like to know… Can you remember…?
## if чи whether
Майже синоніми. whether — формальніше і обов'язкове перед or not та після прийменника: <i>It depends on whether we have time.</i>
! В українській порядок слів не змінюється («Скажіть, де вокзал?»), тому хочеться залишити <s>where is</s>. Перевір: після where, what, if має йти підмет.`,
Q4:`## Зсув часів
| Пряма мова | Непряма (після said) |
| present simple: "I <b>live</b> here." | past simple: he <b>lived</b> there |
| present continuous: "I'm <b>working</b>." | past continuous: she <b>was working</b> |
| past simple, present perfect | past perfect: had done |
| will / can / may | would / could / might |
| must | had to (або must) |
Зсув необов'язковий, якщо сказане досі правда або вводимо в теперішньому: <i>He says he's tired. She said the Earth is round.</i>
## Слова часу і місця
now → then, today → that day, tomorrow → the next day / the following day, yesterday → the day before, here → there, this → that, ago → before.
## say чи tell
- <i>She <b>said</b> (that) she was busy.</i> / <i>She <b>said to me</b> that…</i>
- <i>She <b>told me</b> (that) she was busy.</i> — tell завжди з особою.
- that у розмові часто опускають.
## Питання і накази
- Wh-питання: <i>"Why are you late?" → He asked (me) why I was late.</i>
- Так / ні: <i>"Do you smoke?" → She asked if / whether I smoked.</i>
- Наказ: <i>"Close the door." → He told me to close the door.</i>
- Прохання: <i>"Please help me." → She asked me to help her.</i>
! Українська час не зсуває («Він сказав, що живе в Києві»). Тому <s>He said he lives</s> — помилка, якщо це сказано давно і могло змінитися.`,
Q5:`## Навіщо
<i>"I'll definitely call you."</i> → <i>She said she would call</i> — нейтрально; <i>She <b>promised</b> to call</i> — точніше і коротше. На рівні B2 такі дієслова очікують у переказі, есе й листах.
## Конструкції
| Модель | Дієслова | Приклад |
| + to | agree, refuse, offer, promise, threaten, decide | <i>He refused to sign.</i> |
| + особа + to | advise, ask, tell, encourage, invite, persuade, remind, warn | <i>She persuaded me to stay.</i> |
| + -ing | admit, deny, suggest, recommend, mention | <i>He admitted lying.</i> |
| + прийменник + -ing | apologise for, insist on, object to | <i>They insisted on paying.</i> |
| + особа + прийменник + -ing | accuse of, blame for, congratulate on, thank for | <i>I thanked her for helping.</i> |
| + that | explain, claim, complain, point out, announce | <i>She claimed (that) she was innocent.</i> |
## suggest — окрема пастка
Правильно: <i>He suggested going.</i> / <i>He suggested (that) we go</i> / <i>…we should go.</i> Неправильно: <s>He suggested me to go</s>, <s>He suggested to go</s>.
## explain
<i>Explain <b>the rule</b> to me</i>, а не <s>explain me</s>. Так само з describe і suggest.
! Добирай дієслово за наміром: обіцянка → promise, відмова → refuse, порада → advise / recommend, попередження → warn, визнання → admit.`,
S1:`## Фіксований порядок
| Підмет | Дієслово | Додаток | Місце | Час |
| My sister | bought | a new laptop | in town | last week. |
| We | 're watching | a film | at home | tonight. |
Час можна винести на початок для акценту: <i>Last week, my sister bought…</i> Але підмет і дієслово завжди разом і саме в такому порядку (крім питань).
## Формальні підмети it і there
- <b>it</b> — погода, час, відстань, оцінка: <i>It's late. It's 5 km. It's hard to say.</i>
- <b>there is / there are</b> — існування, наявність: <i>There's a bank near here.</i> Не <s>In the city is a bank</s>.
## Прислівники
| Тип | Місце | Приклад |
| частоти: always, often, never | перед дієсловом, після be і допоміжного | <i>I have never seen it.</i> |
| способу: well, carefully | після додатка | <i>She did the work carefully.</i> |
| ступеня: really, almost | перед словом, яке посилюють | <i>I really like it.</i> |
| also, just, already, still | як прислівники частоти | <i>She's already left.</i> |
| коментаря: fortunately, actually | на початку, з комою | <i>Fortunately, nobody was hurt.</i> |
## Два додатки
<i>She gave <b>me</b> the book</i> або <i>She gave the book <b>to me</b></i>. Із двома займенниками: <i>She gave it to me</i>.
! Українська може почати з додатка («Книжку я вже прочитав»). В англійській такий порядок — лише для сильного акценту, а звичайно: <i>I've already read the book.</i>`,
S2:`## Великі літери
Ширше, ніж в українській: займенник <b>I</b>, дні тижня й місяці (<i>Monday, July</i>), мови й національності (<i>English, a Ukrainian writer</i>), свята, назви організацій, слова в заголовках (<i>The Lord of the Rings</i>). Пори року — з малої: <i>in summer</i>.
## Апостроф
| Значення | Приклад |
| скорочення | it's, I'm, don't, they're, who's, you're |
| присвійність, однина | my friend's car, James's idea |
| присвійність, множина на -s | my friends' cars, the Smiths' house |
| неправильна множина | the children's room, women's rights |
Без апострофа: присвійні займенники <i>its, yours, theirs, whose</i> і звичайна множина (<i>CDs, the 1990s</i>, а не <s>CD's</s>).
## Слова, які плутають навіть носії
its / it's, your / you're, their / there / they're, whose / who's, then / than, to / too / two, lose / loose, affect / effect.
## Кома
- Після вступного слова чи фрази: <i>However, … In my opinion, …</i>
- Після підрядного на початку: <i>When I got home, …</i> (якщо воно в кінці — коми немає).
- Перед and / but між двома повними реченнями — за бажанням; перед but — частіше.
- Не ставимо: перед that у підрядному (<i>I think that…</i>), між підметом і дієсловом, в обмежувальних відносних підрядних (тема S3).
- Не з'єднуй два речення лише комою: <s>I was tired, I went to bed.</s> → <i>I was tired, so I went to bed.</i>
## Пробіли й лапки
Перед ? ! : ; пробілу немає. Лапки: <i>"…"</i> або <i>'…'</i> (частіше в BrE).
## Скорочення і стиль
У розмові й неформальних листах — it's, don't, I'd. В есе й офіційних листах — повні форми: it is, do not.
! Кома перед «що» в англійській зникає: «Я думаю, що…» → <i>I think that…</i>`,
S3:`## Відносні займенники
| Займенник | Для чого | Приклад |
| who | люди | <i>the teacher who helped me</i> |
| which | речі, тварини, ціле речення | <i>the car which broke down</i> |
| that | люди й речі, лише в обмежувальних | <i>the car that broke down</i> |
| whose | належність | <i>the student whose phone rang</i> |
| where | місце | <i>the city where I was born</i> |
| when | час | <i>the year when we met</i> |
## Обмежувальні й описові
| Defining | Non-defining |
| без ком | з комами |
| уточнюють, про кого мова | додаткова інформація, яку можна прибрати |
| who, which, that, або без займенника | who, which (that — ні) |
| <i>Students who work hard pass.</i> (лише ті, хто старається) | <i>The students, who work hard, passed.</i> (старанні всі) |
Коми змінюють зміст: <i>My brother who lives in Canada</i> (у мене кілька братів) / <i>My brother, who lives in Canada,</i> (брат один).
## Пропуск займенника
В обмежувальних, якщо займенник — додаток: <i>the film (that) I watched</i>. Якщо підмет — не можна: <i>the film that won the prize</i>.
## Прийменники
Розмовно — в кінці: <i>the person I spoke to</i>. Формально — на початку, з whom або which: <i>the person to whom I spoke</i>.
## which про ціле речення
<i>She didn't call, which was strange.</i> Тут лише which — не what і не that.
! Українське «який» підходить усюди, тому плутають who і which і ставлять коми, як в українській, перед кожним «який». В англійській кома — лише в описових підрядних.`,
S4:`## Що стоїть після зв'язки
| Значення | + речення | + іменник / -ing | На початку речення, з комою |
| протиставлення | although, even though, while, whereas | despite, in spite of | However, Nevertheless, On the other hand |
| причина | because, as, since | because of, due to, owing to | — |
| результат | so | — | Therefore, As a result, Consequently |
| мета | so that | (in order) to + інфінітив | — |
| додавання | and | as well as, in addition to | Moreover, Furthermore, In addition |
## Протиставлення
- <i>Although the hotel was expensive, it was dirty.</i>
- <i>Despite the high price, the hotel was dirty.</i> / <i>Despite being expensive, …</i>
- <i>The hotel was expensive. However, it was dirty.</i>
- <i>Despite <b>the fact that</b> it was expensive, …</i> — так despite можна поставити перед реченням.
## Мета
<i>to / in order to</i> + інфінітив; <i>so that</i> + речення, коли змінюється підмет або є модальне: <i>I'll explain it again so that everyone understands.</i> Не <s>for to buy</s> і не <s>for buy</s>: for + іменник (<i>for a walk</i>).
## Стиль
| Розмова | Есе, офіційний лист |
| but, so, because, also | however, therefore, since, moreover |
| anyway, actually | in fact, nevertheless |
| first, then, in the end | firstly, subsequently, finally, in conclusion |
## Пунктуація
However, therefore, moreover — на початку речення з комою або після крапки з комою: <i>It was late; however, we continued.</i> Не з'єднуй два речення лише комою + however.
! «Хоча, незважаючи на те що» → although; «незважаючи на» + іменник → despite. Не кажи <s>despite of</s>: of буває лише в in spite of.`,
S5:`## Розщеплені речення (cleft)
Розбиваємо одне речення на дві частини, щоб наголосити на одній із них:
| Звичайне | It-cleft | What-cleft |
| Tom broke the window. | <i>It was Tom who broke the window.</i> | — |
| I want a holiday. | <i>It's a holiday that I want.</i> | <i>What I want is a holiday.</i> |
| The noise annoys me. | <i>It's the noise that annoys me.</i> | <i>What annoys me is the noise.</i> |
Варіанти: <i>The reason why… is that…, The thing (that)… is…, All I want is…</i>
## Інверсія для наголосу
Після заперечних і обмежувальних виразів на початку речення — порядок як у питанні:
| Вираз | Приклад |
| Never / Rarely / Seldom | <i>Rarely do we see such talent.</i> |
| Not only … but also | <i>Not only is it cheap, but it's also fast.</i> |
| Hardly / No sooner … when / than | <i>No sooner had I sat down than the phone rang.</i> |
| Only then / Only when / Only after | <i>Only when I left did I understand.</i> |
| Under no circumstances | <i>Under no circumstances should you open it.</i> |
Інверсія звучить книжно: доречна в есе, промовах, офіційних листах, рідко — у розмові.
## Підсилення в розмові
<i>I <b>do</b> understand. She <b>did</b> apologise!</i>; <i>the very best</i>; <i>at all</i>: <i>I didn't like it at all.</i>
## Реєстр
| Неформально | Формально |
| ask for | request |
| get | obtain, receive |
| help | assist, support |
| tell | inform |
| need | require |
| Thanks for… | I am grateful for… |
| Can you…? | I would appreciate it if you could… |
| I'm sorry | Please accept my apologies |
! На рівні B2 оцінюють не складність, а доречність: у листі другові інверсія звучить дивно, а «gonna» в есе — помилка стилю.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"питання й заперечення в past simple будуються так само, як у present simple, лише з did замість do / does.",
"V3<V2":"present perfect пізнається в протиставленні з past simple, а для форми потрібна третя форма неправильних дієслів.",
"V4<V3":"past perfect — той самий perfect, перенесений у минуле: have → had.",
"V5<V4":"perfect continuous поєднує логіку perfect і форми continuous, які ти вже знаєш.",
"M1<V1":"модальні будують питання й заперечення без do — важливо бачити різницю з present simple.",
"M2<V1":"present continuous і present simple теж описують майбутнє: домовленості й розклади.",
"M3<M2":"first conditional — це will плюс правило про теперішній час після if, знайоме з теми про майбутнє.",
"M3<V2":"second conditional бере форми past simple для нереального теперішнього.",
"M4<M3":"третя умовна продовжує логіку другої, але про минуле.",
"M4<V4":"третя умовна і wish про минуле будуються на past perfect.",
"M5<M4":"should have, could have, would have — родичі третьої умовної.",
"M5<V3":"модальне + have + past participle вимагає впевнено знати третю форму дієслів.",
"N2<N1":"вибір між a / an і відсутністю артикля залежить від того, злічуваний іменник чи ні.",
"N3<N2":"прикметники описують іменники, тож спершу треба впевнено будувати іменну групу.",
"N4<N3":"ступені порівняння утворюються від прикметників і прислівників.",
"N5<N4":"складні іменні групи збирають усе: артиклі, прикметники, порівняння.",
"N5<S3":"номіналізація і відносні підрядні — два способи пакувати інформацію в есе.",
"P2<P1":"після прийменника завжди -ing: interested in learning, good at speaking.",
"P2<V1":"-ing форма та сама, що в present continuous.",
"P3<P2":"у фразових дієсловах ті самі частки, а look forward to doing поєднує обидві теми.",
"P4<P3":"фразові дієслова теж мають пасив: The meeting was put off.",
"P4<V3":"пасив потребує past participle і be в усіх часах.",
"P5<P3":"колокації і прийменники після слів — наступний рівень після фразових дієслів.",
"P5<P2":"після прийменника дієслово стоїть у формі -ing: apologise for being late.",
"Q1<V1":"питання в present simple — головне застосування do / does.",
"Q2<Q1":"tags і короткі відповіді повторюють допоміжне дієслово з питання.",
"Q2<V2":"у tag до минулого потрібне did: You saw it, didn't you?",
"Q3<Q1":"щоб зробити питання непрямим, треба вміти розібрати пряме: допоміжне, підмет, дієслово.",
"Q4<Q3":"у непрямій мові питання переказуються так само, як непрямі питання.",
"Q4<V4":"зсув часів у непрямій мові веде до past perfect.",
"Q5<Q4":"reporting verbs замінюють нейтральне said у непрямій мові.",
"Q5<P2":"кожне reporting verb вимагає -ing або to — як дієслова з теми про -ing і to.",
"S2<S1":"пунктуація спирається на будову речення: де підмет, де вступна частина.",
"S3<S2":"у відносних підрядних кома змінює зміст.",
"S4<S3":"зв'язки будують складні речення так само, як відносні займенники.",
"S5<S4":"інверсія і розщеплені речення — стилістичний рівень поверх логічних зв'язків.",
"S5<P4":"формальний стиль широко використовує пасив."
};

/* recommended order of all 30 topics; within a stage, prerequisites come first */
const ROUTE = ["V1","N1","P1","S1","M1","Q1", "V2","M2","N2","P2","S2","Q2", "V3","M3","N3","P3","Q3","S3", "V4","M4","N4","P4","Q4","S4", "V5","M5","P5","Q5","S5","N5"];
/* fix-the-mistake answers in these topics also check spacing (no space before ? ! : ;) */
const STRICT = ["S2"];
/* localStorage key prefix: progress is kept per target language */
const STORE = "enmap-";

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES, ROUTE, STRICT, STORE };
