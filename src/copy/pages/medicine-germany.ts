import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Médecine en Allemagne',
  title: 'Médecine en Allemagne : reconnaissance, langue, FSP et KP | Intellect',
  description: 'Médecin diplômé et projet en Allemagne ? Étapes de la reconnaissance, niveau d’allemand, Fachsprachprüfung (FSP), Kenntnisprüfung (KP) et accompagnement Intellect.',
  h1: 'Médecine en Allemagne : construire son projet professionnel',
  lead: 'Exercer comme médecin en Allemagne est un projet de plusieurs mois, parfois plus. Il demande une bonne préparation de la langue, un dossier rigoureux et une information fiable à chaque étape.',
  related: ['exam-preparation', 'german-c1', 'visa-procedures', 'student-support'],
  sections: [
    {
      id: 'pourquoi', h2: 'Pourquoi des médecins envisagent l’Allemagne',
      paragraphs: [
        'De nombreux médecins formés hors d’Allemagne s’intéressent à ce pays : un système de santé structuré, des hôpitaux et des cabinets qui recrutent, des perspectives de formation continue et la possibilité de se spécialiser. Chaque parcours est personnel, et les motivations vont de la recherche d’un cadre de travail différent à la volonté d’élargir ses compétences.',
        'Nous préférons être clairs dès le départ : travailler en Allemagne n’est pas une démarche rapide. Les règles sont précises, les autorités sont exigeantes et le calendrier dépend de nombreux éléments, dont certains ne sont pas entre vos mains. Notre rôle est de vous aider à comprendre le chemin, à vous préparer et à éviter les erreurs d’organisation.',
      ],
    },
    {
      id: 'langue', h2: 'La langue : la condition de tout le reste',
      paragraphs: [
        'En Allemagne, la pratique médicale se fait en allemand. Il faut comprendre un patient, rédiger un dossier, présenter un cas à ses collègues et échanger avec les équipes. Pour demander l’autorisation d’exercer, un niveau général d’allemand est exigé, en pratique autour du B2, puis une épreuve de langue spécialisée dans le domaine médical.',
        'C’est pourquoi nos cours d’allemand sont le socle du projet. Nous suivons un parcours progressif du niveau A1 au niveau C1, puis nous intégrons le vocabulaire médical et les situations professionnelles : l’anamnèse, la description des symptômes, la communication avec le patient, l’échange entre médecins. Vous trouverez le détail de nos formations sur les pages dédiées aux niveaux d’allemand.',
      ],
    },
    {
      id: 'reconnaissance', h2: 'La reconnaissance de votre qualification',
      paragraphs: [
        'Pour exercer en tant que médecin, il faut obtenir une autorisation officielle. Elle peut prendre la forme d’une autorisation complète d’exercer, l’Approbation, ou d’une autorisation temporaire et limitée, la Berufserlaubnis. La demande est examinée par l’autorité compétente du Land dans lequel vous souhaitez travailler : les procédures et les exigences peuvent donc varier d’un Land à l’autre.',
        'L’autorité compare votre formation à la formation médicale allemande. Si elle conclut à une équivalence, la suite est plus simple. Si elle constate des différences importantes, ou si votre situation l’impose, une épreuve de connaissances peut être demandée. La décision appartient aux autorités, et nous ne pouvons ni la prédire ni la garantir.',
      ],
    },
    {
      id: 'etapes', h2: 'Les grandes étapes du projet',
      steps: [
        { title: 'Faire le point', text: 'Nous analysons votre diplôme, votre spécialité, votre expérience, votre niveau d’allemand et le Land visé, afin de déterminer un ordre réaliste pour vos démarches.' },
        { title: 'Préparer la langue', text: 'Parcours d’allemand général jusqu’au niveau demandé, avec une préparation progressive à l’allemand médical.' },
        { title: 'Constituer le dossier', text: 'Diplômes, relevés, attestations, curriculum vitae, documents d’identité, traductions assermentées et copies certifiées, selon la liste de l’autorité compétente.' },
        { title: 'Déposer la demande de reconnaissance', text: 'La demande est adressée à l’autorité du Land choisi. Nous vous aidons à vérifier la complétude du dossier avant l’envoi.' },
        { title: 'Passer les épreuves exigées', text: 'Selon votre situation : épreuve de langue médicale, épreuve de connaissances, ou autres mesures décidées par l’autorité.' },
        { title: 'S’installer et travailler', text: 'Recherche de poste, visa ou titre de séjour adapté, logement, assurance, démarches d’arrivée.' },
      ],
    },
    {
      id: 'fsp', h2: 'La Fachsprachprüfung (FSP) : l’épreuve de langue médicale',
      paragraphs: [
        'La Fachsprachprüfung, souvent abrégée FSP, est une épreuve de langue spécialisée destinée aux professionnels de santé. Elle vérifie que vous pouvez communiquer efficacement dans un contexte médical. Elle est généralement organisée par l’ordre ou la chambre des médecins du Land concerné et comprend, en général, un entretien avec un patient simulé, la rédaction d’un compte rendu médical et un échange professionnel avec un médecin.',
        'Les formats et les conditions d’inscription varient d’un Land à l’autre. Un certificat de langue générale est souvent demandé avant de pouvoir s’y inscrire. Nous détaillons la préparation à cette épreuve sur la page consacrée à la préparation aux examens, sans jamais promettre un résultat.',
      ],
    },
    {
      id: 'kp', h2: 'La Kenntnisprüfung (KP) : l’épreuve de connaissances',
      paragraphs: [
        'Selon les situations, l’autorité peut orienter le candidat vers une Kenntnisprüfung, c’est-à-dire une épreuve de connaissances médicales, qui porte en général sur des domaines cliniques centraux et sur des questions de pratique professionnelle. Elle se déroule en allemand, avec des examinateurs spécialistes.',
        'Toutes les personnes n’ont pas à la passer, et son contenu précis dépend du Land. Si elle est demandée dans votre cas, la préparation est double : réviser les connaissances cliniques et s’entraîner à les exprimer clairement en allemand, à l’oral comme à l’écrit.',
      ],
    },
    {
      id: 'accompagnement', h2: 'Ce que fait Intellect, et ce qu’Intellect ne fait pas',
      bullets: [
        'Nous vous aidons à comprendre les étapes et à les organiser dans le temps.',
        'Nous préparons votre niveau d’allemand, général puis médical.',
        'Nous vous aidons à constituer et à contrôler votre dossier avant l’envoi.',
        'Nous vous accompagnons dans les démarches de visa et d’installation.',
        'Nous ne remplaçons pas les autorités, qui décident de la reconnaissance et de l’autorisation d’exercer.',
        'Nous ne garantissons ni l’équivalence, ni l’autorisation, ni un poste.',
      ],
      after: ['Vérifiez toujours les exigences officielles du Land concerné : elles font foi, et elles peuvent changer.'],
    },
    {
      id: 'etudiants', h2: 'Et si vous souhaitez étudier la médecine ?',
      paragraphs: [
        'Cette page s’adresse aux médecins déjà diplômés. Si vous êtes bachelier ou étudiant et que vous voulez entrer en faculté de médecine, le chemin est différent : l’admission est très sélective et demande un excellent niveau d’allemand. Vous trouverez les informations correspondantes sur la page consacrée aux études en Allemagne.',
      ],
    },
  ],
  faq: [
    { q: 'Intellect garantit-il la reconnaissance de mon diplôme ?', a: 'Non. La reconnaissance est décidée par les autorités compétentes. Nous vous aidons à préparer le dossier et à comprendre les étapes.' },
    { q: 'Quel niveau d’allemand faut-il pour exercer ?', a: 'En pratique, un niveau général autour du B2 est demandé avant l’épreuve de langue médicale. Les exigences exactes dépendent du Land et doivent être vérifiées.' },
    { q: 'Tous les médecins doivent-ils passer la Kenntnisprüfung ?', a: 'Non. Cela dépend de la décision de l’autorité et de votre situation. Nous vous aidons à comprendre ce qui peut s’appliquer à votre cas.' },
    { q: 'Combien de temps faut-il prévoir ?', a: 'Plusieurs mois au minimum, souvent davantage, car la langue, les documents et l’instruction par l’autorité prennent du temps. Nous établissons un calendrier réaliste avec vous.' },
  ],
};

