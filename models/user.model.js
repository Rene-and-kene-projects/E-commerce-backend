import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const user = new mongoose.Schema(
  {
    email: {
      type: "String",
      required: true,
      unique: true
    },
    password: {
      type: "String",
      required: true
    },
    lastname: {
      type: "String",
      required: true
    },
    firstname: {
      type: "String",
      required: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "user"]
    },
    cart: [
      {
        productid: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "Product"
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ]
  },
  { timestamps: true, versionKey: false }
);

user.methods.toJSON = function l() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};

user.methods.generateToken = function t() {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      role: this.role
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "2h" }
  );

  return token;
};

const UserModel = mongoose.model("User", user);

export default UserModel;
