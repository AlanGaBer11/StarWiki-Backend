const getPersonajes = async () => {
    const response = fetch('https://swapi.dev/api/people/')
    const starwars = (await response).json();
    return starwars
};

const getOnePersonaje = async (id) => {
    const response = fetch(`https://swapi.dev/api/people/${id}/`);
    const personaje = (await response).json();
    return personaje;
};

module.exports = {
    getPersonajes,
    getOnePersonaje,
};