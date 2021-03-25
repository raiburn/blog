const {Schema, model, Mongoose} = require('mongoose');

const arguesSchema = new Schema({
    message:{
        required: true,
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

const Argues = model('Argues', arguesSchema);
module.exports = Argues;