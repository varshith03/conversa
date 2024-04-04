const express = require("express");
const { postUser } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/", postUser);

module.exports = userRouter;
