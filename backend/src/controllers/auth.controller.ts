import type { Request, Response } from "express";
import { z } from "zod";

import {
  createAccessToken,
  findAdminByUsername,
  verifyAdminPassword,
} from "../services/auth.service.js";

const loginSchema = z.object({
  username: z
    .string()
    .min(1)
    .max(100),

  password: z
    .string()
    .min(1),
});

export async function login(
  req: Request,
  res: Response
) {
  try {
    const data = loginSchema.parse(req.body);

    const admin =
      await findAdminByUsername(data.username);

    if (
      !admin ||
      !admin.is_active
    ) {
      res.status(401).json({
        success: false,
        message:
          "Identifiants administrateur invalides.",
      });

      return;
    }

    const validPassword =
      await verifyAdminPassword(
        data.password,
        admin.password_hash
      );

    if (!validPassword) {
      res.status(401).json({
        success: false,
        message:
          "Identifiants administrateur invalides.",
      });

      return;
    }

    const token = createAccessToken({
      id: admin.id,
      username: admin.username,
    });

    res.status(200).json({
      success: true,
      data: {
        token,
        admin: {
          id: admin.id,
          username: admin.username,
        },
      },
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

    console.error("login:", error);

    res.status(500).json({
      success: false,
      message: "Erreur lors de la connexion.",
    });
  }
}