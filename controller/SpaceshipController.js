const Spaceship = require('../models/spaceship')
const Cap = require('../models/cap')

module.exports = {
    async store(req, res) {
        const { capId } = req.params
        const { name, capacity } = req.body
        const cap = await Cap.findByPk(capId)
        
        if (!cap) {
            res.send("Error, this captain do not exist!")
        }
        const [spaceships] = await Spaceship.findOrCreate({
            where: { name, capacity },
        })
        await cap.addSpaceship(spaceships)
    },
    async index (req, res) {
        const {capId} = req.params

        const cap = await Cap.findByPk(capId, {
            include: [{association: "spaceships"}]
        })
        return res.json(cap)
    }
}