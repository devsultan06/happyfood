export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "meals" | "chops_platters" | "drinks_parfait" | "raw_protein" | "combos";
  image: string;
}

export const PRODUCTS: Product[] = [
  // MEALS


  {
    id: "premium-chicken-salad",
    name: "Premium Chicken Salad",
    description: "Fresh, healthy salad bowl layered with grilled chicken strips, sweet corn, shredded cabbage, carrots, boiled eggs, and a selection of premium dressings.",
    price: 10000,
    category: "meals",
    image: "/images/premium-chicken-salad.png"
  },

  // CHOPS & PLATTERS
  {
    id: "chops-spring-rolls",
    name: "Spring rolls",
    description: "Crispy, delicious spring rolls filled with seasoned vegetables and meat filling.",
    price: 650,
    category: "chops_platters",
    image: "/images/spring-rolls.png"
  },
  {
    id: "chops-chicken-samosa",
    name: "Chicken samosa",
    description: "Crispy pastry triangles filled with spiced minced chicken and green peas.",
    price: 650,
    category: "chops_platters",
    image: "/images/chicken-samosa.png"
  },
  {
    id: "chops-puffpuff-15",
    name: "15 puffpuff",
    description: "15 pieces of soft, fluffy, golden-brown Nigerian puff-puff.",
    price: 1200,
    category: "chops_platters",
    image: "/images/puffpuff-15pcs.jpg"
  },
  {
    id: "chops-grilled-chicken",
    name: "Perfecty grilled chicken",
    description: "Perfectly seasoned, succulent, and grilled chicken parts. Minimum order of 5 pieces.",
    price: 2500,
    category: "chops_platters",
    image: "/images/grilled-chicken.jpg"
  },
  {
    id: "chops-grilled-turkey",
    name: "Perfectly grilled Turkey",
    description: "Succulent, richly seasoned and perfectly grilled turkey parts. Minimum order of 5 pieces.",
    price: 7000,
    category: "chops_platters",
    image: "/images/grilled-turkey.jpg"
  },
  {
    id: "chops-party-pack",
    name: "Party pack small chop's",
    description: "A delicious party pack assortment of spring rolls, samosas, puff-puff, peppered chicken, and dipping sauce. Minimum order of 5 packs.",
    price: 3500,
    category: "chops_platters",
    image: "/images/party-pack-small-chops.jpg"
  },

  // DRINKS & PARFAIT
  {
    id: "parfait-330ml",
    name: "330mls exotic parfait",
    description: "Creamy layered yogurt parfait loaded with fresh fruits, granola, and nuts.",
    price: 6000,
    category: "drinks_parfait",
    image: "/images/parfait-330ml.jpg"
  },
  {
    id: "parfait-550ml",
    name: "550mls exotic parfait",
    description: "Jumbo layered yogurt parfait loaded with fresh fruits, granola, and nuts.",
    price: 10000,
    category: "drinks_parfait",
    image: "/images/parfait-550ml.jpg"
  },
  {
    id: "parfait-party-cup",
    name: "Mini party cup parfait",
    description: "Party size yogurt parfait cups - minimum order of 5 pieces.",
    price: 2500,
    category: "drinks_parfait",
    image: "/images/parfait-party-cup.jpg"
  },

  // RAW PROTEIN


  // COMBOS
  {
    id: "combo-snack-up",
    name: "Snack up",
    description: "Catering special box: 15 Puff-puff and 1 Peppered chicken.",
    price: 2900,
    category: "combos",
    image: "/images/snack-up.jpg"
  },
  {
    id: "combo-mini",
    name: "Mini Combo",
    description: "Catering special box: Crispy potato chips with dip, 2 Spring rolls, 2 Samosas, 8 Puff-puff, 1 Peppered chicken, and a 250ml cup of exotic Parfait.",
    price: 12500,
    category: "combos",
    image: "/images/mini-combo.jpg"
  },
  {
    id: "combo-mini-2",
    name: "Mini Combo 2",
    description: "Catering special box: 3 Spring rolls, 3 Samosas, 10 Puff-puff, 1 Peppered chicken, and a 250ml cup of exotic Parfait.",
    price: 10500,
    category: "combos",
    image: "/images/mini-combo-2.jpg"
  },
  {
    id: "combo-mini-3",
    name: "Mini Combo 3",
    description: "Catering special box: 3 Spring rolls, 3 Samosas, 12 Puff-puff, 1 Peppered chicken, and 1 Dip.",
    price: 6500,
    category: "combos",
    image: "/images/mini-combo-3.jpg"
  },
  {
    id: "combo-mini-4",
    name: "Mini Combo 4",
    description: "Catering special box: 2 Spring rolls, 2 Samosas, 4 Puff-puff, and 1 Peppered chicken.",
    price: 5000,
    category: "combos",
    image: "/images/mini-combo-4.jpg"
  },
  {
    id: "combo-regular-treats",
    name: "Regular Treats",
    description: "Catering special box: 5 Spring rolls, 5 Samosas, 25 Puff-puff, and 3 Peppered chicken parts.",
    price: 13000,
    category: "combos",
    image: "/images/regular-treats.jpg"
  },
  {
    id: "combo-treats",
    name: "Combo Treats",
    description: "Catering special box: 6 Spring rolls, 6 Samosas, 15 Puff-puff, 3 Meat pies, 4 Beef kebabs, and 2 Chicken parts.",
    price: 23500,
    category: "combos",
    image: "/images/combo-treats.jpg"
  },
  {
    id: "combo-standard-treats",
    name: "Standard Treats",
    description: "Catering special box: 12 Spring rolls, 12 Samosas, 30 Puff-puff, and 6 Chicken parts.",
    price: 28000,
    category: "combos",
    image: "/images/standard-treats.jpg"
  },
];
