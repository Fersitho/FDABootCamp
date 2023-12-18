const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = verifyToken;


// Con jwt tokens, podemos hacer un users persist que solo permita tener sesion iniciada en un dispositivo.

// Desde el front un setInterval() de una funcion que compruebe que el mas nueva, la cosa es que hace falta guardar los hash de todas formas como un persist normal, no tiene sentido