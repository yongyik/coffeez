

// src/routes/user.ts



import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { getCurrentUser } from "../controllers/userController";

const router = Router();

router.get("/me", authMiddleware, getCurrentUser);

export default router;
