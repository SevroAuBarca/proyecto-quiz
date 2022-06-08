const jwt = require("jsonwebtoken");
const QuizService = require("./services");
const User = require("../models/users");
const Quiz = require("../models/quizes");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

module.exports.QuizController = {
  getQuizes: async (req, res) => {
    const data = await QuizService.getQuizes();
    res.json(data);
  },
  getQuiz: async (req, res) => {},
  postQuizes: async (req, res) => {
    const data = req.body;
    console.log(data);
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    const newQuiz = await QuizService.postQuizes(data, decodedToken);

    res.json(newQuiz);
  },
  putQuizes: async (req, res) => {},
  deleteQuizes: async (req, res) => {},
};
