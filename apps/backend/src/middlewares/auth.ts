import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: JwtPayload | { userId: string };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET || "secret";

    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: "未登录（缺少 token）" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded as any;

    next();
  } catch (err) {
    console.error("auth middleware error:", err);
    return res.status(401).json({ error: "无效或过期的 token" });
  }
};
