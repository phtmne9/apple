import type { Locale } from './ui';

export interface Fact {
  value: string;
  label: string;
}

export const homeFacts: Record<Locale, Fact[]> = {
  ru: [
    { value: '900–1800 м', label: 'высота произрастания в парке' },
    { value: 'Красная книга РК, 2014', label: 'статус охраны вида' },
    { value: '31,9 га', label: 'генетический резерват с 2010 года' },
    { value: '~28 000 саженцев/год', label: 'высаживается на площади 15 га' },
  ],
  kk: [
    { value: '900–1800 м', label: 'парктегі өсу биіктігі' },
    { value: 'ҚР Қызыл кітабы, 2014', label: 'түрдің қорғау мәртебесі' },
    { value: '31,9 гектар', label: '2010 жылдан бергі генетикалық резерват' },
    { value: '~28 000 көшет/жыл', label: '15 гектарға отырғызылады' },
  ],
  en: [
    { value: '900–1,800 m', label: 'elevation range in the park' },
    { value: 'Red Book of Kazakhstan, 2014', label: "the species' protection status" },
    { value: '31.9 ha', label: 'genetic reserve since 2010' },
    { value: '~28,000 seedlings/yr', label: 'planted across 15 ha' },
  ],
};
