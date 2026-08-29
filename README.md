

##  Présentation:

**Digital Work** est une plateforme web destinée à présenter les services,
solutions et réalisations d'une entreprise spécialisée dans le développement
et les solutions numériques.

Le projet combine :

- un site vitrine moderne ;
- une interface d'administration ;
- une gestion dynamique des réalisations ;
- un backend API ;
- une gestion des données ;
- un système de thème clair/sombre ;
- une interface responsive ;
- une architecture frontend/backend séparée.

L'objectif est de disposer d'une plateforme professionnelle permettant de
présenter les compétences de Digital Work tout en facilitant la gestion du
contenu depuis l'administration.

---

##  Fonctionnalités:

### Site vitrine:

- Page d'accueil
- Présentation des services
- Présentation des solutions
- Présentation des réalisations
- Page À propos
- Page Contact
- Navigation responsive
- Navbar moderne
- Footer professionnel
- Logo Digital Work
- Appels à l'action
- Design responsive desktop/tablette/mobile

### Thème

Le site dispose d'un système de thème :

- Mode clair
- Mode sombre
- Changement instantané du thème
- Interface adaptée au thème actif
- Composant `ThemeSwitcher`
- Gestion centralisée via `ThemeContext`

### Réalisations

Les projets présentés sur le site sont gérés dynamiquement.

Fonctionnalités :

- affichage des projets ;
- création d'un projet ;
- modification d'un projet ;
- suppression d'un projet ;
- catégorie ;
- description ;
- technologies utilisées ;
- projet mis en avant ;
- lien vers la démonstration.

### Administration

L'application dispose d'une interface d'administration permettant de gérer
les réalisations du site.

Fonctionnalités :

- connexion administrateur ;
- tableau de bord ;
- liste des réalisations ;
- ajout d'une réalisation ;
- modification ;
- suppression ;
- accès aux démonstrations ;
- déconnexion.

### Accès administrateur discret

L'accès à l'administration peut être déclenché via plusieurs clics rapides
sur certains éléments de l'interface.

Cette fonctionnalité permet de conserver une interface publique propre sans
ajouter de bouton d'administration visible dans la navigation principale.

---

## ⚖️ Informations légales

Le footer contient :

- Mentions légales
- Politique de confidentialité

Les informations sont affichées dans une fenêtre modale afin de conserver
une navigation fluide sans multiplier les pages.

---

## 🧱 Architecture

Le projet utilise une architecture séparant clairement le frontend et le
backend.


# Digital Work

<p align="center">
  <strong>Digital Work</strong><br />
  Solutions digitales modernes pour entreprises, organisations et particuliers.
</p>

<p align="center">
  <a href="#-présentation">Présentation</a> •
  <a href="#-fonctionnalités">Fonctionnalités</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-configuration">Configuration</a>
</p>

---

```text

 Design

Le design de Digital Work est basé sur une approche :

minimaliste ;
professionnelle ;
responsive ;
orientée conversion ;
cohérente entre les pages ;
adaptée aux interfaces claires et sombres.

Le système de thème est centralisé afin de maintenir une cohérence visuelle
dans toute l'application.

 Responsive Design

L'interface est conçue pour fonctionner sur :

Desktop
Laptop
Tablette
Smartphone

La navigation mobile dispose d'un menu animé et d'une gestion indépendante
du menu desktop.

Base de données

Le backend utilise une base de données pour stocker les informations
dynamiques de l'application.

Les migrations doivent être exécutées dans l'ordre prévu par le projet

backend/
└── migrations/
    ├── 001_...
    ├── 002_...
    ├── 003_...
    └── ...


    Technologies
Frontend
    React
    TypeScript
    Vite
    Tailwind CSS
    Framer Motion
    Lucide React
    React Router
Backend
    Node.js
    TypeScript
    API REST
    système d'authentification
    accès base de données
Outils
    Git
    GitHub
    Visual Studio Code
    npm



digital-work/
│
├── README.md
├── .gitignore
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── migrations/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── layout/
    │   │   └── ui/
    │   ├── contexts/
    │   ├── pages/
    │   │   ├── admin/
    │   │   └── ...
    │   ├── services/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    │
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── .env.example





    https://site-digital-work-git-main-zagarino0site-digital-work.vercel.app/