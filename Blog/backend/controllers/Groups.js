const Groups = require("../models/Groups");
const jwt = require('jsonwebtoken');

//create a group from the database using a token for the user
const CreateGroup = async (req, res) => {
    try{
      const body = req.body;
      const user = (jwt.decode(body.user));
      const groups = await Groups.create({ name: body.name, information:body.information, rules: body.rules, created_at: body.created_at, users: user.id});
      return res.status(200).json({groups});
    } catch(error){
        console.log(error);
    }
}

//get all groups from the db
const GroupsAll = async (req, res) => {
    try {
        const groups = await Groups.find({}).sort({created_at:'desc'}).exec();
        console.log(groups);
        res.status(200).json({groups});
    } catch (error) {
        console.log(error);
    }
}
//delete a group from the db
const delGroups = async (req, res) => {
    try {
        const groups = await Groups.remove({'_id':req.params.id}).exec();
        console.log(groups);
        return res.status(200).json({groups});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {CreateGroup, GroupsAll, delGroups }