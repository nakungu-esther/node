const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const signupSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
    },
    secondname:{
        type: String,
        trim:true,
    },
    email: {
        type: String,  // Use 'String' with an uppercase 'S'
        trim: true,
        unique: true,
    },

});
signupSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
    });

module.exports = mongoose.model('Signup', signupSchema);
