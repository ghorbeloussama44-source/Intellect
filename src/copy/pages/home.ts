import type { ContentSet, HomeContent } from '../types';

const fr: HomeContent = {
  nav: 'Accueil',
  title: 'Intellect — Cours d’allemand A1 à C1, médecine et études en Allemagne et en Russie',
  description: 'Intellect accompagne les étudiants : cours d’allemand de A1 à C1, préparation médecine en Allemagne, inscription et suivi pour étudier en Allemagne ou en Russie.',
  h1: 'Apprenez l’allemand, réalisez vos études et votre avenir en Europe',
  lead: 'Intellect vous accompagne dans votre parcours vers l’Allemagne et la Russie, avec des formations adaptées et un suivi personnalisé.',
  hero: {
    h1a: 'Apprenez', h1b: 'l’allemand,', h1c: 'réalisez vos études et votre avenir en Europe',
    lead: 'Intellect vous accompagne dans votre parcours vers l’Allemagne et la Russie, avec des formations adaptées et un suivi personnalisé.',
    points: ['Formation en allemand de A1 à B1 et C1', 'Préparation médecine en Allemagne', 'Accompagnement en Russie et en Allemagne'],
    script: ['Allemagne', 'Russie', 'Votre réussite,', 'notre mission'],
  },
  services: {
    eyebrow: 'Nos services', title: 'Des solutions complètes pour chaque étape de votre projet',
    text: 'De l’apprentissage de la langue à l’intégration dans votre pays d’études, nous vous accompagnons à chaque étape pour faire de votre rêve une réalité.',
    cards: [
      { id: 'german-courses', title: 'Cours d’allemand', sub: 'A1 – B1 – C1', items: ['Cours intensifs et flexibles', 'Préparation aux examens (Goethe, telc, etc.)', 'Suivi pédagogique personnalisé'] },
      { id: 'medicine-germany', title: 'Médecine en Allemagne', sub: 'pour les médecins diplômés', items: ['Conseils et orientation', 'Dossier de reconnaissance', 'Préparation linguistique et aux examens (FSP, KP)'] },
      { id: 'study-russia', title: 'Étudier en Russie', items: ['Inscription universitaire', 'Logement (dortoirs / appartements)', 'Accompagnement sur place', 'Aide aux démarches administratives'] },
      { id: 'student-support', title: 'Accompagnement complet', items: ['Conseil personnalisé', 'Suivi avant et après l’arrivée', 'Aide au visa et aux documents', 'Intégration et vie étudiante'] },
    ],
  },
  levels: { eyebrow: 'Nos formations', title: 'Cours d’allemand de A1 à B1 et C1', text: 'Maîtrisez la langue allemande avec nos programmes adaptés à votre niveau et à vos objectifs.', link: 'Voir tous les cours' },
  why: {
    eyebrow: 'Pourquoi choisir Intellect ?', title: 'Une équipe engagée à vos côtés',
    items: ['Accompagnement personnalisé', 'Partenariats universitaires', 'Présence en Russie et en Allemagne', 'Taux de réussite élevé'],
    script: ['Plus qu’une agence,', 'un partenaire pour la vie'],
  },
  contact: { eyebrow: 'Contact', title: 'Demandez un conseil gratuit', text: 'Dites-nous où vous en êtes, nous vous répondons rapidement avec un plan d’action adapté.' },
  sections: [
    {
      id: 'approche', h2: 'Une agence qui vous accompagne de la première leçon à l’arrivée',
      paragraphs: [
        'Intellect est une agence d’accompagnement étudiant qui aide les jeunes à construire un projet d’études en Allemagne ou en Russie. Notre travail commence souvent bien avant le départ : choisir la bonne filière, atteindre le niveau de langue exigé, constituer un dossier complet, puis préparer l’arrivée et l’installation. À chaque étape, un interlocuteur identifié connaît votre situation et répond à vos questions.',
        'Un projet d’études réussit lorsque la langue, l’administratif et la vie quotidienne sont préparés ensemble. Un excellent niveau d’allemand ne sert à rien si le dossier de visa est incomplet, et un dossier parfait ne protège pas d’une arrivée mal anticipée. C’est pourquoi nos cours d’allemand et notre accompagnement administratif forment un seul parcours, pensé de bout en bout.',
      ],
    },
    {
      id: 'deroulement', h2: 'Comment se déroule l’accompagnement',
      steps: [
        { title: 'Un premier échange', text: 'Nous faisons le point sur votre diplôme, votre niveau de langue, la filière souhaitée et votre calendrier. Cet échange est gratuit et sans engagement.' },
        { title: 'Un plan personnalisé', text: 'Nous vous proposons un parcours : niveau de départ en allemand, examens à passer, universités ou programmes à viser, étapes administratives et dates limites à respecter.' },
        { title: 'La préparation', text: 'Vous suivez vos cours pendant que nous construisons le dossier avec vous : traductions, légalisations, lettres, candidatures et démarches de visa.' },
        { title: 'Le départ et l’installation', text: 'Nous vous aidons à organiser le voyage, le logement et les premières démarches sur place, puis nous restons disponibles après votre arrivée.' },
      ],
    },
    {
      id: 'allemand', h2: 'Pourquoi l’allemand ouvre autant de portes',
      paragraphs: [
        'L’Allemagne accueille chaque année de nombreux étudiants internationaux et propose des formations dans un grand nombre d’universités publiques. Pour la plupart des cursus enseignés en allemand, un niveau B2 à C1 est demandé et prouvé par un examen reconnu comme le TestDaF, le DSH ou le telc. Apprendre l’allemand tôt, avec méthode, est donc l’investissement le plus utile de votre projet. Les frais et les conditions varient selon les régions et les établissements : nous vous aidons à vérifier chaque point avant de vous engager.',
        'Les niveaux A1 à C1 suivent le Cadre européen commun de référence pour les langues. Nos cours couvrent le parcours complet : A1 et A2 pour poser les bases, B1 pour devenir autonome au quotidien, C1 pour suivre un cursus universitaire.',
      ],
    },
    {
      id: 'destinations', h2: 'Deux destinations, deux logiques',
      paragraphs: [
        'L’Allemagne séduit par ses universités, sa recherche et ses filières techniques et médicales. L’admission y est exigeante, surtout en médecine, et demande de l’anticipation. La Russie propose de son côté des programmes accessibles depuis l’étranger, souvent précédés d’une année préparatoire de langue, dans un cadre de vie étudiant abordable.',
        'Nous vous aidons à comparer honnêtement ces options et à choisir celle qui correspond à votre profil, sans promesse irréaliste.',
      ],
    },
    {
      id: 'engagements', h2: 'Nos engagements envers les étudiants et leurs familles',
      bullets: [
        'Des conseils honnêtes, y compris quand la bonne réponse est « pas encore ».',
        'Une information à jour sur les exigences des universités et des autorités.',
        'Un suivi avant et après l’arrivée, pas seulement jusqu’à l’inscription.',
        'Un accompagnement dans votre langue : français, anglais ou arabe.',
      ],
    },
    {
      id: 'familles', h2: 'Ce que les familles nous demandent le plus souvent',
      bullets: [
        'Quel budget total prévoir, et ce qui est payé à qui ?',
        'Combien de temps faut-il pour que le projet aboutisse ?',
        'Que se passe-t-il si l’admission ou le visa est refusé ?',
        'Comment suivre l’avancement du dossier ?',
      ],
      after: ['Nous répondons à ces questions dès le premier échange, avec des éléments concrets.'],
    },
  ],
};

