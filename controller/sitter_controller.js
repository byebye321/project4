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

function loginSitter (req, res) {
	Sitter.findOne({username: req.body.username, password: req.body.password}, function(err, user){
		if (user) {
			res.status(200).json(user)
		} else {
			res.status(400).json({error:'invalid user'})
		}
	})
}

function signupSitter (req, res) {
	var newSitter = {
		username: req.body.username,
		password: req.body.password
	};

	Sitter.create(newSitter, function(err, sitter) {
		res.status(200).json({sitter: sitter})
	})
}

function getSitterAvailability (req, res) {

	//find a list of booking at that date
	Bookeddate.find({bookeddate: req.query.date}, function(err, bookings){

		//list of sitter will contain the list of sitter id booked during this date
		var listOfSitterBooked = [];
  	bookings.forEach(function(booking) {
  		listOfSitterBooked.push(booking.sitter_id.toString().trim());
  	})

		//get all the sitters
		Sitter.find((err, sitters) => {
      if (listOfSitterBooked.length == 0 ){
        res.status(200).json({sitters: sitters});

      } else {
        //filtered sitter will contain sitters that aren't booked at this date
  			filteredSitters = sitters.filter(function(sitter) {
  				return listOfSitterBooked.indexOf(sitter._id.toString()) < 0;
  			})
  			res.status(200).json({sitters: filteredSitters})
      }
		})
	})
}


module.exports = {
  index: getallSitter,
  show: getOneSitter,
  book: makeBooking,
  login: loginSitter,
  signUp: signupSitter,
  availability: getSitterAvailability
}
