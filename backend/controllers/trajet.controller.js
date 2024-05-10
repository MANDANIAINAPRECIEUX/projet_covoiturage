import db from "../config/db.js";

export const getTrajet = async (req, res, next) => {
  try {
    const result = await db.trajet.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTrajetById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.trajet.findUnique({
      where: {
        id_trajet: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTrajet = async (req, res, next) => {
  try {
    const result = await db.trajet.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTrajet = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.trajet.update({
      where: {
        id_trajet: id,
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

export const deleteTrajet = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.trajet.delete({
      where: {
        id_trajet: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
