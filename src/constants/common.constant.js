const dotenv = require("dotenv");
dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const portNo = process.env.PORT_NO;

module.exports = { dbPassword, dbUsername, portNo };
