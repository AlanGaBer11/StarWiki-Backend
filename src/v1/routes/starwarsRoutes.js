const express = require('express');
const router = express.Router();
const starwarsController = require("../../controller/starwarsController");

router
    .get('/', starwarsController.getPersonajes)
    .get('/:id', starwarsController.getOnePersonaje)


module.exports = router;