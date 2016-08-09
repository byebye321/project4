const Parent = require('../models/parent')

function getallParent (req, res){
  Parent.find((err, parent) => {
    res.status(200).json({parent: parent})
  })
}

function loginParent (req, res) {
	Parent.findOne({username: req.body.username, password: req.body.password}, function(err, user){
		if (user) {
			res.status(200).json(user)
		} else {
			res.status(400).json({error:'invalid user'})
		}
	})
}

function signupParent (req, res) {
	var newParent = {
		username: req.body.username,
		password: req.body.password,
    email: req.body.email
	};

	Parent.create(newParent, function(err, parent) {
    console.log(err);
		res.status(200).json({parent: parent})
	})
}

module.exports = {
  index: getallParent,
  login: loginParent,
  signUp: signupParent
}
