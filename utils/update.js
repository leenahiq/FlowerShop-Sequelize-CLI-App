const { Sequelize } = require("sequelize");

const Flower = require("../models/flower.js");
const Event = require("../models/event.js");

const User = require("../models/users.js");
const update = async (argv) => {
  if (argv.flower) {
    //creating instance

    const update = await Flower.update(
      {
        name: argv.newname,
        colour: argv.colour,
        indication: argv.indication,
        price: argv.price,
      },
      {
        where: {
          name: argv.name,
        },
      }
    );
    console.log(update);
  } else if (argv.event) {
    const update = await Event.update(
      {
        eventname: argv.neweventname,
      },
      {
        where: {
          eventname: argv.eventname,
        },
      }
    );
    console.log(update);
  } else if (argv.user) {
    const update = await User.update(
      {
        username: argv.newusername,
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
