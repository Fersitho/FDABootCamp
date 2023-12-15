const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Correo incorrecto"]
    }
})


const user = mongoose.model("userModel", userSchema, "User")
// (
//   1: "Aqui el nombre como usaremos en nuestro codigo las consultas a este modelo por ejemplo: "userModel" si vamos a usar userModel.find()..., es decir, como lo importemos en otro archivo",
//   2: "Aqui va la schema de nuestro modelo",
//   3: "Aqui indicar la collection de nuestra BD, no requerido, pero sino se pone coge el valor que demos en 1: , con todo en minusculas, EN ESTE caso usermodel, como esta colletions no existe, nos la crearía."
// )
module.exports = user;

// una rest full api deberia tener?
// 1. autenticación basada en token (jsonwebtoken) con sus respectivos middlewares
// 2. encriptar contraseñas (con bcryptjs)
// 3. configurar CORS para permitir solicitudes HTTP entre sitios o validar los datos con Express Validator.


// autenticación basada en token (jsonwebtoken) con sus middlewares y configuracion de CORS para permitir solicitudes HTTP entre sitios