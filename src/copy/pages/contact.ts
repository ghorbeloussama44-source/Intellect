import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'Contact',
  title: 'Contact : demander un conseil gratuit | Intellect',
  description: 'Contactez Intellect pour un conseil gratuit sur les cours d’allemand, la médecine en Allemagne ou les études en Russie : décrivez votre projet, nous vous répondons rapidement.',
  h1: 'Contactez-nous : demandez un conseil gratuit',
  lead: 'Décrivez-nous votre projet en quelques lignes. Nous vous répondons avec un premier avis et un plan d’action adapté à votre niveau, à votre filière et à votre calendrier.',
  related: ['student-support', 'faq', 'german-courses', 'about'],
  sections: [
    {
      id: 'avant', h2: 'Avant de nous écrire',
      paragraphs: [
        'Plus votre message est précis, plus notre première réponse sera utile. Vous n’avez pas besoin d’avoir tout décidé : l’objectif de ce premier échange est justement de clarifier votre situation. Voici les informations qui nous aident le plus.',
      ],
      bullets: [
        'Votre diplôme actuel ou prévu, et l’année d’obtention.',
        'Votre niveau d’allemand, même approximatif, ou le fait que vous débutez.',
        'La filière qui vous intéresse et, si vous le savez, les villes ou universités qui vous attirent.',
        'Le pays envisagé : Allemagne, Russie, ou les deux à comparer.',
        'La date à laquelle vous aimeriez commencer vos études.',
        'Votre contrainte principale : budget, temps, langue ou documents.',
        'Vos questions, même celles qui vous paraissent naïves : il n’y en a pas.',
      ],
    },
    {
      id: 'apres', h2: 'Ce qui se passe après votre message',
      steps: [
        { title: 'Lecture et premier avis', text: 'Un conseiller lit votre message et vous répond avec une première analyse : ce qui est réaliste, ce qui demande du temps et les points à clarifier.' },
        { title: 'Échange', text: 'Si cela vous convient, nous organisons un échange pour approfondir votre projet, répondre à vos questions et, au besoin, proposer un test de positionnement en allemand.' },
        { title: 'Plan d’action', text: 'Vous recevez un plan daté : cours, examens, documents, candidatures, visa. Vous décidez ensuite librement de la suite.' },
      ],
    },
    {
      id: 'documents', h2: 'Les documents utiles pour la suite',
      paragraphs: [
        'Rien n’est à envoyer pour le premier échange. Si vous souhaitez avancer plus vite, vous pouvez préparer ces éléments que nous demanderons ensuite :',
      ],
      bullets: [
        'Copie de votre passeport.',
        'Diplômes et relevés de notes, avec leurs traductions s’ils existent déjà.',
        'Certificats de langue éventuels.',
        'Curriculum vitae.',
      ],
      after: ['Les documents personnels ne sont demandés qu’au moment où ils sont nécessaires, et uniquement pour constituer votre dossier.'],
    },
    {
      id: 'familles', h2: 'Pour les parents et les familles',
      paragraphs: [
        'Si vous écrivez pour votre enfant ou un proche, précisez-le. Nous pouvons organiser un échange avec les parents ou les tuteurs, dans la langue qui vous convient, pour expliquer les étapes, les délais et le budget. Votre implication fait partie d’un projet réussi.',
      ],
    },
    {
      id: 'sujets', h2: 'Les sujets sur lesquels nous pouvons vous aider',
      bullets: [
        'Choisir un niveau d’allemand de départ et planifier la progression jusqu’à l’examen.',
        'Évaluer vos chances en médecine en Allemagne et prévoir des alternatives.',
        'Comparer l’Allemagne et la Russie selon votre profil et votre budget.',
        'Préparer un dossier d’admission, des traductions et des légalisations.',
        'Organiser le visa, l’assurance, le logement et le voyage.',
        'Préparer l’arrivée et les premières semaines sur place.',
      ],
    },
    {
      id: 'questions', h2: 'Des questions que vous pouvez nous poser',
      bullets: [
        'Mon diplôme est-il reconnu pour entrer à l’université visée ?',
        'Quel examen de langue dois-je passer et à quelle date ?',
        'Combien de temps faut-il pour atteindre le niveau demandé ?',
        'Quel budget global dois-je prévoir pour la première année ?',
        'Quelles sont les dates limites de candidature à respecter ?',
        'Que faire si je ne suis pas admis cette année ?',
        'Comment mes parents peuvent-ils suivre l’avancement du dossier ?',
      ],
    },
    {
      id: 'langues', h2: 'Écrivez dans la langue qui vous convient',
      paragraphs: ['Vous pouvez nous écrire en français, en anglais ou en arabe. Nous répondons dans la langue de votre message, afin que vous compreniez chaque détail du plan proposé.'],
    },
    {
      id: 'rendez-vous', h2: 'Ce que vous pouvez attendre du premier rendez-vous',
      paragraphs: [
        'Le premier rendez-vous n’est pas un entretien de vente. C’est un temps de travail où nous regardons ensemble votre situation, vos contraintes et vos objectifs. Vous repartez avec une vision claire de ce qui est possible, de l’ordre dans lequel avancer et de ce qui doit être décidé en priorité. Vous restez libre de poursuivre avec nous ou non.',
      ],
    },
    {
      id: 'conseils', h2: 'Trois conseils pour bien préparer votre projet',
      bullets: [
        'Commencez par la langue : c’est ce qui prend le plus de temps et ce qui conditionne le reste.',
        'Gardez tous vos documents scolaires et officiels en lieu sûr, en version papier et numérique.',
        'Parlez de votre projet à vos proches : leur soutien compte autant que le plan.',
      ],
    },
    {
      id: 'delais', h2: 'Un mot sur les délais',
      paragraphs: [
        'Les démarches d’études à l’étranger prennent du temps, et certaines dates limites sont fixes. Plus vous nous contactez tôt, plus vous avez de choix. Si votre calendrier est déjà serré, indiquez-le clairement dans votre message afin que nous puissions prioriser et vous dire sans détour ce qui reste possible.',
      ],
    },
    {
      id: 'exemple', h2: 'Un exemple de premier message',
      paragraphs: [
        'À titre d’exemple, voici un message qui nous suffit pour vous répondre utilement : « Bonjour, je suis titulaire d’une licence en biologie obtenue en 2024. Mon niveau d’allemand est A2. Je souhaite poursuivre un master en Allemagne à la rentrée prochaine. Mon budget est limité et je voudrais savoir quelles universités sont réalistes pour mon profil, quel examen de langue passer et dans quel ordre faire les démarches. Pouvez-vous me proposer un premier plan ? »',
        'Ce profil est fictif : il illustre simplement le niveau de précision utile.',
      ],
    },
  ],
};

