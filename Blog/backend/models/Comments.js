const {Schema, model, Mongoose} = require('mongoose');

const commentSchema = new Schema({
    message:{
        type: String,
        trim:true
    },
    created_at:{
        type: Date,
        trim:true
    },
    argue:{
        type: Schema.ObjectId,
        ref:'Argues'
    },
    user:{
        type: Schema.ObjectId,
        ref:'Users'
    }
});

const Comments = model('Coments', commentSchema);
module.exports = Comments;