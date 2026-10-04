import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Accompagnement complet',
  title: 'Accompagnement étudiant complet : dossier, visa, logement, arrivée | Intellect',
  description: 'Un seul interlocuteur de la première question à l’installation : conseil personnalisé, documents, visa, logement, suivi avant et après l’arrivée en Allemagne ou en Russie.',
  h1: 'Accompagnement complet : un seul parcours, du premier conseil à l’installation',
  lead: 'Partir étudier à l’étranger, c’est une série de démarches qui se suivent et se conditionnent. Nous les coordonnons pour vous, afin que rien ne soit oublié.',
  related: ['study-germany', 'study-russia', 'student-visa-germany', 'student-life'],
  sections: [
    {
      id: 'principe', h2: 'Pourquoi un accompagnement global',
      paragraphs: [
        'Un projet d’études à l’étranger ne se résume pas à une inscription. Il faut choisir une filière, atteindre un niveau de langue, réunir des documents légalisés et traduits, demander un visa, trouver un logement, organiser le voyage et s’installer. Chaque étape dépend de la précédente, et un oubli au début peut retarder tout le reste.',
        'Notre accompagnement complet vous met en relation avec un interlocuteur qui connaît votre dossier de bout en bout. Vous n’avez pas à expliquer votre situation à chaque nouvelle étape, et nous gardons une vue d’ensemble du calendrier.',
      ],
    },
    {
      id: 'etapes', h2: 'Les étapes de l’accompagnement',
      steps: [
        { title: 'Conseil personnalisé', text: 'Nous étudions votre diplôme, votre niveau de langue, votre budget, votre pays de destination et votre calendrier. Vous repartez avec un plan d’action daté.' },
        { title: 'Préparation académique et linguistique', text: 'Parcours d’allemand ou orientation pour la Russie, choix de la filière, préparation des examens ou des tests d’admission.' },
        { title: 'Documents', text: 'Liste des pièces nécessaires, copies certifiées, traductions, légalisations et formulaires, avec un contrôle avant chaque envoi.' },
        { title: 'Visa et assurance', text: 'Préparation du dossier de visa, prise de rendez-vous, justificatifs de ressources et assurance maladie.' },
        { title: 'Logement et voyage', text: 'Recherche de logement adapté à votre budget, conseils pour éviter les arnaques et organisation du voyage.' },
        { title: 'Arrivée et suivi', text: 'Accueil, premières démarches administratives, intégration et suivi pendant les premiers mois.' },
      ],
    },
    {
      id: 'avant-apres', h2: 'Un suivi avant et après l’arrivée',
      paragraphs: [
        'Beaucoup d’agences s’arrêtent à l’inscription. Or les premières semaines sur place sont celles où les questions sont les plus nombreuses : enregistrement auprès des autorités, ouverture d’un compte bancaire, assurance, transports, rythme des cours, premières relations. Nous restons disponibles pendant cette période, pour que l’adaptation se fasse sans stress inutile.',
        'Ce suivi s’adresse aussi aux familles. Nous expliquons à vos proches où en est le dossier, quelles sont les prochaines échéances et ce qui reste à payer, dans la langue qu’ils maîtrisent.',
      ],
    },
    {
      id: 'documents', h2: 'Aide au visa et aux documents',
      paragraphs: [
        'Les dossiers de visa sont refusés ou retardés le plus souvent pour des raisons simples : document manquant, traduction non conforme, justificatif de ressources insuffisant, incohérence entre deux pièces. Nous contrôlons votre dossier avec les yeux d’un agent qui l’instruit, pour corriger ces points avant le dépôt.',
        'Nous ne remplaçons pas les autorités et nous ne pouvons pas garantir un visa : la décision leur appartient. Notre rôle est de présenter un dossier complet, clair et cohérent.',
      ],
    },
    {
      id: 'integration', h2: 'Intégration et vie étudiante',
      paragraphs: [
        'S’installer dans un nouveau pays, c’est aussi se faire des repères. Nous vous orientons vers les associations étudiantes, les programmes de parrainage, les tandems linguistiques et les services de l’université. Ces ressources aident à progresser en langue et à se sentir moins isolé dès les premiers mois.',
      ],
    },
    {
      id: 'public', h2: 'À qui s’adresse cet accompagnement',
      paragraphs: [
        'Il s’adresse aux élèves qui préparent leur dernière année et veulent anticiper, aux bacheliers et aux diplômés qui choisissent une destination, et aux étudiants qui souhaitent changer de pays ou de filière. Il s’adresse aussi aux parents, qui veulent comprendre chaque étape et savoir où va l’argent investi. Que vous ayez déjà une idée précise ou seulement l’envie de partir, le premier échange sert à poser votre situation à plat.',
      ],
    },
    {
      id: 'budget', h2: 'Un budget clair dès le départ',
      paragraphs: [
        'Avant tout engagement, nous établissons avec vous une estimation des principaux postes : cours de langue, frais d’examen, traductions et légalisations, frais de candidature, visa, assurance, billet, logement et dépôt de garantie, ainsi que les frais de scolarité éventuels. Cette vision d’ensemble évite les mauvaises surprises et permet de décider s’il vaut mieux commencer par une année de préparation. Nous vous indiquons ce qui relève de nos services et ce qui est payé directement aux universités, aux centres d’examen ou aux administrations.',
      ],
    },
    {
      id: 'limites', h2: 'Ce que nous ne promettons pas',
      bullets: [
        'Une admission garantie : elle dépend des universités.',
        'Un visa garanti : il dépend des autorités consulaires.',
        'Des résultats d’examen : ils dépendent de votre travail, que nous encadrons.',
      ],
      after: ['Nous préférons une relation honnête, qui vous donne les moyens de décider, à une promesse qui ne dépend pas de nous.'],
    },
  ],
  faq: [
    { q: 'L’accompagnement est-il utile si j’ai déjà choisi mon université ?', a: 'Oui. Nous pouvons intervenir sur une seule partie du parcours : documents, visa, logement ou installation.' },
    { q: 'Accompagnez-vous les mineurs ?', a: 'Nous échangeons avec les parents ou tuteurs légaux, et nous adaptons le suivi à la situation. Contactez-nous avec les détails de votre projet.' },
    { q: 'Combien de temps à l’avance faut-il commencer ?', a: 'Le plus tôt possible. Entre la langue, les documents et le visa, plusieurs mois sont souvent nécessaires. Nous établissons un calendrier réaliste dès le premier échange.' },
  ],
};

