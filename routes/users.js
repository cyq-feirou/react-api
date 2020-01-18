var express = require('express');
var router = express.Router();
// const user = require("../models/user.js");
const userControls = require("../control/user");

//用户接口模块

//1、用户登录
router.post('/checkLogin',userControls.checkLogin)

//2、用户注册
router.post('/register',userControls.register)


module.exports = router;
