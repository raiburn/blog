const auth = require('./Users/Auth');
const createuser = require('./Users/CreateUser');
const users = require('./Users/Users');
const finduser = require('./Users/FindUser');
const deleteuser = require('./Users/DeleteUser');
const alteruser = require('./Users/AlterUser');
const createargue = require('./Argues/CreateArgue');
const deleteargue = require('./Argues/DeleteArgue');
const argues = require('./Argues/Argues');
const arguesUser = require('./Argues/ArguesUser');
const SearchUser = require('./Users/UserSearcher');
const createGroup = require('./Groups/CreateGroup');
const groupsAll = require('./Groups/groupsAll');
const delGroup = require('./Groups/delGroup');
const commentsAll = require('./Comments/commentsAll');
const createComment = require('./Comments/createComment');
const findArgue = require('./Argues/FindArgue');

//exportar las rutas para poder acceder a ellas desde el index.js
module.exports = [auth, createuser, users, finduser, deleteuser, alteruser, createargue, deleteargue, argues, arguesUser,
      SearchUser, createGroup, groupsAll, delGroup, commentsAll, createComment, findArgue];