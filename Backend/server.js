import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectMongoDB from "./Database/connectMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectMongoDB();
  console.log(`server is running on ${PORT} `);
});
