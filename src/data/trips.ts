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
        name: '7/11',
        area: 'Everywhere',
        note: `Once you try them in Japan, you'll wish we had them in the States.`
      },
      {
        name: 'Sushi Dai',
        area: 'Toyosu Fish Market, Tokyo',
        note: `The best omakase you'll ever have. For $40. Line up at 4 AM.`
      },
      {
        name: 'Unagi Sumiyaki Hitsumabushi Minokin',
        area: 'Chiyoda City, Tokyo',
        note: 'Enjoy delicious, fatty eel served as Hitsumabushi (served over rice in a wooden bowl with green tea poured over)'
      },
      {
        name: 'Parfaiteria beL',
        area: 'Shibuya, Tokyo',
        note: 'Intricately crafted parfait desserts. The menu changes seasonally, and details the many components that go into each one.'
      },
      {
        name: 'Suzukien Asakusa matcha gelato',
        area: 'Taito City, Tokyo',
        note: 'Try the most rich-tasting matcha gelato in the world.'
      },
      {
        name: 'Gion Nishikawa',
        area: 'Kyoto',
        note: 'Elegant, minimalist venue for creative Japanese dishes by Michelin-starred chef Masayoshi Nishikawa.'
      },
      {
        name: 'Dainoji',
        area: 'Kyoto',
        note: 'Family-friendly okonomiyaki (savory pancake) restaurant. You get to cook it yourself!'
      },
      {
        name: 'Ten',
        area: 'Kyoto',
        note: 'Small cafe and gift shop. Serves our favorite matcha cheesecake.'
      },
      {
        name: 'Arashiyama Miffy Sakura Kitchen',
        area: 'Kyoto',
        note: 'Super cute Miffy themed cafe. Area is also surrounded by many other character and souvenir shops.'
      },
      {
        name: 'Kagawa-udon Kitashinchi',
        area: 'Osaka',
        note: 'Classic udon joint in Kitashinchi. Ramen is overrated, eat this instead. '
      }
    ],
    attractions: [
      {
        name: 'Shinjuku Gyoen National Garden',
        area: 'Tokyo',
        note: 'Huge public garden with spacious lawns spacious lawns, meandering walking paths and tranquil scenery that provide a relaxing escape from the typical busy streets of Tokyo.'
      },
      {
        name: 'Shibuya Crossing',
        area: 'Tokyo',
        note: 'Very popular photo op destination. Described as the world\'s busiest pedestrian crossing, with as many as 3,000 people crossing during a single green light cycle.'
      },
      {
        name: 'Shimokitazawa',
        area: 'Tokyo',
        note: 'The best place to buy vintage clothes and in our opinion, shopping in general. Destroys any mall you\'ll ever go to.'
      },
      {
        name: 'TeamLab Borderless',
        area: 'Tokyo',
        note: 'Popular, immersive museum known for its colorful, futuristic digital art installations & photo ops. Book tickets in advance.'
      },
      {
        name: 'DiverCity Tokyo Plaza',
        area: 'Odaiba, Tokyo',
        note: 'Huge mall with a Gundam Base store. Also has a life-sized Gundam statue outside. A must go for Gundam fans.'
      },
      {
        name: 'Tokyo DisneySea',
        area: 'Tokyo',
        note: 'A unique, adult-oriented park with exceptional theming, thrilling rides, and world-class food, making it a must-visit for those wanting a one-of-a-kind Disney park.'
      },
      {
        name: 'Suga Shrine',
        area: 'Tokyo',
        note: 'You can re-live the last and the most important scene from the Japanese animation film, "Your Name" here.'
      },

      {
        name: 'Fushimi Inari Taisha',
        area: 'Kyoto',
        note: 'Iconic site renowned for its mesmerizing path lined with approximately 10,000 vibrant vermilion torii gates. Go at sunrise to avoid crowds.'
      },
      {
        name: 'Arashiyama Bamboo Grove',
        area: 'Kyoto',
        note: 'Renowned bamboo grove featuring a picturesque pathway that winds through towering bamboo stalks, creating an otherworldly atmosphere. Best early morning. Combine with the monkey park nearby.'
      },
      {
        name: 'Kinkaku-ju',
        area: 'Kyoto',
        note: 'Also known as the Golden Pavilion, this historic and serene temple captivates visitors with its stunning gold-leaf facade.'
      },
      {
        name: 'Sanjūsangendō Temple',
        area: 'Kyoto',
        note: 'The temple\'s main hall houses an impressive collection of 1,001 life-sized wooden statues of the goddess Kannon.'
      },
      {
        name: 'Osaka Castle',
        area: 'Osaka',
        note: 'A historic gem dating back to 1597, stands as a testament to Japan\'s rich heritage.'
      },
      {
        name: 'Umeda Sky Building',
        area: 'Osaka',
        note: 'An iconic structure featuring a rooftop garden observatory that provides breathtaking panoramic views of the cityscape.'
      },
      {
        name: 'Osaka Aquarium Kaiyukan',
        area: 'Osaka',
        note: 'One of the largest aquariums globally, featuring diverse marine life from Arctic to tropical regions. Can see a whale shark :O'
      }
    ],
    stays: [
      {
        name: 'APA Hotel Pride Kokkaigijidomae',
        area: 'Tokyo',
        note: 'Minimal and clean. A good location for exploring as its close to the station.'
      },
      {
        name: 'Kyoto Arashiyama Onsen Kadensho',
        area: 'Kyoto',
        note: 'A must stay in Kyoto. Reasonable priced and has multiple private onsens that you\'ll probably use every night.'
      },
      {
        name: 'Villa Fontaine Grand Osaka-Umeda',
        area: 'Osaka',
        note: '4-star hotel located in the heart of Osaka, within walking distance of several temples and other attractions.'
      },
    ]
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
