const { DataTypes } = require("sequelize");

const connection = require("../connection");
const Flower = require("./flower");
const Event = connection.define("Event", {
  eventname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  //   flower_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
});
Event.belongsTo(Flower);
module.exports = Event;
