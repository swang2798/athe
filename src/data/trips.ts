export interface Spot {
  name: string;
  area?: string;
  note?: string;
  src?: string;
  orientation?: "portrait" | "landscape";
}

export interface Trip {
  id: string;
  src: string;
  name: string;
  overview?: string;
  food?: Spot[];
  attractions?: Spot[];
  stays?: Spot[];
  places?: Spot[];
}

export const trips: Trip[] = [
  {
    id: "japan",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/thumb.jpg",
    name: "Japan",
    overview:
      "Two weeks across Tokyo, Kyoto, and Osaka. A mix of temples, street food, and hidden cafes.",
    food: [
      {
        name: "7/11",
        area: "Everywhere",
        note: `Once you try them in Japan, you'll wish we had them in the States.`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/7-11.mp4",
      },
      {
        name: "Sushi Dai",
        area: "Toyosu Fish Market, Tokyo",
        note: `Located at the fish market, the best omakase you'll ever have. Only $40. Line up at 4 AM.`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/sushi-dai.mp4",
        orientation: "landscape",
      },
      {
        name: "Unagi Sumiyaki Hitsumabushi Minokin",
        area: "Chiyoda City, Tokyo",
        note: "Enjoy delicious, fatty eel served as Hitsumabushi (served over rice in a wooden bowl with green tea poured over)",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/unagi-minokin.jpg",
      },
      {
        name: "Shimokita SABA Shokudo Sasuke Sakaba",
        area: "Tokyo",
        note: "Fresh Saba dishes directly from Toyosu Market. Lunch sets and izakaya at night.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/shimokita-saba.jpg",
        orientation: "landscape",
      },
      {
        name: "Nakajima Tea House",
        area: "Hamarikyu Gardens, Tokyo",
        note: "Beautiful authentic and traditional matcha and a perfect, serene way to start your day and located inside the beautiful Hamarikyu Gardens.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/nakajima-tea-house.mp4",
        orientation: "landscape",
      },
      {
        name: "Parfaiteria beL",
        area: "Shibuya, Tokyo",
        note: "Intricately crafted parfait desserts. The menu changes seasonally, and details the many components that go into each one.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/parfaiteria-bel.jpg",
        orientation: "landscape",
      },
      {
        name: "Suzukien Asakusa matcha gelato",
        area: "Taito City, Tokyo",
        note: "Try the most rich-tasting matcha gelato in the world.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/suzukien-matcha-gelato.mp4",
      },
      {
        name: "Gion Nishikawa",
        area: "Kyoto",
        note: "Elegant, minimalist venue for creative Japanese dishes by Michelin-starred chef Masayoshi Nishikawa. Very friendly and personable owner and memorable dining experience. Now has 2 stars.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/gion-nishikawa.jpg",
        orientation: "landscape",
      },
      {
        name: "Dainoji",
        area: "Kyoto",
        note: "Family-friendly okonomiyaki (savory pancake) restaurant. You get to cook it yourself!",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/dainoji.jpg",
        orientation: "landscape",
      },
      {
        name: "Ten",
        area: "Kyoto",
        note: "Small cafe and gift shop. Serves our favorite matcha cheesecake. Good escape from the crowds.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/ten.jpg",
        orientation: "landscape",
      },
      {
        name: "Arashiyama Miffy Sakura Kitchen",
        area: "Kyoto",
        note: "Super cute Miffy themed cafe. Area is also surrounded by many other character and souvenir shops.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/arashiyama-miffy-sakura-kitchen.jpg",
        orientation: "landscape",
      },
      {
        name: "% ARABICA Kyoto Arashiyama",
        area: "Kyoto",
        note: "Get an amazing view with your famous coffee.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/arabica-kyoto-arashiyama.mp4",
        orientation: "landscape",
      },
      {
        name: "Kagawa-udon Kitashinchi",
        area: "Osaka",
        note: "Classic udon joint in Kitashinchi. Ramen is overrated, eat this instead. They hand make the udon in front of you. Super cheap, flavorful, and best udon we've had.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/kagawa-udon-kitashinchi.mp4",
        orientation: "landscape",
      },
      {
        name: "Tsurara (Kakigori)",
        area: "Kyoto",
        note: "They are known for premium, artistic, and seasonal, limited-time offerings (e.g., cherry blossom season). Very beautiful and unique.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/food/tsurara-kakigori.jpg",
      },
    ],
    attractions: [
      {
        name: "Shinjuku Gyoen National Garden",
        area: "Tokyo",
        note: "Huge public garden with spacious lawns spacious lawns, meandering walking paths and tranquil scenery that provide a relaxing escape from the typical busy streets of Tokyo. Go to the Starbucks while you're there.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/shinjuku-gyoen.jpg",
        orientation: "landscape",
      },
      {
        name: "Shibuya Crossing",
        area: "Tokyo",
        note: "Very popular photo op destination. Described as the world's busiest pedestrian crossing, with as many as 3,000 people crossing during a single green light cycle.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/shibuya-crossing.jpg",
        orientation: "landscape",
      },
      {
        name: "DiverCity Tokyo Plaza",
        area: "Odaiba, Tokyo",
        note: "Huge mall with a Gundam Base store. Also has a life-sized Gundam statue outside. A must go for Gundam fans.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/thumb.jpg",
      },
      {
        name: "Studio Ghibili Musuem",
        area: "Tokyo",
        note: "Museum showcasing the work of the Japanese animation studio Studio Ghibli. Need to buy tickets a few months advance.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/studio-ghibli-museum.jpg",
        orientation: "landscape",
      },
      {
        name: "teamLab Borderless / Planets / Botanical Garden",
        area: "Tokyo / Osaka",
        note: "Popular, immersive museum known for its colorful, futuristic digital art installations & photo ops. Multiple locations. Book tickets in advance.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/teamlab.mp4",
        orientation: "landscape",
      },
      {
        name: "Tokyo DisneySea",
        area: "Tokyo",
        note: "A unique, adult-oriented park with exceptional theming, thrilling rides, and world-class food, making it a must-visit for those wanting a one-of-a-kind Disney park.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/tokyo-disneysea.jpg",
      },
      {
        name: "Suga Shrine",
        area: "Tokyo",
        note: 'You can re-live the last and the most important scene from the Japanese animation film, "Your Name" here.',
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/suga-shrine.jpg",
      },

      {
        name: "Fushimi Inari Taisha",
        area: "Kyoto",
        note: "Iconic site renowned for its mesmerizing path lined with approximately 10,000 vibrant vermilion torii gates. Go at sunrise to avoid crowds.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/fushimi-inari-taisha.jpg",
      },
      {
        name: "Arashiyama Bamboo Grove",
        area: "Kyoto",
        note: "Renowned bamboo grove featuring a picturesque pathway that winds through towering bamboo stalks, creating an otherworldly atmosphere. Best early morning. Combine with the monkey park nearby.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/arashiyama-bamboo-grove.mp4",
        orientation: "landscape",
      },
      {
        name: "Kinkaku-ju",
        area: "Kyoto",
        note: "Also known as the Golden Pavilion, this historic and serene temple captivates visitors with its stunning gold-leaf facade.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/kinkaku-ji.jpg",
      },
      {
        name: "Arashiyama Monkey Park Iwatayama",
        area: "Kyoto",
        note: "Hike up a mountainside, feed wild monkeys and enjoy the view.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/arashiyama-monkey-park.mp4",
      },
      {
        name: "Osaka Castle",
        area: "Osaka",
        note: "A historic gem dating back to 1597, stands as a testament to Japan's rich heritage.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/osaka-castle.png",
      },
      {
        name: "Umeda Sky Building",
        area: "Osaka",
        note: "An iconic structure featuring a rooftop garden observatory that provides breathtaking panoramic views of the cityscape.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/umeda-sky-building.jpg",
        orientation: "landscape",
      },
      {
        name: "Osaka Aquarium Kaiyukan",
        area: "Osaka",
        note: "One of the largest aquariums globally, featuring diverse marine life from Arctic to tropical regions. Can see a whale shark :O",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/attractions/osaka-aquarium-kaiyukan.mp4",
      },
    ],
    stays: [
      {
        name: "APA Hotel Pride Kokkaigijidomae",
        area: "Tokyo",
        note: "Minimal and clean. A good location for exploring as its close to the station.",
      },
      {
        name: "Kyoto Arashiyama Onsen Kadensho",
        area: "Kyoto",
        note: "A must stay in Kyoto. Reasonable priced and has multiple private onsens that you'll probably use every night.",
      },
      {
        name: "Villa Fontaine Grand Osaka-Umeda",
        area: "Osaka",
        note: "4-star hotel located in the heart of Osaka, within walking distance of several temples and other attractions.",
      },
    ],
    places: [
      {
        name: "Assort Tokyo",
        area: "Tokyo",
        note: `Super cool English speaking hairstylists. They give amazing haircuts. We went to their Tokyo location.`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/places/assort-tokyo.mp4",
        orientation: "landscape",
      },
      {
        name: "Tokyo Character Street",
        area: "Tokyo",
        note: `With 21 stores featuring animated media stars from Miffy to Pokémon to Moomin, Tokyo Character Street in Tokyo Station is heaven if you love cartoons or cute stuff!`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/places/tokyo-character-street.mp4",
        orientation: "landscape",
      },
      {
        name: "Tsutaya Books Daikanyama",
        area: "Tokyo",
        note: `Iconic and beautiful bookstore with an amazing atmosphere. You could spend forever in here if you're a book fan.`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/places/tsutaya-books-daikanyama.jpg",
        orientation: "landscape",
      },
      {
        name: "MEGA Don Quijote",
        area: "Tokyo",
        note: "A massive, multi-story discount store known for its huge selection of souvenirs, cosmetics, electronics, costumes, and unique Japanese goods.",
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/places/mega-don-quijote.jpg",
        orientation: "landscape",
      },
      {
        name: "Trefac Style Shimokitazawa",
        area: "Shimokitazawa, Setagaya (Close to Tokyo)",
        note: `Shimokitazawa is great if you're into thrifting. This store had so many great peices and tax free. Another great one in Shibuya is CHICAGO.`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/places/trefac-style-shimokitazawa.jpg",
        orientation: "landscape",
      },
      {
        name: "Kamakura",
        area: "Kamakura, Kanagawa (about 1.5 hours from Tokyo)",
        note: `Shimokitazawa is great if you're into thrifting. This store had so many great peices and tax free. Another great one in Shibuya is CHICAGO.`,
        src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/places/kamakura.mp4",
        orientation: "landscape",
      },
    ],
  },
  {
    id: "taiwan",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/taiwan/thumb.jpg",
    name: "Taiwan",
  },
  {
    id: "korea",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/korea/thumb.jpg",
    name: "South Korea",
  },
  {
    id: "nyc",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/nyc/IMG_2219.jpg",
    name: "New York City",
  },
];
