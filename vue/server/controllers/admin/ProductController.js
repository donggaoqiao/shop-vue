const ProductService = require("../../services/admin/ProductService")


const ProductController = {
    add: async (req, res) => {
        const { title, introduction, detail } = req.body
        const cover = req.file ? `/productuploads/${req.file.filename}` : ""
        // console.log(cover)
        await ProductService.add({
            title, introduction, detail,
            cover, editTime: new Date()
        })

        res.send({
            ActiveType: "OK",
        })
    },

    getlist: async (req, res) => {
        const result = await ProductService.getlist({ _id: req.params.id })
        // console.log(result)
        res.send({
            ActiveType: "OK",
            data: result
        })
    },

    updateList: async (req, res) => {
        const { title, introduction, detail, _id } = req.body
        const cover = req.file ? `/productuploads/${req.file.filename}` : ""
        await ProductService.updateList({
            _id, title, introduction, detail,
            cover, editTime: new Date()
        })

        res.send({
            ActiveType: "OK"
        })
    },

    delList: async (req, res) => {
        await ProductService.delList({ _id: req.params.id })

        res.send({
            ActiveType: "OK"
        })
    },
}

module.exports = ProductController