const Cotizacion = require('../models/currency.model.js');

// Create and Save a new Currency
exports.create = (req, res) => {
    // Validate request
    if(!req.body.moneda) {
        return res.status(400).send({
            message: "Currency content can not be empty"
        });
    }

    // Create a Currency
    const currency = new Cotizacion({
        moneda: req.body.moneda || "Untitled Currency", 
        valor: req.body.valor
    });

    // Save Quotation in the database
    currency.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Currency."
        });
    });
};

// Retrieve and return all quoatation from the database.
exports.findAll = (req, res) => {
    Cotizacion.find()
    .then(cotizacion => {
        res.send(cotizacion);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving quotation."
        });
    });
};

// Find a single quotattion with a currencyId
exports.findOne = (req, res) => {
    Cotizacion.findById(req.params.moneda)
    .then(cotizacion => {
        if(!cotizacion) {
            return res.status(404).send({
                message: "currency not found with id " + req.params.moneda
            });            
        }
        res.send(cotizacion);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Currency not found with id " + req.params.moneda
            });                
        }
        return res.status(500).send({
            message: "Error retrieving currency with id " + req.params.moneda
        });
    });
};

// Update a quotation identified by the currencyId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.moneda) {
        return res.status(400).send({
            message: "Currency content can not be empty"
        });
    }

    // Find quotation and update it with the request body
    Cotizacion.findByIdAndUpdate(req.params.monedaId, {
        moneda: req.body.moneda || "Untitled Currency",
        valor: req.body.valor
    }, {new: true})
    .then(cotizacion => {
        if(!cotizacion) {
            return res.status(404).send({
                message: "Currency not found with id " + req.params.monedaId
            });
        }
        res.send(cotizacion);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Currency not found with id " + req.params.monedaId
            });                
        }
        return res.status(500).send({
            message: "Error updating Currency with id " + req.params.monedaId
        });
    });
};

// Delete a currency with the specified currencyd in the request
exports.delete = (req, res) => {
    Cotizacion.findByIdAndRemove(req.params.nmonedaId)
    .then(cotizacion => {
        if(!cotizacion) {
            return res.status(404).send({
                message: "Currency not found with id " + req.params.monedaId
            });
        }
        res.send({message: "Currency deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Currency not found with id " + req.params.monedaId
            });                
        }
        return res.status(500).send({
            message: "Could not delete currency with id " + req.params.monedaId
        });
    });
};