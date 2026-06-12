/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Seller } from './types';

// Concrete paths from the generated image assets
export const IMAGES = {
  basket: '/src/assets/images/pannier_tisse_1781282354068.jpg',
  hoodie: '/src/assets/images/tunique_indigo_1781282369664.jpg',
  vases: '/src/assets/images/statuettes_vases_1781282386709.jpg',
  cosmetics: '/src/assets/images/mielles_cosmetiques_1781282401828.jpg',
  spices: '/src/assets/images/epices_1781282418024.jpg',
  silk: '/src/assets/images/echarpe_soie_1781282435673.jpg',
};

export const SELLERS: Record<string, Seller> = {
  'Amara Studio': {
    name: 'Amara Studio',
    rating: 4.9,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80',
    phone: '+221 77 654 32 10',
    whatsapp: '+221776543210',
    location: 'Dakar, Sénégal',
    description: 'Atelier spécialisé dans les objets de décoration haut de gamme tressés à la main à base de fibres naturelles locales.'
  },
  'Kente Masters': {
    name: 'Kente Masters',
    rating: 5.0,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80',
    phone: '+233 24 123 4567',
    whatsapp: '+233241234567',
    location: 'Kumasi, Ghana',
    description: 'Créateurs passionnés de vêtements contemporains intégrant le prestige du tissage artisanal de Kente et d’indigo.'
  },
  'Mama Africa': {
    name: 'Mama Africa',
    rating: 4.7,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&fit=crop&q=80',
    phone: '+225 07 45 67 89',
    whatsapp: '+22507456789',
    location: 'Abidjan, Côte d’Ivoire',
    description: 'Maison d’art de la poterie et de la sculpture traditionnelle d’Afrique de l’Ouest, valorisant les matières brutes.'
  },
  'Savana Decor': {
    name: 'Savana Decor',
    rating: 5.0,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&fit=crop&q=80',
    phone: '+221 70 873 45 22',
    whatsapp: '+221708734522',
    location: 'Saint-Louis, Sénégal',
    description: 'Artisanat d’art, vanneries fines et meubles écologiques d’inspiration sahélienne.'
  },
  'Loom Heritage': {
    name: 'Loom Heritage',
    rating: 4.8,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&fit=crop&q=80',
    phone: '+229 95 32 14 00',
    whatsapp: '+22995321400',
    location: 'Cotonou, Bénin',
    description: 'Préservateurs des techniques de tissage traditionnelles du Bénin mariées au style urbain décontracté.'
  },
  'Miel d\'Or': {
    name: 'Miel d\'Or',
    rating: 4.9,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&fit=crop&q=80',
    phone: '+237 699 88 77 66',
    whatsapp: '+237699887766',
    location: 'Bamenda, Cameroun',
    description: 'Production de miel naturel d’altitude et soins cosmétiques biologiques à base de ruches locales équitables.'
  },
  'Benin Arts': {
    name: 'Benin Arts',
    rating: 4.7,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&fit=crop&q=80',
    phone: '+229 97 12 34 56',
    whatsapp: '+22997123456',
    location: 'Porto-Novo, Bénin',
    description: 'Fonderie d’art de bronze et masques sculptés en bois précieux d’héritage royal.'
  },
  'Épices du Sahel': {
    name: 'Épices du Sahel',
    rating: 4.9,
    hasBadge: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&fit=crop&q=80',
    phone: '+227 96 11 22 33',
    whatsapp: '+22796112233',
    location: 'Niamey, Niger',
    description: 'Mélanges d’épices rares et fleurs séchées récoltées dans le respect du terroir sahélien.'
  },
  'Dushop General Seller': {
    name: 'Artisans du Marché',
    rating: 4.6,
    hasBadge: false,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&fit=crop&q=80',
    phone: '+33 6 12 34 56 78',
    whatsapp: '+33612345678',
    location: 'Abidjan, Côte-d’Ivoire',
    description: 'Collectif d’artisans indépendants et de producteurs engagés dans le circuit court et équitable.'
  }
};

