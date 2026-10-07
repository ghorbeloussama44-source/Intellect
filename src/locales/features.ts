/** Chaînes du blog, des comptes, des commentaires et de l'e-learning (les chaînes communes sont dans fr/en/ar.ts). */
import type { Locale } from '../config/site';

export interface Feat {
  nav: { blog: string; elearning: string; signIn: string; signUp: string; account: string; signOut: string };
  blog: {
    title: string; description: string; lead: string; all: string; categories: Record<'study' | 'life', string>;
    read: string; minRead: string; published: string; by: string; author: string; share: string; copyLink: string; copied: string;
    related: string; latest: string; viewAll: string; filter: string; cover: string;
  };
  comments: {
    title: string; one: string; many: string; none: string; placeholder: string; submit: string; posting: string; reply: string; cancel: string;
    like: string; report: string; reported: string; remove: string; confirmRemove: string; replyTo: string; signInPrompt: string;
    sort: string; newest: string; oldest: string; popular: string; left: string; moderation: string; you: string; error: string; loading: string;
    nameLabel: string;
  };
  auth: {
    inTitle: string; inDescription: string; inLead: string; upTitle: string; upDescription: string; upLead: string; forgotTitle: string; forgotDescription: string; forgotLead: string;
    name: string; email: string; password: string; show: string; hide: string; submitIn: string; submitUp: string; submitForgot: string;
    forgot: string; noAccount: string; haveAccount: string; back: string; strength: string; weak: string; fair: string; strong: string;
    hint: string; consent: string; sent: string; welcome: string;
    err: { required: string; email: string; short: string; unknown: string; exists: string; network: string; generic: string };
    demo: string;
    accountTitle: string; accountDescription: string; accountLead: string; profile: string; myCourses: string; noCourses: string; discover: string;
  };
  learn: {
    catalogTitle: string; catalogDescription: string; catalogLead: string; more: string; level: string; lessons: string; modules: string; minutes: string;
    start: string; resume: string; again: string; curriculum: string; outcomes: string; includes: string; includesList: string[];
    module: string; kinds: Record<'video' | 'reading' | 'quiz', string>; preview: string; locked: string; unlockTitle: string; unlockText: string;
    tabs: { lesson: string; exercises: string; resources: string }; videoSoon: string; videoSoonText: string; vocab: string; german: string; notes: string;
    markDone: string; markUndone: string; done: string; next: string; prev: string; back: string; noResources: string;
    check: string; retry: string; correct: string; wrong: string; answerWas: string; placeholder: string; orderHelp: string; resetOrder: string;
    score: string; allDone: string; courseDone: string; progress: string; sidebar: string; questions: string; demoGate: string;
  };
}