const en: PageContent = {
  nav: 'Full support',
  title: 'Full student support: file, visa, housing, arrival | Intellect',
  description: 'One contact from your first question to settling in: personal advice, documents, visa, housing, and follow-up before and after arrival in Germany or Russia.',
  h1: 'Full support: one path, from first advice to settling in',
  lead: 'Going abroad to study is a series of steps that follow and depend on each other. We coordinate them for you so that nothing is forgotten.',
  related: ['study-germany', 'study-russia', 'student-visa-germany', 'student-life'],
  sections: [
    {
      id: 'principle', h2: 'Why full support',
      paragraphs: [
        'A study project abroad is not just an enrolment. You must choose a field, reach a language level, gather legalised and translated documents, apply for a visa, find housing, organise travel and settle in. Each step depends on the previous one, and an oversight at the start can delay everything else.',
        'Our full support puts you in touch with a contact who knows your file from end to end. You do not have to explain your situation at every new step, and we keep an overview of the calendar.',
      ],
    },
    {
      id: 'steps', h2: 'The stages of support',
      steps: [
        { title: 'Personal advice', text: 'We study your diploma, language level, budget, destination country and timeline. You leave with a dated action plan.' },
        { title: 'Academic and language preparation', text: 'A German path or guidance for Russia, choice of field, preparation for exams or admission tests.' },
        { title: 'Documents', text: 'List of required items, certified copies, translations, legalisations and forms, with a check before every submission.' },
        { title: 'Visa and insurance', text: 'Preparing the visa file, booking appointments, proof of funds and health insurance.' },
        { title: 'Housing and travel', text: 'Finding housing that fits your budget, advice to avoid scams and organising the journey.' },
        { title: 'Arrival and follow-up', text: 'Welcome, first administrative steps, integration and follow-up during the first months.' },
      ],
    },
    {
      id: 'before-after', h2: 'Follow-up before and after arrival',
      paragraphs: [
        'Many agencies stop at enrolment. Yet the first weeks on site are when questions are most numerous: registering with the authorities, opening a bank account, insurance, transport, the rhythm of classes, first relationships. We stay available during this period so adaptation happens without needless stress.',
        'This follow-up is also for families. We explain to your relatives where the file stands, what the next deadlines are and what remains to be paid, in the language they are comfortable with.',
      ],
    },
    {
      id: 'documents', h2: 'Help with the visa and documents',
      paragraphs: [
        'Visa files are most often refused or delayed for simple reasons: a missing document, a non-compliant translation, insufficient proof of funds, an inconsistency between two items. We check your file through the eyes of the officer who will process it, to fix these points before submission.',
        'We do not replace the authorities and we cannot guarantee a visa: the decision is theirs. Our role is to present a complete, clear and consistent file.',
      ],
    },
    {
      id: 'integration', h2: 'Integration and student life',
      paragraphs: [
        'Settling in a new country also means finding your bearings. We point you to student associations, buddy programmes, language tandems and university services. These resources help you progress in the language and feel less isolated from the first months.',
      ],
    },
    {
      id: 'audience', h2: 'Who this support is for',
      paragraphs: [
        'It is for pupils preparing their final year who want to plan ahead, for school-leavers and graduates choosing a destination, and for students who wish to change country or field. It is also for parents, who want to understand each step and know where the money invested goes. Whether you already have a precise idea or just a wish to leave, the first conversation is there to lay your situation out flat.',
      ],
    },
    {
      id: 'budget', h2: 'A clear budget from the start',
      paragraphs: [
        'Before any commitment, we draw up with you an estimate of the main items: language courses, exam fees, translations and legalisations, application fees, visa, insurance, ticket, housing and deposit, as well as any tuition. This overall view avoids unpleasant surprises and helps you decide whether it is better to start with a preparation year. We tell you what falls under our services and what is paid directly to universities, exam centres or administrations.',
      ],
    },
    {
      id: 'limits', h2: 'What we do not promise',
      bullets: [
        'Guaranteed admission: it depends on universities.',
        'A guaranteed visa: it depends on consular authorities.',
        'Exam results: they depend on your work, which we guide.',
      ],
      after: ['We prefer an honest relationship that gives you the means to decide over a promise that does not depend on us.'],
    },
  ],
  faq: [
    { q: 'Is support useful if I have already chosen my university?', a: 'Yes. We can help with just one part of the path: documents, visa, housing or settling in.' },
    { q: 'Do you support minors?', a: 'We deal with parents or legal guardians and adapt the follow-up to the situation. Contact us with the details of your project.' },
    { q: 'How far in advance should I start?', a: 'As early as possible. Between language, documents and visa, several months are often needed. We set a realistic calendar at our first conversation.' },
  ],
};

