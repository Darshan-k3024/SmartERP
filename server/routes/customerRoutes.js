const express = require("express");

const router = express.Router();

const {
  addCustomer,
  getCustomers,
  deleteCustomer,
} = require("../controllers/customerController");

router.post("/", addCustomer);

router.get("/", getCustomers);

router.delete("/:id", deleteCustomer);

module.exports = router;