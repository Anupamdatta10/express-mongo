const userPersonalDetailsRelationModel=require('../../models/queryModels/userPersonalDetaiulsRelation')

exports.createUsersPersonalDetailsRelation = async (req, res) => {
    try {
        let data = await userPersonalDetailsRelationModel.personalDetailsRelationModel(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

exports.UsersPersonalDetailsRelationlist =async(req, res)=>{
    try {
        let data = await userPersonalDetailsRelationModel.UsersPersonalDetailsRelationlist(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}