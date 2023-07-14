import productModel from "../models/product.model.js";
import _ from "lodash";
import { uploadImage } from "../config/cloudinaryconfig.js";
class ProductController {
  
  async create(req, res) {
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
      image: result.url
    };
    try {
      const product = await productModel.create(data);
      return res.status(200).send({
        success: true,
        data: product
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode).send({
        success: false,
        error: err.message
      });
    }
  }
}

export default new ProductController();
