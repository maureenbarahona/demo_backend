const mongoose = require('mongoose');

const QuotitionSchema = mongoose.Schema({
    moneda: String,
    valor: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Cotizacion', QuotitionSchema);