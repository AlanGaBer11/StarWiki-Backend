const express = require('express');
const router = express.Router();
const comunidadController = require("../../controller/comunidadController");

/* const multer = require('multer'); 
const storage = multer.memoryStorage(); 
const upload = multer({ storage });  */

router
.get('/', comunidadController.getAllComunidades)
.get('/:id', comunidadController.getOneComunidad)
.post('/', comunidadController.createNewComunidad)
.patch('/:id', comunidadController.updateOneComunidad)
.delete('/:id', comunidadController.deleteOneComunidad);

module.exports =  router;