const mongoose = require('mongoose');

//Define a schema

const userPersonalDetailsSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
         req: true 
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('userPersonalDetails', userPersonalDetailsSchema);