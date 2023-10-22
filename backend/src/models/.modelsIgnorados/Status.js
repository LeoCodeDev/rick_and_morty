const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Status",
    {
      statusId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.ENUM(["live", "Dead", "unknown"]),
        allowNull: false
      },
    },
    {
      timeStamp: false,
    }
  );
};