// blog Schema
const { string, number } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema({
  image: { type: String, default: null },
  heading: { type: String, default: null },
  discription: { type: String, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("blogSchema", blogSchema);
