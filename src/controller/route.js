const express = require("express")
const router = express.Router()

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Index' });
});

router.get('/app', (req, res, next) => {
	res.render('index', { title: 'App' });
});

router.get('/example', (req, res, next) => {
	res.render('index', { title: 'Example' });
});

module.exports = router
