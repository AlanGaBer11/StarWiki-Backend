const categoriaService = require('../service/categoriaService');

const getAllCategororias = async () => {
    const categorias = await categoriaService.getAllCategororias();
    return categorias;
};

const getOneCategoria = async (id) => {
    const categorias = await categoriaService.getOneCategoria(id);
    return categorias;
};

const createNewCategoria = async (categoria) => {
    const categorias = await categoriaService.createNewCategoria(categoria);
    return categorias;
};

const updateOneCategoria = async (id, categoria) => {
    const categorias = await categoriaService.updateOneCategoria(id, categoria);
    return categorias;
};

const deleteOneCategoria = async (id) => {
    const categorias = await categoriaService.deleteOneCategoria(id);
    return categorias;
};

module.exports = {
    getAllCategororias,
    getOneCategoria,
    createNewCategoria,
    updateOneCategoria,
    deleteOneCategoria
};