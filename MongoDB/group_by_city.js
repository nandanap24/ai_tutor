db.users.aggregate([{$group: {_id: "$city", count: {$sum: 1}}}, {$match: {count: {$gt: 1}}}, {$project: {_id: 0, city:"$_id", count: 1}}])

/* [
  { count: 2, city: 'Kottayam' },
  { count: 2, city: 'Kozhikode' },
  { count: 2, city: 'Trivandrum' },
  { count: 3, city: 'Kochi' }
]
 */
/*
  db.users.insertMany([
{ name: "Arya", age: 21, course: "CS", score: 78, city: "Trivandrum", tags: ["beginner","web"] },
{ name: "Rohan", age: 25, course: "CS", score: 92, city: "Kochi", tags: ["advanced","algorithms"]
},
{ name: "Neha", age: 22, course: "IT", score: 85, city: "Kozhikode", tags: ["web","design"] },
{ name: "Akhil", age: 20, course: "ECE", score: 70, city: "Kottayam", tags: ["hardware"] },
{ name: "Meera", age: 23, course: "IT", score: 88, city: "Kochi", tags: ["ml","web"] },
{ name: "Sana", age: 27, course: "CS", score: 95, city: "Trivandrum", tags: ["ml","advanced"] },
{ name: "Vikram", age: 24, course: "CS", score: 60, city: "Alleppey", tags: ["beginner"] },
{ name: "Priya", age: 21, course: "IT", score: 82, city: "Kottayam", tags: ["web"] },
{ name: "Rita", age: 29, course: "ECE", score: 91, city: "Kochi", tags: ["embedded","advanced"] },
{ name: "John", age: 19, course: "CS", score: 55, city: "Kozhikode", tags: [] }
])
  */
