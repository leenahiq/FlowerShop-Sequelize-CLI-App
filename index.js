require("dotenv").config();
//import dependencies
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_Round);
// import connection
const connection = require("./connection");
//import models
const Flower = require("./models/flower");
const Event = require("./models/event");

const User = require("./models/users");

//imort utils
const add = require("./utils/add");
const list = require("./utils/list");
const del = require("./utils/delete");
const update = require("./utils/update");

// console.log(connection); checked for connection

// const main = async () => {
//   console.log("hello world"); main function is working
// };
// main();

const main = async (argv) => {
  //to alter all table
  await Flower.sync({ alter: true });
  await Event.sync({ alter: true });
  await User.sync({ alter: true });

  // npm start -- --add --flower --name "rose" --colour "red" --indication "love" --price
  // add to flower table
  if (argv.add) {
    await add(argv);
  }
  //   //list all rows in table as object
  //npm start -- --list --flower
  else if (argv.list) {
    await list(argv);
  }
  //   //delete
  //npm start -- --delete --flower --name "rose"
  else if (argv.del) {
    await del(argv);
  }
  // update
  //npm start -- --flower --update --name "defodils" --colour "white" --indication "likeness" --price 10
  else if (argv.update) {
    await update(argv);
  } else if (argv.getuser && argv.username && argv.password) {
    const user = await User.findOne({ where: { username: argv.username } });
    if (!user) {
      console.log("Invalid user");
    }
    const matched = await bcrypt.compare(argv.password, user.password);
    if (matched) {
      console.log(`${user.fullname} has logged in`);
    } else {
      console.log("Password is incorrect");
    }
  }
};
main(argv);
