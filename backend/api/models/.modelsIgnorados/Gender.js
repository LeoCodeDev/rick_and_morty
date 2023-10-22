const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Gender",
    {
      genderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.ENUM(["male", "female", "unknown", "genderless"]),
        allowNull: false
      },
    },
    {
      timeStamp: false,
    }
  );
};
