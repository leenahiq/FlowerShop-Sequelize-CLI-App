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
