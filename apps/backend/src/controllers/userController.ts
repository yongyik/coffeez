

import { Request, Response } from "express";
import User from "../models/user";
import { AuthRequest } from "../middlewares/auth";

export const getCurrentUser = async (req: AuthRequest, res: Response) => {
  try {
    const userId = (req.user as any)?.userId;
    if (!userId) return res.status(401).json({ error: "未登录" });

    const user = await User.findById(userId).select("-password");

    console.log({'user：':user})
    if (!user) return res.status(404).json({ error: "用户不存在" });

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "服务器错误" });
  }
};
