import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Allemand A2',
  title: 'Cours d’allemand A2 : communiquer au quotidien | Intellect',
  description: 'Cours d’allemand A2 avec Intellect : consolider les bases, communiquer dans les situations quotidiennes et administratives, et préparer le niveau B1.',
  h1: 'Allemand A2 : développer ses bases et communiquer au quotidien',
  lead: 'Le niveau A2 transforme les premières phrases en vraie communication. Vous commencez à raconter, à demander, à expliquer et à vous débrouiller seul.',
  related: ['german-b1', 'german-a1', 'german-courses', 'student-support'],
  sections: [
    {
      id: 'consolider', h2: 'Consolider le A1 pour aller plus loin',
      paragraphs: [
        'Le niveau A2 correspond encore à l’utilisateur élémentaire, mais à un degré supérieur. Vous comprenez des phrases et des expressions courantes liées à des domaines qui vous concernent directement : vous-même, votre famille, vos achats, votre environnement, votre travail ou vos études. Vous communiquez lors de tâches simples et habituelles, qui demandent un échange d’informations direct.',
        'Nous commençons par consolider les acquis du A1. Les articles, la conjugaison de base et la construction de la phrase sont revus rapidement, puis réutilisés dans des situations plus riches. Cette consolidation évite d’empiler de nouvelles notions sur des fondations fragiles.',
      ],
    },
    {
      id: 'public', h2: 'À qui s’adresse le niveau A2',
      paragraphs: [
        'Le cours convient aux personnes qui ont terminé le A1, qu’elles l’aient fait avec nous ou ailleurs, et à celles qui ont déjà quelques notions solides. Il intéresse les étudiants qui préparent une candidature en Allemagne, les professionnels, notamment dans la santé, qui construisent un projet de travail, et les familles qui souhaitent s’installer dans un pays germanophone.',
        'Un test de positionnement gratuit confirme votre niveau avant l’inscription. Si vous hésitez entre deux niveaux, nous préférons vous placer dans le groupe où vous aurez de la matière à apprendre plutôt que dans un groupe trop facile.',
      ],
    },
    {
      id: 'communication', h2: 'Communiquer au quotidien',
      blocks: [
        { h3: 'Raconter ce que l’on a fait', paragraphs: ['Vous découvrez le passé avec le parfait (Perfekt) pour raconter une journée, un voyage ou une expérience. C’est l’un des gros progrès du A2 : on ne parle plus seulement du présent.'] },
        { h3: 'Exprimer l’obligation, la possibilité, la permission', paragraphs: ['Les verbes modaux comme können, müssen, dürfen ou wollen permettent de demander, de refuser, de proposer et de planifier. Ils sont indispensables dans la vie quotidienne.'] },
        { h3: 'Décrire, comparer, donner son avis simplement', paragraphs: ['Les adjectifs, le comparatif et des connecteurs simples comme weil ou dass vous permettent de justifier un choix et de nuancer votre propos.'] },
        { h3: 'Mieux construire ses phrases', paragraphs: ['Les premiers cas grammaticaux, l’accusatif et le datif, ainsi que les prépositions les plus fréquentes, sont introduits progressivement et pratiqués à l’oral avant d’être formalisés.'] },
      ],
    },
    {
      id: 'situations', h2: 'Les situations pratiques que vous saurez gérer',
      bullets: [
        'Prendre ou modifier un rendez-vous, par téléphone ou en personne.',
        'Chercher un logement et en comprendre l’annonce.',
        'Parler de sa santé et décrire un symptôme simple.',
        'Faire des achats, comparer des prix, réclamer poliment.',
        'Se déplacer en ville et utiliser les transports.',
        'Écrire un message court, informel ou formel, pour demander une information.',
        'Remplir un formulaire et comprendre un courrier administratif simple.',
      ],
      after: ['Ces situations sont celles que vous rencontrerez dès l’arrivée en Allemagne : nous les travaillons à l’avance pour que les premières démarches soient moins stressantes.'],
    },
    {
      id: 'vocabulaire', h2: 'Le vocabulaire et les quatre compétences',
      paragraphs: [
        'Le vocabulaire s’étend au travail, aux études, à la santé, aux loisirs, au logement et aux administrations. Il est introduit par thèmes, avec des exercices de réutilisation pour éviter l’oubli. À l’oral, vous apprenez à comprendre des annonces et des dialogues à vitesse naturelle sur des sujets familiers. À l’écrit, vous lisez de courts textes et rédigez des messages simples mais corrects.',
        'La prononciation reste suivie. Nous reprenons régulièrement les sons difficiles, l’accent de phrase et l’intonation, parce qu’une bonne prononciation facilite autant la compréhension que l’expression.',
      ],
    },
    {
      id: 'examen', h2: 'L’examen du niveau A2',
      paragraphs: [
        'Les certificats possibles à ce stade comprennent le Goethe-Zertifikat A2 : Start Deutsch 2 et l’examen telc Deutsch A2. Ils ne sont pas toujours nécessaires, mais ils servent à mesurer vos progrès et peuvent être demandés pour certaines démarches. Nous vous présentons les épreuves, nous vous entraînons dans les conditions réelles et nous vous aidons à choisir une session. Nous ne garantissons jamais un résultat d’examen.',
      ],
    },
    {
      id: 'b1', h2: 'Préparer le passage au B1',
      paragraphs: [
        'Le B1 est le niveau où l’on devient réellement autonome. Pour y arriver sans effort inutile, le A2 prépare plusieurs briques : une conjugaison plus assurée, un vocabulaire thématique plus large et l’habitude de produire des phrases complètes. Nous vous indiquons à chaque bilan les points à consolider avant le changement de niveau.',
        'Dans le cadre de l’accompagnement Intellect, ce niveau s’inscrit dans un parcours plus large : choix du projet, documents, démarches. Vous n’avez pas à gérer seul la langue et l’administratif.',
      ],
    },
    {
      id: 'progres', h2: 'Comment mesurer vos progrès en A2',
      bullets: [
        'Vous racontez votre week-end en quelques phrases au passé.',
        'Vous prenez un rendez-vous par téléphone sans préparation écrite.',
        'Vous comprenez l’essentiel d’une annonce dans une gare ou un magasin.',
        'Vous écrivez un message court pour demander une information.',
      ],
      after: ['Si ces tâches vous paraissent accessibles, vous êtes prêt à aborder le B1.'],
    },
  ],
  faq: [
    { q: 'Faut-il avoir fait le A1 chez Intellect pour s’inscrire en A2 ?', a: 'Non. Un test de positionnement gratuit confirme que votre niveau correspond au A2, quelle que soit la manière dont vous avez appris.' },
    { q: 'Quelle est la différence entre le A1 et le A2 ?', a: 'Le A1 permet de se présenter et de communiquer avec des phrases très simples. Le A2 permet de raconter, de demander, d’expliquer et de gérer des situations pratiques courantes.' },
    { q: 'Le A2 suffit-il pour étudier en Allemagne ?', a: 'Non. Les cursus universitaires en allemand demandent en général un niveau B2 ou C1. Le A2 est une étape dans un parcours plus long.' },
    { q: 'Peut-on suivre le A2 en parallèle d’un travail ou d’études ?', a: 'Oui, des formats flexibles existent. Les horaires précis sont confirmés au moment de l’inscription.' },
  ],
};

