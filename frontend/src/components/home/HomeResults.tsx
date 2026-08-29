import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const resultIcons = [TrendingUp, Gauge, Users, Rocket];

export default function HomeResults() {
  const { t } = useTranslation();

  const results = [
    {
      icon: resultIcons[0],
      value: "+40%",
      label: t("results.performance.label"),
      description: t("results.performance.description"),
    },
    {
      icon: resultIcons[1],
      value: "2×",
      label: t("results.productivity.label"),
      description: t("results.productivity.description"),
    },
    {
      icon: resultIcons[2],
      value: "+60%",
      label: t("results.engagement.label"),
      description: t("results.engagement.description"),
    },
    {
      icon: resultIcons[3],
      value: "100%",
      label: t("results.custom.label"),
      description: t("results.custom.description"),
    },
  ];

  const benefits = t("results.benefits", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="results"
      className="
        relative overflow-hidden
        bg-slate-50 py-24
        dark:bg-slate-950
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
            absolute -right-40 top-20
            h-80 w-80 rounded-full
            bg-blue-500/10 blur-3xl
          "
        />

        <div
          className="
            absolute -left-40 bottom-20
            h-80 w-80 rounded-full
            bg-indigo-500/10 blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full border border-blue-200
              bg-blue-50 px-4 py-2
              text-sm font-semibold text-blue-700
              dark:border-blue-900/60
              dark:bg-blue-950/40
              dark:text-blue-400
            "
          >
            <BarChart3 className="h-4 w-4" />

            {t("results.eyebrow")}
          </div>

          <h2
            className="
              text-3xl font-bold tracking-tight
              text-slate-900
              sm:text-4xl lg:text-5xl
              dark:text-white
            "
          >
            {t("results.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("results.titleHighlight")}
            </span>
          </h2>

          <p
            className="
              mt-6 text-base leading-8
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            {t("results.description")}
          </p>
        </motion.div>

        {/* Results cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => {
            const Icon = result.icon;

            return (
              <motion.article
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="
                  group relative overflow-hidden
                  rounded-2xl border border-slate-200
                  bg-white p-7 shadow-sm
                  transition-shadow duration-300
                  hover:shadow-xl
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -right-10 -top-10
                    h-24 w-24 rounded-full
                    bg-blue-500/10 blur-2xl
                    transition-all duration-500
                    group-hover:bg-blue-500/20
                  "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-xl bg-blue-50 text-blue-600
                        dark:bg-blue-950/50
                        dark:text-blue-400
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <ArrowUpRight
                      className="
                        h-5 w-5 text-slate-300
                        transition-all duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-blue-500
                        dark:text-slate-700
                      "
                    />
                  </div>

                  <div className="mt-7">
                    <p
                      className="
                        text-4xl font-bold tracking-tight
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {result.value}
                    </p>

                    <h3
                      className="
                        mt-2 text-lg font-semibold
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {result.label}
                    </h3>

                    <p
                      className="
                        mt-3 text-sm leading-6
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {result.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mt-16 overflow-hidden rounded-3xl
            border border-slate-200 bg-white
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Text */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl bg-slate-900 text-white
                  dark:bg-white dark:text-slate-900
                "
              >
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <h3
                className="
                  mt-6 text-2xl font-bold tracking-tight
                  text-slate-900
                  sm:text-3xl
                  dark:text-white
                "
              >
                {t("results.impact.title")}
              </h3>

              <p
                className="
                  mt-4 max-w-xl leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {t("results.impact.description")}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {Array.isArray(benefits) &&
                  benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="
                          mt-0.5 h-5 w-5 shrink-0
                          text-blue-600
                          dark:text-blue-400
                        "
                      />

                      <span
                        className="
                          text-sm leading-6
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Visual */}
            <div
              className="
                relative flex min-h-[320px]
                items-center justify-center
                overflow-hidden
                bg-slate-900 p-8
                dark:bg-slate-950
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]
                "
              />

              <div className="relative w-full max-w-sm">
                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/5 p-6
                    shadow-2xl backdrop-blur-sm
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        {t("results.visual.performance")}
                      </p>

                      <p className="mt-1 text-3xl font-bold text-white">
                        +87%
                      </p>
                    </div>

                    <div
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        bg-blue-500/20
                        text-blue-400
                      "
                    >
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{t("results.visual.before")}</span>
                    <span>{t("results.visual.after")}</span>
                  </div>
                </div>

                <div
                  className="
                    absolute -bottom-5 -right-5
                    rounded-xl border border-white/10
                    bg-white/10 px-4 py-3
                    shadow-xl backdrop-blur-md
                  "
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-lg
                        bg-emerald-500/20
                      "
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        {t("results.visual.optimized")}
                      </p>

                      <p className="text-sm font-semibold text-white">
                        {t("results.visual.goals")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}