import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Allemand C1',
  title: 'Cours d’allemand C1 : TestDaF, DSH et études universitaires | Intellect',
  description: 'Préparez le niveau C1 d’allemand avec Intellect : expression académique, compréhension de cours magistraux, TestDaF, DSH, Goethe et telc pour entrer à l’université.',
  h1: 'Cours d’allemand C1 : le niveau des études universitaires',
  lead: 'Le C1 est le niveau que beaucoup d’universités demandent pour étudier en allemand. Nous le préparons avec un travail académique, pas seulement scolaire.',
  related: ['german-b1', 'medicine-germany', 'exam-preparation', 'study-germany'],
  sections: [
    {
      id: 'niveau', h2: 'Ce que signifie le niveau C1',
      paragraphs: [
        'Au niveau C1, vous comprenez un large éventail de textes longs et exigeants et vous en saisissez le sens implicite. Vous vous exprimez spontanément et couramment, sans chercher vos mots de manière visible, et vous utilisez la langue avec souplesse dans la vie sociale, professionnelle et académique. Vous produisez des textes clairs, bien structurés et détaillés sur des sujets complexes.',
        'Pour un étudiant, cela signifie suivre un cours magistral, prendre des notes en temps réel, lire de la littérature scientifique, participer à un séminaire et rédiger un travail écrit. C’est précisément ce que les universités veulent s’assurer que vous pouvez faire avant de vous admettre.',
      ],
    },
    {
      id: 'chemin', h2: 'Le chemin du B1 au C1',
      paragraphs: [
        'Entre le B1 et le C1 se trouve le B2, une étape qu’il ne faut pas sous-estimer. Le B2 consolide la grammaire complexe, élargit le vocabulaire abstrait et vous habitue à comprendre des textes spécialisés. Nous organisons ces étapes comme un parcours continu pour que votre progression reste régulière.',
        'Le passage au C1 demande surtout de la précision : nuances de sens, registres de langue, constructions nominales typiques du style académique, et un vaste vocabulaire thématique.',
      ],
    },
    {
      id: 'academique', h2: 'Un travail orienté vers le monde universitaire',
      bullets: [
        'Compréhension de cours magistraux : repérer la structure d’un exposé, noter l’essentiel, reformuler.',
        'Lecture rapide et précise de textes scientifiques et d’articles de presse de fond.',
        'Rédaction argumentée : introduction, thèse, arguments, contre-arguments, conclusion.',
        'Résumé et reformulation d’un graphique ou d’une statistique, exercice classique des examens universitaires.',
        'Expression orale académique : présentation, réponse à des questions, prise de position.',
        'Vocabulaire des sciences, de la médecine, de l’économie et des sciences humaines selon votre filière.',
      ],
    },
    {
      id: 'examens', h2: 'Les examens reconnus pour l’admission',
      paragraphs: [
        'Les universités allemandes acceptent généralement plusieurs preuves de niveau. Les plus courantes sont le TestDaF, l’examen de langue DSH organisé par les universités elles-mêmes, le Goethe-Zertifikat C1 et le certificat telc Deutsch C1 Hochschule. Chaque établissement indique dans les conditions d’admission ce qu’il accepte et le résultat minimal exigé.',
        'Au TestDaF, de nombreuses universités demandent le niveau TDN 4 dans chacune des quatre parties. À la DSH, c’est souvent le niveau DSH-2. Ces exigences varient selon les établissements et les filières : nous les vérifions avec vous pour chaque université visée avant de vous inscrire à une session.',
      ],
    },
    {
      id: 'preparation', h2: 'Comment se déroule la préparation',
      paragraphs: [
        'Nous commençons par une épreuve blanche pour situer votre niveau réel par rapport au résultat visé. Les séances suivantes combinent contenu linguistique et entraînement à l’épreuve : gestion du temps, techniques de prise de notes, structuration d’un texte argumentatif. Les corrections sont détaillées et vous voyez, séance après séance, comment votre score se rapproche de l’objectif.',
        'Si votre candidature est en parallèle de la préparation, nous synchronisons le calendrier des examens avec celui des inscriptions, afin que vos résultats arrivent avant la date limite.',
      ],
    },
    {
      id: 'calendrier', h2: 'Planifier le calendrier des examens',
      paragraphs: [
        'Les places en centre d’examen se remplissent vite et les sessions sont limitées dans l’année. Un bon calendrier part de la date limite de candidature de l’université, remonte à la date de l’examen, puis fixe le moment où vous devez avoir atteint le niveau. Prévoyez aussi une marge pour repasser une épreuve si le résultat est juste en dessous de l’exigence.',
        'Les résultats mettent parfois plusieurs semaines à arriver et certains certificats ne sont délivrés que par voie postale. Nous vous aidons à anticiper ces délais afin qu’ils ne mettent pas votre candidature en danger.',
      ],
    },
    {
      id: 'hors-cours', h2: 'Travailler en dehors des cours',
      paragraphs: [
        'Au niveau C1, la progression vient surtout de l’exposition à une langue riche. Lisez régulièrement la presse allemande, écoutez des émissions d’information comme la Tagesschau, regardez des conférences universitaires en ligne et prenez l’habitude de noter les tournures académiques réutilisables. Un carnet de vocabulaire thématique, plutôt qu’alphabétique, se retient mieux et sert directement en rédaction.',
        'Nous vous indiquons des sources adaptées à votre filière et nous vous proposons des exercices de reformulation à partir de ces textes.',
      ],
    },
    {
      id: 'medecine', h2: 'Un cas particulier : les professionnels de santé',
      paragraphs: [
        'Pour les médecins et les autres professionnels de santé qui envisagent de travailler en Allemagne, l’allemand général ne suffit pas toujours : une épreuve de langue spécialisée dans le domaine médical, la Fachsprachprüfung (FSP), est généralement exigée dans le cadre de la reconnaissance de la qualification. Nous intégrons le vocabulaire médical et les situations professionnelles dès que votre niveau le permet : anamnèse, description des symptômes, comptes rendus, échanges entre confrères. Les procédures officielles relèvent des autorités et sont détaillées sur la page consacrée à la médecine en Allemagne.',
      ],
    },
    {
      id: 'pret', h2: 'Savoir si vous êtes prêt pour l’examen',
      bullets: [
        'Vous comprenez un cours magistral et en tirez des notes exploitables.',
        'Vous rédigez un texte argumenté de plusieurs paragraphes sans aide.',
        'Vous présentez un sujet complexe à l’oral et répondez aux questions.',
        'Vos résultats aux simulations atteignent régulièrement le score visé.',
      ],
      after: ['Nous planifions la date d’examen à partir de ces indicateurs, pas à partir d’une impression.'],
    },
  ],
  faq: [
    { q: 'Quel est le meilleur examen pour entrer à l’université ?', a: 'Il n’y en a pas un seul. Le TestDaF et la DSH sont très répandus, mais chaque université précise ce qu’elle accepte. Nous vérifions pour chaque candidature.' },
    { q: 'Puis-je passer directement du B1 au C1 ?', a: 'Le chemin passe par le B2. Nous organisons un parcours continu pour que la transition soit fluide.' },
    { q: 'Les certificats ont-ils une durée de validité ?', a: 'Certaines institutions limitent l’ancienneté du certificat accepté. Vérifiez la règle de l’université visée et planifiez l’examen en conséquence.' },
  ],
};

