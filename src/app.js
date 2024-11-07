const express = require("express");
const dotenv = require("dotenv").config();

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const app = express();
dotenv;
const PORT = process.env.PORT || 3001;

app.use("/users", userRouter);
app.use("/products", productRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}! `);
});
