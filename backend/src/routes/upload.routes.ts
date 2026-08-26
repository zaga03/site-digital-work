import { Router } from "express";

import {
  requireAdmin,
} from "../middleware/auth.middleware.js";

import {
  uploadProjectImage,
} from "../middleware/upload.middleware.js";

import {
  uploadProjectImageController,
} from "../controllers/upload.controller.js";

const router = Router();

router.post(
  "/project",
  requireAdmin,
  uploadProjectImage.single("image"),
  uploadProjectImageController
);

export default router;