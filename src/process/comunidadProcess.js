const comunidadService = require("../service/comunidadService");

const getAllComunidades = async () => {
    const comunidades = await comunidadService.getAllComunidades();
    return comunidades;
};

const getOneComunidad = async (id) => {
    const comunidades = await comunidadService.getOneComunidad(id);
    return comunidades;
};

const createNewComunidad = async (tema, contenido, imagen, categoria, fecha, nombre_usuario) => {
    const comunidades = await comunidadService.createNewComunidad(tema, contenido, imagen, categoria, fecha, nombre_usuario);
    return comunidades;
};

const updateOneComunidad = async(tema, contenido, imagen, categoria, fecha, nombre_usuario, id) => {
    const comunidades = await comunidadService.updateOneComunidad(tema, contenido, imagen, categoria, fecha, nombre_usuario, id);
    return comunidades;
};

const deleteOneComunidad = async (id) => {
    const comunidades = await comunidadService.deleteOneComunidad(id);
    return comunidades;
};

module.exports = {
    getAllComunidades,
    getOneComunidad,
    createNewComunidad,
    updateOneComunidad,
    deleteOneComunidad
};