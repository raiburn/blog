const CreateComment = async (req, res) => {
    try{
      const body = req.body;
      const user = (jwt.decode(body.user));
      const comment = await Comments.create({ message: body.message, created_at: body.created_at, argues:"606ff0a1d7df692260ec7b89", users: user.id});
      return res.status(200).json({argue});
    } catch(error){
        console.log(error);
    }
}

const CommentsAll = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate('users').sort({created_at:'desc'}).exec();
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


module.exports = {CreateArgue, CommentsAll, DeleteComment}