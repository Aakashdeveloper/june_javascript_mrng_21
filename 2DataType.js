var a = true
var b = true
var c = false

a+b 
a+c
a+b
2
a+c 
1

true is equal to 1
false is equal to 0 

10+true
11
10/false
Infinity
10-true
9
"hi"-true
NaN
"hi"+true
"hitrue"
"10"-true
9
"10a"-true
NaN
"10a"+true
"10atrue"

"true"+"true"
"truetrue"

"true"-"true"
NaN

"10"-"2"
8

////////////////
var a = "10"
var b = "2"
a+b
"102"


var a = "10"
var b = "2"
undefined
a+b
"102"
parseInt(a)
10
var c = "hii"
undefined
parseInt(c)
NaN
parseInt(a)+parseInt(b)
12

var a= "10.11"
var b = "20.14"

parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.25

var c = "11"
parseFloat(a)+parseFloat(b)+parseFloat(c)
41.25
Number(a)+Number(b)
30.25
Number(a)+Number(b)+Number(c)
41.25

var a = "Delhi10"
var b = "1011Delhi5"
var c = "10Delhi"

parseInt(a)
NaN
parseInt(b)
1011
parseInt(c)
10

undefined
parseInt(a)
NaN
parseInt(b)
10
parseInt(c)
10
Number(a)
NaN
Number(b)
NaN
Number(c)
NaN
parseFloat(a)
NaN
parseFloat(b)
10
parseFloat(c)
10



var a = "10.11"
var b = "20.33"
a+b
"10.1120.33"
parseInt("10.1120.33")
10
parseFloat("10.1120.33")
10.112

var b = "20.5645467454"
parseFloat(b)
20.5645467454
var b = "10.1120.33"
parseFloat(b)
10.112
var b = "10.1125.33"
parseFloat(b)
10.1125

var b = "10.112544.88"
parseFloat(b)
10.112544
Number(b)
NaN

var a = NaN
typeof(a)
"number"