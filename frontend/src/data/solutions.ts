import {
  Hotel,
  Building2,
  ShoppingBag,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

export interface Solution {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    id: "hotels-restaurants",
    icon: Hotel,
    title: "Hôtels & restaurants",
    description:
      "Développez votre visibilité et facilitez la prise de contact avec vos clients.",
    features: [
      "Site professionnel",
      "Galerie photos",
      "Présentation des chambres",
      "Réservation",
      "WhatsApp",
      "SEO local",
    ],
  },

  {
    id: "pme",
    icon: Building2,
    title: "PME & entreprises",
    description:
      "Digitalisez vos opérations et centralisez vos activités dans des outils adaptés.",
    features: [
      "Dashboard",
      "Gestion utilisateurs",
      "Automatisation",
      "Applications métier",
      "Statistiques",
      "API",
    ],
  },

  {
    id: "commerce",
    icon: ShoppingBag,
    title: "Commerces",
    description:
      "Présentez vos produits et facilitez les commandes de vos clients.",
    features: [
      "Catalogue",
      "E-commerce",
      "Commandes",
      "Gestion clients",
      "Paiement",
      "Notifications",
    ],
  },

  {
    id: "services",
    icon: BriefcaseBusiness,
    title: "Prestataires de services",
    description:
      "Digitalisez votre relation client et simplifiez la prise de rendez-vous.",
    features: [
      "Site professionnel",
      "Formulaires",
      "Rendez-vous",
      "Gestion clients",
      "Notifications",
      "Suivi",
    ],
  },
];