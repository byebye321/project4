const mongoose = require('mongoose')

const SitterSchema = mongoose.Schema ({
  username: {type: String, required: true},
  password: {type: String, required: true},
  fullname: {type: String, required: true},
  email: {type: String, required: true},
  gender: {type: String, required: true},
  address: {type: String, required: true},
  birthday: {type: Date, required: true},
  joindate: {type: Date, default: Date.now}
})
module.exports = mongoose.model('Sitter', SitterSchema)
