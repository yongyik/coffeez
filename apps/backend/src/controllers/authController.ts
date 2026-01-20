import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import jwt from "jsonwebtoken";

// 注册
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const validateEmai = (v: string) => /\S+@\S+\.\S+/.test(v);

    if (!email || !password) {
      return res.status(400).json({ error: "邮箱和密码不能为空" });
    }

    if (!validateEmai(email)) {
      return res.status(400).json({ error: "请输入有效邮箱地址" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "密码长度至少 6 位" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "邮箱已注册" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username: "匿名用户",
    });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(201).json({ message: "注册成功" });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ error: "注册失败，请重试" });
  }
};

// 登录
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const validateEmai = (v: string) => /\S+@\S+\.\S+/.test(v);

    if (!email || !password) {
      return res.status(400).json({ error: "邮箱和密码不能为空" });
    }

    if (!validateEmai(email)) {
      return res.status(400).json({ error: "请输入有效邮箱地址" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "密码长度至少 6 位" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "邮箱不存在" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "密码错误" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "登录成功" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "登录失败，请重试" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  });

  return res.json({ message: "已退出登录" });
};
