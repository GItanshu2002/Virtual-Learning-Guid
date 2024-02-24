// customer schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const customerSchema = new schema({
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  accessToken: { type: String, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  socialKey: { type: String, default: null },
});

module.exports = mongoose.model("customerSchema", customerSchema);
