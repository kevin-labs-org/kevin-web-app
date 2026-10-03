export const Language = {
  ENGLISH: 'en',
  FRENCH: 'fr',
} as const;

export type Language = (typeof Language)[keyof typeof Language];

export const LanguageList: Language[] = Object.values(Language) as Language[];
