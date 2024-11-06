const getAllPersonajes = async () => {
  const response = fetch("https://dragonball-api.com/api/characters?limit=44"); /* 44PERSONAJES */ /* 63 Y 64 EXISTEN, PERO LOS DEMAS NOP */
  const dragonball = (await response).json();
  return dragonball;
};

const getOnePersonaje = async (id) => {
  const response = fetch(`https://dragonball-api.com/api/characters/${id}/`);
  const dragonball = (await response).json();
  return dragonball;
};

module.exports = {
  getAllPersonajes,
  getOnePersonaje,
};
