import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Préparation aux examens',
  title: 'Préparation aux examens : Goethe, telc, TestDaF, FSP et KP | Intellect',
  description: 'Préparez vos examens d’allemand et vos étapes professionnelles avec Intellect : méthode, entraînement, simulations, Fachsprachprüfung (FSP) et Kenntnisprüfung (KP).',
  h1: 'Préparation aux examens et aux étapes professionnelles',
  lead: 'Un examen se prépare comme un projet : avec un objectif précis, une méthode, des entraînements et un calendrier. Nous vous aidons à arriver prêt, sans promesse que nous ne pourrions pas tenir.',
  related: ['medicine-germany', 'german-c1', 'german-b1', 'visa-procedures'],
  sections: [
    {
      id: 'pourquoi', h2: 'Pourquoi préparer un examen plutôt que seulement apprendre la langue',
      paragraphs: [
        'On peut parler assez bien allemand et échouer à un examen. Les épreuves ont un format, des consignes, un temps limité et des critères de notation. Les connaître change beaucoup de choses : on gère mieux son temps, on évite le hors-sujet, on structure ses réponses et on garde son calme.',
        'La préparation à l’examen n’est donc pas un substitut à l’apprentissage de la langue, mais son complément. Nous travaillons les deux en parallèle : une progression réelle, et une familiarité avec l’épreuve qui la certifie.',
      ],
    },
    {
      id: 'types', h2: 'Les types d’examens et d’étapes concernés',
      blocks: [
        { h3: 'Les certificats de langue générale', paragraphs: ['Les certificats du Goethe-Institut, de telc ou de l’ÖSD, du niveau A1 au niveau C1, servent à prouver votre niveau pour un visa, une candidature ou une formation.'] },
        { h3: 'Les examens d’admission universitaire', paragraphs: ['Le TestDaF et la DSH sont couramment utilisés pour attester d’un niveau d’allemand suffisant pour étudier. Chaque université précise ce qu’elle accepte.'] },
        { h3: 'La Fachsprachprüfung (FSP)', paragraphs: ['Pour les professionnels de santé, notamment les médecins, il s’agit d’une épreuve de langue spécialisée dans le domaine médical. Elle est détaillée plus bas.'] },
        { h3: 'La Kenntnisprüfung (KP)', paragraphs: ['Lorsqu’elle est demandée à un médecin dans le cadre de la reconnaissance de sa qualification, il s’agit d’une épreuve de connaissances médicales. Elle est également détaillée plus bas.'] },
      ],
    },
    {
      id: 'methode', h2: 'Notre méthode de préparation',
      steps: [
        { title: 'Diagnostic', text: 'Une première épreuve blanche, ou des exercices ciblés, pour mesurer votre niveau réel et repérer vos points faibles.' },
        { title: 'Plan de travail', text: 'Un calendrier réaliste qui part de la date d’examen visée et répartit le travail par compétence.' },
        { title: 'Entraînement ciblé', text: 'Exercices sur les compétences fragiles : compréhension orale, rédaction, expression orale, vocabulaire spécialisé.' },
        { title: 'Simulations', text: 'Épreuves complètes chronométrées, dans les conditions les plus proches de l’examen, suivies d’une correction détaillée.' },
        { title: 'Ajustement', text: 'Nous comparons vos résultats d’une simulation à l’autre et nous adaptons la suite du travail.' },
      ],
    },
    {
      id: 'fsp', h2: 'Se préparer à la Fachsprachprüfung (FSP)',
      paragraphs: [
        'La FSP évalue la capacité à communiquer dans un contexte médical. Elle comprend généralement trois types de tâches : une conversation avec un patient simulé, la rédaction d’un compte rendu ou d’une lettre médicale, et un échange professionnel avec un médecin. Les formats exacts varient d’un Land à l’autre.',
        'Notre préparation travaille chacune de ces tâches : poser les bonnes questions à un patient et reformuler ses réponses, structurer un compte rendu avec le vocabulaire approprié, présenter un cas de façon claire et concise à un confrère. Nous insistons sur un registre à la fois précis et empathique, car la communication avec le patient fait partie de l’évaluation.',
      ],
    },
    {
      id: 'kp', h2: 'Se préparer à la Kenntnisprüfung (KP)',
      paragraphs: [
        'Si une Kenntnisprüfung est demandée dans votre situation, la difficulté est double : les connaissances cliniques et leur expression en allemand. Nous ne remplaçons pas la préparation médicale elle-même, qui relève de votre formation et de vos révisions. Notre apport est linguistique et méthodologique : s’exprimer clairement sous pression, structurer une présentation de cas, comprendre rapidement les questions des examinateurs et formuler des réponses précises.',
        'Nous vous aidons aussi à organiser votre révision dans le temps, car cette épreuve demande généralement plusieurs mois de travail régulier.',
      ],
    },
    {
      id: 'difference', h2: 'Préparation et examen officiel : une distinction importante',
      paragraphs: [
        'Intellect prépare. Nous n’organisons pas les examens officiels, nous ne les notons pas et nous n’avons aucun pouvoir sur leurs résultats. Les épreuves sont conçues et évaluées par les organismes compétents, les universités ou les autorités du Land. Nous ne garantissons donc jamais la réussite, ni un score particulier. Ce que nous garantissons, c’est un travail sérieux et un accompagnement honnête.',
      ],
    },
    {
      id: 'conseils', h2: 'Conseils pour arriver prêt',
      bullets: [
        'Fixez la date de l’examen tôt : les places sont limitées et les délais d’inscription varient.',
        'Pratiquez l’oral régulièrement, même seul, en vous enregistrant.',
        'Faites des simulations chronométrées plutôt que de lire passivement.',
        'Constituez un carnet de vocabulaire thématique, utile aussi pour la rédaction.',
        'Dormez, mangez et bougez normalement la semaine précédente : la fatigue coûte des points.',
        'Vérifiez les consignes officielles et les documents à apporter le jour de l’épreuve.',
      ],
    },
    {
      id: 'semaine-type', h2: 'Exemple d’une semaine de préparation',
      bullets: [
        'Deux séances d’expression orale, dont une simulation d’entretien.',
        'Une séance de rédaction avec correction détaillée.',
        'Deux séances de compréhension orale et écrite, chronométrées.',
        'Une séance de vocabulaire thématique et de grammaire ciblée.',
        'Un temps de bilan pour mesurer les progrès et ajuster le plan.',
      ],
      after: ['Ce rythme est indicatif : il s’adapte à votre emploi du temps et à la date de l’examen.'],
    },
  ],
  faq: [
    { q: 'Garantissez-vous la réussite à l’examen ?', a: 'Non. Nous préparons, mais les examens sont organisés et notés par des organismes indépendants. Le résultat dépend de votre travail.' },
    { q: 'Quand faut-il commencer la préparation ?', a: 'Dès que le niveau de langue de base est acquis, idéalement plusieurs mois avant la date d’examen. Nous établissons un calendrier avec vous.' },
    { q: 'Préparez-vous la partie médicale de la Kenntnisprüfung ?', a: 'Notre apport est linguistique et méthodologique. La révision clinique reste votre responsabilité, et nous vous aidons à l’organiser et à l’exprimer en allemand.' },
    { q: 'Puis-je passer l’examen sans suivre vos cours d’allemand ?', a: 'Oui, la préparation peut être suivie séparément si votre niveau le permet. Un test de positionnement confirme ce qui est adapté.' },
  ],
};

