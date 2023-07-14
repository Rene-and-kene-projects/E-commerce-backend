import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  admin: {
    type: String,
    required: true
  }
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
