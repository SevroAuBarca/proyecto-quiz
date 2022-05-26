const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, maxlength: 25, required: true },
  username: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  name: { type: String, unique: false, minlength: 3, required: true },
  passwordHash: String,
  quizes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator, { message: "{VALUE} to be unique" });

module.exports = mongoose.model("User", userSchema);
