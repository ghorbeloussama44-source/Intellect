import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Visa et démarches',
  title: 'Visa et démarches : préparer son dossier avec méthode | Intellect',
  description: 'Comprendre les démarches de visa et d’installation pour l’Allemagne ou la Russie : documents, calendrier, erreurs fréquentes et rôle d’Intellect dans la préparation du dossier.',
  h1: 'Visa et démarches : préparer son dossier avec méthode',
  lead: 'Nous vous aidons à préparer votre dossier et à comprendre les différentes étapes. La décision, elle, appartient toujours aux autorités.',
  related: ['student-support', 'study-germany', 'study-russia', 'medicine-germany'],
  sections: [
    {
      id: 'avertissement', h2: 'Ce qu’il faut savoir avant tout',
      paragraphs: [
        'Les règles d’entrée et de séjour changent, et elles dépendent de votre nationalité, de votre projet et du pays de destination. Cette page présente la logique générale et les pièces demandées le plus souvent, mais elle ne remplace pas les informations officielles. Avant toute démarche, vérifiez les exigences actuelles sur le site de l’ambassade ou du consulat compétent pour votre lieu de résidence.',
        'Notre rôle est d’accompagner la préparation : comprendre ce qui est demandé, réunir les documents, vérifier la cohérence du dossier et respecter le calendrier. Nous ne délivrons pas de visa, nous ne pouvons pas en garantir l’obtention et nous ne sommes pas une autorité administrative.',
      ],
    },
    {
      id: 'comprendre', h2: 'Comprendre les démarches selon votre projet',
      blocks: [
        { h3: 'Études en Allemagne', paragraphs: ['Après l’admission, un visa d’études est demandé avec la lettre d’admission. Un visa permettant de venir préparer sa candidature existe aussi, avec des conditions précises. À l’arrivée, plusieurs formalités suivent : enregistrement du lieu de résidence, inscription, assurance maladie, titre de séjour.'] },
        { h3: 'Études en Russie', paragraphs: ['L’établissement fait établir une invitation officielle après l’admission. Le visa d’études se demande ensuite auprès de la représentation consulaire, avec l’invitation et les justificatifs demandés, dont souvent des examens médicaux. À l’arrivée, l’étudiant est enregistré auprès des autorités migratoires.'] },
        { h3: 'Projet professionnel, notamment dans la santé', paragraphs: ['Pour travailler en Allemagne ou participer à une procédure de reconnaissance de qualification, des types de visas ou de titres de séjour spécifiques peuvent exister. L’ambassade précise ce qui s’applique à votre situation.'] },
      ],
    },
    {
      id: 'documents', h2: 'Les documents demandés le plus souvent',
      bullets: [
        'Passeport en cours de validité, avec une copie des pages utiles.',
        'Formulaire de demande complété et signé.',
        'Lettre d’admission ou d’invitation de l’établissement, ou document équivalent selon le projet.',
        'Diplômes et relevés de notes, traduits et certifiés si nécessaire.',
        'Preuve du niveau de langue demandé.',
        'Preuve de ressources financières suffisantes pour la durée du séjour.',
        'Preuve d’assurance maladie valable dans le pays de destination.',
        'Photographies d’identité conformes aux normes.',
        'Curriculum vitae et lettre expliquant le projet.',
      ],
      after: ['La liste exacte varie selon le pays, le consulat et le type de visa. Nous la vérifions avec vous avant de commencer à réunir les pièces.'],
    },
    {
      id: 'calendrier', h2: 'Organisation et calendrier',
      steps: [
        { title: 'Obtenir l’admission ou l’autorisation de départ', text: 'La lettre d’admission ou d’invitation est souvent la pièce centrale. Prévoyez le temps nécessaire à son obtention.' },
        { title: 'Réunir et traduire les documents', text: 'Les traductions et les copies certifiées prennent souvent plus de temps que prévu.' },
        { title: 'Prendre rendez-vous', text: 'Les créneaux consulaires peuvent être rares selon la saison. Réservez dès que votre calendrier est connu.' },
        { title: 'Déposer le dossier', text: 'Un entretien est parfois demandé. Soyez prêt à expliquer votre projet, votre choix et votre financement.' },
        { title: 'Attendre la décision', text: 'Le délai peut atteindre plusieurs semaines. Évitez de réserver un billet non modifiable avant d’avoir la réponse.' },
      ],
    },
    {
      id: 'erreurs', h2: 'Les erreurs fréquentes',
      bullets: [
        'Un document manquant ou périmé.',
        'Une traduction qui ne respecte pas le format exigé.',
        'Une preuve de ressources insuffisante ou ambiguë.',
        'Des informations contradictoires entre deux pièces.',
        'Un projet mal expliqué, qui ne montre pas le lien entre votre parcours et le pays choisi.',
        'Un dépôt trop tardif, sans marge en cas de pièce supplémentaire.',
      ],
      after: ['Nous contrôlons le dossier avec les yeux de l’agent qui l’examinera, pour corriger ces points avant le dépôt.'],
    },
    {
      id: 'difference', h2: 'Assistance et décision administrative : ne pas confondre',
      paragraphs: [
        'Les autorités consulaires et migratoires décident, de façon souveraine, d’accorder ou non un visa. Une agence peut aider à comprendre, à organiser et à présenter un dossier clair, mais elle ne peut pas influencer la décision. Méfiez-vous de toute personne qui garantit l’obtention d’un visa, propose des raccourcis payants ou demande de falsifier des documents : c’est illégal et cela peut vous fermer définitivement des portes.',
      ],
    },
    {
      id: 'arrivee', h2: 'Après l’arrivée',
      paragraphs: [
        'Le visa vous permet d’entrer. Sur place, plusieurs démarches suivent : enregistrer votre adresse, vous inscrire, confirmer votre assurance, ouvrir un compte et demander un titre de séjour si nécessaire. Les délais sont souvent courts. Nous vous les rappelons avant le départ et nous restons disponibles pour les premières semaines.',
      ],
    },
    {
      id: 'dossier-numerique', h2: 'Organiser son dossier numérique',
      bullets: [
        'Scannez chaque document en bonne résolution, dans un fichier distinct, avec un nom clair, par exemple « diplome-licence.pdf ».',
        'Conservez les originaux et plusieurs copies papier dans une pochette dédiée.',
        'Tenez une liste de contrôle avec la date d’obtention, la date de validité et l’état de chaque pièce.',
        'Notez toutes les dates limites dans un calendrier avec un rappel deux semaines avant.',
        'Gardez une trace de vos échanges avec les établissements et les autorités.',
      ],
      after: ['Un dossier ordonné fait gagner un temps précieux lorsqu’une pièce supplémentaire est demandée au dernier moment.'],
    },
  ],
  faq: [
    { q: 'Intellect garantit-il l’obtention du visa ?', a: 'Non. La décision appartient aux autorités. Nous vous aidons à préparer un dossier complet et à comprendre les étapes.' },
    { q: 'Quand faut-il commencer les démarches ?', a: 'Dès que l’admission ou l’invitation est obtenue, et même avant pour préparer les documents. Les délais de traduction et de rendez-vous sont souvent longs.' },
    { q: 'Que faire si le visa est refusé ?', a: 'Il faut comprendre le motif indiqué. Selon les cas, on peut corriger le dossier et déposer une nouvelle demande, ou engager un recours dans les délais. Nous vous aidons à analyser la situation.' },
    { q: 'Où trouver les informations officielles ?', a: 'Sur les sites de l’ambassade ou du consulat compétent et des ministères concernés. Ce sont ces sources qui font foi.' },
  ],
};

