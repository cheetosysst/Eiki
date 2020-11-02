const express = require("express")
const router = express.Router()

require('dotenv').config()
const version = require('../../package').version;
const strings = require("../model/lang/"+process.env.LANG+".json")

router.get('/', (req, res, next) => {
	res.render('index', strings);
});

module.exports = router
