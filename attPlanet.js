(async () => {
    const Planet = require('./models/planet')

    const updatePlanets = await Planet.findByPk(3)
    updatePlanets.name = 'Marte'
    await updatePlanets.save()
    
    console.log(updatePlanets)
})()
