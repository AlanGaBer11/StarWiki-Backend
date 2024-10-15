const categoriaService = require('../service/categoriaService');

const getAllCategororias = async () => {
    const categorias = await categoriaService.getAllCategororias();
    return categorias;
}

module.exports = {
    getAllCategororias
};