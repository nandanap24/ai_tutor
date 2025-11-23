db.users.find().sort({score: -1, age: 1})
/*  
[
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2aa'),
    name: 'Sana',
    age: 27,
    course: 'CS',
    score: 95,
    city: 'Trivandrum',
    tags: [ 'ml', 'advanced' ]
  },
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
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2a9'),
    name: 'Meera',
    age: 23,
    course: 'IT',
    score: 88,
    city: 'Kochi',
    tags: [ 'ml', 'web' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2a7'),
    name: 'Neha',
    age: 22,
    course: 'IT',
    score: 85,
    city: 'Kozhikode',
    tags: [ 'web', 'design' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2ac'),
    name: 'Priya',
    age: 21,
    course: 'IT',
    score: 82,
    city: 'Kottayam',
    tags: [ 'web' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2a5'),
    name: 'Arya',
    age: 21,
    course: 'CS',
    score: 78,
    city: 'Trivandrum',
    tags: [ 'beginner', 'web' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2a8'),
    name: 'Akhil',
    age: 20,
    course: 'ECE',
    score: 70,
    city: 'Kottayam',
    tags: [ 'hardware' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2ab'),
    name: 'Vikram',
    age: 24,
    course: 'CS',
    score: 60,
    city: 'Alleppey',
    tags: [ 'beginner' ]
  },
  {
    _id: ObjectId('691ffc9c101c4173ec9dc2ae'),
    name: 'John',
    age: 19,
    course: 'CS',
    score: 55,
    city: 'Kozhikode',
    tags: []
  }
]
*/
