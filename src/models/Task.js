const {model, Schema}= require('mongoose');
require('./User')
const TasksSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state:{
        type: Boolean,
        default: false
    },
    userId:{
        type: Schema.ObjectId,
         ref: 'User'
    },
    isActive:{
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
   });

module.exports = model('Tasks', TasksSchema)