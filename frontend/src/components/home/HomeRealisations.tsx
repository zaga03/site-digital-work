import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  ExternalLink,
  FolderKanban,
  Smartphone,
  Globe,
  Monitor,
} from "lucide-react";

interface Realisation {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: typeof Globe;
  href?: string;
  featured?: boolean;
}

/**
 * Les informations des projets restent dans leur langue d'origine.
 *
 * IMPORTANT :
 * - title       → ne pas traduire
 * - category    → ne pas traduire
 * - description → ne pas traduire
 * - technologies → ne pas traduire
 *
 * Ces données pourront ensuite venir directement de l'API / base de données.
 */
const realisations: Realisation[] = [
  {
    title: "Digital Work",
    category: "Plateforme digitale",
    description:
      "Une plateforme moderne pensée pour présenter les services, les réalisations et l'expertise de Digital Work.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    featured: true,
  },
  {
    title: "Hotspot Management",
    category: "Solution réseau",
    description:
      "Une solution de gestion de hotspots permettant d'administrer les utilisateurs, sessions, vouchers, routeurs et statistiques.",
    technologies: ["React", "Node.js", "PostgreSQL", "MikroTik"],
    icon: Monitor,
    featured: true,
  },
  {
    title: "Applications mobiles",
    category: "Mobile",
    description:
      "Des applications mobiles conçues pour offrir une expérience rapide, intuitive et adaptée aux besoins métier.",
    technologies: ["React Native", "Expo", "Firebase"],
    icon: Smartphone,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function HomeRealisations() {
  const { t } = useTranslation();

  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-white py-24 dark:bg-slate-950 sm:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />

        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <FolderKanban className="h-4 w-4 text-blue-600 dark:text-blue-400" />

            {t("realisations.eyebrow")}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {t("realisations.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("realisations.titleHighlight")}
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {t("realisations.description")}
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {realisations.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-900 ${
                  project.featured
                    ? "lg:min-h-[380px]"
                    : "lg:min-h-[340px]"
                } ${index === 2 ? "lg:col-span-2" : ""}`}
              >
                {/* Project visual area */}
                <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/30">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(100,116,139,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.08) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/80 bg-white shadow-xl shadow-slate-900/10 transition-transform duration-500 group-hover:scale-110 dark:border-slate-700 dark:bg-slate-800">
                    <Icon className="h-9 w-9 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Featured badge — translated */}
                  {project.featured && (
                    <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-600/20">
                      {t("realisations.featured")}
                    </span>
                  )}

                  {/* Category — ORIGINAL PROJECT DATA */}
                  <span className="absolute right-5 top-5 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      {/* Project title — ORIGINAL PROJECT DATA */}
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      {/* Project description — ORIGINAL PROJECT DATA */}
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="hidden shrink-0 sm:block">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:border-blue-500">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Technologies — ORIGINAL PROJECT DATA */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project status / link */}
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {t("realisations.viewProject")}

                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 dark:text-slate-500">
                      {t("realisations.inDevelopment")}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t("realisations.cta.description")}
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {t("realisations.cta.button")}

            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}