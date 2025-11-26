db.employees.find({}, { name: 1, _id: 0})

/*  
[
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Emily Johnson' },
  { name: 'Michael Brown' },
  { name: 'Sarah Davis' }
]
*/
