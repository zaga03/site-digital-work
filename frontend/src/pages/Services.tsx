import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  LayoutDashboard,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Création de sites web",
    description:
      "Nous concevons des sites web modernes, rapides et adaptés à votre activité pour améliorer votre visibilité et transformer vos visiteurs en clients.",
    features: [
      "Site vitrine professionnel",
      "Landing page",
      "Site institutionnel",
      "Responsive mobile",
      "Optimisation SEO",
      "Performance web",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },

  {
    number: "02",
    icon: LayoutDashboard,
    title: "Applications web",
    description:
      "Des applications métier sur mesure pour centraliser vos données, automatiser vos processus et piloter votre activité.",
    features: [
      "Dashboard administrateur",
      "Gestion utilisateurs",
      "Gestion des données",
      "Système d'authentification",
      "API REST",
      "Base de données",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
  },

  {
    number: "03",
    icon: Smartphone,
    title: "Applications mobiles",
    description:
      "Nous développons des applications mobiles modernes pour Android et iOS avec une expérience utilisateur fluide.",
    features: [
      "Application Android",
      "Application iOS",
      "Interface moderne",
      "Notifications",
      "Authentification",
      "Connexion API",
    ],
    technologies: ["React Native", "Expo", "Firebase"],
  },

  {
    number: "04",
    icon: Workflow,
    title: "Digitalisation",
    description:
      "Nous transformons vos processus manuels en workflows digitaux afin de réduire les tâches répétitives et gagner en efficacité.",
    features: [
      "Analyse des processus",
      "Digitalisation métier",
      "Automatisation",
      "Workflows",
      "Gestion documentaire",
      "Tableaux de bord",
    ],
    technologies: ["Node.js", "React", "Automation"],
  },

  {
    number: "05",
    icon: Code2,
    title: "Logiciels sur mesure",
    description:
      "Des solutions logicielles conçues spécifiquement pour répondre aux besoins opérationnels de votre entreprise.",
    features: [
      "Analyse des besoins",
      "Architecture technique",
      "Développement personnalisé",
      "Gestion des utilisateurs",
      "Sécurité",
      "Maintenance",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
  },

  {
    number: "06",
    icon: Sparkles,
    title: "Modernisation digitale",
    description:
      "Nous améliorons vos outils existants pour les rendre plus modernes, performants, sécurisés et faciles à utiliser.",
    features: [
      "Refonte UI/UX",
      "Modernisation technique",
      "Optimisation performance",
      "Responsive design",
      "Migration",
      "Maintenance évolutive",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function Services() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pb-28">
        {/* Grid */}

        <div className="absolute inset-0 -z-20 dw-grid opacity-30" />

        {/* Glow */}

        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-dw-primary/10 blur-[140px]" />

        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge>Nos expertises</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-7 text-5xl font-black tracking-[-0.04em] text-dw-white sm:text-6xl lg:text-7xl"
            >
              Des solutions digitales
              <br />
              <span className="dw-gradient-text">
                conçues pour votre croissance.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-dw-muted sm:text-lg"
            >
              Digital Work accompagne les entreprises dans
              leur transformation digitale, de la conception
              d'un site web au développement de solutions
              métier complètes.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Button to="/contact">
                Démarrer un projet
                <ArrowRight size={17} />
              </Button>

              <Button
                to="/realisations"
                variant="secondary"
              >
                Voir nos réalisations
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          SERVICES INTRO
      ====================================================== */}

      <section className="border-t border-white/[0.06] py-24 sm:py-32">
        <Container>
          <SectionTitle
            eyebrow="Ce que nous faisons"
            title={
              <>
                Une expertise digitale
                <br />
                orientée résultats.
              </>
            }
            description="Nous ne développons pas simplement des interfaces. Nous concevons des outils numériques capables de répondre à vos objectifs commerciaux et opérationnels."
          />

          {/* Services grid */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-5 lg:grid-cols-2"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <section className="border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Badge>Technologies</Badge>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-dw-white sm:text-4xl">
                Une stack moderne pour des produits performants.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-dw-muted">
                Nous privilégions des technologies modernes,
                maintenables et adaptées aux besoins réels de
                chaque projet.
              </p>

              <div className="mt-8">
                <Button to="/contact">
                  Discuter de votre projet
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "React",
                "TypeScript",
                "React Native",
                "Node.js",
                "PostgreSQL",
                "Firebase",
                "Tailwind CSS",
                "REST API",
                "Git",
              ].map((technology) => (
                <div
                  key={technology}
                  className="flex min-h-[90px] items-center justify-center rounded-2xl border border-white/[0.07] bg-dw-card px-4 text-center text-sm font-semibold text-dwwhite transition-all duration-300 hover:-translate-y-1 hover:border-dw-primary/30 hover:bg-dw-primary/[0.04]"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="py-24 sm:py-32">
        <Container>
          <SectionTitle
            eyebrow="Notre méthode"
            title={
              <>
                Du besoin au produit
                <br />
                opérationnel.
              </>
            }
            description="Une méthode simple et structurée pour transformer votre idée en solution digitale concrète."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              title="Analyse"
              text="Nous comprenons votre activité, vos utilisateurs et vos objectifs."
            />

            <ProcessCard
              number="02"
              title="Conception"
              text="Nous définissons l'expérience utilisateur et l'architecture de la solution."
            />

            <ProcessCard
              number="03"
              title="Développement"
              text="Nous développons votre solution avec une stack moderne et évolutive."
            />

            <ProcessCard
              number="04"
              title="Livraison"
              text="Nous mettons votre solution en production et assurons son évolution."
            />
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-dw-primary/20 bg-dw-primary/[0.07] px-6 py-16 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-dw-primary/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-dw-primary/20 bg-dw-primary/10 text-dw-primary">
                <Sparkles size={22} />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-dw-white sm:text-4xl">
                Vous avez un projet digital ?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dw-muted">
                Parlons de votre besoin et construisons
                ensemble la solution adaptée à votre activité.
              </p>

              <div className="mt-8">
                <Button to="/contact">
                  Parlons de votre projet
                  <ArrowRight size={17} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

interface Service {
  number: string;
  icon: typeof Globe2;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={itemVariants}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-dw-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-dw-primary/20 sm:p-8"
    >
      {/* Hover glow */}

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-dw-primary/5 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Header */}

        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dw-primary/20 bg-dw-primary/10 text-dw-primary">
            <Icon size={25} />
          </div>

          <span className="text-xs font-bold tracking-[0.18em] text-dw-primary/70">
            {service.number}
          </span>
        </div>

        {/* Title */}

        <h3 className="mt-7 text-2xl font-bold text-dw-white">
          {service.title}
        </h3>

        {/* Description */}

        <p className="mt-4 text-sm leading-7 text-dw-muted">
          {service.description}
        </p>

        {/* Features */}

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-dw-muted"
            >
              <Check
                size={15}
                className="shrink-0 text-emerald-400"
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
          {service.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-dw-muted"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

interface ProcessCardProps {
  number: string;
  title: string;
  text: string;
}

function ProcessCard({
  number,
  title,
  text,
}: ProcessCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/[0.07] bg-dw-card p-6">
      <span className="text-xs font-bold tracking-[0.15em] text-dw-primary">
        {number}
      </span>

      <h3 className="mt-5 text-lg font-bold text-dw-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-dw-muted">
        {text}
      </p>
    </div>
  );
}