const mongoose = require('mongoose');
const api = require('./api');
const port = 8080;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hotels').then((result) => {
    console.log('La conexión se realizó de forma exitosa');

    api.listen(port, () => {
        console.log(`Conectado por el puerto ${port}`);
    })

}).catch((err) => {
    console.log(err);

});