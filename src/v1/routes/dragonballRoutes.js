const express = require('express');
const router = express.Router();
const dragonballController = require("../../controller/dragonballController");

router
    .get('/', dragonballController.getAllPersonajes)
    .get('/:id', dragonballController.getOnePersonaje)

module.exports = router;