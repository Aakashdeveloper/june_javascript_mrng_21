= assignment
== compare the data 
===  compare the data and dataType 

var a = 10;
var b = 5;
var c = "10";

a == c  > compare the data 
true
a === c > compare the data and dataType
false

a == b 
false
a===b
false

if == is false than === is always false

var d = 10
a == d
true
a === d
true

var a = 10;
var b = 5;
undefined
a>b
true
a<b

false
a !==b 
true
a != b
true
a >= b 
true
a => b
a => b
a <= b
false


var a = 10;
var c = "10";

a != c  > compare the data
false

a !== c > compare the data and dataType
true

> all the compare operator will always return boolean output

//negation
var a = true
!a
false

var a = false
!a
true 

var a = 1 
!a
false

var b = 0
!b
true

var a = 2 
!a
false

var b = "hi"
!b
false

var c = -1
!c
false

truthy > any number except 0 weather +ve or -ve , string , true
falsy > 0 , false, null ,undefined

/////////
var a = 1
var b = "hiii"
var c = "1"
(is not a number)
isNaN will give true for string
false for number

isNaN(a) (is 1 is not a number) (no its  a number)
false

isNaN(b) (as "hii" is not a number)
true

isNaN(c)
false

var  d= true 
isNaN(d)
false

var a ="1a"
isNaN(a)
true

//////////////
var a = "hii"
parseInt(a)
NaN

var b = NaN
typeof(b)
"number"