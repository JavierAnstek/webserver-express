const http = require('http');

/** Crea el servidor, recibe un callback con req y res */
http.createServer((req, res) => {
    //res.write('Hola Mundo');
    res.writeHead(200, { 'content-type': 'application/json' });

    var salida = {
        nombre: 'Pepe',
        edad: 10,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
}).listen(4000);

console.log('Escuchando por el puerto 4000');