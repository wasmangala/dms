
module.exports = function(sequelize, DataTypes) {
    var Designations = sequelize.define('Designations', {
        designationID: {
		type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true	
	},
	designation: DataTypes.STRING,
	display: DataTypes.STRING,
        }
    );


    return Designations;
};