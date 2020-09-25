const Quotation = require ('../models/quotation.model');

exports.create=(req, res) => {
    if(!req.body.contect){
        return res.status(400).send({
            message: "Quotation content can not be empty"
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

};

exports.findOne = (req, res) =>{

};

exports.findOne =(req, res) =>{


};

exports.update =(req, res )=> {

};

exports.delete =(req, res) => {

};