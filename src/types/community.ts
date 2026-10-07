/** Modèles partagés entre l'interface et les adaptateurs (démo locale ou API HTTP). Voir docs/BACKEND.md. */
export interface User { id: string; name: string; email: string }

export interface Comment {
  id: string;
  postId: string;
  parentId: string | null;
  author: { id: string; name: string };
  body: string;
  createdAt: string;
  likes: number;
  /** L'utilisateur courant a déjà aimé ce commentaire. */
  liked: boolean;
}

export interface CourseProgress {
  /** Identifiants des leçons terminées. */
  done: string[];
  /** Meilleur score par leçon : bonnes réponses / total. */
  scores: Record<string, { score: number; total: number }>;
  /** Dernière leçon ouverte. */
  last?: string;
}
export type ProgressMap = Record<string, CourseProgress>;

export interface AuthService {
  readonly mode: 'demo' | 'api';
  getSession(): Promise<User | null>;
  signUp(input: { name: string; email: string; password: string }): Promise<User>;
  signIn(input: { email: string; password: string }): Promise<User>;
  signOut(): Promise<void>;
  requestPasswordReset(email: string): Promise<void>;
}
export interface CommentsService {
  list(postId: string): Promise<Comment[]>;
  add(postId: string, body: string, parentId: string | null): Promise<Comment>;
  toggleLike(commentId: string, postId: string): Promise<{ likes: number; liked: boolean }>;
  remove(commentId: string, postId: string): Promise<void>;
  report(commentId: string, postId: string): Promise<void>;
}
export interface ProgressService {
  all(): Promise<ProgressMap>;
  markLesson(courseId: string, lessonId: string, done: boolean): Promise<void>;
  saveScore(courseId: string, lessonId: string, score: number, total: number): Promise<void>;
  setLast(courseId: string, lessonId: string): Promise<void>;
}
export interface Services { auth: AuthService; comments: CommentsService; progress: ProgressService }

/** Codes d'erreur stables, traduits par l'interface. */
export type ErrorCode = 'unknown-account' | 'exists' | 'network' | 'auth-required' | 'invalid';
export class ServiceError extends Error {
  code: ErrorCode;
  constructor(code: ErrorCode) { super(code); this.code = code; }
}
