export interface Dish {
  id: string;
  src: string;
  name: string;
  images?: [string, string];
  video?: string;
  ingredients?: string[];
  instructions?: string;
}

export const dishes: Dish[] = [
  {
    id: 'steamed-egg-with-minced-pork',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1768971060/IMG_1477_hrzuvg.jpg',
    name: 'Steamed Egg with Minced Pork',
    images: [
      'https://res.cloudinary.com/dlenbkeui/image/upload/q_100/v1768973028/IMG_1474_denobs.jpg',
      'https://res.cloudinary.com/dlenbkeui/image/upload/q_100/v1768973029/IMG_1475_qnardv.jpg',
    ],
    video: 'IMG_1476_kzhbja',
    ingredients: [
      '4 eggs',
      '200g minced pork',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '2 stalks green onion',
      'Salt and pepper to taste',
    ],
    instructions: 'Beat eggs with a pinch of salt. Mix minced pork with soy sauce and sesame oil. Layer the pork in a shallow dish, pour eggs over. Steam on medium heat for 12-15 minutes until set. Garnish with green onions and serve hot.',
  },
];
