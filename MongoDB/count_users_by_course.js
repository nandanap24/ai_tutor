db.users.aggregate([{$group: {_id: "$course", count: {$sum: 1}}}])

/*  
[
  { _id: 'ECE', count: 2 },
  { _id: 'CS', count: 5 },
  { _id: 'IT', count: 3 }
]
*/
