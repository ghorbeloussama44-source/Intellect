import type { ContentSet, PageContent } from '../types';

const fr: PageContent = {
  nav: 'FAQ',
  title: 'Questions fréquentes : cours d’allemand, études en Allemagne et en Russie | Intellect',
  description: 'Réponses aux questions les plus fréquentes sur les cours d’allemand, la médecine en Allemagne, les études en Russie, le visa, le budget et l’accompagnement Intellect.',
  h1: 'Questions fréquentes',
  lead: 'Voici les questions que les étudiants et leurs familles nous posent le plus souvent. Si la vôtre n’y figure pas, écrivez-nous.',
  related: ['student-support', 'german-courses', 'contact', 'about'],
  sections: [
    {
      id: 'intro', h2: 'Comment utiliser cette page',
      paragraphs: [
        'Les réponses ci-dessous sont volontairement prudentes. Les conditions d’admission, de visa et de bourse sont fixées par les universités et les autorités, elles changent régulièrement et dépendent de votre situation. Nous donnons ici la logique générale ; pour votre cas précis, un échange avec un conseiller reste le meilleur moyen d’obtenir une réponse fiable.',
        'Les questions sont regroupées par thème : l’agence et ses services, les cours d’allemand, les études en Allemagne, les études en Russie, puis le visa et l’installation. Vous pouvez ouvrir chaque question pour lire la réponse.',
      ],
    },
  ],
  faq: [
    { q: 'Que fait Intellect exactement ?', a: 'Intellect est une agence d’accompagnement étudiant. Nous proposons des cours d’allemand de A1 à C1, une préparation à la médecine en Allemagne et un accompagnement pour étudier en Allemagne ou en Russie : orientation, dossier, visa, logement et suivi.' },
    { q: 'Le premier échange est-il payant ?', a: 'Non. Le premier échange est gratuit et sans engagement. Il sert à comprendre votre situation et à vous proposer un plan d’action.' },
    { q: 'Garantissez-vous l’admission ou le visa ?', a: 'Non, et méfiez-vous de toute agence qui le promet. Les décisions appartiennent aux universités et aux autorités consulaires. Nous maximisons vos chances par un dossier complet et cohérent.' },
    { q: 'Dans quelles langues êtes-vous joignables ?', a: 'Notre site et notre accompagnement sont proposés en français, en anglais et en arabe.' },
    { q: 'Je n’ai jamais appris l’allemand. Par où commencer ?', a: 'Par le niveau A1. Un test de positionnement gratuit confirme votre point de départ et nous établissons un parcours vers le niveau demandé par votre projet.' },
    { q: 'Quel niveau d’allemand faut-il pour étudier en Allemagne ?', a: 'Pour la plupart des cursus en allemand, un niveau B2 ou C1 prouvé par un examen reconnu. Chaque université précise ses exigences ; nous les vérifions avec vous.' },
    { q: 'Quels examens de langue préparez-vous ?', a: 'Nous préparons les examens reconnus comme les certificats du Goethe-Institut, de telc et de l’ÖSD, ainsi que le TestDaF et la DSH pour l’admission universitaire.' },
    { q: 'Les études en Allemagne sont-elles gratuites ?', a: 'Beaucoup d’universités publiques ne demandent pas de frais de scolarité classiques, mais une contribution semestrielle, et certains Länder appliquent des frais aux étudiants hors Union européenne. Le coût de la vie reste à prévoir.' },
    { q: 'La médecine en Allemagne est-elle accessible aux étudiants étrangers ?', a: 'Oui, mais l’admission est très sélective et demande un excellent niveau d’allemand. Nous évaluons avec vous le réalisme de votre objectif et nous préparons des alternatives.' },
    { q: 'Faut-il parler russe pour étudier en Russie ?', a: 'Pas au départ. La plupart des programmes en russe commencent par une année préparatoire de langue. Certains programmes sont proposés en anglais.' },
    { q: 'Mon diplôme obtenu à l’étranger sera-t-il reconnu dans mon pays ?', a: 'Cela dépend de votre pays, de la filière et de l’établissement. Vérifiez-le auprès des autorités compétentes avant de vous inscrire, surtout pour la médecine.' },
    { q: 'Combien de temps à l’avance faut-il commencer ?', a: 'Le plus tôt possible. Entre la langue, les documents, l’admission et le visa, comptez plusieurs mois, souvent une année pour les filières sélectives.' },
    { q: 'Pouvez-vous m’aider à trouver un logement ?', a: 'Oui. Nous vous orientons vers les résidences étudiantes, les colocations et les offres privées, et nous vous aidons à éviter les arnaques.' },
    { q: 'Que se passe-t-il après mon arrivée ?', a: 'Nous restons disponibles pour les premières démarches : enregistrement, assurance, banque, inscription et intégration. Le suivi ne s’arrête pas à l’inscription.' },
    { q: 'Quels sont vos tarifs ?', a: 'Ils dépendent du niveau de langue, du format de cours et du degré d’accompagnement choisi. Nous vous remettons un devis détaillé après le premier échange, avant tout engagement, en distinguant nos honoraires des frais payés directement aux universités ou aux centres d’examen.' },
    { q: 'Que dois-je préparer pour le premier échange ?', a: 'Rien d’obligatoire. Il est utile de connaître votre diplôme, votre niveau d’allemand approximatif, la filière visée et le calendrier souhaité. Si certaines informations vous manquent, nous les clarifions ensemble.' },
    { q: 'Comment savoir si mon projet est réaliste ?', a: 'Nous comparons votre profil aux exigences de la filière et des universités visées : diplôme, notes, langue, budget et dates limites. Si l’objectif demande plus de temps, nous le disons et nous proposons un calendrier ou une alternative.' },
    { q: 'Que faire si mon visa est refusé ?', a: 'Il faut d’abord comprendre le motif indiqué. Selon les cas, il est possible de corriger le dossier et de déposer une nouvelle demande, ou d’engager un recours dans les délais prévus. Nous vous aidons à analyser la situation.' },
    { q: 'Comment éviter les mauvaises agences ?', a: 'Méfiez-vous de ceux qui garantissent l’admission ou le visa, demandent des paiements sans contrat écrit ou refusent de détailler leurs frais. Exigez un devis clair, lisez le contrat et vérifiez les informations auprès des universités.' },
    { q: 'Puis-je faire appel à vous si je suis déjà inscrit dans une université ?', a: 'Oui. Nous pouvons intervenir sur une partie seulement du parcours : documents, visa, assurance, logement ou installation, sans reprendre ce qui est déjà fait.' },
  ],
};

