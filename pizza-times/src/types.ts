/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  banglishName?: string;
  description: string;
  price: number; // in BDT
  image: string;
  spiciness: 0 | 1 | 2 | 3; // 0 = mild, 3 = extreme
  tag?: 'NEW' | 'BESTSELLER' | 'CHEF SPECIAL' | 'LATE NIGHT SPECIAL';
  ingredients: string[];
  category: 'fusion' | 'classic' | 'spicy' | 'cheese-heavy';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Topping {
  name: string;
  price: number;
}
