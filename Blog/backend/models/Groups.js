const {Schema, model, Mongoose} = require('mongoose');

const GroupsSchema = new Schema({
    name:{
        required: true,
        unique:true,
        type: String,
        trim:true
    },
    information:{
        required: true,
        unique:true,
        type: String,
        trim:true
    },
    rules:{
        required: true,
        unique:true,
        type: String,
        trim:true
    },
    created_at:{
        type: Date,
        trim:true
    },
    users:{
        required: true,
        type: Schema.ObjectId,
        ref:'Users'
    }
});

const Groups = model('Groups', GroupsSchema);
module.exports = Groups;