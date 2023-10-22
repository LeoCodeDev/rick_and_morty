const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        allowNull: false,
      },
      species: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      type: {
         type: DataTypes.STRING,
         allowNull : true,
         defaultValues: ''
       },
      gender : {
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
         allowNull: false
       },
       image : {
         type : DataTypes.STRING,
         allowNull : false
       },
       location: {
         type: DataTypes.STRING, // Almacena la información de location
         allowNull: true,
       },
       origin: {
         type: DataTypes.STRING, // Almacena la información de origin
         allowNull: true,
       },
       episode: {
         type: DataTypes.ARRAY(DataTypes.STRING), // Almacena los URLs de episodes
         allowNull: true,
       },
    },
    { timestamps: false }
  );
};
