import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'À propos',
  title: 'À propos d’Intellect : agence d’accompagnement étudiant | Intellect',
  description: 'Découvrez Intellect, agence d’accompagnement étudiant : notre mission, notre méthode, nos engagements et la façon dont nous vous aidons à étudier en Allemagne ou en Russie.',
  h1: 'À propos d’Intellect : votre avenir, notre engagement',
  lead: 'Intellect accompagne les étudiants et leurs familles dans un projet d’études en Allemagne ou en Russie, de l’apprentissage de la langue à l’installation sur place.',
  related: ['student-support', 'german-courses', 'study-germany', 'study-russia'],
  sections: [
    {
      id: 'mission', h2: 'Notre mission',
      paragraphs: [
        'Étudier à l’étranger est l’une des décisions les plus importantes dans la vie d’un jeune. Elle engage un budget familial, plusieurs années de travail et un changement de vie complet. Notre mission est de rendre cette décision éclairée et ce parcours praticable : vous donner une information fiable, un plan réaliste et un interlocuteur qui reste à vos côtés jusqu’à l’installation.',
        'Notre signature, « Votre avenir, notre engagement », résume cette idée. Nous nous engageons sur ce qui dépend de nous : la qualité des conseils, la rigueur des dossiers, la clarté du suivi. Nous ne nous engageons pas sur ce qui dépend des autres, comme l’admission décidée par une université ou le visa décidé par un consulat.',
      ],
    },
    {
      id: 'activites', h2: 'Ce que nous faisons',
      bullets: [
        'Des cours d’allemand de A1 à C1, avec préparation aux examens reconnus.',
        'Une préparation à la médecine en Allemagne : orientation, niveau de langue, dossier et inscription.',
        'Un accompagnement pour étudier en Allemagne ou en Russie : choix de la filière, candidature, visa, logement.',
        'Un suivi avant et après l’arrivée, pour que les premières semaines se passent bien.',
        'Un soutien aux familles, avec une explication claire de chaque étape, de chaque échéance et de chaque paiement, dans une langue qu’elles comprennent.',
      ],
    },
    {
      id: 'methode', h2: 'Notre manière de travailler',
      blocks: [
        { h3: 'Écouter d’abord', paragraphs: ['Chaque projet est différent. Nous commençons par comprendre votre diplôme, votre niveau de langue, votre budget et vos objectifs avant de proposer quoi que ce soit.'] },
        { h3: 'Dire la vérité', paragraphs: ['Si un objectif n’est pas réaliste cette année, nous le disons, et nous proposons une alternative. Une mauvaise nouvelle donnée tôt coûte moins cher qu’une illusion maintenue jusqu’au refus.'] },
        { h3: 'Rester rigoureux', paragraphs: ['Un dossier d’admission ou de visa se joue souvent sur des détails : une traduction, une date, un justificatif. Nous contrôlons chaque pièce avant l’envoi.'] },
        { h3: 'Accompagner dans la durée', paragraphs: ['Le travail ne s’arrête pas à l’inscription. Nous restons disponibles après l’arrivée, quand les questions sont les plus nombreuses.'] },
      ],
    },
    {
      id: 'valeurs', h2: 'Nos engagements',
      bullets: [
        'Des conseils honnêtes, y compris quand la réponse est « pas encore ».',
        'Une information à jour sur les exigences des universités et des autorités, vérifiée à la source.',
        'Un accompagnement dans votre langue : français, anglais ou arabe.',
        'Un budget expliqué avant tout engagement, sans frais cachés.',
        'Le respect de votre famille : nous expliquons chaque étape à ceux qui financent et soutiennent le projet.',
      ],
    },
    {
      id: 'presence', h2: 'Une présence en Allemagne et en Russie',
      paragraphs: [
        'Être présent dans les pays de destination change beaucoup de choses. Cela permet de vérifier les informations sur place, de connaître le fonctionnement concret des établissements et de vous accueillir à l’arrivée. C’est pour cela que nous travaillons avec des interlocuteurs de terrain, et que nos conseils ne reposent pas seulement sur des documents.',
        'Nous entretenons aussi des relations avec des établissements d’enseignement, ce qui nous aide à comprendre leurs procédures et leurs calendriers.',
      ],
    },
    {
      id: 'public', h2: 'À qui nous nous adressons',
      paragraphs: [
        'Nous accompagnons les lycéens qui préparent leur orientation, les bacheliers, les diplômés qui veulent poursuivre en master et les étudiants qui souhaitent changer de pays ou de filière. Nous parlons aussi aux parents, souvent inquiets et légitimement exigeants sur la transparence. Si vous n’avez pas encore de projet précis, c’est un très bon moment pour nous écrire : mieux vaut poser les questions tôt.',
      ],
    },
    {
      id: 'transparence', h2: 'Transparence sur les résultats',
      paragraphs: [
        'Nous ne publions pas de promesses chiffrées que nous ne pourrions pas démontrer. Les résultats dépendent du travail de l’étudiant, des décisions des universités et des conditions du moment. Ce que nous pouvons vous dire, c’est comment nous travaillons, ce que nous contrôlons et ce que nous ne contrôlons pas, et ce que vous pouvez attendre de nous à chaque étape. Cette franchise est une condition de la confiance que les familles nous accordent.',
        'C’est aussi pourquoi nous vous invitons à comparer notre proposition avec d’autres, à poser des questions sur chaque ligne d’un devis et à prendre le temps de décider. Un projet d’études se construit sur plusieurs années : il mérite une décision sereine.',
      ],
    },
    {
      id: 'commencer', h2: 'Comment commencer',
      paragraphs: [
        'Le plus simple est de nous contacter en décrivant votre situation : diplôme, niveau d’allemand, filière souhaitée, pays envisagé et calendrier. Nous vous répondons avec un premier avis et, si cela vous convient, nous organisons un échange pour construire votre plan d’action. Ce premier échange est gratuit et sans engagement.',
      ],
    },
    {
      id: 'attentes', h2: 'Ce que nous attendons de vous',
      bullets: [
        'Des informations exactes sur votre parcours, vos diplômes et votre situation.',
        'Une participation régulière aux cours et aux échanges de suivi.',
        'Des documents fournis dans les délais convenus.',
        'De la franchise sur vos contraintes, notamment financières.',
      ],
      after: ['Un accompagnement fonctionne lorsque chacun joue son rôle.'],
    },
  ],
  faq: [
    { q: 'Intellect est-il une université ou un organisme de formation ?', a: 'Intellect est une agence d’accompagnement étudiant. Nous proposons des cours d’allemand et un accompagnement, mais les diplômes sont délivrés par les universités partenaires ou choisies.' },
    { q: 'Travaillez-vous avec toutes les universités ?', a: 'Nous vous conseillons parmi les établissements adaptés à votre profil et nous vérifions pour chacun les conditions d’admission. Nous ne pouvons pas promettre l’admission dans un établissement précis.' },
  ],
};

