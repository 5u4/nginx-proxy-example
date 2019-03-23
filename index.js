const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Started");
});

mongoose
  .connect("mongodb://mongodb:27017/test")
  .then(() => console.log("Connected"));
