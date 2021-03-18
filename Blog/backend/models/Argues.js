const {Schema, model} = require('mongoose');

const arguesSchema = new Schema({
    message:{
        type: String,
        trim:true
    },
    created_at:{
        type: Date,
        trim:true
    },
    user:{
        type: Schema.ObjectId,
        ref:'Users'
    }
});

const Argues = model('Argues', arguesSchema);
module.exports = Argues;