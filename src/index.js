const express = require("express");
const establishConnection = require("./connections/mongoDB");
const bodyParser = require("body-parser");
const cors = require("cors");

const { portNo } = require("./constants/common.constant");
const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/user", userRouter);

app.get("/api/v1/health", (req, res) => {
  res.send("Active");
});

establishConnection().then(() => {
  app.listen(portNo, () => {
    console.log("App is listening on port " + portNo);
  });
});

module.exports = app;
