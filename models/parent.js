const mongoose = require('mongoose')

const ParentSchema = mongoose.Schema ({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  aboutme: {type: String, required: true},
  joindate: {type: String, required: true},
  address: {type: String, required: true},
  no_ofchildren: {type: String, required: true},
  childrenage: {type: String, required: true},
})
module.exports = mongoose.model('Parent', ParentSchema)
