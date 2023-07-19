import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
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
    colour: [
      {
        coulour_type: {
          type: String
        },
        colour_size: {
          type: Number
        }
      }
    ],
    image: {
      type: String,
      required: true
    },
    admin_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true, versionKey: false }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
