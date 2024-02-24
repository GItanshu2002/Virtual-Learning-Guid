// contact Schema
const { string, number } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = new schema({
  name: { type: String, default: null },
  email: { type: String, default: null },
  phoneNo: { type: String, default: null },
  message: { type: String, default: null },
  questionList: { type: String, default: null },
  customerId: {type: schema.ObjectId,ref: "customerSchema",default: null},
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("contactSchema", contactSchema);
