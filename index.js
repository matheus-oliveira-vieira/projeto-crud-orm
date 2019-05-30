const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const pessoas = require('./routes/pessoas')

app.use(express.static('public'))
app.use('/pessoas', pessoas)
app.set('view', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(port, () => console.log('Connected'))