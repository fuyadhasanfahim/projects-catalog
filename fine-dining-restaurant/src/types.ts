/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  tags?: string[];
  isChefSpecial?: boolean;
  image: string;
}

export interface ChefInfo {
  name: string;
  role: string;
  bio: string;
  quote: string;
  signatureDish: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  colSpan?: string; // used for custom masonry-like configurations
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'parlor' | 'terrace' | 'chefs-counter';
  dietaryNotes?: string;
}
