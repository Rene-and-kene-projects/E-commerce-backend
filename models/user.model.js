/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const user = new mongoose.Schema({

  email: {
    type: 'String',
    required: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true

  },
  username: {
    type: 'String',
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

user.methods.toJSON = function l() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};

// Define static method to be used on User object
user.methods.generateToken = function t() { // t is short for token
  const token = jwt.sign({
    _id: this._id,
    email: this.email
  }, process.env.TOKEN_SECRET, { expiresIn: '20 mins' });

  return token;
};

export const UserModel = mongoose.model('User', user);

export default UserModel;
