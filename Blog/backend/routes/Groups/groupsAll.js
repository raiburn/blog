const { Router } = require('express');
const groups = Router();
const groupsController = require('../../controllers/groups');

//get all groups endpoint
groups.get('/groups', groupsController.GroupsAll);

module.exports = groups;