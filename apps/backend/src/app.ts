import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// 路由
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

export default app;
