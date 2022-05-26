const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const QuizSchema = new Schema({
  firstAttempDate: { type: Date },
  quizData: { type: Object },
  firstAttempScore: { type: Number },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

blogSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Quiz", QuizSchema);
