// src/middlewares/auth.ts
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

    // 3) 验证 token
    const decoded = jwt.verify(token, JWT_SECRET);

    // decoded 的类型是 string | JwtPayload，通常使用 JwtPayload
    req.user = decoded as any; // 已在 types/express.d.ts 声明 req.user

    // 4) 继续
    next();
  } catch (err) {
    console.error("auth middleware error:", err);
    return res.status(401).json({ error: "无效或过期的 token" });
  }
};
