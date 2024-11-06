const categoriaProcess = require("../process/categoriaProcess");

const getAllCategororias = async (req, res) => {
  try {
    const categorias = await categoriaProcess.getAllCategororias();
    res.send(categorias);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener las categorías" });
  }
};

const getOneCategoria = async (req, res) => {
  try {
    const categoria = await categoriaProcess.getOneCategoria(req.params.id);
    res.send(categoria);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener la categoría" });
  }
};

const createNewCategoria = async (req, res) => {
  try {
    const categoria = await categoriaProcess.createNewCategoria(
      req.body.categoria
    );
    res.send(categoria);
  } catch (error) {
    res.status(500).send({ error: "Error al crear la categoría" });
  }
};

const updateOneCategoria = async (req, res) => {
  try {
    const categoria = await categoriaProcess.updateOneCategoria(
      req.params.id,
      req.body.categoria
    );
    res.send(categoria);
  } catch (error) {
    res.status(500).send({ error: "Error al actualizar la categoría" });
  }
};

const deleteOneCategoria = async (req, res) => {
  try {
    const categoria = await categoriaProcess.deleteOneCategoria(req.params.id);
    res.send(categoria);
  } catch (error) {
    res.status(500).send({ error: "Error al eliminar la categoría" });
  }
};

module.exports = {
  getAllCategororias,
  getOneCategoria,
  createNewCategoria,
  updateOneCategoria,
  deleteOneCategoria,
};
