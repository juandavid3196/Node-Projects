const { Sequelize } = require("sequelize");
const User = require("./User");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const models = {
  User: User(sequelize, Sequelize.DataTypes),
};

module.exports = { sequelize, ...models };
