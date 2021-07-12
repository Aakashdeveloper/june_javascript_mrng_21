//Es5
let myObj = require('./first');

//
console.log(myObj.user);
///
console.log(myObj.dbQuery.find('students'))

//
/*
[ { name: 'Alvin', city: 'Boston' }, { name: 'Priya', city: 'Paris' } ]
Select * from students
*/