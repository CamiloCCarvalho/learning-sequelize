//init in index.js for create a new row with new plante here describ

(async () => {
    const Planet = require('./models/planet')
    const newPlanet = await Planet.create({
        name: 'Venus',
        position: '5',
    })
    console.log(newPlanet)
})()