import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Cours d’allemand',
  title: 'Cours d’allemand A1 à C1 : méthode, niveaux et examens | Intellect',
  description: 'Apprenez l’allemand avec Intellect : parcours complet de A1 à C1, cours intensifs et flexibles, préparation Goethe, telc et TestDaF, suivi pédagogique personnalisé.',
  h1: 'Cours d’allemand de A1 à C1 pour étudier en Allemagne',
  lead: 'Un parcours complet, du premier mot au niveau universitaire, avec une préparation aux examens reconnus et un suivi qui s’adapte à votre rythme.',
  related: ['german-a1-a2', 'german-b1', 'german-c1', 'medicine-germany', 'study-germany'],
  sections: [
    {
      id: 'objectif', h2: 'Pourquoi apprendre l’allemand avec un objectif précis',
      paragraphs: [
        'Apprendre l’allemand « pour le plaisir » et l’apprendre pour être admis dans une université ne demandent pas la même méthode. Dans le second cas, il y a un niveau à atteindre, un examen à réussir et une date limite. Nos cours sont construits à rebours : nous partons de l’exigence de votre projet, puis nous organisons le travail pour que vous arriviez à l’examen prêt, sans lacune de dernière minute.',
        'Pour la plupart des cursus enseignés en allemand, les universités demandent un niveau B2 ou C1 du Cadre européen commun de référence pour les langues. Ce niveau est prouvé par un examen reconnu. C’est pourquoi nous suivons deux fils en parallèle : la progression linguistique réelle, et la préparation à l’épreuve qui la certifie.',
      ],
    },
    {
      id: 'niveaux', h2: 'Les niveaux A1, A2, B1 et C1 en bref',
      blocks: [
        { h3: 'A1 et A2 : poser des bases solides', paragraphs: ['Vous apprenez à vous présenter, à comprendre des phrases courantes, à demander votre chemin, à faire des achats et à parler de votre quotidien. La prononciation et l’articulation des cas grammaticaux sont travaillées dès le début, parce que les mauvaises habitudes sont difficiles à corriger plus tard.'] },
        { h3: 'B1 : devenir autonome', paragraphs: ['À ce stade, vous comprenez l’essentiel d’un échange sur des sujets familiers, vous racontez une expérience, vous donnez votre avis et vous écrivez des textes simples mais structurés. C’est le niveau minimal pour vivre en Allemagne sans dépendre d’un interprète.'] },
        { h3: 'C1 : suivre un cursus universitaire', paragraphs: ['Vous comprenez des textes longs et exigeants, vous vous exprimez avec aisance et vous rédigez des textes clairs et détaillés sur des sujets complexes. C’est le niveau attendu par de nombreux établissements pour les études en allemand.'] },
      ],
    },
    {
      id: 'organisation', h2: 'Comment sont organisés nos cours',
      bullets: [
        'Des cours intensifs pour avancer vite lorsque votre calendrier est serré, et des cours flexibles lorsque vous étudiez ou travaillez en parallèle.',
        'Des groupes à taille humaine, afin que chacun parle réellement pendant la séance.',
        'Un équilibre entre les quatre compétences : compréhension orale, compréhension écrite, expression orale et expression écrite.',
        'Des exercices à faire entre deux séances, corrigés et commentés.',
        'Des tests de positionnement et des bilans réguliers pour mesurer vos progrès.',
      ],
    },
    {
      id: 'examens', h2: 'La préparation aux examens reconnus',
      paragraphs: [
        'Plusieurs examens sont reconnus pour l’admission dans l’enseignement supérieur allemand, notamment le TestDaF, le DSH, les certificats du Goethe-Institut et ceux de telc. Chaque université précise les certificats qu’elle accepte et le niveau minimal demandé : nous vérifions avec vous ces exigences avant de choisir l’examen.',
        'La préparation comprend la présentation du format de chaque épreuve, des entraînements chronométrés dans les conditions réelles, des corrections détaillées et des conseils de gestion du temps et du stress. Nous vous aidons aussi à choisir une session et à vous inscrire dans les délais, car les places en centre d’examen sont limitées.',
      ],
    },
    {
      id: 'suivi', h2: 'Un suivi pédagogique personnalisé',
      paragraphs: [
        'Chaque apprenant a un point de départ et des points faibles différents. Après le test de positionnement, nous vous proposons un plan : les compétences à renforcer, le rythme conseillé et les jalons à atteindre. Vos résultats aux exercices et aux bilans servent ensuite à ajuster le plan, séance après séance.',
        'Si votre projet est la médecine ou un cursus très sélectif, nous intégrons le vocabulaire spécialisé et les situations universitaires dès que le niveau le permet : lecture de supports de cours, prise de notes, présentation orale.',
      ],
    },
    {
      id: 'choisir', h2: 'Quel niveau choisir pour commencer ?',
      paragraphs: [
        'Si vous n’avez jamais étudié l’allemand, vous commencez en A1. Si vous avez déjà des bases mais que vous hésitez, un test de positionnement gratuit permet de vous placer au bon niveau : mieux vaut rejoindre un groupe où l’on progresse que répéter ce que l’on sait déjà.',
        'Comptez du temps. Passer d’un niveau à l’autre demande généralement plusieurs mois de travail régulier, et la durée dépend de votre langue maternelle, de votre rythme et du temps que vous consacrez à pratiquer en dehors des cours. Nous vous donnons une estimation honnête au premier échange, sans promesse irréaliste.',
      ],
    },
    {
      id: 'apres', h2: 'Après les cours : le projet d’études',
      paragraphs: [
        'Les cours de langue ne sont qu’une partie du chemin. Une fois le niveau atteint, nous vous accompagnons pour le reste : choix de la filière, candidature à l’université, démarches de visa, logement et installation. Vous pouvez en savoir plus sur nos pages consacrées aux études en Allemagne, à la préparation en médecine et à l’accompagnement complet.',
      ],
    },
  ],
  faq: [
    { q: 'Faut-il un niveau minimal pour s’inscrire ?', a: 'Non. Vous pouvez commencer en A1 sans aucune connaissance préalable. Si vous avez déjà des bases, un test de positionnement gratuit détermine le bon groupe.' },
    { q: 'Quel examen dois-je passer pour étudier en Allemagne ?', a: 'Cela dépend de l’université et de la filière. Les établissements acceptent en général le TestDaF, le DSH ou des certificats reconnus comme ceux du Goethe-Institut et de telc. Nous vérifions avec vous les exigences exactes avant de choisir.' },
    { q: 'Combien de temps faut-il pour atteindre le niveau C1 ?', a: 'La durée varie selon votre point de départ, votre rythme et votre pratique personnelle. Nous vous donnons une estimation réaliste après le test de positionnement.' },
    { q: 'Proposez-vous des cours le soir ou le week-end ?', a: 'Nous proposons des formats intensifs et des formats flexibles pour s’adapter aux étudiants et aux personnes qui travaillent. Les horaires disponibles sont précisés au moment de l’inscription.' },
  ],
};

