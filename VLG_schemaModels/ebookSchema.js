//  E-Book Schema
const { string } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const EbookSchema = new schema({
  categoryId: {
    type: schema.ObjectId,
    ref: "categorySchema",
    default: null,
  },
  image: { type: String, default: null },
  eBook: { type: String, default: null },
  discription: { type: String, default: null },
  price: { type: Number, default: null },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("EbookSchema", EbookSchema);
