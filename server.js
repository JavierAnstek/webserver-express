const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

/** Define el puerto */
const port = process.env.PORT || 3000;

/** ******************************************************
 * Servir contenido estatico, por defecto hace que se lance
 * ésta información antes de llamar la ruta escrita
 * ********************************************************
 * app.use -> es el middleware
 * express.static() -> es la sentencia para enviar el contenido
 * __dirname: es la ruta del directorio raíz
 * El contenido estatico es por ejemplo, css, js, img
 */
app.use(express.static(__dirname + '/public'));

/** Definiendo la ruta de los partials */
hbs.registerPartials(__dirname + '/views/partials');
/** Usa el motor de renderizado HBS */
app.set('view engine', 'hbs');

/** Rutas del proyecto */
app.get('/', (req, res) => res.render('home', { nombre: 'javier mosquera diaz' }));
app.get('/about', (req, res) => res.render('about'));

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});