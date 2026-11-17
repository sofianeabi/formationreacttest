import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Compteur } from "./Compteur";

it("augmente le compteur au clic sur Ajouter", async () => {
  render(<Compteur libelle="Articles" />);
  await userEvent.click(screen.getByRole("button", { name: "Ajouter" }));
  expect(screen.getByText("Articles : 1")).toBeInTheDocument();
});
