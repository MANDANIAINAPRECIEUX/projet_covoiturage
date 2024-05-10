import express from "express";
import conducteur_router from "./backend/routes/conducteur.route.js";
import emplacement_router from "./backend/routes/emplacement_trajet.route.js";
import passager_router from "./backend/routes/passager.route.js";
import reservation_router from "./backend/routes/reservation.route.js";
import trajet_router from "./backend/routes/trajet.route.js";
import accounts_router from "./backend/routes/accounts.route.js";
import dotenv from "dotenv";
import auth_router from "./backend/routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 4025;

app.use("/api/accounts", accounts_router);
app.use("/api/conducteur", conducteur_router);
app.use("/api/emplacement", emplacement_router);
app.use("/api/passager", passager_router);
app.use("/api/reservation", reservation_router);
app.use("/api/trajet", trajet_router);
app.use("/api/auth", auth_router);

app.listen(PORT, console.log("ALLUMER SERVER"));
