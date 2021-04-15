const { Router } = require('express');
const createGroup = Router();
const createGroupController = require('../../controllers/Groups');

createGroup.post('/groups', createGroupController.CreateGroup);

module.exports = createGroup;