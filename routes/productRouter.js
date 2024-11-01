const { Router } = require("express");

const productRouter = Router();

productRouter.get("/", (req, res) => res.send("All product"));
productRouter.get("/:productId", (req, res) => {
  const { productId } = req.params;
  res.send(`Product ID: ${productId}`);
});

module.exports = productRouter;
