const express = require('express')
require('dotenv').config

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {

    return res.json('API está ok')

} )

const port = process.env.PORT || 3000

app.listen(port)