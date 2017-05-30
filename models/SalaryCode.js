
module.exports = function(sequelize, DataTypes) {
    var SalaryCode = sequelize.define('SalaryCode', {
        salary_codeID: {
		type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true	
	},
	salary_code: DataTypes.STRING,
	display: DataTypes.STRING,
        }
    );


    return SalaryCode;
};