db.users.find().sort({name: 1}).skip(3).limit(3)

/*  
[
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
  }
]
*/
