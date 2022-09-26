const mongoose = require('mongoose');

//Define a schema

const userSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
         req: true 
    },
    user_personal_details_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref:'userPersonalDetails',
         req: true 
    }
});

module.exports=mongoose.model('userPersonalDetailsRelation',userSchema);