import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Sparkles,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

import Problems from "../components/sections/Problems";
import Solutions from "../components/sections/Solutions";
import ServicesGrid from "../components/sections/ServicesGrid";

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate min-h-screen overflow-hidden bg-dw-background pt-20">
        {/* Background grid */}
        <div className="absolute inset-0 -z-20 dw-grid opacity-40" />

        {/* Main glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-dw-primary/10 blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute right-[-10%] top-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-dw-cyan/10 blur-[120px]" />

        <Container className="relative flex min-h-[calc(100vh-80px)] items-center py-16 lg:py-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              {/* Badge */}

              <motion.div variants={itemVariants}>
                <Badge>Agence digitale</Badge>
              </motion.div>

              {/* Title */}

              <motion.h1
                variants={itemVariants}
                className="
                  mt-7
                  text-5xl
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-dw-text
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Transformez votre activité
                <br />
                <span className="dw-gradient-text">
                  avec le digital.
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={itemVariants}
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-dw-muted
                  sm:text-lg
                "
              >
                Digital Work conçoit des solutions digitales sur mesure
                pour améliorer votre visibilité, automatiser vos processus
                et accompagner la croissance de votre activité.
              </motion.p>

              {/* CTA */}

              <motion.div
                variants={itemVariants}
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <Button to="/contact">
                  Démarrer mon projet
                  <ArrowRight size={17} />
                </Button>

                <Button
                  to="/realisations"
                  variant="secondary"
                >
                  Voir nos réalisations
                </Button>
              </motion.div>

              {/* Trust points */}

              <motion.div
                variants={itemVariants}
                className="
                  mt-10
                  flex
                  flex-wrap
                  items-center
                  gap-x-7
                  gap-y-3
                  text-xs
                  text-dw-muted
                "
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-400"
                  />
                  Solutions sur mesure
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-400"
                  />
                  Technologies modernes
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-400"
                  />
                  Accompagnement
                </span>
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </Container>

        {/* Scroll indicator */}

        <motion.a
          href="#services"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-xs
            text-dw-muted
            md:flex
          "
        >
          <span>Découvrir</span>

          <ArrowDown
            size={15}
            className="animate-bounce"
          />
        </motion.a>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="
          border-t
          border-dw-border
          bg-dw-background
          py-24
          sm:py-32
        "
      >
        <Container >
          <SectionTitle  
            eyebrow="Nos expertises"
            title={ 
              <>
                Des solutions digitales
                <br />
                pensées pour votre activité.
              </>
            }
            description="Du site vitrine à l'application métier, nous construisons des solutions qui répondent à de vrais objectifs business."
          />

          <div className="mt-14">
            <ServicesGrid limit={6} />
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROBLEMS
      ====================================================== */}

      <Problems />

      {/* =====================================================
          SOLUTIONS
      ====================================================== */}

      <Solutions />

      {/* =====================================================
          POSITIONING
      ====================================================== */}

      <section
        className="
          border-y
          border-dw-border
          bg-dw-surface
          py-24
          sm:py-32
        "
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* =================================================
                LEFT
            ================================================== */}

            <div>
              <Badge>Plus qu'un site web</Badge>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-bold
                  tracking-tight
                  text-dw-text
                  sm:text-4xl
                "
              >
                Nous construisons des outils qui font avancer votre
                entreprise.
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-8
                  text-dw-muted
                "
              >
                Votre présence digitale doit être un véritable levier
                commercial. Digital Work combine design, développement
                et compréhension métier pour créer des solutions utiles,
                performantes et évolutives.
              </p>

              <div className="mt-8">
                <Button to="/solutions">
                  Découvrir nos solutions
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            {/* =================================================
                RIGHT FEATURES
            ================================================== */}

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                number="01"
                title="Visibilité"
                text="Soyez trouvé plus facilement par vos clients."
              />

              <FeatureCard
                number="02"
                title="Performance"
                text="Des outils rapides et conçus pour vos objectifs."
              />

              <FeatureCard
                number="03"
                title="Automatisation"
                text="Réduisez les tâches répétitives et gagnez du temps."
              />

              <FeatureCard
                number="04"
                title="Évolution"
                text="Des solutions capables d'accompagner votre croissance."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-dw-background py-24 sm:py-32">
        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-dw-primary/20
              bg-dw-primary/[0.07]
              px-6
              py-16
              text-center
              sm:px-12
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-64
                w-96
                -translate-x-1/2
                rounded-full
                bg-dw-primary/10
                blur-[100px]
              "
            />

            <div className="relative">
              {/* Icon */}

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-dw-primary/20
                  bg-dw-primary/10
                  text-dw-primary
                "
              >
                <Sparkles size={22} />
              </div>

              {/* Title */}

              <h2
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-3xl
                  font-bold
                  tracking-tight
                  text-dw-text
                  sm:text-4xl
                "
              >
                Un projet digital en tête ?
              </h2>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-base
                  leading-7
                  text-dw-muted
                "
              >
                Présentez-nous votre besoin. Nous vous aiderons à
                définir une solution adaptée à votre activité.
              </p>

              {/* CTA */}

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
   HERO VISUAL
