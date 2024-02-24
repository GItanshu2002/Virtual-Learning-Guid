// OrderSummery schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OrderSummerySchema = new schema({
  cartId: { type: schema.ObjectId, ref: "cartSchema", default: null },
  total: { type: Number, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("OrderSummerySchema", OrderSummerySchema);
