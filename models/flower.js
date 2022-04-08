const { DataTypes } = require("sequelize");

const connection = require("../connection");

const Flower = connection.define(
  "Flower",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    colour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { indexes: [{ unique: true, fields: ["name"] }] }
);

module.exports = Flower;
