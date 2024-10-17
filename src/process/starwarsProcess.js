const starwarsService = require('../service/starwarsService');

const getPersonajes = async () => {
    const personajes = await starwarsService.getPersonajes();
    return personajes;
};

const getOnePersonaje = async (id) => {
    const personaje = await starwarsService.getOnePersonaje(id);
    return personaje;
};

module.exports = {
    getPersonajes,
    getOnePersonaje
};