db.employees.updateOne({name: "John Doe"}, {$set: {salary: 90000}})

/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/
