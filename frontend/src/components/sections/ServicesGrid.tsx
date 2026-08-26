
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface ServicesGridProps {
  limit?: number;
}

export default function ServicesGrid({
  limit,
}: ServicesGridProps) {
  const displayedServices = limit
    ? services.slice(0, limit)
    : services;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {displayedServices.map((service) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.id}
            variants={itemVariants}
            className="
              group
              relative
              overflow-hidden
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
            <div
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-dw-primary/5
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-dw-primary/10
              "
            />

            <div className="relative">
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
                <Icon size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-dw-text">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-dw-muted">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-lg
                      border
                      border-dw-border
                      bg-dw-surface
                      px-2.5
                      py-1
                      text-xs
                      text-dw-muted
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/services#${service.id}`}
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-dw-primary
                "
              >
                En savoir plus

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

