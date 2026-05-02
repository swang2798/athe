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
    id: "steamed-egg-with-minced-pork",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/steamed-egg-with-minced-pork/thumb.jpg",
    name: "Steamed Egg with Minced Pork",
    tags: ["Dinner", "Lunch"],
    images: [
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/steamed-egg-with-minced-pork/thumb.jpg",
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/steamed-egg-with-minced-pork/2.jpg",
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/steamed-egg-with-minced-pork/3.jpg",
    ],
    video: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/steamed-egg-with-minced-pork/video.mp4",
    overview:
      "Probably my favorite dish growing up. My family and I would eat this like 2-3 times a week.",
    ingredients: [
      "5 eggs",
      "1/2 lb minced pork",
      "3 tbsp soy sauce",
      "1 tsp sesame oil",
      "3 tbsp water",
      "1/2 tsp sugar",
    ],
    instructions:
      "Mix the minced pork with soy sauce, sesame oil, water, and sugar. Let it marinate for a few minutes. In a " +
      "separate bowl, beat the eggs. Pour the eggs over the minced pork and mix well, making sure all of the meat is coated with the eggs. " +
      "Heat up water to a boil and then reduce to medium heat. Steam for 25-30 min with the lid slightly open. Once done, let it rest for 5 minutes before serving.",
  },
  {
    id: "iced-matcha-latte",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/iced-matcha-latte/thumb.mp4",
    name: "Iced Matcha Latte",
    tags: ["Drinks"],
    images: [
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/iced-matcha-latte/thumb.mp4",
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/iced-matcha-latte/2.png",
      //"https://res.cloudinary.com/dlenbkeui/video/upload/q_auto/v1772075787/IMG_1731_n5t9d2.mov",
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/iced-matcha-latte/3.mp4",
    ],
    video: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/iced-matcha-latte/video.mp4",
    overview:
      "For matcha, we recommend using either Jugetsudo, Mizuba Daily, Rocky's or Marukyu Koyamaen.",
    ingredients: [
      "Matcha powder",
      "Milk",
      "Water",
      "Ice",
      "Maple syrup, honey, or agave for sweetener (optional)",
    ],
    tools: [
      "Matcha whisk",
      "Matcha bowl",
      "Matcha spoon",
      "Fine mesh sifter",
      "Digital scale",
      "Kettle",
    ],
    instructions:
      "In a kettle, heat water to 175°F. Pour some of the water into a separate cup and set the whisk inside to bloom it. " +
      "Place the matcha bowl onto a scale and zero the weight. Sift 4 g of matcha into the bowl. Add water until the weight is 20 g. " +
      "Whisk the matcha slowly until it turns into a dark green paste. Continue adding water until the total weight is 40 g. Whisk the matcha in an up and down motion using your wrist, moving side to side until foam forms. " +
      "Fill a glass with ice and your choice of milk. Pour the matcha into the glass. Add 1 tsp of sweetener if desired. Mix and drink immediately.",
  },
  {
    id: "cola-ribs",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/cola-ribs/thumb.jpg",
    name: "Cola and Soy Glazed Ribs",
    tags: ["Dinner"],
    images: [
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/cola-ribs/thumb.jpg",
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/cola-ribs/2.jpg",
      "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/cola-ribs/3.jpg",
    ],
    video: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cooking/cola-ribs/video.mp4",
    overview: "Credits to Frankie Gaw for the recipe idea.",
    ingredients: [
      "2 tbsp light brown sugar",
      "2 tbsp granulated or cane sugar",
      "2 tsp smoked paprika",
      "1 tbsp flaky salt",
      "1 tsp onion powder",
      "1 tsp black pepper",
      "2 tsp garlic powder",
      "2 tbps soy sauce",
      "2 tsp honey",
      "2 tsp rice vinegar",
      "1 cup Cola",
      "1 lbs baby back ribs or St. Louis ribs",
    ],
    instructions:
      "First, prep the dry rub. In a large mixing bowl, combine the brown sugar, cane sugar, paprika, salt, " +
      "onion powder, black pepper, and garlic powder. Add the ribs into the dry rub and mix thoroughly with you hands to ensure the meat is " +
      "completely covered in the seasoning. Cover the bowl and let is rest in the fridge for 30 minutes. Preheat the oven to 275°F. In " +
      "a Dutch oven, combine the soy sauce, honey, rcie vinegar, and cola. Take the ribs out of the fridge and add them in. Place the pot in " +
      "the oven and roast for at least 1.5 to 2.5 hours. Depending on your oven, it may take longer or shorter so be sure to check every 30 minutes or so. " +
      "Once done, transfer to a serving bowl and enjoy with a side of white rice.",
  },
];
