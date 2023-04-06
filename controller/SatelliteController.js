const Satellite = require('../models/satellite')
const Planet = require('../models/planet')

module.exports = {
    async store (req, res) {
        const {planetId} = req.params.id
        const {name, serial_number} = req.body

        const planet = await Planet.findByPk(planetId)

        if (!planet) {
            res.send('Esse planeta não existe')
        }
        const satellite = await Satellite.create({name, serial_number, planetId})
        return res.json(satellite)
    },
    async index (req, res) {
        const {planetId} = req.params.id

        if(!planetId) {
            res.send('Esse Planeta não existe')
        }
        const planet = await Planet.findByPk(planetId, {
            include: Satellite
        })
        return res.json(planet)
    }
}