export const PRODUCTS_A_LA_UNE: Product[] = [
  {
    id: 'une-1',
    title: 'Panier Tiss Premium',
    category: 'Artisanat',
    price: 29500,
    image: IMAGES.basket,
    seller: 'Amara Studio',
    hasBadge: true,
    rating: 4.9,
    reviewsCount: 128,
    isSponsorised: true,
    sponsorisedTag: 'SPONSORISÉ',
    description: 'Un magnifique panier haut de gamme tressé à la main, idéal pour embellir votre salon ou servir de contenant sophistiqué.',
    phoneNumber: SELLERS['Amara Studio'].phone,
    whatsappNumber: SELLERS['Amara Studio'].whatsapp,
    location: SELLERS['Amara Studio'].location,
  },
  {
    id: 'une-2',
    title: 'Tunique Indigo Artisanale',
    category: 'Mode',
    price: 42600,
    image: IMAGES.hoodie,
    seller: 'Kente Masters',
    hasBadge: true,
    rating: 5.0,
    reviewsCount: 84,
    isSponsorised: true,
    sponsorisedTag: 'SPONSORISÉ',
    description: 'Hoodie blanc en coton lourd orné d’un motif brodé indigo traditionnel fait main par les maîtres tisseurs de Kumasi.',
    phoneNumber: SELLERS['Kente Masters'].phone,
    whatsappNumber: SELLERS['Kente Masters'].whatsapp,
    location: SELLERS['Kente Masters'].location,
  },
  {
    id: 'une-3',
    title: 'Statuette Bronze Royale',
    category: 'Artisanat',
    price: 98400,
    image: IMAGES.vases,
    seller: 'Mama Africa',
    hasBadge: true,
    rating: 4.7,
    reviewsCount: 210,
    isSponsorised: true,
    sponsorisedTag: 'SPONSORISÉ',
    description: 'Ensemble de vases et statuettes modelés à la main en argile rouge d’Abidjan, avec de subtiles finitions texturées d’une grande élégance.',
    phoneNumber: SELLERS['Mama Africa'].phone,
    whatsappNumber: SELLERS['Mama Africa'].whatsapp,
    location: SELLERS['Mama Africa'].location,
  },
];

export const SELECTIONS_POPULAIRES: Product[] = [
  {
    id: 'pop-1',
    title: 'Vase en Terre Cuite',
    category: 'Artisanat',
    price: 23000,
    image: IMAGES.basket,
    seller: 'Amara Studio',
    hasBadge: true,
    rating: 4.8,
    description: 'Vase artisanal délicatement tissé d’une élégance rare apportant de la sérénité dans votre foyer.',
    phoneNumber: SELLERS['Amara Studio'].phone,
    whatsappNumber: SELLERS['Amara Studio'].whatsapp,
    location: SELLERS['Amara Studio'].location,
  },
  {
    id: 'pop-2',
    title: 'Tunique Brodée',
    category: 'Mode',
    price: 36000,
    image: IMAGES.hoodie,
    seller: 'Kente Masters',
    hasBadge: true,
    rating: 4.9,
    description: 'Un vêtement doux et léger orné d’élégantes broderies ethniques sur le devant, parfait pour le quotidien.',
    phoneNumber: SELLERS['Kente Masters'].phone,
    whatsappNumber: SELLERS['Kente Masters'].whatsapp,
    location: SELLERS['Kente Masters'].location,
  },
  {
    id: 'pop-3',
    title: 'Miel de Forêt',
    category: 'Saveurs',
    price: 7900,
    image: IMAGES.cosmetics,
    seller: 'Miel d\'Or',
    hasBadge: true,
    rating: 4.9,
    description: 'Huile et cosmétiques à base de produits de la ruche de montagne, nourrissants et respectueux de la peau.',
    phoneNumber: SELLERS['Miel d\'Or'].phone,
    whatsappNumber: SELLERS['Miel d\'Or'].whatsapp,
    location: SELLERS['Miel d\'Or'].location,
  },
];

export const PRODUITS_SPONSORISES_1: Product[] = [
  {
    id: 'spon1-1',
    title: 'Vase Traditionnel',
    category: 'Artisanat', // Savana Decor is the seller shown inside the image: Savana Decor checkmark rating 5.0
    price: 27500,
    image: IMAGES.basket,
    seller: 'Savana Decor',
    hasBadge: true,
    rating: 5.0,
    isSponsorised: true,
    sponsorisedTag: 'ELITE',
    description: 'Une superbe vannerie d’art aux motifs rythmés de lignes noires et naturelles, tressée à Saint-Louis.',
    phoneNumber: SELLERS['Savana Decor'].phone,
    whatsappNumber: SELLERS['Savana Decor'].whatsapp,
    location: SELLERS['Savana Decor'].location,
  },
  {
    id: 'spon1-2',
    title: 'Boubou Indigo',
    category: 'Mode', // Loom Heritage checkmark rating 4.8
    price: 51200,
    image: IMAGES.hoodie,
    seller: 'Loom Heritage',
    hasBadge: true,
    rating: 4.8,
    isSponsorised: true,
    sponsorisedTag: 'ELITE',
    description: 'Boubou revisité décontracté avec capuche et broderie unique. Teinture artisanale 100% naturelle.',
    phoneNumber: SELLERS['Loom Heritage'].phone,
    whatsappNumber: SELLERS['Loom Heritage'].whatsapp,
    location: SELLERS['Loom Heritage'].location,
  },
  {
    id: 'pop-3-variant',
    title: 'Miel Pur 1kg',
    category: 'Épicerie', // Miel d'Or checkmark rating 4.9
    price: 12100,
    image: IMAGES.cosmetics,
    seller: 'Miel d\'Or',
    hasBadge: true,
    rating: 4.9,
    isSponsorised: true,
    sponsorisedTag: 'ELITE',
    description: 'Miel d’altitude pur d’Afrique centrale, sauvage et non filtré pour préserver toutes ses vertus.',
    phoneNumber: SELLERS['Miel d\'Or'].phone,
    whatsappNumber: SELLERS['Miel d\'Or'].whatsapp,
    location: SELLERS['Miel d\'Or'].location,
  },
];

