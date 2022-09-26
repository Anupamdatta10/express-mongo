const userPersonalDetailsRelation = require('../relationUserAndUserPersonalDetails');
exports.UsersPersonalDetailsRelationlist = async () => {
    try {
        //let regx=new RegExp("^"+"sarma")
        // let data = await userPersonalDetailsRelation.find({'user_id.name':'anupam'})
        // .populate('user_id')
        // .populate('user_personal_details_id')
        let data= await userPersonalDetailsRelation.aggregate({
            $lookup:
            {
                from:"user",
                localfield:"user_id",
                foraignfield:"_id",
                as:"userData"
            }
        })
        console.log("data", data)
        return ({ "data": data })
    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}

exports.personalDetailsRelationModel = async (params) => {
    try {
        let data = await userPersonalDetailsRelation.create(params)
        return ({ "data": data, "message": "user created successfully", success: true })

    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}