const personalDetails = require('../UserPersonalDetails');
let db=require("../../../index");
const User = require('../User');
exports.personalDetailsModel = async (params) => {
    try {
        let data = await personalDetails.create(params)
        return ({ "data": data, "message": "user created successfully", success: true })

    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}

exports.UsersPersonalDetailslist = async () => {
    try {
        //let regx=new RegExp("^"+"sarma")
        // let data = await personalDetails.aggregate( [
        //     {
        //        $lookup:
        //           {
        //             from: "users",
        //             let: { id:"$user_id"},
        //             pipeline: [
        //                { $match:
        //                   { $expr:{$and:[
        //                     { 
        //                         $eq: [ "$_id",  "$$id" ] 
        //                     },
        //                     { 
        //                         $eq: [ "$name",  "anupam" ] 
        //                     }
        //                   ]

        //                     }
        //                   }
        //                },
        //                { $project: {  _id: 0,name:1 } }
        //             ],
        //             as: "userdata"
        //           }
        //      },

        //  ] )
        console.log("===>>",db)
        let data = await personalDetails.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'userData',
                    pipeline: [
                        {
                            $match: {$and:[
                               //{"name": {'$regex': '.*sarma.*'}},
                             {}
                            ]
                            }
                        } 
                        ],
                    
                }
            },
            {
                $match: {
                    $and:[
                        {"userData": {$ne: []}},
                        {"salary":{$gt:'30000'}}
                     
                     ]
                    
                }
            }
        ])
        console.log("data", data)
        return ({ "data": data })
    } catch (error) {
        console.log(error)
        return ({ status: false })
    }
}