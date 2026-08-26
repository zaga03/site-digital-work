import type { LucideIcon } from "lucide-react";

import {
  Globe2,
  Hotel,
  Smartphone,
  Network,
  BarChart3,
  Code2,
} from "lucide-react";

/* =========================================================
   PROJECT TYPE
========================================================= */

export interface Project {
  id: string;

  /* Identité */
  title: string;
  shortTitle: string;

  /* Contenu */
  description: string;
  details: string;

  /* Classification */
  category: string;
  tags: string[];

  /* Visuel */
  image: string;
  icon: LucideIcon;

  /* Technologies */
  technologies: string[];

  /* Résultats / bénéfices */
  benefits: string[];

  /* Liens */
  link?: string;
  demo?: string;

  /* Affichage */
  featured?: boolean;
  status?: "completed" | "in-progress" | "maintenance";
}

/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [
  {
    id: "digital-work",
    title: "Digital Work",
    shortTitle: "Digital Work",

    description:
      "Création d'une plateforme web moderne pour présenter les services, solutions et réalisations de Digital Work.",

    details:
      "Conception et développement d'une interface moderne, responsive et performante destinée à présenter l'agence Digital Work, ses expertises et ses solutions digitales.",

    category: "Site web",

    tags: [
      "Site vitrine",
      "Agence digitale",
      "Responsive",
    ],

    image: "/projects/digital-work.webp",

    icon: Globe2,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],

    benefits: [
      "Design moderne et professionnel",
      "Interface responsive",
      "Navigation fluide",
      "Optimisation des performances",
      "Présentation des services",
    ],

    link: "/",

    featured: true,

    status: "completed",
  },

  {
    id: "solution-hotellerie",
    title: "Solution digitale pour hôtel",
    shortTitle: "Solution hôtelière",

    description:
      "Plateforme digitale destinée aux hôtels et établissements touristiques pour améliorer leur visibilité et leurs réservations.",

    details:
      "Création d'une solution digitale permettant de présenter l'établissement, les chambres, les services, la galerie et les moyens de contact tout en facilitant la prise de réservation.",

    category: "Hôtellerie",

    tags: [
      "Hôtel",
      "Réservation",
      "SEO local",
      "WhatsApp",
    ],

    image: "/projects/hotel.webp",

    icon: Hotel,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],

    benefits: [
      "Présence digitale professionnelle",
      "Présentation des chambres",
      "Galerie photos",
      "Contact rapide",
      "Réservation facilitée",
      "Optimisation de la visibilité locale",
    ],

    link: "#",

    featured: true,

    status: "completed",
  },

  {
    id: "application-metier",
    title: "Application métier",
    shortTitle: "Application métier",

    description:
      "Application web sur mesure destinée à centraliser les données et simplifier la gestion quotidienne d'une entreprise.",

    details:
      "Conception d'une plateforme métier avec tableau de bord, gestion des utilisateurs, gestion des données et suivi des opérations.",

    category: "Application web",

    tags: [
      "Dashboard",
      "Gestion",
      "Automatisation",
    ],

    image: "/projects/application-metier.webp",

    icon: BarChart3,

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],

    benefits: [
      "Centralisation des données",
      "Tableau de bord",
      "Gestion des utilisateurs",
      "Automatisation des opérations",
      "Statistiques",
      "Architecture évolutive",
    ],

    link: "#",

    featured: true,

    status: "completed",
  },

  {
    id: "application-mobile",
    title: "Application mobile",
    shortTitle: "Application mobile",

    description:
      "Application mobile moderne destinée à offrir une expérience utilisateur fluide sur Android et iOS.",

    details:
      "Développement d'une application mobile multiplateforme avec authentification, connexion API et interface adaptée aux besoins du projet.",

    category: "Application mobile",

    tags: [
      "Android",
      "iOS",
      "Mobile",
    ],

    image: "/projects/application-mobile.webp",

    icon: Smartphone,

    technologies: [
      "React Native",
      "Expo",
      "Firebase",
    ],

    benefits: [
      "Application Android",
      "Application iOS",
      "Interface moderne",
      "Authentification",
      "Notifications",
      "Connexion API",
    ],

    link: "#",

    status: "completed",
  },

  {
    id: "wifi-management",
    title: "Plateforme de gestion Wi-Fi",
    shortTitle: "Gestion Wi-Fi",

    description:
      "Solution de gestion de hotspot et d'utilisateurs pour contrôler les accès Wi-Fi et suivre l'activité réseau.",

    details:
      "Développement d'une plateforme permettant de gérer les routeurs, utilisateurs, sessions, vouchers et statistiques d'un réseau Wi-Fi.",

    category: "Réseaux & Wi-Fi",

    tags: [
      "Wi-Fi",
      "Hotspot",
      "MikroTik",
      "Vouchers",
    ],

    image: "/projects/wifi-management.webp",

    icon: Network,

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MikroTik",
    ],

    benefits: [
      "Gestion des utilisateurs",
      "Gestion des vouchers",
      "Suivi des sessions",
      "Statistiques réseau",
      "Gestion des routeurs",
      "Administration centralisée",
    ],

    link: "#",

    featured: true,

    status: "in-progress",
  },

  {
    id: "logiciel-sur-mesure",
    title: "Logiciel sur mesure",
    shortTitle: "Logiciel métier",

    description:
      "Développement d'une solution logicielle personnalisée pour répondre aux besoins spécifiques d'une entreprise.",

    details:
      "Analyse des besoins, conception de l'architecture, développement des fonctionnalités métier et mise en place d'une interface d'administration.",

    category: "Logiciel",

    tags: [
      "Sur mesure",
      "Gestion",
      "Entreprise",
    ],

    image: "/projects/logiciel-sur-mesure.webp",

    icon: Code2,

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],

    benefits: [
      "Analyse des besoins",
      "Architecture personnalisée",
      "Interface d'administration",
      "Gestion des utilisateurs",
      "Sécurité",
      "Évolution fonctionnelle",
    ],

    link: "#",

    status: "in-progress",
  },
];

/* =========================================================
   HELPERS
========================================================= */

/**
 * Retourne un projet à partir de son identifiant.
 */
export function getProjectById(
  id: string
): Project | undefined {
  return projects.find(
    (project) => project.id === id
  );
}

/**
 * Retourne uniquement les projets mis en avant.
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(
    (project) => project.featured
  );
}

/**
 * Retourne les projets d'une catégorie.
 */
export function getProjectsByCategory(
  category: string
): Project[] {
  return projects.filter(
    (project) => project.category === category
  );
}

/**
 * Retourne les projets ayant un statut donné.
 */
export function getProjectsByStatus(
  status: Project["status"]
): Project[] {
  return projects.filter(
    (project) => project.status === status
  );
}