const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  const tokenRefresh = req.header("auth-token-refresh");

  if (!token || !tokenRefresh) {
    return res.status(401).send("Access denied");
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    // console.log(verified);
    // console.log("Current Time:", new Date());
    // console.log("Token Expiration Time:", new Date(verified.exp * 1000));

    req.user = verified;
    next();
  } catch (err) {
    try {
      const verifiedRefresh = jwt.verify(
        tokenRefresh,
        process.env.TOKEN_REFRESH
      );

      req.user = verifiedRefresh;
      next();
    } catch (error) {
      
      res.status(401).send("Access denied invalid token");
    }
  }
};

module.exports = verifyToken;

// Flujo de Utilización de Tokens y Refresh Tokens:

// 1 El usuario se autentica y recibe un token de acceso y un refresh token.

// 2 El token de acceso se usa para acceder a recursos protegidos.

// 3 Cuando el token de acceso expira, se usa el refresh token para obtener un nuevo token de acceso sin requerir credenciales.

// 4 Este proceso se repite hasta que el refresh token también expire o sea revocado.

// 5 En ese momento, el usuario debe volver a autenticarse para obtener nuevos tokens.
