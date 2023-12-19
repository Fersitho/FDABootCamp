const LoginModel = require("../models/loginModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/utilsJs");

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
        const token = await generateToken(
          user,
          process.env.TOKEN_SECRET,
          "15min"
        );
        const tokenRefresh = await generateToken(
          user,
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
    res.status(404).json({
      status: "Failed",
      message: "Error en usuario y contraseña.",
      error: error,
    });
  }
};

const refreshToken = async (req, res) => {
  if (!req.user) {
    res.status(404).json({
      status: "Failed",
      message: "Access denied",
      error: error,
    });
  }

  const token = generateToken(req.user, process.env.TOKEN_SECRET, "15min");
  const tokenRefresh = generateToken(
    req.user,
    process.env.TOKEN_REFRESH_SECRET,
    "60min"
  );

  res.status(201).json({
    status: "Success",
    data: {
      token,
      tokenRefresh,
    },
    error: null,
  });
};

module.exports = {
  signup,
  login,
  refreshToken,
};
