const Products = require('../Models/productsModel')

exports.getAllproduct = async (req, res, next) => {
  try {
    const product = await Products.find();

    res.status(200).json({
      success: true,
      data: product,
      message: "products get successfully..!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProductByID = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Products.findById(id);

    if (!product) {
      const error = new Error("product not Found..!");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: product,
      message: "product get successfully..!",
    });
  } catch (error) {
    const status = error.statusCode || 500;
    return res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { productName, price } = req.body;

    const product = {
      productName,
      price,
    };

    const newProduct = await Products.create(product);

    res.status(200).json({
      success: true,
      data: newProduct,
      message: "product Add successfully..!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Products.findById(id);

    if (!product) {
      const error = new Error("product not Found..!");
      error.statusCode = 404;
      throw error;
    }

    product.productName = req.body.productName;
    product.price = req.body.price;

    const newProduct = await product.save();

    res.status(200).json({
      success: true,
      data: newProduct,
      message: "product update successfully..!",
    });
  } catch (error) {
    const status = error.statusCode || 500;
    return res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Products.findById(id);

    if (!product) {
      const error = new Error("product not Found..!");
      error.statusCode = 404;
      throw error;
    }

    const deletedproduct = await product.remove();

    res.status(200).json({
      success: true,
      data: deletedproduct,
      message: "product deleted successfully..!",
    });
  } catch (error) {
    const status = error.statusCode || 500;
    return res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};
