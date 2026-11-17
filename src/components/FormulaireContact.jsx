import { useState } from "react";

// Formulaire de contact : email obligatoire et valide, message obligatoire.
// envoyer(donnees) renvoie une promesse (appel API).
export function FormulaireContact({ envoyer }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [envoye, setEnvoye] = useState(false);

  async function soumettre(e) {
    e.preventDefault();
    if (!email) return setErreur("L'email est obligatoire.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setErreur("L'email n'est pas valide.");
    if (!message.trim()) return setErreur("Le message est obligatoire.");
    setErreur("");
    setEnvoiEnCours(true);
    try {
      await envoyer({ email, message });
      setEnvoye(true);
    } catch {
      setErreur("L'envoi a échoué. Réessayez.");
    } finally {
      setEnvoiEnCours(false);
    }
  }

  if (envoye) return <p role="status">Merci, votre message a bien été envoyé.</p>;

  return (
    <form onSubmit={soumettre} noValidate>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      {erreur && <p role="alert">{erreur}</p>}
      <button type="submit" disabled={envoiEnCours}>
        {envoiEnCours ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}
