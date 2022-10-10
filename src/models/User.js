const {model, Schema} = require('mongoose');

const UserSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
   })

module.exports = model('User',UserSchema)