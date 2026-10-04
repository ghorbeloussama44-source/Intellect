import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Allemand B1',
  title: 'Cours d’allemand B1 : devenir autonome et passer le Goethe ou le telc | Intellect',
  description: 'Cours d’allemand niveau B1 avec Intellect : grammaire, expression orale et écrite, préparation aux examens Goethe-Zertifikat B1, telc Deutsch B1 et ÖSD.',
  h1: 'Cours d’allemand B1 : devenir autonome',
  lead: 'Le B1 est le cap où l’allemand cesse d’être un exercice scolaire et devient un outil de vie. Nous vous aidons à le franchir et à le certifier.',
  related: ['german-a1-a2', 'german-c1', 'german-courses', 'student-visa-germany'],
  sections: [
    {
      id: 'niveau', h2: 'Ce que signifie le niveau B1',
      paragraphs: [
        'Dans le Cadre européen commun de référence pour les langues, le B1 est le premier niveau de l’utilisateur indépendant. Concrètement, vous comprenez les points essentiels d’une conversation claire sur des sujets familiers comme le travail, les études ou les loisirs. Vous vous débrouillez dans la plupart des situations rencontrées en Allemagne, vous racontez une expérience, vous décrivez un projet et vous donnez brièvement les raisons de votre opinion.',
        'C’est un niveau charnière. Il suffit pour vivre au quotidien, pour certaines démarches administratives et pour beaucoup de formations professionnelles. Pour des études universitaires en allemand, il constitue en revanche une étape vers le B2 puis le C1.',
      ],
    },
    {
      id: 'programme', h2: 'Le programme de nos cours B1',
      bullets: [
        'Les phrases subordonnées : weil, dass, wenn, obwohl, damit, et les propositions relatives.',
        'Le prétérit des verbes fréquents, le parfait et le plus-que-parfait pour raconter au passé.',
        'Le passif simple et le subjonctif II pour exprimer un souhait, un conseil ou une hypothèse polie.',
        'Les déclinaisons de l’adjectif, souvent source d’erreurs, travaillées par la pratique.',
        'Un vocabulaire élargi : travail, santé, environnement, médias, études, administration.',
        'Les connecteurs logiques pour structurer un propos : tout d’abord, en revanche, c’est pourquoi, par conséquent.',
      ],
    },
    {
      id: 'competences', h2: 'Les quatre compétences à travailler',
      blocks: [
        { h3: 'Comprendre à l’oral', paragraphs: ['Annonces, dialogues, courtes interviews et émissions radio. Nous vous entraînons à repérer l’information utile même quand vous ne comprenez pas chaque mot.'] },
        { h3: 'Lire', paragraphs: ['Articles, annonces, courriels et notices. Vous apprenez à repérer le sens général, puis les détails, en un temps limité.'] },
        { h3: 'Parler', paragraphs: ['Présenter un sujet, réagir à une question, organiser un projet à deux. L’épreuve orale du B1 évalue autant la fluidité que la capacité à interagir avec un partenaire.'] },
        { h3: 'Écrire', paragraphs: ['Message informel, lettre formelle, commentaire d’opinion. Nous corrigeons vos productions en détail et vous montrons des modèles de formulation.'] },
      ],
    },
    {
      id: 'examens', h2: 'Les examens du niveau B1',
      paragraphs: [
        'Les certificats les plus courants à ce niveau sont le Goethe-Zertifikat B1, le telc Deutsch B1 et le certificat ÖSD B1. Ils comprennent des épreuves de compréhension orale, de compréhension écrite, d’expression écrite et d’expression orale. Les formats et les durées diffèrent légèrement d’un organisme à l’autre : nous vous présentons chaque épreuve avant de choisir.',
        'Certaines démarches administratives, certains visas et certaines formations en Allemagne demandent la preuve d’un niveau B1. Les conditions changent et dépendent de votre situation : vérifiez-les auprès de l’autorité concernée, et nous vous aidons à anticiper le calendrier.',
      ],
    },
    {
      id: 'preparation', h2: 'Comment nous préparons l’examen',
      paragraphs: [
        'Nous travaillons en trois temps. D’abord, un diagnostic à partir d’une épreuve blanche pour repérer vos points forts et vos points faibles. Ensuite, un entraînement ciblé : si l’expression écrite est fragile, nous y consacrons davantage de séances et de corrections. Enfin, des simulations complètes chronométrées, qui vous habituent au rythme de l’examen.',
        'Les erreurs les plus fréquentes au B1 sont connues : mauvaise gestion du temps, hors-sujet en expression écrite, réponses trop courtes à l’oral. Nous vous donnons des stratégies concrètes pour les éviter.',
      ],
    },
    {
      id: 'erreurs', h2: 'Les erreurs à éviter au niveau B1',
      bullets: [
        'Traduire mot à mot depuis le français ou l’arabe : l’ordre des mots devient incorrect, surtout dans les subordonnées où le verbe part en fin de phrase.',
        'Négliger les terminaisons de l’adjectif parce qu’on se comprend quand même : l’examen les sanctionne.',
        'Écrire des phrases trop longues et mal ponctuées plutôt que des phrases courtes et correctes.',
        'Répondre à l’oral par un seul mot, alors que l’examinateur attend des phrases complètes et des justifications.',
        'Arriver à l’examen sans avoir fait de simulation chronométrée.',
      ],
      after: ['Chacune de ces erreurs se corrige avec un exercice précis. Nous les repérons dès le diagnostic et nous les travaillons de manière ciblée.'],
    },
    {
      id: 'suite', h2: 'Après le B1, vers le C1',
      paragraphs: [
        'Si votre objectif est d’étudier en allemand, le B1 n’est pas la fin du chemin. Le B2 consolide l’autonomie et prépare aux textes plus abstraits, puis le C1 correspond au niveau demandé par de nombreuses universités. Nous vous proposons un parcours continu pour éviter les ruptures de rythme entre les niveaux. Consultez la page consacrée au C1 pour connaître les examens universitaires.',
      ],
    },
  ],
  faq: [
    { q: 'Le B1 suffit-il pour entrer à l’université en Allemagne ?', a: 'En général non. La plupart des cursus enseignés en allemand demandent un niveau B2 ou C1. Le B1 peut en revanche suffire pour certaines formations professionnelles ou démarches administratives.' },
    { q: 'Puis-je rejoindre un groupe B1 si j’ai étudié seul ?', a: 'Oui, après un test de positionnement gratuit qui vérifie vos acquis en grammaire, en compréhension et en expression.' },
    { q: 'Quel organisme choisir : Goethe, telc ou ÖSD ?', a: 'Les trois sont reconnus. Le choix dépend de la démarche visée et des dates de session disponibles près de chez vous. Nous vous aidons à décider.' },
  ],
};

