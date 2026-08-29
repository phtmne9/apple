import type { Locale } from './ui';

interface HomeCopy {
  navPills: { species: string; trail: string; involve: string };
  headings: { species: string };
  cta: { dzhangaliev: string };
}

export const home: Record<Locale, HomeCopy> = {
  ru: {
    navPills: { species: 'Вид', trail: 'Научно-познавательная тропа', involve: 'Участие' },
    headings: {
      species: 'Яблоня Сиверса — национальное достояние Казахстана',
    },
    cta: {
      dzhangaliev: 'Читать про Аймака Джангалиева, «отца яблок» →',
    },
  },
  kk: {
    navPills: { species: 'Түр', trail: 'Ғылыми-танымдық соқпақ', involve: 'Қатысу' },
    headings: {
      species: 'Сиверс алмасы — Қазақстанның ұлттық қазынасы',
    },
    cta: {
      dzhangaliev: '«Алма атасы» Аймақ Жангалиев туралы оқу →',
    },
  },
  en: {
    navPills: { species: 'The Species', trail: 'The Educational Nature Trail', involve: 'Get Involved' },
    headings: {
      species: "Sievers' Apple — a National Treasure of Kazakhstan",
    },
    cta: {
      dzhangaliev: 'Read about Aimak Dzhangaliev, the "father of apples" →',
    },
  },
};
