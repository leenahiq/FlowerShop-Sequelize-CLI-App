const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const del = async (argv) => {
  if (argv.name || argv.colour || argv.indication) {
    //creating instance
    const del = await Flower.delete({
      where: {
        name: argv.name,
        colour: argv.colour,
        indication: argv.indication,
      },
    });
    console.log(` ${del.name} is deleted `);
  } else if (argv.eventname) {
    const del = await Event.destroy({
      where: {
        eventname: argv.eventname,
      },
    });
    console.log(` ${del.eventname} is deleted `);
  } else if (argv.quantity || argv.price) {
    const del = await Price.destroy({
      where: {
        price: argv.price,
        quantity: argv.quantity,
      },
    });
    console.log(` ${del.price} is deleted `);
  } else if (argv.delete) {
    const del = await User.destroy({
      where: {
        username: "argv.username",
      },
    });
    console.log(` ${del.username} is deleted `);
  } else {
    console.log("please input all fields");
  }
};

module.exports = del;
