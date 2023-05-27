import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  category: {
    type: String, 
  },
  price: {
    type: Number,
  },
  size: {
    type: Number,
  },
  image: {
    type: String,
  }
});


const productModel = mongoose.model('Product',productSchema);

export default productModel;