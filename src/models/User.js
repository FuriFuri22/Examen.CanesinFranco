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

   UserSchema.methods.toJSON = ()=>{
    const { password, _id, ...user } = this.toObject();
    user.uid = _id;

    return user;
}

module.exports = model('User',UserSchema)