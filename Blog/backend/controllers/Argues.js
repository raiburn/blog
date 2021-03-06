const Argues = require("../models/Argues");
const jwt = require('jsonwebtoken');

const CreateArgue = async (req, res) => {
    try{
      const body = req.body;
      const user = (jwt.decode(body.user));
      const argue = await Argues.create({ message: body.message, created_at: body.created_at, users: user.id});
      return res.status(200).json({argue});
    } catch(error){
        console.log(error);
    }
}

const ArguesAll = async (req, res) => {
    try {
        const argues = await Argues.find({}).populate('users').sort({created_at:'desc'}).exec();
        res.status(200).json({argues});
    } catch (error) {
        console.log(error);
    }
}

const DeleteArgue = async (req, res) => {
    try {
        const argues = await Argues.remove({'_id':req.params.id}).exec();
        return res.status(200).json({argues});
    } catch (error) {
        console.log(error);
    }
}

//search for the argues from one user with the token
const ArguesUser = async (req, res) => {
    try {
        const user = (jwt.decode(req.params.username));
        const argues = await Argues.find({}).populate('users').where('users').equals(user.id).sort({created_at:'desc'}).exec();
        return res.status(200).json({argues});
    }catch (error){
        console.log(error);
    }
}

//search for argues from a user with a username

//search for an argue with its own id
const FindArgue = async (req, res) => {
    try {
        const id = req.params.id;
        const argues = await Argues.find({}).where('_id').equals(id).exec();
        return res.status(200).json(argues[0].message);
    }catch (error){
        console.log(error);
    }
}

module.exports = {CreateArgue, ArguesAll, DeleteArgue, ArguesUser, FindArgue}