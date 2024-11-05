const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

connection.connect(error => {
    if (error)
        throw error;
    console.log('La conexión con la tabla comunidad es exitosa');
});

/* GETALL */
const getAllComunidades = async () => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM comunidad';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

/* GETONE */
const getOneComunidad = async (id) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM comunidad WHERE id = ?';
        connection.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

/* POST */
const createNewComunidad = async (tema, contenido, imagen, fecha, nombre_usuario, categoria) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO comunidad(tema, contenido, imagen, fecha, nombre_usuario, categoria) VALUES(?, ?, ?, ?, ?, ?)";
        connection.query(sql, [tema, contenido, imagen, fecha, nombre_usuario, categoria], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Comunidad Creada con Éxito")
        });
    });
};

/* PATCH */
const updateOneComunidad = async (tema, contenido, imagen, fecha, nombre_usuario, categoria, id) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE comunidad SET tema = ?, contenido = ?, imagen = ?, fecha = ?, nombre_usuario = ?, categoria = ? WHERE id = ?";
        connection.query(sql, [tema, contenido, imagen, fecha, nombre_usuario, categoria, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Comunidad Actualizada con Éxito");
        });
    });
};

/* DELETE */
const deleteOneComunidad = async (id) => {
    return new Promise(function (resolve, reject) {
        const sql = "DELETE FROM comunidad WHERE id = ?";
        connection.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Comunidad Eliminada con Éxito");
        });
    });
};

module.exports = {
    getAllComunidades,
    getOneComunidad,
    createNewComunidad,
    updateOneComunidad,
    deleteOneComunidad
};