import type {
  Request,
  Response,
} from "express";

export function uploadProjectImageController(
  req: Request,
  res: Response
) {
  if (!req.file) {
    res.status(400).json({
      success: false,
      message: "Aucune image reçue.",
    });
    return;
  }

  const fileUrl =
    `/uploads/projects/${req.file.filename}`;

  res.status(201).json({
    success: true,
    data: {
      filename: req.file.filename,
      url: fileUrl,
      size: req.file.size,
      mimetype: req.file.mimetype,
    },
  });
}