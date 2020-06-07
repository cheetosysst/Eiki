// ./Index.js
// ========================================
// 程式的進入點，負責管理各個模組。請勿在這寫
// 細節功能，將細節功能寫到別的地方再引入。
// ========================================

// Library
const express 	= require('express');
const app 		= express();
const router 	= express.Router();
const port    = process.env.PORT || 8086;
require('dotenv').config();

// Router 

// 	Print method on console
router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

// Homepage : 如題，是首頁
router.get("/", function(req, res) {
	res.send('home page!');
});

// About : 關於頁，目前只會引導到 Github
router.get("/about", function(req, res) {
	res.redirect(301, "https://github.com/cheetosysst/Eiki")
});

// Github : 引導到 Github
router.get("/github", function(req, res) {
	res.redirect(301, "https://github.com/cheetosysst/Eiki")
});

// Public : 用來提供靜態內容，像是 icon
app.use(express.static("public"));

// Port : 聽 Port 哭的聲音
app.use("/", router);
app.listen(port);