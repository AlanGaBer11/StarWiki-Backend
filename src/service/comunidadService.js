const comunidadDB = require("../database/comunidadDB");

const getAllComunidades = async () => {
    const comunidades = await comunidadDB.getAllComunidades();
    return comunidades;
};

const getOneComunidad = async (id) => {
    const comunidades = await comunidadDB.getOneComunidad(id);
    return comunidades;
};

const createNewComunidad = async (tema, contenido, imagen, categoria, fecha, nombre_usuario) => {
    const comunidades = await comunidadDB.createNewComunidad(tema, contenido, imagen, categoria, fecha, nombre_usuario);
    return comunidades;
};

const updateOneComunidad = async(tema, contenido, imagen, categoria, fecha, nombre_usuario, id) => {
    const comunidades = await comunidadDB.updateOneComunidad(tema, contenido, imagen, categoria, fecha, nombre_usuario, id);
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