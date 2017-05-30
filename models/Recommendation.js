
module.exports = function(sequelize, DataTypes) {
    var Recommendation = sequelize.define('Recommendation', {
    requestID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
	recommendation: DataTypes.TEXT
        }
    );


    return Recommendation;
};