const ProductModel = require("../../models/ProductModel")

const ProductService = {
    add: async ({ title, introduction, detail, cover, editTime }) => {
        return ProductModel.create({
            title, introduction, detail, cover, editTime
        })
    },

    getlist: async ({ _id }) => {
        return _id ? ProductModel.find({ _id }) : ProductModel.find({})
    },

    updateList: async ({ title, introduction, detail, _id, cover, editTime }) => {
        if (cover) {
            return ProductModel.updateOne({ _id }, {
                title, introduction, detail, editTime, cover
            })
        } else {
            return ProductModel.updateOne({ _id }, {
                title, introduction, detail, editTime
            })
        }
    },

    delList: async ({ _id }) => {
        return ProductModel.deleteOne({ _id })
    }
}

module.exports = ProductService