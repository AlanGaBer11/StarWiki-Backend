const comunidadProcess = require("../process/comunidadProcess");

const getAllComunidades = async (req, res) => {
  try {
    const comunidades = await comunidadProcess.getAllComunidades();
    res.send(comunidades);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener las comunidades" });
  }
};

const getOneComunidad = async (req, res) => {
  try {
    const comunidad = await comunidadProcess.getOneComunidad(req.params.id);
    res.send(comunidad);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener la comunidad" });
  }
};

const createNewComunidad = async (req, res) => {
  try {
    const comunidad = await comunidadProcess.createNewComunidad(
      req.body.tema,
      req.body.contenido,
      req.body.imagen,
      req.body.fecha,
      req.body.nombre_usuario,
      req.body.categoria
    );
    res.send(comunidad);
  } catch (error) {
    res.status(500).send({ error: "Error al crear la comunidad" });
  }
};

const updateOneComunidad = async (req, res) => {
  try {
    const comunidad = await comunidadProcess.updateOneComunidad(
      req.body.tema,
      req.body.contenido,
      req.body.imagen,
      req.body.fecha,
      req.body.nombre_usuario,
      req.body.categoria,
      req.params.id
    );
    res.send(comunidad);
  } catch (error) {
    res.status(500).send({ error: "Error al actualizar la comunidad" });
  }
};

const deleteOneComunidad = async (req, res) => {
  try {
    const comunidad = await comunidadProcess.deleteOneComunidad(req.params.id);
    res.send(comunidad);
  } catch (error) {
    res.status(500).send({ error: "Error al eliminar la comunidad" });
  }
};

module.exports = {
  getAllComunidades,
  getOneComunidad,
  createNewComunidad,
  updateOneComunidad,
  deleteOneComunidad,
};
