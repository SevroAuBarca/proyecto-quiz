const User = require("../models/users");

module.exports = {
  getUsers: async () => {
    const data = await User.find().populate();
    return data;
  },
  getUser: async (id) => {
    const user = await User.findById(id).populate("quizes");
    return user;
  },
  postUser: async ({ username, email, name }, passwordHash) => {
    const user = new User({
      username: username,
      email: email,
      name: name,
      passwordHash,
    });

    const savedUser = await user.save();

    return savedUser;
  },
  putUsers: async (id, data) => {},
  deleteUsers: async (id) => {},
};
