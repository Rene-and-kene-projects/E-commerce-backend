/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import express from 'express';
import userController from '../controllers/user.controller.js';
import { validateUserSignupSchema, validateUserLoginSchema } from '../validators/user.validator.js';
import validator from '../validators/validator.js';

const userRouter = express.Router();

userRouter.post('/signup', [validator(validateUserSignupSchema)], userController.createUser);
userRouter.post('/login', [validator(validateUserLoginSchema)], userController.loginUser);
userRouter.get('/verify/:token', userController.verify);
userRouter.post('/forgotpassword', userController.forgotPassword);
export default userRouter;
