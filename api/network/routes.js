const usuario = require('../components/usuario/interface')
const pais = require('../components/pais/interface')
const empresa = require('../components/empresa/interface')
const representantelegal = require('../components/representantelegal/interface')

const routes = function (server) {
    server.use('/usuario', usuario)
    server.use('/pais', pais)
    server.use('/empresa', empresa)
    server.use('/representantelegal', representantelegal)
}

module.exports = routes