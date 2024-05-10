import { Router } from "express";
import {
  getReservation,
  getReservationById,
  createReservation,
  deleteReservation,
  updateReservation,
} from "../controllers/reservation.controller.js";

const reservation_router = Router();

reservation_router.get("/", getReservation);
reservation_router.get("/:id", getReservationById);
reservation_router.post("/", createReservation);
reservation_router.delete("/:id", deleteReservation);
reservation_router.put("/:id", updateReservation);

export default reservation_router;
