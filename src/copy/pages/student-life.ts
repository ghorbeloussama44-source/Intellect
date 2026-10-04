import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Logement et vie étudiante',
  title: 'Logement et vie étudiante en Allemagne et en Russie : guide pratique | Intellect',
  description: 'Trouver un logement étudiant en Allemagne ou en Russie : résidences, colocations, budget, pièges à éviter, démarches à l’arrivée et vie quotidienne.',
  h1: 'Logement et vie étudiante : le guide pratique',
  lead: 'Se loger est la première difficulté de nombreux étudiants à l’étranger. Voici les options, les pièges à éviter et les habitudes qui facilitent l’installation.',
  related: ['study-germany', 'study-russia', 'student-support', 'germany-or-russia'],
  sections: [
    {
      id: 'allemagne', h2: 'Se loger en Allemagne',
      paragraphs: [
        'Dans beaucoup de villes universitaires, le logement est la difficulté principale, surtout dans les grandes villes et à l’approche de la rentrée. Il est utile de commencer les recherches dès que l’admission est acquise, voire avant dans certains cas.',
      ],
      blocks: [
        { h3: 'Les résidences étudiantes', paragraphs: ['Gérées par les organismes d’œuvres universitaires, elles proposent des chambres à prix modéré. Les places partent vite et des listes d’attente existent : déposez votre demande le plus tôt possible.'] },
        { h3: 'Les colocations (WG)', paragraphs: ['Très répandues, elles permettent de partager le loyer et de rencontrer du monde. La sélection se fait souvent par un entretien informel avec les colocataires.'] },
        { h3: 'La location privée', paragraphs: ['Elle offre plus d’indépendance mais demande un dossier solide et un dépôt de garantie. Dans les grandes villes, la concurrence est forte.'] },
      ],
    },
    {
      id: 'russie', h2: 'Se loger en Russie',
      paragraphs: [
        'La plupart des universités mettent à disposition des places en résidence universitaire, en chambre partagée à deux ou trois, parfois plus. Le prix est nettement inférieur à celui du marché privé et l’emplacement est pratique. Les équipements varient d’un établissement à l’autre, et il est utile de se renseigner sur l’état des chambres, les cuisines communes, les règles de visite et les horaires.',
        'Certains étudiants choisissent de louer un appartement, seuls ou en colocation, pour plus de confort. À l’arrivée, l’étudiant doit être enregistré à son adresse auprès des autorités migratoires : l’université ou la résidence aide en général à cette formalité.',
      ],
    },
    {
      id: 'pieges', h2: 'Les pièges à éviter',
      bullets: [
        'Payer un loyer ou un dépôt à un inconnu avant d’avoir vu un contrat, surtout par virement vers l’étranger : c’est le schéma le plus courant des arnaques au logement.',
        'Se fier à une annonce trop belle pour être vraie, avec un prix très bas et un propriétaire « absent du pays ».',
        'Signer un contrat dans une langue que vous ne comprenez pas, sans le faire relire.',
        'Oublier de demander un reçu pour chaque paiement.',
        'Négliger les conditions de résiliation et les charges comprises ou non.',
      ],
      after: ['En cas de doute, ne payez rien et demandez-nous un avis : nous relisons les annonces et les contrats avec vous.'],
    },
    {
      id: 'budget', h2: 'Construire son budget mensuel',
      paragraphs: [
        'Au-delà du loyer, prévoyez l’alimentation, les transports, l’assurance maladie, le téléphone, les fournitures, les loisirs et une marge pour les imprévus. Beaucoup d’universités proposent des restaurants universitaires à prix réduit, et le titre de transport inclus dans la contribution semestrielle en Allemagne peut représenter une économie importante.',
        'Établissez votre budget avant le départ et gardez une réserve équivalente à plusieurs semaines de dépenses pour couvrir les débuts, quand certaines charges tombent avant que votre quotidien ne soit organisé.',
      ],
    },
    {
      id: 'arrivee', h2: 'Les premières semaines',
      steps: [
        { title: 'Se déclarer auprès des autorités', text: 'Enregistrement du lieu de résidence selon les règles du pays, avec l’aide de l’université ou de la résidence quand elle existe.' },
        { title: 'S’inscrire à l’université', text: 'Remise des pièces, obtention de la carte étudiante, accès aux plateformes de cours et aux services.' },
        { title: 'Régler l’assurance et la banque', text: 'Confirmer l’assurance maladie et ouvrir un compte pour les paiements courants.' },
        { title: 'Prendre ses repères', text: 'Repérer les transports, la bibliothèque, les restaurants universitaires et les lieux utiles.' },
      ],
    },
    {
      id: 'sante', h2: 'Santé et bien-être loin de chez soi',
      paragraphs: [
        'L’assurance maladie est obligatoire dans les deux pays pour les étudiants étrangers. Repérez dès l’arrivée le médecin ou la clinique de proximité et conservez vos papiers d’assurance sur vous. Le mal du pays est normal, surtout lors du premier hiver : restez en contact avec vos proches, mais construisez aussi des habitudes locales, comme le sport, les sorties de groupe ou le bénévolat. Les universités disposent généralement de services de conseil pour les étudiants qui traversent une période difficile ; n’hésitez pas à les solliciter.',
      ],
    },
    {
      id: 'transports', h2: 'Se déplacer au quotidien',
      paragraphs: [
        'Choisissez un logement en tenant compte du temps de trajet vers l’université : une chambre un peu plus chère mais proche du campus fait souvent gagner du temps, de l’argent en transports et de l’énergie. Dans les deux pays, les transports en commun sont développés dans les grandes villes et des tarifs réduits existent pour les étudiants. Renseignez-vous dès l’arrivée sur les abonnements, les horaires de nuit et les applications locales d’itinéraires, qui facilitent beaucoup les premiers déplacements.',
      ],
    },
    {
      id: 'vie', h2: 'La vie étudiante au quotidien',
      paragraphs: [
        'Les universités proposent des associations, des clubs sportifs, des groupes de discussion en langue étrangère et des événements d’accueil pour les nouveaux arrivants. Participer à ces activités dès les premières semaines est le moyen le plus efficace de rompre l’isolement et de progresser dans la langue du pays. Les programmes de parrainage et les tandems linguistiques, où deux étudiants s’entraident chacun dans la langue de l’autre, sont particulièrement utiles.',
      ],
    },
  ],
  faq: [
    { q: 'Quand commencer à chercher un logement ?', a: 'Dès que l’admission est acquise, voire avant pour déposer une demande de résidence étudiante, car les listes d’attente sont longues.' },
    { q: 'Puis-je réserver un logement depuis mon pays ?', a: 'Oui pour une résidence étudiante en général. Pour le marché privé, méfiez-vous des paiements avant d’avoir un contrat vérifié.' },
    { q: 'Faut-il apporter beaucoup de choses ?', a: 'Voyagez léger : l’essentiel est le dossier administratif et des vêtements adaptés au climat. Le reste s’achète sur place à des prix raisonnables.' },
  ],
};

