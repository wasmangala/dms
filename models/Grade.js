
module.exports = function(sequelize, DataTypes) {
    var Grade = sequelize.define('Grade', {
        GradeID: {
		type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true	
	},
	grade: DataTypes.STRING
        }
    );


    return Grade;
};