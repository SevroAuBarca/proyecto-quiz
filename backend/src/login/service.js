const User = require("../models/users");

module.exports = {
  getUser: async (email) => {
    const user = await User.findOne({ email: email });
    return user;
  },
};
