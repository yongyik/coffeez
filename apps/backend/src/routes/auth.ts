import express from "express";
import { login, logout, register } from "../controllers/authController";

const router = express.Router();

// POST /api/auth/register
router.post("/register", register);

// POST /api/auth/login
router.post("/login", login);

router.post("/logout", logout);

export default router;
