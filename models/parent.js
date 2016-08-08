const mongoose = require('mongoose')

const ParentSchema = mongoose.Schema ({
  name: {type: String, required: true},
  aboutme: {type: String, required: true},
  joindate: {type: String, required: true},
  address: {type: String, required: true}
})
module.exports = mongoose.model('Parent', ParentSchema)
