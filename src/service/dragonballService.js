const getAllPersonajes = async () => {
    const response = fetch('https://dragonball-api.com/api/characters');
    const dragonball = (await response).json();
    return dragonball;
};

const getOnePersonaje = async(id)=>{
    const response = fetch(`https://dragonball-api.com/api/characters/${id}/`);
    const dragonball = (await response).json();
    return dragonball;
};

module.exports = {
    getAllPersonajes,
    getOnePersonaje
}