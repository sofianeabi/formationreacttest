import { describe, it, expect } from "vitest";
import { calculerSousTotal, calculerFraisDePort, calculerTotal } from "./panier";

describe("calculerSousTotal", () => {
  it("additionne prix x quantité de chaque article", () => {
    const articles = [{ prix: 10, quantite: 2 }, { prix: 5, quantite: 1 }];
    expect(calculerSousTotal(articles)).toBe(25);
  });

  it("renvoie 0 pour un panier vide", () => {
    expect(calculerSousTotal([])).toBe(0);
  });
});

describe("calculerFraisDePort", () => {
  it("facture les frais de port sous 50 €", () => {
    expect(calculerFraisDePort(30)).toBe(5.9);
  });

  it("offre les frais de port au-dessus de 50 €", () => {
    expect(calculerFraisDePort(80)).toBe(0);
  });
});

describe("calculerTotal", () => {
  it("ajoute les frais de port à un petit panier", () => {
    expect(calculerTotal([{ prix: 35, quantite: 1 }])).toBe(40.9);
  });
});
