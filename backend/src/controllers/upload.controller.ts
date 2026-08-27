import type {
  Request,
  Response,
} from "express";

export function uploadProjectImageController(
  req: Request,
  res: Response
) {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "Aucune image reçue.",
      });

      return;
    }

    /*
     * Chemin public relatif.
     *
     * Exemple :
     *
     * /uploads/projects/1787775438562-images.jpg
     */

    const fileUrl =
      `/uploads/projects/${req.file.filename}`;

    res.status(201).json({
      success: true,

      data: {
        filename: req.file.filename,

        url: fileUrl,

        image_url: fileUrl,

        size: req.file.size,

        mimetype: req.file.mimetype,
      },
    });
  } catch (error) {
    console.error(
      "uploadProjectImageController:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Impossible de traiter l'image.",
    });
  }
}