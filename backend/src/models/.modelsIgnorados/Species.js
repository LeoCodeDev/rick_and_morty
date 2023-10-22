const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.describe(
    "Species",
    {
      speciesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    { timeStamp: false }
  );
};
