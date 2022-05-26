const mongoose = require("mongoose");
const { MONGO_URL } = require("../utils/index.js");

module.exports.mongoConnect = () =>
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch(({ message }) => {
      console.log("error connecting to MongoDB:", message);
    });
