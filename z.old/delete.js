(async () => {
    const Planet = require('../models/planet')
    const deletePlanets = await Planet.findByPk(4)

    console.log(deletePlanets)
    await deletePlanets.destroy()
})()