const en: PageContent = {
  nav: 'Exam preparation',
  title: 'Exam preparation: Goethe, telc, TestDaF, FSP and KP | Intellect',
  description: 'Prepare your German exams and professional steps with Intellect: method, training, simulations, Fachsprachprüfung (FSP) and Kenntnisprüfung (KP).',
  h1: 'Preparation for exams and professional steps',
  lead: 'An exam is prepared like a project: with a precise goal, a method, training and a calendar. We help you arrive ready, without promises we could not keep.',
  related: ['medicine-germany', 'german-c1', 'german-b1', 'visa-procedures'],
  sections: [
    {
      id: 'why', h2: 'Why prepare for an exam rather than just learn the language',
      paragraphs: [
        'You can speak German quite well and still fail an exam. Tests have a format, instructions, limited time and marking criteria. Knowing them changes a lot: you manage your time better, avoid going off topic, structure your answers and stay calm.',
        'Exam preparation is therefore not a substitute for learning the language but its complement. We work on both in parallel: real progress, and familiarity with the test that certifies it.',
      ],
    },
    {
      id: 'types', h2: 'The types of exams and steps concerned',
      blocks: [
        { h3: 'General language certificates', paragraphs: ['Certificates from the Goethe-Institut, telc or ÖSD, from level A1 to C1, serve to prove your level for a visa, an application or a programme.'] },
        { h3: 'University admission exams', paragraphs: ['TestDaF and DSH are commonly used to attest to a German level sufficient for study. Each university states what it accepts.'] },
        { h3: 'The Fachsprachprüfung (FSP)', paragraphs: ['For healthcare professionals, notably doctors, it is a specialised language test in the medical field. It is detailed below.'] },
        { h3: 'The Kenntnisprüfung (KP)', paragraphs: ['When it is requested from a doctor as part of the recognition of their qualification, it is a test of medical knowledge. It is also detailed below.'] },
      ],
    },
    {
      id: 'method', h2: 'Our preparation method',
      steps: [
        { title: 'Diagnosis', text: 'A first mock test, or targeted exercises, to measure your real level and spot weak points.' },
        { title: 'Work plan', text: 'A realistic calendar that starts from the target exam date and spreads the work by skill.' },
        { title: 'Targeted training', text: 'Exercises on fragile skills: listening, writing, speaking, specialised vocabulary.' },
        { title: 'Simulations', text: 'Complete timed tests, in conditions as close as possible to the exam, followed by detailed correction.' },
        { title: 'Adjustment', text: 'We compare your results from one simulation to the next and adapt the rest of the work.' },
      ],
    },
    {
      id: 'fsp', h2: 'Preparing for the Fachsprachprüfung (FSP)',
      paragraphs: [
        'The FSP assesses the ability to communicate in a medical context. It generally comprises three types of tasks: a conversation with a simulated patient, writing a report or medical letter, and a professional exchange with a doctor. Exact formats vary from state to state.',
        'Our preparation works on each of these tasks: asking a patient the right questions and rephrasing their answers, structuring a report with appropriate vocabulary, presenting a case clearly and concisely to a colleague. We stress a register that is both precise and empathetic, because communication with the patient is part of the assessment.',
      ],
    },
    {
      id: 'kp', h2: 'Preparing for the Kenntnisprüfung (KP)',
      paragraphs: [
        'If a Kenntnisprüfung is requested in your situation, the difficulty is twofold: clinical knowledge and its expression in German. We do not replace the medical preparation itself, which is a matter of your training and revision. Our contribution is linguistic and methodological: expressing yourself clearly under pressure, structuring a case presentation, quickly understanding the examiners’ questions and giving precise answers.',
        'We also help you organise your revision over time, because this test generally requires several months of regular work.',
      ],
    },
    {
      id: 'difference', h2: 'Preparation and the official exam: an important distinction',
      paragraphs: [
        'Intellect prepares. We do not organise official exams, we do not mark them and we have no power over their results. Tests are designed and assessed by the competent bodies, universities or state authorities. We therefore never guarantee success, nor a particular score. What we do guarantee is serious work and honest support.',
      ],
    },
    {
      id: 'tips', h2: 'Tips for arriving ready',
      bullets: [
        'Fix the exam date early: places are limited and registration deadlines vary.',
        'Practise speaking regularly, even alone, by recording yourself.',
        'Do timed simulations rather than reading passively.',
        'Keep a thematic vocabulary notebook, useful for writing too.',
        'Sleep, eat and move normally the week before: tiredness costs points.',
        'Check the official instructions and the documents to bring on the day.',
      ],
    },
    {
      id: 'typical-week', h2: 'An example week of preparation',
      bullets: [
        'Two speaking sessions, including an interview simulation.',
        'One writing session with detailed correction.',
        'Two timed listening and reading sessions.',
        'One session of thematic vocabulary and targeted grammar.',
        'A review slot to measure progress and adjust the plan.',
      ],
      after: ['This rhythm is indicative: it adapts to your schedule and to the exam date.'],
    },
  ],
  faq: [
    { q: 'Do you guarantee that I will pass the exam?', a: 'No. We prepare you, but exams are organised and marked by independent bodies. The result depends on your work.' },
    { q: 'When should I start preparing?', a: 'As soon as the basic language level is acquired, ideally several months before the exam date. We set a calendar with you.' },
    { q: 'Do you prepare the medical part of the Kenntnisprüfung?', a: 'Our contribution is linguistic and methodological. Clinical revision remains your responsibility, and we help you organise it and express it in German.' },
    { q: 'Can I take the exam without following your German courses?', a: 'Yes, the preparation can be followed separately if your level allows. A placement test confirms what is suitable.' },
  ],
};

