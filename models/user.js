var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
        user_name: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        min_deptID:DataTypes.STRING
        }
    );


    return User;
};