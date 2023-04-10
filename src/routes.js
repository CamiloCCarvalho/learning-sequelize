//Dependences
const express = require('express')
const routes = express.Router()

//Controllers
const PlanetController = require('../controller/PlanetController')
const SatelliteController = require('../controller/SatelliteController')
const CapController = require('../controller/CapController')
const SpaceshipController = require('../controller/SpaceshipController')

//Routes
routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id', PlanetController.delete)
routes.post('/planets/:planetId/satellites', SatelliteController.store)
routes.get('/planets/:planetId/satellites', SatelliteController.index)
routes.post('/caps', CapController.store)
routes.get('/caps', CapController.index)
routes.post('/caps/:capId/spaceships', SpaceshipController.store)
routes.get('/caps/:capId/spaceships', SpaceshipController.index)

module.exports = routes