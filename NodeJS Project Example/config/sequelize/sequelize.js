const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-s20865', 'root', 'root',{
    dialect: 'mysql',
    host: 'localhost',
    port: '30002'
});

module.exports = sequelize;