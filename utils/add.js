const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const add = async (argv) => {
  if (argv.name && argv.colour && argv.indication) {
    //creating instance
    const create = await Flower.create({
      name: argv.name,
      colour: argv.colour,
      indication: argv.indication,
    });
    console.log(create);
  } else if (argv.eventname) {
    const create = await Event.create({
      eventname: argv.eventname,
    });
    console.log(create);
  } else if (argv.quantity && argv.price) {
    const create = await Price.create({
      quantity: argv.quantity,
      price: argv.price,
    });
    console.log(create);
  }
  if (argv.register && argv.username && argv.fullname && argv.password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(argv.password, salt);
    //creating instance
    const create = await User.create({
      username: argv.username,
      fullname: argv.fullname,
      password: hashedPass,
    });
    console.log(create);
  } else {
    console.log("please input all fields");
  }
};

module.exports = add;
