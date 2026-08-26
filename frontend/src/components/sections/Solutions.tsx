
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { solutions } from "../../data/solutions";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Solutions() {
  return (
    <section className="bg-dw-background py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Solutions entreprises"
          title={
            <>
              Des solutions adaptées
              <br />
              à votre secteur.
            </>
          }
          description="Nous adaptons nos solutions à votre activité, vos objectifs et vos processus métier."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-dw-border
                  bg-dw-card
                  p-7
                  transition-all
                  duration-300
                  hover:border-dw-primary/30
                  hover:-translate-y-1
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-dw-primary/20
                      bg-dw-primary/10
                      text-dw-primary
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-bold tracking-[0.15em] text-dw-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-dw-text">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-dw-muted">
                  {solution.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-dw-muted"
                    >
                      <Check
                        size={14}
                        className="shrink-0 text-dw-primary"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-dw-primary
                  "
                >
                  Discuter de cette solution

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

