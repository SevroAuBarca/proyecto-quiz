const express = require("express");
const { QuizAPI } = require("./src/quizes/index.js");
const { Config } = require("./src/utils/index.js");
const { mongoConnect } = require("./src/database/index");
const { UsersAPI } = require("./src/users/index.js");
const { LoginAPI } = require("./src/login/index.js");
const cors = require("cors");

const app = express();

mongoConnect();

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

QuizAPI(app);
UsersAPI(app);
LoginAPI(app);

app.listen(Config.port, () => {
  console.log(`Servidor escuchando en: ${Config.port}`);
});
