import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Allemand A1–A2',
  title: 'Cours d’allemand A1 et A2 pour débutants | Intellect',
  description: 'Débutez l’allemand avec Intellect : cours A1 et A2, prononciation, bases de grammaire, vie quotidienne et préparation aux certificats Start Deutsch ou telc.',
  h1: 'Cours d’allemand A1 et A2 : bien commencer',
  lead: 'Les deux premiers niveaux posent les fondations de tout le reste. Nous les construisons avec soin, pour que votre allemand soit juste dès le départ.',
  related: ['german-b1', 'german-courses', 'study-germany'],
  sections: [
    {
      id: 'public', h2: 'À qui s’adressent les niveaux A1 et A2',
      paragraphs: [
        'Ces cours s’adressent aux débutants complets comme aux personnes qui ont déjà quelques notions mais veulent repartir sur de bonnes bases. Vous pouvez être lycéen, étudiant, jeune diplômé ou adulte en reconversion : ce qui compte, c’est que votre projet passe par l’Allemagne, que ce soit pour des études, pour une formation ou pour vivre et travailler sur place.',
        'Aucun prérequis n’est demandé. Si vous hésitez entre A1 et A2, un test de positionnement gratuit vous place dans le bon groupe en quelques minutes.',
      ],
    },
    {
      id: 'a1', h2: 'Ce que vous apprenez en A1',
      paragraphs: ['Le niveau A1 correspond à l’utilisateur élémentaire qui débute. À la fin, vous savez communiquer de façon simple dans des situations très courantes.'],
      bullets: [
        'L’alphabet, les voyelles infléchies (ä, ö, ü) et le son ß, avec un travail de prononciation dès la première séance.',
        'Se présenter, saluer, donner son âge, son pays, sa profession et ses coordonnées.',
        'Les articles der, die et das, les pronoms personnels et la conjugaison des verbes les plus fréquents au présent.',
        'La place du verbe dans la phrase, qui est la première grande différence avec le français.',
        'Les nombres, l’heure, les jours, la famille, la nourriture, les achats et les transports.',
      ],
    },
    {
      id: 'a2', h2: 'Ce que vous apprenez en A2',
      paragraphs: ['Le niveau A2 élargit ce que vous pouvez exprimer. Vous comprenez des phrases et des expressions courantes liées à votre environnement immédiat et vous échangez sur des sujets familiers.'],
      bullets: [
        'Le passé avec le parfait (Perfekt) pour raconter ce que vous avez fait.',
        'Les verbes modaux, pour exprimer l’obligation, la possibilité ou la permission.',
        'Les premiers cas grammaticaux, l’accusatif et le datif, et leur effet sur les articles.',
        'Les phrases subordonnées simples avec weil et dass.',
        'Les situations pratiques : prendre un rendez-vous, chercher un logement, parler de sa santé, écrire un message court.',
      ],
    },
    {
      id: 'methode', h2: 'Notre méthode pour les débutants',
      paragraphs: [
        'Au début, la tentation est de tout traduire. Nous vous encourageons à penser directement en allemand, avec des phrases entières plutôt que des mots isolés. Les séances alternent explications courtes, mises en situation et jeux de rôle, afin que vous parliez dès le premier jour.',
        'Nous insistons sur l’écoute. L’oreille se forme tôt : des dialogues enregistrés, des chansons et de courtes vidéos accompagnent chaque unité. Entre deux séances, des exercices courts et réguliers fixent le vocabulaire plus efficacement qu’une longue révision de dernière minute.',
      ],
    },
    {
      id: 'certificats', h2: 'Les certificats possibles à ce stade',
      paragraphs: [
        'À la fin de chaque niveau, vous pouvez passer un examen officiel. Le Goethe-Institut propose les certificats Start Deutsch 1 pour le niveau A1 et Start Deutsch 2 pour le niveau A2, et telc propose des examens équivalents. Ces certificats ne sont pas toujours obligatoires pour une inscription à l’université, mais ils sont utiles pour certaines démarches de visa et pour mesurer objectivement vos progrès.',
        'Nous vous expliquons le format de l’épreuve, nous vous entraînons dans les conditions réelles et nous vous aidons à choisir une session et un centre d’examen.',
      ],
    },
    {
      id: 'duree', h2: 'Combien de temps faut-il compter ?',
      paragraphs: [
        'La durée dépend de votre rythme et de la pratique que vous ajoutez en dehors des cours. Un format intensif permet d’avancer plus vite, un format flexible convient mieux si vous étudiez ou travaillez. Nous vous donnons une estimation honnête après le test de positionnement, puis nous la réajustons selon vos résultats.',
        'Pour progresser, quelques habitudes comptent plus que tout : dix à vingt minutes de pratique chaque jour, écouter de l’allemand même en tâche de fond, et oser parler malgré les erreurs.',
      ],
    },
    {
      id: 'conseils', h2: 'Cinq habitudes qui accélèrent les progrès',
      bullets: [
        'Apprendre chaque nom avec son article : der Tisch, die Lampe, das Buch. L’article fait partie du mot.',
        'Écouter chaque jour, par exemple les programmes pour apprenants de la Deutsche Welle comme « Nicos Weg », conçus pour les niveaux A1 à B1.',
        'Parler à voix haute, même seul, pour habituer la bouche aux sons nouveaux.',
        'Écrire quelques phrases par jour sur votre quotidien et les faire corriger.',
        'Réviser peu mais souvent : de courtes séances espacées valent mieux qu’une longue séance hebdomadaire.',
      ],
      after: ['Nous adaptons ces habitudes à votre emploi du temps et nous vous proposons des supports gratuits pour pratiquer entre les séances.'],
    },
    {
      id: 'suite', h2: 'Et après le A2 ?',
      paragraphs: [
        'Le niveau suivant est le B1, qui vous rend autonome dans la vie quotidienne et ouvre plusieurs possibilités administratives. Vous pouvez poursuivre dans le même groupe ou en changer selon votre emploi du temps. Consultez la page consacrée au B1 pour connaître le programme et les examens.',
      ],
    },
  ],
  faq: [
    { q: 'Je n’ai jamais appris l’allemand, est-ce possible ?', a: 'Oui, le niveau A1 est conçu pour les débutants complets. Aucune connaissance préalable n’est nécessaire.' },
    { q: 'L’allemand est-il très difficile pour un francophone ou un arabophone ?', a: 'Il demande de la régularité, notamment pour les articles et les cas, mais il suit des règles logiques. Une méthode structurée et une pratique quotidienne font une grande différence.' },
    { q: 'Dois-je passer un examen à la fin du A2 ?', a: 'Ce n’est pas toujours obligatoire. Cela dépend de votre projet. Nous vous conseillons selon la démarche visée.' },
  ],
};

