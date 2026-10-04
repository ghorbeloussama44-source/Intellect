import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Étudier en Allemagne',
  title: 'Étudier en Allemagne : universités, admission, visa et coûts | Intellect',
  description: 'Étudiez en Allemagne avec Intellect : choix de la filière et de l’université, reconnaissance du diplôme, Studienkolleg, candidature, visa, budget et installation.',
  h1: 'Étudier en Allemagne : de la candidature à l’installation',
  lead: 'L’Allemagne offre un enseignement supérieur de qualité, avec de nombreuses universités publiques. Nous vous aidons à choisir, à candidater et à vous installer sans mauvaise surprise.',
  related: ['german-courses', 'medicine-germany', 'student-visa-germany', 'student-life'],
  sections: [
    {
      id: 'pourquoi', h2: 'Pourquoi choisir l’Allemagne',
      paragraphs: [
        'L’Allemagne accueille chaque année un grand nombre d’étudiants venus du monde entier. Son système d’enseignement supérieur combine des universités reconnues pour la recherche, des hautes écoles spécialisées orientées vers la pratique et une grande variété de filières, des ingénieries aux sciences de la santé en passant par l’économie et les lettres. Un diplôme allemand est apprécié sur le marché du travail, en Europe comme ailleurs.',
        'Autre atout : beaucoup d’universités publiques ne demandent pas de frais de scolarité classiques, seulement une contribution par semestre qui donne droit à des services comme le titre de transport. Les règles varient toutefois selon les régions, et certains Länder appliquent des frais aux étudiants venant de pays hors Union européenne. Nous vérifions ce point pour chaque établissement avant de vous conseiller.',
      ],
    },
    {
      id: 'types', h2: 'Universités et hautes écoles : quelle différence ?',
      blocks: [
        { h3: 'Les universités', paragraphs: ['Elles privilégient l’approche théorique et la recherche. Elles conviennent aux parcours académiques longs, aux sciences, à la médecine, au droit et aux lettres.'] },
        { h3: 'Les hautes écoles spécialisées (Hochschulen)', paragraphs: ['Elles proposent des études plus appliquées, souvent avec des stages intégrés et des liens étroits avec les entreprises. Elles conviennent bien à l’ingénierie, à la gestion et au design.'] },
        { h3: 'Les écoles d’art et de musique', paragraphs: ['Elles ont leurs propres procédures d’admission, généralement avec un portfolio ou une audition.'] },
      ],
    },
    {
      id: 'diplome', h2: 'La reconnaissance de votre diplôme',
      paragraphs: [
        'Pour accéder à une université allemande, votre diplôme d’études secondaires doit être reconnu comme équivalent à l’Abitur ou comme donnant accès aux études supérieures. Une base de données publique tenue par les autorités permet de vérifier, pays par pays, si votre diplôme suffit.',
        'Si votre diplôme ne donne pas un accès direct, une année préparatoire dans un Studienkolleg est généralement demandée. Elle permet de combler l’écart de programme, de renforcer l’allemand et de passer un examen d’évaluation qui ouvre l’accès à l’université. Nous vous aidons à identifier votre situation avant de bâtir votre calendrier.',
      ],
    },
    {
      id: 'langue', h2: 'La langue d’enseignement',
      paragraphs: [
        'Une grande partie des cursus de licence sont enseignés en allemand. Il faut alors prouver un niveau B2 ou C1 selon l’établissement, par un examen reconnu. Certains masters sont proposés en anglais, avec leurs propres exigences linguistiques. Même dans ce cas, connaître l’allemand facilite la vie quotidienne, les stages et la recherche d’un emploi après le diplôme.',
        'Nos cours couvrent le parcours complet, de A1 à C1, avec une préparation aux examens. Rendez-vous sur la page consacrée aux cours d’allemand pour comparer les formats.',
      ],
    },
    {
      id: 'candidature', h2: 'Candidater : comment ça marche',
      paragraphs: [
        'La procédure dépend de l’université. Plusieurs établissements passent par un service centralisé de candidatures pour les étudiants internationaux, d’autres reçoivent les dossiers directement. Les dates limites tombent souvent en milieu d’année pour la rentrée d’automne et en début d’année pour la rentrée de printemps, mais elles varient et sont parfois plus précoces pour les candidats étrangers.',
      ],
      bullets: [
        'Copies certifiées et traductions de vos diplômes et relevés de notes.',
        'Preuve de niveau de langue.',
        'Curriculum vitae et lettre de motivation si l’établissement les demande.',
        'Copie du passeport et photographies.',
        'Éventuellement des tests d’aptitude propres à la filière.',
      ],
      after: ['Nous construisons le dossier avec vous, nous contrôlons chaque pièce et nous suivons les dates limites, pour éviter qu’un détail administratif ne vous coûte un semestre.'],
    },
    {
      id: 'budget', h2: 'Budget et assurance',
      paragraphs: [
        'Le coût de la vie varie selon la ville : le logement en est le poste principal, plus élevé dans les grandes villes que dans les villes moyennes. L’assurance maladie est obligatoire pour les étudiants. Pour le visa, vous devez prouver que vous disposez de ressources suffisantes, généralement par un compte bloqué dont le montant est fixé par les autorités. Il change périodiquement : vérifiez-le sur les sources officielles avant de prévoir votre budget.',
        'Les étudiants étrangers peuvent travailler dans les limites fixées par la loi, ce qui aide à couvrir une partie des dépenses sans suffire à financer les études. Nous vous recommandons de prévoir un budget qui ne dépende pas d’un emploi étudiant.',
      ],
    },
    {
      id: 'accompagnement', h2: 'Ce que nous faisons pour vous',
      bullets: [
        'Orientation vers les filières et les universités adaptées à votre profil et à votre budget.',
        'Vérification de la reconnaissance du diplôme et du besoin éventuel d’un Studienkolleg.',
        'Parcours d’allemand jusqu’au niveau exigé et préparation à l’examen.',
        'Constitution du dossier et suivi des candidatures.',
        'Accompagnement pour le visa, l’assurance, le logement et l’arrivée.',
      ],
      after: ['Après votre arrivée, nous restons disponibles pour les premières démarches : inscription à la mairie, ouverture d’un compte, titre de séjour.'],
    },
  ],
  faq: [
    { q: 'Les études sont-elles gratuites en Allemagne ?', a: 'Beaucoup d’universités publiques ne demandent pas de frais de scolarité classiques, mais une contribution semestrielle. Certains Länder appliquent des frais pour les étudiants hors Union européenne. Nous vérifions pour chaque établissement.' },
    { q: 'Faut-il parler allemand pour étudier ?', a: 'Pour la majorité des licences, oui. Certains masters sont enseignés en anglais. Dans tous les cas, l’allemand facilite fortement la vie sur place.' },
    { q: 'Qu’est-ce qu’un Studienkolleg ?', a: 'C’est une année préparatoire qui permet aux étudiants dont le diplôme ne donne pas un accès direct de se mettre à niveau avant d’entrer à l’université.' },
    { q: 'Puis-je travailler pendant mes études ?', a: 'Oui, dans les limites fixées par la loi pour les étudiants étrangers. Il vaut mieux ne pas compter sur ce revenu pour financer l’essentiel des études.' },
  ],
};

