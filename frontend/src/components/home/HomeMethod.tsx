import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

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
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function HomeMethod() {
  const { t } = useTranslation();

  const steps: MethodStep[] = [
    {
      number: "01",
      title: t("method.steps.analysis.title"),
      description: t("method.steps.analysis.description"),
      icon: Search,
    },
    {
      number: "02",
      title: t("method.steps.design.title"),
      description: t("method.steps.design.description"),
      icon: Lightbulb,
    },
    {
      number: "03",
      title: t("method.steps.development.title"),
      description: t("method.steps.development.description"),
      icon: Code2,
    },
    {
      number: "04",
      title: t("method.steps.deployment.title"),
      description: t("method.steps.deployment.description"),
      icon: Rocket,
    },
  ];

  return (
    <section
      id="method"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-24
        dark:bg-slate-900/50
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
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-blue-500/5
            blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-indigo-500/5
            blur-3xl
            dark:bg-indigo-500/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
              dark:border-blue-900/60
              dark:bg-blue-950/40
              dark:text-blue-300
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2
                w-2
                rounded-full
                bg-blue-600
                dark:bg-blue-400
              "
            />

            {t("method.eyebrow")}
          </span>

          {/* Title */}
          <h2
            className="
              mt-6
              text-3xl
              font-black
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            {t("method.title")}

            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              {t("method.titleHighlight")}
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
              dark:text-slate-300
            "
          >
            {t("method.description")}
          </p>
        </motion.div>

        {/* Method timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              right-0
              top-[3.25rem]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-200
              to-transparent
              lg:block
              dark:via-blue-900
            "
          />

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => (
              <MethodCard
                key={step.number}
                step={step}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mx-auto
            mt-16
            max-w-4xl
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-950
            sm:p-8
          "
        >
          <div
            className="
              flex
              flex-col
              items-start
              gap-5
              sm:flex-row
              sm:items-center
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                dark:bg-emerald-950/40
              "
            >
              <CheckCircle2
                className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-950
                  dark:text-white
                "
              >
                {t("method.reassurance.title")}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {t("method.reassurance.description")}
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-xl
                bg-slate-950
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-200
                hover:bg-blue-600
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
              {t("method.cta")}

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MethodCard({ step }: { step: MethodStep }) {
  const Icon = step.icon;

  return (
    <motion.article
      variants={itemVariants}
      className="
        group
        relative
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-950
        dark:hover:border-blue-900
      "
    >
      {/* Number + icon */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-blue-600
            transition-colors
            duration-300
            group-hover:bg-blue-600
            group-hover:text-white
            dark:bg-blue-950/50
            dark:text-blue-400
            dark:group-hover:bg-blue-500
            dark:group-hover:text-white
          "
        >
          <Icon
            className="h-5 w-5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <span
          className="
            text-sm
            font-black
            tracking-wider
            text-slate-300
            dark:text-slate-700
          "
        >
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3
          className="
            text-lg
            font-bold
            text-slate-950
            dark:text-white
          "
        >
          {step.title}
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
          {step.description}
        </p>
      </div>

      {/* Hover accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-6
          right-6
          h-0.5
          origin-left
          scale-x-0
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-indigo-500
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />
    </motion.article>
  );
}