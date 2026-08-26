import {
  Globe2,
  Smartphone,
  Code2,
  Search,
  Hotel,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  tags: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "creation-site-web",
    icon: Globe2,
    title: "Création de sites web",
    shortTitle: "Sites web",
    description:
      "Des sites professionnels modernes, rapides et adaptés à tous les écrans.",
    details:
      "Nous concevons des sites web qui présentent clairement votre activité, renforcent votre crédibilité et facilitent la conversion de vos visiteurs en clients.",
    tags: ["React", "WordPress", "SEO", "Responsive"],
    benefits: [
      "Design moderne et professionnel",
      "Responsive mobile, tablette et desktop",
      "Optimisation des performances",
      "Structure optimisée pour le référencement",
    ],
  },

  {
    id: "applications-web",
    icon: Code2,
    title: "Applications web",
    shortTitle: "Applications web",
    description:
      "Des plateformes et applications métier développées selon vos besoins.",
    details:
      "Nous développons des applications web capables de gérer vos utilisateurs, données, processus métier et tableaux de bord.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    benefits: [
      "Interface personnalisée",
      "Gestion des utilisateurs",
      "Tableaux de bord",
      "API et intégrations",
    ],
  },

  {
    id: "applications-mobiles",
    icon: Smartphone,
    title: "Applications mobiles",
    shortTitle: "Mobile",
    description:
      "Des applications Android et iOS pensées pour offrir une expérience mobile fluide.",
    details:
      "Nous créons des applications mobiles modernes adaptées aux besoins des entreprises, startups et projets digitaux.",
    tags: ["React Native", "Expo", "Firebase"],
    benefits: [
      "Android et iOS",
      "Interface responsive",
      "Notifications",
      "Connexion aux API",
    ],
  },

  {
    id: "solutions-hotels",
    icon: Hotel,
    title: "Solutions pour hôtels & restaurants",
    shortTitle: "Hôtellerie",
    description:
      "Des outils digitaux pour améliorer la visibilité et les réservations.",
    details:
      "Nous accompagnons les hôtels, restaurants et établissements touristiques dans leur transformation digitale.",
    tags: ["Web", "SEO local", "WhatsApp", "Réservation"],
    benefits: [
      "Site hôtelier professionnel",
      "Galerie et présentation des chambres",
      "Contact et réservation",
      "Optimisation de la visibilité locale",
    ],
  },

  {
    id: "visibilite-digitale",
    icon: Search,
    title: "Visibilité digitale",
    shortTitle: "Visibilité",
    description:
      "Améliorez votre présence sur Google et les plateformes digitales.",
    details:
      "Nous analysons votre présence digitale et identifions les améliorations permettant à vos clients de trouver plus facilement votre entreprise.",
    tags: ["SEO", "Google", "Local", "Stratégie"],
    benefits: [
      "Audit de présence digitale",
      "Optimisation SEO",
      "Présence locale",
      "Stratégie de visibilité",
    ],
  },

  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & support",
    shortTitle: "Maintenance",
    description:
      "Gardez vos solutions digitales performantes, sécurisées et à jour.",
    details:
      "Nous intervenons sur vos sites et applications pour corriger les problèmes, améliorer les performances et ajouter de nouvelles fonctionnalités.",
    tags: ["Support", "Sécurité", "Performance"],
    benefits: [
      "Corrections techniques",
      "Mises à jour",
      "Optimisation",
      "Évolution fonctionnelle",
    ],
  },
];