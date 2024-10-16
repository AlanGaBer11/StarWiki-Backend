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
    console.log('La conexión con la tabla categoría es exitosa');
});

/* GETALL */
const getAllCategororias = async () => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM categorias';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

/* GETONE */
const getOneCategoria = async (id) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM categorias WHERE id = ?';
        connection.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

/* POST */
const createNewCategoria = async (categoria) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO categorias (categoria) VALUES (?)";
        connection.query(sql, [categoria], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve('Categoría Creada Con Éxito');
        });
    });
};

/* PATCH */
const updateNewCategoria = async (id, categoria) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE categorias SET categoria = ? WHERE id = ? ";
        connection.query(sql, [categoria, id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve('Categoría Actualizada Correctamente');
        });
    });
};

/* DELETE */
const deleteOneCategoria = async (id) => {
    return new Promise(function (resolve, reject) {
        const sql = "DELETE FROM categorias WHERE id = ?";
        connection.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve('Categoría Eliminada Correctamente')
        })
    })
}

module.exports = {
    getAllCategororias,
    getOneCategoria,
    createNewCategoria,
    updateNewCategoria,
    deleteOneCategoria
};