export const fr: Feat = {
  nav: { blog: 'Blog', elearning: 'E-learning', signIn: 'Connexion', signUp: 'Créer un compte', account: 'Mon espace', signOut: 'Se déconnecter' },
  blog: {
    title: 'Blog Intellect : conseils pour étudier à l’étranger', description: 'Guides pratiques d’Intellect pour étudier en Allemagne ou en Russie : logement, démarches, langue et choix de la destination.',
    lead: 'Guides pratiques, retours d’expérience et conseils pour préparer vos études en Allemagne ou en Russie.', all: 'Tous', categories: { study: 'Études', life: 'Vie étudiante' },
    read: 'Lire l’article', minRead: '{n} min de lecture', published: 'Publié le', by: 'Par', author: 'Équipe Intellect', share: 'Partager', copyLink: 'Copier le lien', copied: 'Lien copié',
    related: 'Articles liés', latest: 'Derniers articles', viewAll: 'Tous les articles', filter: 'Filtrer par catégorie', cover: 'Illustration de l’article',
  },
  comments: {
    title: 'Commentaires', one: '1 commentaire', many: '{n} commentaires', none: 'Aucun commentaire pour le moment. Soyez le premier à réagir.', placeholder: 'Votre commentaire…', submit: 'Publier', posting: 'Publication…',
    reply: 'Répondre', cancel: 'Annuler', like: 'J’aime', report: 'Signaler', reported: 'Signalé, merci', remove: 'Supprimer', confirmRemove: 'Supprimer ce commentaire ?', replyTo: 'Répondre à {name}',
    signInPrompt: 'Connectez-vous pour participer à la discussion.', sort: 'Trier', newest: 'Plus récents', oldest: 'Plus anciens', popular: 'Plus aimés', left: '{n} caractères restants',
    moderation: 'Restez courtois : les commentaires abusifs peuvent être signalés et supprimés.', you: 'Vous', error: 'Action impossible pour le moment. Réessayez.', loading: 'Chargement des commentaires…', nameLabel: 'Commentaire de {name}',
  },
  auth: {
    inTitle: 'Connexion | Intellect', inDescription: 'Connectez-vous à votre espace Intellect pour commenter, suivre vos cours et reprendre où vous vous êtes arrêté.', inLead: 'Retrouvez vos cours, votre progression et vos commentaires.',
    upTitle: 'Créer un compte | Intellect', upDescription: 'Créez votre compte Intellect gratuit pour commenter les articles et suivre votre progression dans les cours.', upLead: 'Un compte gratuit pour commenter et suivre votre progression.',
    forgotTitle: 'Mot de passe oublié | Intellect', forgotDescription: 'Recevez un lien pour réinitialiser votre mot de passe Intellect.', forgotLead: 'Indiquez votre e-mail : nous vous envoyons un lien de réinitialisation.',
    name: 'Prénom ou pseudo', email: 'Adresse e-mail', password: 'Mot de passe', show: 'Afficher le mot de passe', hide: 'Masquer le mot de passe', submitIn: 'Se connecter', submitUp: 'Créer mon compte', submitForgot: 'Envoyer le lien',
    forgot: 'Mot de passe oublié ?', noAccount: 'Pas encore de compte ?', haveAccount: 'Déjà un compte ?', back: 'Retour à la connexion', strength: 'Robustesse', weak: 'Faible', fair: 'Moyenne', strong: 'Forte',
    hint: '8 caractères minimum.', consent: 'Vos informations servent uniquement à gérer votre accès, vos commentaires et votre progression.', sent: 'Si un compte existe pour cette adresse, un e-mail de réinitialisation vient d’être envoyé.', welcome: 'Bonjour {name} !',
    err: { required: 'Ce champ est obligatoire.', email: 'Adresse e-mail invalide.', short: 'Au moins 8 caractères.', unknown: 'Aucun compte pour cette adresse.', exists: 'Un compte existe déjà avec cette adresse.', network: 'Connexion impossible. Vérifiez votre réseau et réessayez.', generic: 'Une erreur est survenue. Réessayez.' },
    demo: 'Mode démonstration : les comptes et les commentaires restent dans ce navigateur, sans serveur ni vérification de mot de passe. La vraie base de données sera raccordée ensuite.',
    accountTitle: 'Mon espace | Intellect', accountDescription: 'Votre espace Intellect : profil, cours en cours et progression.', accountLead: 'Votre profil et vos cours en un coup d’œil.', profile: 'Profil', myCourses: 'Mes cours', noCourses: 'Vous n’avez pas encore commencé de cours.', discover: 'Découvrir les cours',
  },
  learn: {
    catalogTitle: 'E-learning Intellect : cours d’allemand en ligne', catalogDescription: 'Cours d’allemand en ligne par petites leçons : vidéo courte, notes, vocabulaire et exercices corrigés, avec suivi de progression.',
    catalogLead: 'Des leçons courtes, des exercices corrigés tout de suite et une progression qui se sauvegarde.', more: 'D’autres cours (A2, B1, C1) seront ajoutés au fil du temps.', level: 'Niveau', lessons: '{n} leçons', modules: '{n} modules', minutes: '{n} min',
    start: 'Commencer le cours', resume: 'Reprendre', again: 'Revoir le cours', curriculum: 'Programme du cours', outcomes: 'Ce que vous saurez faire', includes: 'Dans chaque leçon',
    includesList: ['Une vidéo courte', 'Des notes à relire', 'Du vocabulaire', 'Des exercices corrigés immédiatement'],
    module: 'Module {n}', kinds: { video: 'Vidéo', reading: 'Lecture', quiz: 'Quiz' }, preview: 'Aperçu gratuit', locked: 'Compte requis', unlockTitle: 'Cette leçon est réservée aux membres', unlockText: 'Créez un compte gratuit ou connectez-vous pour y accéder et sauvegarder votre progression.',
    tabs: { lesson: 'Leçon', exercises: 'Exercices', resources: 'Ressources' }, videoSoon: 'Vidéo bientôt disponible', videoSoonText: 'En attendant, les notes et les exercices de cette leçon sont déjà disponibles.', vocab: 'Vocabulaire', german: 'Allemand', notes: 'À retenir',
    markDone: 'Marquer comme terminée', markUndone: 'Marquer comme non terminée', done: 'Terminée', next: 'Leçon suivante', prev: 'Leçon précédente', back: 'Retour au cours', noResources: 'Aucun document pour cette leçon.',
    check: 'Vérifier', retry: 'Recommencer', correct: 'Bonne réponse !', wrong: 'Pas tout à fait.', answerWas: 'Réponse attendue :', placeholder: 'Votre réponse', orderHelp: 'Touchez les mots dans le bon ordre.', resetOrder: 'Effacer',
    score: 'Score : {a} / {b}', allDone: 'Tous les exercices sont faits.', courseDone: 'Cours terminé, bravo !', progress: '{a} / {b} leçons terminées', sidebar: 'Contenu du cours', questions: 'Question {a} sur {b}', demoGate: 'Aperçu : l’accès réservé n’est effectif qu’avec la vraie base de comptes.',
  },
};

