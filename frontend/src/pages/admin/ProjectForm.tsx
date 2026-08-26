import {
  ArrowLeft,
  Image as ImageIcon,
  Plus,
  Save,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
  type FormEvent,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import Button from "../../components/ui/Button";


import {
  createProject,
  getProject,
  updateProject,
  uploadProjectImage,
  type Project,
} from "../../services/adminApi";

/* =========================================================
   CONFIGURATION API
========================================================= */

import { API_URL } from "../../services/projectsApi";

/* =========================================================
   TYPES
========================================================= */

interface ProjectFormProps {
  projectId?: string;
}

interface FormData {
  title: string;
  short_title: string;
  description: string;
  details: string;
  category: string;
  image_url: string;
  technologies: string[];
  benefits: string[];
  project_url: string;
  demo_url: string;
  featured: boolean;
  status:
    | "completed"
    | "in-progress"
    | "maintenance";
  sort_order: number;
}

/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm: FormData = {
  title: "",
  short_title: "",
  description: "",
  details: "",
  category: "",
  image_url: "",
  technologies: [],
  benefits: [],
  project_url: "",
  demo_url: "",
  featured: false,
  status: "completed",
  sort_order: 0,
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ProjectForm({
  projectId,
}: ProjectFormProps) {
  const navigate = useNavigate();

  const isEdit = Boolean(projectId);

  const [form, setForm] =
    useState<FormData>(initialForm);

  const [technologyInput, setTechnologyInput] =
    useState("");

  const [benefitInput, setBenefitInput] =
    useState("");

  const [loading, setLoading] =
    useState(isEdit);

  const [saving, setSaving] =
    useState(false);

  const [uploadingImage, setUploadingImage] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  /* =======================================================
     UPDATE FIELD
  ======================================================= */

  function updateField<
    K extends keyof FormData
  >(
    field: K,
    value: FormData[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  /* =======================================================
     LOAD PROJECT FOR EDIT
  ======================================================= */

  useEffect(() => {
    if (!projectId) {
      setForm(initialForm);
      setLoading(false);
      return;
    }

    async function loadProject() {
      try {
        setLoading(true);
        setError("");

        const project =
          await getProject(projectId);

        setForm({
          title: project.title,
          short_title:
            project.short_title ?? "",
          description:
            project.description,
          details:
            project.details ?? "",
          category:
            project.category,
          image_url:
            project.image_url ?? "",
          technologies:
            project.technologies ?? [],
          benefits:
            project.benefits ?? [],
          project_url:
            project.project_url ?? "",
          demo_url:
            project.demo_url ?? "",
          featured:
            project.featured,
          status:
            project.status,
          sort_order:
            project.sort_order,
        });
      } catch (error) {
        console.error(
          "Erreur chargement projet:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Impossible de charger le projet."
        );
      } finally {
        setLoading(false);
      }
    }

    void loadProject();
  }, [projectId]);

  /* =======================================================
     IMAGE UPLOAD
  ======================================================= */

 async function handleImageUpload(
  file: File
) {
  setError("");
  setSuccess("");

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (!allowedTypes.includes(file.type)) {
    setError(
      "Format non autorisé. Utilisez JPG, PNG, WEBP ou GIF."
    );

    return;
  }

  const maxSize = 5 * 1024 * 1024;

  if (file.size > maxSize) {
    setError(
      "L'image ne doit pas dépasser 5 Mo."
    );

    return;
  }

  try {
    setUploadingImage(true);

    const result =
      await uploadProjectImage(file);

    updateField(
      "image_url",
      result.url
    );

    setSuccess(
      "Image téléchargée avec succès."
    );
  } catch (error) {
    console.error(
      "Erreur upload image:",
      error
    );

    setError(
      error instanceof Error
        ? error.message
        : "Impossible d'envoyer l'image."
    );
  } finally {
    setUploadingImage(false);
  }
}

  /* =======================================================
     TECHNOLOGIES
  ======================================================= */

  function addTechnology() {
    const value =
      technologyInput.trim();

    if (!value) {
      return;
    }

    if (
      form.technologies.includes(value)
    ) {
      setTechnologyInput("");
      return;
    }

    updateField("technologies", [
      ...form.technologies,
      value,
    ]);

    setTechnologyInput("");
  }

  function removeTechnology(
    technology: string
  ) {
    updateField(
      "technologies",
      form.technologies.filter(
        (item) =>
          item !== technology
      )
    );
  }

  /* =======================================================
     BENEFITS
  ======================================================= */

  function addBenefit() {
    const value =
      benefitInput.trim();

    if (!value) {
      return;
    }

    updateField("benefits", [
      ...form.benefits,
      value,
    ]);

    setBenefitInput("");
  }

  function removeBenefit(
    benefit: string
  ) {
    updateField(
      "benefits",
      form.benefits.filter(
        (item) => item !== benefit
      )
    );
  }

  /* =======================================================
     SUBMIT
  ======================================================= */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (uploadingImage) {
      setError(
        "Veuillez attendre la fin de l'upload de l'image."
      );

      return;
    }

    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.category.trim()
    ) {
      setError(
        "Le titre, la description et la catégorie sont obligatoires."
      );

      return;
    }

    try {
      setSaving(true);

      const payload = {
        title: form.title.trim(),

        short_title:
          form.short_title.trim() ||
          undefined,

        description:
          form.description.trim(),

        details:
          form.details.trim() ||
          undefined,

        category:
          form.category.trim(),

        image_url:
          form.image_url.trim() ||
          undefined,

        technologies:
          form.technologies,

        benefits:
          form.benefits,

        project_url:
          form.project_url.trim() ||
          undefined,

        demo_url:
          form.demo_url.trim() ||
          undefined,

        featured:
          form.featured,

        status:
          form.status,

        sort_order:
          form.sort_order,
      };

      if (projectId) {
        await updateProject(
          projectId,
          payload
        );

        setSuccess(
          "La réalisation a été modifiée avec succès."
        );

        window.setTimeout(() => {
          navigate("/admin");
        }, 700);
      } else {
        await createProject(
          payload as Omit<
            Project,
            "id" |
              "created_at" |
              "updated_at"
          >
        );

        setSuccess(
          "La réalisation a été créée avec succès."
        );

        window.setTimeout(() => {
          navigate("/admin");
        }, 700);
      }
    } catch (error) {
      console.error(
        "Erreur enregistrement:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Impossible d'enregistrer la réalisation."
      );
    } finally {
      setSaving(false);
    }
  }

  /* =======================================================
     IMAGE URL
  ======================================================= */

  const imagePreviewUrl =
    form.image_url
      ? form.image_url.startsWith("http")
        ? form.image_url
        : `${API_URL}${form.image_url}`
      : "";

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-dw-background">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center">
          <p className="text-dw-muted">
            Chargement du projet...
          </p>
        </div>
      </main>
    );
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen bg-dw-background">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          border-b
          border-dw-border
          bg-dw-surface
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-5xl
            items-center
            gap-4
            px-5
            sm:px-6
          "
        >
          <Link
            to="/admin"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-dw-border
              bg-dw-card
              text-dw-muted
              transition
              hover:text-dw-primary
            "
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-dw-primary
              "
            >
              Digital Work
            </p>

            <h1
              className="
                mt-1
                text-xl
                font-bold
                text-dw-text
              "
            >
              {isEdit
                ? "Modifier une réalisation"
                : "Nouvelle réalisation"}
            </h1>
          </div>
        </div>
      </header>

      {/* =====================================================
          FORM
      ====================================================== */}

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* =================================================
                MESSAGES
            ================================================== */}

            {error && (
              <div
                className="
                  rounded-2xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  p-4
                  text-sm
                  text-red-500
                "
              >
                {error}
              </div>
            )}

            {success && (
              <div
                className="
                  rounded-2xl
                  border
                  border-dw-success/20
                  bg-dw-success/10
                  p-4
                  text-sm
                  text-dw-success
                "
              >
                {success}
              </div>
            )}

            {/* =================================================
                INFORMATIONS
            ================================================== */}

            <section
              className="
                rounded-3xl
                border
                border-dw-border
                bg-dw-card
                p-6
                sm:p-8
              "
            >
              <h2 className="text-lg font-bold text-dw-text">
                Informations générales
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {/* Title */}

                <div className="md:col-span-2">
                  <label
                    htmlFor="title"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Titre *
                  </label>

                  <input
                    id="title"
                    value={form.title}
                    onChange={(event) =>
                      updateField(
                        "title",
                        event.target.value
                      )
                    }
                    placeholder="Ex. Hotspot Management V2"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      text-dw-text
                      outline-none
                      placeholder:text-dw-muted/60
                      focus:border-dw-primary
                    "
                  />
                </div>

                {/* Short title */}

                <div>
                  <label
                    htmlFor="short_title"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Titre court
                  </label>

                  <input
                    id="short_title"
                    value={form.short_title}
                    onChange={(event) =>
                      updateField(
                        "short_title",
                        event.target.value
                      )
                    }
                    placeholder="Hotspot Management"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      text-dw-text
                      outline-none
                      placeholder:text-dw-muted/60
                      focus:border-dw-primary
                    "
                  />
                </div>

                {/* Category */}

                <div>
                  <label
                    htmlFor="category"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Catégorie *
                  </label>

                  <input
                    id="category"
                    value={form.category}
                    onChange={(event) =>
                      updateField(
                        "category",
                        event.target.value
                      )
                    }
                    placeholder="Réseau, Web, Mobile..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      text-dw-text
                      outline-none
                      placeholder:text-dw-muted/60
                      focus:border-dw-primary
                    "
                  />
                </div>

                {/* Description */}

                <div className="md:col-span-2">
                  <label
                    htmlFor="description"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Description *
                  </label>

                  <textarea
                    id="description"
                    rows={4}
                    value={
                      form.description
                    }
                    onChange={(event) =>
                      updateField(
                        "description",
                        event.target.value
                      )
                    }
                    placeholder="Présentez brièvement le projet..."
                    className="
                      w-full
                      resize-y
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-dw-text
                      outline-none
                      placeholder:text-dw-muted/60
                      focus:border-dw-primary
                    "
                  />
                </div>

                {/* Details */}

                <div className="md:col-span-2">
                  <label
                    htmlFor="details"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Détails
                  </label>

                  <textarea
                    id="details"
                    rows={5}
                    value={form.details}
                    onChange={(event) =>
                      updateField(
                        "details",
                        event.target.value
                      )
                    }
                    placeholder="Décrivez le projet plus en détail..."
                    className="
                      w-full
                      resize-y
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-dw-text
                      outline-none
                      placeholder:text-dw-muted/60
                      focus:border-dw-primary
                    "
                  />
                </div>
              </div>
            </section>

        {/* =================================================
                IMAGE & LIENS
            ================================================== */}

            <section
            className="
                rounded-3xl
                border
                border-dw-border
                bg-dw-card
                p-6
                sm:p-8
            "
            >
            <div className="flex items-center gap-3">
                <ImageIcon
                size={20}
                className="text-dw-primary"
                />

                <h2 className="text-lg font-bold text-dw-text">
                Visuel et liens
                </h2>
            </div>

            <div className="mt-6 grid gap-6">
                {/* =================================================
                    UPLOAD IMAGE
                ================================================== */}

                <div>
                <label
                    className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-dw-text
                    "
                >
                    Image du projet
                </label>

                <div className="flex flex-wrap items-center gap-3">
                    {/* Bouton visible */}

                    <label
                    htmlFor="project-image"
                    className="
                        inline-flex
                        cursor-pointer
                        items-center
                        gap-2
                        rounded-xl
                        bg-dw-primary
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-dw-primary/20
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-dw-primary-hover
                    "
                    >
                    <ImageIcon size={17} />

                    {uploadingImage
                        ? "Upload en cours..."
                        : "Choisir une image"}
                    </label>

                    {/* Input réel, invisible */}

                    <input
                    id="project-image"
                    name="image"
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    disabled={
                        uploadingImage ||
                        saving
                    }
                    onChange={(event) => {
                        const file =
                        event.currentTarget.files?.[0];

                        if (!file) {
                        return;
                        }

                        void handleImageUpload(file);

                        event.currentTarget.value = "";
                    }}
                    className="sr-only"
                    />
                </div>

                <p className="mt-2 text-xs text-dw-muted">
                    JPG, PNG, WEBP ou GIF — 5 Mo maximum.
                </p>

                {/* Upload en cours */}

                {uploadingImage && (
                    <div
                    className="
                        mt-3
                        rounded-xl
                        border
                        border-dw-primary/20
                        bg-dw-primary/10
                        px-4
                        py-3
                        text-sm
                        text-dw-primary
                    "
                    >
                    Upload de l'image en cours...
                    </div>
                )}

                {/* Aperçu */}

                {form.image_url && (
                    <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-medium text-dw-muted">
                        Aperçu
                        </span>

                        <span className="text-xs font-semibold text-dw-success">
                        Image téléchargée
                        </span>
                    </div>

                    <img
                        src={
                        form.image_url.startsWith("http")
                            ? form.image_url
                            : `${API_URL}${form.image_url}`
                        }
                        alt={
                        form.title
                            ? `Aperçu de ${form.title}`
                            : "Aperçu du projet"
                        }
                        className="
                        h-56
                        w-full
                        rounded-2xl
                        border
                        border-dw-border
                        bg-dw-surface
                        object-cover
                        "
                    />
                    </div>
                )}
                </div>

                {/* =================================================
                    URLS
                ================================================== */}

                <div className="grid gap-5 md:grid-cols-2">
                {/* URL du projet */}

                <div>
                    <label
                    htmlFor="project_url"
                    className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-dw-text
                    "
                    >
                    URL du projet
                    </label>

                    <input
                    id="project_url"
                    type="url"
                    value={form.project_url}
                    onChange={(event) =>
                        updateField(
                        "project_url",
                        event.target.value
                        )
                    }
                    placeholder="https://..."
                    className="
                        w-full
                        rounded-xl
                        border
                        border-dw-border
                        bg-dw-surface
                        px-4
                        py-3
                        text-sm
                        text-dw-text
                        outline-none
                        placeholder:text-dw-muted/60
                        focus:border-dw-primary
                    "
                    />
                </div>

                {/* URL démonstration */}

                <div>
                    <label
                    htmlFor="demo_url"
                    className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-dw-text
                    "
                    >
                    URL de démonstration
                    </label>

                    <input
                    id="demo_url"
                    type="url"
                    value={form.demo_url}
                    onChange={(event) =>
                        updateField(
                        "demo_url",
                        event.target.value
                        )
                    }
                    placeholder="https://..."
                    className="
                        w-full
                        rounded-xl
                        border
                        border-dw-border
                        bg-dw-surface
                        px-4
                        py-3
                        text-sm
                        text-dw-text
                        outline-none
                        placeholder:text-dw-muted/60
                        focus:border-dw-primary
                    "
                    />
                </div>
                </div>
            </div>
            </section>

            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <section
              className="
                rounded-3xl
                border
                border-dw-border
                bg-dw-card
                p-6
                sm:p-8
              "
            >
              <h2 className="text-lg font-bold text-dw-text">
                Technologies
              </h2>

              <div className="mt-5 flex gap-2">
                <input
                  value={technologyInput}
                  onChange={(event) =>
                    setTechnologyInput(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      event.preventDefault();
                      addTechnology();
                    }
                  }}
                  placeholder="React, Node.js..."
                  className="
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    border-dw-border
                    bg-dw-surface
                    px-4
                    py-3
                    text-sm
                    text-dw-text
                    outline-none
                    placeholder:text-dw-muted/60
                    focus:border-dw-primary
                  "
                />

                <button
                  type="button"
                  onClick={
                    addTechnology
                  }
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-dw-primary
                    text-white
                  "
                  aria-label="Ajouter une technologie"
                >
                  <Plus size={18} />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {form.technologies.map(
                  (technology) => (
                    <button
                      key={technology}
                      type="button"
                      onClick={() =>
                        removeTechnology(
                          technology
                        )
                      }
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-dw-border
                        bg-dw-surface
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-dw-muted
                        hover:text-dw-text
                      "
                    >
                      {technology}

                      <X size={13} />
                    </button>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <section
              className="
                rounded-3xl
                border
                border-dw-border
                bg-dw-card
                p-6
                sm:p-8
              "
            >
              <h2 className="text-lg font-bold text-dw-text">
                Points clés
              </h2>

              <div className="mt-5 flex gap-2">
                <input
                  value={benefitInput}
                  onChange={(event) =>
                    setBenefitInput(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      event.preventDefault();
                      addBenefit();
                    }
                  }}
                  placeholder="Gestion centralisée..."
                  className="
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    border-dw-border
                    bg-dw-surface
                    px-4
                    py-3
                    text-sm
                    text-dw-text
                    outline-none
                    placeholder:text-dw-muted/60
                    focus:border-dw-primary
                  "
                />

                <button
                  type="button"
                  onClick={addBenefit}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-dw-primary
                    text-white
                  "
                  aria-label="Ajouter un point clé"
                >
                  <Plus size={18} />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {form.benefits.map(
                  (benefit) => (
                    <div
                      key={benefit}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        rounded-xl
                        border
                        border-dw-border
                        bg-dw-surface
                        px-4
                        py-3
                      "
                    >
                      <span className="text-sm text-dw-muted">
                        {benefit}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeBenefit(
                            benefit
                          )
                        }
                        className="
                          text-dw-muted
                          hover:text-red-500
                        "
                        aria-label={`Supprimer ${benefit}`}
                      >
                        <X size={15} />
                      </button>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                PUBLICATION
            ================================================== */}

            <section
              className="
                rounded-3xl
                border
                border-dw-border
                bg-dw-card
                p-6
                sm:p-8
              "
            >
              <h2 className="text-lg font-bold text-dw-text">
                Publication
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {/* Status */}

                <div>
                  <label
                    htmlFor="status"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Statut
                  </label>

                  <select
                    id="status"
                    value={form.status}
                    onChange={(event) =>
                      updateField(
                        "status",
                        event.target
                          .value as FormData["status"]
                      )
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      text-dw-text
                      outline-none
                      focus:border-dw-primary
                    "
                  >
                    <option value="completed">
                      Terminé
                    </option>

                    <option value="in-progress">
                      En cours
                    </option>

                    <option value="maintenance">
                      Maintenance
                    </option>
                  </select>
                </div>

                {/* Order */}

                <div>
                  <label
                    htmlFor="sort_order"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-dw-text
                    "
                  >
                    Ordre
                  </label>

                  <input
                    id="sort_order"
                    type="number"
                    min="0"
                    value={
                      form.sort_order
                    }
                    onChange={(event) =>
                      updateField(
                        "sort_order",
                        Number(
                          event.target.value
                        )
                      )
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-dw-border
                      bg-dw-surface
                      px-4
                      py-3
                      text-sm
                      text-dw-text
                      outline-none
                      focus:border-dw-primary
                    "
                  />
                </div>

                {/* Featured */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-dw-border
                    bg-dw-surface
                    px-4
                    py-3
                  "
                >
                  <input
                    type="checkbox"
                    checked={
                      form.featured
                    }
                    onChange={(event) =>
                      updateField(
                        "featured",
                        event.target
                          .checked
                      )
                    }
                    className="
                      h-4
                      w-4
                      accent-dw-primary
                    "
                  />

                  <span className="text-sm font-medium text-dw-text">
                    Projet principal
                  </span>
                </label>
              </div>
            </section>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div
              className="
                flex
                flex-col-reverse
                gap-3
                sm:flex-row
                sm:justify-end
              "
            >
              <Link
                to="/admin"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-dw-border
                  bg-dw-card
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-dw-text
                  hover:border-dw-primary/30
                "
              >
                Annuler
              </Link>

              <Button
                type="submit"
                disabled={
                  saving ||
                  uploadingImage
                }
              >
                <Save size={17} />

                {saving
                  ? "Enregistrement..."
                  : uploadingImage
                    ? "Upload de l'image..."
                    : isEdit
                      ? "Enregistrer les modifications"
                      : "Créer la réalisation"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}