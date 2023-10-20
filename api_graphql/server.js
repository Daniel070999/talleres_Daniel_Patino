const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://daniel:clave123@cluster0.ydua0ua.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ClienteModel = mongoose.model('Cliente', new mongoose.Schema({
    nombre: String,
    telefono: String,
}));

let schema = buildSchema(`
    type Cliente {
        id: String
        nombre: String
        telefono: String
    }
    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }
    type Mutation {
        addCliente(nombre: String, telefono: String): Cliente
    }
`)

/*  GraphQl local
let clientes = []
let counter = 1

 
let root = {
    clientes: () => { return clientes },
    cliente: (data) => {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == data.id) {
                return clientes[i]
            }
        }
    },
    addCliente: (data) => {
        let objeto = { 'id': counter, 'nombre': data.nombre, 'telefono': data.telefono }
        clientes.push(objeto)
        counter++
        return objeto
    }
}
*/
// Para mongo DB
let root = {
    clientes: () => {
        return ClienteModel.find();
    },
    cliente: ({ id }) => {
        return ClienteModel.findById(id);
    },
    addCliente: ({ nombre, telefono }) => {
        const nuevoCliente = new ClienteModel({ nombre, telefono });
        nuevoCliente.save();
        return nuevoCliente;
    },
};

let app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

let port = 4001
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});