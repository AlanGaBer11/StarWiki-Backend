const comunidadProcess = require("../process/comunidadProcess");

const getAllComunidades = async (req, res) => {
    const comunidades = await comunidadProcess.getAllComunidades();
    res.send(comunidades);
};

const getOneComunidad = async (req, res) => {
    const comunidades = await comunidadProcess.getOneComunidad(req.params.id);
    res.send(comunidades);
};

const createNewComunidad = async (req, res) => {
    const comunidades = await comunidadProcess.createNewComunidad(req.body.tema, req.body.contenido, req.body.imagen, req.body.fecha, req.body.nombre_usuario, req.body.categoria);
    res.send(comunidades);
};

const updateOneComunidad = async(req, res) => {
    const comunidades = await comunidadProcess.updateOneComunidad(req.body.tema, req.body.contenido, req.body.imagen, req.body.fecha, req.body.nombre_usuario, req.body.categoria, req.params.id);
    res.send(comunidades);
};

const deleteOneComunidad = async (req, res) => {
    const comunidades = await comunidadProcess.deleteOneComunidad(req.params.id);
    res.send(comunidades);
};

module.exports = {
    getAllComunidades,
    getOneComunidad,
    createNewComunidad,
    updateOneComunidad,
    deleteOneComunidad
};