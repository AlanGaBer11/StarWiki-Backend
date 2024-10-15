const express = require('express');
const router = express.Router();
const categoriaControlles = require("../../controller/categoriaController");

router
    .get('/', categoriaControlles.getAllCategororias);


module.exports =  router;