const en: PageContent = {
  nav: 'Housing and student life',
  title: 'Housing and student life in Germany and Russia: practical guide | Intellect',
  description: 'Finding student housing in Germany or Russia: residences, shared flats, budget, pitfalls to avoid, procedures on arrival and daily life.',
  h1: 'Housing and student life: the practical guide',
  lead: 'Finding somewhere to live is the first difficulty for many students abroad. Here are the options, the pitfalls to avoid and the habits that make settling in easier.',
  related: ['study-germany', 'study-russia', 'student-support', 'germany-or-russia'],
  sections: [
    {
      id: 'germany', h2: 'Finding housing in Germany',
      paragraphs: [
        'In many university cities housing is the main difficulty, especially in big cities and close to the start of term. It is wise to start searching as soon as admission is secured, or even before in some cases.',
      ],
      blocks: [
        { h3: 'Student residences', paragraphs: ['Run by student services organisations, they offer rooms at moderate prices. Places go fast and waiting lists exist: apply as early as possible.'] },
        { h3: 'Shared flats (WG)', paragraphs: ['Very common, they let you share the rent and meet people. Selection is often through an informal interview with the flatmates.'] },
        { h3: 'Private rental', paragraphs: ['It gives more independence but requires a solid file and a security deposit. In big cities, competition is strong.'] },
      ],
    },
    {
      id: 'russia', h2: 'Finding housing in Russia',
      paragraphs: [
        'Most universities provide places in a student residence, in a room shared by two or three people, sometimes more. The price is far below the private market and the location is convenient. Facilities vary from one institution to another, and it is useful to ask about the state of rooms, shared kitchens, visiting rules and hours.',
        'Some students choose to rent an apartment, alone or shared, for more comfort. On arrival, the student must be registered at their address with the migration authorities: the university or residence generally helps with this formality.',
      ],
    },
    {
      id: 'pitfalls', h2: 'Pitfalls to avoid',
      bullets: [
        'Paying rent or a deposit to a stranger before seeing a contract, especially by transfer abroad: this is the most common housing scam pattern.',
        'Trusting a listing that is too good to be true, with a very low price and an owner “away from the country”.',
        'Signing a contract in a language you do not understand without having it reviewed.',
        'Forgetting to ask for a receipt for each payment.',
        'Neglecting termination conditions and whether utilities are included.',
      ],
      after: ['If in doubt, do not pay anything and ask us for an opinion: we review listings and contracts with you.'],
    },
    {
      id: 'budget', h2: 'Building your monthly budget',
      paragraphs: [
        'Beyond rent, plan for food, transport, health insurance, phone, supplies, leisure and a margin for the unexpected. Many universities offer subsidised canteens, and the transport pass included in the semester contribution in Germany can represent a significant saving.',
        'Draw up your budget before leaving and keep a reserve equal to several weeks of spending to cover the start, when some charges fall due before your daily life is organised.',
      ],
    },
    {
      id: 'arrival', h2: 'The first weeks',
      steps: [
        { title: 'Register with the authorities', text: 'Registering your place of residence according to the country’s rules, with help from the university or residence where available.' },
        { title: 'Enrol at the university', text: 'Handing in documents, getting the student card, access to course platforms and services.' },
        { title: 'Sort out insurance and banking', text: 'Confirm health insurance and open an account for everyday payments.' },
        { title: 'Find your bearings', text: 'Locate transport, the library, canteens and useful places.' },
      ],
    },
    {
      id: 'health', h2: 'Health and well-being away from home',
      paragraphs: [
        'Health insurance is compulsory in both countries for foreign students. Locate your nearest doctor or clinic on arrival and keep your insurance papers on you. Homesickness is normal, especially during the first winter: stay in touch with your family, but also build local habits, such as sport, group outings or volunteering. Universities generally have counselling services for students going through a hard time; do not hesitate to use them.',
      ],
    },
    {
      id: 'transport', h2: 'Getting around every day',
      paragraphs: [
        'Choose housing with the travel time to the university in mind: a slightly more expensive room close to campus often saves time, transport money and energy. In both countries public transport is well developed in big cities and reduced fares exist for students. Find out on arrival about passes, night schedules and local journey-planning apps, which make the first trips much easier.',
      ],
    },
    {
      id: 'life', h2: 'Everyday student life',
      paragraphs: [
        'Universities offer societies, sports clubs, foreign-language conversation groups and welcome events for newcomers. Taking part in these activities from the first weeks is the most effective way to break isolation and progress in the language of the country. Buddy programmes and language tandems, where two students help each other in each other’s language, are particularly useful.',
      ],
    },
  ],
  faq: [
    { q: 'When should I start looking for housing?', a: 'As soon as admission is secured, or even before in order to apply for a student residence, because waiting lists are long.' },
    { q: 'Can I book housing from my home country?', a: 'Usually yes for a student residence. For the private market, beware of payments before you have a verified contract.' },
    { q: 'Should I bring a lot of things?', a: 'Travel light: the essentials are your administrative file and clothes suited to the climate. The rest can be bought locally at reasonable prices.' },
  ],
};