const en: PageContent = {
  nav: 'German A1–A2',
  title: 'German courses A1 and A2 for beginners | Intellect',
  description: 'Start German with Intellect: A1 and A2 courses covering pronunciation, grammar basics, daily life and preparation for Start Deutsch or telc certificates.',
  h1: 'German courses A1 and A2: starting well',
  lead: 'The first two levels lay the foundations for everything else. We build them carefully so your German is right from the start.',
  related: ['german-b1', 'german-courses', 'study-germany'],
  sections: [
    {
      id: 'audience', h2: 'Who levels A1 and A2 are for',
      paragraphs: [
        'These courses are for complete beginners as well as people who already know a little and want to restart on solid ground. You may be a school student, a university student, a recent graduate or an adult changing careers: what matters is that your project involves Germany, whether for studies, for training or to live and work there.',
        'No prerequisite is required. If you hesitate between A1 and A2, a free placement test puts you in the right group in a few minutes.',
      ],
    },
    {
      id: 'a1', h2: 'What you learn at A1',
      paragraphs: ['Level A1 is the basic user who is just starting. By the end you can communicate in a simple way in very common situations.'],
      bullets: [
        'The alphabet, the umlauts (ä, ö, ü) and the ß sound, with pronunciation work from the very first session.',
        'Introducing yourself, greeting, giving your age, country, job and contact details.',
        'The articles der, die and das, personal pronouns and the present tense of the most frequent verbs.',
        'Verb position in the sentence, the first big difference from English or French.',
        'Numbers, time, days, family, food, shopping and transport.',
      ],
    },
    {
      id: 'a2', h2: 'What you learn at A2',
      paragraphs: ['Level A2 widens what you can express. You understand common sentences and expressions linked to your immediate surroundings and you exchange on familiar topics.'],
      bullets: [
        'The past with the perfect tense (Perfekt) to tell what you did.',
        'Modal verbs, to express obligation, possibility or permission.',
        'The first grammatical cases, accusative and dative, and their effect on articles.',
        'Simple subordinate clauses with weil and dass.',
        'Practical situations: making an appointment, looking for housing, talking about your health, writing a short message.',
      ],
    },
    {
      id: 'method', h2: 'Our method for beginners',
      paragraphs: [
        'At the start, the temptation is to translate everything. We encourage you to think directly in German, using whole sentences rather than isolated words. Sessions alternate short explanations, role-plays and real-life scenarios so you speak from day one.',
        'We put weight on listening. The ear is trained early: recorded dialogues, songs and short videos accompany each unit. Between sessions, short and regular exercises fix vocabulary far better than a long last-minute revision.',
      ],
    },
    {
      id: 'certificates', h2: 'Certificates available at this stage',
      paragraphs: [
        'At the end of each level you can take an official exam. The Goethe-Institut offers Start Deutsch 1 for level A1 and Start Deutsch 2 for level A2, and telc offers equivalent exams. These certificates are not always compulsory for university enrolment, but they are useful for some visa procedures and to measure your progress objectively.',
        'We explain the format of the test, train you under real conditions and help you choose a session and an exam centre.',
      ],
    },
    {
      id: 'duration', h2: 'How long should you plan for?',
      paragraphs: [
        'It depends on your pace and on the practice you add outside class. An intensive format moves faster, a flexible format suits you better if you study or work. We give you an honest estimate after the placement test, then adjust it according to your results.',
        'To progress, a few habits matter more than anything: ten to twenty minutes of practice every day, listening to German even as background, and daring to speak despite mistakes.',
      ],
    },
    {
      id: 'habits', h2: 'Five habits that speed up progress',
      bullets: [
        'Learn every noun with its article: der Tisch, die Lampe, das Buch. The article is part of the word.',
        'Listen every day, for example to Deutsche Welle’s learner programmes such as “Nicos Weg”, designed for levels A1 to B1.',
        'Speak aloud, even alone, to get your mouth used to new sounds.',
        'Write a few sentences a day about your routine and have them corrected.',
        'Review little but often: short spaced sessions beat one long weekly session.',
      ],
      after: ['We adapt these habits to your schedule and give you free materials to practise between sessions.'],
    },
    {
      id: 'next', h2: 'What comes after A2?',
      paragraphs: [
        'The next level is B1, which makes you independent in daily life and opens several administrative possibilities. You can continue in the same group or change according to your schedule. See the B1 page for the programme and exams.',
      ],
    },
  ],
  faq: [
    { q: 'I have never learned German. Is that possible?', a: 'Yes, level A1 is designed for complete beginners. No prior knowledge is needed.' },
    { q: 'Is German very hard for an English or French speaker?', a: 'It needs consistency, especially for articles and cases, but it follows logical rules. A structured method and daily practice make a big difference.' },
    { q: 'Do I have to take an exam at the end of A2?', a: 'It is not always compulsory. It depends on your project. We advise you according to the procedure you aim for.' },
  ],
};

