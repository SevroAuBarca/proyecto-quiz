const express = require("express");

const { QuizController } = require("./controllers");

const router = express.Router();

module.exports.QuizAPI = (app) => {
  router
    .get("/", QuizController.getQuizes) //http://localhost:3000/api/users/
    .get("/:id", QuizController.getQuiz) //http://localhost:3000/api/users/id
    .post("/", QuizController.postQuizes)
    .put("/:id", QuizController.putQuizes)
    .delete("/:id", QuizController.deleteQuizes);

  app.use("/api/quiz", router);
};