const en: PageContent = {
  nav: 'Study in Germany',
  title: 'Study in Germany: universities, admission, visa and costs | Intellect',
  description: 'Study in Germany with Intellect: choosing the field and university, diploma recognition, Studienkolleg, application, visa, budget and settling in.',
  h1: 'Study in Germany: from application to settling in',
  lead: 'Germany offers quality higher education, with many public universities. We help you choose, apply and settle in without nasty surprises.',
  related: ['german-courses', 'medicine-germany', 'student-visa-germany', 'student-life'],
  sections: [
    {
      id: 'why', h2: 'Why choose Germany',
      paragraphs: [
        'Every year Germany welcomes a large number of students from all over the world. Its higher education system combines universities known for research, universities of applied sciences geared to practice and a wide variety of fields, from engineering to health sciences, economics and the humanities. A German degree is valued on the job market, in Europe and elsewhere.',
        'Another advantage: many public universities do not charge conventional tuition fees, only a per-semester contribution that gives access to services such as a transport pass. Rules do vary by region, however, and some federal states charge fees to students from outside the European Union. We check this for each institution before advising you.',
      ],
    },
    {
      id: 'types', h2: 'Universities and universities of applied sciences: what is the difference?',
      blocks: [
        { h3: 'Universities', paragraphs: ['They favour a theoretical approach and research. They suit long academic paths, sciences, medicine, law and the humanities.'] },
        { h3: 'Universities of applied sciences (Hochschulen)', paragraphs: ['They offer more applied studies, often with built-in internships and close links with companies. They suit engineering, management and design well.'] },
        { h3: 'Art and music schools', paragraphs: ['They have their own admission procedures, generally with a portfolio or an audition.'] },
      ],
    },
    {
      id: 'diploma', h2: 'Recognition of your diploma',
      paragraphs: [
        'To enter a German university, your secondary school diploma must be recognised as equivalent to the Abitur or as giving access to higher education. A public database kept by the authorities lets you check, country by country, whether your diploma is enough.',
        'If your diploma does not give direct access, a preparatory year at a Studienkolleg is generally required. It closes the gap in curriculum, strengthens German and ends with an assessment exam that opens access to university. We help you identify your situation before building your calendar.',
      ],
    },
    {
      id: 'language', h2: 'The language of instruction',
      paragraphs: [
        'A large share of bachelor programmes are taught in German. You must then prove a B2 or C1 level depending on the institution, through a recognised exam. Some master’s degrees are offered in English, with their own language requirements. Even then, knowing German makes daily life, internships and finding a job after graduation much easier.',
        'Our courses cover the full path, from A1 to C1, with exam preparation. See the German courses page to compare formats.',
      ],
    },
    {
      id: 'application', h2: 'Applying: how it works',
      paragraphs: [
        'The procedure depends on the university. Several institutions use a centralised application service for international students, others receive applications directly. Deadlines often fall in mid-year for the autumn intake and early in the year for the spring intake, but they vary and are sometimes earlier for foreign applicants.',
      ],
      bullets: [
        'Certified copies and translations of your diplomas and transcripts.',
        'Proof of language level.',
        'CV and motivation letter if the institution asks for them.',
        'Copy of your passport and photographs.',
        'Possibly aptitude tests specific to the field.',
      ],
      after: ['We build the file with you, check every document and track deadlines so that an administrative detail does not cost you a semester.'],
    },
    {
      id: 'budget', h2: 'Budget and insurance',
      paragraphs: [
        'The cost of living varies by city: housing is the main item, higher in big cities than in mid-sized ones. Health insurance is compulsory for students. For the visa, you must prove you have sufficient funds, generally through a blocked account whose amount is set by the authorities. It changes periodically: check it on official sources before planning your budget.',
        'Foreign students may work within limits set by law, which helps cover part of the expenses without being enough to fund the studies. We recommend a budget that does not depend on a student job.',
      ],
    },
    {
      id: 'support', h2: 'What we do for you',
      bullets: [
        'Guidance towards the fields and universities that suit your profile and budget.',
        'Checking diploma recognition and any need for a Studienkolleg.',
        'A German path up to the required level and exam preparation.',
        'Building the file and tracking applications.',
        'Support for the visa, insurance, housing and arrival.',
      ],
      after: ['After you arrive, we remain available for the first formalities: registering at the town hall, opening a bank account, residence permit.'],
    },
  ],
  faq: [
    { q: 'Are studies free in Germany?', a: 'Many public universities do not charge conventional tuition, but a semester contribution. Some federal states charge fees to students from outside the European Union. We check each institution.' },
    { q: 'Do I need to speak German to study?', a: 'For most bachelor programmes, yes. Some master’s degrees are taught in English. In any case, German makes life there much easier.' },
    { q: 'What is a Studienkolleg?', a: 'It is a preparatory year that lets students whose diploma does not give direct access catch up before entering university.' },
    { q: 'Can I work during my studies?', a: 'Yes, within limits set by law for foreign students. It is better not to rely on this income to fund most of your studies.' },
  ],
};

