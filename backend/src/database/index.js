const mongoose = require("mongoose");
const { Config } = require("../utils/index.js");

module.exports.mongoConnect = () =>
  mongoose
    .connect(Config.mongoURL)
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch(({ message }) => {
      console.log("error connecting to MongoDB:", message);
    });
