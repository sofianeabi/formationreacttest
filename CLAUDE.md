# Boutique démo

Petite boutique React servant aux démos et exercices de la formation.

## Stack
- React 18 (composants fonction et hooks uniquement), JavaScript, Vite.
- Tests : Vitest + Testing Library (`npm test`). Pas de Playwright dans ce projet.

## Commandes
- `npm test` : lance tous les tests. Ils doivent être verts avant toute proposition de commit.
- `npm run dev` : lance l'application.

## Conventions
- Noms de fonctions, variables et tests en français, comme le code existant.
- Les règles métier vont dans `src/panier.js`, testées dans `src/panier.test.js`.
- Tests : tester le comportement visible (rôles, textes), jamais l'implémentation.
- Les listes utilisent un identifiant stable comme `key`, jamais l'index.

## Règles de travail
- Pour corriger un bug : écrire d'abord un test qui le reproduit et vérifier qu'il échoue.
- Ne jamais modifier ou supprimer un test existant pour le faire passer.
- Ne pas ajouter de dépendance sans le demander.
- Ne jamais lire ni afficher le fichier `.env`.
