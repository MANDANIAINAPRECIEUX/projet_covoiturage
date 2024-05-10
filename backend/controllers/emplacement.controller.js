import db from "../config/db.js";

export const getEmplacement = async (req, res, next) => {
  try {
    const result = await db.emplacement.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmplacementById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.emplacement.findUnique({
      where: {
        id_emplacement: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmplacement = async (req, res, next) => {
  try {
    const result = await db.emplacement.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEmplacement = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.emplacement.update({
      where: {
        id_emplacement: id,
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

export const deleteEmplacement = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.emplacement.delete({
      where: {
        id_emplacement: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