const en: PageContent = {
  nav: 'German C1',
  title: 'German C1 course: TestDaF, DSH and university study | Intellect',
  description: 'Prepare German level C1 with Intellect: academic expression, understanding lectures, TestDaF, DSH, Goethe and telc to enter university.',
  h1: 'German C1 course: the level of university study',
  lead: 'C1 is the level many universities ask for to study in German. We prepare it with academic work, not just classroom exercises.',
  related: ['german-b1', 'medicine-germany', 'exam-preparation', 'study-germany'],
  sections: [
    {
      id: 'level', h2: 'What level C1 means',
      paragraphs: [
        'At C1, you understand a wide range of long and demanding texts and grasp their implicit meaning. You express yourself spontaneously and fluently, without obviously searching for words, and you use the language flexibly in social, professional and academic life. You produce clear, well-structured and detailed texts on complex subjects.',
        'For a student, this means following a lecture, taking notes in real time, reading scientific literature, taking part in a seminar and writing a paper. That is exactly what universities want to be sure you can do before admitting you.',
      ],
    },
    {
      id: 'path', h2: 'The path from B1 to C1',
      paragraphs: [
        'Between B1 and C1 lies B2, a stage you should not underestimate. B2 consolidates complex grammar, widens abstract vocabulary and gets you used to specialised texts. We organise these stages as a continuous path so your progress stays steady.',
        'Moving up to C1 is mostly a matter of precision: shades of meaning, language registers, noun constructions typical of academic style, and a broad thematic vocabulary.',
      ],
    },
    {
      id: 'academic', h2: 'Work oriented towards university life',
      bullets: [
        'Understanding lectures: spotting the structure of a talk, noting the essentials, rephrasing.',
        'Fast and accurate reading of scientific texts and in-depth press articles.',
        'Argumentative writing: introduction, thesis, arguments, counter-arguments, conclusion.',
        'Summarising and describing a chart or statistic, a classic task in university exams.',
        'Academic speaking: presenting, answering questions, taking a position.',
        'Vocabulary of science, medicine, economics and the humanities depending on your field.',
      ],
    },
    {
      id: 'exams', h2: 'Exams recognised for admission',
      paragraphs: [
        'German universities generally accept several proofs of level. The most common are TestDaF, the DSH language exam run by universities themselves, the Goethe-Zertifikat C1 and the telc Deutsch C1 Hochschule certificate. Each institution states in its admission conditions what it accepts and the minimum result required.',
        'For TestDaF, many universities ask for level TDN 4 in each of the four parts. For DSH, it is often level DSH-2. These requirements vary between institutions and fields: we check them with you for each university you target before you register for a session.',
      ],
    },
    {
      id: 'preparation', h2: 'How the preparation runs',
      paragraphs: [
        'We start with a mock test to place your real level against the target result. Following sessions combine language content and exam training: time management, note-taking techniques, structuring an argumentative text. Corrections are detailed and you see, session after session, how your score moves towards the goal.',
        'If your application runs alongside the preparation, we synchronise the exam calendar with application deadlines so that your results arrive in time.',
      ],
    },
    {
      id: 'calendar', h2: 'Planning the exam calendar',
      paragraphs: [
        'Places at exam centres fill up quickly and sessions are limited during the year. A good calendar starts from the university’s application deadline, works back to the exam date, then sets the moment by which you must have reached the level. Also leave a margin to retake a test if the result falls just short of the requirement.',
        'Results sometimes take several weeks to arrive and some certificates are only issued by post. We help you anticipate these delays so they do not put your application at risk.',
      ],
    },
    {
      id: 'outside', h2: 'Working outside class',
      paragraphs: [
        'At C1, progress comes mostly from exposure to rich language. Read the German press regularly, listen to news programmes such as the Tagesschau, watch university lectures online and get into the habit of noting reusable academic phrases. A thematic vocabulary notebook, rather than an alphabetical one, is easier to remember and feeds directly into your writing.',
        'We point you to sources suited to your field and give you rephrasing exercises based on those texts.',
      ],
    },
    {
      id: 'medicine', h2: 'A special case: healthcare professionals',
      paragraphs: [
        'For doctors and other healthcare professionals considering work in Germany, general German is not always enough: a specialised language test in the medical field, the Fachsprachprüfung (FSP), is generally required as part of the recognition of the qualification. We integrate medical vocabulary and professional situations as soon as your level allows: taking a history, describing symptoms, reports, exchanges between colleagues. Official procedures are a matter for the authorities and are detailed on the page about medicine in Germany.',
      ],
    },
    {
      id: 'ready', h2: 'Knowing whether you are ready for the exam',
      bullets: [
        'You follow a lecture and take usable notes.',
        'You write an argumentative text of several paragraphs without help.',
        'You present a complex subject orally and answer questions.',
        'Your results in simulations regularly reach the target score.',
      ],
      after: ['We plan the exam date from these indicators, not from an impression.'],
    },
  ],
  faq: [
    { q: 'What is the best exam to enter university?', a: 'There is no single one. TestDaF and DSH are very common, but each university states what it accepts. We check for every application.' },
    { q: 'Can I go straight from B1 to C1?', a: 'The path goes through B2. We organise a continuous route so the transition is smooth.' },
    { q: 'Do certificates expire?', a: 'Some institutions limit how old the accepted certificate can be. Check the rule of the university you target and plan the exam accordingly.' },
  ],
};

