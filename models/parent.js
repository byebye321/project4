const mongoose = require('mongoose')

const ParentSchema = mongoose.Schema ({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  aboutme: {type: String, required: true},
  joindate: {type: Date, default: Date.now},
  address: {type: String, required: true},
  no_ofchildren: {type: Number, required: true},
  childrenage: {type: Number, required: true}
})
module.exports = mongoose.model('Parent', ParentSchema)
