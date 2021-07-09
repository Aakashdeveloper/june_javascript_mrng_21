//local scope
//global scope

//enclose something
/*1
var a = 10;
function add(){
    var b = 20;
    return a+b
}

console.log("a>>>>",a)
console.log("b>>>>",b)
console.log("sum>>>>",add())

>2
var a = 10;
for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}

console.log("a>>>>",a)
console.log("b>>>>",b)


*/

>3
let a = 10;
function add(){
    a = 30;
    var b = 20;
    return a+b
}
console.log("a>>>>",a)
console.log("sum>>>>",add())
console.log("a>>>>",a)


4>
var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);

Answer: 2) '123bcd'



5>
var employeeId = 'abc123';
function foo() {
    employeeId = '123bcd';
	return;

	function abc() {}
}
foo();
console.log(employeeId);
Answer: 3) '"123bcd"'



6>
var employeeId = 'abc123';
function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();
Answer: 2) 'function'

7>
var employeeId = 'abc123';
function foo() {
    abc();
    return;
	function abc() {
		console.log(typeof employeeId);
	}
}

"string"

8>
var employeeId = 'abc123';
function foo() {
    employeeId = 10
    abc();
    return;
	function abc() {
		console.log(typeof employeeId);
	}
}

number

///////

function mul(a,b,c){
    return a*b*c
}

mul(2,3,4)
24


function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
mul(2)(3)(4)