const en: PageContent = {
  nav: 'About',
  title: 'About Intellect: a student support agency | Intellect',
  description: 'Discover Intellect, a student support agency: our mission, our method, our commitments and how we help you study in Germany or Russia.',
  h1: 'About Intellect: your future, our commitment',
  lead: 'Intellect supports students and their families in a study project in Germany or Russia, from learning the language to settling in on site.',
  related: ['student-support', 'german-courses', 'study-germany', 'study-russia'],
  sections: [
    {
      id: 'mission', h2: 'Our mission',
      paragraphs: [
        'Studying abroad is one of the most important decisions in a young person’s life. It involves a family budget, several years of work and a complete change of life. Our mission is to make this decision informed and this path workable: to give you reliable information, a realistic plan and a contact who stays by your side until you have settled in.',
        'Our signature, “Your future, our commitment”, sums up this idea. We commit to what depends on us: the quality of advice, the rigour of files, the clarity of follow-up. We do not commit to what depends on others, such as admission decided by a university or a visa decided by a consulate.',
      ],
    },
    {
      id: 'activities', h2: 'What we do',
      bullets: [
        'German courses from A1 to C1, with preparation for recognised exams.',
        'Preparation for medicine in Germany: guidance, language level, file and enrolment.',
        'Support to study in Germany or Russia: choice of field, application, visa, housing.',
        'Follow-up before and after arrival, so the first weeks go well.',
        'Support for families, with a clear explanation of each step, each deadline and each payment, in a language they understand.',
      ],
    },
    {
      id: 'method', h2: 'How we work',
      blocks: [
        { h3: 'Listening first', paragraphs: ['Every project is different. We start by understanding your diploma, language level, budget and goals before proposing anything.'] },
        { h3: 'Telling the truth', paragraphs: ['If a goal is not realistic this year, we say so and propose an alternative. Bad news given early costs less than an illusion kept up until a refusal.'] },
        { h3: 'Staying rigorous', paragraphs: ['An admission or visa file is often decided on details: a translation, a date, a supporting document. We check every item before submission.'] },
        { h3: 'Supporting you over time', paragraphs: ['The work does not stop at enrolment. We remain available after arrival, when questions are most numerous.'] },
      ],
    },
    {
      id: 'values', h2: 'Our commitments',
      bullets: [
        'Honest advice, including when the answer is “not yet”.',
        'Up-to-date information on what universities and authorities require, checked at the source.',
        'Support in your language: French, English or Arabic.',
        'A budget explained before any commitment, with no hidden fees.',
        'Respect for your family: we explain each step to those who fund and support the project.',
      ],
    },
    {
      id: 'presence', h2: 'A presence in Germany and Russia',
      paragraphs: [
        'Being present in the destination countries changes a lot. It lets us verify information on site, know how institutions actually work and welcome you on arrival. That is why we work with contacts on the ground, and why our advice does not rest on documents alone.',
        'We also maintain relationships with educational institutions, which helps us understand their procedures and calendars.',
      ],
    },
    {
      id: 'audience', h2: 'Who we serve',
      paragraphs: [
        'We support school students preparing their orientation, school-leavers, graduates who want to continue to a master’s, and students who wish to change country or field. We also talk to parents, who are often worried and rightly demanding about transparency. If you do not yet have a precise project, it is a very good time to write to us: it is better to ask questions early.',
      ],
    },
    {
      id: 'transparency', h2: 'Transparency about results',
      paragraphs: [
        'We do not publish numerical promises that we could not demonstrate. Results depend on the student’s work, on universities’ decisions and on conditions at the time. What we can tell you is how we work, what we control and what we do not, and what you can expect from us at each stage. This frankness is a condition of the trust families place in us.',
        'This is also why we invite you to compare our proposal with others, to ask questions about every line of a quote and to take the time to decide. A study project is built over several years: it deserves a calm decision.',
      ],
    },
    {
      id: 'start', h2: 'How to get started',
      paragraphs: [
        'The simplest way is to contact us describing your situation: diploma, level of German, desired field, country envisaged and timeline. We reply with a first opinion and, if it suits you, we arrange a conversation to build your action plan. This first conversation is free and carries no obligation.',
      ],
    },
    {
      id: 'expectations', h2: 'What we expect from you',
      bullets: [
        'Accurate information about your background, diplomas and situation.',
        'Regular attendance in classes and follow-up conversations.',
        'Documents provided within the agreed deadlines.',
        'Frankness about your constraints, notably financial ones.',
      ],
      after: ['Support works when everyone plays their part.'],
    },
  ],
  faq: [
    { q: 'Is Intellect a university or a training body?', a: 'Intellect is a student support agency. We offer German courses and support, but degrees are awarded by the partner or chosen universities.' },
    { q: 'Do you work with all universities?', a: 'We advise you among institutions suited to your profile and check each one’s admission conditions. We cannot promise admission to a specific institution.' },
  ],
};

