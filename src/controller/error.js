const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
	res.render('error', { title: 'Error', errorCode: "404", errorMessage: "Not found"});
});

module.exports = router
