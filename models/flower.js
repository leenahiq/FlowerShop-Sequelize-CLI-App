const { DataTypes } = require("sequelize");

const connection = require("../connection");

const Flower = connection.define("Flower", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  colour: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  indication: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Flower;
