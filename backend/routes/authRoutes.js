import express from "express";
import cors from "cors";
import { Router } from "express";
import {
  test,
  signupUser,
  loginUser,
  getProfile,
} from "../controllers/authControllers.js"; // Utilisez une importation statique

const auth_router = Router();

auth_router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

auth_router.get("/", test);
auth_router.post("/signup", signupUser);
auth_router.post("/login", loginUser);
auth_router.get("/profile", getProfile);

export default auth_router;