const en: PageContent = {
  nav: 'FAQ',
  title: 'Frequently asked questions: German courses, studying in Germany and Russia | Intellect',
  description: 'Answers to the most frequent questions about German courses, medicine in Germany, studying in Russia, the visa, the budget and Intellect’s support.',
  h1: 'Frequently asked questions',
  lead: 'Here are the questions students and their families ask us most often. If yours is not listed, write to us.',
  related: ['student-support', 'german-courses', 'contact', 'about'],
  sections: [
    {
      id: 'intro', h2: 'How to use this page',
      paragraphs: [
        'The answers below are deliberately cautious. Admission, visa and scholarship conditions are set by universities and authorities, they change regularly and depend on your situation. We give the general logic here; for your specific case, a conversation with an adviser remains the best way to get a reliable answer.',
        'The questions are grouped by theme: the agency and its services, German courses, studying in Germany, studying in Russia, then the visa and settling in. You can open each question to read the answer.',
      ],
    },
  ],
  faq: [
    { q: 'What exactly does Intellect do?', a: 'Intellect is a student support agency. We offer German courses from A1 to C1, preparation for medicine in Germany and support to study in Germany or Russia: guidance, file, visa, housing and follow-up.' },
    { q: 'Is the first conversation paid?', a: 'No. The first conversation is free and carries no obligation. It is there to understand your situation and propose an action plan.' },
    { q: 'Do you guarantee admission or the visa?', a: 'No, and be wary of any agency that promises it. Decisions belong to universities and consular authorities. We maximise your chances with a complete and consistent file.' },
    { q: 'In which languages can you be reached?', a: 'Our site and our support are offered in French, English and Arabic.' },
    { q: 'I have never learned German. Where do I start?', a: 'At level A1. A free placement test confirms your starting point and we set a path to the level your project requires.' },
    { q: 'What level of German is needed to study in Germany?', a: 'For most programmes in German, a B2 or C1 level proven by a recognised exam. Each university states its requirements; we check them with you.' },
    { q: 'Which language exams do you prepare?', a: 'We prepare recognised exams such as the Goethe-Institut, telc and ÖSD certificates, as well as TestDaF and DSH for university admission.' },
    { q: 'Are studies in Germany free?', a: 'Many public universities do not charge conventional tuition, but a semester contribution, and some federal states charge fees to students from outside the European Union. The cost of living must be planned.' },
    { q: 'Is medicine in Germany open to foreign students?', a: 'Yes, but admission is very selective and requires an excellent level of German. We assess with you how realistic your goal is and prepare alternatives.' },
    { q: 'Do I need to speak Russian to study in Russia?', a: 'Not at the start. Most programmes in Russian begin with a preparatory language year. Some programmes are offered in English.' },
    { q: 'Will my degree earned abroad be recognised in my country?', a: 'It depends on your country, the field and the institution. Check with the competent authorities before enrolling, especially for medicine.' },
    { q: 'How far in advance should I start?', a: 'As early as possible. Between language, documents, admission and visa, allow several months, often a year for selective fields.' },
    { q: 'Can you help me find housing?', a: 'Yes. We guide you to student residences, shared flats and private offers, and help you avoid scams.' },
    { q: 'What happens after I arrive?', a: 'We remain available for the first formalities: registration, insurance, banking, enrolment and integration. Follow-up does not stop at enrolment.' },
    { q: 'What are your fees?', a: 'They depend on the language level, the course format and the level of support chosen. We give you a detailed quote after the first conversation, before any commitment, separating our fees from costs paid directly to universities or exam centres.' },
    { q: 'What should I prepare for the first conversation?', a: 'Nothing compulsory. It helps to know your diploma, your approximate level of German, the field you aim for and the calendar you want. If some information is missing, we clarify it together.' },
    { q: 'How do I know if my project is realistic?', a: 'We compare your profile with the requirements of the field and the universities you target: diploma, grades, language, budget and deadlines. If the goal needs more time, we say so and propose a calendar or an alternative.' },
    { q: 'What if my visa is refused?', a: 'First understand the reason given. Depending on the case, it may be possible to correct the file and submit a new application, or to lodge an appeal within the deadlines. We help you analyse the situation.' },
    { q: 'How do I avoid bad agencies?', a: 'Be wary of those who guarantee admission or the visa, ask for payments without a written contract or refuse to detail their fees. Insist on a clear quote, read the contract and check information with the universities.' },
    { q: 'Can I turn to you if I am already enrolled at a university?', a: 'Yes. We can help with only part of the path: documents, visa, insurance, housing or settling in, without redoing what is already done.' },
  ],
};

