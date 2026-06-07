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



  // DRINKS & PARFAIT

  // RAW PROTEIN


  // COMBOS
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
