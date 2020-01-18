var express = require('express');
var router = express.Router();
const user = require("../models/user.js");


/* GET home page. */
router.get('/', async (req, res, next)=> {
  try {
    const findRes = await user.find()
    console.log(findRes);
    res.json({
        state: 1,
        code: 0,
        message: "查询成功",
        data: findRes[0]
      });
} catch (error) {
   throw error
}

});

module.exports = router;
