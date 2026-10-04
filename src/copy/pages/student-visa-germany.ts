import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Visa étudiant Allemagne',
  title: 'Visa étudiant pour l’Allemagne : documents, étapes et délais | Intellect',
  description: 'Guide du visa étudiant pour l’Allemagne : documents à réunir, preuve de ressources, assurance, rendez-vous consulaire, délais et démarches à l’arrivée.',
  h1: 'Visa étudiant pour l’Allemagne : le guide pratique',
  lead: 'Le visa est l’une des étapes qui inquiètent le plus. Voici comment elle se déroule, quels documents préparer et comment éviter les retards évitables.',
  related: ['study-germany', 'student-support', 'student-life', 'german-c1'],
  sections: [
    {
      id: 'avertissement', h2: 'À savoir avant de lire',
      paragraphs: [
        'Les règles d’entrée et de séjour changent, et elles dépendent de votre nationalité. Ce guide présente la logique générale et les pièces demandées le plus souvent, mais il ne remplace pas les informations officielles. Avant toute démarche, vérifiez les exigences actuelles sur le site de l’ambassade ou du consulat d’Allemagne compétent pour votre lieu de résidence.',
      ],
    },
    {
      id: 'types', h2: 'Quel visa pour quelle situation ?',
      blocks: [
        { h3: 'Le visa d’études', paragraphs: ['Il s’adresse à l’étudiant déjà admis dans un établissement allemand. Il est demandé avec la lettre d’admission et permet ensuite d’obtenir un titre de séjour en Allemagne.'] },
        { h3: 'Le visa pour candidater', paragraphs: ['Il permet de venir en Allemagne pour préparer une candidature lorsque l’admission n’est pas encore obtenue, pour une durée limitée. Il est utile quand la candidature se joue sur place, mais il suppose un dossier solide et des ressources suffisantes.'] },
        { h3: 'Le visa pour cours de langue ou année préparatoire', paragraphs: ['Selon la durée et l’objectif, un cours de langue intensif ou une année préparatoire peut relever d’une catégorie particulière. Précisez votre projet dès le départ pour choisir la bonne demande.'] },
      ],
    },
    {
      id: 'documents', h2: 'Les documents demandés le plus souvent',
      bullets: [
        'Passeport en cours de validité, avec une copie des pages utiles.',
        'Formulaire de demande de visa complété et signé.',
        'Lettre d’admission de l’établissement, ou preuve de candidature pour le visa de candidature.',
        'Diplômes et relevés de notes, traduits et certifiés si nécessaire.',
        'Preuve du niveau de langue demandé par la formation.',
        'Preuve de ressources financières suffisantes pour la durée du séjour.',
        'Preuve d’assurance maladie valable en Allemagne.',
        'Photographies d’identité conformes aux normes.',
        'Curriculum vitae et lettre expliquant votre projet d’études.',
      ],
      after: ['La liste exacte varie selon le consulat. Nous la vérifions avec vous, puis nous contrôlons chaque pièce avant le rendez-vous.'],
    },
    {
      id: 'ressources', h2: 'La preuve de ressources',
      paragraphs: [
        'Les autorités demandent de démontrer que vous pouvez couvrir vos frais de vie pendant vos études. La solution la plus courante est un compte bloqué, sur lequel vous déposez le montant requis et dont vous ne pouvez retirer qu’une somme mensuelle fixe. D’autres justificatifs sont parfois acceptés, comme une bourse ou la déclaration d’un garant résidant en Allemagne.',
        'Le montant exigé est fixé par les autorités et il est réévalué périodiquement. Consultez la valeur actuelle sur les sources officielles avant d’ouvrir quoi que ce soit, afin de ne pas déposer une somme insuffisante.',
      ],
    },
    {
      id: 'etapes', h2: 'Les étapes de la demande',
      steps: [
        { title: 'Obtenir l’admission', text: 'La lettre d’admission est la pièce centrale. Comptez le temps nécessaire à son obtention avant de planifier le reste.' },
        { title: 'Réunir et faire traduire les pièces', text: 'Traductions et copies certifiées prennent souvent plus de temps que prévu. Commencez tôt.' },
        { title: 'Prendre rendez-vous', text: 'Les créneaux consulaires peuvent être rares selon la saison. Réservez dès que vous connaissez votre calendrier.' },
        { title: 'Déposer le dossier', text: 'Un entretien est parfois demandé. Soyez en mesure d’expliquer votre projet, votre choix de filière et votre financement.' },
        { title: 'Attendre la décision', text: 'Le délai de traitement peut atteindre plusieurs semaines. Ne réservez pas de billet non modifiable avant d’avoir reçu la réponse.' },
      ],
    },
    {
      id: 'arrivee', h2: 'Après l’arrivée en Allemagne',
      paragraphs: [
        'Le visa vous permet d’entrer. Sur place, plusieurs démarches suivent : vous enregistrer à la mairie de votre lieu de résidence, vous inscrire à l’université, souscrire ou confirmer votre assurance maladie, ouvrir un compte bancaire et demander votre titre de séjour auprès du service des étrangers. Les délais pour ces démarches sont souvent courts : nous vous les rappelons avant votre départ.',
      ],
    },
    {
      id: 'conseils', h2: 'Conseils pour un rendez-vous consulaire réussi',
      bullets: [
        'Présentez les originaux et les copies dans l’ordre de la liste fournie par le consulat.',
        'Arrivez en avance et gardez votre convocation sous la main.',
        'Préparez une explication claire de votre projet : pourquoi cette filière, pourquoi cette université, comment vous financez vos études.',
        'Répondez avec cohérence : vos réponses doivent correspondre aux documents déposés.',
        'Conservez tous les reçus et les numéros de suivi de votre demande.',
        'Méfiez-vous de toute personne qui promet l’obtention du visa ou propose des raccourcis payants.',
      ],
      after: ['Nous organisons un entretien blanc avant le rendez-vous, pour que les questions les plus fréquentes ne vous surprennent pas.'],
    },
    {
      id: 'erreurs', h2: 'Les erreurs qui retardent ou font refuser un dossier',
      bullets: [
        'Un document manquant ou périmé.',
        'Une traduction qui ne respecte pas le format exigé.',
        'Une preuve de ressources insuffisante ou ambiguë.',
        'Des informations contradictoires entre deux pièces.',
        'Un projet d’études mal expliqué, qui ne montre pas le lien entre votre parcours et la formation choisie.',
      ],
      after: ['Notre rôle est de repérer ces points avant le dépôt. Nous ne pouvons pas garantir un visa, qui reste une décision des autorités, mais un dossier complet et cohérent augmente nettement vos chances.'],
    },
  ],
  faq: [
    { q: 'Puis-je demander le visa sans lettre d’admission ?', a: 'Le visa d’études en suppose une. Un visa permettant de venir candidater existe, avec des conditions précises. Nous vous conseillons selon votre cas.' },
    { q: 'Combien de temps faut-il prévoir ?', a: 'Prévoyez plusieurs semaines pour le rendez-vous et le traitement, et davantage en haute saison. Commencez dès que l’admission est acquise.' },
    { q: 'Mon compte bloqué doit-il être ouvert avant le rendez-vous ?', a: 'En général, la preuve de ressources est demandée au dépôt du dossier. Vérifiez la procédure exacte auprès du consulat compétent.' },
  ],
};

