const ProductController = require('../../controllers/web/ProductController')

var express = require('express')
var ProductRouter = express.Router()

ProductRouter.get("/webapi/product/list",ProductController.getList)

module.exports = ProductRouter