const getPersonajes = async () => {
    const response = fetch('https://swapi.dev/api/people/')
    const starwars = (await response).json();
    return starwars
};

module.exports = {
    getPersonajes
};