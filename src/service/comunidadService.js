const comunidadDB = require("../database/comunidadDB");

const getAllComunidades = async () => {
    const comunidades = await comunidadDB.getAllComunidades();
    return comunidades;
};

const getOneComunidad = async (id) => {
    const comunidades = await comunidadDB.getOneComunidad(id);
    return comunidades;
};

const createNewComunidad = async (tema, contenido, imagen, fecha, nombre_usuario, categoria) => {
    const comunidades = await comunidadDB.createNewComunidad(tema, contenido, imagen, fecha, nombre_usuario, categoria);
    return comunidades;
};

const updateOneComunidad = async(titulo, contenido, imagenes, fecha, nombre_usuario, categoria, id) => {
    const comunidades = await comunidadDB.updateOneComunidad(titulo, contenido, imagenes, fecha, nombre_usuario, categoria, id);
    return comunidades;
};

const deleteOneComunidad = async (id) => {
    const comunidades = await comunidadDB.deleteOneComunidad(id);
    return comunidades;
};

module.exports = {
    getAllComunidades,
    getOneComunidad,
    createNewComunidad,
    updateOneComunidad,
    deleteOneComunidad
};