const en: PageContent = {
  nav: 'German courses',
  title: 'German courses A1 to C1: method, levels and exams | Intellect',
  description: 'Learn German with Intellect: a full path from A1 to C1, intensive and flexible classes, Goethe, telc and TestDaF preparation, and personal academic follow-up.',
  h1: 'German courses from A1 to C1 to study in Germany',
  lead: 'A complete path from your first word to university level, with preparation for recognised exams and follow-up that adapts to your pace.',
  related: ['german-a1-a2', 'german-b1', 'german-c1', 'medicine-germany', 'study-germany'],
  sections: [
    {
      id: 'goal', h2: 'Why learn German with a clear goal',
      paragraphs: [
        'Learning German for fun and learning it to be admitted to a university do not call for the same method. In the second case there is a level to reach, an exam to pass and a deadline. Our courses are built backwards: we start from what your project requires, then organise the work so you arrive at the exam ready, with no last-minute gaps.',
        'For most degrees taught in German, universities ask for a B2 or C1 level of the Common European Framework of Reference for Languages. That level is proven by a recognised exam. This is why we follow two threads in parallel: real progress in the language, and preparation for the test that certifies it.',
      ],
    },
    {
      id: 'levels', h2: 'Levels A1, A2, B1 and C1 at a glance',
      blocks: [
        { h3: 'A1 and A2: building solid foundations', paragraphs: ['You learn to introduce yourself, understand everyday sentences, ask for directions, shop and talk about your daily life. Pronunciation and the grammatical cases are practised from the start, because bad habits are hard to fix later.'] },
        { h3: 'B1: becoming independent', paragraphs: ['At this stage you understand the main points of a conversation on familiar topics, describe an experience, give your opinion and write simple but structured texts. It is the minimum level to live in Germany without relying on an interpreter.'] },
        { h3: 'C1: following a university programme', paragraphs: ['You understand long, demanding texts, express yourself fluently and write clear, detailed texts on complex subjects. Many institutions expect this level for studies in German.'] },
      ],
    },
    {
      id: 'organisation', h2: 'How our courses are organised',
      bullets: [
        'Intensive courses to progress fast when your timeline is tight, and flexible courses when you study or work at the same time.',
        'Human-sized groups, so everyone actually speaks during the session.',
        'A balance across the four skills: listening, reading, speaking and writing.',
        'Exercises to do between sessions, corrected and commented.',
        'Placement tests and regular reviews to measure your progress.',
      ],
    },
    {
      id: 'exams', h2: 'Preparing for recognised exams',
      paragraphs: [
        'Several exams are recognised for admission to German higher education, including TestDaF, DSH, Goethe-Institut certificates and telc certificates. Each university states which certificates it accepts and the minimum level it requires: we check these requirements with you before choosing the exam.',
        'Preparation includes an overview of each test format, timed practice under real conditions, detailed corrections and advice on managing time and stress. We also help you choose a session and register on time, because places at exam centres are limited.',
      ],
    },
    {
      id: 'follow-up', h2: 'Personal academic follow-up',
      paragraphs: [
        'Every learner has a different starting point and different weak spots. After the placement test we propose a plan: the skills to strengthen, the recommended pace and the milestones to reach. Your results in exercises and reviews are then used to adjust the plan, session after session.',
        'If your project is medicine or another highly selective programme, we include specialised vocabulary and university situations as soon as your level allows: reading course material, taking notes and giving an oral presentation.',
      ],
    },
    {
      id: 'choosing', h2: 'Which level should you start with?',
      paragraphs: [
        'If you have never studied German, you start at A1. If you already have some basics but are unsure, a free placement test puts you in the right group: it is better to join a group where you progress than to repeat what you already know.',
        'Allow time. Moving from one level to the next generally takes several months of regular work, and the duration depends on your mother tongue, your pace and how much you practise outside class. We give you an honest estimate at our first conversation, with no unrealistic promises.',
      ],
    },
    {
      id: 'after', h2: 'After the courses: the study project',
      paragraphs: [
        'Language classes are only part of the journey. Once you reach the level, we support you with the rest: choosing a field, applying to a university, visa procedures, housing and settling in. You can read more on our pages about studying in Germany, medicine preparation and full student support.',
      ],
    },
  ],
  faq: [
    { q: 'Do I need a minimum level to enrol?', a: 'No. You can start at A1 with no prior knowledge. If you already have some basics, a free placement test determines the right group.' },
    { q: 'Which exam do I need to study in Germany?', a: 'It depends on the university and the field. Institutions generally accept TestDaF, DSH or recognised certificates such as those of the Goethe-Institut and telc. We check the exact requirements with you before choosing.' },
    { q: 'How long does it take to reach C1?', a: 'It varies with your starting point, your pace and your own practice. We give you a realistic estimate after the placement test.' },
    { q: 'Do you offer evening or weekend classes?', a: 'We offer intensive and flexible formats to suit students and working people. Available schedules are confirmed at enrolment.' },
  ],
};

