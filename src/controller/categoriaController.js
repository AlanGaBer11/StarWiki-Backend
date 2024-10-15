const categoriaProcess = require("../process/categoriaProcess")

const getAllCategororias = async (req, res) => {
    const categorias = await categoriaProcess.getAllCategororias();
    res.send(categorias);
};

module.exports = {
    getAllCategororias
};