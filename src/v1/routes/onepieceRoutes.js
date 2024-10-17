const express = require('express');
const router = express.Router();
const onepieceController = require("../../controller/onepieceController");

router
    .get('/', onepieceController.getAllPersonajes)
    .get('/:id', onepieceController.getOnePersonaje)

module.exports = router;