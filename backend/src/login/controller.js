const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const LoginService = require("./service");
const { Config } = require("../utils");

module.exports.LoginController = {
  postLogin: async (req, res) => {
    const { email, password } = req.body;

    const user = await LoginService.getUser(email); // aya
    console.log(user);
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: "invalid username or password",
      });
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, Config.secret);

    res.status(200).send({
      token,
      id: user._id,
      username: user.username,
      email: user.email,
      name: user.name,
    });
  },
};
