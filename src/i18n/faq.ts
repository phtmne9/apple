import type { Locale } from './ui';

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: Record<Locale, FaqItem[]> = {
  ru: [
    {
      q: 'Правда ли, что Казахстан — родина яблок?',
      a: 'Гипотезу о том, что регион Тянь-Шаня и Заилийского Алатау — центр происхождения культурной яблони, впервые высказал в 1920–1930-е годы ботаник Николай Вавилов. В 2010 году её подтвердили генетически: анализ генома домашней яблони (Velasco et al., Nature Genetics, 2010) показал, что яблоня Сиверса — основной дикий предок современных сортов.',
    },
    {
      q: 'Чем яблоня Сиверса отличается от обычной садовой яблони?',
      a: 'Яблоня Сиверса — дикий вид с высоким генетическим разнообразием и природной устойчивостью к болезням, морозам и неблагоприятным условиям среды. Именно эти качества делают её ценной для селекции культурных сортов.',
    },
    {
      q: 'Можно ли есть плоды яблони Сиверса на тропе?',
      a: 'Нет. Хотя плоды съедобны, срывать цветы и плоды на территории запрещено правилами посещения — это редкий охраняемый вид, и сбор плодов угрожает его сохранению.',
    },
    {
      q: 'Кто такой Аймак Джангалиев?',
      a: 'Казахстанский учёный, доказавший на генетическом уровне, что яблоня Сиверса — предок культурных яблонь, и добившийся включения вида в Красную книгу. Подробнее — на странице «Джангалиев».',
    },
    {
      q: 'Как попасть на тропу яблони Сиверса?',
      a: 'Тропа находится в Кузнецовском ущелье Маловоднического лесничества Тургенского филиала Иле-Алатауского национального парка. Перед визитом рекомендуется связаться с сотрудниками Тургенского филиала или визит-центром «Яблоня Сиверса» — подробности на странице «Тропа».',
    },
    {
      q: 'Почему на сайте нет точных координат рощи?',
      a: 'Яблоня Сиверса — редкий охраняемый вид. Публикация точных координат создаёт риск вытаптывания и неконтролируемого туризма, поэтому мы намеренно указываем только общий район, а не точные GPS-координаты.',
    },
  ],
  kk: [
    {
      q: 'Қазақстан — алманың отаны деген рас па?',
      a: 'Тянь-Шань мен Іле Алатауы өңірі мәдени алманың шығу орталығы деген болжамды 1920–1930 жылдары ботаник Николай Вавилов бірінші болып айтқан. 2010 жылы бұл генетикалық деңгейде расталды: үй алмасының геномын талдау (Velasco et al., Nature Genetics, 2010) Сиверс алмасының қазіргі сорттардың негізгі жабайы арғы тегі екенін көрсетті.',
    },
    {
      q: 'Сиверс алмасы қарапайым бау алмасынан немен ерекшеленеді?',
      a: 'Сиверс алмасы — генетикалық әртүрлілігі жоғары және ауруларға, аязға, қолайсыз орта жағдайларына табиғи төзімді жабайы түр. Дәл осы қасиеттер оны мәдени сорттарды селекциялау үшін құнды етеді.',
    },
    {
      q: 'Соқпақта Сиверс алмасының жемісін жеуге бола ма?',
      a: 'Жоқ. Жемістері жеуге жарамды болғанымен, аумақта гүлдер мен жемістерді жұлуға келу ережелерімен тыйым салынған — бұл сирек қорғалатын түр, және жеміс жинау оның сақталуына қауіп төндіреді.',
    },
    {
      q: 'Аймақ Жангалиев кім?',
      a: 'Сиверс алмасының мәдени алмалардың арғы тегі екенін генетикалық деңгейде дәлелдеген және түрдің Қызыл кітапқа енуіне қол жеткізген қазақстандық ғалым. Толығырақ — «Жангалиев» бетінде.',
    },
    {
      q: 'Сиверс алмасының соқпағына қалай жетуге болады?',
      a: 'Соқпақ Іле Алатауы ұлттық паркінің Түрген филиалы Маловодное орманшылығына қарасты Кузнецов шатқалында орналасқан. Барар алдында Түрген филиалының қызметкерлерімен немесе «Сиверс алмасы» визит-орталығымен байланысу ұсынылады — толығырақ «Соқпақ» бетінде.',
    },
    {
      q: 'Сайтта неге рощаның дәл координаттары жоқ?',
      a: 'Сиверс алмасы — сирек қорғалатын түр. Дәл координаттарды жариялау таптап кету мен бақыланбайтын туризм қаупін тудырады, сондықтан біз әдейі тек жалпы аймақты көрсетеміз, дәл GPS координаттарын емес.',
    },
  ],
  en: [
    {
      q: 'Is it true that Kazakhstan is the birthplace of apples?',
      a: 'The hypothesis that the Tian Shan and Trans-Ili Alatau region is the centre of origin of the cultivated apple was first proposed in the 1920s–30s by botanist Nikolai Vavilov. It was confirmed genetically in 2010: an analysis of the domesticated apple genome (Velasco et al., Nature Genetics, 2010) showed that Sievers’ apple is the main wild ancestor of modern varieties.',
    },
    {
      q: "How is Sievers' apple different from an ordinary garden apple?",
      a: "Sievers' apple is a wild species with high genetic diversity and natural resistance to disease, frost, and adverse conditions — qualities that make it valuable for breeding cultivated varieties.",
    },
    {
      q: "Can you eat the fruit of Sievers' apple on the trail?",
      a: 'No. Although the fruit is edible, picking flowers or fruit within the protected area is against the visiting rules — this is a rare, protected species, and picking fruit threatens its conservation.',
    },
    {
      q: 'Who was Aimak Dzhangaliev?',
      a: "A Kazakh scientist who proved at the genetic level that Sievers' apple is the ancestor of cultivated apples, and secured the species' listing in the Red Book. Read more on the Dzhangaliev page.",
    },
    {
      q: "How do you get to the Sievers' apple trail?",
      a: "The trail is located in the Kuznetsov gorge of the Malovodnoye forestry, Turgen branch, Ile-Alatau National Park. Before visiting, it is recommended to contact Turgen branch staff or the Sievers' Apple visitor centre — see the Trail page for details.",
    },
    {
      q: "Why doesn't the site show the grove's exact coordinates?",
      a: "Sievers' apple is a rare, protected species. Publishing exact coordinates risks trampling and uncontrolled tourism, so we deliberately show only the general area, not precise GPS coordinates.",
    },
  ],
};
