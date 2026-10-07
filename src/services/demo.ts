/**
 * Adaptateur de DÉMONSTRATION : tout reste dans le navigateur (localStorage), aucun serveur.
 * Aucun mot de passe n'est stocké ni vérifié : ce n'est pas de la sécurité, c'est une maquette fonctionnelle
 * qui permet de tester l'interface avant le raccordement à la vraie base (PUBLIC_API_URL).
 */
import { ServiceError, type AuthService, type Comment, type CommentsService, type CourseProgress, type ProgressMap, type ProgressService, type Services, type User } from '../types/community';

const K = { users: 'intellect-demo-users', session: 'intellect-demo-session', comments: 'intellect-demo-comments', likes: 'intellect-demo-likes', progress: 'intellect-demo-progress' };
const read = <T>(key: string, fallback: T): T => { try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; } };
const write = (key: string, value: unknown): void => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* stockage indisponible */ } };
const uid = (): string => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
const norm = (e: string): string => e.trim().toLowerCase();

const auth: AuthService = {
  mode: 'demo',
  async getSession() { return read<User | null>(K.session, null); },
  async signUp({ name, email }) {
    const users = read<User[]>(K.users, []);
    if (users.some((u) => u.email === norm(email))) throw new ServiceError('exists');
    const user: User = { id: uid(), name: name.trim(), email: norm(email) };
    write(K.users, [...users, user]); write(K.session, user);
    return user;
  },
  async signIn({ email }) {
    const user = read<User[]>(K.users, []).find((u) => u.email === norm(email));
    if (!user) throw new ServiceError('unknown-account');
    write(K.session, user);
    return user;
  },
  async signOut() { try { localStorage.removeItem(K.session); } catch { /* ignoré */ } },
  async requestPasswordReset() { /* rien à envoyer en démonstration */ },
};

type Stored = Omit<Comment, 'likes' | 'liked'>;
const comments: CommentsService = {
  async list(postId) {
    const all = read<Stored[]>(K.comments, []).filter((c) => c.postId === postId);
    const likes = read<Record<string, string[]>>(K.likes, {});
    const me = read<User | null>(K.session, null)?.id;
    return all.map((c) => ({ ...c, likes: likes[c.id]?.length ?? 0, liked: Boolean(me && likes[c.id]?.includes(me)) }));
  },
  async add(postId, body, parentId) {
    const me = read<User | null>(K.session, null);
    if (!me) throw new ServiceError('auth-required');
    const text = body.trim();
    if (!text) throw new ServiceError('invalid');
    const c: Stored = { id: uid(), postId, parentId, author: { id: me.id, name: me.name }, body: text, createdAt: new Date().toISOString() };
    write(K.comments, [...read<Stored[]>(K.comments, []), c]);
    return { ...c, likes: 0, liked: false };
  },
  async toggleLike(commentId) {
    const me = read<User | null>(K.session, null);
    if (!me) throw new ServiceError('auth-required');
    const likes = read<Record<string, string[]>>(K.likes, {});
    const set = new Set(likes[commentId] ?? []);
    const liked = !set.has(me.id);
    if (liked) set.add(me.id); else set.delete(me.id);
    likes[commentId] = [...set]; write(K.likes, likes);
    return { likes: set.size, liked };
  },
  async remove(commentId) {
    const me = read<User | null>(K.session, null);
    if (!me) throw new ServiceError('auth-required');
    const all = read<Stored[]>(K.comments, []);
    write(K.comments, all.filter((c) => !((c.id === commentId || c.parentId === commentId) && c.author.id === me.id)));
  },
  async report() { /* en production : file de modération côté serveur */ },
};

const empty = (): CourseProgress => ({ done: [], scores: {} });
const progress: ProgressService = {
  async all() { return read<ProgressMap>(K.progress, {}); },
  async markLesson(courseId, lessonId, done) {
    const all = read<ProgressMap>(K.progress, {});
    const p = all[courseId] ?? empty();
    p.done = done ? [...new Set([...p.done, lessonId])] : p.done.filter((l) => l !== lessonId);
    all[courseId] = p; write(K.progress, all);
  },
  async saveScore(courseId, lessonId, score, total) {
    const all = read<ProgressMap>(K.progress, {});
    const p = all[courseId] ?? empty();
    const prev = p.scores[lessonId];
    if (!prev || score / total >= prev.score / prev.total) p.scores[lessonId] = { score, total };
    all[courseId] = p; write(K.progress, all);
  },
  async setLast(courseId, lessonId) {
    const all = read<ProgressMap>(K.progress, {});
    const p = all[courseId] ?? empty();
    p.last = lessonId; all[courseId] = p; write(K.progress, all);
  },
};

export const demoServices: Services = { auth, comments, progress };
