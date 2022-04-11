# FlowerShop-Sequelize-CLI-App

//Create empty package
npm -y init

//Essential node Module
npm install sequelize mysql2 yargs dotenv bcrypt

//Add method for Flower, Event, User models
npm start -- --add --flower --name "rose" --colour "red" --indication "love" --price 10
npm start -- --add --event --eventname "birthday"
npm start -- --add --user --username "lilly" --fullname "lilly jones" --password "password"

//list method for Flower, Event, User models
npm start -- --list --flower
npm start -- --list --event
npm start -- --list --user

//delet method for Flower, Event, User models
npm start -- --delete --flower --name "rose"
npm start -- --delete --flower --eventname "birthday"
npm start -- --delete --flower --username "lilly"

//update method for Flower, Event, User models 
// update compelete row
npm start -- --flower --update --name "defodils" --newname "lilly" --colour "white" --indication "likeness" --price 10
npm start -- --flower --update --eventname "birthday" --neweventname "wedding"
npm start -- --flower --update --username "lilly" --newname "lala" --fullname "lala jones" --password "password" --price 10
 //update one in row
 npm start -- --flower --update --name "defodils" --newname "lilly" // or --colour "new value" or --indication "new value" or --price "new value"
 npm start -- --flower --update --eventname "birthday" --neweventname "wedding"
 npm start -- --flower --update --username "lilly" --newname "lala" or --fullname " new value" or --password "new value "



//keys
Flower.hasMany(Event);
Event.belongsto(Flower);

