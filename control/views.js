const views = require("../models/views.js");//发布的表
const shortViews = require("../models/shortViews.js");//暂存的表

const moment = require('moment');

let viewsControl ={
    //获取页面数据
    async getShortViewsInfo (req, res){
      try {
        const findRes = await shortViews.find({"projectId":+req.query.projectId});
        if(findRes) {
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
            message: "操作失败",
            data: null
          });
        }
      } catch (error) {
          throw error
      }
    },
    //1.保存页面
    async saveViews (req, res){
      let successResult = {
        state: 1,
        code: 0,
        message: "查询成功",
        data: null
      };
      let errResult = {
        state: 2,
        code: 1,
        message: "操作失败",
        data: null
      };
      //保存
      try {
        let updateTime = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
        let newObj = {};
        newObj.updateTime= updateTime;
        Object.keys(req.body).map((value,index)=>{
          newObj[value]=req.body[value];
        })
        // 另外，终端的输出{ n: 1, nModified: 1, ok: 1 }的意思是：
        // “n: 1”：查询到1条记录。
        // “nModified: 1”：需要修改1条记录。（如果修改值和原始值相同，则需要修改的就是0条）
        // “ok: 1”：修改成功1条。
        const findRes = await shortViews.updateOne(
          {projectId:+req.body.projectId},
          {...newObj});
        if(findRes.ok===1&&findRes.n===1) {
          res.json(successResult);
        } else {
          res.json(errResult);
        }
      } catch (error) {
          res.json(errResult);
          throw error
      }
    },
    //2.预览
    //3.发布
    async publishViews (req,res) {
      let projectId = req.body.projectId;
      try {
        const findRes = await shortViews.find({"projectId":projectId});
        console.log(findRes)
        if(findRes) {
          const updateRes = await views.updateOne({"projectId":projectId},{content:findRes[0].content});
          if(updateRes.ok===1&&updateRes.n===1) {
            res.json({
              state: 1,
              code: 0,
              message: "发布成功！",
              data: ""
            });
          } else {
            res.json({
              state: 1,
              code: 1,
              message: "发布失败",
              data: ""
            });
          }
          
        } else {
          res.json({
            state: 2,
            code: 1,
            message: "操作失败",
            data: null
          });
        }
      } catch (error) {
          throw error
      }
    },
    //4、保存页面设置
    async setViewsInfo (req,res) {
      console.log(req.body)
      try {
        const findRes = await views.updateOne({"projectId":+req.body.projectId},{
          title:req.body.title,
          viewsKey:req.body.viewsKey
        });
        if(findRes) {
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
            message: "操作失败",
            data: null
          });
        }
      } catch (error) {
          throw error
      }
    },

  // 前台
    // 1、获取页面数据
    async getViewsInfo (req, res){
      console.log(req.query.projectId)
      try {
        const findRes = await views.find({"projectId":+req.query.projectId});
        if(findRes) {
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
            message: "操作失败",
            data: null
          });
        }
      } catch (error) {
          throw error
      }
    }
    
}
module.exports = viewsControl;
