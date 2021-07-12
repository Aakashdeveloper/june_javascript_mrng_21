var calc = {
    sum: function(a,b) {return a+b},
    sub: (a,b) => {return a-b},
}

calc.sum(30,20)
50
calc.sub(30,20)
10

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name, city values(${data.name},${data.city})`}
}

dbQuery.find('students')
"Select * from students"
dbQuery.insert('employee',{name:'John',city:'Delhi'})
"insert into employee name, city values(John,Delhi)"