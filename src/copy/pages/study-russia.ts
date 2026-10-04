import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Étudier en Russie',
  title: 'Étudier en Russie : inscription, année préparatoire, visa et logement | Intellect',
  description: 'Étudiez en Russie avec Intellect : choix de l’université, année préparatoire de russe, invitation et visa, logement en résidence, accompagnement sur place.',
  h1: 'Étudier en Russie : un parcours accessible, à préparer avec soin',
  lead: 'La Russie propose des programmes variés, souvent accessibles depuis l’étranger. Nous vous aidons à choisir sérieusement, à vous inscrire et à vous installer, en vous donnant aussi les points de vigilance.',
  related: ['visa-procedures', 'student-support', 'study-germany', 'german-courses'],
  sections: [
    {
      id: 'pourquoi', h2: 'Ce que la Russie offre aux étudiants étrangers',
      paragraphs: [
        'La Russie compte de nombreuses universités réparties dans de grandes villes comme Moscou et Saint-Pétersbourg, mais aussi dans des villes universitaires comme Kazan ou Novossibirsk. Elles proposent des filières en ingénierie, en sciences, en médecine, en économie, en langues et dans bien d’autres domaines. Beaucoup d’établissements accueillent depuis longtemps des étudiants étrangers et disposent d’un service dédié.',
        'Pour de nombreuses familles, l’attrait tient aussi à la possibilité de candidater depuis son pays, à un coût de vie généralement plus accessible que dans d’autres destinations et à des programmes proposés en russe ou, pour certains, en anglais.',
      ],
    },
    {
      id: 'annee-prep', h2: 'L’année préparatoire de langue',
      paragraphs: [
        'La plupart des programmes en russe commencent par une année préparatoire, souvent appelée faculté préparatoire. Elle est consacrée à l’apprentissage intensif du russe et, selon la filière, à la remise à niveau dans les matières scientifiques. À la fin, un examen valide votre passage en première année. Les programmes en anglais n’ont pas toujours cette étape, mais ils sont moins nombreux selon les filières.',
        'Cette année est décisive. Nous vous aidons à choisir l’université en fonction de la qualité de son programme préparatoire et de ses résultats, plutôt qu’uniquement du prix.',
      ],
    },
    {
      id: 'admission', h2: 'Comment se passe l’inscription',
      steps: [
        { title: 'Choix de l’université et de la filière', text: 'Nous comparons les établissements sur leur accréditation, leurs frais, la langue d’enseignement, la ville et les conditions d’accueil.' },
        { title: 'Dossier de candidature', text: 'Diplôme, relevés de notes, passeport, photographies, certificat médical selon l’établissement. Les pièces doivent être traduites et légalisées selon les règles du pays qui les délivre.' },
        { title: 'Admission et lettre d’invitation', text: 'Une fois admis, l’établissement fait établir une invitation officielle, nécessaire pour demander le visa d’études.' },
        { title: 'Visa d’études', text: 'Le visa se demande auprès de la représentation consulaire compétente avec l’invitation, le passeport et les justificatifs demandés, dont souvent des examens médicaux.' },
        { title: 'Arrivée et enregistrement', text: 'À l’arrivée, l’étudiant doit être enregistré auprès des autorités migratoires, généralement avec l’aide de l’université ou de la résidence.' },
      ],
    },
    {
      id: 'bourses', h2: 'Les bourses et les quotas gouvernementaux',
      paragraphs: [
        'Le gouvernement russe attribue chaque année des places financées à des étudiants étrangers, selon des quotas par pays. La candidature se fait sur un portail officiel pendant une période précise de l’année, avec une sélection par pays et par établissement. Ces places sont limitées et très demandées. Elles ne remplacent pas un plan de financement personnel : mieux vaut prévoir une solution de rechange.',
        'Nous vous aidons à préparer votre dossier pour ce portail, à respecter les dates et à comparer cette voie avec une inscription payante.',
      ],
    },
    {
      id: 'logement', h2: 'Logement et vie sur place',
      paragraphs: [
        'La plupart des universités proposent des places en résidence universitaire, en chambre partagée, à un prix bien inférieur à celui du marché privé. D’autres étudiants louent un appartement, seuls ou en colocation. La vie étudiante est animée, avec des associations, des équipes sportives et des événements culturels. Le climat peut être rude en hiver : prévoyez un équipement adapté.',
      ],
    },
    {
      id: 'ville', h2: 'Choisir sa ville et son université',
      paragraphs: [
        'Chaque ville a son caractère. Les grandes métropoles offrent plus d’universités, de culture et de débouchés, mais un coût de la vie plus élevé. Les villes universitaires plus petites sont souvent plus abordables et plus calmes, avec une vie étudiante concentrée autour du campus. Le climat, la distance avec votre pays, la présence d’une communauté d’étudiants de votre région et la qualité du service international de l’université pèsent aussi dans la décision. Nous comparons ces critères avec vous, selon votre filière et votre budget.',
      ],
    },
    {
      id: 'vigilance', h2: 'Les points de vigilance à connaître',
      bullets: [
        'Vérifiez l’accréditation de l’université et de la filière auprès des autorités compétentes.',
        'Renseignez-vous sur la reconnaissance du diplôme russe dans votre pays avant de vous engager, surtout pour la médecine et les professions réglementées.',
        'Le contexte international peut affecter les paiements, les liaisons aériennes et les conditions d’entrée : informez-vous à jour avant le départ.',
        'Méfiez-vous des intermédiaires qui promettent une admission garantie ou demandent des paiements sans contrat clair.',
        'Faites relire le contrat de scolarité et les conditions de remboursement.',
      ],
      after: ['Nous partageons ces points sans détour, parce qu’une décision prise en connaissance de cause protège votre famille d’un investissement mal orienté.'],
    },
    {
      id: 'accompagnement', h2: 'Notre accompagnement sur place et à distance',
      paragraphs: [
        'Intellect vous accompagne avant le départ pour le choix de l’université, le dossier et le visa, puis à l’arrivée pour le logement, l’enregistrement et les premières démarches. Nous restons joignables pendant vos premiers mois, quand les questions sont les plus nombreuses.',
      ],
    },
    {
      id: 'questions-universite', h2: 'Questions à poser à une université avant de s’inscrire',
      bullets: [
        'L’établissement et la filière sont-ils accrédités, et par quelle autorité ?',
        'Quelle est la langue d’enseignement, et que comprend l’année préparatoire ?',
        'Quels sont les frais de scolarité, les modalités de paiement et les conditions de remboursement ?',
        'Où loge-t-on, dans quelles conditions et à quel prix ?',
        'Le diplôme est-il reconnu dans mon pays, et comment le vérifier ?',
        'Quel service accompagne les étudiants étrangers à l’arrivée ?',
      ],
      after: ['Faites répondre par écrit : une réponse écrite protège les deux parties.'],
    },
  ],
  faq: [
    { q: 'Faut-il parler russe pour commencer ?', a: 'Non, pour la plupart des programmes en russe, l’année préparatoire est consacrée à l’apprentissage de la langue à partir de zéro.' },
    { q: 'Les études en Russie sont-elles moins chères ?', a: 'Les frais et le coût de la vie sont souvent plus bas que dans d’autres destinations, mais ils varient selon l’université, la ville et la filière. Nous détaillons le budget avant tout engagement.' },
    { q: 'Mon diplôme sera-t-il reconnu dans mon pays ?', a: 'Cela dépend de votre pays et de la filière. Il faut le vérifier auprès des autorités compétentes avant de vous inscrire, en particulier pour la médecine.' },
    { q: 'Pouvez-vous garantir l’obtention du visa ?', a: 'Non. La décision appartient aux autorités consulaires. Nous préparons un dossier complet et cohérent pour maximiser vos chances.' },
  ],
};

