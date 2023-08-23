const express = require('express')
const app = express()

//CORS
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HOST
const { port, start } = require('./modules/server')
app.listen(port, start())

//ROUTES
app.use(require('./routes/api.routes'))