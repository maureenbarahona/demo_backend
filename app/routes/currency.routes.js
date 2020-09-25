module.exports = (app) => {
    const currency = require('../controllers/currency.controller.js');

    // Create a new Quotation
    app.post('/monedas', currency.create);

    // Retrieve all Quotation
    app.get('/monedas', currency.findAll);

    // Retrieve a single Quotation with noteId
    app.get('/monedas/:moneda', currency.findOne);

    // Update a Note with Quotation
    app.put('/monedas/:moneda', currency.update);

    // Delete a Note with Quotation
    app.delete('/monedas/:moneda', currency.delete);
}