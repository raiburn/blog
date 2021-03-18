const { Router } = require('express');
const argues = Router();
const arguesController = require('../../controllers/Argues');

argues.get('/argues', arguesController.ArguesAll);

module.exports = argues;