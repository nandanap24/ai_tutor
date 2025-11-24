db.employees.find({ department: "Engineering" })

/*output
[
    {
        "_id": 1,
        "name": "John Doe",
        "age": 28,
        "position": "Software Engineer",
        "salary": 80000,
        "department": "Engineering",
        "hire_date": ISODate("2021-01-15")
    },
    {
        "_id": 2,
        "name": "Jane Smith",
        "age": 34,
        "position": "Project Manager",
        "salary": 95000,
        "department": "Engineering",
        "hire_date": ISODate("2019-06-23")
    },
    {
        "_id": 4,
        "name": "Michael Brown",
        "age": 29,
        "position": "Software Engineer",
        "salary": 85000,
        "department": "Engineering",
        "hire_date": ISODate("2020-07-30")
    }
]
*/
/*QUESTION DATA
[
    {
        ""_id"": 1,
        ""name"": ""John Doe"",
        ""age"": 28,
        ""position"": ""Software Engineer"",
        ""salary"": 80000,
        ""department"": ""Engineering"",
        ""hire_date"": ISODate(""2021-01-15"")
    },
    {
        ""_id"": 2,
        ""name"": ""Jane Smith"",
        ""age"": 34,
        ""position"": ""Project Manager"",
        ""salary"": 95000,
        ""department"": ""Engineering"",
        ""hire_date"": ISODate(""2019-06-23"")
    },
    {
        ""_id"": 3,
        ""name"": ""Emily Johnson"",
        ""age"": 41,
        ""position"": ""CTO"",
        ""salary"": 150000,
        ""department"": ""Management"",
        ""hire_date"": ISODate(""2015-03-12"")
    },
    {
        ""_id"": 4,
        ""name"": ""Michael Brown"",
        ""age"": 29,
        ""position"": ""Software Engineer"",
        ""salary"": 85000,
        ""department"": ""Engineering"",
        ""hire_date"": ISODate(""2020-07-30"")
    },
    {
        ""_id"": 5,
        ""name"": ""Sarah Davis"",
        ""age"": 26,
        ""position"": ""UI/UX Designer"",
        ""salary"": 70000,
        ""department"": ""Design"",
        ""hire_date"": ISODate(""2022-10-12"")
    }
]*/
