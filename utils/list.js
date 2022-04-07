const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const list = async (argv) => {
  if (argv) {
    //creating instance
    const list = await Flower.findAll({});
    console.log(list);
  }
  //else if (argv) {
  //     const list = await Event.list({});
  //     console.log(list);
  //   } else if (argv) {
  //     const list = await Price.list({});
  //     console.log(list);
  //   } else if (argv.eventname) {
  //     const create = await User.create({
  //       eventname: argv.eventname,
  //     });
  //     console.log(create);
  //   } else {
  //     console.log("Error try again");
  //   }
};
const listevent = async (argv) => {
  if (argv) {
    //creating instance
    const list = await Flower.findAll({});
    console.log(list);
  } else if (argv.list) {
    const list = await User.findAll();
    console.log(list);
  }
};
(module.exports = list), listevent;
