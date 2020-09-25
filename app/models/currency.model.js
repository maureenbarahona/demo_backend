
const mongoose = require('mongoose');

const MonedaSchema = mongoose.Schema({
    moneda: String,
    valor: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Monedas', MonedaSchema);