const express = require("express");
const { getProducts, createProduct } = require("../controllers/product.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getProducts);
router.post("/", authMiddleware, createProduct);

module.exports = router;
