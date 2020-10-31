// src/app.js

const express = require('express')
const app = express()
const path = require('path');
const route = require('./controller/route')
const error = require('./controller/error')

app.set('views', path.join(__dirname, 'view'));

require('dotenv').config()
const port = process.env.port || 3000
const siteName = process.env.name
const version = require('../package').version;

app.set('view engine', 'ejs')
app.use(express.static('src/public'));
app.use(route)
app.use(error)

app.get('/', (req, res) => res.render('index.ejs'))
app.listen(port, () => console.log(`Eiki is now listening on port %d`, port))