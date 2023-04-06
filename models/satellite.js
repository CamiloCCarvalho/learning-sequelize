const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

//informando em que tabela vai ser feito alteração
const Satellite = sequelize.define('satellites', {
    name: DataTypes.STRING,
    serial_number: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER,
})

module.exports = Satellite