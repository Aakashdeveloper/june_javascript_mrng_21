// Array is a collection of homogeneous datatype as well as heterogeneous

var a = [1,4,5,554,43,797,0,044] (array of number)
var b = ['sdbg','dsgdf','r3r3','ebfe3'] (array of string)
var c = [true,false,false,true] (array of boolean)

var d = [1,2,true,'cd',false,false,34,634,"esdgd","db",2]

var city = ["Delhi","Venice","Amsterdam","London"]
typeof(city)
"object";



var city = ["Delhi","Venice","Amsterdam","London"]
undefined
city[1]
"Venice"
city[0]
"Delhi"
city.length
4
city[city.length-1]
"London"


var city = ["Delhi","Venice","Amsterdam","London"]
undefined
city.push('Mumbai')
5
city
(5) ["Delhi", "Venice", "Amsterdam", "London", "Mumbai"]0: "Delhi"1: "Venice"2: "Amsterdam"3: "London"4: "Mumbai"5: "Dubai"length: 6__proto__: Array(0)
city.push('Dubai')
6
city
(6) ["Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
city.pop()
city
(5) ["Delhi", "Venice", "Amsterdam", "London", "Mumbai"]
city.pop(2)
"Mumbai"
(4) ["Delhi", "Venice", "Amsterdam", "London"]
city.pop(100)
"London"
city
(3) ["Delhi", "Venice", "Amsterdam"]

var city = ["Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
city.unshift('Nice')
7
city
(7) ["Nice", "Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
city.shift()
"Nice"

push> add in the end of the array
unshift> always remove first value
pop > remove always last value
shift> remove first value

var city = ["Nice", "Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
undefined
city.slice(1)
(6) ["Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
city.slice(2)
(5) ["Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
city
(7) ["Nice", "Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]


var city = ["Nice", "Delhi", "Venice", "Amsterdam", "London", "Mumbai", "Dubai"]
city.splice(startIndex, DeleteCount, values)

// on index 2 delete 2 values
city.splice(2,2)
(2) ["Venice", "Amsterdam"]
city
(5) ["Nice", "Delhi", "London", "Mumbai", "Dubai"]

// on index 1 dont delete value but add 2 values
city.splice(2,0,'Paris','Boston')
city
(7) ["Nice", "Delhi", "Paris", "Boston", "London", "Mumbai", "Dubai"]

// on index 3 delete one value and add 1 value;
city.splice(3,1,'Edinberg')
(7) ["Nice", "Delhi", "Paris", "Boston", "London", "Mumbai", "Dubai"]
city.splice(3,1,'Edinberg')
["Boston"]
city
(7) ["Nice", "Delhi", "Paris", "Edinberg", "London", "Mumbai", "Dubai"]

var a =['a',2,'c',1]
var b = [2,'d',4]

a+b
"a,2,c,12,d,4"
a-b
NaN

a.concat(b)
["a", 2, "c", 1, 2, "d", 4]

var c = [4,'e',4,7]

a.concat(b,c)
(11) ["a", 2, "c", 1, 2, "d", 4, 4, "e", 4, 7]
c.concat(a,b)
(11) [4, "e", 4, 7, "a", 2, "c", 1, 2, "d", 4]

var city = ["Nice", "Delhi", "Paris", "Edinberg", "London", "Mumbai", "Dubai"]
undefined
city.indexOf('Delhi')
1
city.indexOf('Hongkong')
-1
city.indexOf('Pune')
-1
city.indexOf('London')
4
city.indexOf('Nice')
0