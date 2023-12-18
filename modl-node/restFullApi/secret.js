// PARA CREAR UN HASH CRYPTO! JWT
const crypto = require("crypto")

const screct = "Full Stack 13"
const screct2 = "af hij kfaj kauy iw"

const hash = crypto.createHmac("sha256",screct).update(screct2).digest("hex")

console.log(hash)