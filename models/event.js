const { DataTypes } = require("sequelize");

const connection = require("../connection");

const Event = connection.define(
  "Event",
  {
    eventname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    indexes: [{ unique: true, fields: ["eventname"] }],
  }
);

module.exports = Event;
