const User = require("../models/users");
const Quiz = require("../models/quizes");

module.exports = {
  getQuizes: async () => {
    const response = await Quiz.find().populate("users");
    return response;
  },
  getQuiz: async (id) => {},
  postQuizes: async (data, decodedToken) => {
    const user = await User.findById(decodedToken.id);

    const quiz = new Quiz({
      categoryQuiz: data.category,
      dificult: data.difficulty,
      firstAttempDate: data.firstAttemp,
      quizData: data.quizData,
      firstAttempScore: data.firstAttempScore,
      othersAttempsScore: data?.othersAttempsScore ?? [],
      users: user._id,
    });

    const result = await quiz.save();
    user.quizes = [...user.quizes, result._id];
    await user.save();

    return result;
  },
  putQuizes: async (id, data) => {},
  deleteQuizes: async (id) => {},
};