const ar: PageContent = {
  nav: 'الألمانية C1',
  title: 'دورة الألمانية C1: TestDaF وDSH والدراسة الجامعية | إنتلكت',
  description: 'حضّر المستوى C1 في الألمانية مع إنتلكت: التعبير الأكاديمي وفهم المحاضرات وامتحانات TestDaF وDSH وGoethe وtelc لدخول الجامعة.',
  h1: 'دورة الألمانية C1: مستوى الدراسة الجامعية',
  lead: 'المستوى C1 هو ما تطلبه جامعات كثيرة للدراسة بالألمانية. نحضّره بعمل أكاديمي وليس بتمارين مدرسية فقط.',
  related: ['german-b1', 'medicine-germany', 'exam-preparation', 'study-germany'],
  sections: [
    {
      id: 'level', h2: 'ماذا يعني المستوى C1؟',
      paragraphs: [
        'في المستوى C1 تفهم مجموعة واسعة من النصوص الطويلة والمتطلبة وتلتقط معناها الضمني. وتعبّر عن نفسك بعفوية وطلاقة دون بحث ظاهر عن الكلمات، وتستعمل اللغة بمرونة في الحياة الاجتماعية والمهنية والأكاديمية. وتنتج نصوصًا واضحة ومنظمة ومفصلة حول مواضيع معقدة.',
        'وبالنسبة إلى الطالب يعني هذا متابعة محاضرة، وتدوين الملاحظات في الوقت الحقيقي، وقراءة الأدبيات العلمية، والمشاركة في حلقة دراسية، وكتابة بحث. وهذا بالضبط ما تريد الجامعات التأكد من قدرتك عليه قبل قبولك.',
      ],
    },
    {
      id: 'path', h2: 'الطريق من B1 إلى C1',
      paragraphs: [
        'بين B1 وC1 يوجد المستوى B2، وهو مرحلة لا ينبغي الاستهانة بها. فهو يرسّخ القواعد المعقدة ويوسّع المفردات المجردة ويعوّدك على النصوص المتخصصة. وننظم هذه المراحل كمسار متصل حتى يبقى تقدمك منتظمًا.',
        'والانتقال إلى C1 يتعلق أساسًا بالدقة: فروق المعنى، ومستويات اللغة، والتراكيب الاسمية المميزة للأسلوب الأكاديمي، وحصيلة واسعة من المفردات الموضوعية.',
      ],
    },
    {
      id: 'academic', h2: 'عمل موجّه نحو الحياة الجامعية',
      bullets: [
        'فهم المحاضرات: تمييز بنية العرض، وتدوين الأساسيات، وإعادة الصياغة.',
        'قراءة سريعة ودقيقة للنصوص العلمية وللمقالات الصحفية المعمّقة.',
        'الكتابة الحجاجية: مقدمة وأطروحة وحجج وحجج مضادة وخاتمة.',
        'تلخيص رسم بياني أو إحصائية ووصفها، وهو تمرين كلاسيكي في الامتحانات الجامعية.',
        'التعبير الشفهي الأكاديمي: العرض والإجابة عن الأسئلة وتبني موقف.',
        'مفردات العلوم والطب والاقتصاد والعلوم الإنسانية بحسب تخصصك.',
      ],
    },
    {
      id: 'exams', h2: 'الامتحانات المعترف بها للقبول',
      paragraphs: [
        'تقبل الجامعات الألمانية عمومًا عدة إثباتات للمستوى. وأكثرها شيوعًا TestDaF وامتحان DSH الذي تنظمه الجامعات نفسها وشهادة Goethe-Zertifikat C1 وشهادة telc Deutsch C1 Hochschule. وتذكر كل مؤسسة في شروط القبول ما تقبله والنتيجة الدنيا المطلوبة.',
        'في TestDaF تطلب جامعات كثيرة المستوى TDN 4 في كل جزء من الأجزاء الأربعة. وفي DSH يكون المطلوب غالبًا المستوى DSH-2. وتختلف هذه الشروط بين المؤسسات والتخصصات، ونتحقق منها معك لكل جامعة مستهدفة قبل أن تسجل في موعد الامتحان.',
      ],
    },
    {
      id: 'preparation', h2: 'كيف يجري التحضير؟',
      paragraphs: [
        'نبدأ باختبار تجريبي لتحديد مستواك الحقيقي مقارنة بالنتيجة المستهدفة. وتجمع الحصص التالية بين المحتوى اللغوي والتدريب على الامتحان: إدارة الوقت، وتقنيات تدوين الملاحظات، وبناء نص حجاجي. والتصحيحات مفصلة، وترى حصة بعد حصة كيف تقترب درجتك من الهدف.',
        'وإذا كان تقديم ملفك يجري بالتوازي مع التحضير فإننا نزامن جدول الامتحانات مع مواعيد التسجيل حتى تصل نتائجك قبل الموعد النهائي.',
      ],
    },
    {
      id: 'calendar', h2: 'تخطيط جدول الامتحانات',
      paragraphs: [
        'تمتلئ المقاعد في مراكز الامتحان بسرعة، والمواعيد محدودة خلال السنة. ويبدأ الجدول الجيد من الموعد النهائي لتقديم الملف إلى الجامعة، ثم يرجع إلى تاريخ الامتحان، ثم يحدد اللحظة التي يجب أن تكون قد بلغت فيها المستوى المطلوب. واترك أيضًا هامشًا لإعادة اختبار إذا جاءت النتيجة أقل بقليل من الشرط.',
        'قد تستغرق النتائج عدة أسابيع حتى تصل، وبعض الشهادات لا تُسلَّم إلا بالبريد. ونساعدك على توقع هذه الآجال حتى لا تعرّض ملفك للخطر. وننصحك كذلك بالاحتفاظ بنسخ رقمية ومطبوعة من كل شهادة ونتيجة، لأن الجامعات تطلبها غالبًا ضمن الملف.',
      ],
    },
    {
      id: 'outside', h2: 'العمل خارج الحصص',
      paragraphs: [
        'في المستوى C1 يأتي التقدم أساسًا من التعرض للغة غنية. اقرأ الصحافة الألمانية بانتظام، واستمع إلى نشرات الأخبار مثل Tagesschau، وشاهد محاضرات جامعية على الإنترنت، واعتد تدوين العبارات الأكاديمية القابلة لإعادة الاستعمال. ودفتر المفردات الموضوعي، بدل الأبجدي، أسهل حفظًا ويفيد مباشرة في الكتابة.',
        'ندلّك على مصادر تناسب تخصصك، ونقترح عليك تمارين إعادة صياغة انطلاقًا من هذه النصوص. وإذا خصصت ساعة يوميًا لهذا النوع من العمل فإن أثره على نتيجتك في الامتحان يفوق في الغالب أثر أي مراجعة مكثفة في الأيام الأخيرة.',
      ],
    },
    {
      id: 'medicine', h2: 'حالة خاصة: مهنيو الصحة',
      paragraphs: [
        'بالنسبة إلى الأطباء وسائر مهنيي الصحة الذين يفكرون في العمل بألمانيا، لا تكفي الألمانية العامة دائمًا: فغالبًا ما يُشترط اختبار لغوي متخصص في المجال الطبي، هو Fachsprachprüfung (FSP)، ضمن الاعتراف بالمؤهل. وندمج المفردات الطبية والمواقف المهنية بمجرد أن يسمح مستواك: أخذ السوابق المرضية، ووصف الأعراض، والتقارير، والتبادل بين الزملاء. أما الإجراءات الرسمية فهي من اختصاص السلطات، وتُفصَّل في صفحة الطب في ألمانيا.',
      ],
    },
    {
      id: 'ready', h2: 'كيف تعرف أنك جاهز للامتحان؟',
      bullets: [
        'تتابع محاضرة وتدوّن منها ملاحظات صالحة للاستعمال.',
        'تكتب نصًا حجاجيًا من عدة فقرات دون مساعدة.',
        'تعرض موضوعًا معقدًا شفهيًا وتجيب عن الأسئلة.',
        'تبلغ نتائجك في المحاكاة بانتظام الدرجة المستهدفة.',
      ],
      after: ['نخطط لتاريخ الامتحان انطلاقًا من هذه المؤشرات وليس من انطباع عابر، فالتسجيل المتسرع يكلّف رسومًا ووقتًا.'],
    },
  ],
  faq: [
    { q: 'ما أفضل امتحان لدخول الجامعة؟', a: 'لا يوجد امتحان واحد. TestDaF وDSH شائعان جدًا، لكن كل جامعة تحدد ما تقبله. ونتحقق من ذلك لكل طلب.' },
    { q: 'هل يمكنني الانتقال مباشرة من B1 إلى C1؟', a: 'الطريق يمر عبر B2. وننظم مسارًا متصلًا ليكون الانتقال سلسًا.' },
    { q: 'هل للشهادات مدة صلاحية؟', a: 'تحدد بعض المؤسسات مدى قِدم الشهادة المقبولة. تحقق من قاعدة الجامعة المستهدفة وخطط للامتحان وفقًا لذلك.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
