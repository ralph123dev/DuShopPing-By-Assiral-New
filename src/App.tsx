/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from 'react';
import Header from './components/Header';
import Banner728x90 from './components/Banner728x90';
import SidebarAd from './components/SidebarAd';
import ProductCard from './components/ProductCard';
import ContactModal from './components/ContactModal';
import ChatModal from './components/ChatModal';
import FavoritesDrawer from './components/FavoritesDrawer';
import AddProductModal from './components/AddProductModal';

import { Product } from './types';
import {
  PRODUCTS_A_LA_UNE as initialFeatured,
  SELECTIONS_POPULAIRES as initialPopular,
  PRODUITS_SPONSORISES_1 as initialSponsorised1,
  LES_MIEUX_NOTES as initialHighlyRated,
  PRODUITS_SPONSORISES_2 as initialSponsorised2,
  ALL_PRODUCTS
} from './data';

import { ChevronLeft, ChevronRight, Globe, Share2, Mail, HelpCircle, Flame, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // State variables for robust user interactions
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  
  const [customProducts, setCustomProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  
  const [showFavorites, setShowFavorites] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  
  const [contactProduct, setContactProduct] = useState<Product | null>(null);
  const [chatProduct, setChatProduct] = useState<Product | null>(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Chevron Shift / Pagination indexing state for carrousel actions
  const [featuredPage, setFeaturedPage] = useState(0);
  const [popularPage, setPopularPage] = useState(0);
  const [highlyRatedPage, setHighlyRatedPage] = useState(0);

  // Get active products lists including user added items
  const getFeaturedProducts = () => {
    // Merge user-made products into featured matching category
    const list = [...customProducts.filter(p => p.isSponsorised && p.sponsorisedTag === 'SPONSORISÉ'), ...initialFeatured];
    if (selectedCategory !== 'Tous') {
      return list.filter(p => p.category === selectedCategory);
    }
    return list;
  };

  const getPopularProducts = () => {
    const list = [...initialPopular];
    if (selectedCategory !== 'Tous') {
      return list.filter(p => p.category === selectedCategory);
    }
    return list;
  };

  const getSponsorised1Products = () => {
    const list = [...initialSponsorised1];
    if (selectedCategory !== 'Tous') {
      return list.filter(p => p.category === selectedCategory);
    }
    return list;
  };

  const getHighlyRatedProducts = () => {
    const list = [...initialHighlyRated];
    if (selectedCategory !== 'Tous') {
      return list.filter(p => p.category === selectedCategory);
    }
    return list;
  };

  const getSponsorised2Products = () => {
    const list = [...initialSponsorised2];
    if (selectedCategory !== 'Tous') {
      return list.filter(p => p.category === selectedCategory);
    }
    return list;
  };

  // Check if filtering is active
  const isFiltering = searchQuery.trim() !== '' || selectedCategory !== 'Tous';

  // Dynamic search matching
  const getFilteredAll = () => {
    const combined = [
      ...customProducts,
      ...initialFeatured,
      ...initialPopular,
      ...initialSponsorised1,
      ...initialHighlyRated,
      ...initialSponsorised2
    ];

    // Deduplicate by ID
    const uniqueMap = new Map<string, Product>();
    combined.forEach(p => uniqueMap.set(p.id, p));
    const uniqueList = Array.from(uniqueMap.values());

    return uniqueList.filter(p => {
      const matchSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchCat = selectedCategory === 'Tous' || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  };

  // Add customized items from Sell wizard
  const handleAddProduct = (newProd: Product) => {
    setCustomProducts(prev => [newProd, ...prev]);
  };

  // Toggle favorite actions
  const handleToggleFavorite = (prodId: string) => {
    const allItems = [...customProducts, ...ALL_PRODUCTS];
    const found = allItems.find(p => p.id === prodId);
    if (!found) return;

    setFavorites(prev => {
      const isAlreadyFav = prev.some(item => item.id === prodId);
      if (isAlreadyFav) {
        return prev.filter(item => item.id !== prodId);
      } else {
        return [...prev, found];
      }
    });
  };

  // Handle newsletter sign-up safely
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  const triggerCallSimulation = (product: Product) => {
    setContactProduct(product);
  };

  const triggerChatSimulation = (product: Product) => {
    setChatProduct(product);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative antialiased group" id="dushop-app-root">
      
      {/* 1. Header Horizontal Billboard publicity */}
      <Banner728x90 />

      {/* 2. Primary Navigation with Search, category buttons, favorites, message indicators */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        favoritesCount={favorites.length}
        openFavorites={() => setShowFavorites(true)}
        onAddProductClick={() => setShowAddProduct(true)}
      />

      {/* 3. Main Marketplace Section Layout: Sidebars + Central Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        
        {/* Dynamic Filtering Breadcrumbs / Badge feedback */}
        {isFiltering && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-slate-400">Filtrage actif :</span>
              {selectedCategory !== 'Tous' && (
                <span className="bg-brand-light text-brand font-semibold px-3 py-1 rounded-xl border border-brand/10">
                  Catégorie: {selectedCategory}
                </span>
              )}
              {searchQuery && (
                <span className="bg-blue-50 text-blue-800 font-semibold px-3 py-1 rounded-xl border border-blue-100">
                  Recherche: "{searchQuery}"
                </span>
              )}
              <span className="text-slate-400 font-mono">({getFilteredAll().length} articles trouvés)</span>
            </div>
            
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tous');
              }}
              className="text-xs text-rose-600 hover:text-rose-800 font-bold underline cursor-pointer"
            >
              Réinitialiser tous les filtres
            </button>
          </motion.div>
        )}

        <div className="flex gap-6 items-start justify-center">

          {/* Left Vertical Ad Banner - 160x600 px (Visible on ultra large screens) */}
          <div className="hidden xl:block shrink-0 sticky top-24 self-start">
            <SidebarAd position="left" />
          </div>

          {/* Center feed containing all curated rows */}
          <div className="flex-1 max-w-4xl min-w-0 space-y-12">
            
            {/* If user is actively searching or filtering, display a flat unified list instead of categorized grids */}
            {isFiltering ? (
              <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-6 bg-brand rounded-full" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-display">
                    Résultats de votre recherche
                  </h2>
                </div>

                {getFilteredAll().length === 0 ? (
                  <div className="text-center py-16 px-4 space-y-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto">
                      <HelpCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">Aucun produit ne correspond à vos critères</p>
                      <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                        Essayez de saisir des termes différents ou explorez une nouvelle catégorie à l'aide du menu déroulant.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSearchQuery(''); setSelectedCategory('Tous'); }}
                      className="bg-brand text-white font-semibold text-xs px-4 py-2 rounded-xl"
                    >
                      Retourner à la boutique
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredAll().map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        variant={product.isSponsorised ? 'detailed' : 'minimal'}
                        isFavorite={favorites.some(f => f.id === product.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onCallSeller={triggerCallSimulation}
                        onChatSeller={triggerChatSimulation}
                      />
                    ))}
                  </div>
                )}
              </section>
            ) : (
              // Curated French traditional view exactly matching the photo layout and rows
              <>
                {/* ROW 1: Produits A la une (Featured) */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        Produits A la une
                      </h2>
                      <span className="text-[10px] bg-orange-100 text-orange-800 border border-orange-200 font-bold px-2 py-0.5 rounded-md tracking-wider uppercase">
                        SPONSORISÉ
                      </span>
                    </div>

                    {/* Chevron Slider Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setFeaturedPage(p => Math.max(0, p - 1))}
                        disabled={featuredPage === 0}
                        className="p-1 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                        title="Précédent"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-600" />
                      </button>
                      <button
                        onClick={() => setFeaturedPage(p => p + 1)}
                        disabled={getFeaturedProducts().length <= 3}
                        className="p-1 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                        title="Suivant"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  {getFeaturedProducts().length === 0 ? (
                    <p className="text-xs text-slate-400">Aucun produit en vedette.</p>
                  ) : (
                    <motion.div
                      layout
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                      {getFeaturedProducts().slice(featuredPage * 3, (featuredPage * 3) + 3).map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          variant="detailed"
                          isFavorite={favorites.some(f => f.id === product.id)}
                          onToggleFavorite={handleToggleFavorite}
                          onCallSeller={triggerCallSimulation}
                          onChatSeller={triggerChatSimulation}
                        />
                      ))}
                    </motion.div>
                  )}
                </section>


                {/* ROW 2: Sélections Populaires */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        Sélections Populaires
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Les articles les plus appréciés du moment.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setPopularPage(p => Math.max(0, p - 1))}
                        disabled={popularPage === 0}
                        className="p-1 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-600" />
                      </button>
                      <button
                        onClick={() => setPopularPage(p => p + 1)}
                        disabled={getPopularProducts().length <= 3}
                        className="p-1 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {getPopularProducts().slice(popularPage * 3, (popularPage * 3) + 3).map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        variant="minimal"
                        isFavorite={favorites.some(f => f.id === product.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onCallSeller={triggerCallSimulation}
                        onChatSeller={triggerChatSimulation}
                      />
                    ))}
                  </div>
                </section>


                {/* ROW 3: Produits Sponsorisés 1 (ELITE) */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Produits Sponsorisés
                    </h2>
                    <span className="text-[10px] bg-amber-500 text-white font-bold px-2.5 py-0.5 rounded-md tracking-widest uppercase">
                      ELITE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {getSponsorised1Products().map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        variant="detailed"
                        isFavorite={favorites.some(f => f.id === product.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onCallSeller={triggerCallSimulation}
                        onChatSeller={triggerChatSimulation}
                      />
                    ))}
                  </div>
                </section>


                {/* ROW 4: Les Mieux Notés */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        Les Mieux Notés
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        L'excellence validée par notre communauté.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setHighlyRatedPage(p => Math.max(0, p - 1))}
                        disabled={highlyRatedPage === 0}
                        className="p-1 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-600" />
                      </button>
                      <button
                        onClick={() => setHighlyRatedPage(p => p + 1)}
                        disabled={getHighlyRatedProducts().length <= 3}
                        className="p-1 px-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {getHighlyRatedProducts().slice(highlyRatedPage * 3, (highlyRatedPage * 3) + 3).map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        variant="minimal"
                        isFavorite={favorites.some(f => f.id === product.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onCallSeller={triggerCallSimulation}
                        onChatSeller={triggerChatSimulation}
                      />
                    ))}
                  </div>
                </section>


                {/* ROW 5: Produits Sponsorisés 2 (ELITE) */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Produits Sponsorisés
                    </h2>
                    <span className="text-[10px] bg-amber-500 text-white font-bold px-2.5 py-0.5 rounded-md tracking-widest uppercase">
                      ELITE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {getSponsorised2Products().map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        variant="detailed"
                        isFavorite={favorites.some(f => f.id === product.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onCallSeller={triggerCallSimulation}
                        onChatSeller={triggerChatSimulation}
                      />
                    ))}
                  </div>
                </section>
              </>
            )}

          </div>

          {/* Right Vertical Ad Banner - 160x600 px (Visible on ultra large screens) */}
          <div className="hidden xl:block shrink-0 sticky top-24 self-start">
            <SidebarAd position="right" />
          </div>

        </div>
      </main>

      {/* 4. Footer Section */}
      <footer className="bg-brand-dark text-slate-350 border-t border-slate-900 mt-20" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-slate-800 pb-12">
            
            {/* Mission Statement */}
            <div className="space-y-4">
              <span className="text-2xl font-bold font-display text-white block">
                DuShopPing
              </span>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Célébrer l'excellence de l'artisanat africain en connectant les créateurs du continent au marché mondial. Le panafricanisme moderne à travers le commerce équitable.
              </p>
            </div>

            {/* Marketplace Directory */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
                Marketplace
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">La place du marché</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">Vendre des créations</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">Promotions & Codes</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">Foire aux questions (FAQ)</a>
                </li>
              </ul>
            </div>

            {/* Legal / Protection */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
                Légal
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors font-sans">Conditions d'utilisation</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors font-sans">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors font-sans font-sans">Conseils aux acheteurs</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors font-sans">Support Client</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscribe */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1 font-display">
                Newsletter
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rejoignez notre communauté engagée pour découvrir en premier les nouveautés et offres exclusives.
              </p>

              {newsletterSuccess ? (
                <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 p-3 rounded-xl text-xs flex items-center gap-1.5 font-semibold">
                  <Check className="w-4 h-4 text-emerald-450 shrink-0" />
                  <span>Merci ! Votre inscription est prise en compte.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 bg-slate-900 border border-slate-750 p-2.5 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-1 focus:ring-brand text-slate-200 placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-[#02603c] hover:bg-emerald-750 text-white font-bold px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Rejoindre
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Social icons & copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left">
              © 2024 Kazi & Mali. Le panafricanisme moderne dans le commerce.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors" title="Changer de langue / Pays">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" title="Partager le site">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" title="Nous contacter">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </footer>


      {/* 5. Drawers & Popup Modals for full interactivity */}
      
      {/* Contact info overlay */}
      <ContactModal
        product={contactProduct}
        onClose={() => setContactProduct(null)}
        onOpenChat={(prod) => {
          setContactProduct(null);
          setChatProduct(prod);
        }}
      />

      {/* Chat messages overlay drawer */}
      <ChatModal
        product={chatProduct}
        onClose={() => setChatProduct(null)}
      />

      {/* Favorites slide-over page */}
      <FavoritesDrawer
        isOpen={showFavorites}
        onClose={() => setShowFavorites(false)}
        favorites={favorites}
        onRemove={(id) => setFavorites(prev => prev.filter(f => f.id !== id))}
        onCallSeller={triggerCallSimulation}
        onChatSeller={triggerChatSimulation}
      />

      {/* Selling form wizard overlay */}
      <AddProductModal
        isOpen={showAddProduct}
        onClose={() => setShowAddProduct(false)}
        onAddProduct={handleAddProduct}
      />

    </div>
  );
}
