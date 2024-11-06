const starwarsProcess = require("../process/starwarsProcess");

const getPersonajes = async (req, res) => {
  try {
    const personajes = await starwarsProcess.getPersonajes();
    res.send(personajes);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener los personajes" });
  }
};

const getOnePersonaje = async (req, res) => {
  try {
    const personaje = await starwarsProcess.getOnePersonaje(req.params.id);
    res.send(personaje);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener el personaje" });
  }
};

module.exports = {
  getPersonajes,
  getOnePersonaje,
};