const ar: PageContent = {
  nav: 'مرافقة شاملة',
  title: 'مرافقة شاملة للطلبة: الملف والتأشيرة والسكن والوصول | إنتلكت',
  description: 'محاور واحد من أول سؤال حتى الاستقرار: استشارة شخصية، ووثائق، وتأشيرة، وسكن، ومتابعة قبل الوصول وبعده في ألمانيا أو روسيا.',
  h1: 'مرافقة شاملة: مسار واحد من أول استشارة إلى الاستقرار',
  lead: 'السفر للدراسة في الخارج سلسلة من الخطوات يتبع بعضها بعضًا ويتوقف بعضها على بعض. ننسقها من أجلك حتى لا يُنسى شيء.',
  related: ['study-germany', 'study-russia', 'student-visa-germany', 'student-life'],
  sections: [
    {
      id: 'principle', h2: 'لماذا مرافقة شاملة؟',
      paragraphs: [
        'مشروع الدراسة في الخارج ليس مجرد تسجيل. فعليك اختيار تخصص، وبلوغ مستوى لغوي، وجمع وثائق مصدّقة ومترجمة، وطلب تأشيرة، والعثور على سكن، وتنظيم السفر، ثم الاستقرار. وكل خطوة تتوقف على سابقتها، وقد يؤخر سهو في البداية كل ما يليه.',
        'تضعك مرافقتنا الشاملة على اتصال بمحاور يعرف ملفك من البداية إلى النهاية. فلا تحتاج إلى شرح وضعك عند كل خطوة جديدة، ونحتفظ بنظرة شاملة على الجدول الزمني.',
      ],
    },
    {
      id: 'steps', h2: 'مراحل المرافقة',
      steps: [
        { title: 'استشارة شخصية', text: 'ندرس شهادتك ومستواك اللغوي وميزانيتك وبلد الوجهة وجدولك الزمني. وتخرج بخطة عمل مؤرخة.' },
        { title: 'التحضير الأكاديمي واللغوي', text: 'مسار في الألمانية أو توجيه نحو روسيا، واختيار التخصص، والتحضير للامتحانات أو لاختبارات القبول.' },
        { title: 'الوثائق', text: 'قائمة بالوثائق المطلوبة، ونسخ مصدّقة، وترجمات، وتصديقات، واستمارات، مع مراجعة قبل كل إرسال.' },
        { title: 'التأشيرة والتأمين', text: 'إعداد ملف التأشيرة وحجز المواعيد وإثبات الموارد والتأمين الصحي.' },
        { title: 'السكن والسفر', text: 'البحث عن سكن يناسب ميزانيتك، ونصائح لتجنب الاحتيال، وتنظيم الرحلة.' },
        { title: 'الوصول والمتابعة', text: 'الاستقبال وأولى الإجراءات الإدارية والاندماج والمتابعة خلال الأشهر الأولى.' },
      ],
    },
    {
      id: 'before-after', h2: 'متابعة قبل الوصول وبعده',
      paragraphs: [
        'تتوقف وكالات كثيرة عند التسجيل. غير أن الأسابيع الأولى في عين المكان هي التي تكثر فيها الأسئلة: التسجيل لدى السلطات، وفتح حساب بنكي، والتأمين، والمواصلات، وإيقاع الدروس، والعلاقات الأولى. ونبقى متاحين خلال هذه الفترة حتى يتم التأقلم دون توتر لا داعي له.',
        'وتشمل هذه المتابعة الأسر أيضًا. فنشرح لأقاربك أين وصل الملف، وما المواعيد المقبلة، وما بقي من مبالغ، بالصيغة واللغة التي يرتاحون إليها.',
      ],
    },
    {
      id: 'documents', h2: 'مساعدة في التأشيرة والوثائق',
      paragraphs: [
        'تُرفض ملفات التأشيرة أو تتأخر في الغالب لأسباب بسيطة: وثيقة ناقصة، أو ترجمة غير مطابقة، أو إثبات موارد غير كاف، أو تناقض بين وثيقتين. ونراجع ملفك بعيني الموظف الذي سيدرسه لتصحيح هذه النقاط قبل الإيداع.',
        'نحن لا نحل محل السلطات ولا نستطيع ضمان تأشيرة: فالقرار قرارها. ودورنا هو تقديم ملف كامل وواضح ومتسق.',
      ],
    },
    {
      id: 'integration', h2: 'الاندماج والحياة الطلابية',
      paragraphs: [
        'الاستقرار في بلد جديد يعني أيضًا إيجاد معالم تهتدي بها. ونوجهك نحو الجمعيات الطلابية وبرامج الإرشاد والتبادل اللغوي وخدمات الجامعة. تساعدك هذه الموارد على التقدم في اللغة وعلى الشعور بعزلة أقل منذ الأشهر الأولى.',
      ],
    },
    {
      id: 'audience', h2: 'لمن تُوجَّه هذه المرافقة؟',
      paragraphs: [
        'تُوجَّه إلى التلاميذ الذين يحضّرون سنتهم الأخيرة ويريدون التخطيط المسبق، وإلى حاملي البكالوريا والخريجين الذين يختارون وجهة، وإلى الطلبة الذين يرغبون في تغيير البلد أو التخصص. وتُوجَّه أيضًا إلى الآباء الذين يريدون فهم كل مرحلة ومعرفة وجهة الأموال المستثمرة. وسواء كانت لديك فكرة دقيقة أو مجرد رغبة في السفر، فإن اللقاء الأول يخصَّص لعرض وضعك بوضوح كامل من جميع جوانبه.',
        'ولا يشترط أن تكون قد اتخذت قرارك النهائي. فكثير من الأسر تأتي ومعها سؤال واحد فقط، ونبني معها الجواب خطوة بعد خطوة بحسب إمكاناتها وأهدافها.',
      ],
    },
    {
      id: 'budget', h2: 'ميزانية واضحة منذ البداية',
      paragraphs: [
        'قبل أي التزام نضع معك تقديرًا للبنود الرئيسية: دورات اللغة، ورسوم الامتحانات، والترجمات والتصديقات، ورسوم التقديم، والتأشيرة، والتأمين، وتذكرة السفر، والسكن وضمانه، إضافة إلى الرسوم الدراسية إن وجدت. وتجنّبك هذه النظرة الشاملة المفاجآت غير السارة وتساعدك على تقرير ما إذا كان من الأفضل أن تبدأ بسنة تحضيرية. ونبيّن لك ما يدخل في خدماتنا وما يُدفع مباشرة إلى الجامعات أو مراكز الامتحان أو الإدارات.',
      ],
    },
    {
      id: 'limits', h2: 'ما لا نعد به',
      bullets: [
        'قبولًا مضمونًا: فهو يتوقف على الجامعات.',
        'تأشيرة مضمونة: فهي تتوقف على السلطات القنصلية.',
        'نتائج امتحانات: فهي تتوقف على عملك الذي نؤطره.',
      ],
      after: ['نفضّل علاقة صادقة تمنحك وسائل القرار على وعد لا يتوقف علينا. وبهذه الطريقة تبقى ثقتك بنا قائمة على ما نقدمه فعلًا من عمل ومتابعة.'],
    },
  ],
  faq: [
    { q: 'هل المرافقة مفيدة إذا كنت قد اخترت جامعتي؟', a: 'نعم. يمكننا التدخل في جزء واحد من المسار فقط: الوثائق أو التأشيرة أو السكن أو الاستقرار.' },
    { q: 'هل ترافقون القاصرين؟', a: 'نتعامل مع الوالدين أو الأوصياء القانونيين ونكيّف المتابعة بحسب الحالة. تواصل معنا مع تفاصيل مشروعك.' },
    { q: 'قبل كم من الوقت يجب أن أبدأ؟', a: 'في أقرب وقت ممكن. فبين اللغة والوثائق والتأشيرة تلزم غالبًا عدة أشهر. ونضع جدولًا واقعيًا في أول لقاء.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
