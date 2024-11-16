const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/* GETALL */
const getAllComunidades = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM comunidad');
        return rows;
    } catch (error) {
        throw error;
    }
};

/* GETONE */
const getOneComunidad = async (id) => {
    try {
        const [rows] = await pool.query('SELECT * FROM comunidad WHERE id = ?', [id]);
        return rows;
    } catch (error) {
        throw error;
    }
};

/* POST */
const createNewComunidad = async (tema, contenido, imagen, categoria, fecha, nombre_usuario) => {
    try {
        await pool.query(
            'INSERT INTO comunidad (tema, contenido, imagen, categoria, fecha, nombre_usuario) VALUES (?, ?, ?, ?, ?, ?)',
            [tema, contenido, imagen, categoria, fecha, nombre_usuario]
        );
        return 'Comunidad Creada con Éxito';
    } catch (error) {
        throw error;
    }
};

/* PATCH */
const updateOneComunidad = async (tema, contenido, imagen, categoria, fecha, nombre_usuario, id) => {
    try {
        await pool.query(
            'UPDATE comunidad SET tema = ?, contenido = ?, imagen = ?, categoria = ?, fecha = ?, nombre_usuario = ? WHERE id = ?',
            [tema, contenido, imagen, categoria, fecha, nombre_usuario, id]
        );
        return 'Comunidad Actualizada con Éxito';
    } catch (error) {
        throw error;
    }
};

/* DELETE */
const deleteOneComunidad = async (id) => {
    try {
        await pool.query('DELETE FROM comunidad WHERE id = ?', [id]);
        return 'Comunidad Eliminada con Éxito';
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllComunidades,
    getOneComunidad,
    createNewComunidad,
    updateOneComunidad,
    deleteOneComunidad
};
