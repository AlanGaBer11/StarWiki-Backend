const comunidadService = require("../service/comunidadService");

const getAllComunidades = async () => {
    const comunidades = await comunidadService.getAllComunidades();
    return comunidades;
};

const getOneComunidad = async (id) => {
    const comunidades = await comunidadService.getOneComunidad(id);
    return comunidades;
};

const createNewComunidad = async (tema, contenido, imagen, fecha, nombre_usuario, categoria) => {
    const comunidades = await comunidadService.createNewComunidad(tema, contenido, imagen, fecha, nombre_usuario, categoria);
    return comunidades;
};

const updateOneComunidad = async(titulo, contenido, imagenes, fecha, nombre_usuario, categoria, id) => {
    const comunidades = await comunidadService.updateOneComunidad(titulo, contenido, imagenes, fecha, nombre_usuario, categoria, id);
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