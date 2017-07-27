'use strict';

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const data = require('./data.js')

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './build')))

// listen
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log('listening on port', port)
})

// routes
app.get('/', (req, res, next) => {
  res.sendFile('index')
})

app.get('/api/demo-question', (req, res, next) => {
  res.json(data)
})
