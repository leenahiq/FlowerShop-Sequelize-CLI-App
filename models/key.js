const Flower = require("./flower");
const Event = require("./event");

Flower.hasMany(Event);
Event.belongsTo(Flower);

//to explore asociations between
// Flower.hasMany(
//   Event,
//   {
//     //   foreignKey: {
//     // name: "flowerID",
//     onDelete: NULL,
//     onUpdate: CASCADE,
//   }
//   // }
// );
// Event.belongsTo(Flower);

module.exports = {
  Flower,
  Event,
};
