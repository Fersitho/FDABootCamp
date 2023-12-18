const LoginModel = require("../models/loginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const newUser = new LoginModel({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      role: req.body.role,
    });

    await newUser.save();
    return res.status(201).json({
      status: "Success",
      message: "Usuario creado correctamente.",
      error: null,
    });
  } catch (error) {
    console.log(error);

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
      message: "Algo fallo, puede ver el error completo:.",
      error: error,
    });
  }
  console.log("Hemos llegado al auth!");
};

const login = async (req, res) => {
  try {
    const user = await LoginModel.findOne({ email: req.body.email });

    if (user) {
      const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (validatePassword) {
        const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role },
          process.env.TOKEN_SECRET,
          { expiresIn: "60min" }
        );

        console.log(token);

        return res.status(200).json({
          status: "Success",
          message: "Usuario logeado.",
          token: token,
          error: null,
        });
      }

      throw error();
    }

    throw error();
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: "Error en usuario y contraseña.",
    });
  }
};

module.exports = {
  signup,
  login,
};
