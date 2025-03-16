const NewsService = require("../../services/web/NewsService")


const NewsController = {
    getlist: async (req, res) => {
        const result = await NewsService.getlist({ _id: req.params.id })
        res.send({
            ActiveType: "OK",
            data: result
        })
    },

    getToplist: async (req, res) => {
        const result = await NewsService.getToplist({ limit: req.query.limit })
        res.send({
            ActiveType: "OK",
            data: result
        })
    }
}

module.exports = NewsController