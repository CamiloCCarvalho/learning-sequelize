const Planet = require('../models/planet')
const Satellite = require('../models/satellite')

Planet.hasOne(Satellite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Satellite.belongsTo(Planet, {foreignKey: 'planetId', as: 'planets'})

module.exports = {Planet, Satellite}