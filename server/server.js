const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const saleRoutes = require("./routes/saleRoutes");

const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/suppliers", supplierRoutes);
// app.use("/api/sales", saleRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/dashboard", dashboardRoutes);
// Home Route
app.get("/", (req, res) => {
    res.send("🚀 SmartERP Backend Running...");
});

// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});