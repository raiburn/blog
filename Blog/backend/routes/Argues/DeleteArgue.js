const { Router } = require('express');
const deleteArgue = Router();
const deleteArgueController = require('../../controllers/Argues');

deleteArgue.delete('/argues/:id', deleteArgueController.DeleteArgue);

module.exports = deleteArgue;