var seeder = require('mongoose-seed')

var data = [
  {
    model: 'Parent',
    documents: [
      {
        username: 'parent' ,
        password: 'parent',
        email: 'parent@gmail.com',
        aboutme: 'I am a parent',
        address: '111 Pokemon Ave Postal Code 00123',
        no_ofchildren: 2,
        childrenage: 5
      }
    ]
  },
  {
    model: 'Sitter',
    documents: [
    {
      username: 'pokemon',
      password: 'pokemon',
      fullname: 'Pokemon Trainer',
      email: 'hello@gmail.com',
      gender: 'Female',
      address: '123 Pikachu St, Postal Code 1111',
      birthday: '01/01/1900',

      }
    ]
  }

]

seeder.connect('mongodb://default:pokemon@ds145365.mlab.com:45365/sitter', function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/booked_date.js',
    'models/parent.js',
    'models/sitter.js',
    'models/sitterreview.js'
  ])

  // clears the data and reloads data
  seeder.clearModels(['BookedDate', 'Parent', 'Sitter', 'Sitterreviews'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      console.log('done populating model');
      process.exit();
    })
  })
})
