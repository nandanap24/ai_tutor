db.employees.find({ salary: { $nin: [85000, 150000] } })


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
    _id: 5,
    name: 'Sarah Davis',
    age: 26,
    position: 'UI/UX Designer',
    salary: 70000,
    department: 'Design',
    hire_date: ISODate('2022-10-12T00:00:00.000Z')
  }
]
*/
