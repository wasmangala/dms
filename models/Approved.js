
module.exports = function(sequelize, DataTypes) {
    var Approved = sequelize.define('Approved', {
        requestID:DataTypes.INTEGER,
		designation: DataTypes.ARRAY(DataTypes.TEXT),
		salary_code: DataTypes.STRING,
		grade:DataTypes.STRING,
		service_level:DataTypes.INTEGER,
		no_of_posts:DataTypes.INTEGER
        }
    );


    return Approved;
};