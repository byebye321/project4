const Parent = require('../models/parent')

function getallParent (req, res){
  Parent.find((err, parent) => {
    res.status(200).json({parent: parent})
  })
}

module.exports = {
  index: getallParent
}
