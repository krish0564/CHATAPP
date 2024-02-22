import express from "express";
import { signup, login, logout } from "../Controllers/authController.js";
const router = express.Router();
router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

export default router;
