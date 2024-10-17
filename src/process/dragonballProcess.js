const dragonballService = require('../service/dragonballService');

const getAllPersonajes = async () => {
    const dragonball = await dragonballService.getAllPersonajes();
    return dragonball;
};

const getOnePersonaje = async (id) => {
    const dragonball = await dragonballService.getOnePersonaje(id);
    return dragonball;
};

module.exports = {
    getAllPersonajes,
    getOnePersonaje
};