const express = require('express')
const routes = require('./routes')

const app = express()
const port = 8081

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('\nSever rodando http://localhost:8081\n'))
