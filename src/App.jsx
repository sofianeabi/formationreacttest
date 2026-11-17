import { useState } from "react";
import { PRODUITS } from "./produits";
import { ListeProduits } from "./components/ListeProduits";
import { RecapPanier } from "./components/RecapPanier";
import { FormulaireContact } from "./components/FormulaireContact";

export function App() {
  const [articles, setArticles] = useState([]);

  function ajouter(produit) {
    setArticles((actuels) => {
      const existant = actuels.find((a) => a.id === produit.id);
      if (existant) {
        return actuels.map((a) => (a.id === produit.id ? { ...a, quantite: a.quantite + 1 } : a));
      }
      return [...actuels, { ...produit, quantite: 1 }];
    });
  }

  return (
    <main>
      <h1>Boutique démo</h1>
      <ListeProduits produits={PRODUITS} onAjouter={ajouter} />
      <RecapPanier articles={articles} />
      <h2>Nous contacter</h2>
      <FormulaireContact envoyer={() => new Promise((ok) => setTimeout(ok, 800))} />
    </main>
  );
}
