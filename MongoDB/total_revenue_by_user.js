db.orders.aggregate([{$group: {_id: "$user", totalRevenue: {$sum: {$multiply: ["$qty", "$pricePer"]}}}}, {$sort: {totalRevenue: -1}}])

/*  
  [
  { _id: 'Rita', totalRevenue: 240 },
  { _id: 'Arya', totalRevenue: 100 },
  { _id: 'Sana', totalRevenue: 60 },
  { _id: 'Rohan', totalRevenue: 50 },
  { _id: 'Meera', totalRevenue: 40 },
  { _id: 'Priya', totalRevenue: 15 }
]
*/
