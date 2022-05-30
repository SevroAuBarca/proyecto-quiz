const express = require("express");

const { LoginController } = require("./controller");

const router = express.Router();

module.exports.LoginAPI = (app) => {
  router.post("/", LoginController.postLogin);

  app.use("/api/login", router);
};
