const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/indexJS");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  const tokenRefresh = req.header("auth-token-refresh");

  if (!token || !tokenRefresh) {
    return res.status(401).send("Access denied");
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    console.log('Fecha de expiración del token:', new Date(verified.exp * 1000));
    next();
  } catch (err) {
    try {
      const verifiedRefresh = jwt.verify(tokenRefresh,process.env.TOKEN_REFRESH);
      req.user = verifiedRefresh;
      //con req.user --> cambiamos el valor del req.user por el tokenRefresh que es valido.

      // actualizamos ambos tokens --> newToken y newTokenResfreh.
      // Generar nuevos tokens (tanto de acceso como de actualización)
      const newToken = generateToken(req.user, process.env.TOKEN_SECRET, "15min");
      const newTokenRefresh = generateToken(req.user,process.env.TOKEN_REFRESH,"60min");

      // Establecer los nuevos tokens en la respuesta asi se actualizan los tokens en el cliente!
      res.header("auth-token", newToken);
      res.header("auth-token-refresh", newTokenRefresh);

      next();
    } catch (error) {
      res.status(401).send("Access denied invalid token");
    }
  }
};

module.exports = verifyToken;

