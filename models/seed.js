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
      fullname: 'Krystal Loft',
      email: 'hello@gmail.com',
      gender: 'Female',
      address: '123 Pikachu St, Postal Code 1111',
      birthday: '01/01/1978',
      image: 'img/girls/8.jpeg'

    },

    {
      username: 'Mary',
      password: 'pokemon',
      fullname: 'Marry Hall',
      email: 'mary@gmail.com',
      gender: 'Female',
      address: '12 Pikachu St, Postal Code 1111',
      birthday: '01/01/1909',
      image: 'img/girls/2.jpeg'

    },

    {
      username: 'Harry',
      password: 'pokemon',
      fullname: 'Wendy Badger',
      email: 'wendy@gmail.com',
      gender: 'Female',
      address: '121 Pikachu St, Postal Code 1111',
      birthday: '01/01/1902',
      image: 'img/girls/7.jpeg'

    },

    {
      username: 'Sarah',
      password: 'pokemon',
      fullname: 'Sarah Lee',
      email: 'sally@gmail.com',
      gender: 'Female',
      address: '122 Pikachu St, Postal Code 1111',
      birthday: '01/01/1901',
      image: 'img/girls/1.jpeg'

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
