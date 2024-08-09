const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    producetype: {
        type: String,
        trim: true,
    },
    entrydate: {
        type: Date,
        trim: true,
    },
    entrytime: {
        type: String,
        trim: true,
    },
    tonnage: {
        type: Number,
        trim: true,
    },
    cost: {
        type: Number,
        trim: true,
    },
    dealername: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        trim: true,

    },
    sellingprice: {
        type: Number,
        trim: true,
    }

})

module.exports = mongoose.model('record', recordSchema);

