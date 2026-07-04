const Customer = require("../models/Customer");
const Product = require("../models/Product");
const Supplier = require("../models/Supplier");
const Sale = require("../models/Sale");

const getDashboardData = async (req, res) => {
  try {
    const customers = await Customer.countDocuments();
    const products = await Product.countDocuments();
    const suppliers = await Supplier.countDocuments();
    const sales = await Sale.countDocuments();

    res.json({
      customers,
      products,
      suppliers,
      sales,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getDashboardData };