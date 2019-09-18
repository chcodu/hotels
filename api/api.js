const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.send('Hola');
    res.end();
});

module.exports = app;