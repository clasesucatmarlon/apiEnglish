// Contiene toda la aplicación que será lanzada en server.js

const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Verb = require('./routes/verb');

// manejar peticiones y enviar respuestas en JSON
App.use(bodyParser.json());
// No se reciben peticiones enviadas directamente desde un formulario.
// Primero se procesan y se envían como JSON
App.use(bodyParser.urlencoded({extended: false}));

App.use('/verb', Verb);


module.exports = App;