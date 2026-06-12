/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  seller: string;
  hasBadge: boolean;
  rating?: number;
  reviewsCount?: number;
  isSponsorised?: boolean;
  sponsorisedTag?: 'SPONSORISÉ' | 'ELITE';
  description?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  location?: string;
}

export interface Seller {
  name: string;
  rating: number;
  hasBadge: boolean;
  avatar: string;
  phone: string;
  whatsapp: string;
  location: string;
  description: string;
}

export interface Message {
  sender: 'user' | 'seller';
  text: string;
  timestamp: string;
}
