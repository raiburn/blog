const { Router } = require('express');
const createComment = Router();
const createCommentController = require('../../controllers/Comments');

createComment.post('/comments/:argues', createCommentController.CreateComment);

module.exports = createComment;