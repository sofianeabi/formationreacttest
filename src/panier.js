// Règles de calcul du panier.

export const FRAIS_DE_PORT = 5.9;
export const SEUIL_LIVRAISON_GRATUITE = 50;

// Somme des prix x quantités des articles.
export function calculerSousTotal(articles) {
  return articles.reduce((somme, a) => somme + a.prix * a.quantite, 0);
}

// Frais de port : offerts à partir de 50 € d'achat.
export function calculerFraisDePort(sousTotal) {
  if (sousTotal === 0) return 0;
  return sousTotal > SEUIL_LIVRAISON_GRATUITE ? 0 : FRAIS_DE_PORT;
}

// Total à payer, arrondi au centime.
export function calculerTotal(articles) {
  const sousTotal = calculerSousTotal(articles);
  const total = sousTotal + calculerFraisDePort(sousTotal);
  return Math.round(total * 100) / 100;
}
