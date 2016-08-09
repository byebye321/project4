const Sitter = require('../models/sitter')

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

module.exports = {
  index: getallSitter,
  show: getOneSitter
}
