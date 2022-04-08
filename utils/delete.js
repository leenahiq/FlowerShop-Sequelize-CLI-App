const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");

const User = require("../models/users.js");
const del = async (argv) => {
  if (argv.flower) {
    //creating instance
    try {
      const del = await Flower.destroy({
        where: {
          name: argv.name,
        },
      });
      console.log(del);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.event) {
    try {
      const del = await Event.destroy({
        where: {
          eventname: argv.eventname,
        },
      });
      console.log(del);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.user) {
    try {
      const del = await User.destroy({
        where: {
          username: "argv.username",
        },
      });
      console.log(del);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("please input all fields");
  }
};

module.exports = del;
