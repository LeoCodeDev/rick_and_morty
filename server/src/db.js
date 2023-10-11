require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PRODUCTION_DB} = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const database = new Sequelize(
  PRODUCTION_DB,
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
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