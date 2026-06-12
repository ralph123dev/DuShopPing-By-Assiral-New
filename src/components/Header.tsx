/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Bell, Menu, CircleUser, Heart, ChevronDown, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  favoritesCount: number;
  openFavorites: () => void;
  onAddProductClick: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  favoritesCount,
  openFavorites,
  onAddProductClick
}: HeaderProps) {
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const categories = [
    { label: 'Tous les produits', value: 'Tous' },
    { label: 'Artisanat & Décoration', value: 'Artisanat' },
    { label: 'Mode & Textiles', value: 'Mode' },
    { label: 'Épicerie & Épices', value: 'Épicerie' },
    { label: 'Soins & Saveurs', value: 'Saveurs' },
  ];

  const notifications = [
    { id: 1, text: "💬 Amara l'Artisan a lu votre message.", time: "Il y a 5 min", unread: true },
    { id: 2, text: "✨ Nouveau : Les Épices Berbère de retour en stock !", time: "Il y a 1 h", unread: true },
    { id: 3, text: "⭐ Événement : Exposition Virtuelle de Statuettes Royales.", time: "Il y a 1 jour", unread: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-6 shrink-0">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            onClick={() => { setSearchQuery(''); setSelectedCategory('Tous'); }}
            className="text-2xl sm:text-3xl font-bold font-display text-brand flex items-center gap-1 cursor-pointer select-none"
            id="brand-logo"
          >
            DuShopPing
          </motion.div>

          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => { setSelectedCategory('Tous'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'Tous' && !searchQuery
                  ? 'text-brand bg-brand-light border-b-2 border-brand'
                  : 'text-slate-600 hover:text-brand hover:bg-slate-50'
              }`}
            >
              La place du Marché
            </button>
          </nav>
        </div>

        {/* Search, Categories Dropdown & Interactive Filtering */}
        <div className="flex-1 max-w-2xl flex items-center gap-2">
          {/* Categories Popover Trigger */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowCategoriesMenu(!showCategoriesMenu)}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-700 transition-all cursor-pointer"
              id="category-menu-trigger"
            >
              <Menu className="w-4 h-4 text-[#02603c]" />
              <span className="hidden sm:inline">Catégories</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCategoriesMenu ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showCategoriesMenu && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowCategoriesMenu(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-slate-100 z-40"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      CATÉGORIES DUSHOP
                    </div>
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setSelectedCategory(cat.value);
                          setShowCategoriesMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-all cursor-pointer ${
                          selectedCategory === cat.value
                            ? 'bg-brand-light text-brand font-medium'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat.label}</span>
                        {selectedCategory === cat.value && <Check className="w-4 h-4 text-brand shrink-0" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par article, artisan ou catégorie..."
              className="w-full text-xs sm:text-sm pl-9 pr-8 py-2 bg-[#f0f4fc] border border-transparent focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand rounded-2xl placeholder:text-slate-400 transition-all text-slate-800"
              id="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3 flex items-center text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Vider
              </button>
            )}
          </div>
        </div>

        {/* Action Controls & Profile info */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Quick Creator Button */}
          <button
            onClick={onAddProductClick}
            className="hidden md:flex items-center gap-1 bg-brand text-white hover:bg-brand-hover px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            id="add-product-btn"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Vendre</span>
          </button>

          {/* Favorites triggers */}
          <button
            onClick={openFavorites}
            className="p-2 text-slate-600 hover:text-brand bg-slate-50 hover:bg-brand-light rounded-xl transition-all relative cursor-pointer"
            title="Favoris"
            aria-label="Voir les favoris"
          >
            <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Notification bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-slate-600 hover:text-brand bg-slate-50 hover:bg-brand-light rounded-xl transition-all relative cursor-pointer"
              title="Notifications"
              aria-label="Notifications"
              id="notification-trigger"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full" />
            </button>

            <AnimatePresence>
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowNotifications(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-white p-3 shadow-xl border border-slate-100 z-40"
                  >
                    <div className="flex items-center justify-between border-b border-slate-50 pb-2 mb-2">
                      <span className="text-xs font-bold text-slate-800">Alertes DuShop</span>
                      <button 
                        onClick={() => setShowNotifications(false)}
                        className="text-[10px] text-brand hover:underline font-semibold cursor-pointer"
                      >
                        Marquer lu
                      </button>
                    </div>
                    <div className="space-y-1">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-2 rounded-xl text-xs transition-colors hover:bg-slate-50 leading-snug cursor-pointer ${
                            notif.unread ? 'bg-emerald-50/50 border-l-2 border-brand' : ''
                          }`}
                        >
                          <p className="text-slate-700">{notif.text}</p>
                          <span className="text-[9px] text-slate-400 mt-1 block">{notif.time}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* User profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-1.5 rounded-full p-0.5 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
              title="Profil"
              aria-label="Profil de l'utilisateur"
              id="profile-trigger"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80"
                alt="Profile Avatar"
                className="w-8 h-8 rounded-full object-cover shadow-inner"
              />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowProfileMenu(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-slate-100 z-40 text-xs text-slate-700"
                  >
                    <div className="p-3 border-b border-slate-50 mb-1">
                      <p className="font-bold text-slate-900 text-sm">Prénom Nom</p>
                      <p className="text-[10px] text-slate-400">joelfreelance3@gmail.com</p>
                    </div>
                    <button
                      onClick={() => { setShowProfileMenu(false); alert('Espace Vendeur en cours de préparation (Version Démo)'); }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center gap-2 cursor-pointer"
                    >
                      🎪 Gérer ma boutique
                    </button>
                    <button
                      onClick={() => { setShowProfileMenu(false); openFavorites(); }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center gap-2 cursor-pointer"
                    >
                      ❤️ Mes produits favoris
                    </button>
                    <button
                      onClick={() => { setShowProfileMenu(false); alert('Historique des appels et messages simulés'); }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center gap-2 cursor-pointer"
                    >
                      📞 Mes demandes d'appel
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </header>
  );
}
