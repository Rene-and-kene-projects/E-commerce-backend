import express from "express";
import productController from "../controllers/product.controller.js";
import store from "../config/multer.config.js";
import authentication from "../middlewares/auth.middlewares.js";

const productRouter = express.Router();

productRouter.post("/create", store.single("image"), authentication, productController.create);
productRouter.get("/find", authentication,productController.find);
productRouter.get("/noAuthfind", productController.find);
productRouter.put("/addcolour",authentication, productController.addcolour)

export default productRouter;
