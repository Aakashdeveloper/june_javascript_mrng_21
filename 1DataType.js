Es > Ecma Script 

es5
Es6
Es7
>>>>>>>>>>>>>>>><<<<<<<<<<<<<<< 

String > "Hii" 'hey' 'hello' '35345' 'df34' 'true' "false" `JavaScript`
Number > 35 4 33464645 4534.4634 .4643
Boolean > true false

null 
undefined

////////////////
Declare variable in Es5 

var a = 10
var b = "Hi"
var c = true
a
10

typeof(a)
"number"
typeof(b)
"string"
typeof(c)
"boolean"

var d = "11"
typeof(d)
"string"

var e = 'Hello'
typeof(e)
"string"

var f = 10.11
typeof(f)
"number"

var a = 10
undefined
var b = 20

a+b (addition)
30
b-a
10
b-a
10
a-b
-10
a*b
200
a/b
0.5

4%4 (modules)
0
4%2
0


2%4
2
3%4
3
4%4
0

> modules of smaller to larger is always smaller

///////////
var a = "Hi"
var b = "JavaScript"

a+b (concat)
"HiJavaScript"
a-b
NaN (not a number)
a*b
NaN
a/b
NaN

var a = "hi"
var b = 10
a+b
"hi10"
b+a 
"10hi"
a-b
NaN


string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"


10+20+"30"
30+"30"
"3030"

"10"+20+30
"1020"+30
"102030"


10+"20"+30-1
"102030"-1
102029

10+20+"30"-1
"3030"-1
3029

"10"+20+30-1
"102030"-1
102029

10+"20"+30-1
102029
"10"+1
"101"
"10"-1
9
10-"1"
9
"10"*"2"
20
"10"/'2'
5
10/'2'
5
'10'/2
5
"10a"-1
NaN
10-'a1'
NaN
10-'1a'
NaN (not a number)
10+'1a'
"101a"

if both side of operator ist pure number than expect + is concat
all operator will work as math (-,*,/,%)



20-"1"+"10"-1 =1909
19+"10"
"1910"-1 
1909
