const pass = require('../../clave');
const mongoose = require('mongoose')

const conectar = () => {
    mongoose.connect(`mongodb+srv://daniel:${pass.clave}@cluster0.ydua0ua.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(data => { console.log('mongoDB conectado') })
        .catch(err => { console.log(`[error] - ${err}`) })
}

module.exports = conectar;