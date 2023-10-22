const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Location",
    {
      locationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      type : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      population : {
        
      },
      characters : {
        
      }
    },
    {
      timeStamp: false,
    }
  );
};
