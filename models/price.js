const { DataTypes } = require("sequelize");

const connection = require("../connection");
const Flower = require("./flower");
const flower = require("./flower");
const Price = connection.define("Price", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  //   flower_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
});
Price.belongsTo(Flower);
module.exports = Price;