const ar: PageContent = {
  nav: 'من نحن',
  title: 'من نحن: إنتلكت وكالة مرافقة الطلبة | إنتلكت',
  description: 'تعرّف على إنتلكت، وكالة مرافقة الطلبة: مهمتنا ومنهجنا والتزاماتنا وكيف نساعدك على الدراسة في ألمانيا أو روسيا.',
  h1: 'من نحن: إنتلكت، مستقبلك التزامنا',
  lead: 'ترافق إنتلكت الطلبة وأسرهم في مشروع دراسي في ألمانيا أو روسيا، من تعلّم اللغة إلى الاستقرار في عين المكان.',
  related: ['student-support', 'german-courses', 'study-germany', 'study-russia'],
  sections: [
    {
      id: 'mission', h2: 'مهمتنا',
      paragraphs: [
        'الدراسة في الخارج من أهم القرارات في حياة الشاب. فهي تلزم ميزانية أسرية وعدة سنوات من العمل وتغييرًا كاملًا في نمط الحياة. ومهمتنا أن نجعل هذا القرار مستنيرًا وهذا المسار قابلًا للتنفيذ: أن نقدم لك معلومات موثوقة وخطة واقعية ومحاورًا يبقى إلى جانبك حتى تستقر.',
        'وشعارنا «مستقبلك التزامنا» يلخص هذه الفكرة. فنحن نلتزم بما يتوقف علينا: جودة النصيحة ودقة الملفات ووضوح المتابعة. ولا نلتزم بما يتوقف على غيرنا، كالقبول الذي تقرره الجامعة أو التأشيرة التي تقررها القنصلية.',
      ],
    },
    {
      id: 'activities', h2: 'ما نقوم به',
      bullets: [
        'دورات اللغة الألمانية من A1 إلى C1 مع التحضير للامتحانات المعترف بها.',
        'التحضير لدراسة الطب في ألمانيا: التوجيه ومستوى اللغة والملف والتسجيل.',
        'مرافقة للدراسة في ألمانيا أو روسيا: اختيار التخصص وتقديم الطلب والتأشيرة والسكن.',
        'متابعة قبل الوصول وبعده حتى تمر الأسابيع الأولى على ما يرام.',
        'مرافقة الأسر بشرح واضح لكل مرحلة ولكل موعد نهائي ولكل مبلغ يُدفع، بلغة يفهمونها.',
      ],
    },
    {
      id: 'method', h2: 'كيف نعمل',
      blocks: [
        { h3: 'الإصغاء أولًا', paragraphs: ['كل مشروع مختلف. نبدأ بفهم شهادتك ومستواك اللغوي وميزانيتك وأهدافك قبل أن نقترح أي شيء.'] },
        { h3: 'قول الحقيقة', paragraphs: ['إذا لم يكن هدف ما واقعيًا هذه السنة فإننا نقول ذلك ونقترح بديلًا. فالخبر السيئ الذي يُقال مبكرًا أقل كلفة من وهم يُحافَظ عليه حتى الرفض.'] },
        { h3: 'الصرامة', paragraphs: ['غالبًا ما يُحسم ملف القبول أو التأشيرة بتفاصيل: ترجمة أو تاريخ أو وثيقة إثبات. ونراجع كل وثيقة قبل الإرسال.'] },
        { h3: 'المرافقة على المدى الطويل', paragraphs: ['لا يتوقف العمل عند التسجيل. فنبقى متاحين بعد الوصول حين تكثر الأسئلة.'] },
      ],
    },
    {
      id: 'values', h2: 'التزاماتنا',
      bullets: [
        'نصائح صادقة، حتى حين تكون الإجابة «ليس الآن».',
        'معلومات محدّثة حول ما تشترطه الجامعات والجهات الرسمية، مع التحقق منها من المصدر.',
        'مرافقة بلغتك: الفرنسية أو الإنجليزية أو العربية.',
        'ميزانية موضحة قبل أي التزام، دون رسوم خفية.',
        'احترام أسرتك: نشرح كل مرحلة لمن يموّل المشروع ويسانده.',
      ],
    },
    {
      id: 'presence', h2: 'حضور في ألمانيا وروسيا',
      paragraphs: [
        'الحضور في بلدان الوجهة يغيّر أشياء كثيرة. فهو يتيح التحقق من المعلومات في عين المكان ومعرفة طريقة عمل المؤسسات فعليًا واستقبالك عند الوصول. ولهذا نعمل مع محاورين ميدانيين، ولا تقوم نصائحنا على الوثائق وحدها.',
        'ونحافظ أيضًا على علاقات مع مؤسسات تعليمية، مما يساعدنا على فهم إجراءاتها وجداولها الزمنية.',
      ],
    },
    {
      id: 'audience', h2: 'من نخاطب',
      paragraphs: [
        'نرافق التلاميذ الذين يحضّرون توجيههم، وحاملي البكالوريا، والخريجين الراغبين في متابعة الماجستير، والطلبة الذين يريدون تغيير البلد أو التخصص. ونخاطب كذلك الآباء، وهم غالبًا قلقون ومحقون في طلب الشفافية. وإذا لم يكن لديك مشروع دقيق بعد فهذا وقت مناسب جدًا للكتابة إلينا: فمن الأفضل طرح الأسئلة مبكرًا، لأن الوقت المتاح قبل المواعيد النهائية هو أثمن ما تملكه. وسواء كنت تفكر في الدراسة بعد عام أو بعد ثلاث سنوات، فإن التخطيط المبكر يمنحك خيارات أوسع ويخفف من الضغط والتكاليف المفاجئة على الأسرة كلها.',
      ],
    },
    {
      id: 'transparency', h2: 'الشفافية بشأن النتائج',
      paragraphs: [
        'لا ننشر وعودًا رقمية لا نستطيع إثباتها. فالنتائج تتوقف على عمل الطالب وعلى قرارات الجامعات وعلى ظروف اللحظة. وما نستطيع أن نقوله لك هو كيف نعمل، وما الذي نتحكم فيه وما الذي لا نتحكم فيه، وما الذي تنتظره منا في كل مرحلة. وهذه الصراحة شرط للثقة التي تمنحها لنا الأسر، وهي أساس علاقة طويلة المدى قائمة على الوضوح والاحترام المتبادل.',
        'ولهذا ندعوك أيضًا إلى مقارنة عرضنا بعروض أخرى، وإلى طرح الأسئلة عن كل بند في أي عرض سعر، وإلى أخذ الوقت الكافي للقرار. فمشروع الدراسة يُبنى على مدى سنوات عدة، ويستحق قرارًا هادئًا ومدروسًا بعيدًا عن الاستعجال.',
      ],
    },
    {
      id: 'start', h2: 'كيف تبدأ؟',
      paragraphs: [
        'أبسط طريقة هي أن تتصل بنا وتصف وضعك: الشهادة، ومستوى الألمانية، والتخصص المرغوب، والبلد المقصود، والجدول الزمني. نرد عليك برأي أولي، وإذا ناسبك ذلك ننظم لقاءً لبناء خطة عملك. وهذا اللقاء الأول مجاني ولا يلزمك بشيء.',
      ],
    },
    {
      id: 'expectations', h2: 'ما ننتظره منك',
      bullets: [
        'معلومات دقيقة عن مسارك وشهاداتك ووضعك.',
        'مشاركة منتظمة في الدروس ولقاءات المتابعة.',
        'وثائق مقدمة في الآجال المتفق عليها.',
        'صراحة بشأن قيودك، خاصة المالية.',
      ],
      after: ['تنجح المرافقة عندما يؤدي كل طرف دوره، ويكون الحوار بيننا مفتوحًا وصريحًا منذ البداية.'],
    },
  ],
  faq: [
    { q: 'هل إنتلكت جامعة أم هيئة تكوين؟', a: 'إنتلكت وكالة لمرافقة الطلبة. نقدم دورات الألمانية والمرافقة، لكن الشهادات تمنحها الجامعات الشريكة أو المختارة.' },
    { q: 'هل تعملون مع كل الجامعات؟', a: 'ننصحك من بين المؤسسات المناسبة لملفك ونتحقق لكل منها من شروط القبول. ولا نستطيع الوعد بالقبول في مؤسسة بعينها.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
