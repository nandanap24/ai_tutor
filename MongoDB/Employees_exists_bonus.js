db.employees.find({bonus: {$exists: true}})

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
    bonus: 5000
  },
  {
    _id: 2,
    name: 'Jane Smith',
    age: 34,
    position: 'Project Manager',
    salary: 95000,
    department: 'Engineering',
    hire_date: ISODate('2019-06-23T00:00:00.000Z'),
    bonus: 5000
  },
  {
    _id: 4,
    name: 'Michael Brown',
    age: 29,
    position: 'Software Engineer',
    salary: 85000,
    department: 'Engineering',
    hire_date: ISODate('2020-07-30T00:00:00.000Z'),
    bonus: 5000
  }
]
*/
