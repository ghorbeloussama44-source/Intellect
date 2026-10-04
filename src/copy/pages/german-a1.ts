import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Allemand A1',
  title: 'Cours d’allemand A1 : débuter l’allemand sur de bonnes bases | Intellect',
  description: 'Débutez l’allemand avec Intellect : cours A1 pour apprendre l’alphabet, la prononciation, le vocabulaire du quotidien et les premières phrases, avec un suivi personnalisé.',
  h1: 'Allemand A1 : commencer l’allemand sur de bonnes bases',
  lead: 'Le niveau A1 est le point de départ de tout projet en Allemagne. Nous le construisons avec soin, pour que votre allemand soit juste dès les premières semaines.',
  related: ['german-a2', 'german-courses', 'study-germany', 'student-support'],
  sections: [
    {
      id: 'decouverte', h2: 'À la découverte de la langue allemande',
      paragraphs: [
        'Le niveau A1 correspond à l’utilisateur élémentaire qui débute. À la fin de ce niveau, vous êtes capable de comprendre et d’utiliser des expressions familières et des phrases très simples, de vous présenter, de poser des questions sur votre environnement immédiat et de répondre quand l’interlocuteur parle lentement et clairement. C’est peu en apparence, mais c’est la base sur laquelle repose tout le reste.',
        'Pour un projet d’études ou de travail en Allemagne, le A1 est la première marche d’un escalier qui conduit à des niveaux plus exigeants. Réussir cette première étape, c’est prendre confiance : on découvre que cette langue, souvent jugée difficile, suit des règles que l’on peut apprendre pas à pas.',
      ],
    },
    {
      id: 'public', h2: 'À qui s’adresse le niveau A1',
      paragraphs: [
        'Le cours s’adresse aux débutants complets, quel que soit leur âge ou leur parcours : lycéens qui préparent un projet d’études, étudiants, jeunes diplômés, professionnels de santé qui envisagent l’Allemagne, adultes en reconversion. Aucune connaissance préalable n’est nécessaire, et il n’est pas indispensable de connaître une autre langue germanique.',
        'Si vous avez déjà quelques notions mais que vous n’êtes pas certain de votre niveau, un test de positionnement gratuit permet de vous placer dans le bon groupe. Mieux vaut commencer là où l’on progresse réellement que répéter ce que l’on sait déjà.',
      ],
    },
    {
      id: 'programme', h2: 'Ce que vous apprenez en A1',
      blocks: [
        { h3: 'L’alphabet et la prononciation', paragraphs: ['Les lettres, les voyelles infléchies ä, ö et ü, le son ß et les groupes de lettres comme sch, ch ou ei. La prononciation est travaillée dès la première séance, parce qu’une habitude fautive est difficile à corriger plus tard.'] },
        { h3: 'Se présenter et communiquer', paragraphs: ['Dire son nom, son âge, son pays et sa profession, saluer, remercier, s’excuser, épeler un nom, donner ses coordonnées. Ces échanges sont répétés en situation, avec des jeux de rôle.'] },
        { h3: 'Les nombres, les dates et l’heure', paragraphs: ['Compter, dire son numéro de téléphone, lire un prix, donner la date et l’heure, parler des jours et des mois. Ce sont des compétences très concrètes pour la vie quotidienne.'] },
        { h3: 'Les bases de grammaire', paragraphs: ['Les articles der, die et das, le pluriel des noms, les pronoms personnels, la conjugaison des verbes les plus fréquents au présent, la négation et la place du verbe dans la phrase, qui est la première grande différence avec le français.'] },
        { h3: 'Le vocabulaire du quotidien', paragraphs: ['La famille, la nourriture, les achats, les transports, le logement, les loisirs. Chaque thème est introduit avec des situations réalistes que vous rencontrerez en arrivant en Allemagne.'] },
      ],
    },
    {
      id: 'competences', h2: 'Les quatre compétences travaillées',
      bullets: [
        'Comprendre à l’oral : dialogues enregistrés, annonces courtes, chansons et petites vidéos.',
        'Comprendre à l’écrit : panneaux, courts messages, formulaires simples et menus.',
        'S’exprimer à l’oral : présentations, questions-réponses, dialogues à deux.',
        'S’exprimer à l’écrit : remplir un formulaire, écrire une carte postale ou un court message.',
      ],
      after: ['Chaque séance mélange ces compétences, car on apprend une langue en l’utilisant, pas en l’observant.'],
    },
    {
      id: 'methode', h2: 'Notre méthode pour les débutants',
      paragraphs: [
        'Au début, la tentation est de tout traduire. Nous vous encourageons à penser directement en allemand, avec des phrases entières plutôt que des mots isolés. Les séances alternent explications courtes, mises en situation et exercices à faire entre deux cours.',
        'Un suivi pédagogique personnalisé vous permet de savoir où vous en êtes : des bilans réguliers montrent vos progrès et ce qu’il reste à consolider. Nous adaptons le rythme, avec des formats intensifs lorsque votre calendrier est serré et des formats plus flexibles lorsque vous étudiez ou travaillez en parallèle.',
      ],
    },
    {
      id: 'habitudes', h2: 'Cinq habitudes qui accélèrent les progrès',
      bullets: [
        'Apprendre chaque nom avec son article : der Tisch, die Lampe, das Buch.',
        'Écouter de l’allemand chaque jour, même dix minutes.',
        'Parler à voix haute, même seul, pour habituer la bouche aux nouveaux sons.',
        'Écrire quelques phrases par jour sur votre quotidien et les faire corriger.',
        'Réviser peu mais souvent : de courtes séances espacées valent mieux qu’une longue séance hebdomadaire.',
      ],
    },
    {
      id: 'certificat', h2: 'L’examen de fin de niveau et la suite',
      paragraphs: [
        'À la fin du A1, vous pouvez passer un examen officiel, comme le Goethe-Zertifikat A1 : Start Deutsch 1 ou l’examen telc Deutsch A1. Il n’est pas toujours obligatoire, mais il mesure objectivement vos progrès et peut être demandé pour certaines démarches. Nous vous expliquons le format de l’épreuve, nous vous entraînons dans les conditions réelles et nous ne promettons jamais un résultat : il dépend de votre travail.',
        'Le niveau suivant est le A2, qui élargit ce que vous pouvez exprimer. Vous pouvez le poursuivre dans la continuité, sans rupture de rythme.',
      ],
    },
    {
      id: 'semaine1', h2: 'À quoi ressemble une première semaine',
      bullets: [
        'Séance 1 : alphabet, prononciation, saluer et se présenter.',
        'Séance 2 : les nombres, l’âge et les coordonnées.',
        'Séance 3 : les premiers verbes, comme sein et haben, et la phrase simple.',
        'Séance 4 : les articles et le vocabulaire de la famille.',
        'Entre les séances : exercices courts de quinze minutes et écoute quotidienne.',
      ],
      after: ['Ce déroulé est indicatif ; il s’adapte au format que vous choisissez.'],
    },
  ],
  faq: [
    { q: 'Je n’ai jamais appris l’allemand, puis-je commencer en A1 ?', a: 'Oui, le niveau A1 est conçu pour les débutants complets. Aucune connaissance préalable n’est nécessaire.' },
    { q: 'L’allemand est-il très difficile à apprendre ?', a: 'Il demande de la régularité, notamment pour les articles et la place du verbe, mais il suit des règles logiques. Une méthode structurée et une pratique quotidienne font une grande différence.' },
    { q: 'Combien de temps dure le niveau A1 ?', a: 'La durée dépend du format et de votre rythme. Nous vous donnons une estimation honnête après le test de positionnement, puis nous l’ajustons selon vos résultats.' },
    { q: 'Dois-je passer un examen à la fin du A1 ?', a: 'Pas nécessairement. Cela dépend de votre projet. Nous vous conseillons selon la démarche visée.' },
  ],
};

