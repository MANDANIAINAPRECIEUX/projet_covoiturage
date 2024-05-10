import db from "../config/db.js";
import asyncHandler from "express-async-handler";

export const createAdminAccount = asyncHandler(async (req, res, next) => {
  const account = await db.accounts.create({
    data: {
      ...req.body,
      type: "ADMIN",
    },
  });

  res
    .status(200)
    .json({ message: "Administrateur créer avec succès", account });
});

export const createConducteurAccount = asyncHandler(async (req, res, next) => {
  const account = await db.accounts.create({
    data: {
      ...req.body,
      type: "CONDUCTEUR",
    },
  });

  res.status(200).json({ message: "Conducteur créer avec succès", account });
});

export const createPassagerAccount = asyncHandler(async (req, res, next) => {
  const account = await db.accounts.create({
    data: {
      ...req.body,
    },
  });

  res.status(200).json({ message: "Passager créer avec succès", account });
});

export const getAllAcounts = asyncHandler(async (req, res, next) => {
  const accounts = await db.accounts.findMany({
    include: {
      passager: true,
    },
  });
  res.status(200).json(accounts);
});

export const getAcountsByClerkId = asyncHandler(async (req, res, next) => {
  const accounts = await db.accounts.findUnique({
    where: {
      clerkId: req.params.clerkId,
    },
    include: {
      passager: true,
    },
  });
  res.status(200).json(accounts);
});

export const deleteAnAccount = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  const accounts = await db.accounts.delete({
    where: {
      id_accounts: id,
    },
  });
  res.status(200).json({ message: "Compte supprimer avec succès" });
});
