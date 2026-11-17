import { calculerSousTotal, calculerFraisDePort, calculerTotal } from "../panier";

export function RecapPanier({ articles }) {
  const sousTotal = calculerSousTotal(articles);
  const port = calculerFraisDePort(sousTotal);
  return (
    <aside>
      <h2>Panier ({articles.reduce((n, a) => n + a.quantite, 0)})</h2>
      <p>Sous-total : {sousTotal.toFixed(2)} €</p>
      <p>Frais de port : {port === 0 ? "offerts" : `${port.toFixed(2)} €`}</p>
      <p>
        <strong>Total : {calculerTotal(articles).toFixed(2)} €</strong>
      </p>
    </aside>
  );
}
