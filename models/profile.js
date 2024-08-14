const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    age:{
        type:Number,
        trim:true,
    }
});

module.export = mongoose.model('user',userSchema);