export const en: Feat = {
  nav: { blog: 'Blog', elearning: 'E-learning', signIn: 'Sign in', signUp: 'Create account', account: 'My area', signOut: 'Sign out' },
  blog: {
    title: 'Intellect blog: advice for studying abroad', description: 'Practical Intellect guides for studying in Germany or Russia: housing, paperwork, language and choosing your destination.',
    lead: 'Practical guides, first-hand advice and tips to prepare your studies in Germany or Russia.', all: 'All', categories: { study: 'Studies', life: 'Student life' },
    read: 'Read the article', minRead: '{n} min read', published: 'Published on', by: 'By', author: 'Intellect team', share: 'Share', copyLink: 'Copy link', copied: 'Link copied',
    related: 'Related articles', latest: 'Latest articles', viewAll: 'All articles', filter: 'Filter by category', cover: 'Article illustration',
  },
  comments: {
    title: 'Comments', one: '1 comment', many: '{n} comments', none: 'No comments yet. Be the first to react.', placeholder: 'Your comment…', submit: 'Post', posting: 'Posting…',
    reply: 'Reply', cancel: 'Cancel', like: 'Like', report: 'Report', reported: 'Reported, thank you', remove: 'Delete', confirmRemove: 'Delete this comment?', replyTo: 'Reply to {name}',
    signInPrompt: 'Sign in to join the discussion.', sort: 'Sort', newest: 'Newest', oldest: 'Oldest', popular: 'Most liked', left: '{n} characters left',
    moderation: 'Please stay polite: abusive comments can be reported and removed.', you: 'You', error: 'Action unavailable right now. Please try again.', loading: 'Loading comments…', nameLabel: 'Comment by {name}',
  },
  auth: {
    inTitle: 'Sign in | Intellect', inDescription: 'Sign in to your Intellect area to comment, follow your courses and pick up where you left off.', inLead: 'Find your courses, your progress and your comments.',
    upTitle: 'Create an account | Intellect', upDescription: 'Create your free Intellect account to comment on articles and track your progress in the courses.', upLead: 'A free account to comment and track your progress.',
    forgotTitle: 'Forgot password | Intellect', forgotDescription: 'Get a link to reset your Intellect password.', forgotLead: 'Enter your email and we will send you a reset link.',
    name: 'First name or nickname', email: 'Email address', password: 'Password', show: 'Show password', hide: 'Hide password', submitIn: 'Sign in', submitUp: 'Create my account', submitForgot: 'Send the link',
    forgot: 'Forgot password?', noAccount: 'No account yet?', haveAccount: 'Already have an account?', back: 'Back to sign in', strength: 'Strength', weak: 'Weak', fair: 'Fair', strong: 'Strong',
    hint: 'At least 8 characters.', consent: 'Your details are used only to manage your access, your comments and your progress.', sent: 'If an account exists for this address, a reset email has just been sent.', welcome: 'Hello {name}!',
    err: { required: 'This field is required.', email: 'Invalid email address.', short: 'At least 8 characters.', unknown: 'No account for this address.', exists: 'An account already exists with this address.', network: 'Cannot connect. Check your network and try again.', generic: 'Something went wrong. Please try again.' },
    demo: 'Demo mode: accounts and comments stay in this browser, with no server and no password check. The real database will be connected later.',
    accountTitle: 'My area | Intellect', accountDescription: 'Your Intellect area: profile, courses in progress and progress tracking.', accountLead: 'Your profile and courses at a glance.', profile: 'Profile', myCourses: 'My courses', noCourses: 'You have not started a course yet.', discover: 'Discover the courses',
  },
  learn: {
    catalogTitle: 'Intellect e-learning: online German courses', catalogDescription: 'Online German courses in short lessons: short video, notes, vocabulary and instantly corrected exercises, with progress tracking.',
    catalogLead: 'Short lessons, instantly corrected exercises and progress that is saved.', more: 'More courses (A2, B1, C1) will be added over time.', level: 'Level', lessons: '{n} lessons', modules: '{n} modules', minutes: '{n} min',
    start: 'Start the course', resume: 'Resume', again: 'Review the course', curriculum: 'Course outline', outcomes: 'What you will be able to do', includes: 'In every lesson',
    includesList: ['A short video', 'Notes to review', 'Vocabulary', 'Instantly corrected exercises'],
    module: 'Module {n}', kinds: { video: 'Video', reading: 'Reading', quiz: 'Quiz' }, preview: 'Free preview', locked: 'Account required', unlockTitle: 'This lesson is for members', unlockText: 'Create a free account or sign in to access it and save your progress.',
    tabs: { lesson: 'Lesson', exercises: 'Exercises', resources: 'Resources' }, videoSoon: 'Video coming soon', videoSoonText: 'Meanwhile, the notes and exercises of this lesson are already available.', vocab: 'Vocabulary', german: 'German', notes: 'Key points',
    markDone: 'Mark as complete', markUndone: 'Mark as incomplete', done: 'Completed', next: 'Next lesson', prev: 'Previous lesson', back: 'Back to course', noResources: 'No documents for this lesson.',
    check: 'Check', retry: 'Try again', correct: 'Correct!', wrong: 'Not quite.', answerWas: 'Expected answer:', placeholder: 'Your answer', orderHelp: 'Tap the words in the right order.', resetOrder: 'Clear',
    score: 'Score: {a} / {b}', allDone: 'All exercises done.', courseDone: 'Course complete, well done!', progress: '{a} / {b} lessons completed', sidebar: 'Course content', questions: 'Question {a} of {b}', demoGate: 'Preview: restricted access only takes effect with the real accounts database.',
  },
};

