
module.exports = function(sequelize, DataTypes) {
    var MinistryDept = sequelize.define('MinistryDept', {
	min_deptID: {
		type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true	
	},
	ministry: DataTypes.STRING,
    department: DataTypes.STRING
        }
    );


    return MinistryDept;
};