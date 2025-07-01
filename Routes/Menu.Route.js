const express = require('express');
const router = express.Router();
const { verifyAccessToken } = require('../helpers/jwt_helpers.js');
const Controller = require('../Controller/Menu.Controller.js'); // updated path

// CRUD routes for Menu with token protection where needed
router.post('/', verifyAccessToken, Controller.create);
router.put('/:id', verifyAccessToken, Controller.update);
router.delete('/:id', verifyAccessToken, Controller.delete);
router.get('/:id', Controller.get);
router.get('/', Controller.list);

module.exports = router;
