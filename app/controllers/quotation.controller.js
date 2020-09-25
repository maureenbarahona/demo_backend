const Quotation = require ('../models/quotation.model');

exports.create=(req, res) => {
    if(!req.body.valor){
        return res.status(400).send({
            message: "Quotation valor can not be empty"
        });
    }

    const quotation = new Quotation({
        moneda: req.body.moneda ||"Sin moneda",
        valor: req.body.valor

    });

    quotation.save()
    .then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:err.message || "Some error occurred wile creating the Quotation"
        });
    });

};

exports.findAll = (req, res) => {
    Quotation.find()
    .then(quotation =>{
        res.send(quotation);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Some error occurred wile creating the Quotation"
        });
    });

};

exports.findOne = (req, res) =>{
    Quotation.findById(req.params.moneda)
    .then(quotation =>{
        if(!quotation){
            return res.status(404).send({
                message:  "Quotation not found with id"+ req.params.moneda  
            });
        }
        res.send(quotation);
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Quotation not found with moneda "+ req.params.moneda
            });
        }
        return res.status(500).send({
            message: "Error retrieving quotation with id" + req.params.moneda
        });
    })

};


exports.update =(req, res )=> {
    if(!req.body.valor){
        return res.status(400).send({
            message: "Quotation valor can not be empty"
        });
    }

    Quotation.findByIdAndUpdate(req.params.moneda, {
        moneda: req.body.moneda ||"Sin moneda",
        valor: req.body.valor
    })

};

exports.delete =(req, res) => {

};