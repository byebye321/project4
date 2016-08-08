const BookedDate = require('../models/booked_date')

function getallParent (req, res){
  Parent.find((err, parent) => {
    res.status(200).json({parent: parent})
  })
}

module.exports = {
  index: getallBookeddate
}
