import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

import generateToken from "../utils/indexJS.js"

export const signup = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    if (!name || !lastName || !email || !password) {
      throw Error("Data error");
    } else if(password.trim().length < 8){
      throw Error("La contraseña debe ser como minimo de 8 caracteres.");
    }
    const newUser = new userModel({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      createdAt: new Date(),
    });
   
    await newUser.save();
    return res.status(201).json({
      status: "Success",
      message: "User Created",
      error: null,
    });
  } catch (error) {

    if (error.code === 11000) {
      return res.status(404).json({
        status: "Failed",
        message: "El correo ya existe",
      });
    }

    if (error.message.includes("Correo incorrecto")) {
      return res.status(404).json({
        status: "Failed",
        message: "El correo es incorrecto",
      });
    }

    res.status(404).json({
      status: "Error",
      message: "Algo fallo",
      error: error.message,
    });
  }
 
};

export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (user) {
      const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (validatePassword) {
        const token = generateToken(
          {email: user.email, idUser: user._id},
          process.env.TOKEN_SECRET,
          "15min"
        );
        const tokenRefresh = generateToken(
          {email: user.email, idUser: user._id},
          process.env.TOKEN_REFRESH,
          "60min"
        );

        return res.status(200).json({
          status: "Success",
          message: "Usuario logeado.",
          token: token,
          tokenRefresh: tokenRefresh,
          error: null,
        });
      }

      throw error();
    }

    throw error();
  } catch (error) {
    console.log(error)
    res.status(404).json({
      status: "Failed",
      message: "Error en usuario y contraseña.",
      error: error,
    });
  }
};

