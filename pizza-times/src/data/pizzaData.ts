/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Testimonial, Topping } from '../types';

export const PIZZA_ITEMS: MenuItem[] = [
  {
    id: 'naga-inferno',
    name: 'Naga Inferno',
    banglishName: 'নাগা ইনফার্নো',
    description: 'Infused with authentic Sylheti Naga chili paste, spicy beef salami, jalapeños, and local wild honey drizzle on a fully charred artisanal sourdough base. Intense late-night heat.',
    price: 890,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop',
    spiciness: 3,
    tag: 'BESTSELLER',
    ingredients: ['Sylheti Naga Crust', 'Spicy Beef Salami', 'Pickled Jalapeños', 'Wild Honey', 'Aged Mozzarella'],
    category: 'spicy'
  },
  {
    id: 'old-town-seekh',
    name: 'Old Town Seekh Pizza',
    banglishName: 'পুরান ঢাকা শিখ কাবাব',
    description: 'Slow-grilled minced mutton seekh kebabs, charred red onions, green chilies, cilantro sprigs, and a premium mint-yogurt crema. Old Town rich tradition meets Napoli wood-fire craftsmanship.',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop',
    spiciness: 2,
    tag: 'CHEF SPECIAL',
    ingredients: ['Sourdough Base', 'Mutton Seekh Kebab', 'Charred Onions', 'Cilantro Crema', 'Local Chilies'],
    category: 'fusion'
  },
  {
    id: 'kacchi-fusion',
    name: 'Puran Dhaka Kacchi Pizza',
    banglishName: 'কাচ্চি ফিউশন পিৎজা',
    description: 'A revolutionary culinary fusion: Fragrant 12-hour slow-cooked spiced mutton chunks, caramelized onions (beresta), golden potato slivers, and melted fresh buffalo mozzarella infused with mild saffron oil.',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop',
    spiciness: 1,
    tag: 'NEW',
    ingredients: ['Slow-Cooked Mutton', 'Crispy Golden Potatoes', 'Saffron Olive Oil', 'Caramelized Beresta', 'Fresh Buffalo Mozzarella'],
    category: 'fusion'
  },
  {
    id: 'late-night-triple-pepperoni',
    name: 'Late-Night Triple Pepperoni',
    banglishName: 'লেট নাইট ট্রিপল পেপারনি',
    description: 'Loads of crispy, cupped premium beef pepperoni layers, smoked paprika oil, and dried mountain oregano on rich San Marzano tomato pulp and mozzarella. Perfectly greasy for late-night cravings.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
    spiciness: 1,
    tag: 'LATE NIGHT SPECIAL',
    ingredients: ['Triple Beef Pepperoni', 'Smoked Paprika Oil', 'San Marzano Tomato', 'High-Moisture Mozzarella'],
    category: 'cheese-heavy'
  },
  {
    id: 'sultans-cheese',
    name: 'Sultans Four-Cheese Feast',
    banglishName: 'সুলতানস চিজ ফিস্ট',
    description: 'A royal blend of local artisanal paneer, sharp aged cheddar, creamy fresh mozzarella, and imported smoked gouda, finished with charred garlic confit and premium organic black seed honey.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    spiciness: 0,
    tag: 'BESTSELLER',
    ingredients: ['Local Paneer', 'Aged Cheddar', 'Fresh Mozzarella', 'Smoked Gouda', 'Garlic Confit', 'Black Seed Honey'],
    category: 'cheese-heavy'
  },
  {
    id: 'dhaka-classic',
    name: 'Dhaka Classic Margherita',
    banglishName: 'ঢাকা ক্লাসিক মার্গারিটা',
    description: 'Minimalist and premium. San Marzano tomato sauce, hand-pulled local buffalo mozzarella, fresh sweet basil leaves, and a drizzle of organic cold-pressed mustard oil for an sublte Bangladeshi warmth.',
    price: 690,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    spiciness: 0,
    ingredients: ['San Marzano Tomatoes', 'Hand-pulled Mozzarella', 'Sweet Basil Leaf', 'Mustard-Olive Oil Blend'],
    category: 'classic'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Tanzir Rahman',
    role: 'Tech Lead',
    location: 'Gulshan-2, Dhaka',
    content: 'The Naga Inferno pizza is absolutely mental! The heat hits you but the wild honey drizzle balances it out perfectly. Best late-night pizza delivery in Dhaka hands down.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Farhana Ahmed',
    role: 'Food Blogger',
    location: 'Dhanmondi, Dhaka',
    content: 'Old Town Seekh Pizza is a masterclass in fusion cuisine. Sourdough wood-fired crust that is light, airy and charred, topped with juicy local mutton seekh. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Siam Chowdhury',
    role: 'Night Owl Content Designer',
    location: 'Banani, Dhaka',
    content: 'We order the Triple Pepperoni every Friday at 2 AM. The crust stays crisp and doesn\'t get soggy. The smoky grease is therapeutic. Deliveries are surprisingly fast.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  }
];

export const TOPPINGS: Topping[] = [
  { name: 'Extra Mozzarella', price: 120 },
  { name: 'Sylheti Naga Chili Hot Paste', price: 50 },
  { name: 'Crispy Beef Pepperoni Cups', price: 150 },
  { name: 'Charred Mutton Seekh Kebab Chunks', price: 180 },
  { name: 'Fried Garlic Confit', price: 60 },
  { name: 'Local Wild Honey Drizzle', price: 70 },
  { name: 'Caramelized Onion Beresta', price: 40 }
];

export const DHAKA_AREAS = [
  { name: 'Gulshan', cost: 100 },
  { name: 'Banani', cost: 100 },
  { name: 'Dhanmondi', cost: 120 },
  { name: 'Uttara', cost: 150 },
  { name: 'Mohakhali', cost: 100 },
  { name: 'Bashundhara R/A', cost: 120 },
  { name: 'Baily Road', cost: 110 },
  { name: 'Mirpur', cost: 140 },
  { name: 'Puran Dhaka (Old Town)', cost: 150 }
];

export const CRAFT_STEPS = [
  {
    id: '01',
    title: '48H SOURDOUGH',
    banglish: '৪৮ ঘণ্টা ফারমেন্টেশন',
    description: 'We ferment our custom premium flour dough for 48 hours. This slow cold-fermentation develops complex, airy pockets, bubbly crust blisters, and a deep smoky sourdough taste that is gentle on your stomach.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'THE SECRET SAUCE',
    banglish: 'সিগরেট সস ও চিজ',
    description: 'Starting with San Marzano whole peeled tomatoes, hand crushed, seasoned gently. Followed by locally sourced fresh artisan buffalo mozzarella and secret blend of spices including subtle touch of mustard oil/naga.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'WOOD FIRED AT 450°C',
    banglish: '৪৫০° সেলসিয়াসে বেকিং',
    description: 'Cooked inside our bespoke brick oven fired with seasoned fruitwoods. Baked in exactly 90 seconds to secure the explosive cheese pull, leoparded charred crust, and a divine woody scent.',
    image: 'https://images.unsplash.com/photo-1542834369-f10ae3577584?q=80&w=600&auto=format&fit=crop'
  }
];
