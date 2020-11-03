const express = require("express")
const router = express.Router()
const config = require("config")

const strings = require("../model/lang/"+config.get("language")+".json")

router.get('/', (req, res, next) => {
	res.render('index', strings);
});

module.exports = router
