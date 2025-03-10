const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const adRouter = require("./routes/adRouter");
const likeAdRouter = require("./routes/likeAdRouter");
const commentAdRouter = require("./routes/commentAdRouter");

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/ads", adRouter);
app.use("/api/v1/like-ad", likeAdRouter);
app.use("/api/v1/ad-comment", commentAdRouter);

module.exports = app;
