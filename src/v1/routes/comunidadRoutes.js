const express = require('express');
const router = express.Router();
const comunidadController = require("../../controller/comunidadController");

router
.get('/', comunidadController.getAllComunidades)
.get('/:id', comunidadController.getOneComunidad)
.post('/', comunidadController.createNewComunidad)
.patch('/:id', comunidadController.updateOneComunidad)
.delete('/:id', comunidadController.deleteOneComunidad);


module.exports =  router;