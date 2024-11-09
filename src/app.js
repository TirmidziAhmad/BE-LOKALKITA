const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { userRoutes, productRoutes, cartRoutes } = require("./routes");
const { authMiddleware, errorHandler } = require("./middleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes with optional authentication
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", authMiddleware, cartRoutes);

// Global error handler
// app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
