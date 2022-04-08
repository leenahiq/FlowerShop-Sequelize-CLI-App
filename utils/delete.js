const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const del = async (argv) => {
  if (argv.name || argv.colour || argv.indication) {
    //creating instance
    try {
      const del = await Flower.delete({
        where: {
          name: argv.name,
          colour: argv.colour,
          indication: argv.indication,
        },
      });
      console.log(` ${del.name} is deleted `);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.eventname) {
    try {
      const del = await Event.destroy({
        where: {
          eventname: argv.eventname,
        },
      });
      console.log(` ${del.eventname} is deleted `);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.quantity || argv.price) {
    try {
      const del = await Price.destroy({
        where: {
          price: argv.price,
          quantity: argv.quantity,
        },
      });
      console.log(` ${del.price} is deleted `);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.delete) {
    try {
      const del = await User.destroy({
        where: {
          username: "argv.username",
        },
      });
      console.log(` ${del.username} is deleted `);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("please input all fields");
  }
};

module.exports = del;
