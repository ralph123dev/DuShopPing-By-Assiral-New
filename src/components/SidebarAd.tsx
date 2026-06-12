/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarAdProps {
  position: 'left' | 'right';
}

export default function SidebarAd({ position }: SidebarAdProps) {
  const [isVisible, setIsVisible] = useState(true);

  const ads = {
    left: {
      tag: "DÉCOREZ",
      title: "Vannerie Fine & Authentique",
      description: "Apportez l'élégance naturelle à votre intérieur. -10% immédiats sur les paniers tressés d'exception.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=160&fit=crop&q=80",
      cta: "Découvrir"
    },
    right: {
      tag: "MODE DUSHOP",
      title: "Indigo & Coton Organique",
      description: "Découvrez notre collection capsule tisseurs de Kumasi. Des vêtements d'exception faits main.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=160&fit=crop&q=80",
      cta: 'Parcourir'
    }
  };

  const ad = ads[position];

  if (!isVisible) return (
    <div className="w-[160px] bg-slate-100 border border-dashed border-slate-200 h-[600px] flex flex-col items-center justify-center p-3 text-center rounded-2xl shrink-0 opacity-60">
      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Espace Publicitaire</p>
      <button 
        onClick={() => setIsVisible(true)}
        className="text-[10px] text-brand hover:underline font-semibold cursor-pointer"
      >
        Réafficher la pub
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="w-[160px] bg-[#f0f4fc] border border-blue-100 h-[600px] flex flex-col justify-between p-4 rounded-2xl shrink-0 shadow-xs relative"
        id={`${position}-sidebar-ad`}
      >
        {/* Header Ad Marker */}
        <div>
          <div className="flex items-center justify-between border-b border-blue-100/50 pb-2 mb-3">
            <span className="text-[9px] font-bold text-blue-500 tracking-widest uppercase">
              PUBLICITÉ
            </span>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200/50 cursor-pointer"
              title="Masquer"
              aria-label="Masquer la publicité"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className="bg-brand text-white text-[8px] font-bold px-2 py-0.5 rounded-full inline-block mb-2">
            {ad.tag}
          </span>
          <h4 className="text-xs font-bold text-slate-800 leading-tight mb-2">
            {ad.title}
          </h4>
          <p className="text-[10px] text-slate-500 leading-normal mb-3">
            {ad.description}
          </p>
        </div>

        {/* Decorative Ad Image */}
        <div className="my-2 rounded-lg overflow-hidden border border-slate-100 flex-1 relative max-h-[220px]">
          <img 
            src={ad.image} 
            alt={ad.title} 
            className="w-full h-full object-cover grayscale-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>

        {/* CTA Button */}
        <div className="pt-2 border-t border-blue-100/50">
          <p className="text-[10px] text-center text-slate-400 mb-2 font-mono">160 x 600 px</p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => alert(`Offre publicitaire: ${ad.title}`)}
            className="w-full bg-[#02603c] hover:bg-brand-hover text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 shadow-xs cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{ad.cta}</span>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
