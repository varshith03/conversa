import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/health", (req, res) => {
  res.send("Active");
});

app.listen(() => {
  console.log("App is listening");
});

export default app;
