import pool from "../database/db.js";

/* =========================================================
   TYPES
========================================================= */

export interface CreateProjectData {
  title: string;
  short_title?: string | null;
  description: string;
  details?: string | null;
  category: string;
  image_url?: string | null;
  technologies?: string[];
  benefits?: string[];
  project_url?: string | null;
  demo_url?: string | null;
  featured?: boolean;
  published?: boolean;
  status?: "completed" | "in-progress" | "maintenance";
}

export interface UpdateProjectData {
  title?: string;
  short_title?: string | null;
  description?: string;
  details?: string | null;
  category?: string;
  image_url?: string | null;
  technologies?: string[];
  benefits?: string[];
  project_url?: string | null;
  demo_url?: string | null;
  featured?: boolean;
  published?: boolean;
  status?: "completed" | "in-progress" | "maintenance";
  sort_order?: number;
}

/* =========================================================
   GET ALL PROJECTS
========================================================= */

export async function getProjects() {
  const result = await pool.query(`
    SELECT
      id,
      title,
      short_title,
      description,
      details,
      category,
      image_url,
      technologies,
      benefits,
      project_url,
      demo_url,
      featured,
      published,
      status,
      sort_order,
      created_at,
      updated_at
    FROM public.projects
    ORDER BY sort_order ASC, created_at DESC
  `);

  return result.rows;
}

/* =========================================================
   GET PROJECT BY ID
========================================================= */

export async function getProjectById(id: string) {
  const result = await pool.query(
    `
      SELECT
        id,
        title,
        short_title,
        description,
        details,
        category,
        image_url,
        technologies,
        benefits,
        project_url,
        demo_url,
        featured,
        published,
        status,
        sort_order,
        created_at,
        updated_at
      FROM public.projects
      WHERE id = $1
    `,
    [id]
  );

  return result.rows[0] ?? null;
}

/* =========================================================
   CREATE PROJECT
========================================================= */

export async function createProject(data: CreateProjectData) {
  /*
   * Le sort_order est maintenant calculé automatiquement.
   *
   * Exemple :
   * 0
   * 1
   * 2
   * 3
   * puis nouveau projet = 4
   */

  const sortResult = await pool.query(`
    SELECT COALESCE(MAX(sort_order), -1) + 1 AS next_sort_order
    FROM public.projects
  `);

  const nextSortOrder = Number(
    sortResult.rows[0]?.next_sort_order ?? 0
  );

  const result = await pool.query(
    `
      INSERT INTO public.projects (
        title,
        short_title,
        description,
        details,
        category,
        image_url,
        technologies,
        benefits,
        project_url,
        demo_url,
        featured,
        published,
        status,
        sort_order
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7::jsonb,
        $8::jsonb,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14
      )
      RETURNING *
    `,
    [
      data.title,
      data.short_title ?? null,
      data.description,
      data.details ?? null,
      data.category,
      data.image_url ?? null,
      JSON.stringify(data.technologies ?? []),
      JSON.stringify(data.benefits ?? []),
      data.project_url ?? null,
      data.demo_url ?? null,
      data.featured ?? false,
      data.published ?? true,
      data.status ?? "completed",

      // IMPORTANT :
      // on utilise le prochain ordre calculé
      nextSortOrder,
    ]
  );

  return result.rows[0];
}

/* =========================================================
   UPDATE PROJECT
========================================================= */

export async function updateProject(
  id: string,
  data: UpdateProjectData
) {
  const fields: string[] = [];
  const values: unknown[] = [];

  const addField = (
    column: string,
    value: unknown
  ) => {
    fields.push(
      `${column} = $${values.length + 1}`
    );

    values.push(value);
  };

  /* =======================================================
     TEXT FIELDS
  ======================================================= */

  if (data.title !== undefined) {
    addField("title", data.title);
  }

  if (data.short_title !== undefined) {
    addField(
      "short_title",
      data.short_title
    );
  }

  if (data.description !== undefined) {
    addField(
      "description",
      data.description
    );
  }

  if (data.details !== undefined) {
    addField(
      "details",
      data.details
    );
  }

  if (data.category !== undefined) {
    addField(
      "category",
      data.category
    );
  }

  if (data.image_url !== undefined) {
    addField(
      "image_url",
      data.image_url
    );
  }

  /* =======================================================
     JSONB FIELDS
  ======================================================= */

  if (data.technologies !== undefined) {
    fields.push(
      `technologies = $${values.length + 1}::jsonb`
    );

    values.push(
      JSON.stringify(data.technologies)
    );
  }

  if (data.benefits !== undefined) {
    fields.push(
      `benefits = $${values.length + 1}::jsonb`
    );

    values.push(
      JSON.stringify(data.benefits)
    );
  }

  /* =======================================================
     URL FIELDS
  ======================================================= */

  if (data.project_url !== undefined) {
    addField(
      "project_url",
      data.project_url
    );
  }

  if (data.demo_url !== undefined) {
    addField(
      "demo_url",
      data.demo_url
    );
  }

  /* =======================================================
     BOOLEAN FIELDS
  ======================================================= */

  if (data.featured !== undefined) {
    addField(
      "featured",
      data.featured
    );
  }

  if (data.published !== undefined) {
    addField(
      "published",
      data.published
    );
  }

  /* =======================================================
     STATUS
  ======================================================= */

  if (data.status !== undefined) {
    addField(
      "status",
      data.status
    );
  }

  /* =======================================================
     SORT ORDER
  ======================================================= */

  if (data.sort_order !== undefined) {
    addField(
      "sort_order",
      data.sort_order
    );
  }

  /* =======================================================
     NOTHING TO UPDATE
  ======================================================= */

  if (fields.length === 0) {
    return getProjectById(id);
  }

  /* =======================================================
     UPDATED AT
  ======================================================= */

  fields.push("updated_at = NOW()");

  /*
   * L'id est ajouté en dernier afin de conserver :
   *
   * $1, $2, $3...
   * puis WHERE id = $N
   */

  values.push(id);

  const result = await pool.query(
    `
      UPDATE public.projects
      SET ${fields.join(", ")}
      WHERE id = $${values.length}
      RETURNING *
    `,
    values
  );

  return result.rows[0] ?? null;
}

/* =========================================================
   DELETE PROJECT
========================================================= */

export async function deleteProject(
  id: string
) {
  const result = await pool.query(
    `
      DELETE FROM public.projects
      WHERE id = $1
      RETURNING id
    `,
    [id]
  );

  return result.rows[0] ?? null;
}