export const LES_MIEUX_NOTES: Product[] = [
  {
    id: 'notes-1',
    title: 'Statuette Bronze',
    category: 'Artisanat',
    price: 78700,
    image: IMAGES.vases,
    seller: 'Mama Africa',
    hasBadge: true,
    rating: 4.9,
    description: 'Un trio de vases en terre cuite ocre et terre d’Afrique, parfait complément de design minimaliste en harmonie naturelle.',
    phoneNumber: SELLERS['Mama Africa'].phone,
    whatsappNumber: SELLERS['Mama Africa'].whatsapp,
    location: SELLERS['Mama Africa'].location,
  },
  {
    id: 'notes-2',
    title: 'Épices Berbère',
    category: 'Épicerie',
    price: 5600,
    image: IMAGES.spices,
    seller: 'Épices du Sahel',
    hasBadge: true,
    rating: 4.9,
    description: 'Compositions culinaires savoureuses sous forme de billes d’épices bio chocolatées ou fumées au feu de bois pour éveiller vos sens.',
    phoneNumber: SELLERS['Épices du Sahel'].phone,
    whatsappNumber: SELLERS['Épices du Sahel'].whatsapp,
    location: SELLERS['Épices du Sahel'].location,
  },
  {
    id: 'notes-3',
    title: 'Écharpe en Soie',
    category: 'Mode', // Mode category in image
    price: 26200,
    image: IMAGES.silk,
    seller: 'Dushop General Seller',
    hasBadge: false,
    rating: 4.8,
    description: 'Magnifique étoffe en soie chatoyante plissée arborant un motif doré et vert royal d’une finition et d’une brillance incomparables.',
    phoneNumber: SELLERS['Dushop General Seller'].phone,
    whatsappNumber: SELLERS['Dushop General Seller'].whatsapp,
    location: SELLERS['Dushop General Seller'].location,
  },
];

export const PRODUITS_SPONSORISES_2: Product[] = [
  {
    id: 'spon2-1',
    title: 'Masque Tribal',
    category: 'Artisanat', // Benin Arts checkmark rating 4.7
    price: 55800,
    image: IMAGES.vases,
    seller: 'Benin Arts',
    hasBadge: true,
    rating: 4.7,
    isSponsorised: true,
    sponsorisedTag: 'ELITE',
    description: 'Réplique historique miniaturisée de vases royaux du Dahomey coulés en bronze brut poli sablé.',
    phoneNumber: SELLERS['Benin Arts'].phone,
    whatsappNumber: SELLERS['Benin Arts'].whatsapp,
    location: SELLERS['Benin Arts'].location,
  },
  {
    id: 'spon2-2',
    title: 'Coffret Épices',
    category: 'Épicerie', // Épices du Sahel checkmark rating 4.9
    price: 16400,
    image: IMAGES.spices,
    seller: 'Épices du Sahel',
    hasBadge: true,
    rating: 4.9,
    isSponsorised: true,
    sponsorisedTag: 'ELITE',
    description: 'Prestigieux coffret d’assortiment d’épices traditionnelles du désert et fleurs de sel locales.',
    phoneNumber: SELLERS['Épices du Sahel'].phone,
    whatsappNumber: SELLERS['Épices du Sahel'].whatsapp,
    location: SELLERS['Épices du Sahel'].location,
  },
  {
    id: 'spon2-3',
    title: 'Soie de Tana',
    category: 'Mode', // Soie de Tana seller in image checkmark badge
    price: 32000,
    image: IMAGES.silk,
    seller: 'Dushop General Seller', // represents the Soie de Tana craft
    hasBadge: true,
    rating: 4.9,
    isSponsorised: true,
    sponsorisedTag: 'ELITE',
    description: 'Châle de soie de Tana d’Afrique australe, aux reflets changeants de fils d’or tressés aux pigments de indigo.',
    phoneNumber: SELLERS['Dushop General Seller'].phone,
    whatsappNumber: SELLERS['Dushop General Seller'].whatsapp,
    location: SELLERS['Dushop General Seller'].location,
  }
];

// Combine all for general utility functions (like searching)
export const ALL_PRODUCTS: Product[] = [
  ...PRODUCTS_A_LA_UNE,
  ...SELECTIONS_POPULAIRES,
  ...PRODUITS_SPONSORISES_1,
  ...LES_MIEUX_NOTES,
  ...PRODUITS_SPONSORISES_2
];
