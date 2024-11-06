const onepieceProcess = require("../process/onepieceProcess");

const getAllPersonajes = async (req, res) => {
  try {
    const onepiece = await onepieceProcess.getAllPersonajes();
    res.send(onepiece);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener los personajes" });
  }
};

const getOnePersonaje = async (req, res) => {
  try {
    const onepiece = await onepieceProcess.getOnePersonaje(req.params.id);
    res.send(onepiece);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener el personaje" });
  }
};

module.exports = {
  getAllPersonajes,
  getOnePersonaje,
};
