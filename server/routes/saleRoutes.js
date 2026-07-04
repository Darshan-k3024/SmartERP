const express = require("express");
const router = express.Router();

const {
  addSale,
  getSales,
  deleteSale,
} = require("../controllers/saleController");

router.post("/", addSale);
router.get("/", getSales);
router.delete("/:id", deleteSale);

module.exports = router;