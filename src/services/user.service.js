const User = require("../models/user.model");

const createUser = async (username, password) => {
  const result = await User.create({ username, password });
  return result;
};

module.exports = { createUser };
