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
  admin_id: {
    type: mongoose.Types.ObjectId,
    required: true

  }
},{ timestamps: true , versionKey: false});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
