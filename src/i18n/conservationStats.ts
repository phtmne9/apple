import type { Locale } from './ui';

export interface ConservationStat {
  value: string;
  detail: string;
}

export const conservationStats: Record<Locale, ConservationStat[]> = {
  ru: [
    {
      value: 'Резерват площадью 31,9 га',
      detail: 'С целью сохранения редкого вида в 2010 году в Кузнецовском ущелье Маловоднического лесничества Тургенского филиала был создан лесной генетический резерват площадью 31,9 га.',
    },
    {
      value: '28 000 саженцев высаживают ежегодно',
      detail: 'Ежегодно на площади 15 га высаживается около 28 000 саженцев. Также проводится сбор до 120 кг семян, которые высеваются в питомниках для дальнейшего выращивания посадочного материала.',
    },
    {
      value: 'В Красной книге с 2014 года',
      detail: 'Вид занесён в Красную книгу Казахстана 2014 года и находится под охраной государства.',
    },
  ],
  kk: [
    {
      value: 'Аумағы 31,9 гектар резерват',
      detail: 'Сирек кездесетін түрді сақтау мақсатында 2010 жылы Түрген филиалы Маловодное орманшылығының Кузнецов шатқалында аумағы 31,9 гектарды құрайтын орман генетикалық резерваты құрылды.',
    },
    {
      value: 'Жыл сайын 28 000 көшет отырғызылады',
      detail: 'Жыл сайын 15 гектар аумаққа шамамен 28 000 көшет отырғызылады. Сонымен қатар 120 килограмға дейін тұқым жиналып, олар кейін отырғызу материалдарын алу үшін тұқымбақтарға себіледі.',
    },
    {
      value: '2014 жылдан Қызыл кітапта',
      detail: 'Бұл түр Қазақстанның 2014 жылғы Қызыл кітабына енгізілген және мемлекет қорғауында.',
    },
  ],
  en: [
    {
      value: 'A 31.9-hectare reserve',
      detail: 'To conserve this rare species, a 31.9-hectare forest genetic reserve was established in 2010 in the Kuznetsov gorge of the Malovodnoye forestry, Turgen branch.',
    },
    {
      value: '28,000 seedlings planted every year',
      detail: 'Each year, around 28,000 seedlings are planted across 15 hectares. Up to 120 kg of seeds are also collected annually and sown in nurseries to grow further planting stock.',
    },
    {
      value: 'In the Red Book since 2014',
      detail: 'The species is listed in the 2014 Red Book of Kazakhstan and is under state protection.',
    },
  ],
};
