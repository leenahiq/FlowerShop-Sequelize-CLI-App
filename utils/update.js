const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");
const Price = require("../models/price.js");
const User = require("../models/users.js");
const update = async (argv) => {
  if (argv.name && argv.colour && argv.indication) {
    //creating instance

    const update = await Flower.update(
      { name: argv.name } && { colour: argv.colour } && {
          indication: argv.indication,
        },
      {
        where: {
          name: argv.name,
        },
      }
    );
    console.log(update);
  } else if (argv.eventname) {
    const update = await Event.update(
      { eventname: argv.eventname },
      {
        where: {
          eventname: argv.eventname,
        },
      }
    );
    console.log(update);
  } else if (argv.quantity && argv.price) {
    const update = await Price.update(
      { [argv.key]: [argv.newvalue] } && { [argv.key]: [argv.newvalue] },
      {
        where: {
          [argv.key]: [argv.value],
        },
      }
    );
    console.log(update);
  } else if (argv.update) {
    const update = await User.update(
      {
        username: argv.username,
        fullname: argv.fullname,

        password: argv.password,
      },

      {
        where: {
          username: argv.username,
        },
      }
    );
    console.log(update);
  } else {
    console.log("please input all fields");
  }
};

module.exports = update;