const en: PageContent = {
  nav: 'German A2',
  title: 'German A2 course: communicate in daily life | Intellect',
  description: 'German A2 course with Intellect: consolidate the basics, communicate in everyday and administrative situations, and prepare for level B1.',
  h1: 'German A2: building on the basics and communicating in daily life',
  lead: 'Level A2 turns first sentences into real communication. You begin to tell, ask, explain and manage on your own.',
  related: ['german-b1', 'german-a1', 'german-courses', 'student-support'],
  sections: [
    {
      id: 'consolidate', h2: 'Consolidating A1 to go further',
      paragraphs: [
        'Level A2 is still the basic user, but at a higher degree. You understand sentences and common expressions linked to areas that concern you directly: yourself, your family, shopping, your surroundings, your work or studies. You communicate in simple, routine tasks that require a direct exchange of information.',
        'We start by consolidating what you gained at A1. Articles, basic conjugation and sentence construction are reviewed quickly, then reused in richer situations. This consolidation avoids stacking new notions on fragile foundations.',
      ],
    },
    {
      id: 'audience', h2: 'Who level A2 is for',
      paragraphs: [
        'The course suits people who have completed A1, whether with us or elsewhere, and those who already have some solid notions. It interests students preparing an application in Germany, professionals, notably in healthcare, building a work project, and families who wish to settle in a German-speaking country.',
        'A free placement test confirms your level before enrolment. If you hesitate between two levels, we prefer to place you in the group where you will have something to learn rather than in one that is too easy.',
      ],
    },
    {
      id: 'communication', h2: 'Communicating in daily life',
      blocks: [
        { h3: 'Telling what you did', paragraphs: ['You discover the past with the perfect tense (Perfekt) to tell about a day, a trip or an experience. It is one of the big steps of A2: you no longer speak only in the present.'] },
        { h3: 'Expressing obligation, possibility, permission', paragraphs: ['Modal verbs such as können, müssen, dürfen or wollen let you ask, refuse, propose and plan. They are indispensable in daily life.'] },
        { h3: 'Describing, comparing, giving an opinion simply', paragraphs: ['Adjectives, the comparative and simple connectors such as weil or dass let you justify a choice and nuance your point.'] },
        { h3: 'Building sentences better', paragraphs: ['The first grammatical cases, accusative and dative, as well as the most frequent prepositions, are introduced gradually and practised orally before being formalised.'] },
      ],
    },
    {
      id: 'situations', h2: 'Practical situations you will be able to handle',
      bullets: [
        'Making or changing an appointment, by phone or in person.',
        'Looking for housing and understanding the listing.',
        'Talking about your health and describing a simple symptom.',
        'Shopping, comparing prices, complaining politely.',
        'Getting around town and using public transport.',
        'Writing a short message, informal or formal, to ask for information.',
        'Filling in a form and understanding a simple administrative letter.',
      ],
      after: ['These are the situations you will meet from the day you arrive in Germany: we work on them in advance so that the first formalities are less stressful.'],
    },
    {
      id: 'vocabulary', h2: 'Vocabulary and the four skills',
      paragraphs: [
        'Vocabulary extends to work, studies, health, leisure, housing and administrations. It is introduced by theme, with reuse exercises to prevent forgetting. In listening, you learn to understand announcements and dialogues at natural speed on familiar topics. In writing, you read short texts and write simple but correct messages.',
        'Pronunciation remains monitored. We regularly revisit difficult sounds, sentence stress and intonation, because good pronunciation helps comprehension as much as expression.',
      ],
    },
    {
      id: 'exam', h2: 'The A2 exam',
      paragraphs: [
        'Possible certificates at this stage include the Goethe-Zertifikat A2: Start Deutsch 2 and the telc Deutsch A2 exam. They are not always needed, but they serve to measure your progress and may be requested for certain procedures. We present the tests, train you under real conditions and help you choose a session. We never guarantee an exam result.',
      ],
    },
    {
      id: 'b1', h2: 'Preparing the move to B1',
      paragraphs: [
        'B1 is where you become truly independent. To get there without needless effort, A2 prepares several building blocks: surer conjugation, wider thematic vocabulary and the habit of producing complete sentences. At each review we tell you which points to consolidate before changing level.',
        'Within Intellect’s support, this level is part of a broader path: choosing the project, documents, procedures. You do not have to manage the language and the paperwork alone.',
      ],
    },
    {
      id: 'progress', h2: 'How to measure your progress at A2',
      bullets: [
        'You tell about your weekend in a few sentences in the past.',
        'You make an appointment by phone without written preparation.',
        'You understand the gist of an announcement at a station or in a shop.',
        'You write a short message to ask for information.',
      ],
      after: ['If these tasks seem within reach, you are ready to tackle B1.'],
    },
  ],
  faq: [
    { q: 'Do I need to have done A1 at Intellect to enrol in A2?', a: 'No. A free placement test confirms that your level matches A2, however you learned.' },
    { q: 'What is the difference between A1 and A2?', a: 'A1 lets you introduce yourself and communicate with very simple sentences. A2 lets you tell, ask, explain and handle common practical situations.' },
    { q: 'Is A2 enough to study in Germany?', a: 'No. University programmes in German generally require B2 or C1. A2 is a stage in a longer path.' },
    { q: 'Can I take A2 alongside a job or studies?', a: 'Yes, flexible formats exist. Exact schedules are confirmed at enrolment.' },
  ],
};

