import { Router } from "express";
import {
  getConducteur,
  getConducteurById,
  createConducteur,
  deleteConducteur,
  updateConducteur,
} from "../controllers/conducteur.controller.js";

const conducteur_router = Router();

conducteur_router.get("/", getConducteur);
conducteur_router.get("/:id", getConducteurById);
conducteur_router.post("/", createConducteur);
conducteur_router.delete("/:id", deleteConducteur);
conducteur_router.put("/:id", updateConducteur);

export default conducteur_router;
