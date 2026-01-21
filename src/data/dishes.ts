export interface Dish {
  id: string;
  src: string;
  name: string;
}

export const dishes: Dish[] = [
  {
    id: 'steamed-egg-with-minced-pork',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1768971060/IMG_1477_hrzuvg.jpg',
    name: 'Steamed Egg with Minced Pork'
  },
];
