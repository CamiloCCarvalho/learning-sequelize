const Satellite = require('../models/satellite')
const Planet = require('../models/planet')

module.exports = {
    async store (req, res) {
        const {planetId} = req.params
        const {name, serial_number} = req.body

        const planet = await Planet.findByPk(planetId)

        if (!planet) {
            res.send('Esse planeta não existe')
        }
        const satellite = await Satellite.create({name, serial_number, planetId})
        return res.json(satellite)
    },
    async index (req, res) {
        const {planetId} = await req.params

        if(!planetId) {
            res.send(`Esse planeta ${planetId} não existe`)
        }
        const satellite = await Satellite.findAll({
            where: {
                planetId: planetId
            }
        })
        const planet = await Planet.findByPk(planetId)
        return res.json({planet, satellite}) 
    }
}