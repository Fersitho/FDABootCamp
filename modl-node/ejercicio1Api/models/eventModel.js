const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
    type: String,
    required: [true, "El title es obligatorio"],
  },
  description: {
    type: String,
    required: [true, "El description es obligatorio"],
  },
  location: {
    type: String,
    required: [true, "El location es obligatorio"],
    trim: true,
  },
  ticketPrice: {
    type: Number,
    required: [true, "ticketPrice es obligatoria"],
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: '_id',
    }],
});

const event = mongoose.model("eventModel", eventSchema, "events");

module.exports = event;