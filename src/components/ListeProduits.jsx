import { useState } from "react";

// Affiche les produits, triables par prix, avec un bouton d'ajout au panier.
export function ListeProduits({ produits, onAjouter }) {
  const [ordre, setOrdre] = useState("aucun");

  const affiches =
    ordre === "croissant"
      ? [...produits].sort((a, b) => a.prix - b.prix)
      : ordre === "decroissant"
        ? [...produits].sort((a, b) => b.prix - a.prix)
        : produits;

  return (
    <section>
      <label>
        Trier par prix{" "}
        <select value={ordre} onChange={(e) => setOrdre(e.target.value)}>
          <option value="aucun">Aucun tri</option>
          <option value="croissant">Prix croissant</option>
          <option value="decroissant">Prix décroissant</option>
        </select>
      </label>
      <ul>
        {affiches.map((p) => (
          <li key={p.id}>
            <span>{p.nom}</span> <span>{p.prix} €</span>{" "}
            <button onClick={() => onAjouter(p)}>Ajouter au panier</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