const en: PageContent = {
  nav: 'Medicine in Germany',
  title: 'Medicine in Germany: recognition, language, FSP and KP | Intellect',
  description: 'Qualified doctor planning a career in Germany? Recognition steps, German level, Fachsprachprüfung (FSP), Kenntnisprüfung (KP) and Intellect’s support.',
  h1: 'Medicine in Germany: building your professional project',
  lead: 'Practising as a doctor in Germany is a project of several months, sometimes more. It takes good language preparation, a rigorous file and reliable information at every stage.',
  related: ['exam-preparation', 'german-c1', 'visa-procedures', 'student-support'],
  sections: [
    {
      id: 'why', h2: 'Why doctors consider Germany',
      paragraphs: [
        'Many doctors trained outside Germany are interested in the country: a structured healthcare system, hospitals and practices that recruit, prospects for continuing education and the possibility to specialise. Every path is personal, and motivations range from wanting a different working environment to wishing to broaden one’s skills.',
        'We prefer to be clear from the start: working in Germany is not a quick process. The rules are precise, the authorities are demanding and the timeline depends on many factors, some of which are out of your hands. Our role is to help you understand the path, prepare and avoid organisational mistakes.',
      ],
    },
    {
      id: 'language', h2: 'Language: the condition for everything else',
      paragraphs: [
        'In Germany, medical practice is carried out in German. You must understand a patient, write up a record, present a case to colleagues and talk with teams. To apply for authorisation to practise, a general level of German is required, in practice around B2, followed by a specialised language test in the medical field.',
        'This is why our German courses are the foundation of the project. We follow a progressive path from A1 to C1, then integrate medical vocabulary and professional situations: taking a history, describing symptoms, communicating with the patient, exchanging between doctors. You will find the details of our courses on the pages dedicated to German levels.',
      ],
    },
    {
      id: 'recognition', h2: 'Recognition of your qualification',
      paragraphs: [
        'To practise as a doctor you need official authorisation. It can take the form of a full licence to practise, the Approbation, or of a temporary and limited permit, the Berufserlaubnis. The application is examined by the competent authority of the federal state (Land) in which you wish to work: procedures and requirements can therefore vary from one state to another.',
        'The authority compares your training with German medical training. If it concludes there is equivalence, the rest is simpler. If it finds significant differences, or if your situation requires it, a knowledge test may be requested. The decision belongs to the authorities, and we can neither predict nor guarantee it.',
      ],
    },
    {
      id: 'steps', h2: 'The main steps of the project',
      steps: [
        { title: 'Taking stock', text: 'We analyse your diploma, speciality, experience, level of German and the target state, to set a realistic order for your steps.' },
        { title: 'Preparing the language', text: 'A general German path up to the required level, with progressive preparation for medical German.' },
        { title: 'Building the file', text: 'Diplomas, transcripts, certificates, CV, identity documents, sworn translations and certified copies, according to the competent authority’s list.' },
        { title: 'Submitting the recognition application', text: 'The application is sent to the authority of the chosen state. We help you check that the file is complete before sending.' },
        { title: 'Taking the required tests', text: 'Depending on your situation: medical language test, knowledge test, or other measures decided by the authority.' },
        { title: 'Settling in and working', text: 'Job search, suitable visa or residence permit, housing, insurance, arrival formalities.' },
      ],
    },
    {
      id: 'fsp', h2: 'The Fachsprachprüfung (FSP): the medical language test',
      paragraphs: [
        'The Fachsprachprüfung, often abbreviated FSP, is a specialised language test for healthcare professionals. It checks that you can communicate effectively in a medical context. It is generally organised by the medical association or chamber of the state concerned and usually includes an interview with a simulated patient, writing a medical report and a professional exchange with a doctor.',
        'Formats and registration conditions vary from state to state. A general language certificate is often required before you can register. We detail the preparation for this test on the exam preparation page, without ever promising a result.',
      ],
    },
    {
      id: 'kp', h2: 'The Kenntnisprüfung (KP): the knowledge test',
      paragraphs: [
        'Depending on the situation, the authority may direct the candidate to a Kenntnisprüfung, that is, a test of medical knowledge, which generally covers central clinical areas and questions of professional practice. It takes place in German, with specialist examiners.',
        'Not everyone has to take it, and its precise content depends on the state. If it is requested in your case, the preparation is twofold: revising clinical knowledge and training to express it clearly in German, orally and in writing.',
      ],
    },
    {
      id: 'support', h2: 'What Intellect does, and what it does not',
      bullets: [
        'We help you understand the steps and organise them over time.',
        'We prepare your level of German, general then medical.',
        'We help you build and check your file before sending.',
        'We support you with visa procedures and settling in.',
        'We do not replace the authorities, which decide on recognition and authorisation to practise.',
        'We guarantee neither equivalence, nor authorisation, nor a job.',
      ],
      after: ['Always check the official requirements of the state concerned: they are authoritative, and they may change.'],
    },
    {
      id: 'students', h2: 'And if you want to study medicine?',
      paragraphs: [
        'This page is for doctors who already hold a qualification. If you are a school-leaver or student wanting to enter medical school, the path is different: admission is highly selective and requires an excellent level of German. You will find the relevant information on the page about studying in Germany.',
      ],
    },
  ],
  faq: [
    { q: 'Does Intellect guarantee recognition of my diploma?', a: 'No. Recognition is decided by the competent authorities. We help you prepare the file and understand the steps.' },
    { q: 'What level of German is needed to practise?', a: 'In practice a general level around B2 is required before the medical language test. Exact requirements depend on the state and must be checked.' },
    { q: 'Must every doctor take the Kenntnisprüfung?', a: 'No. It depends on the authority’s decision and your situation. We help you understand what may apply in your case.' },
    { q: 'How long should I plan for?', a: 'Several months at least, often more, because language, documents and the authority’s examination take time. We set a realistic calendar with you.' },
  ],
};

