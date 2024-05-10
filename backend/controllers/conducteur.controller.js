import db from "../config/db.js";

export const getConducteur = async (req, res, next) => {
  try {
    const result = await db.conducteur.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getConducteurById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.conducteur.findUnique({
      where: {
        id_conducteur: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createConducteur = async (req, res, next) => {
  try {
    const result = await db.conducteur.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateConducteur = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.conducteur.update({
      where: {
        id_conducteur: id,
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

export const deleteConducteur = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.conducteur.delete({
      where: {
        id_conducteur: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
