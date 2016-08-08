const Sitter = require('../models/sitter')

function getallSitter (req, res){
  Sitter.find((err, sitter) => {
    res.status(200).json({sitter: sitter})
  })
}

module.exports = {
  index: getallSitter
}
