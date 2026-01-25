export interface Dish {
  id: string;
  src: string;
  name: string;
  tags: string[];
  images: string[];
  video: string;
  overview: string;
  ingredients: string[];
  instructions: string;
  tools?: string[];
}

export const dishes: Dish[] = [
  {
    id: 'steamed-egg-with-minced-pork',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1768971060/IMG_1477_hrzuvg.jpg',
    name: 'Steamed Egg with Minced Pork',
    tags: ['Dinner', 'Lunch'],
    images: [
      'https://res.cloudinary.com/dlenbkeui/image/upload/q_100/v1768971060/IMG_1477_hrzuvg.jpg',
      'https://res.cloudinary.com/dlenbkeui/image/upload/q_100/v1768973028/IMG_1474_denobs.jpg',
      'https://res.cloudinary.com/dlenbkeui/image/upload/q_100/v1768973029/IMG_1475_qnardv.jpg',
    ],
    video: 'IMG_1476_kzhbja',
    overview: 'Probably my favorite dish growing up. My family and I would eat this like 2-3 times a week.',
    ingredients: [
      '5 eggs',
      '1/2 lb minced pork',
      '3 tbsp soy sauce',
      '1 tsp sesame oil',
      '3 tbsp water',
      '1/2 tsp sugar'
    ],
    instructions: 'Mix the minced pork with soy sauce, sesame oil, water, and sugar. Let it marinate for a few minutes. In a ' +
      'separate bowl, beat the eggs. Pour the eggs over the minced pork and mix well, making sure all of the meat is coated with the eggs. ' +
      'Heat up water to a boil and then reduce to medium heat. Steam for 25-30 min with the lid slightly open. Once done, let it rest for 5 minutes before serving.',
  },
  {
    id: 'iced-matcha-latte',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1769366330/IMG_1503_lk9gk9.jpg',
    name: 'Iced Matcha Latte',
    tags: ['Drinks'],
    images: [
      'https://res.cloudinary.com/dlenbkeui/image/upload/v1769367607/IMG_1545_thonat.png',
      'https://res.cloudinary.com/dlenbkeui/image/upload/v1769367044/IMG_1543_hgfigz.png',
      'https://res.cloudinary.com/dlenbkeui/image/upload/v1769367215/IMG_1544_wdxbyl.png',
    ],
    video: 'IMG_1499_erxnxi',
    overview: 'For matcha, we recommend using either Jugetsudo, Mizuba Daily, Rocky\'s or Marukyu Koyamaen.',
    ingredients: [
      'Matcha powder',
      'Milk',
      'Water',
      'Ice',
      'Maple syrup, honey, or agave for sweetener (optional)'
    ],
    tools: ['Matcha whisk', 'Matcha bowl',  'Matcha spoon', 'Fine mesh sifter', 'Digital scale', 'Kettle'],
    instructions: 'In a kettle, heat water to 175°F. Pour some of the water into a separate cup and set the whisk inside to bloom it. ' +
      'Place the matcha bowl onto a scale and zero the weight. Sift 4 g of matcha into the bowl. Add water until the weight is 20 g. ' +
      'Whisk the matcha slowly until it turns into a dark green paste. Continue adding water until the total weight is 40 g. Whisk the matcha in an up and down motion using your wrist, moving side to side until foam forms. ' +
      'Fill a glass with ice and your choice of milk. Pour the matcha into the glass. Add 1 tsp of sweetener if desired. Mix and drink immediately.',
  },
];
