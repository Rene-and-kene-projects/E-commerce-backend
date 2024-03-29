import express from "express";
import userController from "../controllers/user.controller.js";
import {
  validateUserSignupSchema,
  validateUserLoginSchema
} from "../validators/user.validator.js";
import validator from "../validators/validator.js";
import authentication from "../middlewares/auth.middlewares.js";

const userRouter = express.Router();

userRouter.post(
  "/signup",
  [validator(validateUserSignupSchema)],
  userController.createUser
);
userRouter.post(
  "/login",
  [validator(validateUserLoginSchema)],
  userController.loginUser
);
userRouter.get("/", userController.findUsers);
userRouter.get("/verify/:token", userController.verify);
userRouter.post("/forgotpassword", userController.forgotPassword);
userRouter.post("/addToCart", authentication, userController.addToCart);
userRouter.post("/deleteFromCart", authentication, userController.deleteFromCart);
userRouter.delete("/delete", userController.delete);

export default userRouter;
