const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
