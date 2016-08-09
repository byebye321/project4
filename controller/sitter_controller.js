const Sitter = require('../models/sitter')
const Bookeddate = require('../models/booked_date')

function getallSitter (req, res){
  Sitter.find((err, sitter) => {
    res.status(200).json({sitter: sitter})
  })
}

function getOneSitter (req, res){
  Sitter.findOne({_id: req.params.id}, function(err, sitter){
    res.status(200).json(sitter)
  })
}

function makeBooking (req, res){
  var newBooking = {
    sitter_id: req.params.id,
    parent_id: req.body.parentId,
    bookeddate: req.body.bookedDate
  }
Bookeddate.create(newBooking, function(err, newBooking){
  res.status(200).json({booking: newBooking})
})
}

module.exports = {
  index: getallSitter,
  show: getOneSitter,
  book: makeBooking
}