const en: PageContent = {
  nav: 'German student visa',
  title: 'German student visa: documents, steps and timing | Intellect',
  description: 'Guide to the German student visa: documents to gather, proof of funds, insurance, consular appointment, timing and procedures after arrival.',
  h1: 'The German student visa: a practical guide',
  lead: 'The visa is one of the steps that worries people most. Here is how it works, which documents to prepare and how to avoid preventable delays.',
  related: ['study-germany', 'student-support', 'student-life', 'german-c1'],
  sections: [
    {
      id: 'notice', h2: 'Worth knowing before you read',
      paragraphs: [
        'Entry and residence rules change, and they depend on your nationality. This guide presents the general logic and the documents most often requested, but it does not replace official information. Before any step, check current requirements on the website of the German embassy or consulate responsible for your place of residence.',
      ],
    },
    {
      id: 'types', h2: 'Which visa for which situation?',
      blocks: [
        { h3: 'The study visa', paragraphs: ['It is for students already admitted to a German institution. It is requested with the admission letter and then allows you to obtain a residence permit in Germany.'] },
        { h3: 'The visa to apply for admission', paragraphs: ['It lets you come to Germany to prepare an application when admission has not yet been obtained, for a limited period. It is useful when the application is decided on site, but it requires a solid file and sufficient funds.'] },
        { h3: 'The visa for a language course or preparatory year', paragraphs: ['Depending on duration and purpose, an intensive language course or a preparatory year may fall under a particular category. State your project clearly from the start to choose the right application.'] },
      ],
    },
    {
      id: 'documents', h2: 'The documents most often requested',
      bullets: [
        'Valid passport, with a copy of the relevant pages.',
        'Completed and signed visa application form.',
        'Admission letter from the institution, or proof of application for the application visa.',
        'Diplomas and transcripts, translated and certified if necessary.',
        'Proof of the language level required by the programme.',
        'Proof of sufficient financial resources for the length of stay.',
        'Proof of health insurance valid in Germany.',
        'Passport photographs that meet the standards.',
        'CV and a letter explaining your study project.',
      ],
      after: ['The exact list varies by consulate. We check it with you, then review each document before the appointment.'],
    },
    {
      id: 'funds', h2: 'Proof of funds',
      paragraphs: [
        'The authorities ask you to show that you can cover your living costs during your studies. The most common solution is a blocked account, into which you deposit the required amount and from which you can only withdraw a fixed monthly sum. Other proofs are sometimes accepted, such as a scholarship or a declaration by a sponsor living in Germany.',
        'The amount required is set by the authorities and re-evaluated periodically. Check the current value on official sources before opening anything, so you do not deposit an insufficient sum.',
      ],
    },
    {
      id: 'steps', h2: 'The steps of the application',
      steps: [
        { title: 'Obtain admission', text: 'The admission letter is the central document. Allow the time needed to obtain it before planning the rest.' },
        { title: 'Gather and translate documents', text: 'Translations and certified copies often take longer than expected. Start early.' },
        { title: 'Book an appointment', text: 'Consular slots can be scarce depending on the season. Book as soon as you know your calendar.' },
        { title: 'Submit the file', text: 'An interview is sometimes required. Be ready to explain your project, your choice of field and your funding.' },
        { title: 'Wait for the decision', text: 'Processing can take several weeks. Do not book a non-changeable ticket before you receive the answer.' },
      ],
    },
    {
      id: 'arrival', h2: 'After arriving in Germany',
      paragraphs: [
        'The visa lets you enter. On site, several steps follow: register at the town hall of your place of residence, enrol at the university, take out or confirm your health insurance, open a bank account and apply for your residence permit at the foreigners’ office. Deadlines for these steps are often short: we remind you of them before you leave.',
      ],
    },
    {
      id: 'tips', h2: 'Tips for a successful consular appointment',
      bullets: [
        'Present originals and copies in the order of the list provided by the consulate.',
        'Arrive early and keep your appointment confirmation at hand.',
        'Prepare a clear explanation of your project: why this field, why this university, how you fund your studies.',
        'Answer consistently: your answers must match the documents submitted.',
        'Keep all receipts and tracking numbers of your application.',
        'Be wary of anyone who promises to obtain the visa or offers paid shortcuts.',
      ],
      after: ['We run a mock interview before the appointment so that the most frequent questions do not catch you off guard.'],
    },
    {
      id: 'mistakes', h2: 'Mistakes that delay or sink an application',
      bullets: [
        'A missing or expired document.',
        'A translation that does not follow the required format.',
        'Insufficient or ambiguous proof of funds.',
        'Contradictory information between two documents.',
        'A study project that is poorly explained and does not show the link between your background and the chosen programme.',
      ],
      after: ['Our role is to spot these points before submission. We cannot guarantee a visa, which remains the authorities’ decision, but a complete and consistent file clearly improves your chances.'],
    },
  ],
  faq: [
    { q: 'Can I apply for the visa without an admission letter?', a: 'The study visa assumes one. A visa allowing you to come and apply exists, with precise conditions. We advise you according to your case.' },
    { q: 'How much time should I allow?', a: 'Allow several weeks for the appointment and processing, more in peak season. Start as soon as admission is secured.' },
    { q: 'Must my blocked account be opened before the appointment?', a: 'Generally, proof of funds is requested when the file is submitted. Check the exact procedure with the competent consulate.' },
  ],
};

