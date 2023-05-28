import express from "express";
import productController from "../controllers/product.controller.js";
import store from "../config/multer.config.js";

const productRouter = express.Router();

productRouter.post("/create", store.single("image"), productController.create);

export default productRouter;
