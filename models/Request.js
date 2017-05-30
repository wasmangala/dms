
module.exports = function(sequelize, DataTypes) {
    var Request = sequelize.define('Request', {
        requestID: {
		type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true	
	},
	request: DataTypes.STRING,
	type: DataTypes.ENUM('New','Suppress','Modifiy'),
	designation: DataTypes.STRING,
	salary_code: DataTypes.STRING,
	service_level:DataTypes.INTEGER,
	grade:DataTypes.STRING,
	noofposts:DataTypes.INTEGER,
	min_deptID:DataTypes.INTEGER,
	created: DataTypes.DATE,
	modified: DataTypes.DATE
        }
    );


    return Request;
};