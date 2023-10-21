const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const rootValue = require('./resolvers/resolver');
const db = require('./db')
const app = express()

db()

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: rootValue,
    graphiql: true
}))

app.get('/hi', (req, res) => {
    res.send('Hola desde el servidor.')
})

let port = 3000
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})