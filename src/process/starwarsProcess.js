const starwarsService = require('../service/starwarsService');

const getPersonajes = async () => {
    const personajes = await starwarsService.getPersonajes();
    return personajes;
};

module.exports = {
    getPersonajes
};