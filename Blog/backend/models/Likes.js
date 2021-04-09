const {Schema, model, Mongoose} = require('mongoose');

const likeSchema = new Schema({
    argues:{
        type: Schema.ObjectId,
        ref:'Argues'
    },
    users:{
        type: Schema.ObjectId,
        ref:'Users'
    }
});

const Comments = model('Likes', likeSchema);
module.exports = Comments;