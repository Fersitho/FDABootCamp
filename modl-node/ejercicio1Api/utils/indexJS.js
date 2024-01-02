const jwt = require("jsonwebtoken")

const generateToken = (user, tokenSecret, timeToExpired) => {
    if (!user || !tokenSecret || !timeToExpired) {
      throw new Error("Missing required parameters for token creation");
    }

    return jwt.sign(user, tokenSecret, { expiresIn: timeToExpired });
};

module.exports = { generateToken };

// const token =  generateToken(user, process.env.TOKEN_AUTH, "15min")
// const tokenRefresh = generateToken(user, process.env.TOKEN_AUTH_REFRESH, "60min")

// con esto vemos el payload! para comprobar por consola los datos o usarlos en front
// const decoded = jwt.decode(token);
// console.log(decoded);

// TOKEN --> PAYLOAD, HASH, TIEMPO DE EXPERIZACION