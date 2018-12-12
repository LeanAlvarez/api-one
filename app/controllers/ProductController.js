const Product = require('../models/Product')


function index(req, res){
    Product.find({})
        .then(products => {
            if(products.length) return res.status(200).send({products})
            return res.status(204).send({message: 'SIN CONTENIDO'})
        }).catch(error => res.status(500).send({error}))
}

function show(req, res){

}

function create(req, res){
    new Product(req.body).save().then(product => res.status(201).send({product})).catch(error => res.status(500).send({error}))
}

function update(req, res){

}

function remove(req, res){

}



module.exports = {
    index,
    show,
    create,
    update,
    remove
}