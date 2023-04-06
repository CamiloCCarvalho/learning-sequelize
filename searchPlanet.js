(async () => {
    const Planet = require('./models/planet')
//    const newPlanet = await Planet.create({
//        name: 'Venus',
//        position: '5',
//    })
//    console.log(newPlanet)

    //const seePlanets = await Planet.findAll()
    //const seePlanets = await Planet.findByPk(3)
    const seePlanets = await Planet.findAll({
        where: {
            name: 'Terra'
        }
    })
    console.log(seePlanets)
})()
