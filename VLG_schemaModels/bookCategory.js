//  Book Category Schema
const { string } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
  category: { type: String, default: null },
  discription: { type: String, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("categorySchema", categorySchema);
