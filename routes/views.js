var express = require('express');
var router = express.Router();
const viewsControls = require("../control/views");

// 后台
//获取页面数据
router.get('/getShortViewsInfo',viewsControls.getShortViewsInfo)
//1、保存页面
router.post('/saveViews',viewsControls.saveViews)

//2、发布页面
router.post('/publishViews',viewsControls.publishViews)

//3、获取页面设置(同前台的1)
//4、保存页面修改
router.post('/setViewsInfo',viewsControls.setViewsInfo)


// 前台
//1、获取页面数据
router.get('/getViewsInfo',viewsControls.getViewsInfo)




module.exports = router;
