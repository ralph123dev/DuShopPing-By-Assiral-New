import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary to-primary-hover text-white shadow-xl mb-8 border border-primary-hover">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:flex md:items-center md:justify-between gap-8">
        <div className="md:w-2/3 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-premium" />
            <span>Nouvelle Collection Artisanale</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight">
            L'excellence du commerce <span className="text-premium">Panafricain</span>
          </h1>
          
          <p className="text-sm sm:text-base text-emerald-50 max-w-xl font-sans leading-relaxed">
            Découvrez des créations uniques, directement auprès d'artisans certifiés. Soutenez l'économie locale avec une qualité garantie.
          </p>
          
          <div className="pt-2">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-premium hover:bg-premium-hover text-white px-6 py-3.5 rounded-2xl font-extrabold flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
            >
              <span>Découvrir les offres</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="hidden md:block md:w-1/3 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 rounded-2xl"></div>
           <div className="aspect-square bg-white/10 rounded-full blur-3xl absolute -inset-4"></div>
           <img 
             src="/src/assets/images/pannier_tisse_1781282354068.jpg" 
             alt="Artisanat" 
             className="relative z-0 w-full h-auto max-w-sm rounded-2xl shadow-2xl rotate-3 object-cover border-4 border-white/20 aspect-square"
           />
        </div>
      </div>
    </div>
  );
}
