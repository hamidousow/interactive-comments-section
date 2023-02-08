const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    author : {
        type: String , 
        required: true
    },
    date : {
        type: Date , 
        default: Date.now
    },
    body : {
        type: String, 
        required: true
    },
    votes : {
        plus: {
            type: Number
        },
        less: {
            type: Number
        }
    },
    replies: {
        type: mongoose.Schema.Types.ObjectId
    }  
})

module.export = mongoose.model('Comment', comment);