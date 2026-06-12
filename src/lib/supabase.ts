/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Client Supabase unifié et typé
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fonction de test de connexion et de santé de la base de données
 */
export async function checkConnection(): Promise<boolean> {
  try {
    const { data, error } = await supabase.from('categories').select('nom').limit(1);
    if (error) {
      console.warn('Supabase database connection warning or tables missing:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Supabase client error:', err);
    return false;
  }
}

/**
 * Enregistre une interaction utilisateur (Analytics & Monétisation) de manière asynchrone sécurisée.
 * Correspond à la table `statistiques_interactions` du Diagramme de Classes.
 */
export async function trackInteraction(params: {
  produitId?: string;
  boutiqueId?: string;
  typeAction: 'VueProfil' | 'ClicWhatsApp' | 'AppelDirect' | 'VueProduit';
}) {
  try {
    const { error } = await supabase.from('statistiques_interactions').insert([
      {
        produit_id: params.produitId || null,
        boutique_id: params.boutiqueId || null,
        type_action: params.typeAction,
        adresse_ip: 'CLIENT_BROWSER_IP' // En production, Supabase s'occupe de remplir l'IP via RLS/triggers ou headers
      }
    ]);
    if (error) {
      console.warn('Could not save statistic interaction to Supabase:', error.message);
    }
  } catch (err) {
    console.error('Tracking interaction failure:', err);
  }
}

/**
 * Incrémente le nombre de vues de manière persistante sur Supabase.
 * Fait appel à la fonction stockée Pl/pgSQL `incrementer_vues_produit` sécurisée.
 */
export async function incrementProductViews(productId: string): Promise<boolean> {
  try {
    // Si le produit utilise un ID UUID Supabase, on appelle la RPC
    if (productId.length === 36) { // Format UUID standard
      const { error } = await supabase.rpc('incrementer_vues_produit', { produit_uuid: productId });
      return !error;
    }
    return false;
  } catch (err) {
    console.error('Incrementing views failure:', err);
    return false;
  }
}
