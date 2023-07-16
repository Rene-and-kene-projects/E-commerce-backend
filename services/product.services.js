import productModel from "../models/product.model.js";
class ProductService {
  async find(name, brand, category, price, size) {
    const product = await productModel.find({
      name: name,
      brand: brand,
      category: category,
      size: size,
      price: price
    });
    return product
  }
}

export default new ProductService();
