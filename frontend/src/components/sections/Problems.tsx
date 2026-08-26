
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  SearchX,
  Smartphone,
  Workflow,
  Globe2,
} from "lucide-react";
import Container from "../ui/Container";

const problems = [
  {
    icon: Globe2,
    problem: "Votre entreprise est difficile à trouver en ligne.",
    solution:
      "Nous créons une présence digitale claire et professionnelle.",
  },
  {
    icon: Smartphone,
    problem:
      "Votre site fonctionne mal sur les smartphones.",
    solution:
      "Nous concevons des interfaces réellement responsive.",
  },
  {
    icon: SearchX,
    problem:
      "Vos clients ne trouvent pas facilement vos services.",
    solution:
      "Nous structurons votre contenu pour améliorer votre visibilité.",
  },
  {
    icon: Workflow,
    problem:
      "Certaines tâches sont encore effectuées manuellement.",
    solution:
      "Nous développons des outils pour automatiser vos processus.",
  },
];

export default function Problems() {
  return (
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dw-primary">
            Votre situation
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-dw-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            Votre présence digitale pourrait-elle être meilleure ?
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-dw-muted
              sm:text-lg
            "
          >
            Nous identifions les problèmes qui limitent votre visibilité,
            votre efficacité ou votre capacité à convertir vos visiteurs
            en clients.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.problem}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
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
                <div className="flex gap-5">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-500/10
                      text-red-500
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-medium
                        leading-6
                        text-dw-text
                      "
                    >
                      {item.problem}
                    </p>

                    <div
                      className="
                        my-4
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-dw-primary
                      "
                    >
                      <ArrowRight size={14} />
                      Notre approche
                    </div>

                    <div className="flex gap-2">
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-dw-primary"
                      />

                      <p className="text-sm leading-6 text-dw-muted">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

