module.exports =() => {
    const quotation = require('../controllers/quotation.controller');

    app.post('/cotizacion', quotation.create);

    app.get('/cotizacion', quotation.findAll);

    app.get('/cotizacion/:moneda', quotation.findOne);

    app.put('/cotizacion/:moneda', quotation.update);

    app.delete('/cotizacion/:moneda', quotation.delete );
}