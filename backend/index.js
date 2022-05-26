const express = require("express");
const { QuizAPI } = require("./src/quizes/index.js");
const { Config } = require("./src/utils/index.js");
const { mongoConnect } = require("./src/database/index");
const app = express();

mongoConnect();

app.use(express.json());

QuizAPI(app);

app.listen(Config.port, () => {
  console.log(`Servidor escuchando en: ${Config.port}`);
});
