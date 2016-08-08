const mongoose = require('mongoose')

const BookedDateSchema = mongoose.Schema ({
  sitter_id: {type: String, required: true},
  parent_id: {type: String, required: true},
  bookeddate: {type: String, required: true},
  bookedtime: {type: String, required: true}
})
module.exports = mongoose.model('BookedDate', BookedDateSchema)
