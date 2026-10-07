/**
 * Adaptateur API : applique le contrat REST décrit dans docs/BACKEND.md.
 * Session = cookie httpOnly posé par le serveur ; le navigateur ne manipule jamais de mot de passe stocké ni de jeton lisible.
 */
import { ServiceError, type AuthService, type Comment, type CommentsService, type ProgressMap, type ProgressService, type Services, type User } from '../types/community';

export function createHttpServices(base: string): Services {
  async function call<T>(method: string, path: string, body?: unknown): Promise<T> {
    let res: Response;
    try {
      res = await fetch(`${base}${path}`, {
        method, credentials: 'include',
        headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
        body: body === undefined ? undefined : JSON.stringify(body),
      });
    } catch { throw new ServiceError('network'); }
    if (res.status === 204) return undefined as T;
    const data = (await res.json().catch(() => ({}))) as { code?: string } & T;
    if (!res.ok) {
      const code = data.code;
      throw new ServiceError(code === 'unknown-account' || code === 'exists' || code === 'auth-required' || code === 'invalid' ? code : res.status === 401 ? 'auth-required' : 'network');
    }
    return data;
  }

  const auth: AuthService = {
    mode: 'api',
    getSession: async () => { try { return (await call<{ user: User | null }>('GET', '/auth/session')).user; } catch { return null; } },
    signUp: async (i) => (await call<{ user: User }>('POST', '/auth/sign-up', i)).user,
    signIn: async (i) => (await call<{ user: User }>('POST', '/auth/sign-in', i)).user,
    signOut: async () => { await call<void>('POST', '/auth/sign-out'); },
    requestPasswordReset: async (email) => { await call<void>('POST', '/auth/forgot', { email }); },
  };
  const comments: CommentsService = {
    list: async (postId) => (await call<{ comments: Comment[] }>('GET', `/posts/${encodeURIComponent(postId)}/comments`)).comments,
    add: async (postId, body, parentId) => (await call<{ comment: Comment }>('POST', `/posts/${encodeURIComponent(postId)}/comments`, { body, parentId })).comment,
    toggleLike: (commentId) => call('POST', `/comments/${encodeURIComponent(commentId)}/like`),
    remove: async (commentId) => { await call<void>('DELETE', `/comments/${encodeURIComponent(commentId)}`); },
    report: async (commentId) => { await call<void>('POST', `/comments/${encodeURIComponent(commentId)}/report`); },
  };
  const progress: ProgressService = {
    all: async () => { try { return (await call<{ progress: ProgressMap }>('GET', '/progress')).progress; } catch { return {}; } },
    markLesson: async (c, l, done) => { await call<void>('PUT', `/progress/${encodeURIComponent(c)}/lessons/${encodeURIComponent(l)}`, { done }); },
    saveScore: async (c, l, score, total) => { await call<void>('PUT', `/progress/${encodeURIComponent(c)}/lessons/${encodeURIComponent(l)}`, { score, total }); },
    setLast: async (c, l) => { await call<void>('PUT', `/progress/${encodeURIComponent(c)}/last`, { lessonId: l }); },
  };
  return { auth, comments, progress };
}
