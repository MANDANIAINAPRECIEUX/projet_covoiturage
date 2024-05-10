import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const test = (req, res) => {
  res.json("test is working");
};

// signup endpoint
const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return res.json({
        error: "le nom d'utilisateur est requis",
      });
    }
    if (!password || password.length < 8) {
      return res.json({
        error: "Le mot de passe doit au moins comporter 8 caractère",
      });
    }
    const exist = await db.accounts.findFirst({
      where: {
        email: email,
      },
    });
    if (exist) {
      return res.json({
        error: "Cet email est déja pris",
      });
    }

    // Supposons que vous avez une fonction pour hacher le mot de passe
    const hashedPassword = await hashPassword(password);

    const newUser = await db.accounts.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

//login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Voir si l'utilisateur existe
    const user = await db.accounts.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.json({
        error: "Aucun utilisateur trouvé",
      });
    }

    // Voir si le mot de passe correspond
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user.id, username: user.username }, // Assurez-vous que les champs correspondent à votre schéma Prisma
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "mot de passe incorrect",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

export { test, signupUser, loginUser, getProfile };
