db.users.aggregate([{$group: {_id: "$city", avgScore: {$avg: "$score"}}}, {$match: {avgScore: {$gte: 80}}}, {$project: {_id: 0, city: "$_id", avgScore: {$round: ["$avgScore", 0]}}}])

/*  
  [
  { city: 'Trivandrum', avgScore: 86 },
  { city: 'Kochi', avgScore: 90 }
]
*/
