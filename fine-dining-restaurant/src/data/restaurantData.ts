/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, ChefInfo, Testimonial, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: "L'Étoile",
  tagline: "SARTORIAL GASTRONOMY",
  founded: "2018",
  chefName: "Executive Chef Jean-Luc Laurent",
  location: "45 Rue de l'Ancienne Comédie, Paris",
  phone: "+33 1 43 26 29 30",
  email: "reservations@letoile-paris.com",
  hours: [
    { days: "Tue - Thu", lunch: "12:00 - 14:30", dinner: "19:00 - 22:30" },
    { days: "Fri - Sat", lunch: "12:00 - 15:00", dinner: "19:00 - 23:30" },
    { days: "Sun", lunch: "11:30 - 15:30 (Brunch)", dinner: "Closed" },
    { days: "Mon", lunch: "Closed", dinner: "Closed" }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "s1",
    name: "Truffle Beef Carpaccio",
    description: "Finely sliced prime Black Angus beef, summer black truffle shavings, 36-month aged Parmigiano Reggiano, wild arugula, cold-pressed olive oil.",
    price: 28,
    category: "starters",
    tags: ["Signature", "Gluten-Free"],
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "s2",
    name: "Oysters Rockefeller",
    description: "Half-dozen Pacific oysters baked on critical rock salt, layered with creamed organic baby spinach, Pernod flambé, butter herb panko crumbs.",
    price: 32,
    category: "starters",
    tags: ["Seafood"],
    image: "https://images.unsplash.com/photo-1553618551-fba689030290?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "s3",
    name: "Heritage Tomato & Burrata",
    description: "Vibrant heirloom tomatoes, creamy Puglian burrata cheese, wild basil emulsion, organic balsamic reduction pearls, toasted salt-focaccia crop.",
    price: 24,
    category: "starters",
    tags: ["Vegetarian", "Organic"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "s4",
    name: "Foie Gras Terrine",
    description: "Slow-rendered duck liver terrine, spiced fig & port wine compote, roasted sea-salt brioche, crystalline finishing honey salts.",
    price: 36,
    category: "starters",
    tags: ["Classic French"],
    image: "https://images.unsplash.com/photo-1514516369-197c9eed361a?auto=format&fit=crop&w=600&q=80"
  },

  // MAINS
  {
    id: "m1",
    name: "Dry-Aged Wagyu Ribeye",
    description: "A4 Miyazaki Wagyu steak pan-seared with smoked organic salt, buttery bone-marrow potato pavé, caramelized chanterelles, rich port reduction demi-glace.",
    price: 84,
    category: "mains",
    tags: ["Chef Special", "Award Winning"],
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m2",
    name: "Chilean Seabass en Papillote",
    description: "Perfectly steamed snow white seabass, braised baby fennel, wild saffron fumet broth, fresh sea asparagus, citrus yuzu zest infusion.",
    price: 49,
    category: "mains",
    tags: ["Seafood", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m3",
    name: "Bresse Duck Breast",
    description: "Pan-roasted French heirloom duck breast, glazed red plums with local honey, golden turnip confit, delicate orange-thyme gastrique.",
    price: 46,
    category: "mains",
    tags: ["Heritage Crop"],
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m4",
    name: "Morel Mushroom Risotto",
    description: "Acquerello aged Carnaroli rice, slow-simmered forest morels, rich black truffle paste, whipped Pecorino Romano, roasted pine nut garnish.",
    price: 38,
    category: "mains",
    tags: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1532636875304-0c8fe119da9e?auto=format&fit=crop&w=600&q=80"
  },

  // DESSERTS
  {
    id: "d1",
    name: "Valrhona Chocolate Sphere",
    description: "Hollow premium dark chocolate casing, warm bourbon caramelized banana interior, finished table-side with dark espresso raspberry coulis drizzle.",
    price: 18,
    category: "desserts",
    tags: ["Flambé Table-side"],
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "d2",
    name: "Tahitian Vanilla Bean Soufflé",
    description: "Perfectly risen vintage-recipe soufflé, local farm egg custard base, served with a dollop of salted brown-butter lavender ice cream.",
    price: 16,
    category: "desserts",
    tags: ["Classic French"],
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "d3",
    name: "Pistachio Mille-Feuille",
    description: "Laminated crisp caramelized butter puff pastry, fluffy roasted pistachio mousseline filling, topped with fine Persian pistachio crumb crunch.",
    price: 15,
    category: "desserts",
    tags: ["Crisp Texture"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },

  // DRINKS
  {
    id: "dr1",
    name: "Smoked Rosemary Old Fashioned",
    description: "Single-barrel vintage bourbon, orange bitter splash, local raw agave, cold-smoked on oak-barrel staves under a rosemary glass bell.",
    price: 24,
    category: "drinks",
    tags: ["Cloche Smoked"],
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dr2",
    name: "Gold Leaf French 75",
    description: "Maison Dom Pérignon Champagne, artisanal blue-juniper gin, fresh organic lemon nectar, shimmering flakes of edible 24k gold leaf.",
    price: 28,
    category: "drinks",
    tags: ["Luxury Blend"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dr3",
    name: "Blackberry Sage Nectar",
    description: "Muddled wild mountain blackberries, cold-infused mountain sage syrup, raw dynamic ginger nectar, fresh sparkling spring soda finish [Non-alcoholic Mocktail].",
    price: 16,
    category: "drinks",
    tags: ["Zero Proof"],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
  }
];

export const CHEF_INFO: ChefInfo = {
  name: "Jean-Luc Laurent",
  role: "Executive Chef & Founder",
  bio: "Trained under the legendary Michelin masters of Paris and Lyon, Chef Jean-Luc believes in visual storytelling through culinary architecture. For him, a dish is not merely a sequence of ingredients, but a sensory landscape that honors French heritage while highlighting progressive texture styling.",
  quote: "Luxury is in the details. If a dish doesn't make you pause in quiet contemplation, we have not completed our mission.",
  signatureDish: "Dry-Aged Miyazaki Wagyu Ribeye",
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    title: "Le Salon Royal",
    category: "Ambience",
    colSpan: "md:col-span-2 col-span-1"
  },
  {
    id: "g2",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    title: "Truffle Ribeye Carpaccio",
    category: "Plating"
  },
  {
    id: "g3",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    title: "Culinary Discipline",
    category: "Kitchen"
  },
  {
    id: "g4",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    title: "Smoked Oak Old Fashioned",
    category: "Mixology"
  },
  {
    id: "g5",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    title: "The Sweet Symphony",
    category: "Pastry",
    colSpan: "md:col-span-2 col-span-1"
  },
  {
    id: "g6",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
    title: "Sommelier Selection",
    category: "Cellar"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Arthur de Rohan",
    role: "Culinary Critic, Le Figaro",
    rating: 5,
    comment: "An absolute masterclass in sensory harmony. The Truffle Beef Carpaccio melted like butter, and the table-side pouring of the espresso reduction left the room in awe. L'Étoile sets a whole new benchmark.",
    date: "April 2026"
  },
  {
    id: "t2",
    name: "Samantha Vance",
    role: "Private Collector",
    rating: 5,
    comment: "We reserved the Chef's Counter for our anniversary. Watching Chef Jean-Luc layer textures with surgical precision made us realize that Gastronomy is indeed high art. The dry-aged wagyu is a spiritual experience.",
    date: "May 2026"
  },
  {
    id: "t3",
    name: "Marcus Aurelius Sterling",
    role: "Founder, MAS Holdings",
    rating: 5,
    comment: "The Gold Leaf French 75 and the quiet elegance of Le Salon Royal offer the perfect atmosphere for celebrating significant milestones. Flawless service, discrete ambience, premium curation of ingredients.",
    date: "February 2026"
  }
];
