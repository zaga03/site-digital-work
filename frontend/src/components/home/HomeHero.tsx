import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        border-b border-slate-200/80
        bg-white
        py-20
        sm:py-24
        lg:py-28
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute left-1/2 top-0
            h-[500px] w-[900px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute -right-32 top-1/3
            h-[400px] w-[400px]
            rounded-full
            bg-indigo-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 left-0
            h-[300px] w-[300px]
            -translate-x-1/3 translate-y-1/3
            rounded-full
            bg-cyan-500/5
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-blue-200
                bg-blue-50
                px-4 py-2
                text-sm font-medium
                text-blue-700
                dark:border-blue-900/70
                dark:bg-blue-950/40
                dark:text-blue-300
              "
            >
              <Sparkles className="h-4 w-4" />

              <span>{t("hero.badge")}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                max-w-4xl
                text-4xl font-bold
                leading-tight tracking-tight
                text-slate-950
                sm:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              {t("hero.title")}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
                dark:text-slate-300
              "
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                mt-8
                flex flex-col gap-3
                sm:flex-row
              "
            >
              <Link
                to="/contact"
                className="
                  group inline-flex
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-slate-950
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  shadow-lg shadow-slate-900/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-600
                  hover:shadow-blue-600/25
                  dark:bg-white
                  dark:text-slate-950
                  dark:hover:bg-blue-400
                "
              >
                {t("hero.primary")}

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/realisations"
                className="
                  inline-flex
                  items-center justify-center
                  gap-2
                  rounded-xl
                  border border-slate-300
                  bg-white
                  px-6 py-3.5
                  text-sm font-semibold
                  text-slate-800
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-slate-400
                  hover:bg-slate-100
                  dark:border-slate-700
                  dark:bg-slate-800/70
                  dark:text-white
                  dark:hover:border-slate-600
                  dark:hover:bg-slate-800
                "
              >
                {t("hero.secondary")}
              </Link>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                mt-8
                flex flex-col gap-3
                sm:flex-row sm:flex-wrap
                sm:gap-x-6
              "
            >
              {[
                t("services.web.title"),
                t("services.application.title"),
                t("services.mobile.title"),
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-2
                    text-sm
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  <CheckCircle2
                    className="
                      h-4 w-4 shrink-0
                      text-blue-600
                      dark:text-blue-400
                    "
                  />

                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              relative mx-auto w-full max-w-md
              lg:max-w-none
            "
          >
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-slate-200
                bg-slate-50
                p-6
                shadow-2xl shadow-slate-900/10
                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-black/30
              "
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-24 -top-24
                  h-64 w-64
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -bottom-24 -left-24
                  h-64 w-64
                  rounded-full
                  bg-indigo-500/10
                  blur-3xl
                "
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-blue-600
                    text-white
                    shadow-lg shadow-blue-600/25
                  "
                >
                  <Sparkles className="h-7 w-7" />
                </div>

                {/* Card title */}
                <h2
                  className="
                    text-2xl font-bold
                    text-slate-950
                    dark:text-white
                  "
                >
                  {t("positioning.title")}
                </h2>

                {/* Card description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {t("positioning.description")}
                </p>

                {/* Metrics */}
                <div className="mt-8 space-y-5">
                  {/* Visibility */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="
                          text-sm font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("positioning.visibility.title")}
                      </span>

                      <CheckCircle2
                        className="
                          h-4 w-4
                          text-blue-600
                          dark:text-blue-400
                        "
                      />
                    </div>

                    <div
                      className="
                        h-2 overflow-hidden rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-full rounded-full bg-blue-600" />
                    </div>
                  </div>

                  {/* Performance */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="
                          text-sm font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("positioning.performance.title")}
                      </span>

                      <CheckCircle2
                        className="
                          h-4 w-4
                          text-indigo-600
                          dark:text-indigo-400
                        "
                      />
                    </div>

                    <div
                      className="
                        h-2 overflow-hidden rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-[90%] rounded-full bg-indigo-600" />
                    </div>
                  </div>

                  {/* Automation */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="
                          text-sm font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("positioning.automation.title")}
                      </span>

                      <CheckCircle2
                        className="
                          h-4 w-4
                          text-violet-600
                          dark:text-violet-400
                        "
                      />
                    </div>

                    <div
                      className="
                        h-2 overflow-hidden rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-[80%] rounded-full bg-violet-600" />
                    </div>
                  </div>

                  {/* Evolution */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="
                          text-sm font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("positioning.evolution.title")}
                      </span>

                      <CheckCircle2
                        className="
                          h-4 w-4
                          text-cyan-600
                          dark:text-cyan-400
                        "
                      />
                    </div>

                    <div
                      className="
                        h-2 overflow-hidden rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-[85%] rounded-full bg-cyan-600" />
                    </div>
                  </div>
                </div>

                {/* Bottom information */}
                <div
                  className="
                    mt-8
                    rounded-2xl
                    border border-blue-100
                    bg-blue-50
                    p-4
                    dark:border-blue-900/50
                    dark:bg-blue-950/30
                  "
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        mt-1
                        h-2 w-2 shrink-0
                        rounded-full
                        bg-blue-600
                        dark:bg-blue-400
                      "
                    />

                    <p
                      className="
                        text-xs leading-5
                        text-blue-800
                        dark:text-blue-300
                      "
                    >
                      {t("hero.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#services"
            className="
              group inline-flex
              flex-col items-center
              gap-2
              text-xs font-medium
              text-slate-400
              transition-colors
              hover:text-blue-600
              dark:text-slate-500
              dark:hover:text-blue-400
            "
          >
            <span>{t("hero.discover")}</span>

            <span
              className="
                flex h-8 w-5
                items-start justify-center
                rounded-full
                border border-slate-300
                p-1
                dark:border-slate-700
              "
            >
              <span
                className="
                  h-1.5 w-1.5
                  animate-bounce
                  rounded-full
                  bg-slate-400
                  group-hover:bg-blue-600
                  dark:bg-slate-500
                  dark:group-hover:bg-blue-400
                "
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}