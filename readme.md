# Anoncodes Studio
Édité par Théo, le 22/10/24 ) 12:16.

## Avant Propos
Bienvenue sur la documentation du projet Anoncodes Studio - Frontend. Vous pouvez trouver ici tout le descriptif du projet afin d'itérer convenablement sur le projet. Poursuivons vers [Table des Matières](#table-des-matières).

## Table des matières
- [Avant Propos](#avant-propos)
- [Table des matières](#table-des-matières)
- [TODOs](#todos)
- [Sources](#sources)
- [Références](#références)
- [Auteurs](#auteurs)
- [Structure](#structure)
- [Notes](#notes)

## Todos
- ajouter typescript au dossier ui pour l'ui kit.
- ajouter scss postcss au dossier ui pour l'ui kit.
- ajouter un framework de test pour l'ui kit et toute la partie fonctionelle du front-end.

## Sources
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://fr.react.dev/)
- [Next](https://nextjs.org/)
  - [.env support](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
- [SCSS](https://sass-lang.com/)
- [EsBuild](https://esbuild.github.io/)
- [PNPM](https://pnpm.io/fr/)
- [EsLint](https://eslint.org/)

## Références
- [Grafikart](https://grafikart.fr)

## Auteurs
- Théo, Développeur Full-Stack
- BNK, Développeur Front-End

## Structure
Nous avons décidé d'utiliser une structure en monorepository, cela nous permet de faire co-exister, le front-end, le storybook, l'uiKIT et le potentiel back-end en JavaScript. Actuellement le back-end fonctionne en C++. Notre architecture se base sur le monorepo pnpm organisé comme ceci:

``` 
- pnpm-workspace.yaml
- apps/
  - frontend/
- libs/
  - ui/
- tools/
  - storybook/
```

La structure est assez simple mais il faut y apporter un commentaire; apps contient les différentes grandes parties de l'application, le front-end, le back-end, le seo, etc...;libs contient les parties communes aux apps, par exemple l'ui kit; le dossier tools qui contient les outils annexes, comme storybook.

## Notes
Pour importer un composant de l'ui dans une apps on fait dans le package.json
"@anoncodes/ui": "workspace:^1.0.0"
