// Cart schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema({
  bookId: { type: schema.ObjectId, ref: "EbookSchema", default: null },
  customerId: { type: schema.ObjectId, ref: "customerSchema", default: null },
  quantity: { type: Number, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("cartSchema", cartSchema);
