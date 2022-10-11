const {model, Schema}= require('mongoose');
const { stringify } = require('querystring');

const TasksSchema = Schema({
    title: {
        tyoe: String,
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
        type: Schema.Types.ObjectId, ref: 'User'
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