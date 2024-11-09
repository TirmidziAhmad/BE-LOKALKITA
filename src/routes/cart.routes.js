const express = require("express");
const { addToCart, getCart } = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);

module.exports = router;
