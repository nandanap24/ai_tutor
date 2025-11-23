db.users.find({course: "CS", age: {$gt: 22}}, {name: 1, age: 1, _id: 0})

/*  
[
  { name: 'Rohan', age: 25 },
  { name: 'Sana', age: 27 },
  { name: 'Vikram', age: 24 }
]
*/
