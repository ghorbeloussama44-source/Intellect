import { SITE_URL } from './site';

/** Transforme un chemin du site en URL absolue dérivée de SITE_URL. */
export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).href;
