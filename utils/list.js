const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");

const User = require("../models/users.js");
const list = async (argv) => {
  if (argv.flower) {
    //creating instance
    // console.log("flower"); for checking
    try {
      const list = await Flower.findAll({});
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.event) {
    // console.log("event");check
    try {
      const list = await Event.findAll({
        // attributes: [argv.attribute],
      });
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.user) {
    // console.log("user");
    try {
      const list = await User.findAll({
        // attributes: [argv.attribute],
      });
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("error try again");
  }
};
module.exports = list;
