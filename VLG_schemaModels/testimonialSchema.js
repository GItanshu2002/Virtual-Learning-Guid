// Testimonial Schema
const { string, number } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const testimonialSchema = new schema({
  name: { type: String, default: null },
  statment: { type: String, default: null },
  designation: { type: String, default: null },
  rating: { type: Number, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("testimonialSchema", testimonialSchema);
