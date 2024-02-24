// admin schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  accessToken: { type: String, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("adminSchema", adminSchema);
