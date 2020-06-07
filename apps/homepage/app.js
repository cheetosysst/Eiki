// ./Eiki/apps/homepage/app.js
// ========================================
// 這個檔案負責處理首頁的各項功能，功能如下
// - 簡短介紹
// - 匿名提交
// - 剩下我還再想……
// ========================================

// Library
const router = require('express').Router();

router.get('/', async (req, res, next) => {
	res.send("homepage from module");
})

module.exports = router;