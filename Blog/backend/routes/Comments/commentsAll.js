const { Router } = require('express');
const comments = Router();
const commentController = require('../../controllers/Comments.js');

//search for comments by their argue.id
comments.get('/comments/:argues', commentController.CommentsAll);

module.exports = comments;