const en: HomeContent = {
  nav: 'Home',
  title: 'Intellect — German courses A1 to C1, medicine and studies in Germany and Russia',
  description: 'Intellect supports students: German courses from A1 to C1, medicine preparation in Germany, admission help and follow-up to study in Germany or Russia.',
  h1: 'Learn German, build your studies and your future in Europe',
  lead: 'Intellect supports you on your path to Germany and Russia, with tailored courses and personal follow-up.',
  hero: {
    h1a: 'Learn', h1b: 'German,', h1c: 'build your studies and your future in Europe',
    lead: 'Intellect supports you on your path to Germany and Russia, with tailored courses and personal follow-up.',
    points: ['German courses from A1 to B1 and C1', 'Medicine preparation in Germany', 'Support in Russia and Germany'],
    script: ['Germany', 'Russia', 'Your success,', 'our mission'],
  },
  services: {
    eyebrow: 'Our services', title: 'Complete solutions for every step of your project',
    text: 'From learning the language to settling into your study country, we support you at every step to make your dream a reality.',
    cards: [
      { id: 'german-courses', title: 'German courses', sub: 'A1 – B1 – C1', items: ['Intensive and flexible classes', 'Exam preparation (Goethe, telc, etc.)', 'Personalised academic follow-up'] },
      { id: 'medicine-germany', title: 'Medicine in Germany', sub: 'for qualified doctors', items: ['Advice and guidance', 'Recognition file', 'Language and exam preparation (FSP, KP)'] },
      { id: 'study-russia', title: 'Study in Russia', items: ['University enrolment', 'Housing (dorms / apartments)', 'On-site support', 'Help with administrative procedures'] },
      { id: 'student-support', title: 'Full support', items: ['Personalised advice', 'Follow-up before and after arrival', 'Visa and document assistance', 'Integration and student life'] },
    ],
  },
  levels: { eyebrow: 'Our courses', title: 'German courses from A1 to B1 and C1', text: 'Master German with programmes tailored to your level and goals.', link: 'See all courses' },
  why: {
    eyebrow: 'Why choose Intellect?', title: 'A dedicated team by your side',
    items: ['Personalised support', 'University partnerships', 'Presence in Russia and Germany', 'High success rate'],
    script: ['More than an agency,', 'a partner for life'],
  },
  contact: { eyebrow: 'Contact', title: 'Ask for free advice', text: 'Tell us where you stand and we will reply quickly with a tailored action plan.' },
  sections: [
    {
      id: 'approach', h2: 'An agency by your side from the first lesson to your arrival',
      paragraphs: [
        'Intellect is a student support agency that helps young people build a study project in Germany or Russia. Our work often starts long before departure: choosing the right field, reaching the required language level, assembling a complete application, then preparing the arrival and the move. At every stage, a named contact knows your situation and answers your questions.',
        'A study project succeeds when language, paperwork and daily life are prepared together. An excellent level of German is of little use if the visa file is incomplete, and a perfect file does not protect you from an arrival nobody planned for. That is why our German courses and our administrative support form a single journey, designed from end to end.',
      ],
    },
    {
      id: 'process', h2: 'How the support works',
      steps: [
        { title: 'A first conversation', text: 'We review your diploma, your language level, the field you want and your timeline. This conversation is free and carries no obligation.' },
        { title: 'A personal plan', text: 'We propose a route: your starting level in German, the exams to take, the universities or programmes to aim for, the administrative steps and the deadlines to respect.' },
        { title: 'Preparation', text: 'You attend your classes while we build the application with you: translations, certifications, letters, applications and visa procedures.' },
        { title: 'Departure and settling in', text: 'We help you organise the journey, the housing and the first formalities on site, and we stay available after you arrive.' },
      ],
    },
    {
      id: 'german', h2: 'Why German opens so many doors',
      paragraphs: [
        'Germany welcomes many international students every year and offers programmes at a large number of public universities. For most degrees taught in German, a B2 to C1 level is required and proven by a recognised exam such as TestDaF, DSH or telc. Learning German early and methodically is therefore the most useful investment in your project. Fees and conditions vary by region and institution, and we help you check every point before you commit.',
        'Levels A1 to C1 follow the Common European Framework of Reference for Languages. Our courses cover the full path: A1 and A2 to lay the foundations, B1 to become independent in daily life, and C1 to follow a university programme.',
      ],
    },
    {
      id: 'destinations', h2: 'Two destinations, two logics',
      paragraphs: [
        'Germany stands out for its universities, its research and its technical and medical programmes. Admission is demanding, especially in medicine, and calls for planning. Russia offers programmes that can be applied to from abroad, often preceded by a preparatory language year, in an affordable student environment.',
        'We help you compare these options honestly and choose the one that fits your profile, without unrealistic promises.',
      ],
    },
    {
      id: 'commitments', h2: 'Our commitments to students and their families',
      bullets: [
        'Honest advice, including when the right answer is “not yet”.',
        'Up-to-date information on what universities and authorities require.',
        'Follow-up before and after arrival, not only until enrolment.',
        'Support in your language: French, English or Arabic.',
      ],
    },
    {
      id: 'families', h2: 'What families ask us most often',
      bullets: [
        'What total budget should we plan, and what is paid to whom?',
        'How long does it take for the project to come together?',
        'What happens if admission or the visa is refused?',
        'How can we follow the progress of the file?',
      ],
      after: ['We answer these questions from the first conversation, with concrete elements.'],
    },
  ],
};

