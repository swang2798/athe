export interface Trip {
  id: string;
  src: string;
  name: string;
}

export const trips: Trip[] = [
  {
    id: 'japan',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1769063916/IMG_8006_zd0zer.jpg',
    name: 'Japan',
  },
  {
    id: 'taiwan',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1769064042/IMG_0543_d2itnb.jpg',
    name: 'Taiwan',
  },
  {
    id: 'korea',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1769063704/IMG_0695_zy6osy.jpg',
    name: 'South Korea',
  },
];

