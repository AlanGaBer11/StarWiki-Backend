const categoriaDb = require('../database/categoriaDB');

const getAllCategororias = async () => {
    const categorias = await categoriaDb.getAllCategororias();
    return categorias;
};

const getOneCategoria = async (id) => {
    const categorias = await categoriaDb.getOneCategoria(id);
    return categorias;
};

const createNewCategoria = async (categoria) => {
    const categorias = await categoriaDb.createNewCategoria(categoria);
    return categorias;
};

const updateOneCategoria = async (id, categoria) => {
    const categorias = await categoriaDb.updateNewCategoria(id, categoria);
    return categorias;
};

const deleteOneCategoria = async (id) => {
    const categorias = await categoriaDb.deleteOneCategoria(id);
    return categorias;
};

module.exports = {
    getAllCategororias,
    getOneCategoria,
    createNewCategoria,
    updateOneCategoria,
    deleteOneCategoria
};