const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const list = async (argv) => {
  if (argv) {
    //creating instance
    try {
      const list = await Flower.findAll({
        attributes1: [argv.attributes],
      });
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  } else if (argv) {
    try {
      const list = await Event.list({
        attributes: [argv.attribute],
      });
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  } else if (argv) {
    try {
      const list = await Price.list({
        attributes: [argv.attribute],
      });
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.list) {
    try {
      const list = await User.findAll({
        attributes: [argv.attribute],
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
