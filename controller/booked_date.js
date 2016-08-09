const BookedDate = require('../models/booked_date')

function getallBookeddate (req, res){
  Bookeddate.find((err, bookeddate) => {
    res.status(200).json({bookeddate: bookeddate})
  })
}

module.exports = {
  index: getallBookeddate
}
