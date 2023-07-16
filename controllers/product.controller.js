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
      name: req.body.name.toLowerCase(),
      brand: req.body.brand.toLowerCase(),
      category: req.body.category.toLowerCase(),
      price: req.body.price,
      size: req.body.size,
      image: result.url,
      admin_id: req.user._id
    };
    for (const property in data) {
      if (!data[property]) {
        return res.status(400).send({
          success: false,
          message: `The ${property} field is required`
        });
      }
    }

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
    const data = {
      name: req.query.name,
      category: req.query.category,
      brand: req.query.brand,
      price: req.query.price,
      size: req.query.size
    };
    function isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    }

    if (isEmptyObject(req.query)) {
      const products = await productModel.find();
      return res.status(200).send({
        success: true,
        data: products
      });
    }
    let lowercaseData = {};
    for (const key in data) {
      if (typeof data[key] === "string") {
        lowercaseData[key.toLowerCase()] = data[key];
      } else {
        lowercaseData[key] = data[key];
      }
    }
    console.log(lowercaseData);
    try {
      const product = await productService.find(
        lowercaseData.name,
        lowercaseData.brand,
        lowercaseData.category,
        lowercaseData.price,
        lowercaseData.size
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
  async addcolour(req, res) {
    try {
      if (!req.body.id) {
        return res.status(404).send({
          success: false,
          message: "Must provide id"
        });
      }
      const product = await productService.findbyid(req.body.id);

      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Product not found"
        });
      }
      const adminid = product.admin_id.toString();

      if (req.user._id !== adminid) {
        return res.status(400).send({
          success: false,
          message:
            "You cannot add colour because you did not create this product"
        });
      }

      const data = {
        colour_type: req.body.colour_type.toLowerCase(),
        colour_size: req.body.colour_size
      };

      for (const property in data) {
        if (!data[property]) {
          return res.status(400).send({
            success: false,
            message: `The ${property} field is required`
          });
        }
      }
      product.colour.push(data);
      await product.save();
      return res.status(201).send({
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