const en: PageContent = {
  nav: 'Study in Russia',
  title: 'Study in Russia: enrolment, preparatory year, visa and housing | Intellect',
  description: 'Study in Russia with Intellect: choosing a university, preparatory Russian year, invitation and visa, dormitory housing and on-site support.',
  h1: 'Study in Russia: an accessible path, to prepare with care',
  lead: 'Russia offers varied programmes, often reachable from abroad. We help you choose seriously, enrol and settle in, and we also give you the points to watch.',
  related: ['visa-procedures', 'student-support', 'study-germany', 'german-courses'],
  sections: [
    {
      id: 'why', h2: 'What Russia offers foreign students',
      paragraphs: [
        'Russia has many universities spread across big cities such as Moscow and Saint Petersburg, but also in university towns such as Kazan or Novosibirsk. They offer programmes in engineering, sciences, medicine, economics, languages and many other fields. Many institutions have long welcomed foreign students and have a dedicated office.',
        'For many families the appeal also lies in being able to apply from one’s own country, in a cost of living that is generally lower than in other destinations, and in programmes offered in Russian or, for some, in English.',
      ],
    },
    {
      id: 'prep-year', h2: 'The preparatory language year',
      paragraphs: [
        'Most programmes in Russian begin with a preparatory year, often called a preparatory faculty. It is devoted to intensive Russian learning and, depending on the field, to catching up in scientific subjects. At the end, an exam validates your move to first year. Programmes in English do not always have this stage, but there are fewer of them depending on the field.',
        'This year is decisive. We help you choose the university based on the quality of its preparatory programme and results, rather than on price alone.',
      ],
    },
    {
      id: 'admission', h2: 'How enrolment works',
      steps: [
        { title: 'Choosing the university and field', text: 'We compare institutions on accreditation, fees, language of instruction, city and reception conditions.' },
        { title: 'Application file', text: 'Diploma, transcripts, passport, photographs, medical certificate depending on the institution. Documents must be translated and legalised according to the rules of the country that issued them.' },
        { title: 'Admission and invitation letter', text: 'Once you are admitted, the institution has an official invitation issued, which is needed to apply for the study visa.' },
        { title: 'Study visa', text: 'The visa is requested from the competent consular office with the invitation, passport and requested supporting documents, often including medical tests.' },
        { title: 'Arrival and registration', text: 'On arrival, the student must be registered with the migration authorities, generally with the help of the university or the dormitory.' },
      ],
    },
    {
      id: 'scholarships', h2: 'Scholarships and government quotas',
      paragraphs: [
        'The Russian government awards funded places to foreign students every year, according to quotas by country. Applications are made on an official portal during a specific period of the year, with selection by country and by institution. These places are limited and highly sought after. They do not replace a personal funding plan: it is better to have a fallback solution.',
        'We help you prepare your file for this portal, meet the dates and compare this route with a paid enrolment.',
      ],
    },
    {
      id: 'housing', h2: 'Housing and life on site',
      paragraphs: [
        'Most universities offer places in a student residence, in shared rooms, at a price well below the private market. Other students rent an apartment, alone or shared. Student life is lively, with associations, sports teams and cultural events. The climate can be harsh in winter: plan for suitable clothing.',
      ],
    },
    {
      id: 'city', h2: 'Choosing a city and a university',
      paragraphs: [
        'Each city has its own character. Large metropolises offer more universities, culture and opportunities, but a higher cost of living. Smaller university towns are often more affordable and quieter, with student life centred on the campus. Climate, distance from your country, the presence of a community of students from your region and the quality of the university’s international office also weigh in the decision. We compare these criteria with you, according to your field and budget.',
      ],
    },
    {
      id: 'caution', h2: 'Points of caution to know',
      bullets: [
        'Check the accreditation of the university and the programme with the competent authorities.',
        'Find out whether the Russian diploma is recognised in your country before committing, especially for medicine and regulated professions.',
        'The international context can affect payments, flights and entry conditions: get up-to-date information before departure.',
        'Be wary of intermediaries who promise guaranteed admission or ask for payments without a clear contract.',
        'Have the tuition contract and refund conditions reviewed.',
      ],
      after: ['We share these points plainly, because a decision made with full knowledge protects your family from a misdirected investment.'],
    },
    {
      id: 'support', h2: 'Our support on site and remotely',
      paragraphs: [
        'Intellect supports you before departure for choosing the university, the file and the visa, then on arrival for housing, registration and first formalities. We stay reachable during your first months, when questions are most numerous.',
      ],
    },
    {
      id: 'university-questions', h2: 'Questions to ask a university before enrolling',
      bullets: [
        'Are the institution and the programme accredited, and by which authority?',
        'What is the language of instruction, and what does the preparatory year include?',
        'What are the tuition fees, payment terms and refund conditions?',
        'Where do students live, in what conditions and at what price?',
        'Is the diploma recognised in my country, and how can I check?',
        'Which office supports foreign students on arrival?',
      ],
      after: ['Ask for written answers: a written reply protects both parties.'],
    },
  ],
  faq: [
    { q: 'Do I need to speak Russian to start?', a: 'No. For most programmes in Russian, the preparatory year teaches the language from scratch.' },
    { q: 'Is studying in Russia cheaper?', a: 'Fees and cost of living are often lower than in other destinations, but they vary by university, city and field. We detail the budget before any commitment.' },
    { q: 'Will my degree be recognised in my country?', a: 'It depends on your country and field. Check with the competent authorities before enrolling, especially for medicine.' },
    { q: 'Can you guarantee that I get the visa?', a: 'No. The decision belongs to consular authorities. We prepare a complete and consistent file to maximise your chances.' },
  ],
};

