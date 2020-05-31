/**
 * NO REQUIERE EXPORTARSE PORQUE ÉSTO SE REGISTRA EN EL HBS
 */
const hbs = require('hbs');

/** Define los helpers para los templates */
// retorna año actual
hbs.registerHelper('getAnho', () => new Date().getUTCFullYear());

// capitaliza palabra
hbs.registerHelper('capitalizar', (texto) => {
    // separa el texto en arreglos, explode()
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    // convierte el array en texto, implode()
    return palabras.join(' ');
});