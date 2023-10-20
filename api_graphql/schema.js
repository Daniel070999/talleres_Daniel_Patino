const { buildSchema } = require('graphql')

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

module.exports = schema;