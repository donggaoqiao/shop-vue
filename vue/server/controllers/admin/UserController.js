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
                _id:result._id,
                username:result[0].username
            },"1d")

            res.header("Authorization",token)
            res.send({
                ActiveType:"OK"
            })
        }
    }
}

module.exports = UserController