db.employees.aggregate([{$group: {_id: "$department", count: {$sum: 1}}}])

/*  
[
  { _id: 'Design', count: 1 },
  { _id: 'Engineering', count: 3 },
  { _id: 'Management', count: 1 }
]
*/
