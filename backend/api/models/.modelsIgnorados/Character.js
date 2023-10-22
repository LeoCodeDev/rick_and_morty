const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Character", {
    characterId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Status',
            key: 'statusId'
        }
    },
    species:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Species',
            key: 'speciesId'
        }
    },
    gender:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Gender',
            key: 'genderId'
        }
    },
    type:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Type',
            key: 'typeId'
        }
    },
    origin:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Location',
            key: 'locationId'
        }
    },
    location:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Location',
            key: 'locationId'
        }
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://postimg.cc/Q9nTHxxb'
    },
    episode:{
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: []
    },

  }, { timeStamp: false });
};