const ar: PageContent = {
  nav: 'الألمانية A2',
  title: 'دورة اللغة الألمانية A2: التواصل في الحياة اليومية | إنتلكت',
  description: 'دورة الألمانية A2 مع إنتلكت: ترسيخ الأسس، والتواصل في المواقف اليومية والإدارية، والتحضير للمستوى B1.',
  h1: 'الألمانية A2: تطوير الأسس والتواصل في الحياة اليومية',
  lead: 'يحوّل المستوى A2 الجمل الأولى إلى تواصل حقيقي. فتبدأ في الحكي والسؤال والشرح والتدبر وحدك.',
  related: ['german-b1', 'german-a1', 'german-courses', 'student-support'],
  sections: [
    {
      id: 'consolidate', h2: 'ترسيخ A1 للمضي أبعد',
      paragraphs: [
        'المستوى A2 ما زال مستوى المستخدم الأساسي، لكن بدرجة أعلى. فأنت تفهم جملًا وعبارات شائعة تتعلق بمجالات تهمك مباشرة: نفسك وأسرتك ومشترياتك ومحيطك وعملك أو دراستك. وتتواصل في مهام بسيطة معتادة تتطلب تبادلًا مباشرًا للمعلومات.',
        'نبدأ بترسيخ مكتسبات A1. فتُراجَع أدوات التعريف والتصريف الأساسي وبناء الجملة بسرعة، ثم يُعاد استعمالها في مواقف أغنى. ويجنّبك هذا الترسيخ تكديس مفاهيم جديدة فوق أسس هشة.',
      ],
    },
    {
      id: 'audience', h2: 'لمن يُوجَّه المستوى A2؟',
      paragraphs: [
        'تناسب الدورة من أتموا A1، سواء لدينا أو في مكان آخر، ومن لديهم بالفعل بعض المعارف الراسخة. وتهم الطلبة الذين يحضّرون طلب تسجيل في ألمانيا، والمهنيين، خاصة في الصحة، الذين يبنون مشروع عمل، والأسر التي ترغب في الاستقرار في بلد ناطق بالألمانية.',
        'يؤكد اختبار تحديد المستوى المجاني مستواك قبل التسجيل. وإذا ترددت بين مستويين فإننا نفضّل وضعك في المجموعة التي سيكون لديك فيها ما تتعلمه بدل مجموعة سهلة أكثر من اللازم.',
      ],
    },
    {
      id: 'communication', h2: 'التواصل في الحياة اليومية',
      blocks: [
        { h3: 'سرد ما قمت به', paragraphs: ['تكتشف الماضي بصيغة Perfekt لتروي يومًا أو رحلة أو تجربة. وهذا من أكبر مكاسب A2: فلا تتكلم بعد الآن بالمضارع وحده.'] },
        { h3: 'التعبير عن الواجب والإمكان والإذن', paragraphs: ['تتيح لك الأفعال المساعدة مثل können وmüssen وdürfen وwollen أن تطلب وترفض وتقترح وتخطط. وهي لا غنى عنها في الحياة اليومية.'] },
        { h3: 'الوصف والمقارنة وإبداء الرأي ببساطة', paragraphs: ['تتيح لك النعوت وصيغة التفضيل وأدوات ربط بسيطة مثل weil وdass أن تبرر اختيارًا وتنوّع كلامك.'] },
        { h3: 'بناء الجمل بشكل أفضل', paragraphs: ['تُقدَّم أولى الحالات النحوية، النصب والجر، وحروف الجر الأكثر شيوعًا تدريجيًا وتُمارَس شفهيًا قبل صياغتها صياغة رسمية.'] },
      ],
    },
    {
      id: 'situations', h2: 'مواقف عملية ستتمكن من التعامل معها',
      bullets: [
        'حجز موعد أو تعديله، هاتفيًا أو حضوريًا.',
        'البحث عن سكن وفهم الإعلان.',
        'الحديث عن صحتك ووصف عرَض بسيط.',
        'التسوق ومقارنة الأسعار والاعتراض بلباقة.',
        'التنقل في المدينة واستعمال المواصلات.',
        'كتابة رسالة قصيرة، غير رسمية أو رسمية، لطلب معلومة.',
        'ملء استمارة وفهم رسالة إدارية بسيطة.',
      ],
      after: ['هذه هي المواقف التي ستواجهها منذ يوم وصولك إلى ألمانيا: نعمل عليها مسبقًا حتى تكون أولى الإجراءات أقل توترًا.'],
    },
    {
      id: 'vocabulary', h2: 'المفردات والمهارات الأربع',
      paragraphs: [
        'تتسع المفردات لتشمل العمل والدراسة والصحة والترفيه والسكن والإدارات. وتُقدَّم بحسب المواضيع مع تمارين إعادة استعمال لتفادي النسيان. وفي الاستماع، تتعلم فهم إعلانات وحوارات بسرعة طبيعية حول مواضيع مألوفة. وفي الكتابة، تقرأ نصوصًا قصيرة وتكتب رسائل بسيطة لكن صحيحة.',
        'وتبقى المتابعة قائمة على النطق. فنراجع بانتظام الأصوات الصعبة ونبرة الجملة والتنغيم، لأن النطق الجيد يسهّل الفهم بقدر ما يسهّل التعبير.',
      ],
    },
    {
      id: 'exam', h2: 'امتحان المستوى A2',
      paragraphs: [
        'تشمل الشهادات الممكنة في هذه المرحلة شهادة Goethe-Zertifikat A2: Start Deutsch 2 وامتحان telc Deutsch A2. وهي ليست ضرورية دائمًا، لكنها تفيد في قياس تقدمك وقد تُطلب في بعض الإجراءات. نعرض عليك الاختبارات وندربك في ظروف حقيقية ونساعدك على اختيار موعد. ولا نضمن أبدًا نتيجة امتحان.',
      ],
    },
    {
      id: 'b1', h2: 'التحضير للانتقال إلى B1',
      paragraphs: [
        'المستوى B1 هو الذي تصبح فيه مستقلًا فعلًا. وللوصول إليه دون جهد لا داعي له، يحضّر A2 عدة لبنات: تصريف أكثر ثباتًا، ومفردات موضوعية أوسع، وعادة إنتاج جمل كاملة. ونبيّن لك في كل تقييم النقاط التي تحتاج إلى ترسيخ قبل تغيير المستوى.',
        'وفي إطار مرافقة إنتلكت، يندرج هذا المستوى ضمن مسار أوسع: اختيار المشروع والوثائق والإجراءات. فلا تضطر إلى التعامل وحدك مع اللغة والإدارة معًا.',
      ],
    },
    {
      id: 'progress', h2: 'كيف تقيس تقدمك في المستوى A2؟',
      bullets: [
        'تحكي عطلة نهاية الأسبوع في بضع جمل بصيغة الماضي.',
        'تحجز موعدًا هاتفيًا دون تحضير مكتوب.',
        'تفهم فحوى إعلان في محطة أو متجر.',
        'تكتب رسالة قصيرة لطلب معلومة.',
      ],
      after: ['إذا بدت لك هذه المهام في المتناول فأنت جاهز للانتقال إلى B1. وإن لم تكن كذلك فلا بأس: نراجع معك النقاط الناقصة قبل تغيير المستوى.'],
    },
  ],
  faq: [
    { q: 'هل يجب أن أكون قد أتممت A1 لدى إنتلكت للتسجيل في A2؟', a: 'لا. يؤكد اختبار تحديد المستوى المجاني أن مستواك يطابق A2، أيًّا كانت طريقة تعلمك.' },
    { q: 'ما الفرق بين A1 وA2؟', a: 'يتيح A1 التعريف بالنفس والتواصل بجمل بسيطة جدًا. ويتيح A2 الحكي والسؤال والشرح والتعامل مع مواقف عملية شائعة.' },
    { q: 'هل يكفي A2 للدراسة في ألمانيا؟', a: 'لا. تطلب البرامج الجامعية بالألمانية عمومًا مستوى B2 أو C1. وA2 مرحلة في مسار أطول.' },
    { q: 'هل أستطيع متابعة A2 بالتوازي مع عمل أو دراسة؟', a: 'نعم، توجد صيغ مرنة. وتُؤكَّد المواعيد الدقيقة عند التسجيل.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
