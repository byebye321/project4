const mongoose = require('mongoose')

const SitterreviewSchema = mongoose.Schema ({
  date: {type: String, required: true},
  reviewer: {type: String, required: true},
  contents: {type: String, required: true}
})
module.exports = mongoose.model('Sitterreviews', SitterreviewSchema)