const en: PageContent = {
  nav: 'German B1',
  title: 'German B1 course: become independent and pass Goethe or telc | Intellect',
  description: 'German B1 classes with Intellect: grammar, speaking and writing, and preparation for Goethe-Zertifikat B1, telc Deutsch B1 and ÖSD exams.',
  h1: 'German B1 course: becoming independent',
  lead: 'B1 is the point where German stops being a school exercise and becomes a tool for life. We help you cross it and certify it.',
  related: ['german-a1-a2', 'german-c1', 'german-courses', 'student-visa-germany'],
  sections: [
    {
      id: 'level', h2: 'What level B1 means',
      paragraphs: [
        'In the Common European Framework of Reference for Languages, B1 is the first level of the independent user. In practice, you understand the main points of a clear conversation on familiar topics such as work, study or leisure. You manage in most situations you meet in Germany, tell about an experience, describe a plan and briefly give reasons for your opinion.',
        'It is a pivotal level. It is enough for daily life, for certain administrative procedures and for many vocational programmes. For university studies in German, however, it is a step towards B2 and then C1.',
      ],
    },
    {
      id: 'programme', h2: 'The content of our B1 courses',
      bullets: [
        'Subordinate clauses: weil, dass, wenn, obwohl, damit, and relative clauses.',
        'The simple past of frequent verbs, the perfect and the past perfect to tell stories in the past.',
        'The simple passive and the subjunctive II to express a wish, advice or a polite hypothesis.',
        'Adjective endings, a frequent source of mistakes, mastered through practice.',
        'Wider vocabulary: work, health, environment, media, studies, administration.',
        'Logical connectors to structure a point: first of all, on the other hand, that is why, consequently.',
      ],
    },
    {
      id: 'skills', h2: 'The four skills to work on',
      blocks: [
        { h3: 'Listening', paragraphs: ['Announcements, dialogues, short interviews and radio programmes. We train you to pick out useful information even when you do not understand every word.'] },
        { h3: 'Reading', paragraphs: ['Articles, notices, emails and instructions. You learn to grasp the general meaning first, then the details, within a limited time.'] },
        { h3: 'Speaking', paragraphs: ['Presenting a topic, reacting to a question, planning a project with a partner. The B1 oral exam assesses fluency as much as the ability to interact with a partner.'] },
        { h3: 'Writing', paragraphs: ['Informal message, formal letter, opinion comment. We correct your texts in detail and show you model phrasings.'] },
      ],
    },
    {
      id: 'exams', h2: 'The B1 exams',
      paragraphs: [
        'The most common certificates at this level are the Goethe-Zertifikat B1, telc Deutsch B1 and the ÖSD B1 certificate. They include listening, reading, writing and speaking tests. Formats and durations differ slightly from one organisation to another: we walk you through each test before you choose.',
        'Some administrative procedures, some visas and some programmes in Germany ask for proof of B1. Conditions change and depend on your situation: check them with the authority concerned, and we help you plan the timeline.',
      ],
    },
    {
      id: 'preparation', h2: 'How we prepare for the exam',
      paragraphs: [
        'We work in three stages. First, a diagnosis from a mock test to identify your strengths and weak points. Then targeted training: if writing is fragile, we devote more sessions and corrections to it. Finally, complete timed simulations that get you used to the pace of the exam.',
        'The most frequent B1 mistakes are well known: poor time management, going off topic in writing, and answers that are too short in the oral part. We give you concrete strategies to avoid them.',
      ],
    },
    {
      id: 'mistakes', h2: 'Mistakes to avoid at B1',
      bullets: [
        'Translating word for word from English, French or Arabic: word order becomes wrong, especially in subordinate clauses where the verb goes to the end.',
        'Neglecting adjective endings because you are understood anyway: the exam penalises them.',
        'Writing sentences that are too long and badly punctuated rather than short, correct ones.',
        'Answering orally with a single word, when the examiner expects full sentences and justifications.',
        'Arriving at the exam without ever having done a timed simulation.',
      ],
      after: ['Each of these mistakes is fixed with a specific exercise. We spot them from the diagnosis and work on them in a targeted way.'],
    },
    {
      id: 'next', h2: 'After B1, towards C1',
      paragraphs: [
        'If your goal is to study in German, B1 is not the end of the road. B2 consolidates independence and prepares you for more abstract texts, then C1 is the level many universities ask for. We offer a continuous path so you avoid breaks in rhythm between levels. See the C1 page for university exams.',
      ],
    },
  ],
  faq: [
    { q: 'Is B1 enough to enter a university in Germany?', a: 'Generally not. Most degrees taught in German require B2 or C1. B1 can however be enough for some vocational programmes or administrative procedures.' },
    { q: 'Can I join a B1 group if I studied on my own?', a: 'Yes, after a free placement test that checks your grammar, comprehension and expression.' },
    { q: 'Which organisation should I choose: Goethe, telc or ÖSD?', a: 'All three are recognised. The choice depends on the procedure you aim for and on session dates near you. We help you decide.' },
  ],
};

