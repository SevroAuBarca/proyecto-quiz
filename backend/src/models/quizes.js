const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const QuizSchema = new Schema({
  categoryQuiz: { type: String, required: true },
  dificult: { type: String, required: true },
  firstAttempDate: { type: String, unique: false },
  quizData: [{ type: Array }],
  firstAttempScore: { type: Number },
  othersAttempsScore: [{ type: Object, required: false }],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

QuizSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
