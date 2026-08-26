import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

/* =========================================================
   TYPES
========================================================= */

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

/* =========================================================
   PAGE
========================================================= */

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    /*
     * Pour l'instant, nous simulons l'envoi.
     *
     * À l'étape backend, cette fonction pourra envoyer
     * les données vers une API Node.js / PHP / service email.
     */

    setSubmitted(true);
  }

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pb-24">
        <div className="absolute inset-0 -z-20 dw-grid opacity-30" />

        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-dw-primary/10 blur-[150px]" />

        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants}>
              <Badge>Contact</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-dw-white sm:text-6xl"
            >
              Parlons de votre
              <br />
              <span className="dw-gradient-text">
                prochain projet digital.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-base leading-8 text-dw-muted sm:text-lg"
            >
              Présentez-nous votre besoin. Nous analyserons
              votre projet et vous proposerons une approche
              adaptée à vos objectifs.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT AREA
      ====================================================== */}

      <section className="border-t border-white/[0.06] pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            {/* =================================================
                INFORMATIONS
            ================================================== */}

            <div className="space-y-5">
              <ContactInfo
                icon={MessageCircle}
                title="WhatsApp"
                text="Échangez directement avec Digital Work."
                value="Nous contacter"
                href="https://wa.me/2610348428652"
              />

              <ContactInfo
                icon={Mail}
                title="Email"
                text="Pour les demandes professionnelles."
                value="rrzafindrafita@gmail.com"
                href="mailto:rrzafindrafita@gmail.com"
              />

              <ContactInfo
                icon={Phone}
                title="Téléphone"
                text="Disponible pour discuter de votre projet."
                value="+261 34 84 286 52"
                href="tel:+2610348428652"
              />

              <ContactInfo
                icon={MapPin}
                title="Localisation"
                text="Digital Work accompagne également les projets à distance."
                value="Madagascar"
              />

              <div className="rounded-2xl border border-white/[0.07] bg-dw-card p-6">
                <div className="flex items-center gap-3">
                  <Clock3
                    size={19}
                    className="text-dw-primary"
                  />

                  <h3 className="font-bold text-dw-white">
                    Disponibilité
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-dw-muted">
                  Nous répondons généralement aux demandes
                  professionnelles dans les meilleurs délais.
                </p>
              </div>
            </div>

            {/* =================================================
                FORMULAIRE
            ================================================== */}

            <div className="rounded-3xl border border-white/[0.07] bg-dw-card p-6 sm:p-8">
              {submitted ? (
                <SuccessMessage
                  onReset={() => setSubmitted(false)}
                />
              ) : (
                <>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-dw-primary">
                      Votre projet
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-dw-white">
                      Décrivez-nous votre besoin
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-dw-muted">
                      Plus votre demande est précise, plus nous
                      pourrons vous proposer une solution pertinente.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    {/* Nom + Email */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        label="Nom complet"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />

                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vous@entreprise.com"
                        required
                      />
                    </div>

                    {/* Téléphone + Entreprise */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        label="Téléphone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+261 ..."
                      />

                      <FormField
                        label="Entreprise"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    {/* Service + Budget */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <SelectField
                        label="Type de projet"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        options={[
                          "Création de site web",
                          "Application web",
                          "Application mobile",
                          "Digitalisation",
                          "Solution réseau / Wi-Fi",
                          "Refonte d'un site existant",
                          "Autre",
                        ]}
                        required
                      />

                      <SelectField
                        label="Budget estimatif"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={[
                          "Moins de 1 000 000 Ar",
                          "1 000 000 – 3 000 000 Ar",
                          "3 000 000 – 5 000 000 Ar",
                          "5 000 000 – 10 000 000 Ar",
                          "Plus de 10 000 000 Ar",
                          "Je ne sais pas encore",
                        ]}
                      />
                    </div>

                    {/* Message */}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-dw-white"
                      >
                        Décrivez votre projet
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={7}
                        placeholder="Expliquez-nous votre besoin, vos objectifs, les fonctionnalités souhaitées..."
                        className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-dw-primary/50 focus:ring-2 focus:ring-dw-primary/10"
                      />
                    </div>

                    {/* Submit */}

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-dw-primary px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                    >
                      Envoyer ma demande

                      <Send
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-xs leading-5 text-dw-muted">
                      Vos informations sont utilisées uniquement
                      pour traiter votre demande.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA WHATSAPP
      ====================================================== */}

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.05] px-6 py-12 sm:px-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MessageCircle size={21} />
                  </div>

                  <p className="text-sm font-semibold text-emerald-400">
                    Besoin d'une réponse rapide ?
                  </p>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-dw-white sm:text-3xl">
                  Échangeons directement sur WhatsApp.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-dw-muted">
                  Pour une première discussion ou une demande
                  rapide, WhatsApp est le moyen le plus direct.
                </p>
              </div>

              <a
                href="https://wa.me/2610348428652"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
              >
                WhatsApp
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* =========================================================
   CONTACT INFO
========================================================= */

interface ContactInfoProps {
  icon: typeof Mail;
  title: string;
  text: string;
  value: string;
  href?: string;
}

function ContactInfo({
  icon: Icon,
  title,
  text,
  value,
  href,
}: ContactInfoProps) {
  const content = (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dw-primary/10 text-dw-primary">
        <Icon size={19} />
      </div>

      <div>
        <h3 className="text-sm font-bold text-dw-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-dw-muted">
          {text}
        </p>

        <p className="mt-2 text-sm font-medium text-dw-primary">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("https://") ? "_blank" : undefined}
        rel={href.startsWith("https://") ? "noreferrer" : undefined}
        className="block rounded-2xl border border-white/[0.07] bg-dw-card p-5 transition hover:border-dw-primary/20"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-dw-card p-5">
      {content}
    </div>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function FormField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  required,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-dw-white"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-dw-primary/50 focus:ring-2 focus:ring-dw-primary/10"
      />
    </div>
  );
}

/* =========================================================
   SELECT FIELD
========================================================= */

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

function SelectField({
  label,
  name,
  value,
  options,
  required,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-dw-white"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/[0.08] bg-dw-card px-4 py-3 text-sm text-dw-white outline-none transition focus:border-dw-primary/50 focus:ring-2 focus:ring-dw-primary/10"
      >
        <option value="">
          Sélectionner
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   SUCCESS
========================================================= */

interface SuccessMessageProps {
  onReset: () => void;
}

function SuccessMessage({
  onReset,
}: SuccessMessageProps) {
  return (
    <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
        <CheckCircle2 size={32} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-dw-white">
        Demande enregistrée
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-dw-muted">
        Merci pour votre demande. Nous avons bien reçu
        les informations concernant votre projet.
      </p>

      <div className="mt-8">
        <Button
          to="/"
          variant="secondary"
        >
          Retour à l'accueil
        </Button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 text-xs text-dw-muted transition hover:text-white"
      >
        Envoyer une autre demande
      </button>
    </div>
  );
}