db.employees.find().sort({salary: -1}).limit(1)

/*
[
  {
    _id: 3,
    name: 'Emily Johnson',
    age: 41,
    position: 'CTO',
    salary: 150000,
    department: 'Management',
    hire_date: ISODate('2015-03-12T00:00:00.000Z')
  }
]
*/
