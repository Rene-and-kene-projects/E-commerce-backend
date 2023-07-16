import productModel from "../models/product.model.js";
import _ from "lodash";
import { uploadImage } from "../config/cloudinaryconfig.js";
import productService from "../services/product.services.js";
import logger from "../app.js";
class ProductController {
  async create(req, res) {
    if (req.user.role !== "admin") {
      return res.status(400).send({
        success: false,
        message: "Only admins can create products"
      });
    }
    if (!("file" in req)) {
      return res.status(400).send({
        success: false,
        message: "Cannot create product without image"
      });
    }
    const result = await uploadImage(req.file.path);
    const data = {
      name: req.body.name,
      brand: req?.body.brand,
      category: req?.body.category,
      price: req.body.price,
      size: req.body.size,
      image: result.url,
      admin_id: req.user._id
    };
    try {
      const product = await productModel.create(data);
      return res.status(200).send({
        success: true,
        data: product
      });
    } catch (err) {
      logger.error(err);
      return res.status(err.statusCode).send({
        success: false,
        error: err.message
      });
    }
  }
  async find(req, res) {
    const data = req.query;
    const { name, brand, category, price, size } = data;
    try {
      const product = await productService.find(
        name,
        brand,
        category,
        price,
        size
      );
      return res.status(200).send({
        success: true,
        data: product
      });
    } catch (err) {
      logger.error(err);
      return res.status(400).send({
        success: false,
        error: err.message
      });
    }
  }
}

export default new ProductController();
