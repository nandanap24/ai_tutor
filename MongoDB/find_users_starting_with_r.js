db.users.find({name: /^R/})

/*  
[
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2a6'),
    name: 'Rohan',
    age: 25,
    course: 'CS',
    score: 92,
    city: 'Kochi',
    tags: [ 'advanced', 'algorithms' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2ad'),
    name: 'Rita',
    age: 29,
    course: 'ECE',
    score: 91,
    city: 'Kochi',
    tags: [ 'embedded', 'advanced' ]
  }
]
*/
