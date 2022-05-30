require("dotenv").config();
const process = require("process");

const Config = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  mongoDbName: process.env.MONGO_DBNAME,
  secret: process.env.SECRET,
};

module.exports = {
  Config,
};
