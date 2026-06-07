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
    id: "spaghetti-turkey",
    name: "Stir Fried Spaghetti & Turkey",
    description: "Rich, spicy stir-fried spaghetti served with a jumbo piece of well-seasoned grilled turkey.",
    price: 10000,
    category: "meals",
    image: "https://images.unsplash.com/photo-1588013270293-e17e2b172d52?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "jollof-turkey",
    name: "Turkey Midwings x Jollof Rice & Plantain",
    description: "Smoky, authentic Nigerian party Jollof rice served with peppered turkey midwings and sweet fried plantain.",
    price: 10000,
    category: "meals",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "pounded-yam-eforiro",
    name: "Poundo Yam x Signature Eforiro & 2 Goat Meat",
    description: "Smooth pounded yam paired with rich vegetable soup (Efo Riro) cooked in palm oil, locust beans, and loaded with 2 tender pieces of goat meat.",
    price: 14000,
    category: "meals",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "jollof-bowl-beef",
    name: "Signature 2.5L Jollof Bowl with 10 Peppered Beef",
    description: "Generous party size 2.5L bowl of smoky Jollof rice topped with 10 chunks of rich, peppered beef.",
    price: 26000,
    category: "meals",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "plantain-mackerel",
    name: "Boiled Plantain x Mackerel Fish & Sauce",
    description: "Perfectly boiled sweet plantains served with a rich, peppery mackerel fish stew.",
    price: 12500,
    category: "meals",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "catfish-pepper-soup",
    name: "Catfish Pepper Soup with White Rice",
    description: "Spicy, herb-infused, hot catfish pepper soup served with a side of white basmati rice.",
    price: 14000,
    category: "meals",
    image: "https://images.unsplash.com/photo-1547928500-4729f854853e?w=600&auto=format&fit=crop&q=80"
  },

  // CHOPS & PLATTERS
  {
    id: "snail-platter",
    name: "Snail Platter (4 Big Snails)",
    description: "Four massive, clean snails sauteed in spicy pepper, onion, and bell pepper sauce.",
    price: 35000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ready-to-fry-chops",
    name: "Ready to Fry Small Chops (10pcs)",
    description: "10 pieces of fresh, hand-rolled samosas and spring rolls ready to fry at your convenience.",
    price: 5000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bulk-platter",
    name: "Platter (Bulk Order)",
    description: "Boutique bulk party platter containing fresh puff-puff, spring rolls, samosa, and peppered bites.",
    price: 3000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "lunch-pack-gift",
    name: "Lunch Pack or Gift 🎁",
    description: "Carefully curated lunch container or gift hamper featuring small chops, parfaits, and choice proteins.",
    price: 15000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "grilled-fish-platter",
    name: "Grilled Fish Platter",
    description: "Whole grilled Crocker fish, served with Irish potatoes, sweet plantains, and signature pepper sauce.",
    price: 20000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "chicken-pie",
    name: "Chicken Pie (1pc)",
    description: "Flaky, buttery shortcrust pastry filled with minced chicken, carrots, and potatoes in rich gravy.",
    price: 1500,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "classic-tray",
    name: "Classic Tray (2 Types)",
    description: "A catering tray offering a choice of 2 meal combinations (e.g. Jollof rice, fried rice, pasta, etc.).",
    price: 65000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "silver-tray",
    name: "Silver Tray (1st Slide)",
    description: "Catering-size silver tray presenting our classic meals with plantains and mixed proteins.",
    price: 75000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "silver-tray-premium",
    name: "Silver Tray Premium",
    description: "Top-tier premium silver tray including high-demand proteins, chops, and custom requests (₦90,000–₦110,000 based on selection).",
    price: 90000,
    category: "chops_platters",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "small-chops-4samosa",
    name: "Small chop's (4 Samosa)",
    description: "Golden, crispy small chops pack featuring 4 pieces of tasty chicken/beef samosas.",
    price: 4000,
    category: "chops_platters",
    image: "/images/flyer-menu.png"
  },
  {
    id: "chicken-chips",
    name: "Chicken and chips (2pcs)",
    description: "2 pieces of golden crispy fried chicken served with a side of hot potato chips and dipping sauce.",
    price: 4500,
    category: "chops_platters",
    image: "/images/flyer-menu.png"
  },

  // DRINKS & PARFAIT
  {
    id: "parfait-cup",
    name: "330mls Parfait Cup",
    description: "Creamy vanilla yogurt layered with red apples, strawberry chunks, crunchy granola, mixed nuts, raisins, and a drizzle of honey.",
    price: 6000,
    category: "drinks_parfait",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80"
  },

  // RAW PROTEIN
  {
    id: "chicken-wings-raw",
    name: "Chicken Wings (Per kg)",
    description: "Freshly cut and cleaned raw chicken wings, weighed and packaged per kilogram.",
    price: 6500,
    category: "raw_protein",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "drumstick-raw",
    name: "Drumstick (Per kg)",
    description: "Clean, raw chicken drumsticks, weighed and packaged per kilogram.",
    price: 6500,
    category: "raw_protein",
    image: "/images/flyer-chicken.png"
  },
  {
    id: "gizzard-raw",
    name: "Chicken Gizzard (Per kg)",
    description: "Clean, raw chicken gizzards, ready for boiling and frying.",
    price: 5500,
    category: "raw_protein",
    image: "/images/flyer-chicken.png"
  },
  {
    id: "breast-fillet-raw",
    name: "Chicken Fillet (Breast) (Per kg)",
    description: "Premium skinless, boneless raw chicken breast fillet per kilogram.",
    price: 6000,
    category: "raw_protein",
    image: "/images/flyer-chicken.png"
  },
  {
    id: "full-chicken-raw",
    name: "Full Chicken (Per kg)",
    description: "Dressed, whole raw chicken weighed per kilogram.",
    price: 5000,
    category: "raw_protein",
    image: "/images/flyer-chicken.png"
  },
  {
    id: "carcass-raw",
    name: "Chicken Carcass (Per kg)",
    description: "Dressed raw chicken carcass bones, perfect for preparing rich homemade chicken stock.",
    price: 2500,
    category: "raw_protein",
    image: "/images/flyer-chicken.png"
  },
  {
    id: "neck-raw",
    name: "Chicken Neck (Per kg)",
    description: "Dressed raw chicken necks, ideal for stews and rich stocks.",
    price: 2500,
    category: "raw_protein",
    image: "/images/flyer-chicken.png"
  },

  // COMBOS
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
