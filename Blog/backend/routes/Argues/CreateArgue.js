const { Router } = require('express');
const createArgues = Router();
const createArgueController = require('../../controllers/Argues');

createArgues.post('/argues', createArgueController.CreateArgue);

module.exports = createArgues;