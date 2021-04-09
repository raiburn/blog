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
const ArguesFromUsers = require('./Argues/ArguesFromUsers');


module.exports = [auth, createuser, users, finduser, deleteuser, alteruser, createargue, deleteargue, argues, arguesUser, ArguesFromUsers];