const jwt = require("jsonwebtoken");

const generateToken = async (user, tokenSecret, timeToExpired) => {
    if (!user || !tokenSecret || !timeToExpired) {
      throw new Error("Missing required parameters for token creation");
    }

    const token = jwt.sign({user}, tokenSecret, { expiresIn: timeToExpired });

    return token;
};

module.exports = { generateToken };