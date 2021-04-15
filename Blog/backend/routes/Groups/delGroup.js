const { Router } = require('express');
const deleteGroup = Router();
const deleteGroupController = require('../../controllers/Groups');

//delete a group endpoint
deleteGroup.delete('/groups/:id', deleteGroupController.delGroups);

module.exports = deleteGroup;