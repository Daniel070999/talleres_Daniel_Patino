const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema');
const root = require('./resolvers');
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