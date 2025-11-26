db.employees.find({name: {$regex: "^E.*ohn.*son$", $options: "i"}}, {name: 1, department: 1, _id: 0})


/*  
[ { name: 'Emily Johnson', department: 'Management' } ]
*/
