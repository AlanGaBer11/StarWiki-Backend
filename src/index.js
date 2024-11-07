require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3030;

// Configuración de la base de datos con un pool de conexiones
const pool = mysql.createPool({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB ,
    database: process.env.NAME_DB,
/*     waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 */
});

// Importar rutas
const v1Categoria = require('./v1/routes/categoriaRoutes');
const v1Comunidad = require('./v1/routes/comunidadRoutes');
const v1Starwars = require('./v1/routes/starwarsRoutes');
const v1Dragonball = require('./v1/routes/dragonballRoutes');
const v1Onepiece = require('./v1/routes/onepieceRoutes');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send("Bienvenido a StarWiki");
});

// Endpoint para verificar la conexión a la base de datos
app.get('/ping', async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT 'BD conectada' AS message");
        console.log('Database URL:', process.env.HOST_DB);
        console.log(rows[0].message);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al conectar con MySQL', error);
        res.status(500).send('Error al conectar con la base de datos');
    }
});

// Agregar las rutas de la API
app.use("/api/v1/categoria", v1Categoria);
app.use("/api/v1/comunidad", v1Comunidad);
app.use("/api/v1/starwars", v1Starwars);
app.use("/api/v1/dragonball", v1Dragonball);
app.use("/api/v1/onepiece", v1Onepiece);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada pipipi');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT} ヽ(•‿ •)ノ`);
});
