import jwt from "jsonwebtoken";

export const generateToken = (user, tokenSecret, timeToExpired) => {
  // console.log(user)
  if (!user || !tokenSecret || !timeToExpired) {
    throw new Error("Missing required parameters for token creation");
  }

  const token = jwt.sign(user, tokenSecret, { expiresIn: timeToExpired });
  
  // const decoded = jwt.decode(token);
  // console.log(decoded);
  // // console.log(token)
  return token;
};

export default generateToken;
