const pass = require('../clave');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://daniel:${pass.clave}@cluster0.ydua0ua.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ClienteModel = mongoose.model('Cliente', new mongoose.Schema({
    nombre: String,
    telefono: String,
}));

module.exports = ClienteModel;