import express from "express";
import { sendMessage, getMessage } from "../Controllers/messageController.js";
import protectRoutes from "../middleware/protectRoutes.js";
const router = express.Router();
router.post("/send/:id", protectRoutes, sendMessage);
router.get("/:id", protectRoutes, getMessage);

export default router;
