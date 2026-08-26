import type { Request, Response } from "express";
import { z } from "zod";

import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../services/projects.service.js";

/* =========================================================
   VALIDATION
========================================================= */

const projectSchema = z.object({
  title: z.string().min(1).max(150),

  short_title: z
    .string()
    .max(100)
    .optional(),

  description: z.string().min(1),

  details: z
    .string()
    .optional(),

  category: z
    .string()
    .min(1)
    .max(100),

  image_url: z
    .string()
    .optional(),

  technologies: z
    .array(z.string())
    .default([]),

  benefits: z
    .array(z.string())
    .default([]),

  project_url: z
    .string()
    .optional(),

  demo_url: z
    .string()
    .optional(),

  featured: z
    .boolean()
    .default(false),

  status: z
    .enum([
      "completed",
      "in-progress",
      "maintenance",
    ])
    .default("completed"),

  sort_order: z
    .number()
    .int()
    .default(0),
});

const updateProjectSchema =
  projectSchema.partial();

/* =========================================================
   PARAMETER ID
========================================================= */

function getProjectId(
  req: Request,
  res: Response
): string | null {
  const { id } = req.params;

  if (typeof id !== "string" || id.length === 0) {
    res.status(400).json({
      success: false,
      message: "Identifiant du projet invalide.",
    });

    return null;
  }

  return id;
}

/* =========================================================
   GET ALL
========================================================= */

export async function listProjects(
  _req: Request,
  res: Response
) {
  try {
    const projects = await getProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error(
      "listProjects:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Impossible de récupérer les projets.",
    });
  }
}

/* =========================================================
   GET ONE
========================================================= */

export async function showProject(
  req: Request,
  res: Response
) {
  const id = getProjectId(req, res);

  if (!id) {
    return;
  }

  try {
    const project =
      await getProjectById(id);

    if (!project) {
      res.status(404).json({
        success: false,
        message: "Projet introuvable.",
      });

      return;
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(
      "showProject:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Impossible de récupérer le projet.",
    });
  }
}

/* =========================================================
   CREATE
========================================================= */

export async function createProjectController(
  req: Request,
  res: Response
) {
  try {
    const data =
      projectSchema.parse(req.body);

    const project =
      await createProject(data);

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Données invalides.",
        errors: error.flatten(),
      });

      return;
    }

    console.error(
      "createProjectController:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Impossible de créer le projet.",
    });
  }
}

/* =========================================================
   UPDATE
========================================================= */

export async function updateProjectController(
  req: Request,
  res: Response
) {
  const id = getProjectId(req, res);

  if (!id) {
    return;
  }

  try {
    const data =
      updateProjectSchema.parse(req.body);

    const project =
      await updateProject(id, data);

    if (!project) {
      res.status(404).json({
        success: false,
        message: "Projet introuvable.",
      });

      return;
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Données invalides.",
        errors: error.flatten(),
      });

      return;
    }

    console.error(
      "updateProjectController:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Impossible de modifier le projet.",
    });
  }
}

/* =========================================================
   DELETE
========================================================= */

export async function deleteProjectController(
  req: Request,
  res: Response
) {
  const id = getProjectId(req, res);

  if (!id) {
    return;
  }

  try {
    const project =
      await deleteProject(id);

    if (!project) {
      res.status(404).json({
        success: false,
        message: "Projet introuvable.",
      });

      return;
    }

    res.status(200).json({
      success: true,
      message: "Projet supprimé.",
    });
  } catch (error) {
    console.error(
      "deleteProjectController:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Impossible de supprimer le projet.",
    });
  }
}