const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const add = async (argv) => {
  if (argv.name && argv.colour && argv.indication) {
    //creating instance
    try {
      const create = await Flower.create({
        name: argv.name,
        colour: argv.colour,
        indication: argv.indication,
      });
      console.log(create);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.eventname) {
    try {
      const create = await Event.create({
        eventname: argv.eventname,
      });
      console.log(create);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.quantity && argv.price) {
    try {
      const create = await Price.create({
        quantity: argv.quantity,
        price: argv.price,
      });
      console.log(create);
    } catch (error) {
      console.log(error);
    }
  } else if (argv.register && argv.username && argv.fullname && argv.password) {
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
