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
  const secret = process.env.JWT_SECRET;

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
  const result = await pool.query<AdminUser>(
    `
      SELECT
        id,
        username,
        password_hash,
        is_active
      FROM admin_users
      WHERE username = $1
      LIMIT 1
    `,
    [username]
  );

  return result.rows[0] ?? null;
}

export async function verifyAdminPassword(
  password: string,
  passwordHash: string
): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}

export function createAccessToken(
  payload: AuthTokenPayload
): string {
  return jwt.sign(
    payload,
    getJwtSecret(),
    {
      expiresIn: process.env.JWT_EXPIRES_IN ?? "8h",
    } as jwt.SignOptions
  );
}