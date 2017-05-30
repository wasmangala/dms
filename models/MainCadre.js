
module.exports = function(sequelize, DataTypes) {
    var MainCadre = sequelize.define('MainCadre', {
    min_deptID: DataTypes.INTEGER,
	designation: DataTypes.STRING,
	salary_code:DataTypes.STRING,
	service_level: DataTypes.INTEGER,
	grade: DataTypes.STRING,
	noofposts:DataTypes.INTEGER
        }
    );


    return MainCadre;
};