const ar: PageContent = {
  nav: 'الأسئلة الشائعة',
  title: 'الأسئلة الشائعة: دورات الألمانية والدراسة في ألمانيا وروسيا | إنتلكت',
  description: 'أجوبة عن أكثر الأسئلة شيوعًا حول دورات الألمانية والطب في ألمانيا والدراسة في روسيا والتأشيرة والميزانية ومرافقة إنتلكت.',
  h1: 'الأسئلة الشائعة',
  lead: 'هذه هي الأسئلة التي يطرحها علينا الطلبة وأسرهم في أغلب الأحيان. وإذا لم تجد سؤالك هنا فراسلنا.',
  related: ['student-support', 'german-courses', 'contact', 'about'],
  sections: [
    {
      id: 'intro', h2: 'كيف تستعمل هذه الصفحة؟',
      paragraphs: [
        'الأجوبة التالية حذرة عن قصد. فشروط القبول والتأشيرة والمنح تحددها الجامعات والسلطات، وهي تتغير باستمرار وتعتمد على وضعك. ونعرض هنا المنطق العام؛ أما لحالتك الدقيقة فإن اللقاء مع مستشار يبقى أفضل وسيلة للحصول على جواب موثوق.',
        'وقد جمعنا الأسئلة بحسب المواضيع: الوكالة وخدماتها، ودورات الألمانية، والدراسة في ألمانيا، والدراسة في روسيا، ثم التأشيرة والاستقرار. ويمكنك فتح كل سؤال لقراءة جوابه، والعودة إلى هذه الصفحة كلما ظهرت لديك أسئلة جديدة خلال مراحل مشروعك.',
      ],
    },
  ],
  faq: [
    { q: 'ماذا تفعل إنتلكت بالضبط؟', a: 'إنتلكت وكالة لمرافقة الطلبة. نقدم دورات اللغة الألمانية من A1 إلى C1، والتحضير لدراسة الطب في ألمانيا، ومرافقة للدراسة في ألمانيا أو روسيا: التوجيه والملف والتأشيرة والسكن والمتابعة.' },
    { q: 'هل اللقاء الأول مدفوع؟', a: 'لا. اللقاء الأول مجاني ولا يلزمك بشيء. وهو مخصص لفهم وضعك واقتراح خطة عمل.' },
    { q: 'هل تضمنون القبول أو التأشيرة؟', a: 'لا، واحذر أي وكالة تعد بذلك. القرارات بيد الجامعات والسلطات القنصلية. ونرفع حظوظك بملف كامل ومتسق.' },
    { q: 'بأي لغات يمكن التواصل معكم؟', a: 'يُقدَّم موقعنا ومرافقتنا بالفرنسية والإنجليزية والعربية.' },
    { q: 'لم أتعلم الألمانية من قبل. من أين أبدأ؟', a: 'من المستوى A1. ويؤكد اختبار تحديد المستوى المجاني نقطة انطلاقك، ونضع لك مسارًا نحو المستوى الذي يتطلبه مشروعك.' },
    { q: 'ما مستوى الألمانية المطلوب للدراسة في ألمانيا؟', a: 'في معظم البرامج بالألمانية يُطلب مستوى B2 أو C1 يثبته امتحان معترف به. وتحدد كل جامعة شروطها، ونتحقق منها معك.' },
    { q: 'أي امتحانات لغوية تحضّرون لها؟', a: 'نحضّر للامتحانات المعترف بها مثل شهادات معهد غوته وtelc وÖSD، وكذلك TestDaF وDSH للقبول الجامعي.' },
    { q: 'هل الدراسة في ألمانيا مجانية؟', a: 'كثير من الجامعات الحكومية لا تفرض رسومًا دراسية تقليدية بل مساهمة فصلية، وتفرض بعض الولايات رسومًا على الطلبة من خارج الاتحاد الأوروبي. ويبقى التخطيط لتكلفة المعيشة ضروريًا.' },
    { q: 'هل دراسة الطب في ألمانيا متاحة للطلبة الأجانب؟', a: 'نعم، لكن القبول انتقائي جدًا ويتطلب مستوى ممتازًا في الألمانية. ونقيّم معك مدى واقعية هدفك ونعد بدائل.' },
    { q: 'هل يجب أن أتكلم الروسية للدراسة في روسيا؟', a: 'ليس في البداية. فمعظم البرامج بالروسية تبدأ بسنة تحضيرية للغة. وتُقدَّم بعض البرامج بالإنجليزية.' },
    { q: 'هل ستكون شهادتي المحصلة في الخارج معترفًا بها في بلدي؟', a: 'يعتمد ذلك على بلدك والتخصص والمؤسسة. تحقق لدى الجهات المختصة قبل التسجيل، خاصة في الطب.' },
    { q: 'قبل كم من الوقت يجب أن أبدأ؟', a: 'في أقرب وقت ممكن. فبين اللغة والوثائق والقبول والتأشيرة تلزم عدة أشهر، وغالبًا سنة كاملة في التخصصات الانتقائية.' },
    { q: 'هل تساعدونني في العثور على سكن؟', a: 'نعم. نوجهك نحو السكن الجامعي والسكن المشترك والعروض الخاصة، ونساعدك على تجنب الاحتيال.' },
    { q: 'ماذا يحدث بعد وصولي؟', a: 'نبقى متاحين لأولى الإجراءات: التسجيل والتأمين والبنك والالتحاق بالجامعة والاندماج. فالمتابعة لا تتوقف عند التسجيل.' },
    { q: 'ما هي تعريفاتكم؟', a: 'تعتمد على المستوى اللغوي وصيغة الدروس ودرجة المرافقة المختارة. ونسلمك عرضًا مفصلًا بعد اللقاء الأول وقبل أي التزام، مع الفصل بين أتعابنا والرسوم التي تُدفع مباشرة إلى الجامعات أو مراكز الامتحان.' },
    { q: 'ماذا يجب أن أحضّر للقاء الأول؟', a: 'لا شيء إلزامي. يفيد أن تعرف شهادتك ومستواك التقريبي في الألمانية والتخصص المستهدف والجدول الزمني المرغوب. وإذا غابت بعض المعلومات فإننا نوضحها معًا.' },
    { q: 'كيف أعرف أن مشروعي واقعي؟', a: 'نقارن ملفك بشروط التخصص والجامعات المستهدفة: الشهادة والدرجات واللغة والميزانية والمواعيد النهائية. وإذا كان الهدف يحتاج إلى وقت أطول فإننا نقول ذلك ونقترح جدولًا أو بديلًا.' },
    { q: 'ماذا أفعل إذا رُفضت تأشيرتي؟', a: 'يجب أولًا فهم السبب المذكور. وبحسب الحالة قد يمكن تصحيح الملف وتقديم طلب جديد، أو تقديم طعن في الآجال المحددة. ونساعدك على تحليل الوضع واختيار الإجراء الأنسب.' },
    { q: 'كيف أتجنب الوكالات السيئة؟', a: 'احذر من يضمن القبول أو التأشيرة، أو يطلب مدفوعات دون عقد مكتوب، أو يرفض تفصيل رسومه. اطلب عرضًا واضحًا، واقرأ العقد، وتحقق من المعلومات لدى الجامعات.' },
    { q: 'هل أستطيع اللجوء إليكم إذا كنت مسجلًا بالفعل في جامعة؟', a: 'نعم. يمكننا التدخل في جزء فقط من المسار: الوثائق أو التأشيرة أو التأمين أو السكن أو الاستقرار، دون إعادة ما أُنجز بالفعل، وبحسب الحاجة الفعلية لكل حالة على حدة.' },
  ],
};

export default { fr, en, ar } satisfies ContentSet;
