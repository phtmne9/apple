import type { Locale } from './ui';

export type RuleIcon = 'fire' | 'branch' | 'flower' | 'litter' | 'harm' | 'route';

export interface VisitRule {
  icon: RuleIcon;
  text: string;
}

export interface VisitRulesCopy {
  rules: VisitRule[];
  outro: string;
}

export const visitRules: Record<Locale, VisitRulesCopy> = {
  ru: {
    rules: [
      { icon: 'fire', text: 'Не разводить костры' },
      { icon: 'branch', text: 'Не ломать и не срезать ветви деревьев' },
      { icon: 'flower', text: 'Не срывать цветы и плоды' },
      { icon: 'litter', text: 'Не оставлять мусор' },
      { icon: 'harm', text: 'Не наносить вред растениям и животным' },
      { icon: 'route', text: 'Не сходить с обозначенного маршрута' },
    ],
    outro: 'Соблюдение этих правил помогает сохранить хрупкую экосистему дикоплодовых лесов для будущих поколений.',
  },
  kk: {
    rules: [
      { icon: 'fire', text: 'От жағуға болмайды' },
      { icon: 'branch', text: 'Ағаш бұтақтарын сындыруға және кесуге болмайды' },
      { icon: 'flower', text: 'Гүлдер мен жемістерді жұлуға болмайды' },
      { icon: 'litter', text: 'Қоқыс қалдыруға болмайды' },
      { icon: 'harm', text: 'Өсімдіктер мен жануарларға зиян келтіруге болмайды' },
      { icon: 'route', text: 'Белгіленген маршруттан ауытқуға болмайды' },
    ],
    outro: 'Осы ережелерді сақтау жабайы жемісті ормандардың нәзік экожүйесін болашақ ұрпақ үшін сақтауға көмектеседі.',
  },
  en: {
    rules: [
      { icon: 'fire', text: 'Do not light fires' },
      { icon: 'branch', text: 'Do not break or cut tree branches' },
      { icon: 'flower', text: 'Do not pick flowers or fruit' },
      { icon: 'litter', text: 'Do not leave litter' },
      { icon: 'harm', text: 'Do not harm plants or animals' },
      { icon: 'route', text: 'Do not leave the marked route' },
    ],
    outro: 'Following these rules helps preserve the fragile ecosystem of the wild fruit forests for future generations.',
  },
};
