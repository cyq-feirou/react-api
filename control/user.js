const user = require("../models/user.js");
let userControl ={
    //1.登录
    async checkLogin (req, res){
        console.log(req.body)
        try {
            const findRes2 = await user.find();
            console.log(findRes2)
            const findRes = await user.find({"name":req.body.loginName,"password":req.body.password})
            console.log(findRes);
            if(findRes.length) {
                res.json({
                state: 1,
                code: 0,
                message: "查询成功",
                data: findRes[0]
                });
            } else {
                res.json({
                state: 2,
                code: 1,
                message: "用户不存在或者密码错误",
                data: null
                });
            }
            
        } catch (error) {
            res.json({
            state: 3,
            code: 2,
            message: "操作失败",
            data: null
            });
            throw error
        }
    },
    //2.注册
    async register (req,res){
        try {
            const hasRes = await user.find({"email":req.body.email})
            if(hasRes.length) {
                console.log(hasRes)
                res.json({
                    state: 1,
                    code: 1,
                    message: "用户已存在",
                    data: null
                });
                return false;
            }
            const findRes = await user.create({"email":req.body.email,"name":req.body.loginName,"password":req.body.password})
            console.log(findRes);
            if(findRes) {
              res.json({
                state: 1,
                code: 0,
                message: "注册成功",
                data: null
              });
            } else {
              res.json({
                state: 2,
                code: 1,
                message: "注册失败",
                data: null
              });
            }
        } catch (error) {
          res.json({
            state: 3,
            code: 2,
            message: "操作失败",
            data: null
          });
           throw error
        }
    }
}
module.exports = userControl;
