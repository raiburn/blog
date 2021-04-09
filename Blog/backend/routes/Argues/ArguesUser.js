const { Router } = require('express');
const argues = Router();
const arguesUserController = require('../../controllers/Argues');

argues.get('/argue/:username', arguesUserController.ArguesUser);

module.exports = argues;