const { Router } = require('express');
const SearchUser = Router();
const UserSearcher = require('../../controllers/Users');

SearchUser.get('/search/:username', UserSearcher.UserSearcher);

module.exports = SearchUser;