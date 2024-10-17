const onepieceService = require('../service/onepieceService');

const getAllPersonajes = async () => {
    const onepiece = await onepieceService.getAllPersonajes();
    return onepiece;
};

const getOnePersonaje = async (id) => {
    const onepiece = await onepieceService.getOnePersonaje(id);
    return onepiece;
};

module.exports = {
    getAllPersonajes,
    getOnePersonaje
};