const personalDetailsModel=require('../../models/queryModels/usersPersonalDetails')

exports.createUsersPersonalDetails = async (req, res) => {
    try {
        let data = await personalDetailsModel.personalDetailsModel(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

exports.UsersPersonalDetailslist =async(req, res)=>{
    try {
        let data = await personalDetailsModel.UsersPersonalDetailslist(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}