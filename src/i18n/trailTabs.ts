import type { Locale } from './ui';

export interface TrailTab {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface TrailTabsCopy {
  tabs: TrailTab[];
  mapLabel: string;
}

export const trailTabs: Record<Locale, TrailTabsCopy> = {
  ru: {
    tabs: [
      {
        id: 'trail',
        label: 'Научно-познавательная тропа',
        heading: 'Научно-познавательная тропа яблони Сиверса',
        paragraphs: [
          '19 июня в Кузнецовском ущелье Маловоднического лесничества Тургенского филиала состоялось открытие новой научно-познавательной тропы яблони Сиверса. Проект реализован при спонсорской поддержке ТОО «Helios».',
          'Маршрут создан для знакомства посетителей с уникальными дикоплодовыми лесами и природным наследием Иле-Алатауского национального парка.',
        ],
      },
      {
        id: 'route',
        label: 'Как добраться',
        heading: 'Как добраться',
        paragraphs: [
          'Научно-познавательная тропа яблони Сиверса находится в Кузнецовском ущелье Маловодненского лесничества Тургенского филиала Иле-Алатауского национального парка. По вопросам посещения и организации маршрута рекомендуется заранее обратиться к сотрудникам Тургенского филиала.',
        ],
      },
      {
        id: 'center',
        label: 'Визит-центр',
        heading: 'Визит-центр «Яблоня Сиверса»',
        paragraphs: [
          'Перед посещением маршрута гости могут получить дополнительную информацию в визит-центре «Яблоня Сиверса». Здесь можно узнать о природных объектах Тургенского филиала, правилах посещения национального парка, туристических маршрутах и мерах по сохранению яблони Сиверса.',
          'Визит-центр также может стать отправной точкой для экскурсий, экологических мероприятий и знакомства с природным наследием Заилийского Алатау.',
        ],
      },
    ],
    mapLabel: 'Тургенское ущелье, Алматинская область',
  },
  kk: {
    tabs: [
      {
        id: 'trail',
        label: 'Ғылыми-танымдық соқпақ',
        heading: 'Сиверс алмасының ғылыми-танымдық соқпағы',
        paragraphs: [
          '19 маусымда Түрген филиалы Маловодное орманшылығының Кузнецов шатқалында Сиверс алмасының жаңа ғылыми-танымдық соқпағының ашылуы өтті. Жоба ТОО «Helios» компаниясының демеушілік қолдауымен жүзеге асырылды.',
          'Маршрут келушілерді бірегей жабайы жемісті ормандармен және Іле Алатауы ұлттық паркінің табиғи мұрасымен таныстыру мақсатында құрылған.',
        ],
      },
      {
        id: 'route',
        label: 'Қалай жету керек',
        heading: 'Қалай жетуге болады',
        paragraphs: [
          'Сиверс алмасының ғылыми-танымдық соқпағы Іле Алатауы ұлттық паркінің Түрген филиалы Маловодное орманшылығына қарасты Кузнецов шатқалында орналасқан. Маршрутқа бару және сапарды ұйымдастыру мәселелері бойынша алдын ала Түрген филиалының қызметкерлеріне хабарласу ұсынылады.',
        ],
      },
      {
        id: 'center',
        label: 'Визит-орталық',
        heading: '«Сиверс алмасы» визит-орталығы',
        paragraphs: [
          'Маршрутқа барар алдында қонақтар қосымша ақпаратты «Сиверс алмасы» визит-орталығынан ала алады. Мұнда Түрген филиалының табиғи нысандары, ұлттық паркке келу ережелері, туристік маршруттар және Сиверс алмасын сақтау шаралары туралы мәлімет беріледі.',
          'Визит-орталық экскурсиялар, экологиялық іс-шаралар және Іле Алатауының табиғи мұрасымен танысу үшін бастапқы нүкте бола алады.',
        ],
      },
    ],
    mapLabel: 'Түрген шатқалы, Алматы облысы',
  },
  en: {
    tabs: [
      {
        id: 'trail',
        label: 'The Educational Nature Trail',
        heading: "The Sievers' apple educational nature trail",
        paragraphs: [
          "On June 19, a new educational nature trail dedicated to Sievers' apple opened in the Kuznetsov gorge of the Malovodnoye forestry, Turgen branch. The project was realised with the sponsorship support of Helios LLP.",
          "The route was created to introduce visitors to the park's unique wild fruit forests and natural heritage.",
        ],
      },
      {
        id: 'route',
        label: 'How to Get There',
        heading: 'How to get there',
        paragraphs: [
          "The Sievers' apple educational nature trail is located in the Kuznetsov gorge of the Malovodnoye forestry, Turgen branch, Ile-Alatau National Park. For questions about visiting and organising a route, it is recommended to contact Turgen branch staff in advance.",
        ],
      },
      {
        id: 'center',
        label: 'Visitor Centre',
        heading: "Sievers' Apple visitor centre",
        paragraphs: [
          'Before setting out on the trail, guests can get additional information at the Sievers\' Apple visitor centre — about the natural sites of the Turgen branch, park visiting rules, tourist routes, and Sievers\' apple conservation measures.',
          'The visitor centre can also serve as a starting point for excursions, environmental events, and an introduction to the natural heritage of the Trans-Ili Alatau.',
        ],
      },
    ],
    mapLabel: 'Turgen Gorge, Almaty Region',
  },
};