const en: PageContent = {
  nav: 'German A1',
  title: 'German A1 course: start German on solid foundations | Intellect',
  description: 'Start German with Intellect: A1 course covering the alphabet, pronunciation, everyday vocabulary and first sentences, with personal follow-up.',
  h1: 'German A1: starting German on solid foundations',
  lead: 'Level A1 is the starting point of every project in Germany. We build it carefully so that your German is right from the first weeks.',
  related: ['german-a2', 'german-courses', 'study-germany', 'student-support'],
  sections: [
    {
      id: 'discovery', h2: 'Discovering the German language',
      paragraphs: [
        'Level A1 corresponds to the basic user who is just starting. By the end of this level you can understand and use familiar expressions and very simple sentences, introduce yourself, ask questions about your immediate surroundings and answer when the other person speaks slowly and clearly. It sounds like little, but it is the base on which everything else rests.',
        'For a study or work project in Germany, A1 is the first step of a staircase leading to more demanding levels. Completing this first stage builds confidence: you discover that this language, often judged difficult, follows rules you can learn step by step.',
      ],
    },
    {
      id: 'audience', h2: 'Who level A1 is for',
      paragraphs: [
        'The course is for complete beginners, whatever their age or background: school students preparing a study project, university students, recent graduates, healthcare professionals considering Germany, adults changing careers. No prior knowledge is needed, and you do not have to know another Germanic language.',
        'If you already know a few things but are unsure of your level, a free placement test puts you in the right group. It is better to start where you actually progress than to repeat what you already know.',
      ],
    },
    {
      id: 'programme', h2: 'What you learn at A1',
      blocks: [
        { h3: 'The alphabet and pronunciation', paragraphs: ['The letters, the umlauts ä, ö and ü, the ß sound and letter groups such as sch, ch or ei. Pronunciation is practised from the very first session, because a faulty habit is hard to correct later.'] },
        { h3: 'Introducing yourself and communicating', paragraphs: ['Giving your name, age, country and job, greeting, thanking, apologising, spelling a name, giving your contact details. These exchanges are repeated in context, through role-plays.'] },
        { h3: 'Numbers, dates and time', paragraphs: ['Counting, giving your phone number, reading a price, giving the date and time, talking about days and months. These are very concrete skills for daily life.'] },
        { h3: 'The basics of grammar', paragraphs: ['The articles der, die and das, noun plurals, personal pronouns, the present tense of the most frequent verbs, negation and verb position in the sentence, the first big difference from English or French.'] },
        { h3: 'Everyday vocabulary', paragraphs: ['Family, food, shopping, transport, housing, leisure. Each theme is introduced with realistic situations you will meet when you arrive in Germany.'] },
      ],
    },
    {
      id: 'skills', h2: 'The four skills we work on',
      bullets: [
        'Listening: recorded dialogues, short announcements, songs and small videos.',
        'Reading: signs, short messages, simple forms and menus.',
        'Speaking: presentations, questions and answers, two-person dialogues.',
        'Writing: filling in a form, writing a postcard or a short message.',
      ],
      after: ['Each session mixes these skills, because a language is learned by using it, not by observing it.'],
    },
    {
      id: 'method', h2: 'Our method for beginners',
      paragraphs: [
        'At the start, the temptation is to translate everything. We encourage you to think directly in German, using whole sentences rather than isolated words. Sessions alternate short explanations, real-life scenarios and exercises to do between classes.',
        'Personal academic follow-up lets you know where you stand: regular reviews show your progress and what remains to be consolidated. We adapt the pace, with intensive formats when your timeline is tight and more flexible ones when you study or work at the same time.',
      ],
    },
    {
      id: 'habits', h2: 'Five habits that speed up progress',
      bullets: [
        'Learn every noun with its article: der Tisch, die Lampe, das Buch.',
        'Listen to German every day, even ten minutes.',
        'Speak aloud, even alone, to get your mouth used to new sounds.',
        'Write a few sentences a day about your routine and have them corrected.',
        'Review little but often: short spaced sessions beat one long weekly session.',
      ],
    },
    {
      id: 'certificate', h2: 'The end-of-level exam and what comes next',
      paragraphs: [
        'At the end of A1 you can take an official exam, such as the Goethe-Zertifikat A1: Start Deutsch 1 or the telc Deutsch A1 exam. It is not always compulsory, but it objectively measures your progress and may be requested for certain procedures. We explain the format of the test, train you under real conditions and never promise a result: it depends on your work.',
        'The next level is A2, which widens what you can express. You can continue straight on, without a break in rhythm.',
      ],
    },
    {
      id: 'week1', h2: 'What a first week looks like',
      bullets: [
        'Session 1: alphabet, pronunciation, greeting and introducing yourself.',
        'Session 2: numbers, age and contact details.',
        'Session 3: the first verbs, such as sein and haben, and the simple sentence.',
        'Session 4: articles and family vocabulary.',
        'Between sessions: short fifteen-minute exercises and daily listening.',
      ],
      after: ['This outline is indicative; it adapts to the format you choose.'],
    },
  ],
  faq: [
    { q: 'I have never learned German, can I start at A1?', a: 'Yes, level A1 is designed for complete beginners. No prior knowledge is needed.' },
    { q: 'Is German very hard to learn?', a: 'It needs consistency, especially for articles and verb position, but it follows logical rules. A structured method and daily practice make a big difference.' },
    { q: 'How long does level A1 last?', a: 'It depends on the format and your pace. We give you an honest estimate after the placement test, then adjust it according to your results.' },
    { q: 'Do I have to take an exam at the end of A1?', a: 'Not necessarily. It depends on your project. We advise you according to the procedure you aim for.' },
  ],
};

