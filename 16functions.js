function
method
arrow function
iffi
generator
//////////////////
var a = 10;
var b = 20;
a+b
30

function add(a,b){
    return a+b
}

add(1,2)
3
add(10,20)
30
add('a','b')
"ab"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
"Number 5 is odd"
isEven(50)
"Number 50 is even"

function test(a,b){
    return a,b
}

test(1,2)
2

function test(a,b){
    return b,a 
}

test(1,2)
1

function test(a,b){
    var out = [a,b]
    return out
}
test(1,2)
(2) [1, 2]

//Es6 >>> Rest
// with rest we can take any number of parameters
// it return all parameters in from of array

function add(...args){
    console.log(args)
}

add(1,2,3,4,5,6)
[1, 2, 3, 4, 5, 6]

add(1,2)
[1, 2]

add('hii','bie','Hey')
["hii", "bie", "Hey"]


function add(...args){
    var sum = 0;
    for(data of args){
        //sum = data+sum
        sum += data
    }
    return sum
}

add(1,2)
3
add(1,2.5,4,6,9)
22.5

//////////
method> when function assign to variable
/////////
function add(a,b){
    return a+b
}
add(1,2)
3
-------Method--------
var add = function(a,b){
    return a+b
}

add(1,2)
3

////////////////
Arrow Functions (es6)
////////////////
var add = (a,b) => {
    return a+b
}

add(1,2)

function returnFunctionData(){
    var userName = "John"

    function add(a,b){
        console.log(a+b)
    }
    function sub(a,b){
        console.log(a-b)
    }
    function mul(a,b){
        console.log(a*b)
    }

    return {
        // add: add
        add,
        sub: sub,
        mul: mul,
        userName
    }
}

var mytest = returnFunctionData()
undefined
mytest.userName
"John"
mytest.add(1,2)
VM580:5 3