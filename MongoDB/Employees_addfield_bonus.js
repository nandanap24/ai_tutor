db.employees.updateMany({department: "Engineering"}, {$set: {bonus: 5000}})

/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
*/
