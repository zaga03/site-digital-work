
import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Smartphone,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type Technology = {
  name: string;
  categoryKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  color: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    categoryKey: "frontend",
    descriptionKey: "react",
    icon: Code2,
    color: "text-cyan-500",
  },
  {
    name: "React Native",
    categoryKey: "mobile",
    descriptionKey: "reactNative",
    icon: Smartphone,
    color: "text-sky-500",
  },
  {
    name: "Node.js",
    categoryKey: "backend",
    descriptionKey: "nodejs",
    icon: Server,
    color: "text-emerald-500",
  },
  {
    name: "TypeScript",
    categoryKey: "engineering",
    descriptionKey: "typescript",
    icon: Layers3,
    color: "text-blue-500",
  },
  {
    name: "PostgreSQL",
    categoryKey: "database",
    descriptionKey: "postgresql",
    icon: Database,
    color: "text-indigo-500",
  },
  {
    name: "Web Technologies",
    categoryKey: "web",
    descriptionKey: "webTechnologies",
    icon: Globe2,
    color: "text-violet-500",
  },
  {
    name: "Security",
    categoryKey: "infrastructure",
    descriptionKey: "security",
    icon: ShieldCheck,
    color: "text-amber-500",
  },
  {
    name: "Performance",
    categoryKey: "optimization",
    descriptionKey: "performance",
    icon: Zap,
    color: "text-orange-500",
  },
];

export default function HomeTechnologies() {
  const { t } = useTranslation();

  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/5" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400">
            {t("technologies.eyebrow")}
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {t("technologies.title")}
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            {t("technologies.description")}
          </p>
        </div>

        {/* Technology grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.name}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700"
              >
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-slate-200 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className={technology.color}
                    />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {t(`technologies.categories.${technology.categoryKey}`)}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {technology.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {t(
                      `technologies.items.${technology.descriptionKey}`,
                    )}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 h-px w-full bg-slate-100 dark:bg-slate-800" />

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-current ${technology.color}`}
                  />

                  {t("technologies.mastered")}
                </div>
              </article>
            );
          })}
        </div>

        {/* Architecture statement */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50">
                  <Layers3
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>

                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {t("technologies.architecture.eyebrow")}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                {t("technologies.architecture.title")}
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                {t("technologies.architecture.description")}
              </p>
            </div>

            <div className="border-t border-slate-200 p-8 lg:border-l lg:border-t-0 lg:p-12 dark:border-slate-800">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-2">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    Web
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {t("technologies.architecture.web")}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    Mobile
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {t("technologies.architecture.mobile")}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    API
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {t("technologies.architecture.api")}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    Data
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {t("technologies.architecture.data")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            {t("technologies.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}

