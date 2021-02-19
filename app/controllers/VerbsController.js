// Controlador de verbos

const Verbs = require('../models/Verbs')  // Modelo

// Funciones que responde a cada ruta
// ******************************************************

// Listar todos los elementos.  Devuelve una promesa
function index(req,res){
    Verbs.find({})
        .then(verbs => {
            if(verbs.length) return res.status(200).send({verbs});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

//  Listar un o algunos elementos
function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.verbs) return res.status(404).send({message: 'NOT FOUND'});
    let verbs = req.body.verbs;
    return res.status(200).send({verbs});
    
}

// Crear elemento
function create(req,res){
    new Verbs(req.body).save().then(verb => res.status(201).send({verb})).catch(error => res.status(500).send({error}));
}

// Actualizar elemento
function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.verbs) return res.status(404).send({message: 'NOT FOUND'});
    let verb = req.body.verbs[0];
    verb = Object.assign(verb,req.body);
    verb.save().then(verb => res.status(200).send({message: "UPDATED", verb})).catch(error => res.status(500).send({error}));
}

// Eliminar elemento
function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.verbs) return res.status(404).send({message: 'NOT FOUND'});
    req.body.verbs[0].remove().then(verb => res.status(200).send({message: 'REMOVED', verb})).catch(error => res.status(500).send({error}));
}

// Buscar elemento.  Midleware: controlador que se ejecuta en el medio de otros controladores
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Verbs.find(query).then(verbs => {
        if(!verbs.length) return next();
        req.body.verbs = verbs;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}