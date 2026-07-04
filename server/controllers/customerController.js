const Customer = require("../models/Customer");

// Add Customer
const addCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);

    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();

    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Customer
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.json({ message: "Customer Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addCustomer,
  getCustomers,
  deleteCustomer,
};