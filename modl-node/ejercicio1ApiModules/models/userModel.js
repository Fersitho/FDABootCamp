// const mongoose = require("mongoose");
import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El name es obligatorio"],
  },
  lastName: {
    type: String,
    required: [true, "El lastName es obligatorio"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correo es obligatorio"],
    trim: true,
    minLength: 6,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Correo incorrecto",
    ],
  },
  password: {
    type: String,
    required: [true, "Password es obligatoria"],
    minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const user = mongoose.model("userModel", userSchema, "users");

export default user;
