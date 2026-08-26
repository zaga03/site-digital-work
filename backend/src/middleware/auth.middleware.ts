import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  username: string;
}

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error(
      "JWT_SECRET est obligatoire."
    );
  }

  return secret;
}

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization =
    req.headers.authorization;

  if (!authorization) {
    res.status(401).json({
      success: false,
      message: "Authentification requise.",
    });

    return;
  }

  const [scheme, token] =
    authorization.split(" ");

  if (
    scheme !== "Bearer" ||
    !token
  ) {
    res.status(401).json({
      success: false,
      message: "Token invalide.",
    });

    return;
  }

  try {
    const payload = jwt.verify(
      token,
      getJwtSecret()
    ) as JwtPayload;

    if (
      !payload.id ||
      !payload.username
    ) {
      res.status(401).json({
        success: false,
        message: "Token invalide.",
      });

      return;
    }

    req.user = {
      id: payload.id,
      username: payload.username,
    };

    next();
  } catch (error) {
    console.error(
      "requireAdmin:",
      error
    );

    res.status(401).json({
      success: false,
      message:
        "Session administrateur expirée ou invalide.",
    });
  }
}