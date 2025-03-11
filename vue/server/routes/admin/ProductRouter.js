const ProductController = require("../../controllers/admin/ProductController")

var express = require('express');
var ProductRouter = express.Router();

const multer = require('multer')
const upload = multer({dest:'public/productuploads/'})

ProductRouter.post("/adminapi/product/add",upload.single('file'),ProductController.add)
ProductRouter.get("/adminapi/product/list",ProductController.getlist)
ProductRouter.get("/adminapi/product/list/:id",ProductController.getlist)

ProductRouter.post("/adminapi/product/list",upload.single('file'),ProductController.updateList)
ProductRouter.delete("/adminapi/product/list/:id",ProductController.delList)

module.exports = ProductRouter;