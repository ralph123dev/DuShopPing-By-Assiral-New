<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/3830c22a-96a0-4441-a952-0d3d32ed44b9

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## D�tails des deux derniers commits

### Commit `c4a54f8`
- Message : `Ralph:Mes mises a jour de fin, modifications sur les publict�s, et les formules boost`
- Fichiers modifi�s :
  - `src/App.tsx`
  - `src/components/SidebarAd.tsx`
  - `src/page/Home.tsx`
  - `src/page/dashboard/BoostPlans.tsx`
  - `supabase_migration.sql`

### Commit `60619ad`
- Message : `mise a jour de la boutique et de la BD`
- Fichiers modifi�s :
  - `.env.example`
  - `README.md`
  - `index.html`
  - `src/App.tsx`
  - `src/components/Header.tsx`
  - `src/ion-icons.d.ts`
  - `src/lib/cloudinary.ts`
  - `src/lib/services.ts`
  - `src/page/SellerPage.tsx`
  - `src/page/dashboard/PublishProduct.tsx`
  - `src/page/dashboard/SellerStats.tsx`
  - `src/page/dashboard/StoreSettings.tsx`
  - `supabase_migration.sql`

# joyces


# Mes modifivations apporter (RALPH): 
1. Couleurs (à centraliser en tokens réutilisables)
Vert primaire 
#14833B : boutons principaux, liens actifs, menus actifs, icônes, validation, éléments certifiés
Rouge secondaire 
#D81E24 : promotions, réductions, produits populaires, offres limitées, notifications
Jaune Premium 
#F4B400 : boutiques Premium, offres Boost, badges VIP, sponsorisation, étoiles, vendeurs recommandés
Blanc 
#FFFFFF : fond principal
Gris clair 
#F8F9FA : fond des cartes
Gris moyen 
#E5E7EB : séparateurs
Texte principal 
#1F2937 / texte secondaire 
#6B7280
Répartition à respecter : 70 % blanc, 20 % vert, 7 % rouge, 3 % jaune — le blanc reste dominant
2. Header
Sticky au scroll
Logo + barre de recherche centrale + bouton « Publier une annonce » (vert plein) + bouton « Connexion » (discret) + bouton « S’inscrire » (dégradé vert → jaune) + icônes Favoris / Notifications / Profil
3. Hero Banner (accueil)
Bannière dynamique : meilleures offres, campagnes promo, entreprises partenaires + bouton « Découvrir »
4. Navigation par catégories
Icônes colorées, en grille ou carrousel (ex. Artisanat, Agriculture, Immobilier, Automobile, Électronique, Santé, Beauté, Restauration, Mode, Services)
5. Cartes produits
Contenu : photo HD, badge Premium/Sponsorisé, nom du produit, nom de l’entreprise, localisation, note, prix, disponibilité, boutons d’action
Style : ombre légère, coins arrondis 16 px, léger zoom + transition fluide au survol
6. Boutons (système normalisé)
Vert plein = action principale
Blanc contour vert = action secondaire
Rouge = promotion / achat
Jaune = Premium / Boost
7. Badges
Vérifié, Premium, Sponsorisé, Promotion, Nouveau
8. Espaces publicitaires
Même esthétique que les cartes produits, pas de simples bannières
9. Footer
À propos, Contact, Conditions d’utilisation, Politique de confidentialité, FAQ, Réseaux sociaux
10. Animations (discrètes, sans impact perf)
Apparition progressive, léger zoom au survol des cartes, transitions sur les boutons, skeleton loader au chargement
11. Accessibilité & Responsive
Contraste suffisant (WCAG), navigation clavier, tailles de police lisibles, zones cliquables confortables
Responsive complet : mobile, tablette, desktop, écran 4K
12. États interactifs
Prévoir hover / focus / active / disabled pour boutons, cartes et champs de formulaire