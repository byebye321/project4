const mongoose = require('mongoose')

const SitterSchema = mongoose.Schema ({
  name: {type: String, required: true},
  aboutme: {type: String, required: true},
  joindate: {type: String, required: true}
})
module.exports = mongoose.model('Sitter', SitterSchema)
