require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, POSTGRES_URL} = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");
console.log({ DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, POSTGRES_URL})
const database = new Sequelize(
  // POSTGRES_URL,
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, 
    native: false,
    dialectOptions: {
      ssl : {
        rejectUnauthorized: false
      }
    }
   }
);

FavoriteModel(database);
UserModel(database);

const {User, Favorite} = database.models

User.belongsToMany(Favorite,{through: 'user_favorite'})
Favorite.belongsToMany(User,{through: 'user_favorite'})

module.exports = {
    User, 
    Favorite,
    conn : database
}