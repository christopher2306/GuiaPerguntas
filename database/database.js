const Sequelize = require('sequelize');

const Connection = new Sequelize('guiaperguntas','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;