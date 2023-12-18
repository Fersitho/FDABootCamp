const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loginschema = new Schema({
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
    trim: true,
    minLength: 6,
    match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Correo incorrecto"]
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    trim: true,
    minlength: 8,
  },
  role: {
    type: String,
    required: [true, "El Rol es obligatorio"],
    enum: ["user", "admin"],
    default: "user",
  }
});

const login = mongoose.model("LoginModel", loginschema, "Login");

module.exports = login;
