const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:process.env.HOST_DB,
    /* port:process.env.PORT_DB, */
    user:process.env.USER_DB,
    password:process.env.PASSWORD_DB,
    database:process.env.NAME_DB
});

connection.connect(error =>{
    if (error)
        throw error;
    console.log('La conexión con la tabla categoría es exitosa');
});

const getAllCategororias = async () => {
    return new Promise (function (resolve, reject){
        const sql = 'SELECT * FROM categorias';
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getAllCategororias,
}