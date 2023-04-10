const Planet = require('../models/planet')
const Satellite = require('../models/satellite')
const Spaceship = require('../models/spaceship')
const Cap = require('../models/cap')

/*
 * Planet.hasOne(Satellite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
 * Satellite.belongsTo(Planet, {foreignKey: 'planetId', as: 'planets'})
 */

    Planet.hasMany(Satellite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    Satellite.belongsTo(Planet, {foreignKey: 'planetId', as: 'planets'})

    Cap.belongsToMany(Spaceship, {
        foreignKey: capId,
        through: "capSpaceships",
        as: "spaceships"
    })

    Spaceship.belongsToMany(Cap, {
        foreignKey: spaceshipId,
        through: "capSpaceship",
        as: "caps"
    })

module.exports = {Planet, Satellite} 