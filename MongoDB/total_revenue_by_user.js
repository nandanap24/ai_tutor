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
/* QUESTION DATA
  db.orders.insertMany([
{ user: "Arya", item: "Apple", qty: 5, pricePer: 20, date: new Date("2025-11-01") },
{ user: "Rohan", item: "Banana", qty: 10, pricePer: 5, date: new Date("2025-10-29") },
{ user: "Meera", item: "Apple", qty: 2, pricePer: 20, date: new Date("2025-11-18") },
{ user: "Sana", item: "Orange", qty: 4, pricePer: 15, date: new Date("2025-09-20") },
{ user: "Rita", item: "Apple", qty: 12, pricePer: 20, date: new Date("2025-11-20") },
{ user: "Priya", item: "Banana", qty: 3, pricePer: 5, date: new Date("2025-11-10") }
])
*/
