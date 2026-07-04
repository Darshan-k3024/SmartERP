const Supplier = require("../models/Supplier");

// Add Supplier
const addSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Suppliers
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Supplier
const deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.json({ message: "Supplier Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addSupplier,
  getSuppliers,
  deleteSupplier,
};