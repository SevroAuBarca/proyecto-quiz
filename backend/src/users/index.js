const express = require("express");

const { UsersController } = require("./controllers");

const router = express.Router();

module.exports.QuizAPI = (app) => {
  router
    .get("/", UsersController.getQUsers) //http://localhost:3000/api/users/
    .get("/:id", UsersController.getUser) //http://localhost:3000/api/users/id
    .post("/", UsersController.postUser)
    .put("/:id", UsersController.putUser)
    .delete("/:id", UsersController.deleteUser);

  app.use("/api/quiz", router);
};