export const ar: Feat = {
  nav: { blog: 'المدونة', elearning: 'التعلّم الإلكتروني', signIn: 'تسجيل الدخول', signUp: 'إنشاء حساب', account: 'مساحتي', signOut: 'تسجيل الخروج' },
  blog: {
    title: 'مدونة إنتلكت: نصائح للدراسة في الخارج', description: 'أدلة عملية من إنتلكت للدراسة في ألمانيا أو روسيا: السكن والإجراءات واللغة واختيار الوجهة.',
    lead: 'أدلة عملية وتجارب ونصائح لتحضير دراستك في ألمانيا أو روسيا.', all: 'الكل', categories: { study: 'الدراسة', life: 'الحياة الطلابية' },
    read: 'اقرأ المقال', minRead: '{n} دقائق قراءة', published: 'نُشر في', by: 'بقلم', author: 'فريق إنتلكت', share: 'مشاركة', copyLink: 'نسخ الرابط', copied: 'تم نسخ الرابط',
    related: 'مقالات ذات صلة', latest: 'أحدث المقالات', viewAll: 'كل المقالات', filter: 'التصفية حسب الفئة', cover: 'صورة توضيحية للمقال',
  },
  comments: {
    title: 'التعليقات', one: 'تعليق واحد', many: '{n} تعليقات', none: 'لا توجد تعليقات بعد. كن أول من يعلّق.', placeholder: 'اكتب تعليقك…', submit: 'نشر', posting: 'جارٍ النشر…',
    reply: 'ردّ', cancel: 'إلغاء', like: 'أعجبني', report: 'إبلاغ', reported: 'تم الإبلاغ، شكرًا', remove: 'حذف', confirmRemove: 'هل تريد حذف هذا التعليق؟', replyTo: 'الرد على {name}',
    signInPrompt: 'سجّل الدخول للمشاركة في النقاش.', sort: 'ترتيب', newest: 'الأحدث', oldest: 'الأقدم', popular: 'الأكثر إعجابًا', left: 'تبقّى {n} حرفًا',
    moderation: 'يرجى الالتزام بالأدب: يمكن الإبلاغ عن التعليقات المسيئة وحذفها.', you: 'أنت', error: 'تعذّر تنفيذ العملية الآن. حاول مجددًا.', loading: 'جارٍ تحميل التعليقات…', nameLabel: 'تعليق {name}',
  },
  auth: {
    inTitle: 'تسجيل الدخول | إنتلكت', inDescription: 'سجّل الدخول إلى مساحتك في إنتلكت للتعليق ومتابعة دوراتك ومواصلة التعلم من حيث توقفت.', inLead: 'ابحث عن دوراتك وتقدّمك وتعليقاتك.',
    upTitle: 'إنشاء حساب | إنتلكت', upDescription: 'أنشئ حسابك المجاني في إنتلكت للتعليق على المقالات ومتابعة تقدّمك في الدورات.', upLead: 'حساب مجاني للتعليق ومتابعة تقدّمك.',
    forgotTitle: 'نسيت كلمة المرور | إنتلكت', forgotDescription: 'احصل على رابط لإعادة تعيين كلمة مرورك في إنتلكت.', forgotLead: 'أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين.',
    name: 'الاسم الأول أو لقب', email: 'البريد الإلكتروني', password: 'كلمة المرور', show: 'إظهار كلمة المرور', hide: 'إخفاء كلمة المرور', submitIn: 'تسجيل الدخول', submitUp: 'إنشاء حسابي', submitForgot: 'إرسال الرابط',
    forgot: 'نسيت كلمة المرور؟', noAccount: 'ليس لديك حساب؟', haveAccount: 'لديك حساب بالفعل؟', back: 'العودة إلى تسجيل الدخول', strength: 'القوة', weak: 'ضعيفة', fair: 'متوسطة', strong: 'قوية',
    hint: '8 أحرف على الأقل.', consent: 'تُستعمل بياناتك فقط لإدارة دخولك وتعليقاتك وتقدّمك.', sent: 'إن وُجد حساب بهذا العنوان فقد أُرسلت إليه رسالة لإعادة التعيين.', welcome: 'مرحبًا {name}!',
    err: { required: 'هذا الحقل مطلوب.', email: 'عنوان بريد إلكتروني غير صالح.', short: '8 أحرف على الأقل.', unknown: 'لا يوجد حساب بهذا العنوان.', exists: 'يوجد حساب بهذا العنوان بالفعل.', network: 'تعذّر الاتصال. تحقق من الشبكة وحاول مجددًا.', generic: 'حدث خطأ. حاول مجددًا.' },
    demo: 'وضع تجريبي: تبقى الحسابات والتعليقات في هذا المتصفح دون خادم ودون التحقق من كلمة المرور. سيتم ربط قاعدة البيانات الحقيقية لاحقًا.',
    accountTitle: 'مساحتي | إنتلكت', accountDescription: 'مساحتك في إنتلكت: الملف الشخصي والدورات الجارية وتتبّع التقدّم.', accountLead: 'ملفك ودوراتك في لمحة.', profile: 'الملف الشخصي', myCourses: 'دوراتي', noCourses: 'لم تبدأ أي دورة بعد.', discover: 'اكتشف الدورات',
  },
  learn: {
    catalogTitle: 'التعلّم الإلكتروني مع إنتلكت: دورات ألمانية عبر الإنترنت', catalogDescription: 'دورات ألمانية عبر الإنترنت في دروس قصيرة: فيديو قصير وملاحظات ومفردات وتمارين تُصحَّح فورًا مع تتبّع التقدّم.',
    catalogLead: 'دروس قصيرة وتمارين تُصحَّح فورًا وتقدّم يُحفظ تلقائيًا.', more: 'ستُضاف دورات أخرى (A2 وB1 وC1) مع الوقت.', level: 'المستوى', lessons: '{n} دروس', modules: '{n} وحدات', minutes: '{n} د',
    start: 'ابدأ الدورة', resume: 'واصل', again: 'راجع الدورة', curriculum: 'محتوى الدورة', outcomes: 'ما ستتمكن من فعله', includes: 'في كل درس',
    includesList: ['فيديو قصير', 'ملاحظات للمراجعة', 'مفردات', 'تمارين تُصحَّح فورًا'],
    module: 'الوحدة {n}', kinds: { video: 'فيديو', reading: 'قراءة', quiz: 'اختبار' }, preview: 'معاينة مجانية', locked: 'يتطلب حسابًا', unlockTitle: 'هذا الدرس مخصص للأعضاء', unlockText: 'أنشئ حسابًا مجانيًا أو سجّل الدخول للوصول إليه وحفظ تقدّمك.',
    tabs: { lesson: 'الدرس', exercises: 'التمارين', resources: 'الموارد' }, videoSoon: 'الفيديو قريبًا', videoSoonText: 'في هذه الأثناء، ملاحظات هذا الدرس وتمارينه متاحة بالفعل.', vocab: 'المفردات', german: 'الألمانية', notes: 'للتذكّر',
    markDone: 'تحديد كمكتمل', markUndone: 'إلغاء الاكتمال', done: 'مكتمل', next: 'الدرس التالي', prev: 'الدرس السابق', back: 'العودة إلى الدورة', noResources: 'لا توجد مستندات لهذا الدرس.',
    check: 'تحقق', retry: 'أعد المحاولة', correct: 'إجابة صحيحة!', wrong: 'ليست صحيحة تمامًا.', answerWas: 'الإجابة المتوقعة:', placeholder: 'إجابتك', orderHelp: 'اضغط على الكلمات بالترتيب الصحيح.', resetOrder: 'مسح',
    score: 'النتيجة: {a} / {b}', allDone: 'أنجزت كل التمارين.', courseDone: 'اكتملت الدورة، أحسنت!', progress: 'اكتمل {a} / {b} من الدروس', sidebar: 'محتوى الدورة', questions: 'السؤال {a} من {b}', demoGate: 'معاينة: لا يصبح الوصول المقيّد فعليًا إلا مع قاعدة الحسابات الحقيقية.',
  },
};

const dictionaries: Record<Locale, Feat> = { fr, en, ar };
export const useFeat = (locale: Locale): Feat => dictionaries[locale];
/** Remplace {a}, {n}… par des valeurs. */
export const fmt = (s: string, vars: Record<string, string | number>): string => s.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ''));
