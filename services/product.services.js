import productModel from "../models/product.model.js";
class ProductService {
  async find(id, name, brand, category, price, size) {
    const query = {};

    if (name !== undefined) {
      query.name = name;
    }
    if (brand !== undefined) {
      query.brand = brand;
    }
    if (category !== undefined) {
      query.category = category;
    }
    if (price !== undefined) {
      query.price = price;
    }
    if (size !== undefined) {
      query.size = size;
    }
    if (id !== undefined) {
      query._id = id;
    }

    const product = await productModel.find(query);
    return product;
  }

}

export default new ProductService();
