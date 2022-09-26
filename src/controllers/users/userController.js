
const userModel = require('../../models/queryModels/users')

exports.userList = async (req, res) => {
    try {
        let data = await userModel.getUsers()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

exports.createUser = async (req, res) => {
    try {
        let data = await userModel.userCreate(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        let data = await userModel.userUpdate(req)
        res.send(data)
    } catch (error) {
        res.send(error)
    }

}

exports.deleteUser = async (req, res) => {
    try {
        let data = await userModel.userDelete(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}