const en: PageContent = {
  nav: 'Visa and procedures',
  title: 'Visa and procedures: preparing your file with method | Intellect',
  description: 'Understand visa and settling-in procedures for Germany or Russia: documents, timeline, frequent mistakes and Intellect’s role in preparing your file.',
  h1: 'Visa and procedures: preparing your file with method',
  lead: 'We help you prepare your file and understand the different steps. The decision always belongs to the authorities.',
  related: ['student-support', 'study-germany', 'study-russia', 'medicine-germany'],
  sections: [
    {
      id: 'notice', h2: 'What to know first',
      paragraphs: [
        'Entry and residence rules change, and they depend on your nationality, your project and the destination country. This page presents the general logic and the documents most often requested, but it does not replace official information. Before any step, check current requirements on the website of the embassy or consulate responsible for your place of residence.',
        'Our role is to support the preparation: understanding what is asked, gathering documents, checking the consistency of the file and respecting the calendar. We do not issue visas, we cannot guarantee that one will be granted and we are not an administrative authority.',
      ],
    },
    {
      id: 'understand', h2: 'Understanding the procedures according to your project',
      blocks: [
        { h3: 'Studies in Germany', paragraphs: ['After admission, a study visa is requested with the admission letter. A visa allowing you to come and prepare an application also exists, with precise conditions. On arrival, several formalities follow: registering your place of residence, enrolment, health insurance, residence permit.'] },
        { h3: 'Studies in Russia', paragraphs: ['The institution has an official invitation issued after admission. The study visa is then requested from the consular office with the invitation and the requested supporting documents, often including medical tests. On arrival, the student is registered with the migration authorities.'] },
        { h3: 'Professional project, notably in healthcare', paragraphs: ['To work in Germany or take part in a procedure for recognition of a qualification, specific types of visas or residence permits may exist. The embassy specifies what applies to your situation.'] },
      ],
    },
    {
      id: 'documents', h2: 'The documents most often requested',
      bullets: [
        'Valid passport, with a copy of the relevant pages.',
        'Completed and signed application form.',
        'Admission or invitation letter from the institution, or an equivalent document depending on the project.',
        'Diplomas and transcripts, translated and certified if necessary.',
        'Proof of the required language level.',
        'Proof of sufficient financial resources for the length of stay.',
        'Proof of health insurance valid in the destination country.',
        'Passport photographs that meet the standards.',
        'CV and a letter explaining the project.',
      ],
      after: ['The exact list varies by country, consulate and type of visa. We check it with you before you start gathering documents.'],
    },
    {
      id: 'calendar', h2: 'Organisation and calendar',
      steps: [
        { title: 'Obtain admission or authorisation to leave', text: 'The admission or invitation letter is often the central document. Allow the time needed to obtain it.' },
        { title: 'Gather and translate documents', text: 'Translations and certified copies often take longer than expected.' },
        { title: 'Book an appointment', text: 'Consular slots can be scarce depending on the season. Book as soon as your calendar is known.' },
        { title: 'Submit the file', text: 'An interview is sometimes required. Be ready to explain your project, your choice and your funding.' },
        { title: 'Wait for the decision', text: 'It can take several weeks. Avoid booking a non-changeable ticket before you have the answer.' },
      ],
    },
    {
      id: 'mistakes', h2: 'Frequent mistakes',
      bullets: [
        'A missing or expired document.',
        'A translation that does not follow the required format.',
        'Insufficient or ambiguous proof of funds.',
        'Contradictory information between two documents.',
        'A poorly explained project that does not show the link between your background and the chosen country.',
        'Submitting too late, with no margin in case an extra document is requested.',
      ],
      after: ['We check the file through the eyes of the officer who will examine it, to fix these points before submission.'],
    },
    {
      id: 'difference', h2: 'Assistance and administrative decision: do not confuse them',
      paragraphs: [
        'Consular and migration authorities decide, sovereignly, whether or not to grant a visa. An agency can help to understand, organise and present a clear file, but it cannot influence the decision. Be wary of anyone who guarantees a visa, offers paid shortcuts or asks you to falsify documents: this is illegal and may close doors for good.',
      ],
    },
    {
      id: 'arrival', h2: 'After arrival',
      paragraphs: [
        'The visa lets you enter. On site, several steps follow: registering your address, enrolling, confirming your insurance, opening an account and applying for a residence permit if needed. Deadlines are often short. We remind you of them before departure and remain available for the first weeks.',
      ],
    },
    {
      id: 'digital-file', h2: 'Organising your digital file',
      bullets: [
        'Scan each document in good resolution, as a separate file with a clear name, for example “degree-bachelor.pdf”.',
        'Keep originals and several paper copies in a dedicated folder.',
        'Keep a checklist with the date obtained, the validity date and the status of each item.',
        'Note every deadline in a calendar with a reminder two weeks before.',
        'Keep a record of your exchanges with institutions and authorities.',
      ],
      after: ['An orderly file saves precious time when an extra document is requested at the last minute.'],
    },
  ],
  faq: [
    { q: 'Does Intellect guarantee that I will get the visa?', a: 'No. The decision belongs to the authorities. We help you prepare a complete file and understand the steps.' },
    { q: 'When should I start the procedures?', a: 'As soon as admission or the invitation is obtained, and even before to prepare the documents. Translation and appointment times are often long.' },
    { q: 'What if the visa is refused?', a: 'You need to understand the reason given. Depending on the case, the file can be corrected and a new application made, or an appeal lodged within the deadlines. We help you analyse the situation.' },
    { q: 'Where can I find official information?', a: 'On the websites of the competent embassy or consulate and the ministries concerned. These sources are authoritative.' },
  ],
};

