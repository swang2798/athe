export interface Spot {
  name: string;
  area?: string;
  note?: string;
  src?: string;
}

export interface Trip {
  id: string;
  src: string;
  name: string;
  overview?: string;
  food?: Spot[];
  attractions?: Spot[];
  stays?: Spot[];
  tips?: string[];
}

export const trips: Trip[] = [
  {
    id: 'japan',
    src: 'https://res.cloudinary.com/dlenbkeui/image/upload/v1769063916/IMG_8006_zd0zer.jpg',
    name: 'Japan',
    overview: 'Two weeks across Tokyo, Kyoto, and Osaka. A mix of temples, street food, and hidden cafes.',
    food: [
      {
        name: 'Sushi Dai',
        area: 'Toyosu Fish Market, Tokyo',
        note: `The best omakase you'll ever have. For $40. Line up at 4 AM.`
      },
      {
        name: 'Gion Nishikawa',
        area: 'Kyoto',
        note: 'Elegant, minimalist venue for creative Japanese dishes by Michelin-starred chef Masayoshi Nishikawa.'
      },
      {
        name: 'Parfaiteria beL',
        area: 'Shibuya, Tokyo',
        note: 'Intricately crafted parfait desserts.'
      },
      {
        name: 'Unagi Sumiyaki Hitsumabushi Minokin',
        area: 'Chiyoda City, Tokyo',
        note: 'Highly recommended dish is the "Hitsumabushi," which offers the opportunity to savor the eel in various ways, including the traditional Ochazuke (green tea poured over rice) as a delightful finale.'
      }
    ],
    attractions: [
      {name: 'Gion Nishikawa', area: 'Kyoto', note: 'Thousands of torii gates. Go at sunrise to avoid crowds.'},
      {name: 'TeamLab Borderless', area: 'Tokyo', note: 'Immersive digital art. Book tickets in advance.'},
      {
        name: 'Arashiyama Bamboo Grove',
        area: 'Kyoto',
        note: 'Best early morning. Combine with the monkey park nearby.'
      },
    ],
    stays: [
      {name: 'MUJI Hotel Ginza', area: 'Tokyo', note: 'Minimal and clean. Perfect location for exploring.'},
      {name: 'Piece Hostel Sanjo', area: 'Kyoto', note: 'Great common area, walking distance to everything.'},
    ],
    tips: [
      'Get a Suica card at the airport — works on all trains and convenience stores.',
      'Konbini (convenience stores) are genuinely great for meals. Don\'t sleep on onigiri.',
      '7-Eleven ATMs are the most reliable for foreign cards.',
    ],
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
