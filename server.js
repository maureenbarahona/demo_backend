const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
//require ('./app/routes/quotation.routes.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useUnifiedTopology: true
}).then(()=> {
    console.log("Successfully connected to the database");
}).catch(err =>{
    console.log('Could not connect to the database. Exiting now..', err);
    process.exit();
})

app.get('/', (req, res) =>{
    res.json({"message":"welcome to my MauDemo"})
});

app.get('/cotizacion/dolar', (req, res)=>{
    res.json({  "moneda": "dolar",
        "precio": "38.2"
    })
})
app.get('/cotizacion/euro', (req, res)=>{
    res.json({  "moneda": "euro",
        "precio": "58.2"
    })
})
app.get('/cotizacion/real', (req, res)=>{
    res.json({  "moneda": "real",
        "precio": "78.2"
    })
})

app.listen(3000,() =>{
    console.log("server is listening on port 3000");
});
