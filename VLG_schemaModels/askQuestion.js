// askQuestion schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const askQuestion = new schema({
  question: { type: String, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("askQuestion", askQuestion);
