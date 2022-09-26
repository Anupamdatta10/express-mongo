const User = require('../User');
exports.getUsers = async () => {
    try {
        //let regx=new RegExp("^"+"sarma")
        let data = await User.find({"name": {'$regex': '.*sarma.*'}})
        console.log("data", data)
        return ({ "data": data })
    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}

exports.userCreate = async (params) => {
    try {
        let data = await User.create(params)
        return ({ "data": data, "message": "user created successfully", success: true })

    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}

exports.userUpdate = async (params) => {
    try {
        let data = await User.updateOne({ _id: params.params.id }, params.body)
        return ({ success: true })
    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}


exports.userDelete = async (params) => {
    try {
        let data = await User.deleteOne({ _id: params.id})
        return ({ success: true })
    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}