const ar: PageContent = {
  nav: 'التحضير للامتحانات',
  title: 'التحضير للامتحانات: Goethe وtelc وTestDaF وFSP وKP | إنتلكت',
  description: 'حضّر امتحانات الألمانية ومراحلك المهنية مع إنتلكت: المنهج والتدريب والمحاكاة وامتحاني Fachsprachprüfung (FSP) وKenntnisprüfung (KP).',
  h1: 'التحضير للامتحانات والمراحل المهنية',
  lead: 'يُحضَّر الامتحان كما يُحضَّر مشروع: بهدف دقيق ومنهج وتدريبات وجدول زمني. نساعدك على الوصول جاهزًا، دون وعود لا نستطيع الوفاء بها.',
  related: ['medicine-germany', 'german-c1', 'german-b1', 'visa-procedures'],
  sections: [
    {
      id: 'why', h2: 'لماذا نحضّر للامتحان بدل الاكتفاء بتعلّم اللغة؟',
      paragraphs: [
        'يمكنك أن تتكلم الألمانية جيدًا وتفشل في امتحان. فللاختبارات صيغة وتعليمات ووقت محدود ومعايير تنقيط. ومعرفتها تغيّر الكثير: فتدير وقتك بشكل أفضل، وتتجنب الخروج عن الموضوع، وتنظم إجاباتك، وتحافظ على هدوئك.',
        'فالتحضير للامتحان ليس بديلًا عن تعلم اللغة بل مكمل له. ونعمل على الاثنين بالتوازي: تقدم حقيقي، وألفة بالاختبار الذي يشهد به.',
      ],
    },
    {
      id: 'types', h2: 'أنواع الامتحانات والمراحل المعنية',
      blocks: [
        { h3: 'شهادات اللغة العامة', paragraphs: ['تفيد شهادات معهد غوته وtelc وÖSD، من المستوى A1 إلى C1، في إثبات مستواك للحصول على تأشيرة أو للتقدم بطلب أو لتكوين.'] },
        { h3: 'امتحانات القبول الجامعي', paragraphs: ['يُستعمل TestDaF وDSH عادة لإثبات مستوى ألماني كاف للدراسة. وتحدد كل جامعة ما تقبله.'] },
        { h3: 'امتحان Fachsprachprüfung (FSP)', paragraphs: ['بالنسبة إلى مهنيي الصحة، خاصة الأطباء، هو اختبار لغوي متخصص في المجال الطبي. ويُفصَّل أدناه.'] },
        { h3: 'امتحان Kenntnisprüfung (KP)', paragraphs: ['حين يُطلب من طبيب في إطار الاعتراف بمؤهله فهو اختبار للمعارف الطبية. ويُفصَّل هو أيضًا أدناه.'] },
      ],
    },
    {
      id: 'method', h2: 'منهجنا في التحضير',
      steps: [
        { title: 'التشخيص', text: 'اختبار تجريبي أولي أو تمارين موجّهة لقياس مستواك الحقيقي ورصد نقاط الضعف.' },
        { title: 'خطة العمل', text: 'جدول واقعي ينطلق من تاريخ الامتحان المستهدف ويوزع العمل بحسب المهارة.' },
        { title: 'تدريب موجّه', text: 'تمارين على المهارات الهشة: الفهم الشفهي، والكتابة، والتحدث، والمفردات المتخصصة.' },
        { title: 'المحاكاة', text: 'اختبارات كاملة بزمن محدد، في ظروف أقرب ما تكون إلى الامتحان، يتبعها تصحيح مفصل.' },
        { title: 'التعديل', text: 'نقارن نتائجك من محاكاة إلى أخرى ونكيّف بقية العمل.' },
      ],
    },
    {
      id: 'fsp', h2: 'التحضير لامتحان Fachsprachprüfung (FSP)',
      paragraphs: [
        'يقيّم FSP القدرة على التواصل في سياق طبي. ويتضمن عمومًا ثلاثة أنواع من المهام: حوار مع مريض محاكى، وكتابة تقرير أو رسالة طبية، وتبادل مهني مع طبيب. وتختلف الصيغ الدقيقة من ولاية إلى أخرى.',
        'يعمل تحضيرنا على كل مهمة من هذه المهام: طرح الأسئلة الصحيحة على مريض وإعادة صياغة إجاباته، وتنظيم تقرير بالمفردات المناسبة، وعرض حالة بوضوح وإيجاز على زميل. ونؤكد على أسلوب دقيق ومتعاطف في آن واحد، لأن التواصل مع المريض جزء من التقييم.',
      ],
    },
    {
      id: 'kp', h2: 'التحضير لامتحان Kenntnisprüfung (KP)',
      paragraphs: [
        'إذا طُلب Kenntnisprüfung في وضعك فإن الصعوبة مزدوجة: المعارف السريرية وطريقة التعبير عنها بالألمانية. ونحن لا نحل محل التحضير الطبي نفسه، فهو من شأن تكوينك ومراجعاتك. أما إسهامنا فلغوي ومنهجي: التعبير بوضوح تحت الضغط، وتنظيم عرض حالة، وفهم أسئلة الممتحنين بسرعة، وتقديم إجابات دقيقة.',
        'ونساعدك كذلك على تنظيم مراجعتك في الزمن، لأن هذا الاختبار يتطلب عادة عدة أشهر من العمل المنتظم، ولأن توزيع الجهد على مدى أطول يعطي نتائج أفضل من المراجعة المكثفة في الأيام الأخيرة.',
      ],
    },
    {
      id: 'difference', h2: 'التحضير والامتحان الرسمي: فرق مهم',
      paragraphs: [
        'إنتلكت تحضّر. نحن لا ننظم الامتحانات الرسمية ولا نصححها وليست لنا أي سلطة على نتائجها. فالاختبارات تضعها وتقيّمها الجهات المختصة أو الجامعات أو سلطات الولاية. ولذلك لا نضمن أبدًا النجاح ولا درجة بعينها. وما نضمنه هو عمل جاد ومرافقة صادقة.',
      ],
    },
    {
      id: 'tips', h2: 'نصائح للوصول جاهزًا',
      bullets: [
        'حدّد تاريخ الامتحان مبكرًا: فالمقاعد محدودة وآجال التسجيل تختلف.',
        'مارس التحدث بانتظام، حتى وأنت وحدك، وسجّل صوتك.',
        'أجرِ محاكاة بزمن محدد بدل القراءة السلبية.',
        'احتفظ بدفتر مفردات موضوعي، يفيد في الكتابة أيضًا.',
        'نم وكل وتحرك بشكل طبيعي في الأسبوع السابق: فالإرهاق يكلف نقاطًا.',
        'تحقق من التعليمات الرسمية ومن الوثائق التي يجب إحضارها يوم الامتحان.',
      ],
    },
    {
      id: 'typical-week', h2: 'مثال على أسبوع تحضير',
      bullets: [
        'حصتان للتعبير الشفهي، إحداهما محاكاة لمقابلة.',
        'حصة للكتابة مع تصحيح مفصل.',
        'حصتان للفهم الشفهي والكتابي بزمن محدد.',
        'حصة للمفردات الموضوعية والقواعد الموجهة.',
        'وقت للتقييم لقياس التقدم وتعديل الخطة.',
      ],
      after: ['هذه الوتيرة إرشادية: فهي تتكيف مع جدولك الزمني ومع تاريخ الامتحان، وتزداد كثافة كلما اقترب الموعد.'],
    },
  ],
  faq: [
    { q: 'هل تضمنون النجاح في الامتحان؟', a: 'لا. نحن نحضّر، لكن الامتحانات تنظمها وتصححها جهات مستقلة. والنتيجة تتوقف على عملك.' },
    { q: 'متى يجب أن أبدأ التحضير؟', a: 'بمجرد اكتساب مستوى اللغة الأساسي، ويفضّل قبل تاريخ الامتحان بعدة أشهر. ونضع معك جدولًا.' },
    { q: 'هل تحضّرون الجزء الطبي من Kenntnisprüfung؟', a: 'إسهامنا لغوي ومنهجي. وتبقى المراجعة السريرية مسؤوليتك، ونساعدك على تنظيمها وعلى التعبير عنها بالألمانية.' },
    { q: 'هل أستطيع اجتياز الامتحان دون متابعة دوراتكم في الألمانية؟', a: 'نعم، يمكن متابعة التحضير بشكل منفصل إذا سمح مستواك. ويؤكد اختبار تحديد المستوى ما يناسبك.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
