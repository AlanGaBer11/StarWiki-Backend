const dragonballProcess = require('../process/dragonballProcess');

const getAllPersonajes = async (req, res) => {
    const dragonball = await dragonballProcess.getAllPersonajes();
    res.send(dragonball);
};

const getOnePersonaje = async (req, res) => {
    const dragonball = await dragonballProcess.getOnePersonaje(req.params.id);
    res.send(dragonball);
};

module.exports = {
    getAllPersonajes,
    getOnePersonaje
};