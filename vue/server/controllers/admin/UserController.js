const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")


const UserController = {
    login: async (req, res) => {
        console.log(req.body)
        var result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "用户名密码不匹配"
            })
        } else {
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")

            res.header("Authorization", token)
            res.send({
                ActiveType: "OK",
                data: {
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0,
                    introduction: result[0].introduction,
                    avatar: result[0].avatar,
                    role: result[0].role
                }
            })
        }
    },

    upload: async (req, res) => {
        // console.log(req.body, req.file)
        const { username, introduction, gender } = req.body
        const token = req.headers["authorization"].split(" ")[1]
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""
        var payload = JWT.verify(token)
        // console.log(payload._id)

        await UserService.upload({
            _id: payload._id, username, introduction,
            gender: Number(gender), avatar
        })

        if (avatar) {
            res.send({
                ActiveType: "OK",
                data: {
                    username, introduction, avatar,
                    gender: Number(gender),
                }
            })
        } else {
            res.send({
                ActiveType: "OK",
                data: {
                    username, introduction,
                    gender: Number(gender),
                }
            })
        }
    },

    add: async (req, res) => {
        const { username, introduction, gender, role, password } = req.body
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""

        await UserService.add({
            username, introduction, gender: Number(gender),
            avatar, role: Number(role), password
        })

        res.send({
            ActiveType: "OK",
        })
    },

    getlist: async (req, res) => {
        const result = await UserService.getlist(req.params)
        res.send({
            ActiveType: "OK",
            data:result
        })
    },

    putlist: async (req, res) => {
        console.log("1")
        const result = await UserService.putlist(req.body)
        res.send({
            ActiveType: "OK"
        })
    },

    delList: async (req, res) => {
        console.log(req.params.id)
        
        const result = await UserService.delList({_id:req.params.id})
        console.log(result)
        res.send({
            ActiveType: "OK"
        })
    }
}

module.exports = UserController