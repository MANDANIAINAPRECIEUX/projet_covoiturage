import { Router } from "express";
import {
  getEmplacement,
  getEmplacementById,
  createEmplacement,
  deleteEmplacement,
  updateEmplacement,
} from "../controllers/emplacement.controller.js";

const emplacement_router = Router();

emplacement_router.get("/", getEmplacement);
emplacement_router.get("/:id", getEmplacementById);
emplacement_router.post("/", createEmplacement);
emplacement_router.delete("/:id", deleteEmplacement);
emplacement_router.put("/:id", updateEmplacement);

export default emplacement_router;
