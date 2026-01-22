export interface Dish {
  id: string;
  src: string;
  name: string;
  images: string[];
  video: string;
  overview: string;
  ingredients: string[];
  instructions: string;
}

export const dishes: Dish[] = [
  {
    id: 'steamed-egg-with-minced-pork',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1768971060/IMG_1477_hrzuvg.jpg',
    name: 'Steamed Egg with Minced Pork',
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
];
