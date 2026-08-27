import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import pool from "../database/db.js";

interface AdminUser {
  id: string;
  username: string;
  password_hash: string;
  is_active: boolean;
}

export interface AuthTokenPayload {
  id: string;
  username: string;
}

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET?.trim();

  if (!secret) {
    throw new Error(
      "JWT_SECRET est obligatoire dans le fichier .env"
    );
  }

  return secret;
}

export async function findAdminByUsername(
  username: string
): Promise<AdminUser | null> {
  const normalizedUsername = username.trim();

  if (!normalizedUsername) {
    return null;
  }

  const result = await pool.query<AdminUser>(
    `
      SELECT
        id,
        username,
        password_hash,
        is_active
      FROM admin_users
      WHERE LOWER(username) = LOWER($1)
      LIMIT 1
    `,
    [normalizedUsername]
  );

  return result.rows[0] ?? null;
}

export async function verifyAdminPassword(
  password: string,
  passwordHash: string
): Promise<boolean> {
  if (!password || !passwordHash) {
    return false;
  }

  try {
    return await bcrypt.compare(
      password,
      passwordHash
    );
  } catch (error) {
    console.error(
      "verifyAdminPassword:",
      error
    );

    return false;
  }
}

export function createAccessToken(
  payload: AuthTokenPayload
): string {
  return jwt.sign(
    {
      id: payload.id,
      username: payload.username,
    },
    getJwtSecret(),
    {
      expiresIn:
        process.env.JWT_EXPIRES_IN ?? "8h",
    } as jwt.SignOptions
  );
}