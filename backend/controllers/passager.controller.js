import db from "../config/db.js";
import asyncHandler from "express-async-handler";

export const getPassager = async (req, res, next) => {
  try {
    const result = await db.passager.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPassagerById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.passager.findUnique({
      where: {
        id_passager: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPassager = async (req, res, next) => {
  try {
    const result = await db.passager.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePassager = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.passager.update({
      where: {
        id_passager: id,
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

export const deletePassager = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await db.passager.delete({
      where: {
        id_passager: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkCode = asyncHandler(async (req, res, next) => {
  const { code } = req.body;

  const passager = await db.passager.findUnique({
    where: {
      email_passager: code,
    },
    include: { account: true },
  });

  if (!passager) {
    return res.status(404).json({ message: "Passager introuvable" });
  }

  if (PiStudent.account) {
    return res.status(400).json({ message: "Passager a déja un compte" });
  }

  res.status(200).json({ success: true });
});