const ar: PageContent = {
  nav: 'الطب في ألمانيا',
  title: 'الطب في ألمانيا: الاعتراف باللغة والمؤهل وامتحانا FSP وKP | إنتلكت',
  description: 'طبيب حاصل على شهادة ويفكر في العمل بألمانيا؟ مراحل الاعتراف، ومستوى الألمانية، وامتحاني Fachsprachprüfung (FSP) وKenntnisprüfung (KP)، ومرافقة إنتلكت.',
  h1: 'الطب في ألمانيا: بناء مشروعك المهني',
  lead: 'ممارسة الطب في ألمانيا مشروع يستغرق عدة أشهر وأحيانًا أكثر. ويتطلب تحضيرًا جيدًا للغة وملفًا دقيقًا ومعلومات موثوقة في كل مرحلة.',
  related: ['exam-preparation', 'german-c1', 'visa-procedures', 'student-support'],
  sections: [
    {
      id: 'why', h2: 'لماذا يفكر الأطباء في ألمانيا؟',
      paragraphs: [
        'يهتم أطباء كثيرون تكوّنوا خارج ألمانيا بهذا البلد: نظام صحي منظم، ومستشفيات وعيادات توظّف، وآفاق للتكوين المستمر، وإمكانية التخصص. ولكل مسار طابعه الشخصي، وتتراوح الدوافع بين البحث عن إطار عمل مختلف والرغبة في توسيع الكفاءات.',
        'نفضّل أن نكون واضحين من البداية: العمل في ألمانيا ليس إجراءً سريعًا. فالقواعد دقيقة، والسلطات متطلبة، والجدول الزمني يتوقف على عناصر كثيرة، بعضها ليس بيدك. ودورنا هو مساعدتك على فهم الطريق والتحضير وتجنب أخطاء التنظيم.',
      ],
    },
    {
      id: 'language', h2: 'اللغة: شرط كل ما بعدها',
      paragraphs: [
        'في ألمانيا تتم الممارسة الطبية بالألمانية. فعليك أن تفهم المريض، وتكتب ملفًا طبيًا، وتعرض حالة على زملائك، وتتحاور مع الفرق. ولطلب ترخيص الممارسة يُشترط مستوى عام في الألمانية، يقارب عمليًا B2، ثم اختبار لغوي متخصص في المجال الطبي.',
        'لهذا تشكل دوراتنا في الألمانية أساس المشروع. فنتبع مسارًا متدرجًا من A1 إلى C1، ثم ندمج المفردات الطبية والمواقف المهنية: أخذ السوابق المرضية، ووصف الأعراض، والتواصل مع المريض، والتبادل بين الأطباء. وتجد تفاصيل دوراتنا في الصفحات المخصصة لمستويات الألمانية.',
      ],
    },
    {
      id: 'recognition', h2: 'الاعتراف بمؤهلك',
      paragraphs: [
        'لممارسة الطب يلزم الحصول على ترخيص رسمي. وقد يكون ترخيصًا كاملًا للممارسة يسمى Approbation، أو ترخيصًا مؤقتًا ومحدودًا يسمى Berufserlaubnis. ويدرس الطلب من السلطة المختصة في الولاية (Land) التي ترغب في العمل بها: فقد تختلف الإجراءات والشروط من ولاية إلى أخرى.',
        'تقارن السلطة تكوينك بالتكوين الطبي الألماني. فإذا خلصت إلى وجود تكافؤ كان ما بعده أيسر. وإذا لاحظت فروقًا مهمة، أو كان وضعك يقتضي ذلك، فقد يُطلب اختبار معارف. والقرار بيد السلطات، ولا نستطيع التنبؤ به ولا ضمانه.',
      ],
    },
    {
      id: 'steps', h2: 'المراحل الكبرى للمشروع',
      steps: [
        { title: 'تقييم الوضع', text: 'نحلل شهادتك وتخصصك وخبرتك ومستواك في الألمانية والولاية المستهدفة، لتحديد ترتيب واقعي لإجراءاتك.' },
        { title: 'تحضير اللغة', text: 'مسار في الألمانية العامة حتى المستوى المطلوب، مع تحضير تدريجي للألمانية الطبية.' },
        { title: 'إعداد الملف', text: 'الشهادات وكشوف النقاط والإفادات والسيرة الذاتية ووثائق الهوية والترجمات المحلفة والنسخ المصدّقة، وفق قائمة السلطة المختصة.' },
        { title: 'إيداع طلب الاعتراف', text: 'يُرسَل الطلب إلى سلطة الولاية المختارة. ونساعدك على التحقق من اكتمال الملف قبل الإرسال.' },
        { title: 'اجتياز الاختبارات المطلوبة', text: 'بحسب وضعك: اختبار لغة طبية، أو اختبار معارف، أو إجراءات أخرى تقررها السلطة.' },
        { title: 'الاستقرار والعمل', text: 'البحث عن منصب، وتأشيرة أو تصريح إقامة مناسب، والسكن، والتأمين، وإجراءات الوصول.' },
      ],
    },
    {
      id: 'fsp', h2: 'امتحان Fachsprachprüfung (FSP): اختبار اللغة الطبية',
      paragraphs: [
        'Fachsprachprüfung، ويختصر غالبًا إلى FSP، اختبار لغوي متخصص موجه إلى مهنيي الصحة. وهو يتحقق من قدرتك على التواصل بفعالية في سياق طبي. وتنظمه عادة نقابة الأطباء أو غرفتهم في الولاية المعنية، ويتضمن في الغالب مقابلة مع مريض محاكى، وكتابة تقرير طبي، وتبادلًا مهنيًا مع طبيب.',
        'تختلف الصيغ وشروط التسجيل من ولاية إلى أخرى. وغالبًا ما تُطلب شهادة لغة عامة قبل أن تتمكن من التسجيل. ونفصّل التحضير لهذا الاختبار في صفحة التحضير للامتحانات، دون أن نعد أبدًا بنتيجة.',
      ],
    },
    {
      id: 'kp', h2: 'امتحان Kenntnisprüfung (KP): اختبار المعارف',
      paragraphs: [
        'بحسب الحالة، قد توجّه السلطة المرشح إلى Kenntnisprüfung، أي اختبار للمعارف الطبية، يتناول عمومًا مجالات سريرية أساسية ومسائل الممارسة المهنية. ويجري بالألمانية مع ممتحنين متخصصين.',
        'ليس على الجميع اجتيازه، ويتوقف محتواه الدقيق على الولاية. وإذا طُلب في حالتك فإن التحضير مزدوج: مراجعة المعارف السريرية، والتدرب على التعبير عنها بوضوح بالألمانية، شفهيًا وكتابيًا.',
      ],
    },
    {
      id: 'support', h2: 'ما تفعله إنتلكت وما لا تفعله',
      bullets: [
        'نساعدك على فهم المراحل وتنظيمها في الزمن.',
        'نحضّر مستواك في الألمانية، العامة ثم الطبية.',
        'نساعدك على إعداد ملفك ومراجعته قبل الإرسال.',
        'نرافقك في إجراءات التأشيرة والاستقرار.',
        'لا نحل محل السلطات التي تقرر الاعتراف وترخيص الممارسة.',
        'لا نضمن لا التكافؤ ولا الترخيص ولا وظيفة.',
      ],
      after: ['تحقق دائمًا من الشروط الرسمية للولاية المعنية: فهي المرجع، وقد تتغير.'],
    },
    {
      id: 'students', h2: 'وإذا كنت تريد دراسة الطب؟',
      paragraphs: [
        'تُوجَّه هذه الصفحة إلى الأطباء الحاصلين على مؤهلهم. أما إذا كنت حاملًا للبكالوريا أو طالبًا وتريد دخول كلية الطب فالطريق مختلف: فالقبول انتقائي جدًا ويتطلب مستوى ممتازًا في الألمانية. وتجد المعلومات الخاصة بذلك في صفحة الدراسة في ألمانيا.',
      ],
    },
  ],
  faq: [
    { q: 'هل تضمن إنتلكت الاعتراف بشهادتي؟', a: 'لا. الاعتراف تقرره السلطات المختصة. ونساعدك على إعداد الملف وفهم المراحل.' },
    { q: 'ما مستوى الألمانية المطلوب للممارسة؟', a: 'عمليًا يُطلب مستوى عام يقارب B2 قبل اختبار اللغة الطبية. وتتوقف الشروط الدقيقة على الولاية ويجب التحقق منها.' },
    { q: 'هل يجب على كل طبيب اجتياز Kenntnisprüfung؟', a: 'لا. يتوقف ذلك على قرار السلطة ووضعك. ونساعدك على فهم ما قد ينطبق على حالتك.' },
    { q: 'كم من الوقت يجب أن أخصص؟', a: 'عدة أشهر على الأقل، وغالبًا أكثر، لأن اللغة والوثائق ودراسة السلطة للملف تستغرق وقتًا. ونضع معك جدولًا واقعيًا.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
