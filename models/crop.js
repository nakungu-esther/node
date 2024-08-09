const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    maizetype:{
        type:String,
        trim:true
    },
    quantity:{
        type:Number,
        trim:true
    },
    price:{
        type:Number,
        trim:true
    }
})

module.exports = mongoose.model('Crop', cropSchema);