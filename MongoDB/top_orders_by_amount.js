db.orders.aggregate([{ $project: {user: 1, item: 1, qty: 1,pricePer: 1, total: {$multiply: ["$qty", "$pricePer"]}}}, {$sort: {total: -1}}, {$limit: 2}])

/*
[
  {
    _id: ObjectId('691ffcb4101c4173ec9dc2b3'),
    user: 'Rita',
    item: 'Apple',
    qty: 12,
    pricePer: 20,
    total: 240
  },
  {
    _id: ObjectId('691ffcb4101c4173ec9dc2af'),
    user: 'Arya',
    item: 'Apple',
    qty: 5,
    pricePer: 20,
    total: 100
  }
]
*/