const ar: PageContent = {
  nav: 'الدراسة في ألمانيا',
  title: 'الدراسة في ألمانيا: الجامعات والقبول والتأشيرة والتكاليف | إنتلكت',
  description: 'ادرس في ألمانيا مع إنتلكت: اختيار التخصص والجامعة، ومعادلة الشهادة، وStudienkolleg، وتقديم الطلب، والتأشيرة، والميزانية، والاستقرار.',
  h1: 'الدراسة في ألمانيا: من تقديم الطلب إلى الاستقرار',
  lead: 'تقدم ألمانيا تعليمًا عاليًا جيدًا وعددًا كبيرًا من الجامعات الحكومية. نساعدك على الاختيار والتقديم والاستقرار دون مفاجآت غير سارة.',
  related: ['german-courses', 'medicine-germany', 'student-visa-germany', 'student-life'],
  sections: [
    {
      id: 'why', h2: 'لماذا تختار ألمانيا؟',
      paragraphs: [
        'تستقبل ألمانيا كل عام عددًا كبيرًا من الطلبة القادمين من جميع أنحاء العالم. ويجمع نظامها للتعليم العالي بين جامعات معروفة بأبحاثها، وجامعات للعلوم التطبيقية موجهة نحو الممارسة، وتنوع واسع في التخصصات من الهندسة إلى العلوم الصحية والاقتصاد والآداب. والشهادة الألمانية محل تقدير في سوق العمل داخل أوروبا وخارجها.',
        'ميزة أخرى: كثير من الجامعات الحكومية لا تفرض رسومًا دراسية تقليدية، بل مساهمة عن كل فصل دراسي تتيح الاستفادة من خدمات مثل بطاقة النقل. غير أن القواعد تختلف بحسب الولايات، وبعض الولايات تفرض رسومًا على الطلبة القادمين من خارج الاتحاد الأوروبي. ونتحقق من هذه النقطة لكل مؤسسة قبل أن ننصحك.',
      ],
    },
    {
      id: 'types', h2: 'الجامعات وجامعات العلوم التطبيقية: ما الفرق؟',
      blocks: [
        { h3: 'الجامعات', paragraphs: ['تميل إلى المقاربة النظرية والبحث. وتناسب المسارات الأكاديمية الطويلة والعلوم والطب والقانون والآداب.'] },
        { h3: 'جامعات العلوم التطبيقية (Hochschulen)', paragraphs: ['تقدم دراسات أكثر تطبيقية، غالبًا مع تدريبات مدمجة وروابط وثيقة بالشركات. وتناسب الهندسة والتسيير والتصميم.'] },
        { h3: 'معاهد الفنون والموسيقى', paragraphs: ['لها إجراءات قبول خاصة بها، عادة بملف أعمال أو اختبار أداء.'] },
      ],
    },
    {
      id: 'diploma', h2: 'معادلة شهادتك',
      paragraphs: [
        'للالتحاق بجامعة ألمانية يجب أن تُعتبر شهادة الثانوية التي تحملها معادلة للـ Abitur أو مؤهلة للدراسة العليا. وتتيح لك قاعدة بيانات عامة تديرها السلطات أن تتحقق، بلدًا بلدًا، من كفاية شهادتك.',
        'وإذا كانت شهادتك لا تمنح قبولًا مباشرًا فإن سنة تحضيرية في Studienkolleg تُطلب عادة. فهي تسد الفجوة في المقرر، وتقوي الألمانية، وتنتهي بامتحان تقييم يفتح باب الجامعة. نساعدك على تحديد وضعك قبل بناء جدولك الزمني.',
      ],
    },
    {
      id: 'language', h2: 'لغة التدريس',
      paragraphs: [
        'يُدرَّس جزء كبير من برامج الإجازة بالألمانية. وعندها يجب إثبات مستوى B2 أو C1 بحسب المؤسسة، عبر امتحان معترف به. وتُقدَّم بعض برامج الماجستير بالإنجليزية بشروط لغوية خاصة بها. وحتى في هذه الحالة تسهّل معرفة الألمانية الحياة اليومية والتدريب والبحث عن عمل بعد التخرج.',
        'تغطي دوراتنا المسار كاملًا من A1 إلى C1 مع تحضير للامتحانات. راجع صفحة دورات الألمانية للمقارنة بين الصيغ.',
      ],
    },
    {
      id: 'application', h2: 'التقديم: كيف يتم؟',
      paragraphs: [
        'يعتمد الإجراء على الجامعة. فبعض المؤسسات تمر عبر خدمة مركزية لطلبات الطلبة الدوليين، وأخرى تتلقى الملفات مباشرة. وتقع المواعيد النهائية غالبًا في منتصف السنة للدخول في الخريف وفي بداية السنة للدخول في الربيع، لكنها تختلف وتكون أحيانًا أبكر بالنسبة إلى المرشحين الأجانب.',
      ],
      bullets: [
        'نسخ مصدّقة وترجمات لشهاداتك وكشوف نقاطك.',
        'إثبات المستوى اللغوي.',
        'سيرة ذاتية ورسالة تحفيز إذا طلبتها المؤسسة.',
        'نسخة من جواز السفر وصور شخصية.',
        'وربما اختبارات قدرات خاصة بالتخصص.',
      ],
      after: ['نبني الملف معك، ونراجع كل وثيقة، ونتابع المواعيد النهائية حتى لا يكلفك تفصيل إداري فصلًا دراسيًا كاملًا.'],
    },
    {
      id: 'budget', h2: 'الميزانية والتأمين',
      paragraphs: [
        'تختلف تكلفة المعيشة من مدينة إلى أخرى: والسكن هو البند الرئيسي، وهو أغلى في المدن الكبرى منه في المدن المتوسطة. والتأمين الصحي إلزامي للطلبة. وللحصول على التأشيرة يجب إثبات توفر موارد كافية، عادة عبر حساب مجمّد يحدد مبلغه السلطات. وهو يتغير دوريًا: تحقق منه من المصادر الرسمية قبل أن تخطط لميزانيتك.',
        'يستطيع الطلبة الأجانب العمل ضمن حدود يضعها القانون، وهذا يساعد على تغطية جزء من المصاريف دون أن يكفي لتمويل الدراسة. وننصحك بميزانية لا تعتمد على عمل طلابي.',
      ],
    },
    {
      id: 'support', h2: 'ما نقوم به من أجلك',
      bullets: [
        'توجيهك نحو التخصصات والجامعات التي تناسب ملفك وميزانيتك.',
        'التحقق من معادلة الشهادة ومن الحاجة المحتملة إلى Studienkolleg.',
        'مسار في الألمانية حتى المستوى المطلوب والتحضير للامتحان.',
        'إعداد الملف ومتابعة الطلبات.',
        'مرافقة في التأشيرة والتأمين والسكن والوصول.',
      ],
      after: ['وبعد وصولك نبقى متاحين لأولى الإجراءات: التسجيل في البلدية، وفتح حساب بنكي، وتصريح الإقامة.'],
    },
  ],
  faq: [
    { q: 'هل الدراسة مجانية في ألمانيا؟', a: 'كثير من الجامعات الحكومية لا تفرض رسومًا دراسية تقليدية بل مساهمة فصلية. وتفرض بعض الولايات رسومًا على الطلبة من خارج الاتحاد الأوروبي. ونتحقق لكل مؤسسة.' },
    { q: 'هل يجب أن أتكلم الألمانية للدراسة؟', a: 'في معظم برامج الإجازة نعم. وتُدرَّس بعض برامج الماجستير بالإنجليزية. وفي كل الأحوال تسهّل الألمانية الحياة هناك كثيرًا.' },
    { q: 'ما هو Studienkolleg؟', a: 'هو سنة تحضيرية تتيح للطلبة الذين لا تمنحهم شهادتهم قبولًا مباشرًا أن يلحقوا بالمستوى المطلوب قبل دخول الجامعة.' },
    { q: 'هل أستطيع العمل أثناء الدراسة؟', a: 'نعم، ضمن الحدود التي يضعها القانون للطلبة الأجانب. والأفضل ألا تعتمد على هذا الدخل لتمويل معظم دراستك.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
