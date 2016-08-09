const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env PORT || 3000
const routes = require('./routes/index')

app.use('/', routes)

mongoose.connect('mongodb://pokemon:<dbpassword>@ds145365.mlab.com:45365/sitter')

app.listen(port, ()=>{
  console.log(`listening to port ${port}`)
})

module.exports = app
