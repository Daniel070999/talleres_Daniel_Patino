const storage = require('./storage')

function agregarPais( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerPais( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarPais( dato ) {
    return new Promise((resolve, reject) => {
        let pais = {
            nombre: dato.nombre,
            codigo: dato.codigo
        }
        resolve( storage.actualizar( pais ) )
    })
}

function eliminarPais( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarPais,
    obtenerPais,
    actualizarPais,
    eliminarPais
}