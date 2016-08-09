const mongoose = require('mongoose')

const SitterreviewSchema = mongoose.Schema ({
  date: {type: String, required: true},
  parent_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  sitter_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  contents: {type: String, required: true}
})
module.exports = mongoose.model('Sitterreviews', SitterreviewSchema)
