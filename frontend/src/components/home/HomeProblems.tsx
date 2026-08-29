
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock3,
  Code2,
  EyeOff,
  Layers,
  TrendingDown,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const problems = [
  {
    key: "time",
    icon: Clock3,
  },
  {
    key: "technology",
    icon: Code2,
  },
  {
    key: "visibility",
    icon: EyeOff,
  },
  {
    key: "systems",
    icon: Layers,
  },
  {
    key: "profitability",
    icon: TrendingDown,
  },
  {
    key: "scalability",
    icon: AlertTriangle,
  },
] as const;

export default function HomeProblems() {
  const { t } = useTranslation();

  return (
    <section
      id="problems"
      className="
        relative overflow-hidden
        bg-slate-50
        py-24
        text-slate-900
        dark:bg-slate-950
        dark:text-white
        sm:py-28
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute -left-32 top-20
            h-72 w-72
            rounded-full
            bg-red-500/5
            blur-3xl
            dark:bg-red-500/10
          "
        />

        <div
          className="
            absolute -right-32 bottom-10
            h-80 w-80
            rounded-full
            bg-blue-500/5
            blur-3xl
            dark:bg-blue-500/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-red-200
              bg-red-50
              px-4 py-2
              text-sm font-semibold
              text-red-600
              dark:border-red-900/50
              dark:bg-red-950/30
              dark:text-red-400
            "
          >
            {t("problems.eyebrow")}
          </span>

          <h2
            className="
              mt-6
              text-3xl font-bold
              tracking-tight
              text-slate-950
              dark:text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            {t("problems.title")}{" "}
            <span className="text-red-500">
              {t("problems.highlight")}
            </span>
          </h2>

          <p
            className="
              mt-6
              text-base
              leading-8
              text-slate-600
              dark:text-slate-400
              sm:text-lg
            "
          >
            {t("problems.description")}
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            const content = t(`problems.items.${problem.key}`, {
              returnObjects: true,
            }) as {
              title: string;
              description: string;
            };

            return (
              <motion.article
                key={problem.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group relative
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-red-200
                  hover:shadow-xl
                  hover:shadow-slate-900/5
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:border-red-900/60
                  dark:hover:shadow-black/20
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                    transition-colors duration-300
                    group-hover:bg-red-600
                    group-hover:text-white
                    dark:bg-red-950/40
                    dark:text-red-400
                    dark:group-hover:bg-red-600
                    dark:group-hover:text-white
                  "
                >
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  {content.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {content.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="
                    mt-6
                    h-px
                    w-0
                    bg-red-500
                    transition-all duration-300
                    group-hover:w-12
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <div
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              px-6 py-8
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900/60
              sm:px-10
            "
          >
            <p
              className="
                text-lg
                font-medium
                leading-8
                text-slate-800
                dark:text-slate-200
                sm:text-xl
              "
            >
              {t("problems.closing.before")}{" "}
              <span
                className="
                  font-bold
                  text-slate-950
                  dark:text-white
                "
              >
                {t("problems.closing.strong")}
              </span>{" "}
              {t("problems.closing.middle")}{" "}
              <span className="font-bold text-red-500">
                {t("problems.closing.value")}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