const ar: PageContent = {
  nav: 'الألمانية A1',
  title: 'دورة اللغة الألمانية A1: ابدأ الألمانية على أسس متينة | إنتلكت',
  description: 'ابدأ تعلّم الألمانية مع إنتلكت: دورة A1 تشمل الأبجدية والنطق ومفردات الحياة اليومية وأولى الجمل، مع متابعة شخصية.',
  h1: 'الألمانية A1: ابدأ على أسس متينة',
  lead: 'المستوى A1 هو نقطة انطلاق كل مشروع في ألمانيا. نبنيه بعناية حتى تكون ألمانيتك سليمة منذ الأسابيع الأولى.',
  related: ['german-a2', 'german-courses', 'study-germany', 'student-support'],
  sections: [
    {
      id: 'discovery', h2: 'اكتشاف اللغة الألمانية',
      paragraphs: [
        'المستوى A1 هو مستوى المستخدم الأساسي الذي يبدأ للتو. وفي نهايته تستطيع فهم عبارات مألوفة وجمل بسيطة جدًا واستعمالها، والتعريف بنفسك، وطرح أسئلة عن محيطك القريب، والإجابة حين يتكلم محدثك ببطء ووضوح. يبدو ذلك قليلًا، لكنه الأساس الذي يقوم عليه كل ما بعده.',
        'وبالنسبة إلى مشروع دراسي أو مهني في ألمانيا، فإن A1 هو الدرجة الأولى في سلم يقود إلى مستويات أكثر تطلبًا. وإتمام هذه المرحلة الأولى يبني الثقة: فتكتشف أن هذه اللغة، التي يُقال إنها صعبة، تتبع قواعد يمكن تعلمها خطوة بخطوة.',
      ],
    },
    {
      id: 'audience', h2: 'لمن يُوجَّه المستوى A1؟',
      paragraphs: [
        'تُوجَّه الدورة إلى المبتدئين تمامًا، أيًّا كان عمرهم أو مسارهم: تلاميذ يحضّرون مشروعًا دراسيًا، وطلبة جامعيون، وخريجون جدد، ومهنيو الصحة الذين يفكرون في ألمانيا، وبالغون يغيّرون مسارهم المهني. لا يُشترط أي معرفة سابقة، ولا يلزم أن تعرف لغة جرمانية أخرى.',
        'وإذا كانت لديك بعض المعارف لكنك غير متأكد من مستواك، فإن اختبار تحديد المستوى المجاني يضعك في المجموعة المناسبة. فالأفضل أن تبدأ من حيث تتقدم فعلًا بدل أن تكرر ما تعرفه.',
      ],
    },
    {
      id: 'programme', h2: 'ماذا تتعلم في المستوى A1؟',
      blocks: [
        { h3: 'الأبجدية والنطق', paragraphs: ['الحروف، والحروف المعدّلة ä وö وü، وصوت ß، ومجموعات الحروف مثل sch وch وei. ونعمل على النطق منذ الحصة الأولى، لأن العادة الخاطئة يصعب تصحيحها لاحقًا.'] },
        { h3: 'التعريف بالنفس والتواصل', paragraphs: ['ذكر الاسم والعمر والبلد والمهنة، والتحية والشكر والاعتذار، وتهجئة اسم، وإعطاء بيانات الاتصال. وتتكرر هذه التبادلات في سياقها عبر تمثيل أدوار.'] },
        { h3: 'الأعداد والتواريخ والوقت', paragraphs: ['العد، وذكر رقم الهاتف، وقراءة سعر، وذكر التاريخ والساعة، والحديث عن الأيام والشهور. وهي مهارات ملموسة جدًا للحياة اليومية.'] },
        { h3: 'أساسيات القواعد', paragraphs: ['أدوات التعريف der وdie وdas، وجمع الأسماء، والضمائر الشخصية، وتصريف الأفعال الأكثر شيوعًا في المضارع، والنفي، وموضع الفعل في الجملة، وهو أول اختلاف كبير عن العربية.'] },
        { h3: 'مفردات الحياة اليومية', paragraphs: ['العائلة والطعام والتسوق والمواصلات والسكن والهوايات. ويُقدَّم كل موضوع بمواقف واقعية ستواجهها عند وصولك إلى ألمانيا.'] },
      ],
    },
    {
      id: 'skills', h2: 'المهارات الأربع التي نعمل عليها',
      bullets: [
        'الاستماع: حوارات مسجلة وإعلانات قصيرة وأغانٍ ومقاطع فيديو صغيرة.',
        'القراءة: لافتات ورسائل قصيرة واستمارات بسيطة وقوائم طعام.',
        'التحدث: عروض تعريفية وأسئلة وأجوبة وحوارات بين شخصين.',
        'الكتابة: ملء استمارة وكتابة بطاقة بريدية أو رسالة قصيرة.',
      ],
      after: ['تمزج كل حصة بين هذه المهارات، لأن اللغة تُتعلَّم باستعمالها وليس بمراقبتها.'],
    },
    {
      id: 'method', h2: 'منهجنا مع المبتدئين',
      paragraphs: [
        'في البداية يغري الجميع بترجمة كل شيء. ونشجعك على التفكير مباشرة بالألمانية وباستعمال جمل كاملة بدل كلمات منفصلة. وتتناوب الحصص بين شروحات قصيرة ومواقف واقعية وتمارين تُنجَز بين الدروس.',
        'تتيح لك المتابعة البيداغوجية الشخصية أن تعرف أين وصلت: فالتقييمات المنتظمة تُظهر تقدمك وما يبقى لترسيخه. ونكيّف الوتيرة، بصيغ مكثفة حين يكون جدولك ضيقًا وصيغ أكثر مرونة حين تدرس أو تعمل في الوقت نفسه.',
      ],
    },
    {
      id: 'habits', h2: 'خمس عادات تسرّع التقدم',
      bullets: [
        'تعلّم كل اسم مع أداة تعريفه: der Tisch وdie Lampe وdas Buch.',
        'استمع إلى الألمانية كل يوم، ولو لعشر دقائق.',
        'تكلّم بصوت مرتفع، حتى وأنت وحدك، لتعوّد لسانك على الأصوات الجديدة.',
        'اكتب بضع جمل كل يوم عن حياتك اليومية واطلب تصحيحها.',
        'راجع قليلًا لكن باستمرار: فالحصص القصيرة المتباعدة خير من حصة أسبوعية طويلة واحدة.',
      ],
    },
    {
      id: 'certificate', h2: 'امتحان نهاية المستوى وما بعده',
      paragraphs: [
        'في نهاية A1 يمكنك اجتياز امتحان رسمي، مثل شهادة Goethe-Zertifikat A1: Start Deutsch 1 أو امتحان telc Deutsch A1. وهو ليس إلزاميًا دائمًا، لكنه يقيس تقدمك بموضوعية وقد يُطلب في بعض الإجراءات. نشرح لك صيغة الاختبار وندربك في ظروف حقيقية ولا نعد أبدًا بنتيجة: فهي تتوقف على عملك.',
        'المستوى التالي هو A2، وهو يوسّع ما تستطيع التعبير عنه. ويمكنك المتابعة مباشرة دون انقطاع في الإيقاع.',
      ],
    },
    {
      id: 'week1', h2: 'كيف يبدو الأسبوع الأول؟',
      bullets: [
        'الحصة 1: الأبجدية والنطق والتحية والتعريف بالنفس.',
        'الحصة 2: الأعداد والعمر وبيانات الاتصال.',
        'الحصة 3: الأفعال الأولى مثل sein وhaben والجملة البسيطة.',
        'الحصة 4: أدوات التعريف ومفردات العائلة.',
        'بين الحصص: تمارين قصيرة من خمس عشرة دقيقة واستماع يومي.',
      ],
      after: ['هذا التسلسل إرشادي ويتكيف مع الصيغة التي تختارها. والهدف أن تغادر الأسبوع الأول وأنت تستطيع بالفعل تقديم نفسك بالألمانية بثقة.'],
    },
  ],
  faq: [
    { q: 'لم أتعلم الألمانية من قبل، هل أستطيع البدء من A1؟', a: 'نعم، فالمستوى A1 مصمم للمبتدئين تمامًا ولا يتطلب أي معرفة سابقة.' },
    { q: 'هل الألمانية صعبة جدًا؟', a: 'تتطلب انتظامًا، خاصة في أدوات التعريف وموضع الفعل، لكنها تتبع قواعد منطقية. ومنهج منظم مع ممارسة يومية يصنعان فرقًا كبيرًا.' },
    { q: 'كم يستغرق المستوى A1؟', a: 'يعتمد ذلك على الصيغة ووتيرتك. نعطيك تقديرًا صادقًا بعد اختبار تحديد المستوى ثم نعدله بحسب نتائجك.' },
    { q: 'هل يجب أن أجتاز امتحانًا في نهاية A1؟', a: 'ليس بالضرورة. يعتمد ذلك على مشروعك، وننصحك بحسب الإجراء الذي تستهدفه.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
