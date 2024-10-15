const categoriaDb = require('../database/categoriaDB');

const getAllCategororias = async () => {
    const categorias = await categoriaDb.getAllCategororias();
    return categorias;
}

module.exports = {
    getAllCategororias
};