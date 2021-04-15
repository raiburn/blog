const { Router } = require('express');
const SearchUser = Router();
const UserSearcher = require('../../controllers/Users');

//search for a user by the username endpoint
SearchUser.get('/search/:username', UserSearcher.UserSearcher);

module.exports = SearchUser;