const Sequelize = require('sequelize');

const Connection = new Sequelize('guiaperguntas','root','Chri2306',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;