const ar: PageContent = {
  nav: 'التأشيرة والإجراءات',
  title: 'التأشيرة والإجراءات: تحضير الملف بمنهجية | إنتلكت',
  description: 'افهم إجراءات التأشيرة والاستقرار في ألمانيا أو روسيا: الوثائق والجدول الزمني والأخطاء الشائعة ودور إنتلكت في تحضير ملفك.',
  h1: 'التأشيرة والإجراءات: تحضير الملف بمنهجية',
  lead: 'نساعدك على تحضير ملفك وفهم المراحل المختلفة. أما القرار فيعود دائمًا إلى السلطات.',
  related: ['student-support', 'study-germany', 'study-russia', 'medicine-germany'],
  sections: [
    {
      id: 'notice', h2: 'ما ينبغي معرفته أولًا',
      paragraphs: [
        'تتغير قواعد الدخول والإقامة، وتعتمد على جنسيتك ومشروعك وبلد الوجهة. تعرض هذه الصفحة المنطق العام والوثائق الأكثر طلبًا، لكنها لا تحل محل المعلومات الرسمية. وقبل أي إجراء تحقق من الشروط الحالية على موقع السفارة أو القنصلية المختصة بمكان إقامتك.',
        'دورنا هو مرافقة التحضير: فهم المطلوب، وجمع الوثائق، والتحقق من انسجام الملف، واحترام الجدول الزمني. نحن لا نمنح التأشيرات، ولا نستطيع ضمان الحصول على واحدة، ولسنا سلطة إدارية.',
      ],
    },
    {
      id: 'understand', h2: 'فهم الإجراءات بحسب مشروعك',
      blocks: [
        { h3: 'الدراسة في ألمانيا', paragraphs: ['بعد القبول تُطلب تأشيرة دراسة مع رسالة القبول. وتوجد كذلك تأشيرة تتيح القدوم لإعداد طلب التسجيل، بشروط دقيقة. وعند الوصول تتبع عدة إجراءات: تسجيل مكان الإقامة والالتحاق بالجامعة والتأمين الصحي وتصريح الإقامة.'] },
        { h3: 'الدراسة في روسيا', paragraphs: ['تستخرج المؤسسة دعوة رسمية بعد القبول. ثم تُطلب تأشيرة الدراسة من التمثيلية القنصلية مع الدعوة والوثائق المطلوبة، ومنها غالبًا فحوص طبية. وعند الوصول يُسجَّل الطالب لدى سلطات الهجرة.'] },
        { h3: 'مشروع مهني، خاصة في الصحة', paragraphs: ['للعمل في ألمانيا أو المشاركة في إجراء للاعتراف بمؤهل، قد توجد أنواع محددة من التأشيرات أو تصاريح الإقامة. وتوضح السفارة ما ينطبق على وضعك.'] },
      ],
    },
    {
      id: 'documents', h2: 'الوثائق الأكثر طلبًا',
      bullets: [
        'جواز سفر ساري المفعول مع نسخة من الصفحات المهمة.',
        'استمارة طلب مكتملة وموقعة.',
        'رسالة قبول أو دعوة من المؤسسة، أو وثيقة مماثلة بحسب المشروع.',
        'الشهادات وكشوف النقاط مترجمة ومصدّقة عند الاقتضاء.',
        'إثبات المستوى اللغوي المطلوب.',
        'إثبات موارد مالية كافية لمدة الإقامة.',
        'إثبات تأمين صحي ساري في بلد الوجهة.',
        'صور شخصية مطابقة للمعايير.',
        'سيرة ذاتية ورسالة تشرح المشروع.',
      ],
      after: ['تختلف القائمة الدقيقة بحسب البلد والقنصلية ونوع التأشيرة. نتحقق منها معك قبل أن تبدأ في جمع الوثائق.'],
    },
    {
      id: 'calendar', h2: 'التنظيم والجدول الزمني',
      steps: [
        { title: 'الحصول على القبول أو إذن السفر', text: 'رسالة القبول أو الدعوة هي غالبًا الوثيقة المحورية. اترك الوقت اللازم للحصول عليها.' },
        { title: 'جمع الوثائق وترجمتها', text: 'غالبًا ما تستغرق الترجمات والنسخ المصدّقة وقتًا أطول مما هو متوقع.' },
        { title: 'حجز موعد', text: 'قد تكون مواعيد القنصلية نادرة بحسب الموسم. احجز بمجرد معرفة جدولك الزمني.' },
        { title: 'إيداع الملف', text: 'يُطلب أحيانًا إجراء مقابلة. كن مستعدًا لشرح مشروعك واختيارك وتمويلك.' },
        { title: 'انتظار القرار', text: 'قد يستغرق عدة أسابيع. تجنب حجز تذكرة غير قابلة للتعديل قبل أن تتلقى الجواب.' },
      ],
    },
    {
      id: 'mistakes', h2: 'الأخطاء الشائعة',
      bullets: [
        'وثيقة ناقصة أو منتهية الصلاحية.',
        'ترجمة لا تحترم الصيغة المطلوبة.',
        'إثبات موارد غير كاف أو غامض.',
        'معلومات متناقضة بين وثيقتين.',
        'مشروع غير مشروح جيدًا ولا يُظهر العلاقة بين مسارك والبلد المختار.',
        'إيداع متأخر جدًا دون هامش في حال طلب وثيقة إضافية.',
      ],
      after: ['نراجع الملف بعيني الموظف الذي سيدرسه لتصحيح هذه النقاط قبل الإيداع.'],
    },
    {
      id: 'difference', h2: 'المساعدة والقرار الإداري: لا تخلط بينهما',
      paragraphs: [
        'تقرر السلطات القنصلية وسلطات الهجرة، بسيادة، منح التأشيرة أو عدم منحها. ويمكن لوكالة أن تساعد على الفهم والتنظيم وتقديم ملف واضح، لكنها لا تستطيع التأثير في القرار. فاحذر كل من يضمن لك تأشيرة، أو يقترح اختصارات مدفوعة الأجر، أو يطلب منك تزوير وثائق: فهذا غير قانوني وقد يغلق أمامك الأبواب نهائيًا.',
      ],
    },
    {
      id: 'arrival', h2: 'بعد الوصول',
      paragraphs: [
        'تتيح لك التأشيرة الدخول. وفي عين المكان تأتي عدة إجراءات: تسجيل عنوانك، والالتحاق بالجامعة، وتأكيد التأمين، وفتح حساب، وطلب تصريح إقامة عند الحاجة. والآجال غالبًا قصيرة. نذكّرك بها قبل السفر ونبقى متاحين للأسابيع الأولى.',
      ],
    },
    {
      id: 'digital-file', h2: 'تنظيم ملفك الرقمي',
      bullets: [
        'امسح كل وثيقة ضوئيًا بدقة جيدة في ملف مستقل باسم واضح، مثل «شهادة-الإجازة.pdf».',
        'احتفظ بالأصول وبعدة نسخ ورقية في حافظة مخصصة.',
        'أعدّ قائمة تحقق فيها تاريخ الحصول على كل وثيقة وتاريخ صلاحيتها وحالتها.',
        'دوّن كل المواعيد النهائية في تقويم مع تذكير قبلها بأسبوعين.',
        'احتفظ بسجل لمراسلاتك مع المؤسسات والسلطات.',
      ],
      after: ['الملف المنظم يوفر وقتًا ثمينًا عندما تُطلب وثيقة إضافية في اللحظة الأخيرة، ويمنحك هدوءًا أكبر طوال فترة الإجراءات.'],
    },
  ],
  faq: [
    { q: 'هل تضمن إنتلكت الحصول على التأشيرة؟', a: 'لا. القرار بيد السلطات. ونساعدك على تحضير ملف كامل وفهم المراحل.' },
    { q: 'متى يجب أن أبدأ الإجراءات؟', a: 'بمجرد الحصول على القبول أو الدعوة، بل وقبل ذلك لتحضير الوثائق. فآجال الترجمة والمواعيد غالبًا طويلة.' },
    { q: 'ماذا لو رُفضت التأشيرة؟', a: 'يجب فهم السبب المذكور. وبحسب الحالة يمكن تصحيح الملف وتقديم طلب جديد، أو تقديم طعن في الآجال. ونساعدك على تحليل الوضع.' },
    { q: 'أين أجد المعلومات الرسمية؟', a: 'على مواقع السفارة أو القنصلية المختصة والوزارات المعنية. فهذه المصادر هي المرجع.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
