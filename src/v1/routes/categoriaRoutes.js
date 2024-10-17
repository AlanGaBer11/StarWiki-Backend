const express = require('express');
const router = express.Router();
const categoriaController = require("../../controller/categoriaController");

router
.get('/', categoriaController.getAllCategororias)
.get('/:id', categoriaController.getOneCategoria)
.post('/', categoriaController.createNewCategoria)
.patch('/:id', categoriaController.updateOneCategoria)
.delete('/:id', categoriaController.deleteOneCategoria);


module.exports =  router;