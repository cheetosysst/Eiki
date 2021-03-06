// src/app.js

const express = require('express')
const app = express()
const path = require('path');
const config = require("config")
const route = require('./controller/route')
const error = require('./controller/error')

app.set('views', path.join(__dirname, 'view'));

const port = config.get("port") || 3000

app.set('view engine', 'ejs')
app.use(function(req, res, next) {
	console.log(req.method, req.protocol+"://"+config.get("base_url")+req.url)
	next()
})
app.use(express.static('src/public'));
app.use(route)
app.use(error)

app.get('/', (req, res) => res.render('index.ejs'))
app.listen(port, () => console.log(`Eiki is now listening on port %d`, port))