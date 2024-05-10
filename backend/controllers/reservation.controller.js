import db from "../config/db.js";

export const getReservation = async (req, res, next) => {
  try {
    const result = await db.reservation.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReservationById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.reservation.findUnique({
      where: {
        id_reservation: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReservation = async (req, res, next) => {
  try {
    // Récupérer les données de la requête
    const { id_trajet, ...reservationData } = req.body;

    // Récupérer le trajet correspondant
    const trajet = await db.trajet.findUnique({
      where: {
        id_trajet: id_trajet,
      },
    });

    // Vérifier la disponibilité
    if (trajet.nombre_de_place_libre <= 0) {
      return res.status(400).json({ message: "Le trajet est complet." });
    }

    // Mettre à jour le nombre de places disponibles
    await db.trajet.update({
      where: {
        id_trajet: id_trajet,
      },
      data: {
        nombre_de_place_libre: {
          decrement: 1,
        },
      },
    });

    // Créer la réservation
    const result = await db.reservation.create({
      data: {
        ...reservationData,
        id_trajet: id_trajet,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReservation = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.reservation.update({
      where: {
        id_reservation: id,
      },
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReservation = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.reservation.delete({
      where: {
        id_reservation: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
