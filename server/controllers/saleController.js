const Sale = require("../models/Sale");

const addSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteSale = async (req, res) => {
  try {
    await Sale.findByIdAndDelete(req.params.id);
    res.json({ message: "Sale Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addSale,
  getSales,
  deleteSale,
};