const mongoose = require('mongoose')

const BookedDateSchema = mongoose.Schema ({
  sitter_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  parent_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  bookeddate: {type: Date, required: true}
})
module.exports = mongoose.model('BookedDate', BookedDateSchema)
