# Portfolio React — Ilyas BELAÏD

Portfolio personnel développé avec React, Vite, Tailwind CSS et Framer Motion.

## Aperçu

L’application est montée depuis [`App`](src/App.jsx) via [`main.jsx`](src/main.jsx), avec des sections dédiées :

- [`Navbar`](src/components/Navbar.jsx)
- [`Hero`](src/components/Hero.jsx)
- [`About`](src/components/About.jsx)
- [`Technologies`](src/components/Technologies.jsx)
- [`Experiences`](src/components/Experiences.jsx)
- [`Projects`](src/components/Projects.jsx)
- [`Contact`](src/components/Contact.jsx)

Le contenu texte et les données des expériences/projets sont centralisés dans [`src/constants/index.js`](src/constants/index.js) via [`HERO_CONTENT`](src/constants/index.js), [`ABOUT_TEXT`](src/constants/index.js), [`EXPERIENCES`](src/constants/index.js), [`PROJECTS`](src/constants/index.js) et [`CONTACT`](src/constants/index.js).

## Stack technique

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint

Configuration principale :

- [vite.config.js](vite.config.js)
- [tailwind.config.js](tailwind.config.js)
- [postcss.config.js](postcss.config.js)
- [eslint.config.js](eslint.config.js)

## Installation

Prérequis : Node.js (LTS recommandé) + npm.

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # Démarrage en local
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Vérification ESLint
```

## Structure du projet

```text
src/
  App.jsx
  main.jsx
  index.css
  assets/
  components/
  constants/
```

## Personnalisation rapide

- Modifier les textes/projets/expériences : [`src/constants/index.js`](src/constants/index.js)
- Modifier le style global : [`src/index.css`](src/index.css)
- Modifier la composition des sections : [`src/App.jsx`](src/App.jsx)

## Auteur

Ilyas BELAÏD  
LinkedIn et GitHub disponibles dans [`Navbar`](src/components/Navbar.jsx).