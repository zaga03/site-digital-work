import "dotenv/config";

import express from "express";
import cors from "cors";

import pool from "./database/db.js";

import authRoutes from "./routes/auth.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import uploadRoutes from "./routes/upload.routes.js";

const app = express();

const PORT = Number(process.env.PORT ?? 4000);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// ======================================================
// FICHIERS UPLOADÉS
// ======================================================

app.use(
  "/uploads",
  express.static("uploads")
);

// ======================================================
// HEALTH CHECK
// ======================================================

app.get(
  "/api/health",
  async (_req, res) => {
    try {
      const result = await pool.query(
        "SELECT NOW() AS database_time"
      );

      res.status(200).json({
        success: true,
        message: "Digital Work API opérationnelle",
        database: "connected",
        databaseTime: result.rows[0]?.database_time,
      });
    } catch (error) {
      console.error(
        "Health check error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Impossible de se connecter à PostgreSQL",
      });
    }
  }
);

// ======================================================
// AUTHENTIFICATION
// ======================================================

app.use(
  "/api/auth",
  authRoutes
);

// ======================================================
// PROJETS
// ======================================================

app.use(
  "/api/projects",
  projectsRoutes
);

// ======================================================
// UPLOADS
// ======================================================

app.use(
  "/api/uploads", 
  uploadRoutes
);

// ======================================================
// ROUTE 404
// ======================================================

app.use(
  (_req, res) => {
    res.status(404).json({
      success: false,
      message: "Route API introuvable.",
    });
  }
);

// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {
  console.log(
    `Digital Work API démarrée sur http://localhost:${PORT}`
  );
});