const ar: PageContent = {
  nav: 'دورات الألمانية',
  title: 'دورات اللغة الألمانية من A1 إلى C1: المنهج والمستويات والامتحانات | إنتلكت',
  description: 'تعلّم الألمانية مع إنتلكت: مسار كامل من A1 إلى C1، ودورات مكثفة ومرنة، وتحضير لامتحانات Goethe وtelc وTestDaF، ومتابعة بيداغوجية شخصية.',
  h1: 'دورات اللغة الألمانية من A1 إلى C1 للدراسة في ألمانيا',
  lead: 'مسار متكامل من أول كلمة حتى المستوى الجامعي، مع تحضير للامتحانات المعترف بها ومتابعة تتكيف مع وتيرتك.',
  related: ['german-a1-a2', 'german-b1', 'german-c1', 'medicine-germany', 'study-germany'],
  sections: [
    {
      id: 'goal', h2: 'لماذا تتعلم الألمانية بهدف واضح؟',
      paragraphs: [
        'تعلّم الألمانية للمتعة وتعلّمها من أجل القبول في جامعة لا يتطلبان المنهج نفسه. ففي الحالة الثانية هناك مستوى يجب بلوغه، وامتحان يجب اجتيازه، وموعد نهائي لا يتغير. لذلك نبني دوراتنا انطلاقًا من النتيجة المطلوبة: نبدأ بما يشترطه مشروعك، ثم ننظم العمل لتصل إلى الامتحان جاهزًا دون ثغرات في اللحظة الأخيرة.',
        'في معظم التخصصات التي تُدرَّس بالألمانية تطلب الجامعات مستوى B2 أو C1 وفق الإطار الأوروبي المرجعي المشترك للغات، ويُثبَت هذا المستوى بامتحان معترف به. لذلك نسير في خطين متوازيين: تقدم حقيقي في اللغة، وتحضير للاختبار الذي يشهد به.',
      ],
    },
    {
      id: 'levels', h2: 'المستويات A1 وA2 وB1 وC1 باختصار',
      blocks: [
        { h3: 'A1 وA2: بناء أساس متين', paragraphs: ['تتعلم أن تعرّف بنفسك، وتفهم الجمل اليومية، وتسأل عن الطريق، وتتسوق، وتتحدث عن حياتك اليومية. ونعمل على النطق وعلى حالات الإعراب في الألمانية منذ البداية، لأن العادات الخاطئة يصعب تصحيحها لاحقًا.'] },
        { h3: 'B1: أن تصبح مستقلًا', paragraphs: ['في هذه المرحلة تفهم الأفكار الأساسية في حديث حول مواضيع مألوفة، وتروي تجربة، وتعبّر عن رأيك، وتكتب نصوصًا بسيطة لكنها منظمة. وهو الحد الأدنى للعيش في ألمانيا دون الاعتماد على مترجم.'] },
        { h3: 'C1: متابعة دراسة جامعية', paragraphs: ['تفهم نصوصًا طويلة ومتطلبة، وتعبّر عن نفسك بطلاقة، وتكتب نصوصًا واضحة ومفصلة حول مواضيع معقدة. وتتوقع مؤسسات كثيرة هذا المستوى للدراسة بالألمانية.'] },
      ],
    },
    {
      id: 'organisation', h2: 'كيف تُنظَّم دوراتنا؟',
      bullets: [
        'دورات مكثفة للتقدم بسرعة عندما يكون جدولك الزمني ضيقًا، ودورات مرنة إذا كنت تدرس أو تعمل في الوقت نفسه.',
        'مجموعات بحجم إنساني، حتى يتكلم كل متعلم فعلًا أثناء الحصة.',
        'توازن بين المهارات الأربع: الفهم الشفهي والفهم الكتابي والتعبير الشفهي والتعبير الكتابي.',
        'تمارين بين الحصص، مع تصحيح وتعليق.',
        'اختبارات تحديد المستوى وتقييمات منتظمة لقياس تقدمك.',
      ],
    },
    {
      id: 'exams', h2: 'التحضير للامتحانات المعترف بها',
      paragraphs: [
        'تُعتمد عدة امتحانات للقبول في التعليم العالي الألماني، منها TestDaF وDSH وشهادات معهد غوته وشهادات telc. وتحدد كل جامعة الشهادات التي تقبلها والمستوى الأدنى المطلوب، ونتحقق معك من هذه الشروط قبل اختيار الامتحان.',
        'يشمل التحضير عرض صيغة كل اختبار، وتدريبات بزمن محدد في ظروف حقيقية، وتصحيحات مفصلة، ونصائح لإدارة الوقت والتوتر. كما نساعدك على اختيار موعد الامتحان والتسجيل في الوقت المناسب، لأن المقاعد في مراكز الامتحان محدودة.',
      ],
    },
    {
      id: 'follow-up', h2: 'متابعة بيداغوجية شخصية',
      paragraphs: [
        'لكل متعلم نقطة انطلاق ونقاط ضعف مختلفة. وبعد اختبار تحديد المستوى نقترح عليك خطة تتضمن المهارات التي تحتاج إلى تقوية، والوتيرة الموصى بها، والمحطات التي يجب بلوغها. ثم نستخدم نتائجك في التمارين والتقييمات لتعديل الخطة حصة بعد حصة.',
        'وإذا كان مشروعك دراسة الطب أو تخصصًا انتقائيًا جدًا، ندمج المفردات المتخصصة والمواقف الجامعية بمجرد أن يسمح مستواك بذلك: قراءة مواد المقررات، وتدوين الملاحظات، وتقديم عرض شفهي.',
      ],
    },
    {
      id: 'choosing', h2: 'من أي مستوى تبدأ؟',
      paragraphs: [
        'إذا لم تدرس الألمانية من قبل فإنك تبدأ من A1. وإذا كانت لديك أسس لكنك مترددًا، فإن اختبار تحديد المستوى المجاني يضعك في المجموعة المناسبة: فمن الأفضل الالتحاق بمجموعة تتقدم فيها من تكرار ما تعرفه.',
        'امنح نفسك الوقت. فالانتقال من مستوى إلى آخر يتطلب عادة عدة أشهر من العمل المنتظم، وتعتمد المدة على لغتك الأم ووتيرتك وما تخصصه للممارسة خارج الحصص. ونعطيك تقديرًا صادقًا في أول لقاء، دون وعود غير واقعية.',
      ],
    },
    {
      id: 'after', h2: 'بعد الدورات: المشروع الدراسي',
      paragraphs: [
        'دورات اللغة ليست إلا جزءًا من الطريق. فإذا بلغت المستوى المطلوب نرافقك في ما تبقى: اختيار التخصص، والتقدم إلى الجامعة، وإجراءات التأشيرة، والسكن والاستقرار. ويمكنك معرفة المزيد في صفحاتنا حول الدراسة في ألمانيا والتحضير لدراسة الطب والمرافقة الشاملة.',
      ],
    },
  ],
  faq: [
    { q: 'هل أحتاج إلى مستوى أدنى للتسجيل؟', a: 'لا. يمكنك أن تبدأ من A1 دون أي معرفة سابقة. وإذا كانت لديك أسس فإن اختبار تحديد المستوى المجاني يحدد المجموعة المناسبة.' },
    { q: 'أي امتحان يجب أن أجتازه للدراسة في ألمانيا؟', a: 'يعتمد ذلك على الجامعة والتخصص. تقبل المؤسسات عمومًا TestDaF أو DSH أو شهادات معترفًا بها مثل شهادات معهد غوته وtelc. ونتحقق معك من الشروط الدقيقة قبل الاختيار.' },
    { q: 'كم يستغرق بلوغ مستوى C1؟', a: 'تختلف المدة بحسب نقطة انطلاقك ووتيرتك وممارستك الشخصية. ونعطيك تقديرًا واقعيًا بعد اختبار تحديد المستوى.' },
    { q: 'هل تقدمون حصصًا مسائية أو في عطلة نهاية الأسبوع؟', a: 'نقدم صيغًا مكثفة وصيغًا مرنة لتناسب الطلبة والعاملين. وتُؤكَّد المواعيد المتاحة عند التسجيل.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