const ar: PageContent = {
  nav: 'الألمانية A1–A2',
  title: 'دورات اللغة الألمانية A1 وA2 للمبتدئين | إنتلكت',
  description: 'ابدأ الألمانية مع إنتلكت: دورات A1 وA2 تشمل النطق وأساسيات القواعد والحياة اليومية والتحضير لشهادات Start Deutsch أو telc.',
  h1: 'دورات الألمانية A1 وA2: بداية صحيحة',
  lead: 'المستويان الأولان يضعان الأساس لكل ما يأتي بعدهما. ونبنيهما بعناية حتى تكون ألمانيتك سليمة منذ البداية.',
  related: ['german-b1', 'german-courses', 'study-germany'],
  sections: [
    {
      id: 'audience', h2: 'لمن تُوجَّه مستويات A1 وA2؟',
      paragraphs: [
        'تُوجَّه هذه الدورات إلى المبتدئين تمامًا وإلى من لديهم بعض المعرفة ويريدون البدء من جديد على أسس متينة. قد تكون تلميذًا أو طالبًا جامعيًا أو خريجًا حديثًا أو شخصًا بالغًا يغيّر مساره المهني: المهم أن يمر مشروعك عبر ألمانيا، سواء للدراسة أو للتكوين أو للعيش والعمل هناك.',
        'لا يُشترط أي مستوى سابق. وإذا ترددت بين A1 وA2 فإن اختبار تحديد المستوى المجاني يضعك في المجموعة المناسبة خلال دقائق.',
      ],
    },
    {
      id: 'a1', h2: 'ماذا تتعلم في المستوى A1؟',
      paragraphs: ['المستوى A1 هو مستوى المستخدم الأساسي الذي يبدأ للتو. وفي نهايته تستطيع التواصل بشكل بسيط في مواقف شائعة جدًا.'],
      bullets: [
        'الأبجدية والحروف المعدّلة (ä وö وü) وصوت ß، مع عمل على النطق منذ الحصة الأولى.',
        'التعريف بالنفس والتحية وذكر العمر والبلد والمهنة وبيانات الاتصال.',
        'أدوات التعريف der وdie وdas، والضمائر الشخصية، وتصريف الأفعال الأكثر شيوعًا في المضارع.',
        'موضع الفعل في الجملة، وهو أول اختلاف كبير عن العربية والفرنسية.',
        'الأعداد والوقت وأيام الأسبوع والعائلة والطعام والتسوق والمواصلات.',
      ],
    },
    {
      id: 'a2', h2: 'ماذا تتعلم في المستوى A2؟',
      paragraphs: ['يوسّع المستوى A2 ما تستطيع التعبير عنه. فتفهم جملًا وعبارات شائعة تتعلق ببيئتك القريبة، وتتبادل الحديث حول مواضيع مألوفة.'],
      bullets: [
        'الماضي بصيغة Perfekt لتروي ما قمت به.',
        'الأفعال المساعدة للتعبير عن الواجب والإمكان والإذن.',
        'أولى الحالات النحوية، النصب Akkusativ والجر Dativ، وتأثيرها في أدوات التعريف.',
        'الجمل الفرعية البسيطة مع weil وdass.',
        'مواقف عملية: حجز موعد، والبحث عن سكن، والحديث عن الصحة، وكتابة رسالة قصيرة.',
      ],
    },
    {
      id: 'method', h2: 'منهجنا مع المبتدئين',
      paragraphs: [
        'في البداية يغري الجميع بترجمة كل شيء. ونشجعك على التفكير مباشرة بالألمانية وباستعمال جمل كاملة بدل كلمات منفصلة. وتتناوب الحصص بين شروحات قصيرة وتمثيل أدوار ومواقف واقعية حتى تتكلم منذ اليوم الأول.',
        'ونُعطي الاستماع أهمية كبيرة، فالأذن تتدرب مبكرًا: حوارات مسجلة وأغانٍ ومقاطع فيديو قصيرة ترافق كل وحدة. وبين الحصص، تثبّت التمارين القصيرة والمنتظمة المفردات أفضل بكثير من مراجعة طويلة في اللحظة الأخيرة.',
      ],
    },
    {
      id: 'certificates', h2: 'الشهادات الممكنة في هذه المرحلة',
      paragraphs: [
        'في نهاية كل مستوى يمكنك اجتياز امتحان رسمي. يقدم معهد غوته شهادتي Start Deutsch 1 للمستوى A1 وStart Deutsch 2 للمستوى A2، وتقدم telc امتحانات مماثلة. هذه الشهادات ليست إلزامية دائمًا للتسجيل في الجامعة، لكنها مفيدة لبعض إجراءات التأشيرة ولقياس تقدمك بموضوعية.',
        'نشرح لك صيغة الاختبار، وندربك في ظروف حقيقية، ونساعدك على اختيار موعد ومركز امتحان.',
      ],
    },
    {
      id: 'duration', h2: 'كم من الوقت تحتاج؟',
      paragraphs: [
        'تعتمد المدة على وتيرتك وعلى الممارسة التي تضيفها خارج الحصص. الصيغة المكثفة تتقدم أسرع، والصيغة المرنة أنسب إن كنت تدرس أو تعمل. ونعطيك تقديرًا صادقًا بعد اختبار تحديد المستوى، ثم نعدله بحسب نتائجك.',
        'وللتقدم، هناك عادات قليلة أهم من أي شيء آخر: عشر إلى عشرون دقيقة من الممارسة كل يوم، والاستماع إلى الألمانية حتى في الخلفية، والجرأة على الكلام رغم الأخطاء.',
      ],
    },
    {
      id: 'habits', h2: 'خمس عادات تسرّع التقدم',
      bullets: [
        'تعلّم كل اسم مع أداة تعريفه: der Tisch وdie Lampe وdas Buch. فأداة التعريف جزء من الكلمة.',
        'استمع كل يوم، مثلًا إلى برامج المتعلمين التي تقدمها دويتشه فيله مثل «Nicos Weg» المصممة للمستويات من A1 إلى B1.',
        'تكلّم بصوت مرتفع، حتى وأنت وحدك، لتعوّد لسانك على الأصوات الجديدة.',
        'اكتب بضع جمل كل يوم عن حياتك اليومية واطلب تصحيحها.',
        'راجع قليلًا لكن باستمرار: فالحصص القصيرة المتباعدة خير من حصة أسبوعية طويلة واحدة.',
      ],
      after: ['نكيّف هذه العادات مع جدولك الزمني، ونزودك بمواد مجانية للتدرب بين الحصص. ومع الوقت تتحول هذه الممارسة اليومية الصغيرة إلى الفارق الحقيقي بين من يتقدم ببطء ومن يتقدم بثبات نحو المستوى التالي.'],
    },
    {
      id: 'next', h2: 'وماذا بعد A2؟',
      paragraphs: [
        'المستوى التالي هو B1، وهو يجعلك مستقلًا في الحياة اليومية ويفتح عدة إمكانيات إدارية. يمكنك المتابعة في المجموعة نفسها أو تغييرها بحسب جدولك. راجع صفحة B1 لمعرفة البرنامج والامتحانات.',
      ],
    },
  ],
  faq: [
    { q: 'لم أتعلم الألمانية من قبل، هل هذا ممكن؟', a: 'نعم، فالمستوى A1 مصمم للمبتدئين تمامًا ولا يتطلب أي معرفة سابقة.' },
    { q: 'هل الألمانية صعبة جدًا على الناطقين بالعربية؟', a: 'تتطلب انتظامًا، خاصة في أدوات التعريف والحالات النحوية، لكنها تتبع قواعد منطقية. ومنهج منظم مع ممارسة يومية يصنعان فرقًا كبيرًا.' },
    { q: 'هل يجب أن أجتاز امتحانًا في نهاية A2؟', a: 'ليس دائمًا. يعتمد ذلك على مشروعك، وننصحك بحسب الإجراء الذي تستهدفه.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
