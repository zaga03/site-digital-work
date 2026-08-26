import pool from "../database/db.js";

export interface CreateProjectData {
  title: string;
  short_title?: string | undefined;
  description: string;
  details?: string | undefined;
  category: string;
  image_url?: string | undefined;
  technologies?: string[] | undefined;
  benefits?: string[] | undefined;
  project_url?: string | undefined;
  demo_url?: string | undefined;
  featured?: boolean | undefined;
  status?:
    | "completed"
    | "in-progress"
    | "maintenance"
    | undefined;
  sort_order?: number | undefined;
}

export interface UpdateProjectData {
  title?: string | undefined;
  short_title?: string | undefined;
  description?: string | undefined;
  details?: string | undefined;
  category?: string | undefined;
  image_url?: string | undefined;
  technologies?: string[] | undefined;
  benefits?: string[] | undefined;
  project_url?: string | undefined;
  demo_url?: string | undefined;
  featured?: boolean | undefined;
  status?:
    | "completed"
    | "in-progress"
    | "maintenance"
    | undefined;
  sort_order?: number | undefined;
}

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
      status,
      sort_order,
      created_at,
      updated_at
    FROM projects
    ORDER BY sort_order ASC, created_at DESC
  `);

  return result.rows;
}

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
        status,
        sort_order,
        created_at,
        updated_at
      FROM projects
      WHERE id = $1
    `,
    [id]
  );

  return result.rows[0] ?? null;
}

export async function createProject(
  data: CreateProjectData
) {
  const result = await pool.query(
    `
      INSERT INTO projects (
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
        $13
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
      data.status ?? "completed",
      data.sort_order ?? 0,
    ]
  );

  return result.rows[0];
}

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
    fields.push(`${column} = $${values.length + 1}`);
    values.push(value);
  };

  if (data.title !== undefined) {
    addField("title", data.title);
  }

  if (data.short_title !== undefined) {
    addField("short_title", data.short_title);
  }

  if (data.description !== undefined) {
    addField("description", data.description);
  }

  if (data.details !== undefined) {
    addField("details", data.details);
  }

  if (data.category !== undefined) {
    addField("category", data.category);
  }

  if (data.image_url !== undefined) {
    addField("image_url", data.image_url);
  }

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

  if (data.project_url !== undefined) {
    addField("project_url", data.project_url);
  }

  if (data.demo_url !== undefined) {
    addField("demo_url", data.demo_url);
  }

  if (data.featured !== undefined) {
    addField("featured", data.featured);
  }

  if (data.status !== undefined) {
    addField("status", data.status);
  }

  if (data.sort_order !== undefined) {
    addField("sort_order", data.sort_order);
  }

  if (fields.length === 0) {
    return getProjectById(id);
  }

  fields.push("updated_at = NOW()");

  values.push(id);

  const result = await pool.query(
    `
      UPDATE projects
      SET ${fields.join(", ")}
      WHERE id = $${values.length}
      RETURNING *
    `,
    values
  );

  return result.rows[0] ?? null;
}

export async function deleteProject(id: string) {
  const result = await pool.query(
    `
      DELETE FROM projects
      WHERE id = $1
      RETURNING id
    `,
    [id]
  );

  return result.rows[0] ?? null;
}