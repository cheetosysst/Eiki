// src/app.js

const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.port || 3000
const siteName = process.env.name
const version = require('../package').version;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Eiki is now listening on port %d`, port))