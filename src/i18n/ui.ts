export const locales = ['ru', 'kk', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

type Dictionary = {
  siteName: string;
  skipToContent: string;
  switchLanguage: string;
  draftNotice: string;
};

export const ui: Record<Locale, Dictionary> = {
  ru: {
    siteName: 'Яблоня Сиверса',
    skipToContent: 'Перейти к содержанию',
    switchLanguage: 'Сменить язык',
    draftNotice: 'Черновой перевод на основе официального русского текста, ещё не проверен носителем языка.',
  },
  kk: {
    siteName: 'Сиверс алмасы',
    skipToContent: 'Мазмұнға өту',
    switchLanguage: 'Тілді ауыстыру',
    draftNotice: 'Ресми орыс мәтіні негізіндегі жоба аударма, әлі ана тілінде сөйлеушімен тексерілмеген.',
  },
  en: {
    siteName: "Sievers' Apple",
    skipToContent: 'Skip to content',
    switchLanguage: 'Switch language',
    draftNotice: "Draft translation based on the official Russian text, not yet reviewed by a native speaker.",
  },
};

export const languageNames: Record<Locale, string> = {
  ru: 'Русский',
  kk: 'Қазақша',
  en: 'English',
};
