const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => res.send("All user"));
userRouter.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`user ID: ${userId}`);
});

module.exports = userRouter;
