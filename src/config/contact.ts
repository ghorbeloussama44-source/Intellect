/**
 * Coordonnées publiques d'Intellect. Tout est facultatif : seules les valeurs renseignées sont affichées
 * (page Contact, pied de page) et balisées en JSON-LD. Ne rien inventer : à compléter avec le client.
 */
export interface ContactInfo {
  email?: string;
  /** Format international, par exemple +49... (sans espaces ni tirets pour le lien). */
  phone?: string;
  /** Numéro WhatsApp au format international sans le signe +. */
  whatsapp?: string;
  /** Adresse postale par langue, si l'agence reçoit du public. */
  address?: Partial<Record<'fr' | 'en' | 'ar', string>>;
}

export const CONTACT: ContactInfo = {};
