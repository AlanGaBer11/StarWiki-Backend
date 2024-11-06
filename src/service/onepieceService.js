const getAllPersonajes = async () => {
    const response = fetch('https://api.api-onepiece.com/v2/characters/en'); /* 773 PERSONAJES */
    const onepiece = (await response).json();
    return onepiece;
};

const getOnePersonaje = async (id) => {
    const response = fetch(`https://api.api-onepiece.com/v2/characters/en/${id}`);
    const onepiece = (await response).json();
    return onepiece;
};

module.exports = {
    getAllPersonajes,
    getOnePersonaje
}