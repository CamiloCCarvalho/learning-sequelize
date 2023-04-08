const express = require('express')
const routes = express.Router()
const PlanetController = require('../controller/PlanetController')
const SatelliteController = require('../controller/SatelliteController')

//Rotas
routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id', PlanetController.delete)

//Rota com associação do Satellite -> Planet
routes.post('/planets/:planetId/satellites', SatelliteController.store)
routes.get('/planets/:planetId/satellites', SatelliteController.index)

module.exports = routes