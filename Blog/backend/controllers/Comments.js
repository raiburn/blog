const jwt = require('jsonwebtoken');

const Comments = require("../models/Comments");

const CreateComment = async (req, res) => {
    try{
      const argue = req.params.argues
      const body = req.body;
      const user = (jwt.decode(body.user));
      console.log(req.body);
      console.log(body.user);

      const comment = await Comments.create({ message: body.message, created_at: body.created_at, argue:argue, users: user.id});
      return res.status(200).json({comment});
    } catch(error){
        console.log(error);
    }
}

const CommentsAll = async (req, res) => {
    try {
        const argue = req.params.argues;
        const comments =await Comments.find({}).populate('users').where('argue').equals(argue).sort({created_at:'asc'}).exec();
        res.status(200).json({comments});
    } catch (error) {
        console.log(error);
    }
}

const DeleteComment = async (req, res) => {
    try {
        const comments = await Comment.remove({'_id':req.params.id}).exec();
        return res.status(200).json({comments});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {CreateComment, CommentsAll, DeleteComment}