const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const routes = require('./routes/index')
const bodyParser = require('body-parser')

app.use('/frontend', express.static('public'))
//serve files from public folder when you go to /frontend routes
app.use(bodyParser.json())
app.use('/', routes)



mongoose.connect('mongodb://default:pokemon@ds145365.mlab.com:45365/sitter')

app.listen(port, ()=>{
  console.log(`listening to port ${port}`)
})

module.exports = app
