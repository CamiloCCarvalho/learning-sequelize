const express = require('express')
const routes = require('./routes')
require('../config/associations')


const app = express()
app.use(express.json())
app.use(routes)


app.listen(3000, () => {
    console.log("SERVER-UP | PORT:3000")
}) 