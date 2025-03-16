const NewsController = require("../../controllers/web/NewsController")

var express = require('express');
var NewsRouter = express.Router();

NewsRouter.get("/webapi/news/list",NewsController.getlist)
NewsRouter.get("/webapi/news/list/:id",NewsController.getlist)
NewsRouter.get("/webapi/news/toplist",NewsController.getToplist)

module.exports = NewsRouter;