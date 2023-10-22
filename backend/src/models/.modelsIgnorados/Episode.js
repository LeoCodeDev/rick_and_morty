const {DataTypes} = require('sequelize')

module.exports = (database)=>{
    database.define('Episode',{
        episodeId:{ 
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        url : {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timeStamp:false})
}