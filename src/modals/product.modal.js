const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    colour: { type: String, required: true },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
      required: false,
    },
    imgUrl: { type: String, required: true },
    rating: { type: Number, required: true },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: false,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

const product = new mongoose.Model("product", productSchema);

module.exports = product;
