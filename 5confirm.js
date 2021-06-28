console.log() >>>>>> for checking output and debugging
alert() >>>>>for notification
prompt() >>> to take input from user 
confirm() >> to check weather yes or no 

alert("Form submitted")
alert("Slot is full")

confirm("Do you want to leave")
true
confirm("Do you want to leave")
false
var out = confirm("Do you want to leave")
out
true
var out = confirm("Do you want to leave")
out
false

prompt("What is your name")
"Aakash"
prompt("What is your age")
"10"

var a = prompt("Enter first number");
var b = prompt("Enter second number");
alert(a+b)
"1011"

var a = prompt("Enter first number");"10.13"
var b = prompt("Enter second number");"20.65"
alert(Number(a)+Number(b))
30.78


var a = prompt("Enter first number");
var b = prompt("Enter second number");
alert(Number(a+b))
NaN

var a = prompt("Enter first number");"10"
var b = prompt("Enter second number");"20"
alert(parseFloat(a+b))
1020