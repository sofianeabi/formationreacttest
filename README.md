# Boutique démo

Projet de la formation « Développer avec l'IA ».

## Installation (5 minutes)
1. Node.js 20 ou plus récent : `node -v`
2. Dans ce dossier : `npm install`
3. Vérifier : `npm test` (tous les tests doivent être verts)
4. Claude Code : `npm install -g @anthropic-ai/claude-code`, puis lancer `claude` dans ce dossier
   et se connecter avec le compte fourni par l'entreprise.

## Contenu
- `src/panier.js` : règles de calcul (sous-total, frais de port, total).
- `src/components/` : Compteur, ListeProduits, RecapPanier, FormulaireContact.
- `CLAUDE.md` : le contexte que Claude Code lit à chaque session.
- `.claude/settings.json` : interdit à Claude de lire `.env` et de faire `git push`.
