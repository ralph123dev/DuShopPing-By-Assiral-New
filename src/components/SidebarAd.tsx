/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarAdProps {
  position: 'left' | 'right';
  variant?: 'vertical' | 'horizontal';
}

export default function SidebarAd({ position, variant = 'vertical' }: SidebarAdProps) {
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

  if (variant === 'horizontal') {
    return (
      <div
        className="w-full bg-[#f0f4fc] border border-blue-105 p-3 sm:p-4 rounded-2xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        id={`${position}-horizontal-ad`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full min-w-0">
          {/* Ad Image */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-slate-100 shrink-0">
            <img 
              src={ad.image} 
              alt={ad.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-1 text-center sm:text-left min-w-0 flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <span className="text-[9px] font-bold text-blue-500 tracking-widest uppercase">
                PUBLICITÉ
              </span>
              <span className="bg-brand text-white text-[8px] font-bold px-2 py-0.5 rounded-full inline-block">
                {ad.tag}
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate">
              {ad.title}
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2">
              {ad.description}
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="shrink-0 w-full sm:w-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => alert(`Offre publicitaire: ${ad.title}`)}
            className="w-full sm:w-auto bg-[#02603c] hover:bg-brand-hover text-white text-xs font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-1 shadow-xs cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{ad.cta}</span>
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-[160px] bg-[#f0f4fc] border border-blue-100 h-[600px] flex flex-col justify-between p-4 rounded-2xl shrink-0 shadow-xs relative"
        id={`${position}-sidebar-ad`}
      >
        {/* Header Ad Marker */}
        <div>
          <div className="flex items-center justify-between border-b border-blue-100/50 pb-2 mb-3">
            <span className="text-[9px] font-bold text-blue-500 tracking-widest uppercase">
              PUBLICITÉ
            </span>
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
