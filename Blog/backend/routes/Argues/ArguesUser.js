const { Router } = require('express');
const argues = Router();
const arguesUserController = require('../../controllers/Argues');

argues.get('/argues/:username', arguesUserController.ArguesUser);

module.exports = argues;