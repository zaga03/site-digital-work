import {
  motion,
  type Variants,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe2,
  Sparkles,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

import Problems from "../components/sections/Problems";
import Solutions from "../components/sections/Solutions";
import ServicesGrid from "../components/sections/ServicesGrid";

import {
  API_URL,
  fetchProjects,
  type Project,
} from "../services/projectsApi";

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
                <Badge>
                  Agence digitale
                </Badge>
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
        <Container>
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
          REALISATIONS
      ====================================================== */}

      <HomeRealisations />

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

            {/* LEFT */}

            <div>
              <Badge>
                Plus qu'un site web
              </Badge>

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

            {/* RIGHT FEATURES */}

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
   REALISATIONS HOME
========================================================= */

function HomeRealisations() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);

        const data = await fetchProjects();

        /*
         * On privilégie les projets featured.
         * S'il n'y en a aucun, on prend les 3 premiers.
         */

        const featuredProjects = data
          .filter((project) => project.featured)
          .slice(0, 3);

        setProjects(
          featuredProjects.length > 0
            ? featuredProjects
            : data.slice(0, 3)
        );
      } catch (error) {
        console.error(
          "Erreur chargement réalisations Home:",
          error
        );

        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    void loadProjects();
  }, []);

  /* =======================================================
     IMAGE URL
  ======================================================= */

  function getImageUrl(project: Project): string {
    if (!project.image_url) {
      return "";
    }

    if (project.image_url.startsWith("http")) {
      return project.image_url;
    }

    return `${API_URL}${project.image_url}`;
  }

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <section className="bg-dw-background py-24 sm:py-32">
        <Container>
          <div className="flex justify-center">
            <div
              className="
                h-8
                w-8
                animate-spin
                rounded-full
                border-2
                border-dw-primary/20
                border-t-dw-primary
              "
            />
          </div>
        </Container>
      </section>
    );
  }

  /* =======================================================
     EMPTY
  ======================================================= */

  if (projects.length === 0) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-dw-border
        bg-dw-background
        py-24
        sm:py-32
      "
    >
      {/* Background grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          dw-grid
          opacity-20
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-dw-primary/10
          blur-[150px]
        "
      />

      <Container>

        {/* HEADER */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge>
              Nos réalisations
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.035em]
              text-dw-text
              sm:text-5xl
              lg:text-6xl
            "
          >
            Des projets qui
            <br />

            <span className="dw-gradient-text">
              deviennent des résultats.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-dw-muted
              sm:text-lg
            "
          >
            Découvrez quelques solutions digitales conçues et
            développées par Digital Work pour répondre à des besoins
            réels.
          </motion.p>
        </motion.div>

        {/* PROJECTS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <HomeProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
              getImageUrl={getImageUrl}
            />
          ))}
        </motion.div>

        {/* CTA */}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-12 flex justify-center"
        >
          <Button
            to="/realisations"
            variant="secondary"
          >
            Voir toutes nos réalisations
            <ArrowRight size={17} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

interface HomeProjectCardProps {
  project: Project;
  featured?: boolean;
  getImageUrl: (
    project: Project
  ) => string;
}

function HomeProjectCard({
  project,
  featured = false,
  getImageUrl,
}: HomeProjectCardProps) {
  const [imageError, setImageError] =
    useState(false);

  const imageUrl = getImageUrl(project);

  const projectLink =
    project.demo_url ||
    project.project_url ||
    "";

  const hasLink =
    Boolean(projectLink);

  const isInternal =
    projectLink.startsWith("/");

  return (
    <motion.article
      variants={itemVariants}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-dw-border
        bg-dw-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-dw-primary/30
        hover:shadow-xl
        hover:shadow-dw-primary/5
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          h-64
          overflow-hidden
          bg-dw-surface
        "
      >
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={project.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
            onError={() =>
              setImageError(true)
            }
          />
        ) : (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-dw-primary/10
              via-dw-surface
              to-dw-background
            "
          >
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-2xl
                border
                border-dw-primary/20
                bg-dw-primary/10
                text-2xl
                font-black
                text-dw-primary
              "
            >
              DW
            </div>
          </div>
        )}

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
            opacity-80
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            bottom-5
            left-5
          "
        >
          <span
            className="
              rounded-lg
              border
              border-white/15
              bg-black/30
              px-3
              py-1.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white
              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>

        {/* Featured */}

        {featured && (
          <div
            className="
              absolute
              right-5
              top-5
              rounded-lg
              bg-dw-primary
              px-3
              py-1.5
              text-[11px]
              font-bold
              text-white
              shadow-lg
            "
          >
            Projet phare
          </div>
        )}
      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* Title */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <h3
            className="
              text-xl
              font-bold
              tracking-tight
              text-dw-text
            "
          >
            {project.title}
          </h3>

          {hasLink && (
            <a
              href={projectLink}
              target={
                isInternal
                  ? undefined
                  : "_blank"
              }
              rel={
                isInternal
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={`Voir ${project.title}`}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-dw-border
                bg-dw-surface
                text-dw-muted
                transition-all
                hover:border-dw-primary/30
                hover:text-dw-primary
              "
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-7
            text-dw-muted
          "
        >
          {project.description}
        </p>

        {/* Technologies */}

        {project.technologies.length > 0 && (
          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies
              .slice(0, 5)
              .map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg
                    border
                    border-dw-border
                    bg-dw-surface
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-dw-muted
                  "
                >
                  {technology}
                </span>
              ))}
          </div>
        )}

        {/* CTA */}

        {hasLink && (
          <a
            href={projectLink}
            target={
              isInternal
                ? undefined
                : "_blank"
            }
            rel={
              isInternal
                ? undefined
                : "noopener noreferrer"
            }
            className="
              group/link
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-dw-primary
            "
          >
            Voir le projet

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover/link:translate-x-1
              "
            />
          </a>
        )}
      </div>
    </motion.article>
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
            {[1, 2, 3, 4, 5].map(
              (item, index) => (
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
              )
            )}
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
                        delay:
                          0.7 +
                          index * 0.08,
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