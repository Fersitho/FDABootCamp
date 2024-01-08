// const mongoose = require("mongoose");
import mongoose from "mongoose"
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
    type: String,
    required: [true, "El title es obligatorio"],
  }
});

const movie = mongoose.model("movieModel", eventSchema, "movies");

export default movie;