const ar: PageContent = {
  nav: 'الألمانية B1',
  title: 'دورة الألمانية B1: الاستقلالية واجتياز Goethe أو telc | إنتلكت',
  description: 'دورات الألمانية مستوى B1 مع إنتلكت: القواعد والتعبير الشفهي والكتابي والتحضير لامتحانات Goethe-Zertifikat B1 وtelc Deutsch B1 وÖSD.',
  h1: 'دورة الألمانية B1: أن تصبح مستقلًا',
  lead: 'المستوى B1 هو النقطة التي تتوقف فيها الألمانية عن كونها تمرينًا مدرسيًا وتصبح أداة للحياة. نساعدك على تجاوزه وإثباته بشهادة.',
  related: ['german-a1-a2', 'german-c1', 'german-courses', 'student-visa-germany'],
  sections: [
    {
      id: 'level', h2: 'ماذا يعني المستوى B1؟',
      paragraphs: [
        'في الإطار الأوروبي المرجعي المشترك للغات، المستوى B1 هو أول مستويات المستخدم المستقل. عمليًا، تفهم النقاط الأساسية في حديث واضح حول مواضيع مألوفة كالعمل والدراسة والهوايات. وتتدبر أمرك في معظم المواقف التي تواجهها في ألمانيا، وتروي تجربة، وتصف مشروعًا، وتذكر بإيجاز أسباب رأيك.',
        'إنه مستوى محوري. فهو يكفي للحياة اليومية ولبعض الإجراءات الإدارية ولكثير من التكوينات المهنية. أما للدراسة الجامعية بالألمانية فهو خطوة نحو B2 ثم C1.',
      ],
    },
    {
      id: 'programme', h2: 'محتوى دورات B1',
      bullets: [
        'الجمل الفرعية: weil وdass وwenn وobwohl وdamit، والجمل الموصولة.',
        'الماضي البسيط للأفعال الشائعة، والماضي التام والماضي الأبعد لسرد الأحداث.',
        'المبني للمجهول البسيط وصيغة Konjunktiv II للتعبير عن أمنية أو نصيحة أو افتراض مهذب.',
        'تصريف النعوت، وهو مصدر أخطاء متكرر، يُتقن بالممارسة.',
        'مفردات أوسع: العمل والصحة والبيئة والإعلام والدراسة والإدارة.',
        'أدوات الربط المنطقية لتنظيم الكلام: أولًا، وفي المقابل، ولهذا السبب، ونتيجة لذلك.',
      ],
    },
    {
      id: 'skills', h2: 'المهارات الأربع التي نعمل عليها',
      blocks: [
        { h3: 'الفهم الشفهي', paragraphs: ['إعلانات وحوارات ومقابلات قصيرة وبرامج إذاعية. ندربك على التقاط المعلومة المفيدة حتى حين لا تفهم كل كلمة.'] },
        { h3: 'القراءة', paragraphs: ['مقالات وإعلانات ورسائل إلكترونية وإرشادات. تتعلم إدراك المعنى العام أولًا ثم التفاصيل، في وقت محدود.'] },
        { h3: 'التحدث', paragraphs: ['عرض موضوع، والرد على سؤال، وتنظيم مشروع مع شريك. يقيّم الامتحان الشفهي في B1 الطلاقة بقدر ما يقيّم القدرة على التفاعل مع الشريك.'] },
        { h3: 'الكتابة', paragraphs: ['رسالة غير رسمية، ورسالة رسمية، وتعليق يعبّر عن رأي. نصحح نصوصك بالتفصيل ونعرض عليك نماذج للصياغة.'] },
      ],
    },
    {
      id: 'exams', h2: 'امتحانات المستوى B1',
      paragraphs: [
        'أكثر الشهادات شيوعًا في هذا المستوى هي Goethe-Zertifikat B1 وtelc Deutsch B1 وشهادة ÖSD B1. وتتضمن اختبارات في الفهم الشفهي والفهم الكتابي والتعبير الكتابي والتعبير الشفهي. وتختلف الصيغ والمدد قليلًا من جهة إلى أخرى، ونشرح لك كل اختبار قبل أن تختار.',
        'بعض الإجراءات الإدارية وبعض التأشيرات وبعض التكوينات في ألمانيا تطلب إثبات المستوى B1. والشروط تتغير وتعتمد على وضعك: تحقق منها لدى الجهة المعنية، ونساعدك على تخطيط الجدول الزمني.',
      ],
    },
    {
      id: 'preparation', h2: 'كيف نحضّرك للامتحان؟',
      paragraphs: [
        'نعمل على ثلاث مراحل. أولًا تشخيص انطلاقًا من اختبار تجريبي لتحديد نقاط قوتك وضعفك. ثم تدريب موجّه: إذا كانت الكتابة هشة نخصص لها حصصًا وتصحيحات أكثر. وأخيرًا محاكاة كاملة بزمن محدد تعوّدك على إيقاع الامتحان.',
        'الأخطاء الأكثر تكرارًا في B1 معروفة: سوء إدارة الوقت، والخروج عن الموضوع في الكتابة، والإجابات القصيرة جدًا في الشفهي. ونعطيك استراتيجيات عملية لتجنبها.',
      ],
    },
    {
      id: 'mistakes', h2: 'أخطاء ينبغي تجنبها في المستوى B1',
      bullets: [
        'الترجمة حرفيًا من العربية أو الفرنسية: فيصبح ترتيب الكلمات خاطئًا، خاصة في الجمل الفرعية التي يذهب فيها الفعل إلى آخر الجملة.',
        'إهمال نهايات النعوت بحجة أن الكلام مفهوم على أي حال: فالامتحان يعاقب عليها.',
        'كتابة جمل طويلة جدًا وسيئة الترقيم بدل جمل قصيرة وصحيحة.',
        'الإجابة شفهيًا بكلمة واحدة، بينما ينتظر الممتحن جملًا كاملة وتبريرات.',
        'الوصول إلى الامتحان دون إجراء أي محاكاة بزمن محدد.',
      ],
      after: ['يُصحَّح كل خطأ من هذه الأخطاء بتمرين محدد. ونرصدها منذ التشخيص الأول ونعمل عليها بشكل موجّه، ونتابع معك في كل مرحلة ما إذا اختفى الخطأ فعلًا أم أنه ما زال يتكرر، حتى لا تفاجأ به يوم الامتحان.'],
    },
    {
      id: 'next', h2: 'بعد B1: نحو C1',
      paragraphs: [
        'إذا كان هدفك الدراسة بالألمانية فإن B1 ليس نهاية الطريق. فالمستوى B2 يرسّخ الاستقلالية ويحضّرك لنصوص أكثر تجريدًا، ثم يأتي C1 وهو المستوى الذي تطلبه جامعات كثيرة. نقترح عليك مسارًا متصلًا لتفادي انقطاع الإيقاع بين المستويات. راجع صفحة C1 لمعرفة الامتحانات الجامعية.',
      ],
    },
  ],
  faq: [
    { q: 'هل يكفي المستوى B1 لدخول جامعة في ألمانيا؟', a: 'عمومًا لا. تطلب معظم التخصصات التي تُدرَّس بالألمانية مستوى B2 أو C1. لكن B1 قد يكفي لبعض التكوينات المهنية أو الإجراءات الإدارية.' },
    { q: 'هل أستطيع الالتحاق بمجموعة B1 إذا درست بمفردي؟', a: 'نعم، بعد اختبار تحديد مستوى مجاني يتحقق من معارفك في القواعد والفهم والتعبير.' },
    { q: 'أي جهة أختار: Goethe أم telc أم ÖSD؟', a: 'الثلاث معترف بها. ويعتمد الاختيار على الإجراء الذي تستهدفه وعلى مواعيد الامتحان القريبة منك. ونساعدك على القرار.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
