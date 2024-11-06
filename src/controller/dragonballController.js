const dragonballProcess = require("../process/dragonballProcess");

const getAllPersonajes = async (req, res) => {
  try {
    const dragonball = await dragonballProcess.getAllPersonajes();
    res.send(dragonball);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener los personajes" });
  }
};

const getOnePersonaje = async (req, res) => {
  try {
    const dragonball = await dragonballProcess.getOnePersonaje(req.params.id);
    res.send(dragonball);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener el personaje" });
  }
};

module.exports = {
  getAllPersonajes,
  getOnePersonaje,
};
