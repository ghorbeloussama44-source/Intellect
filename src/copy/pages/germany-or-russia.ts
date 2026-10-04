import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Allemagne ou Russie ?',
  title: 'Allemagne ou Russie : où étudier ? Comparatif honnête | Intellect',
  description: 'Comparer l’Allemagne et la Russie pour vos études : admission, langue, coûts, reconnaissance du diplôme, vie étudiante et débouchés. Comment choisir selon votre profil.',
  h1: 'Allemagne ou Russie : où étudier ?',
  lead: 'Il n’y a pas de meilleure destination en général, seulement une destination plus adaptée à votre profil, à votre budget et à votre projet professionnel.',
  related: ['study-germany', 'study-russia', 'medicine-germany', 'student-support'],
  sections: [
    {
      id: 'methode', h2: 'Comment comparer sérieusement',
      paragraphs: [
        'Avant de comparer deux pays, il faut savoir ce que l’on cherche. Un diplôme reconnu dans son pays d’origine ? Une expérience internationale pour travailler en Europe ? Un coût maîtrisé ? Une filière précise comme la médecine ? Selon la réponse, le classement des destinations change. Voici les critères sur lesquels nous nous appuyons avec les familles.',
      ],
    },
    {
      id: 'admission', h2: 'L’admission',
      blocks: [
        { h3: 'En Allemagne', paragraphs: ['L’admission dépend de la reconnaissance de votre diplôme, du niveau de langue et, dans les filières très demandées, d’une sélection sévère. Les démarches sont rigoureuses et demandent de l’anticipation, mais elles sont transparentes.'] },
        { h3: 'En Russie', paragraphs: ['Beaucoup de programmes sont accessibles depuis l’étranger, avec une année préparatoire de langue pour ceux qui ne parlent pas russe. La procédure est souvent plus rapide, mais elle demande de vérifier soigneusement l’accréditation de l’établissement.'] },
      ],
    },
    {
      id: 'langue', h2: 'La langue',
      paragraphs: [
        'En Allemagne, la plupart des licences se font en allemand, avec un niveau B2 ou C1 exigé : il faut compter du temps avant d’entrer à l’université. En Russie, une année préparatoire apprend le russe à partir de zéro, puis les études se déroulent en russe ; certains programmes sont proposés en anglais. Dans les deux cas, parler la langue du pays améliore nettement l’expérience et les perspectives professionnelles.',
      ],
    },
    {
      id: 'couts', h2: 'Les coûts',
      paragraphs: [
        'En Allemagne, beaucoup d’universités publiques ne demandent pas de frais de scolarité classiques, mais le coût de la vie, l’assurance maladie obligatoire et la preuve de ressources exigée pour le visa représentent un budget à prévoir. En Russie, les frais de scolarité et le coût de la vie sont souvent plus accessibles, mais ils varient beaucoup selon la ville et l’établissement. Dans les deux cas, comparez le coût total sur la durée du cursus, pas seulement la première année.',
      ],
    },
    {
      id: 'diplome', h2: 'La valeur du diplôme et sa reconnaissance',
      paragraphs: [
        'Un diplôme n’a de valeur pour vous que s’il est reconnu là où vous comptez travailler. Cette question est décisive, surtout pour les professions réglementées comme la médecine. Avant de vous engager dans l’une ou l’autre destination, renseignez-vous auprès des autorités de votre pays sur la reconnaissance des diplômes obtenus à l’étranger, et vérifiez ce que les employeurs de votre région attendent.',
      ],
    },
    {
      id: 'apres', h2: 'Après le diplôme',
      paragraphs: [
        'L’Allemagne permet, sous conditions, de rester une période limitée après le diplôme pour chercher un emploi correspondant à sa formation, ce qui constitue un atout pour qui souhaite s’installer en Europe. En Russie, les perspectives après les études dépendent du secteur et du contexte économique et réglementaire du moment. Dans tous les cas, ces règles évoluent : vérifiez-les à jour.',
      ],
    },
    {
      id: 'questions', h2: 'Les questions à se poser avant de choisir',
      bullets: [
        'Dans quel pays voulez-vous travailler après le diplôme ?',
        'Ce diplôme y sera-t-il reconnu, et par qui pouvez-vous le vérifier ?',
        'Quel est votre niveau de langue aujourd’hui, et combien de temps pouvez-vous y consacrer ?',
        'Quel budget total pouvez-vous financer sur toute la durée, y compris les imprévus ?',
        'Votre famille peut-elle vous soutenir en cas de difficulté, et comment ?',
        'Quelle est votre capacité d’adaptation au climat, à la distance et à la culture ?',
        'Avez-vous un plan de repli si l’admission ou le visa est refusé ?',
      ],
      after: ['Écrire les réponses noir sur blanc, avec votre famille, est souvent plus utile que n’importe quel classement de pays.'],
    },
    {
      id: 'famille', h2: 'Le rôle de la famille dans la décision',
      paragraphs: [
        'Un projet d’études à l’étranger engage souvent toute la famille, sur le plan financier comme sur le plan émotionnel. Impliquez vos proches dès le début : montrez-leur les chiffres, les conditions d’admission et les risques, et écoutez leurs inquiétudes. Une décision partagée est plus solide, car chacun sait à quoi s’attendre, y compris en cas de retard ou d’imprévu. Nous proposons un rendez-vous avec les parents ou les tuteurs lorsque c’est utile, dans la langue qui leur convient.',
      ],
    },
    {
      id: 'profils', h2: 'Quel profil pour quelle destination ?',
      bullets: [
        'Vous visez une carrière en Europe, avec une bonne maîtrise de l’allemand à terme : l’Allemagne est souvent la voie la plus logique.',
        'Vous cherchez un cursus accessible rapidement depuis l’étranger et un coût de vie modéré : la Russie peut convenir, à condition de vérifier l’accréditation et la reconnaissance du diplôme.',
        'Vous visez la médecine : comparez avec une grande attention les conditions d’admission, la langue et la reconnaissance dans votre pays.',
        'Vous hésitez : un test de positionnement en allemand et un bilan de dossier permettent souvent de trancher.',
      ],
      after: ['Nous ne cherchons pas à vous vendre une destination plutôt qu’une autre. Notre intérêt est que vous choisissiez celle où vous irez au bout de votre projet.'],
    },
  ],
  faq: [
    { q: 'Quelle destination est la plus facile ?', a: 'Aucune n’est simple. L’Allemagne demande un haut niveau de langue et d’anticipation, la Russie demande de vérifier soigneusement l’accréditation et la reconnaissance du diplôme.' },
    { q: 'Peut-on candidater aux deux ?', a: 'Oui, rien ne l’interdit, mais il faut organiser le calendrier et les budgets en conséquence. Nous vous aidons à le faire.' },
    { q: 'Quel est le plus important critère de choix ?', a: 'La reconnaissance du diplôme dans le pays où vous voulez travailler, puis votre capacité à financer l’ensemble du cursus.' },
  ],
};

