import { API_URL } from '../config/site';
import type { Services } from '../types/community';
import { demoServices } from './demo';
import { createHttpServices } from './http';

/** Point d'entrée unique : API réelle si PUBLIC_API_URL est défini, sinon démonstration locale. */
export const services: Services = API_URL ? createHttpServices(API_URL) : demoServices;
export const isDemo = !API_URL;
