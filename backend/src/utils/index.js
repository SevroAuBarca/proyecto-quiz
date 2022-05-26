require("dotenv").config();
const process = require("process");

const Config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  mongoDbName: process.env.MONGO_DBNAME,
  secret: process.env.SECRET,
};

module.exports = {
  Config,
};