const ar: PageContent = {
  nav: 'تأشيرة الدراسة في ألمانيا',
  title: 'تأشيرة الطالب إلى ألمانيا: الوثائق والخطوات والآجال | إنتلكت',
  description: 'دليل تأشيرة الطالب إلى ألمانيا: الوثائق المطلوبة، وإثبات الموارد، والتأمين، وموعد القنصلية، والآجال، والإجراءات بعد الوصول.',
  h1: 'تأشيرة الطالب إلى ألمانيا: الدليل العملي',
  lead: 'التأشيرة من أكثر المراحل إثارة للقلق. إليك كيف تسير، وما الوثائق التي يجب تحضيرها، وكيف تتجنب التأخيرات التي يمكن تفاديها.',
  related: ['study-germany', 'student-support', 'student-life', 'german-c1'],
  sections: [
    {
      id: 'notice', h2: 'ما ينبغي معرفته قبل القراءة',
      paragraphs: [
        'تتغير قواعد الدخول والإقامة، وتعتمد على جنسيتك. يعرض هذا الدليل المنطق العام والوثائق الأكثر طلبًا، لكنه لا يحل محل المعلومات الرسمية. وقبل أي إجراء تحقق من الشروط الحالية على موقع السفارة أو القنصلية الألمانية المختصة بمكان إقامتك.',
      ],
    },
    {
      id: 'types', h2: 'أي تأشيرة لأي وضعية؟',
      blocks: [
        { h3: 'تأشيرة الدراسة', paragraphs: ['تخص الطالب المقبول فعلًا في مؤسسة ألمانية. وتُطلب مع رسالة القبول، وتتيح لاحقًا الحصول على تصريح إقامة في ألمانيا.'] },
        { h3: 'تأشيرة التقدم للقبول', paragraphs: ['تتيح القدوم إلى ألمانيا لإعداد طلب التسجيل حين لا يكون القبول قد تحقق بعد، لمدة محدودة. وهي مفيدة حين يُحسم الطلب في عين المكان، لكنها تفترض ملفًا قويًا وموارد كافية.'] },
        { h3: 'تأشيرة دورة لغة أو سنة تحضيرية', paragraphs: ['بحسب المدة والهدف قد تندرج دورة لغة مكثفة أو سنة تحضيرية ضمن فئة خاصة. حدّد مشروعك بوضوح منذ البداية لاختيار الطلب الصحيح.'] },
      ],
    },
    {
      id: 'documents', h2: 'الوثائق الأكثر طلبًا',
      bullets: [
        'جواز سفر ساري المفعول مع نسخة من الصفحات المهمة.',
        'استمارة طلب التأشيرة مكتملة وموقعة.',
        'رسالة القبول من المؤسسة، أو إثبات تقديم الطلب بالنسبة إلى تأشيرة التقدم.',
        'الشهادات وكشوف النقاط مترجمة ومصدّقة عند الاقتضاء.',
        'إثبات المستوى اللغوي الذي يشترطه التكوين.',
        'إثبات موارد مالية كافية لمدة الإقامة.',
        'إثبات تأمين صحي ساري في ألمانيا.',
        'صور شخصية مطابقة للمعايير.',
        'سيرة ذاتية ورسالة تشرح مشروعك الدراسي.',
      ],
      after: ['تختلف القائمة الدقيقة من قنصلية إلى أخرى. نتحقق منها معك ثم نراجع كل وثيقة قبل الموعد.'],
    },
    {
      id: 'funds', h2: 'إثبات الموارد المالية',
      paragraphs: [
        'تطلب السلطات إثبات قدرتك على تغطية نفقات معيشتك أثناء الدراسة. والحل الأكثر شيوعًا هو حساب مجمّد تودع فيه المبلغ المطلوب ولا تستطيع سحب سوى مبلغ شهري ثابت منه. وتُقبل أحيانًا إثباتات أخرى مثل منحة دراسية أو تصريح كفيل مقيم في ألمانيا.',
        'يحدد المبلغ المطلوب من السلطات ويُعاد تقييمه دوريًا. تحقق من القيمة الحالية في المصادر الرسمية قبل فتح أي حساب، حتى لا تودع مبلغًا غير كاف.',
      ],
    },
    {
      id: 'steps', h2: 'خطوات الطلب',
      steps: [
        { title: 'الحصول على القبول', text: 'رسالة القبول هي الوثيقة المحورية. اترك الوقت اللازم للحصول عليها قبل تخطيط بقية الخطوات.' },
        { title: 'جمع الوثائق وترجمتها', text: 'غالبًا ما تستغرق الترجمات والنسخ المصدّقة وقتًا أطول مما هو متوقع. ابدأ مبكرًا.' },
        { title: 'حجز موعد', text: 'قد تكون مواعيد القنصلية نادرة بحسب الموسم. احجز بمجرد معرفة جدولك الزمني.' },
        { title: 'إيداع الملف', text: 'يُطلب أحيانًا إجراء مقابلة. كن مستعدًا لشرح مشروعك واختيارك للتخصص وطريقة تمويلك.' },
        { title: 'انتظار القرار', text: 'قد تستغرق المعالجة عدة أسابيع. لا تحجز تذكرة غير قابلة للتعديل قبل أن تتلقى الجواب.' },
      ],
    },
    {
      id: 'arrival', h2: 'بعد الوصول إلى ألمانيا',
      paragraphs: [
        'تتيح لك التأشيرة الدخول. وفي عين المكان تأتي عدة إجراءات: التسجيل في بلدية مكان إقامتك، والتسجيل في الجامعة، والاشتراك في التأمين الصحي أو تأكيده، وفتح حساب بنكي، وطلب تصريح الإقامة لدى مكتب الأجانب. وآجال هذه الإجراءات غالبًا قصيرة، ونذكّرك بها قبل سفرك.',
      ],
    },
    {
      id: 'tips', h2: 'نصائح لموعد قنصلي ناجح',
      bullets: [
        'قدّم الأصول والنسخ مرتبة وفق القائمة التي زودتك بها القنصلية.',
        'احضر مبكرًا وأبقِ استدعاء الموعد في متناول يدك.',
        'حضّر شرحًا واضحًا لمشروعك: لماذا هذا التخصص ولماذا هذه الجامعة وكيف تموّل دراستك.',
        'أجب بانسجام: يجب أن تتطابق إجاباتك مع الوثائق المودعة.',
        'احتفظ بجميع الإيصالات وأرقام تتبع طلبك.',
        'احذر كل شخص يعد بالحصول على التأشيرة أو يقترح اختصارات مدفوعة الأجر.',
      ],
      after: ['ننظم مقابلة تجريبية قبل الموعد حتى لا تفاجئك الأسئلة الأكثر تكرارًا. وهذا التدريب البسيط يمنحك ثقة أكبر ويجعل عرضك لمشروعك أوضح وأكثر إقناعًا أمام الموظف المكلف بدراسة ملفك.'],
    },
    {
      id: 'mistakes', h2: 'أخطاء تؤخر الملف أو تؤدي إلى رفضه',
      bullets: [
        'وثيقة ناقصة أو منتهية الصلاحية.',
        'ترجمة لا تحترم الصيغة المطلوبة.',
        'إثبات موارد غير كاف أو غامض.',
        'معلومات متناقضة بين وثيقتين.',
        'مشروع دراسي غير مشروح جيدًا ولا يُظهر العلاقة بين مسارك والتكوين المختار.',
      ],
      after: ['دورنا هو رصد هذه النقاط قبل الإيداع. لا نستطيع ضمان تأشيرة فهي قرار السلطات، لكن الملف الكامل والمتسق يرفع حظوظك بوضوح.'],
    },
  ],
  faq: [
    { q: 'هل أستطيع طلب التأشيرة دون رسالة قبول؟', a: 'تأشيرة الدراسة تفترض وجودها. وتوجد تأشيرة تتيح القدوم للتقدم، بشروط دقيقة. وننصحك بحسب حالتك.' },
    { q: 'كم من الوقت يجب أن أخصص؟', a: 'خصص عدة أسابيع للموعد والمعالجة، وأكثر في موسم الذروة. ابدأ بمجرد تأكيد القبول.' },
    { q: 'هل يجب فتح الحساب المجمّد قبل الموعد؟', a: 'عمومًا يُطلب إثبات الموارد عند إيداع الملف. تحقق من الإجراء الدقيق لدى القنصلية المختصة.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
