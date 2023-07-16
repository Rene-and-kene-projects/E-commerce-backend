import express from "express";
import productController from "../controllers/product.controller.js";
import store from "../config/multer.config.js";
import authentication from "../middlewares/auth.middlewares.js";

const productRouter = express.Router();

productRouter.post("/create", store.single("image"), authentication,productController.create);
productRouter.post("/find", productController.find);

export default productRouter;
