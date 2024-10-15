require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const req = require('express/lib/request')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3030;

const v1Categoria = require('./v1/routes/categoriaRoutes');
const v1Starwars = require('./v1/routes/starwarsRoutes');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Bienvenido a StaWiki ");
});

app.use("/api/v1/categoria", v1Categoria);
app.use("/api/v1/starwars", v1Starwars);


app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada pipipi');
});



app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT} ヽ(•‿ •)ノ`);
});