const en: PageContent = {
  nav: 'Germany or Russia?',
  title: 'Germany or Russia: where to study? An honest comparison | Intellect',
  description: 'Comparing Germany and Russia for your studies: admission, language, costs, diploma recognition, student life and prospects. How to choose according to your profile.',
  h1: 'Germany or Russia: where to study?',
  lead: 'There is no best destination in general, only the destination best suited to your profile, your budget and your career plans.',
  related: ['study-germany', 'study-russia', 'medicine-germany', 'student-support'],
  sections: [
    {
      id: 'method', h2: 'How to compare seriously',
      paragraphs: [
        'Before comparing two countries you need to know what you are looking for. A diploma recognised in your home country? International experience to work in Europe? A controlled cost? A specific field such as medicine? Depending on the answer, the ranking of destinations changes. Here are the criteria we rely on with families.',
      ],
    },
    {
      id: 'admission', h2: 'Admission',
      blocks: [
        { h3: 'In Germany', paragraphs: ['Admission depends on the recognition of your diploma, the language level and, in highly demanded fields, severe selection. The procedures are rigorous and require planning, but they are transparent.'] },
        { h3: 'In Russia', paragraphs: ['Many programmes are accessible from abroad, with a preparatory language year for those who do not speak Russian. The procedure is often quicker, but it requires careful checking of the institution’s accreditation.'] },
      ],
    },
    {
      id: 'language', h2: 'Language',
      paragraphs: [
        'In Germany, most bachelor degrees are taught in German, with a B2 or C1 level required: allow time before entering university. In Russia, a preparatory year teaches Russian from scratch, then studies run in Russian; some programmes are offered in English. In both cases, speaking the country’s language clearly improves the experience and career prospects.',
      ],
    },
    {
      id: 'costs', h2: 'Costs',
      paragraphs: [
        'In Germany, many public universities do not charge conventional tuition, but the cost of living, compulsory health insurance and the proof of funds required for the visa represent a budget to plan for. In Russia, tuition and cost of living are often more affordable, but they vary a great deal by city and institution. In both cases, compare the total cost over the length of the programme, not only the first year.',
      ],
    },
    {
      id: 'diploma', h2: 'The value of the diploma and its recognition',
      paragraphs: [
        'A diploma is only worth something to you if it is recognised where you intend to work. This question is decisive, especially for regulated professions such as medicine. Before committing to either destination, ask the authorities of your country about the recognition of diplomas earned abroad, and check what employers in your region expect.',
      ],
    },
    {
      id: 'after', h2: 'After graduation',
      paragraphs: [
        'Germany allows, under conditions, a limited stay after graduation to look for a job matching your training, which is an asset for those who want to settle in Europe. In Russia, prospects after studies depend on the sector and on the economic and regulatory context of the moment. In all cases, these rules change: check them up to date.',
      ],
    },
    {
      id: 'questions', h2: 'Questions to ask yourself before choosing',
      bullets: [
        'In which country do you want to work after graduating?',
        'Will this diploma be recognised there, and who can you check with?',
        'What is your language level today, and how much time can you devote to it?',
        'What total budget can you fund over the whole period, including the unexpected?',
        'Can your family support you in case of difficulty, and how?',
        'How well can you adapt to the climate, the distance and the culture?',
        'Do you have a fallback plan if admission or the visa is refused?',
      ],
      after: ['Writing the answers down with your family is often more useful than any ranking of countries.'],
    },
    {
      id: 'family', h2: 'The role of the family in the decision',
      paragraphs: [
        'A study project abroad often involves the whole family, financially and emotionally. Involve your relatives from the start: show them the figures, the admission conditions and the risks, and listen to their concerns. A shared decision is stronger, because everyone knows what to expect, including in case of delay or the unexpected. We offer a meeting with parents or guardians when useful, in the language that suits them.',
      ],
    },
    {
      id: 'profiles', h2: 'Which profile for which destination?',
      bullets: [
        'You aim for a career in Europe, with good command of German in the long run: Germany is often the most logical route.',
        'You are looking for a programme quickly accessible from abroad and a moderate cost of living: Russia may suit you, provided you check accreditation and diploma recognition.',
        'You aim for medicine: compare admission conditions, language and recognition in your country with great care.',
        'You are hesitating: a German placement test and a file review often help decide.',
      ],
      after: ['We are not trying to sell you one destination over another. Our interest is that you choose the one where you will see your project through.'],
    },
  ],
  faq: [
    { q: 'Which destination is easier?', a: 'Neither is simple. Germany demands a high language level and planning, Russia requires careful checking of accreditation and diploma recognition.' },
    { q: 'Can I apply to both?', a: 'Yes, nothing forbids it, but the calendar and budgets must be organised accordingly. We help you do that.' },
    { q: 'What is the most important criterion?', a: 'Recognition of the diploma in the country where you want to work, then your ability to fund the whole programme.' },
  ],
};

