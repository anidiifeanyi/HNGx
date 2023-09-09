const express = require('express')
const { json } = require('express')
const routes = require('./src/route/routes')
const bodyparser = require('body-parser')
const app = express()

// use json
app.use(json())

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set routes
app.use('/', routes)

// port
const PORT = 1990

app.listen(PORT, () => console.log(`Serving on port ${PORT}`))