const ar: HomeContent = {
  nav: 'الرئيسية',
  title: 'إنتلكت — دورات اللغة الألمانية من A1 إلى C1 والدراسة في ألمانيا وروسيا',
  description: 'ترافق إنتلكت الطلبة: دورات اللغة الألمانية من A1 إلى C1، والتحضير لدراسة الطب في ألمانيا، والمساعدة في التسجيل والمتابعة للدراسة في ألمانيا أو روسيا.',
  h1: 'تعلّم الألمانية وحقّق دراستك ومستقبلك في أوروبا',
  lead: 'ترافقك إنتلكت في مسارك نحو ألمانيا وروسيا، بدورات مناسبة لمستواك ومتابعة شخصية.',
  hero: {
    h1a: 'تعلّم', h1b: 'الألمانية،', h1c: 'وحقّق دراستك ومستقبلك في أوروبا',
    lead: 'ترافقك إنتلكت في مسارك نحو ألمانيا وروسيا، بدورات مناسبة لمستواك ومتابعة شخصية.',
    points: ['دورات اللغة الألمانية من A1 حتى C1', 'التحضير لدراسة الطب في ألمانيا', 'مرافقة في روسيا وألمانيا'],
    script: ['ألمانيا', 'روسيا', 'نجاحك', 'مهمتنا'],
  },
  services: {
    eyebrow: 'خدماتنا', title: 'حلول متكاملة لكل مرحلة من مشروعك',
    text: 'من تعلّم اللغة إلى الاندماج في بلد الدراسة، نرافقك في كل خطوة لنحوّل حلمك إلى واقع.',
    cards: [
      { id: 'german-courses', title: 'دورات اللغة الألمانية', sub: 'A1 – B1 – C1', items: ['دورات مكثفة ومرنة', 'التحضير للامتحانات (Goethe وtelc وغيرها)', 'متابعة بيداغوجية شخصية'] },
      { id: 'medicine-germany', title: 'الطب في ألمانيا', sub: 'للأطباء الحاصلين على مؤهلهم', items: ['نصائح وتوجيه', 'ملف الاعتراف بالمؤهل', 'التحضير اللغوي والامتحانات (FSP وKP)'] },
      { id: 'study-russia', title: 'الدراسة في روسيا', items: ['التسجيل الجامعي', 'السكن (سكن جامعي / شقق)', 'مرافقة في عين المكان', 'مساعدة في الإجراءات الإدارية'] },
      { id: 'student-support', title: 'مرافقة شاملة', items: ['استشارة شخصية', 'متابعة قبل الوصول وبعده', 'مساعدة في التأشيرة والوثائق', 'الاندماج والحياة الطلابية'] },
    ],
  },
  levels: { eyebrow: 'دوراتنا', title: 'دورات اللغة الألمانية من A1 حتى C1', text: 'أتقن اللغة الألمانية مع برامج تناسب مستواك وأهدافك.', link: 'عرض كل الدورات' },
  why: {
    eyebrow: 'لماذا تختار إنتلكت؟', title: 'فريق ملتزم إلى جانبك',
    items: ['مرافقة شخصية', 'شراكات جامعية', 'حضور في روسيا وألمانيا', 'نسبة نجاح عالية'],
    script: ['أكثر من وكالة،', 'شريك للحياة'],
  },
  contact: { eyebrow: 'اتصل بنا', title: 'اطلب استشارة مجانية', text: 'أخبرنا بوضعك الحالي، وسنرد عليك سريعًا بخطة عمل مناسبة.' },
  sections: [
    {
      id: 'approach', h2: 'وكالة ترافقك من الدرس الأول حتى الوصول',
      paragraphs: [
        'إنتلكت وكالة لمرافقة الطلبة تساعد الشباب على بناء مشروع دراسي في ألمانيا أو روسيا. يبدأ عملنا غالبًا قبل السفر بوقت طويل: اختيار التخصص المناسب، وبلوغ المستوى اللغوي المطلوب، وإعداد ملف كامل، ثم التحضير للوصول والاستقرار. وفي كل مرحلة يوجد محاور محدد يعرف وضعك ويجيب عن أسئلتك.',
        'ينجح المشروع الدراسي عندما تُحضَّر اللغة والإجراءات الإدارية والحياة اليومية معًا. فالمستوى الممتاز في الألمانية لا ينفع إذا كان ملف التأشيرة ناقصًا، والملف المثالي لا يحميك من وصول لم يُخطَّط له جيدًا. لذلك تشكّل دورات الألمانية والمرافقة الإدارية لدينا مسارًا واحدًا متكاملًا من البداية إلى النهاية.',
      ],
    },
    {
      id: 'process', h2: 'كيف تسير المرافقة؟',
      steps: [
        { title: 'لقاء أول', text: 'نراجع معك شهادتك ومستواك اللغوي والتخصص الذي ترغب فيه وجدولك الزمني. هذا اللقاء مجاني ولا يلزمك بشيء.' },
        { title: 'خطة شخصية', text: 'نقترح عليك مسارًا يتضمن مستوى البداية في الألمانية، والامتحانات المطلوبة، والجامعات أو البرامج المستهدفة، والخطوات الإدارية والمواعيد النهائية.' },
        { title: 'التحضير', text: 'تتابع دروسك بينما نبني معك الملف: الترجمات والتصديقات والرسائل وطلبات القبول وإجراءات التأشيرة.' },
        { title: 'السفر والاستقرار', text: 'نساعدك في تنظيم السفر والسكن وأولى الإجراءات في عين المكان، ونبقى متاحين بعد وصولك.' },
      ],
    },
    {
      id: 'german', h2: 'لماذا تفتح الألمانية أبوابًا كثيرة؟',
      paragraphs: [
        'تستقبل ألمانيا كل عام عددًا كبيرًا من الطلبة الدوليين، وتقدّم برامج دراسية في عدد كبير من الجامعات الحكومية. وفي معظم التخصصات التي تُدرَّس بالألمانية يُطلب مستوى بين B2 وC1 يثبته امتحان معترف به مثل TestDaF أو DSH أو telc. لذلك فإن تعلّم الألمانية مبكرًا وبمنهجية هو أنفع استثمار في مشروعك. وتختلف الرسوم والشروط باختلاف الولايات والمؤسسات، ونساعدك في التحقق من كل نقطة قبل أن تلتزم.',
        'تتبع المستويات من A1 إلى C1 الإطار الأوروبي المرجعي المشترك للغات. وتغطي دوراتنا المسار كاملًا: A1 و A2 لوضع الأسس، و B1 لتصبح مستقلًا في حياتك اليومية، و C1 لمتابعة دراسة جامعية.',
      ],
    },
    {
      id: 'destinations', h2: 'وجهتان ومنطقان مختلفان',
      paragraphs: [
        'تتميز ألمانيا بجامعاتها وأبحاثها وتخصصاتها التقنية والطبية. والقبول فيها صعب، خاصة في الطب، ويتطلب تخطيطًا مسبقًا. أما روسيا فتقدم برامج يمكن التقدم إليها من الخارج، وغالبًا ما تسبقها سنة تحضيرية للغة، في بيئة طلابية بتكاليف معقولة.',
        'نساعدك على المقارنة بين الخيارين بصدق واختيار ما يناسب ملفك، دون وعود غير واقعية.',
      ],
    },
    {
      id: 'commitments', h2: 'التزاماتنا تجاه الطلبة وأسرهم',
      bullets: [
        'نصائح صادقة، حتى حين تكون الإجابة الصحيحة هي «ليس الآن».',
        'معلومات محدّثة حول ما تشترطه الجامعات والجهات الرسمية.',
        'متابعة قبل الوصول وبعده، وليس فقط حتى التسجيل.',
        'مرافقة بلغتك: الفرنسية أو الإنجليزية أو العربية.',
      ],
    },
    {
      id: 'families', h2: 'ما تسألنا عنه الأسر في أغلب الأحيان',
      bullets: [
        'ما الميزانية الإجمالية التي يجب التخطيط لها، وما الذي يُدفع لمن؟',
        'كم يستغرق المشروع حتى يكتمل؟',
        'ماذا يحدث إذا رُفض القبول أو التأشيرة؟',
        'كيف نتابع تقدم الملف؟',
      ],
      after: ['نجيب عن هذه الأسئلة منذ اللقاء الأول بعناصر ملموسة، حتى تتخذ الأسرة قرارها وهي مطمئنة وعلى بينة من كل التفاصيل.'],
    },
  ],
};

export default { fr, en, ar } satisfies ContentSet<HomeContent>;
