import { useState } from "react";

export function Compteur({ libelle }) {
  const [nombre, setNombre] = useState(0);
  return (
    <div>
      <p>
        {libelle} : {nombre}
      </p>
      <button onClick={() => setNombre(nombre + 1)}>Ajouter</button>
    </div>
  );
}
