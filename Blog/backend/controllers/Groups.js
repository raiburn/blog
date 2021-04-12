const Groups = require("../models/Groups");
const jwt = require('jsonwebtoken');

const CreateGroup = async (req, res) => {
    try{
      const body = req.body;
      const user = (jwt.decode(body.user));
      const groups = await Groups.create({ name: body.name, information:body.information, rules: body.rules, created_at: body.created_at, users: user.id});
      return res.status(200).json({argue});
    } catch(error){
        console.log(error);
    }
}

const GroupsAll = async (req, res) => {
    try {
        const groups = await Groups.find({}).sort({created_at:'desc'}).exec();
        res.status(200).json({groups});
    } catch (error) {
        console.log(error);
    }
}

const DeleteGroups = async (req, res) => {
    try {
        const groups = await Groups.remove({'_id':req.params.id}).exec();
        return res.status(200).json({argues});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {CreateGroup, GroupsAll, DeleteGroups }