const en: PageContent = {
  nav: 'Contact',
  title: 'Contact: ask for free advice | Intellect',
  description: 'Contact Intellect for free advice on German courses, medicine in Germany or studying in Russia: describe your project and we reply quickly.',
  h1: 'Contact us: ask for free advice',
  lead: 'Describe your project in a few lines. We reply with a first opinion and an action plan suited to your level, your field and your timeline.',
  related: ['student-support', 'faq', 'german-courses', 'about'],
  sections: [
    {
      id: 'before', h2: 'Before you write to us',
      paragraphs: [
        'The more precise your message, the more useful our first reply will be. You do not need to have decided everything: the purpose of this first conversation is precisely to clarify your situation. Here is the information that helps us most.',
      ],
      bullets: [
        'Your current or expected diploma, and the year you obtained it.',
        'Your level of German, even approximate, or the fact that you are a beginner.',
        'The field that interests you and, if you know, the cities or universities that attract you.',
        'The country you have in mind: Germany, Russia, or both to compare.',
        'The date by which you would like to start your studies.',
        'Your main constraint: budget, time, language or documents.',
        'Your questions, even those that seem naive to you: there are none.',
      ],
    },
    {
      id: 'after', h2: 'What happens after your message',
      steps: [
        { title: 'Reading and first opinion', text: 'An adviser reads your message and replies with a first analysis: what is realistic, what takes time and what needs clarifying.' },
        { title: 'Conversation', text: 'If it suits you, we arrange a conversation to go deeper into your project, answer your questions and, if needed, suggest a German placement test.' },
        { title: 'Action plan', text: 'You receive a dated plan: courses, exams, documents, applications, visa. You then decide freely what to do next.' },
      ],
    },
    {
      id: 'documents', h2: 'Documents useful for later',
      paragraphs: [
        'Nothing needs to be sent for the first conversation. If you want to move faster, you can prepare these items, which we will request afterwards:',
      ],
      bullets: [
        'A copy of your passport.',
        'Diplomas and transcripts, with their translations if they already exist.',
        'Any language certificates.',
        'Your CV.',
      ],
      after: ['Personal documents are only requested at the moment they are needed, and only to build your file.'],
    },
    {
      id: 'families', h2: 'For parents and families',
      paragraphs: [
        'If you are writing for your child or a relative, say so. We can arrange a conversation with parents or guardians, in the language that suits you, to explain the steps, deadlines and budget. Your involvement is part of a successful project.',
      ],
    },
    {
      id: 'topics', h2: 'Topics we can help you with',
      bullets: [
        'Choosing a starting level in German and planning progress up to the exam.',
        'Assessing your chances in medicine in Germany and planning alternatives.',
        'Comparing Germany and Russia according to your profile and budget.',
        'Preparing an admission file, translations and legalisations.',
        'Organising the visa, insurance, housing and travel.',
        'Preparing your arrival and the first weeks on site.',
      ],
    },
    {
      id: 'questions', h2: 'Questions you can ask us',
      bullets: [
        'Is my diploma recognised to enter the university I target?',
        'Which language exam should I take and on what date?',
        'How long does it take to reach the required level?',
        'What overall budget should I plan for the first year?',
        'What application deadlines must I meet?',
        'What if I am not admitted this year?',
        'How can my parents follow the progress of the file?',
      ],
    },
    {
      id: 'languages', h2: 'Write in the language that suits you',
      paragraphs: ['You can write to us in French, English or Arabic. We reply in the language of your message so that you understand every detail of the proposed plan.'],
    },
    {
      id: 'meeting', h2: 'What to expect from the first meeting',
      paragraphs: [
        'The first meeting is not a sales interview. It is a working session in which we look together at your situation, constraints and goals. You leave with a clear view of what is possible, the order in which to proceed and what must be decided first. You remain free to continue with us or not.',
      ],
    },
    {
      id: 'tips', h2: 'Three tips to prepare your project well',
      bullets: [
        'Start with the language: it takes the most time and conditions everything else.',
        'Keep all your school and official documents safe, on paper and in digital form.',
        'Talk about your project with your family: their support matters as much as the plan.',
      ],
    },
    {
      id: 'timing', h2: 'A word on timing',
      paragraphs: [
        'Study procedures abroad take time, and some deadlines are fixed. The earlier you contact us, the more choices you have. If your calendar is already tight, say so clearly in your message so that we can prioritise and tell you frankly what is still possible.',
      ],
    },
    {
      id: 'example', h2: 'An example of a first message',
      paragraphs: [
        'As an example, here is a message that is enough for us to reply usefully: “Hello, I hold a bachelor’s degree in biology obtained in 2024. My level of German is A2. I would like to pursue a master’s in Germany next autumn. My budget is limited and I would like to know which universities are realistic for my profile, which language exam to take and in what order to do the procedures. Can you suggest a first plan?”',
        'This profile is fictional: it simply illustrates the useful level of detail.',
      ],
    },
  ],
};

