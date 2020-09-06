const express = require('express');
const cors = require('cors');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    app.use(cors()); //Atualizar origem
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));  

    consign()
        .include('controllers')
        .into(app);

    return app;
}

