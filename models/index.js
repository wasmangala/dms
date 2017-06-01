var Sequelize = require('sequelize');
var Config = require ('./config.js');

var dbType = Config.DB.Type;
var database = Config.DB.Database;
var dbuser = Config.DB.User;
var dbpassword = Config.DB.Password;
var dbport = Config.DB.Port;
var dbhost = Config.DB.Host;

var sequelize = new Sequelize(database, dbuser, dbpassword, {
    dialect:'postgres',
    port:'5432',
    host:'localhost'
});

var models = [
    'user',
    'SalaryCode',
    'Request',
    'Recommendation',
    'MinistryDept',
    'Grade',
    'Designations',
    'Approved',
    'MainCadre',
    
    
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname +'/'+ model);
});


(function(m) {

    //--------------------- Relationships----------------------\\
        m.Request.hasOne(m.Approved, {as:"Approved", foreignKey: "requestId"});
        m.Approved.belongsTo(m.user, {as:"user", foreignKey: "userId"});

        m.Request.hasMany(m.Recommendation, {as:"Recommendation", foreignKey: "requestId"});
        m.Recommendation.belongsTo(m.Request, {as:"Request", foreignKey: "requestId"});

        m.Request.hasOne(m.MinistryDept, {as:"MinistryDept", foreignKey: "min_deptID"});
        m.Approved.belongsTo(m.Request, {as:"Request", foreignKey: "min_deptID"});

        m.user.hasMany(m.Request, {as:"Request", foreignKey: "min_deptID"});
        m.Request.belongsTo(m.user, {as:"user", foreignKey: "min_deptID"});

        m.user.hasMany(m.Recommendation, {as:"Recommendation", foreignKey: "userID"});
        m.Recommendation.belongsTo(m.user, {as:"user", foreignKey: "userID"});
        
        m.Request.belongsTo(m.MinistryDept, {as:"MinistryDept", foreignKey: "min_deptID"});
        m.MinistryDept.hasMany(m.Request, {as:"Request", foreignKey: "min_deptID"});

        m.MinistryDept.hasMany(m.MainCadre, {as:"MainCadre", foreignKey: "min_deptID"});
        m.MainCadre.belongsTo(m.MinistryDept, {as:"MinistryDept", foreignKey: "min_deptID"});

    //--------------------- Relationships----------------------\\

    
})(module.exports);


module.exports.SequelizeConn = sequelize;