const ar: PageContent = {
  nav: 'السكن والحياة الطلابية',
  title: 'السكن والحياة الطلابية في ألمانيا وروسيا: دليل عملي | إنتلكت',
  description: 'كيف تجد سكنًا طلابيًا في ألمانيا أو روسيا: السكن الجامعي والسكن المشترك والميزانية والفخاخ التي يجب تجنبها وإجراءات الوصول والحياة اليومية.',
  h1: 'السكن والحياة الطلابية: الدليل العملي',
  lead: 'العثور على مسكن هو أول صعوبة تواجه كثيرًا من الطلبة في الخارج. إليك الخيارات والفخاخ التي يجب تجنبها والعادات التي تسهّل الاستقرار.',
  related: ['study-germany', 'study-russia', 'student-support', 'germany-or-russia'],
  sections: [
    {
      id: 'germany', h2: 'السكن في ألمانيا',
      paragraphs: [
        'في كثير من المدن الجامعية يمثل السكن الصعوبة الرئيسية، خاصة في المدن الكبرى وقرب بداية العام الدراسي. ومن المفيد أن تبدأ البحث بمجرد تأكيد القبول، بل وقبله في بعض الحالات.',
      ],
      blocks: [
        { h3: 'السكن الجامعي', paragraphs: ['تديره هيئات خدمات الطلبة، وتقدم غرفًا بأسعار معتدلة. وتنفد الأماكن بسرعة وتوجد قوائم انتظار: قدّم طلبك في أقرب وقت ممكن.'] },
        { h3: 'السكن المشترك (WG)', paragraphs: ['وهو منتشر جدًا، ويتيح تقاسم الإيجار والتعرف إلى الناس. وغالبًا ما يتم الانتقاء عبر مقابلة غير رسمية مع زملاء السكن.'] },
        { h3: 'الإيجار الخاص', paragraphs: ['يمنح استقلالية أكبر لكنه يتطلب ملفًا قويًا ووديعة ضمان. وفي المدن الكبرى تكون المنافسة شديدة.'] },
      ],
    },
    {
      id: 'russia', h2: 'السكن في روسيا',
      paragraphs: [
        'توفر معظم الجامعات أماكن في سكن جامعي، في غرفة يتقاسمها شخصان أو ثلاثة، وأحيانًا أكثر. والسعر أقل بكثير من السوق الخاصة والموقع مريح. وتختلف التجهيزات من مؤسسة إلى أخرى، ومن المفيد السؤال عن حالة الغرف والمطابخ المشتركة وقواعد الزيارة والمواعيد.',
        'ويختار بعض الطلبة استئجار شقة، بمفردهم أو بالاشتراك، لمزيد من الراحة. وعند الوصول يجب تسجيل الطالب في عنوانه لدى سلطات الهجرة، وتساعد الجامعة أو السكن الجامعي عادة في هذا الإجراء.',
      ],
    },
    {
      id: 'pitfalls', h2: 'فخاخ يجب تجنبها',
      bullets: [
        'دفع إيجار أو وديعة لشخص مجهول قبل رؤية عقد، خاصة عبر تحويل إلى الخارج: وهذا أشهر نمط من الاحتيال في السكن.',
        'الوثوق بإعلان أجمل من أن يكون حقيقيًا، بسعر منخفض جدًا ومالك «غائب عن البلد».',
        'توقيع عقد بلغة لا تفهمها دون مراجعته.',
        'نسيان طلب إيصال عن كل دفعة.',
        'إهمال شروط فسخ العقد وما إذا كانت التكاليف الإضافية مشمولة.',
      ],
      after: ['وإذا شككت فلا تدفع شيئًا واطلب رأينا: نراجع الإعلانات والعقود معك.'],
    },
    {
      id: 'budget', h2: 'إعداد ميزانيتك الشهرية',
      paragraphs: [
        'إلى جانب الإيجار خطط للغذاء والمواصلات والتأمين الصحي والهاتف واللوازم والترفيه وهامش للطوارئ. وتوفر جامعات كثيرة مطاعم مدعومة، وقد توفر بطاقة النقل المشمولة بمساهمة الفصل الدراسي في ألمانيا مبلغًا مهمًا.',
        'ضع ميزانيتك قبل السفر واحتفظ باحتياطي يعادل مصاريف عدة أسابيع لتغطية البداية، حين تستحق بعض التكاليف قبل أن تنتظم حياتك اليومية.',
      ],
    },
    {
      id: 'arrival', h2: 'الأسابيع الأولى',
      steps: [
        { title: 'التسجيل لدى السلطات', text: 'تسجيل مكان الإقامة وفق قواعد البلد، بمساعدة الجامعة أو السكن حيثما وُجدت.' },
        { title: 'التسجيل في الجامعة', text: 'تقديم الوثائق والحصول على البطاقة الطلابية والولوج إلى منصات الدروس والخدمات.' },
        { title: 'ترتيب التأمين والبنك', text: 'تأكيد التأمين الصحي وفتح حساب للمدفوعات اليومية.' },
        { title: 'اكتشاف المكان', text: 'التعرف إلى المواصلات والمكتبة والمطاعم الجامعية والأماكن المفيدة.' },
      ],
    },
    {
      id: 'health', h2: 'الصحة والراحة النفسية بعيدًا عن الوطن',
      paragraphs: [
        'التأمين الصحي إلزامي في البلدين بالنسبة إلى الطلبة الأجانب. تعرّف عند الوصول إلى أقرب طبيب أو عيادة واحتفظ بأوراق التأمين معك. والحنين إلى الوطن أمر طبيعي، خاصة في الشتاء الأول: حافظ على التواصل مع أسرتك، لكن كوّن أيضًا عادات محلية مثل الرياضة والخروج الجماعي والعمل التطوعي. وتتوفر في الجامعات عادة مصالح للإرشاد النفسي والاجتماعي للطلبة الذين يمرون بفترة صعبة، فلا تتردد في اللجوء إليها، فطلب المساعدة المبكر يجنبك تراكم المشكلات.',
      ],
    },
    {
      id: 'transport', h2: 'التنقل اليومي',
      paragraphs: [
        'اختر سكنك مع مراعاة مدة التنقل إلى الجامعة: فغرفة أغلى قليلًا لكنها قريبة من الحرم الجامعي توفر في الغالب الوقت والمال والجهد. وفي البلدين، تتطور وسائل النقل العمومي في المدن الكبرى وتوجد تعريفات مخفضة للطلبة. استعلم عند الوصول عن الاشتراكات ومواعيد الليل وتطبيقات تخطيط الرحلات المحلية، فهي تسهّل كثيرًا الرحلات الأولى. وإذا كان بإمكانك الاعتماد على الدراجة أو المشي في المسافات القصيرة فهذا يخفف المصاريف ويمنحك فرصة لاكتشاف المدينة.',
      ],
    },
    {
      id: 'life', h2: 'الحياة الطلابية اليومية',
      paragraphs: [
        'تقدم الجامعات جمعيات ونوادي رياضية ومجموعات للحوار بلغات أجنبية وفعاليات ترحيب بالقادمين الجدد. والمشاركة في هذه الأنشطة منذ الأسابيع الأولى هي أنجع وسيلة لكسر العزلة وللتقدم في لغة البلد. وبرامج الإرشاد والتبادل اللغوي، حيث يساعد طالبان بعضهما في لغة كل منهما، مفيدة بشكل خاص، وتتحول غالبًا إلى صداقات تدوم بعد التخرج.',
      ],
    },
  ],
  faq: [
    { q: 'متى أبدأ البحث عن سكن؟', a: 'بمجرد تأكيد القبول، بل وقبله لتقديم طلب سكن جامعي، لأن قوائم الانتظار طويلة.' },
    { q: 'هل أستطيع حجز سكن من بلدي؟', a: 'عادة نعم بالنسبة إلى السكن الجامعي. أما في السوق الخاصة فاحذر من الدفع قبل أن يكون لديك عقد موثوق.' },
    { q: 'هل يجب أن أحمل أشياء كثيرة؟', a: 'سافر بخفة: الأساسي هو ملفك الإداري وملابس مناسبة للطقس. وباقي الأغراض تُشترى هناك بأسعار معقولة.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
