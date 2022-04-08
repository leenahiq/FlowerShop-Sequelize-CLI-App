require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_Round);
// import files
const connection = require("./connection");
const Flower = require("./models/flower");
const Event = require("./models/event");
const Price = require("./models/price");
const User = require("./models/users");

const add = require("./utils/add");
const list = require("./utils/list");
// const listevent = require("./utils/list");
const del = require("./utils/delete");
const update = require("./utils/update");

// console.log(connection); checked for connection

// const main = async () => {
//   console.log("hello world"); main function is working
// };
// main();

const main = async (argv) => {
  //to alter flower table
  await Flower.sync({ alter: true });
  // npm start -- --add --name "rose" --colour "red" --indication "love"
  // add to flower table
  if (argv.add) {
    await add(argv);
  }
  //   //list all rows in table as object
  //npm start -- --list --attribute "name" "colour" "indication"
  else if (argv.list) {
    await list(argv);
  }
  //   //delete
  //npm start -- --delete --name "rose"
  else if (argv.del) {
    await del(argv);
  }
  // update
  else if (argv.update) {
    await update(argv);
  }

  //alter to event table
  await Event.sync({ alter: true });
  // add to  table
  //npm start -- --add --eventname "Weddings"

  if (argv.add) {
    await add(argv);
  }
  //   //list all rows in table as object
  else if (argv.listevent) {
    await listevent(argv);
  }
  //delete
  else if (argv.del) {
    await del(argv);
  }
  //  update
  else if (argv.update) {
    await update(argv);
  }

  // alter price table
  await Price.sync({ alter: true });
  //   // add to table
  // npm start -- --add --quantity 1 --price 5
  if (argv.add) {
    await add(argv);
  }
  //   //list all rows in table as object
  else if (argv.listprice) {
    await list(argv);
  }
  //  /delete
  else if (argv.del) {
    await del(argv);
  }
  //  update
  else if (argv.update) {
    await update(argv);
  }
  //  alter User table
  await User.sync({ alter: true });
  //   add to table
  if (argv.add) {
    await add(argv);
  }
  //   list all rows in table as object
  else if (argv.list) {
    await list(argv);
  }
  //  delete
  else if (argv.del) {
    await del(argv);
  }
  //    update
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
