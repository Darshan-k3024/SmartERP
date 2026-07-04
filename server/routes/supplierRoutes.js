const express = require("express");
const router = express.Router();

const {
  addSupplier,
  getSuppliers,
  deleteSupplier,
} = require("../controllers/supplierController");

router.post("/", addSupplier);
router.get("/", getSuppliers);
router.delete("/:id", deleteSupplier);

module.exports = router;