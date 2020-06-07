// ./Index.js
// ========================================
// 程式的進入點，負責管理各個模組。請勿在這寫
// 細節功能，將細節功能寫到別的地方再引入。
// ========================================

// Library
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8086;
require('dotenv').config();

// Router 
const homepage = require("./apps/homepage/app.js")

// 	Print method on console
router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

// Homepage : 如題，是首頁
router.get("/", homepage);

// API
router.get("/api", function(req, res) {
	res.send('api placeholder');
});

// submit : 提交頁
router.get("/submit", function(req, res) {
	res.send("submit placeholder");
});

// Login : 登入頁
router.get("/login", function(req, res) {
	res.send("login placeholder");
});

// About : 關於頁，目前只會引導到 Github
router.get("/about", function(req, res) {
	res.send("about placeholder");
});

// Github : 引導到 Github
router.get("/github", function(req, res) {
	res.redirect("https://github.com/cheetosysst/eiki")
});

// Public : 用來提供靜態內容，像是 icon
app.use(express.static("public"));

// Port : 聽 Port 哭的聲音
app.use("/", router);
app.listen(port);