const ar: PageContent = {
  nav: 'ألمانيا أم روسيا؟',
  title: 'ألمانيا أم روسيا: أين تدرس؟ مقارنة صريحة | إنتلكت',
  description: 'مقارنة بين ألمانيا وروسيا للدراسة: القبول واللغة والتكاليف ومعادلة الشهادة والحياة الطلابية والآفاق. وكيف تختار بحسب ملفك.',
  h1: 'ألمانيا أم روسيا: أين تدرس؟',
  lead: 'لا توجد وجهة أفضل بشكل عام، بل وجهة أنسب لملفك وميزانيتك ومشروعك المهني.',
  related: ['study-germany', 'study-russia', 'medicine-germany', 'student-support'],
  sections: [
    {
      id: 'method', h2: 'كيف نقارن بجدية؟',
      paragraphs: [
        'قبل المقارنة بين بلدين يجب أن تعرف ما تبحث عنه. شهادة معترف بها في بلدك الأصلي؟ تجربة دولية للعمل في أوروبا؟ تكلفة مضبوطة؟ تخصص محدد كالطب؟ بحسب الجواب يتغير ترتيب الوجهات. وهذه هي المعايير التي نعتمد عليها مع الأسر.',
      ],
    },
    {
      id: 'admission', h2: 'القبول',
      blocks: [
        { h3: 'في ألمانيا', paragraphs: ['يعتمد القبول على معادلة شهادتك والمستوى اللغوي، وفي التخصصات التي عليها طلب كبير على انتقاء صارم. والإجراءات دقيقة وتتطلب تخطيطًا مسبقًا، لكنها شفافة.'] },
        { h3: 'في روسيا', paragraphs: ['كثير من البرامج متاح من الخارج، مع سنة تحضيرية للغة لمن لا يتكلم الروسية. والإجراء غالبًا أسرع، لكنه يتطلب التحقق بعناية من اعتماد المؤسسة.'] },
      ],
    },
    {
      id: 'language', h2: 'اللغة',
      paragraphs: [
        'في ألمانيا تُدرَّس معظم برامج الإجازة بالألمانية ويُشترط مستوى B2 أو C1، فاترك وقتًا قبل دخول الجامعة. وفي روسيا تعلّم سنة تحضيرية الروسية من الصفر، ثم تجري الدراسة بالروسية، وتُقدَّم بعض البرامج بالإنجليزية. وفي الحالتين، فإن إتقان لغة البلد يحسّن التجربة والآفاق المهنية بوضوح.',
      ],
    },
    {
      id: 'costs', h2: 'التكاليف',
      paragraphs: [
        'في ألمانيا لا تفرض جامعات حكومية كثيرة رسومًا دراسية تقليدية، لكن تكلفة المعيشة والتأمين الصحي الإلزامي وإثبات الموارد المطلوب للتأشيرة تمثل ميزانية يجب التخطيط لها. وفي روسيا تكون الرسوم الدراسية وتكلفة المعيشة غالبًا في المتناول أكثر، لكنها تختلف كثيرًا بحسب المدينة والمؤسسة. وفي الحالتين قارن التكلفة الإجمالية على مدى البرنامج كله، وليس السنة الأولى فقط.',
      ],
    },
    {
      id: 'diploma', h2: 'قيمة الشهادة والاعتراف بها',
      paragraphs: [
        'لا قيمة للشهادة بالنسبة إليك إلا إذا كانت معترفًا بها حيث تنوي العمل. وهذا السؤال حاسم، خاصة بالنسبة إلى المهن المنظمة كالطب. وقبل الالتزام بأي من الوجهتين اسأل سلطات بلدك عن الاعتراف بالشهادات المحصلة في الخارج، وتحقق مما ينتظره أرباب العمل في منطقتك.',
      ],
    },
    {
      id: 'after', h2: 'بعد التخرج',
      paragraphs: [
        'تتيح ألمانيا، بشروط، البقاء مدة محدودة بعد التخرج للبحث عن عمل يناسب التكوين، وهو ميزة لمن يريد الاستقرار في أوروبا. أما في روسيا فتعتمد الآفاق بعد الدراسة على القطاع وعلى السياق الاقتصادي والتنظيمي في حينه. وفي كل الأحوال تتغير هذه القواعد، فتحقق منها بشكل محدّث.',
      ],
    },
    {
      id: 'questions', h2: 'أسئلة تطرحها على نفسك قبل الاختيار',
      bullets: [
        'في أي بلد تريد العمل بعد التخرج؟',
        'هل ستكون هذه الشهادة معترفًا بها هناك، ولدى من يمكنك التحقق؟',
        'ما مستواك اللغوي اليوم، وكم من الوقت تستطيع تخصيصه له؟',
        'ما الميزانية الإجمالية التي تستطيع تمويلها طوال المدة، بما في ذلك الطوارئ؟',
        'هل تستطيع أسرتك دعمك عند الصعوبة، وكيف؟',
        'ما قدرتك على التأقلم مع الطقس والبعد والثقافة؟',
        'هل لديك خطة بديلة إذا رُفض القبول أو التأشيرة؟',
      ],
      after: ['وكتابة الإجابات مع أسرتك على الورق أنفع في الغالب من أي ترتيب للدول، لأنها تضعك أمام الواقع الذي ستعيشه فعلًا، وتجعل القرار قراركم جميعًا وليس قرارًا متسرعًا أو مبنيًا على انطباعات عابرة.'],
    },
    {
      id: 'family', h2: 'دور الأسرة في القرار',
      paragraphs: [
        'غالبًا ما يلزم مشروع الدراسة في الخارج الأسرة كلها، ماليًا وعاطفيًا. أشرك أقاربك منذ البداية: اعرض عليهم الأرقام وشروط القبول والمخاطر، واستمع إلى مخاوفهم. فالقرار المشترك أمتن، لأن كل شخص يعرف ما ينتظره، بما في ذلك في حالة التأخير أو الطارئ. ونقترح لقاءً مع الوالدين أو الأوصياء عند الحاجة، باللغة التي تناسبهم، حتى يفهم الجميع المسار والالتزامات والمواعيد ويشاركوا في الاختيار عن اقتناع.',
      ],
    },
    {
      id: 'profiles', h2: 'أي ملف لأي وجهة؟',
      bullets: [
        'تستهدف مسارًا مهنيًا في أوروبا مع إتقان جيد للألمانية على المدى البعيد: ألمانيا هي غالبًا الطريق الأكثر منطقية.',
        'تبحث عن برنامج متاح بسرعة من الخارج وعن تكلفة معيشة معتدلة: قد تناسبك روسيا، شريطة التحقق من الاعتماد ومن معادلة الشهادة.',
        'تستهدف الطب: قارن بعناية كبيرة شروط القبول واللغة والاعتراف في بلدك.',
        'أنت متردد: اختبار تحديد المستوى في الألمانية ومراجعة الملف يساعدان غالبًا على الحسم.',
      ],
      after: ['لا نسعى إلى أن نبيعك وجهة على حساب أخرى. مصلحتنا أن تختار الوجهة التي ستُكمل فيها مشروعك حتى النهاية.'],
    },
  ],
  faq: [
    { q: 'أي وجهة أسهل؟', a: 'لا واحدة منهما بسيطة. ألمانيا تتطلب مستوى لغويًا عاليًا وتخطيطًا مسبقًا، وروسيا تتطلب التحقق بعناية من الاعتماد ومن معادلة الشهادة.' },
    { q: 'هل يمكن التقدم إلى الوجهتين؟', a: 'نعم، لا شيء يمنع ذلك، لكن يجب تنظيم الجدول الزمني والميزانيات وفقًا لذلك. ونساعدك على ذلك.' },
    { q: 'ما أهم معيار للاختيار؟', a: 'الاعتراف بالشهادة في البلد الذي تريد العمل فيه، ثم قدرتك على تمويل البرنامج كاملًا.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
