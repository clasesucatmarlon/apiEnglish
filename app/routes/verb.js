// Ruta para los verbos

// Especificar las URL con las que se accede a la API

const express = require('express');
const VerbCtrl =  require('../controllers/VerbsController'); //Controlador de Verbos

const Router = express.Router();

// Asignar ruta al Router (métodos)
Router.get('/', VerbCtrl.index)                                   // api.com/verb/  (index)
      .post('/', VerbCtrl.create)                // api.com/Verb/
      .get('/:key/:value', VerbCtrl.find, VerbCtrl.show)       // api.com/verb/category/Hogar  (show)
      .put('/:key/:value', VerbCtrl.find, VerbCtrl.update)     // api.com/verb/name/PortatilIntel (update)
      .delete('/:key/:value', VerbCtrl.find, VerbCtrl.remove); // api.com/verb/name/PortatilIntel (remove)

module.exports = Router;