const starwarsProcess = require('../process/starwarsProcess');

const getPersonajes = async (req, res) => {
    const personajes = await starwarsProcess.getPersonajes();
    res.send(personajes);
};

const getOnePersonaje = async (req, res) => {
    const personaje = await starwarsProcess.getOnePersonaje(req.params.id);
    res.send(personaje);
};

module.exports = {
    getPersonajes,
    getOnePersonaje
};
