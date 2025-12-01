db.employees.find({projects: {$elemMatch: {name: "AI Bot"}}})

/*  
[
  {
    _id: 1,
    name: 'John Doe',
    age: 28,
    position: 'Software Engineer',
    salary: 90000,
    department: 'Engineering',
    hire_date: ISODate('2021-01-15T00:00:00.000Z'),
    bonus: 5000,
    projects: [ { name: 'AI Bot', duration: 5 } ]
  }
]
*/
