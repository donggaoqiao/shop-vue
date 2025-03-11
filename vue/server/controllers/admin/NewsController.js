const NewsService = require("../../services/admin/NewsService")


const NewsController = {
    add: async (req, res) => {
        const { title, content, category, isPublish } = req.body
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""

        await NewsService.add({
            title, content, category: Number(category), 
            cover, isPublish: Number(isPublish), editTime: new Date()
        })

        res.send({
            ActiveType: "OK",
        })
    },

    updateList: async (req, res) => {
        const { title, content, category, isPublish, _id } = req.body
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""

        await NewsService.updateList({
            _id, title, content, category: Number(category),
            cover, isPublish: Number(isPublish), editTime: new Date()
        })

        res.send({
            ActiveType: "OK",
        })
    },

    getlist: async (req, res) => {
        const result = await NewsService.getlist({ _id: req.params.id })
        res.send({
            ActiveType: "OK",
            data: result
        })
    },

    userlist: async (req, res) => {
        // console.log(req.params)
        const result = await NewsService.userlist({ username: req.params.username })
        res.send({
            ActiveType: "OK",
            data: result
        })
    },

    publish: async (req, res) => {
        await NewsService.publish({ ...req.body, editTime: new Date() })
        res.send({
            ActiveType: "OK"
        })
    },

    delList: async (req, res) => {
        await NewsService.delList({ _id: req.params.id })
        res.send({
            ActiveType: "OK"
        })
    },
}

module.exports = NewsController