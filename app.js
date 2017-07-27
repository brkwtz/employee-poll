'use strict';

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './build')))

//listen
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log('listening on port', port)
})

app.get('/', (req, res, next) => {
  res.sendFile('index')
})

app.get('/:rating', (req, res, next) => {
  res.json(req.rating)
})
