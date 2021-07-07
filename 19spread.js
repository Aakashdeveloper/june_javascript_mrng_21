function add(a,b,c,d){
    console.log("a>>>",a)
    console.log("b>>>",b)
    return a+b+c+d
}

var num = [1,2,3,4]

add(num)
"1,2,3,4undefinedundefinedundefined"

function add(a,b,c,d){
    console.log("a>>>",a)
    console.log("b>>>",b)
    return a+b+c+d
}

var num = [1,2,3,4]
add(num)
a>>> (4) [1, 2, 3, 4]
b>>> undefined
"1,2,3,4undefinedundefinedundefined"


function add(a,b,c,d){
    console.log("a>>>",a)
    console.log("b>>>",b)
    return a+b+c+d
}

var num = [1,2,3,4]
add(...num)


function add(...rest){

}
add(...spread)
///// if we use ... for passing parameter than we call it as spread
// if we use ... for defining the function that rest


// here ...args act like rest
function add(...args){
    var sum = 0;
    for(data of args){
        sum += data
    }
    return sum
}

var num = [1,2,3,4]
/// ...num act like spread
add(...num)


var b = [1,2,3,4]
var a = ['a','b',...b,'c','d']
a
["a", "b", 1, 2, 3, 4, "c", "d"]

var out1 = [1,2,3]
var out2 = [...out1,4,5,6]
out2
(6) [1, 2, 3, 4, 5, 6]