const express = require('express');
const basicController = require('../controllers/basicControllers');

const basicRouter = express.Router();

basicRouter.get('/', basicController.basic_home);

basicRouter.get('/home', basicController.basic_home_);

basicRouter.get('/about', basicController.basic_about);

module.exports = basicRouter;

