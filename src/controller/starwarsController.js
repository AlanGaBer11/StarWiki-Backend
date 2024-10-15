const starwarsProcess = require('../process/starwarsProcess');

const getPersonajes = async (req, res) => {
    const personajes = await starwarsProcess.getPersonajes();
    res.send(personajes);
};

module.exports = {
    getPersonajes
};
