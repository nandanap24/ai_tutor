db.users.aggregate([{$group: {_id: "$city", count: {$sum: 1}}}, {$match: {count: {$gt: 1}}}, {$project: {_id: 0, city:"$_id", count: 1}}])

/* [
  { count: 2, city: 'Kottayam' },
  { count: 2, city: 'Kozhikode' },
  { count: 2, city: 'Trivandrum' },
  { count: 3, city: 'Kochi' }
]
 */
