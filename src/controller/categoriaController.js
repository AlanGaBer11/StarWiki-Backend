const categoriaProcess = require("../process/categoriaProcess")

const getAllCategororias = async (req, res) => {
    const categorias = await categoriaProcess.getAllCategororias();
    res.send(categorias);
};

const getOneCategoria = async (req, res) => {
    const categorias = await categoriaProcess.getOneCategoria(req.params.id);
    res.send(categorias);
};

const createNewCategoria = async (req, res) => {
    const categorias = await categoriaProcess.createNewCategoria(req.body.categoria);
    res.send(categorias);
};

const updateOneCategoria = async (req, res) => {
    const categorias = await categoriaProcess.updateOneCategoria(req.params.id, req.body.categoria);
    res.send(categorias);
};

const deleteOneCategoria = async (req, res) => {
    const categorias = await categoriaProcess.deleteOneCategoria(req.params.id);
    res.send(categorias);
};

module.exports = {
    getAllCategororias,
    getOneCategoria,
    createNewCategoria,
    updateOneCategoria,
    deleteOneCategoria
};