const express = require("express");

const { LoginController } = require("./controllers");

const router = express.Router();

module.exports.QuizAPI = (app) => {
  router.post("/", LoginController.postLogin);

  app.use("/api/login", router);
};
