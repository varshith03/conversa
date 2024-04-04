const { dbPassword, dbUsername } = require("../constants/common.constant");
const mongoose = require("mongoose");

const establishConnection = async () => {
  const connectionUrl = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.gvxj3vr.mongodb.net/conversa-chat-db?retryWrites=true&w=majority`;
  const connection = await mongoose.connect(connectionUrl);
  return connection;
};

module.exports = establishConnection;
