const { Router } = require('express');
const findArgue = Router();
const findArgueController = require('../../controllers/Argues');

findArgue.get('/bus_argue/:id', findArgueController.FindArgue);

module.exports = findArgue;