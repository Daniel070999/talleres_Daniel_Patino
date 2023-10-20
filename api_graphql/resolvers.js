const ClienteModel = require('./db');

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

module.exports = root;