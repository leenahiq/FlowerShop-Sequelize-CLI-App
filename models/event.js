const { DataTypes } = require("sequelize");

const connection = require("../connection");
const Flower = require("./flower");
const Event = connection.define("Event", {
  eventname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
Event.belongsTo(Flower);
module.exports = Event;