const ar: PageContent = {
  nav: 'الدراسة في روسيا',
  title: 'الدراسة في روسيا: التسجيل والسنة التحضيرية والتأشيرة والسكن | إنتلكت',
  description: 'ادرس في روسيا مع إنتلكت: اختيار الجامعة، والسنة التحضيرية للغة الروسية، والدعوة والتأشيرة، والسكن الجامعي، والمرافقة في عين المكان.',
  h1: 'الدراسة في روسيا: مسار متاح يحتاج إلى تحضير دقيق',
  lead: 'تقدم روسيا برامج متنوعة يمكن التقدم إليها غالبًا من الخارج. نساعدك على الاختيار بجدية والتسجيل والاستقرار، ونذكر لك أيضًا نقاط الحذر.',
  related: ['visa-procedures', 'student-support', 'study-germany', 'german-courses'],
  sections: [
    {
      id: 'why', h2: 'ما الذي تقدمه روسيا للطلبة الأجانب؟',
      paragraphs: [
        'في روسيا جامعات كثيرة موزعة على مدن كبرى مثل موسكو وسانت بطرسبورغ، وعلى مدن جامعية مثل قازان ونوفوسيبيرسك. وهي تقدم تخصصات في الهندسة والعلوم والطب والاقتصاد واللغات ومجالات أخرى كثيرة. وتستقبل مؤسسات عديدة الطلبة الأجانب منذ زمن طويل ولديها مكتب مخصص لهم.',
        'وبالنسبة إلى كثير من الأسر يكمن الإغراء أيضًا في إمكانية التقدم من البلد الأصلي، وفي تكلفة معيشة أقل عمومًا من وجهات أخرى، وفي برامج تُقدَّم بالروسية أو، في بعضها، بالإنجليزية.',
      ],
    },
    {
      id: 'prep-year', h2: 'السنة التحضيرية للغة',
      paragraphs: [
        'تبدأ معظم البرامج بالروسية بسنة تحضيرية، تسمى غالبًا الكلية التحضيرية. وهي مخصصة لتعلم الروسية بشكل مكثف، ولاستدراك المواد العلمية بحسب التخصص. وفي نهايتها يؤكد امتحان انتقالك إلى السنة الأولى. أما البرامج بالإنجليزية فلا تتضمن دائمًا هذه المرحلة، لكنها أقل عددًا بحسب التخصصات.',
        'هذه السنة حاسمة. ونساعدك على اختيار الجامعة بحسب جودة برنامجها التحضيري ونتائجه، وليس بحسب السعر وحده.',
      ],
    },
    {
      id: 'admission', h2: 'كيف يتم التسجيل؟',
      steps: [
        { title: 'اختيار الجامعة والتخصص', text: 'نقارن بين المؤسسات من حيث الاعتماد والرسوم ولغة التدريس والمدينة وظروف الاستقبال.' },
        { title: 'ملف الطلب', text: 'الشهادة وكشوف النقاط وجواز السفر والصور وشهادة طبية بحسب المؤسسة. ويجب ترجمة الوثائق وتصديقها وفق قواعد البلد الذي أصدرها.' },
        { title: 'القبول ورسالة الدعوة', text: 'بعد قبولك تستخرج المؤسسة دعوة رسمية، وهي لازمة لطلب تأشيرة الدراسة.' },
        { title: 'تأشيرة الدراسة', text: 'تُطلب التأشيرة من التمثيلية القنصلية المختصة مع الدعوة وجواز السفر والوثائق المطلوبة، ومنها غالبًا فحوص طبية.' },
        { title: 'الوصول والتسجيل', text: 'عند الوصول يجب تسجيل الطالب لدى سلطات الهجرة، عادة بمساعدة الجامعة أو السكن الجامعي.' },
      ],
    },
    {
      id: 'scholarships', h2: 'المنح والحصص الحكومية',
      paragraphs: [
        'تمنح الحكومة الروسية كل عام مقاعد ممولة لطلبة أجانب وفق حصص مخصصة لكل بلد. ويتم التقديم عبر بوابة رسمية خلال فترة محددة من السنة، مع انتقاء بحسب البلد والمؤسسة. وهذه المقاعد محدودة وعليها طلب كبير. وهي لا تغني عن خطة تمويل شخصية: فالأفضل أن يكون لديك حل بديل.',
        'نساعدك على إعداد ملفك لهذه البوابة والتقيد بالمواعيد والمقارنة بين هذا المسار والتسجيل بمقابل.',
      ],
    },
    {
      id: 'housing', h2: 'السكن والحياة هناك',
      paragraphs: [
        'تقدم معظم الجامعات أماكن في سكن جامعي بغرف مشتركة وبسعر أقل بكثير من السوق الخاصة. ويستأجر طلبة آخرون شقة، بمفردهم أو بالاشتراك. والحياة الطلابية نشطة، فيها جمعيات وفرق رياضية وأنشطة ثقافية. وقد يكون الطقس قاسيًا في الشتاء، فاستعد بملابس مناسبة.',
      ],
    },
    {
      id: 'city', h2: 'اختيار المدينة والجامعة',
      paragraphs: [
        'لكل مدينة طابعها. فالعواصم الكبرى تقدم جامعات وثقافة وفرصًا أكثر، لكن بتكلفة معيشة أعلى. أما المدن الجامعية الأصغر فهي غالبًا أرخص وأهدأ، وتتمحور فيها الحياة الطلابية حول الحرم الجامعي. ويؤثر في القرار أيضًا الطقس، والبعد عن بلدك، ووجود جالية من الطلبة القادمين من منطقتك، وجودة المكتب الدولي في الجامعة. ونقارن هذه المعايير معك بحسب تخصصك وميزانيتك.',
      ],
    },
    {
      id: 'caution', h2: 'نقاط الحذر التي ينبغي معرفتها',
      bullets: [
        'تحقق من اعتماد الجامعة والتخصص لدى الجهات المختصة.',
        'اسأل عن مدى الاعتراف بالشهادة الروسية في بلدك قبل أن تلتزم، خاصة في الطب والمهن المنظمة.',
        'قد يؤثر السياق الدولي في المدفوعات والرحلات الجوية وشروط الدخول: احصل على معلومات محدّثة قبل السفر.',
        'احذر الوسطاء الذين يعدون بقبول مضمون أو يطلبون مدفوعات دون عقد واضح.',
        'اطلب مراجعة عقد الدراسة وشروط الاسترداد.',
      ],
      after: ['نعرض هذه النقاط بوضوح، لأن القرار المتخذ عن علم يحمي أسرتك من استثمار في غير محله.'],
    },
    {
      id: 'support', h2: 'مرافقتنا في عين المكان وعن بعد',
      paragraphs: [
        'ترافقك إنتلكت قبل السفر في اختيار الجامعة والملف والتأشيرة، ثم عند الوصول في السكن والتسجيل وأولى الإجراءات. ونبقى متاحين خلال أشهرك الأولى حين تكثر الأسئلة، ونتابع معك تفاصيل الإقامة والدراسة حتى تستقر أمورك بالكامل.',
      ],
    },
    {
      id: 'university-questions', h2: 'أسئلة تطرحها على الجامعة قبل التسجيل',
      bullets: [
        'هل المؤسسة والتخصص معتمدان، ومن أي جهة؟',
        'ما لغة التدريس، وماذا تتضمن السنة التحضيرية؟',
        'ما الرسوم الدراسية وطرق الدفع وشروط الاسترداد؟',
        'أين يسكن الطلبة، وفي أي ظروف وبأي سعر؟',
        'هل الشهادة معترف بها في بلدي، وكيف أتحقق؟',
        'أي مصلحة ترافق الطلبة الأجانب عند الوصول؟',
      ],
      after: ['اطلب أجوبة مكتوبة: فالجواب المكتوب يحمي الطرفين ويجنّب أي خلاف لاحق حول ما اتُّفق عليه.'],
    },
  ],
  faq: [
    { q: 'هل يجب أن أتكلم الروسية في البداية؟', a: 'لا. ففي معظم البرامج بالروسية تُخصَّص السنة التحضيرية لتعلم اللغة من الصفر.' },
    { q: 'هل الدراسة في روسيا أرخص؟', a: 'غالبًا ما تكون الرسوم وتكلفة المعيشة أقل من وجهات أخرى، لكنها تختلف بحسب الجامعة والمدينة والتخصص. ونفصّل الميزانية قبل أي التزام.' },
    { q: 'هل ستكون شهادتي معترفًا بها في بلدي؟', a: 'يعتمد ذلك على بلدك والتخصص. يجب التحقق لدى الجهات المختصة قبل التسجيل، خاصة في الطب.' },
    { q: 'هل تضمنون الحصول على التأشيرة؟', a: 'لا. القرار بيد السلطات القنصلية. ونحضّر ملفًا كاملًا ومتسقًا لرفع حظوظك.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
