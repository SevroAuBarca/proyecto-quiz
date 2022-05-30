const bcrypt = require("bcrypt");
const UsersService = require("./service");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    const users = await UsersService.getUsers();
    res.status(200).json(users);
  },
  getUser: async (req, res) => {
    const { id } = req.params;

    const user = await UsersService.getUser(id);

    res.status(200).json(user);
  },
  postUser: async (req, res) => {
    const { body } = req;
    console.log(body);
    if (!(body.username && body.email && body.name)) {
      res.status(400).json({ message: "error, filled data" });
    }
    if (body.password.length < 3) {
      res.status(400).json({ message: "error, password is too small" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    savedUser = await UsersService.postUser(body, passwordHash);

    res.json(savedUser);
  },
  putUser: async (req, res) => {},
  deleteUser: async (req, res) => {},
};
