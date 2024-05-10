import { Router } from "express";

import {
  createAdminAccount,
  createConducteurAccount,
  createPassagerAccount,
  getAllAcounts,
  getAcountsByClerkId,
  deleteAnAccount,
} from "../controllers/accounts.controller.js";

const accounts_router = Router();

accounts_router.post("/admin", createAdminAccount);
accounts_router.post("/conducteur", createConducteurAccount);
accounts_router.post("/passager", createPassagerAccount);

export default accounts_router;
