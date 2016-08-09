const mongoose = require('mongoose')

const ParentSchema = mongoose.Schema ({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  aboutme: {type: String},
  joindate: {type: Date, default: Date.now},
  address: {type: String},
  no_ofchildren: {type: Number},
  childrenage: {type: Number}
})
module.exports = mongoose.model('Parent', ParentSchema)
