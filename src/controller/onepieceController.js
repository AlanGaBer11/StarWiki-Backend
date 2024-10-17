const onepieceProcess = require('../process/onepieceProcess');

const getAllPersonajes = async (req, res) => {
    const onepiece = await onepieceProcess.getAllPersonajes();
    res.send(onepiece);
};

const getOnePersonaje = async (req, res) => {
    const onepiece = await onepieceProcess.getOnePersonaje(req.params.id);
    res.send(onepiece);
};

module.exports = {
    getAllPersonajes,
    getOnePersonaje
};