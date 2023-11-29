export enum Locales {
  en = 'en',
  ro = 'ro',
  ru = 'ru',
}

export const locales = [Locales.en, Locales.ro, Locales.ru] as const
// Used when no locale matches
export const defaultLocale = Locales.ro
