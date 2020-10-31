// src/app.js

const express = require('express')
const app = express()
const path = require('path');
app.set('views', path.join(__dirname, 'view'));

require('dotenv').config()
const port = process.env.port || 3000
const siteName = process.env.name
const version = require('../package').version;

app.get('/', (req, res) => res.render('index.ejs'))
app.listen(port, () => console.log(`Eiki is now listening on port %d`, port))