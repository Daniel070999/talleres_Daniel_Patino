const mongoose = require('mongoose');
const pass = require('../../clave');

const conectar = () => {
    mongoose.connect(`mongodb+srv://daniel:${pass.clave}@cluster0.ydua0ua.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {console.log('MONGODB conectado.')})
      .catch((error) => {console.log( `[error] - ${error}` )})
}

module.exports = conectar