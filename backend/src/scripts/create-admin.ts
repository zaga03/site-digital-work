import "dotenv/config";

import bcrypt from "bcryptjs";

import pool from "../database/db.js";

const username =
  process.env.ADMIN_USERNAME;

const password =
  process.env.ADMIN_PASSWORD;

if (!username || !password) {
  throw new Error(
    "ADMIN_USERNAME et ADMIN_PASSWORD sont requis."
  );
}

const passwordHash =
  await bcrypt.hash(password, 12);

await pool.query(
  `
    INSERT INTO admin_users (
      username,
      password_hash
    )
    VALUES ($1, $2)
    ON CONFLICT (username)
    DO UPDATE SET
      password_hash = EXCLUDED.password_hash,
      updated_at = NOW()
  `,
  [
    username,
    passwordHash,
  ]
);

console.log(
  `Administrateur "${username}" créé/mis à jour.`
);

await pool.end();