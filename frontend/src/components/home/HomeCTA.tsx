import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomeCTA() {
  const { t } = useTranslation();

  const benefits = t("home.cta.benefits", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        border-t border-slate-200/80
        bg-white
        py-24 sm:py-28 lg:py-32
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
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-[350px] w-[350px]
            translate-x-1/4 translate-y-1/4
            rounded-full
            bg-indigo-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute left-0 top-1/2
            h-[250px] w-[250px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/5
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            relative overflow-hidden
            rounded-[2rem]
            border border-slate-200
            bg-slate-50
            px-6 py-12
            shadow-xl shadow-slate-900/5
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
            dark:border-slate-800
            dark:bg-slate-900/70
            dark:shadow-black/20
          "
        >
          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-32 -top-32
              h-80 w-80
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-40 -left-32
              h-96 w-96
              rounded-full
              bg-indigo-500/10
              blur-3xl
            "
          />

          <div
            className="
              relative grid items-center gap-12
              lg:grid-cols-[1.25fr_0.75fr]
            "
          >
            {/* Main content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full
                  border border-blue-200
                  bg-blue-50
                  px-4 py-2
                  text-sm font-medium text-blue-700
                  dark:border-blue-900/70
                  dark:bg-blue-950/40
                  dark:text-blue-300
                "
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />

                <span>{t("home.cta.badge")}</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="
                  max-w-3xl
                  text-4xl font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-5xl
                  lg:text-6xl
                  dark:text-white
                "
              >
                {t("home.cta.title")}{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    bg-clip-text
                    text-transparent
                    dark:from-blue-400
                    dark:via-indigo-400
                    dark:to-violet-400
                  "
                >
                  {t("home.cta.highlight")}
                </span>
              </motion.h2>

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
                {t("home.cta.description")}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
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
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:ring-offset-2
                    dark:bg-white
                    dark:text-slate-950
                    dark:hover:bg-blue-400
                    dark:focus:ring-offset-slate-950
                  "
                >
                  {t("home.cta.primaryCta")}

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/realisations"
                  className="
                    inline-flex
                    items-center justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-6 py-3.5
                    text-sm font-semibold
                    text-slate-800
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-slate-400
                    hover:bg-slate-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:ring-offset-2
                    dark:border-slate-700
                    dark:bg-slate-800/70
                    dark:text-white
                    dark:hover:border-slate-600
                    dark:hover:bg-slate-800
                    dark:focus:ring-offset-slate-950
                  "
                >
                  {t("home.cta.secondaryCta")}
                </Link>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="
                  mt-8
                  flex flex-col gap-3
                  sm:flex-row sm:flex-wrap
                  sm:gap-x-6
                "
              >
                {Array.isArray(benefits) &&
                  benefits.map((benefit, index) => (
                    <div
                      key={`${benefit}-${index}`}
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
                        aria-hidden="true"
                      />

                      <span>{benefit}</span>
                    </div>
                  ))}
              </motion.div>
            </div>

            {/* Response card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="
                relative
                mx-auto w-full max-w-md
                lg:max-w-none
              "
            >
              <div
                className="
                  relative overflow-hidden
                  rounded-3xl
                  border border-slate-200
                  bg-white
                  p-7
                  shadow-2xl shadow-slate-900/10
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:shadow-black/30
                "
              >
                {/* Decorative icon */}
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
                  <ArrowRight
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="
                    text-2xl font-bold
                    text-slate-950
                    dark:text-white
                  "
                >
                  {t("home.cta.response")}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {t("home.cta.responseDescription")}
                </p>

                {/* Progress / process visual */}
                <div className="mt-8 space-y-4">
                  {/* Analysis */}
                  <div>
                    <div
                      className="
                        mb-2 flex items-center
                        justify-between text-xs
                      "
                    >
                      <span
                        className="
                          font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("home.cta.process.analysis")}
                      </span>

                      <CheckCircle2
                        className="
                          h-4 w-4
                          text-blue-600
                          dark:text-blue-400
                        "
                        aria-hidden="true"
                      />
                    </div>

                    <div
                      className="
                        h-1.5 overflow-hidden
                        rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-full rounded-full bg-blue-600" />
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <div
                      className="
                        mb-2 flex items-center
                        justify-between text-xs
                      "
                    >
                      <span
                        className="
                          font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("home.cta.process.design")}
                      </span>

                      <CheckCircle2
                        className="
                          h-4 w-4
                          text-indigo-600
                          dark:text-indigo-400
                        "
                        aria-hidden="true"
                      />
                    </div>

                    <div
                      className="
                        h-1.5 overflow-hidden
                        rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-[85%] rounded-full bg-indigo-600" />
                    </div>
                  </div>

                  {/* Development */}
                  <div>
                    <div
                      className="
                        mb-2 flex items-center
                        justify-between text-xs
                      "
                    >
                      <span
                        className="
                          font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {t("home.cta.process.development")}
                      </span>

                      <span
                        className="text-slate-400"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>

                    <div
                      className="
                        h-1.5 overflow-hidden
                        rounded-full
                        bg-slate-200
                        dark:bg-slate-800
                      "
                    >
                      <div className="h-full w-[65%] rounded-full bg-violet-600" />
                    </div>
                  </div>
                </div>

                {/* Bottom label */}
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
                        mt-0.5
                        h-2 w-2 shrink-0
                        rounded-full
                        bg-blue-600
                        dark:bg-blue-400
                      "
                      aria-hidden="true"
                    />

                    <p
                      className="
                        text-xs leading-5
                        text-blue-800
                        dark:text-blue-300
                      "
                    >
                      {t("home.cta.footerText")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}