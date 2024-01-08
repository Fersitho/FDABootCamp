// const mongoose = require("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// hay que sacar las categorias de un documento de la bd, podemos crear una tabla solo de categorias
const categoriesEnum = [
  "Acción",
  "Aventura",
  "Animación",
  "Biografía",
  "Comedia",
  "Crimen",
  "Documental",
  "Drama",
  "Familia",
  "Fantasía",
  "Film-Noir",
  "Historia",
  "Terror",
  "Música",
  "Musical",
  "Misterio",
  "Noticias",
  "Romance",
  "Ciencia Ficción",
  "Corto",
  "Deporte",
  "Thriller",
  "Guerra",
  "Western",
  "Reality-TV",
  "Concurso",
  "Talk-Show",
  "Adulto",
  "Noticias",
  "Reality-TV",
  "Concurso",
  "Talk-Show",
  "Adulto",
  "Noticias",
  "Reality-TV",
  "Concurso",
  "Talk-Show",
];
const actorSchema = new mongoose.Schema({
  adult: {
    type: Boolean,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  known_for_department: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  original_name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  profile_path: {
    type: String,
  },
  cast_id: {
    type: Number,
    required: true,
  },
  character: {
    type: String,
    required: true,
  },
  credit_id: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});
const crewSchema = new Schema({
  adult: {
    type: Boolean,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  known_for_department: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  original_name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  profile_path: {
    type: String,
  },
  credit_id: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Campo requerido"],
  },

  description: {
    type: String,
    required: [true, "Campo requerido"],
  },

  category: {
    type: [
      {
        type: String,
        enum: categoriesEnum,
      },
    ],
    required: [true, "Campo requerido"],
  },
  cast: {
    type: [actorSchema], // El campo cast es un array de objetos según el subesquema actorSchema
    required: [true, "Campo requerido"],
  },

  crew: {
    type: [crewSchema], // El campo crew es un array de objetos según el subesquema crewSchema
    required: [true, "Campo requerido"],
  },

  director: {
    type: String,
    required: [true, "Campo requerido"],
  },
  TrailerURL: {
    type: String,
    required: [true, "Campo requerido"],
  },

  actors: {
    type: String,
    required: [true, "Campo requerido"],
  },

  createAt: {
    type: String,
    required: [true, "Campo requerido"],
  },

  poster: {
    type: String,
    required: [true, "Campo requerido"],
  },

  rating: {
    type: String,
    required: [true, "Campo requerido"],
  },

  year: {
    type: String,
    required: [true, "Campo requerido"],
  },
});

const movie = mongoose.model("movieModel", eventSchema, "movies");

export default movie;
