const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_Round);
const Flower = require("../models/flower.js");
const Event = require("../models/event.js");

const User = require("../models/users.js");
const add = async (argv) => {
  if (argv.flower) {
    //creating instance
    try {
      const flower = await Flower.create({
        name: argv.name,
        colour: argv.colour,
        indication: argv.indication,
        price: argv.price,
      });
      console.log(flower);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.event) {
    try {
      const create = await Event.create({
        eventname: argv.eventname,
      });
      console.log(create);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.user) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPass = await bcrypt.hash(argv.password, salt);
      //creating instance
      const create = await User.create({
        username: argv.username,
        fullname: argv.fullname,
        password: hashedPass,
      });
      console.log(create);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("please input all fields");
  }
};

module.exports = add;