const ar: PageContent = {
  nav: 'اتصل بنا',
  title: 'اتصل بنا: اطلب استشارة مجانية | إنتلكت',
  description: 'تواصل مع إنتلكت للحصول على استشارة مجانية حول دورات الألمانية أو الطب في ألمانيا أو الدراسة في روسيا: صف مشروعك وسنرد عليك بسرعة.',
  h1: 'اتصل بنا: اطلب استشارة مجانية',
  lead: 'صف لنا مشروعك في بضعة أسطر. نرد عليك برأي أولي وخطة عمل تناسب مستواك وتخصصك وجدولك الزمني.',
  related: ['student-support', 'faq', 'german-courses', 'about'],
  sections: [
    {
      id: 'before', h2: 'قبل أن تكتب إلينا',
      paragraphs: [
        'كلما كانت رسالتك أدق كان ردنا الأول أنفع. ولا يلزم أن تكون قد قررت كل شيء: فهدف هذا اللقاء الأول هو بالضبط توضيح وضعك. وإليك المعلومات التي تفيدنا أكثر.',
      ],
      bullets: [
        'شهادتك الحالية أو المتوقعة وسنة الحصول عليها.',
        'مستواك في الألمانية ولو تقريبًا، أو كونك مبتدئًا.',
        'التخصص الذي يهمك، وإن كنت تعرف، المدن أو الجامعات التي تستهويك.',
        'البلد الذي تفكر فيه: ألمانيا أو روسيا أو الاثنان للمقارنة.',
        'التاريخ الذي تود أن تبدأ فيه دراستك.',
        'قيدك الرئيسي: الميزانية أو الوقت أو اللغة أو الوثائق.',
        'أسئلتك، حتى تلك التي تبدو لك ساذجة: فلا وجود لسؤال ساذج عندنا، وكل سؤال يستحق جوابًا واضحًا ومفصلًا.',
      ],
    },
    {
      id: 'after', h2: 'ماذا يحدث بعد رسالتك؟',
      steps: [
        { title: 'القراءة والرأي الأولي', text: 'يقرأ مستشار رسالتك ويرد عليك بتحليل أولي: ما هو واقعي، وما يحتاج إلى وقت، وما يجب توضيحه.' },
        { title: 'اللقاء', text: 'إذا ناسبك ذلك ننظم لقاءً للتعمق في مشروعك والإجابة عن أسئلتك، ونقترح عند الحاجة اختبار تحديد المستوى في الألمانية.' },
        { title: 'خطة العمل', text: 'تتلقى خطة مؤرخة: الدورات والامتحانات والوثائق والطلبات والتأشيرة. ثم تقرر بحرية ما ستفعله بعد ذلك.' },
      ],
    },
    {
      id: 'documents', h2: 'وثائق مفيدة للمرحلة اللاحقة',
      paragraphs: [
        'لا يلزم إرسال أي شيء للقاء الأول. وإذا أردت التقدم بسرعة أكبر يمكنك تحضير هذه العناصر التي سنطلبها لاحقًا:',
      ],
      bullets: [
        'نسخة من جواز سفرك.',
        'الشهادات وكشوف النقاط مع ترجماتها إن وُجدت.',
        'شهادات اللغة إن وُجدت.',
        'سيرتك الذاتية.',
      ],
      after: ['لا تُطلب الوثائق الشخصية إلا في الوقت الذي تلزم فيه، ولا تُستعمل إلا لإعداد ملفك.'],
    },
    {
      id: 'families', h2: 'للآباء والأسر',
      paragraphs: [
        'إذا كنت تكتب لابنك أو لأحد أقاربك فاذكر ذلك. يمكننا تنظيم لقاء مع الوالدين أو الأوصياء، باللغة التي تناسبكم، لشرح المراحل والآجال والميزانية. ومشاركتكم جزء من نجاح المشروع، فكلما فهمت الأسرة المسار كان دعمها للطالب أقوى وأكثر فاعلية. وإذا كانت لدى الوالدين أسئلة عن الميزانية أو السلامة أو الإقامة أو الآفاق المهنية فسنجيب عنها بكل وضوح وصراحة، ونقدم لهم الأرقام والمراجع الرسمية بدل الانطباعات العامة.',
      ],
    },
    {
      id: 'topics', h2: 'المواضيع التي يمكننا مساعدتك فيها',
      bullets: [
        'اختيار مستوى البداية في الألمانية وتخطيط التقدم حتى الامتحان.',
        'تقييم حظوظك في دراسة الطب بألمانيا وتحضير بدائل.',
        'المقارنة بين ألمانيا وروسيا بحسب ملفك وميزانيتك.',
        'إعداد ملف القبول والترجمات والتصديقات.',
        'تنظيم التأشيرة والتأمين والسكن والسفر.',
        'التحضير للوصول والأسابيع الأولى في عين المكان.',
      ],
    },
    {
      id: 'questions', h2: 'أسئلة يمكنك أن تطرحها علينا',
      bullets: [
        'هل شهادتي معترف بها للدخول إلى الجامعة التي أستهدفها؟',
        'أي امتحان لغوي يجب أن أجتازه وفي أي تاريخ؟',
        'كم يستغرق بلوغ المستوى المطلوب؟',
        'ما الميزانية الإجمالية التي يجب أن أخطط لها للسنة الأولى؟',
        'ما المواعيد النهائية للتقديم التي يجب احترامها؟',
        'ماذا أفعل إذا لم أُقبل هذه السنة؟',
        'كيف يستطيع والداي متابعة تقدم الملف؟',
      ],
    },
    {
      id: 'languages', h2: 'اكتب باللغة التي تناسبك',
      paragraphs: ['يمكنك أن تكتب إلينا بالفرنسية أو الإنجليزية أو العربية. ونرد بلغة رسالتك حتى تفهم كل تفصيل في الخطة المقترحة، وتتمكن من مناقشتها مع أسرتك بكل وضوح وارتياح.'],
    },
    {
      id: 'meeting', h2: 'ما الذي تنتظره من اللقاء الأول؟',
      paragraphs: [
        'اللقاء الأول ليس مقابلة بيع. إنه وقت عمل ننظر فيه معًا إلى وضعك وقيودك وأهدافك. وتخرج منه برؤية واضحة لما هو ممكن، وللترتيب الذي ينبغي السير وفقه، ولما يجب أن يُحسم أولًا. وتبقى حرًا في المتابعة معنا أو عدمها، دون أي ضغط ودون التزام مسبق من أي نوع.',
      ],
    },
    {
      id: 'tips', h2: 'ثلاث نصائح لتحضير مشروعك جيدًا',
      bullets: [
        'ابدأ باللغة: فهي ما يستغرق أطول وقت وما تتوقف عليه بقية الخطوات.',
        'احتفظ بجميع وثائقك الدراسية والرسمية في مكان آمن، ورقيًا ورقميًا.',
        'تحدث عن مشروعك مع أسرتك: فدعمها لا يقل أهمية عن الخطة نفسها.',
        'سجّل أسئلتك في ورقة قبل اللقاء حتى لا تنسى شيئًا مهمًا أثناء الحديث.',
      ],
    },
    {
      id: 'timing', h2: 'كلمة عن الآجال',
      paragraphs: [
        'تستغرق إجراءات الدراسة في الخارج وقتًا، وبعض المواعيد النهائية ثابتة. وكلما تواصلت معنا مبكرًا كانت خياراتك أوسع. وإذا كان جدولك الزمني ضيقًا بالفعل فاذكر ذلك بوضوح في رسالتك حتى نتمكن من تحديد الأولويات ونقول لك بصراحة ما يزال ممكنًا.',
      ],
    },
    {
      id: 'example', h2: 'مثال على رسالة أولى',
      paragraphs: [
        'على سبيل المثال، إليك رسالة تكفينا لنرد عليك بشكل مفيد: «مرحبًا، أحمل إجازة في علم الأحياء حصلت عليها سنة 2024. مستواي في الألمانية A2. أرغب في متابعة الماجستير في ألمانيا في الدخول المقبل. ميزانيتي محدودة وأود أن أعرف أي الجامعات واقعية لملفي، وأي امتحان لغوي يجب أن أجتازه، وبأي ترتيب أقوم بالإجراءات. هل تستطيعون اقتراح خطة أولى؟»',
        'هذا الملف خيالي: وهو يوضح فقط درجة الدقة المفيدة في الرسالة.',
      ],
    },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