========================================================= */

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square max-w-[540px]">
      {/* Outer glow */}

      <div
        className="
          absolute
          inset-10
          rounded-full
          bg-dw-primary/10
          blur-[90px]
        "
      />

      {/* Main panel */}

      <div
        className="
          absolute
          inset-[8%]
          overflow-hidden
          rounded-[2rem]
          border
          border-dw-border
          bg-dw-surface/90
          shadow-2xl
          shadow-black/20
          backdrop-blur-xl
        "
      >
        {/* Top bar */}

        <div
          className="
            flex
            h-12
            items-center
            gap-2
            border-b
            border-dw-border
            px-5
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-dw-muted/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-dw-muted/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-dw-muted/20" />

          <div className="ml-auto h-5 w-24 rounded-md bg-dw-card" />
        </div>

        {/* Dashboard */}

        <div className="grid grid-cols-[80px_1fr] gap-4 p-5">
          {/* Sidebar */}

          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={item}
                className={`
                  h-8
                  rounded-lg
                  ${
                    index === 0
                      ? "bg-dw-primary/20"
                      : "bg-dw-card"
                  }
                `}
              />
            ))}
          </div>

          {/* Dashboard content */}

          <div>
            {/* Stats */}

            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="
                    h-16
                    rounded-xl
                    border
                    border-dw-border
                    bg-dw-card
                  "
                />
              ))}
            </div>

            {/* Chart */}

            <div
              className="
                mt-4
                rounded-xl
                border
                border-dw-border
                bg-dw-card
                p-4
              "
            >
              <div className="h-3 w-28 rounded bg-dw-muted/20" />

              <div className="mt-5 flex h-32 items-end gap-2">
                {[35, 60, 45, 75, 55, 90, 70].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: `${height}%`,
                      }}
                      transition={{
                        delay: 0.7 + index * 0.08,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className="
                        flex-1
                        rounded-t-md
                        bg-gradient-to-t
                        from-dw-primary/20
                        to-dw-primary
                      "
                    />
                  )
                )}
              </div>
            </div>

            {/* Bottom cards */}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div
                className="
                  h-20
                  rounded-xl
                  border
                  border-dw-border
                  bg-dw-card
                "
              />

              <div
                className="
                  h-20
                  rounded-xl
                  border
                  border-dw-border
                  bg-dw-card
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          FLOATING CARD
          DIGITAL PRESENCE
      ================================================== */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-0
          top-[25%]
          rounded-2xl
          border
          border-dw-border
          bg-dw-card/90
          p-4
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-emerald-500/10
              text-emerald-500
            "
          >
            <Globe2 size={19} />
          </div>

          <div>
            <p className="text-xs text-dw-muted">
              Présence digitale
            </p>

            <p className="mt-1 text-sm font-bold text-dw-text">
              Optimisée
            </p>
          </div>
        </div>
      </motion.div>

      {/* =================================================
          FLOATING CARD
          TECHNOLOGY
      ================================================== */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[16%]
          right-0
          rounded-2xl
          border
          border-dw-border
          bg-dw-card/90
          p-4
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-dw-primary/10
              text-dw-primary
            "
          >
            <Code2 size={19} />
          </div>

          <div>
            <p className="text-xs text-dw-muted">
              Technologie
            </p>

            <p className="mt-1 text-sm font-bold text-dw-text">
              Sur mesure
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

interface FeatureCardProps {
  number: string;
  title: string;
  text: string;
}

function FeatureCard({
  number,
  title,
  text,
}: FeatureCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-dw-border
        bg-dw-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-dw-primary/30
      "
    >
      <span
        className="
          text-xs
          font-bold
          tracking-[0.15em]
          text-dw-primary
        "
      >
        {number}
      </span>

      <h3 className="mt-5 text-lg font-bold text-dw-text">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-dw-muted">
        {text}
      </p>
    </div>
  );
}