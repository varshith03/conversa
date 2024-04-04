const { createUser } = require("../services/user.service");

const postUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const response = await createUser(username, password);
    console.log(response);
    res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "unable to register user" });
  }
};

module.exports = { postUser };
