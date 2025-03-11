const NewsController = require("../../controllers/admin/NewsController")

var express = require('express');
var NewsRouter = express.Router();

const multer = require('multer')
const upload = multer({dest:'public/newsuploads/'})

NewsRouter.post("/adminapi/news/add",upload.single('file'),NewsController.add)
NewsRouter.get("/adminapi/news/list",NewsController.getlist)

NewsRouter.get("/adminapi/news/userlist/:username",NewsController.userlist)

NewsRouter.post("/adminapi/news/list",upload.single('file'),NewsController.updateList)
NewsRouter.get("/adminapi/news/list/:id",NewsController.getlist)

NewsRouter.put("/adminapi/news/publish",NewsController.publish)
NewsRouter.delete("/adminapi/news/list/:id",NewsController.delList)


module.exports = NewsRouter;
