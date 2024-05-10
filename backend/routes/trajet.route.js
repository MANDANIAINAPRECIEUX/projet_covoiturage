import { Router } from "express";
import {
  getTrajet,
  getTrajetById,
  createTrajet,
  deleteTrajet,
  updateTrajet,
} from "../controllers/trajet.controller.js";

const trajet_router = Router();

trajet_router.get("/", getTrajet);
trajet_router.get("/:id", getTrajetById);
trajet_router.post("/", createTrajet);
trajet_router.delete("/:id", deleteTrajet);
trajet_router.put("/:id", updateTrajet);

export default trajet_router;
