const mongoose = require('mongoose');

//Define a schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('users',userSchema);