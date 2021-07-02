if(condition){
    //do something
}else{
    // do something
}

var a = 8772
undefined
a%2==0
true
a%3==0
true
a%5==0
false

var a = 54652
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 54652 is even

var a = 5465
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 5465 is odd

var name = "Priya";
if(name=="Priyanka"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name=="Priya"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}

var name = "John"
var role = "User"

if(role == "Admin"){
    if(name == "Aakash"){
        console.log(`Hi ${name} your role is ${role}`)
    }else{
        console.log(`Hi ${name} your role is unknown`)
    }
}else if(role == "User"){
    if(name == "John"){
        console.log(`Hi ${name} your role is ${role}`)
    }else{
        console.log(`Hi ${name} your role is unknown`)
    }
}else{
    console.log(`Invalid Input`)
}


//////////
// any condition can match
var name = "Tina"
if(name == "Tina" || role=="Admin"){
    console.log(`Hi ${name} your role is ${role}`)
}
// both match
var name = "Tina"
if(name == "Tina" && role=="Admin"){
    console.log(`Hi ${name} your role is ${role}`)
}

var name = "Tina"
if(name == "Tina" && (role=="Admin" || role=="User")){
    console.log(`Hi ${name} your role is ${role}`)
}

var a = 1;
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
hii

var a = 0;
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
bie

var a = -1;
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
hii

//////////////////////
Ternary> Single line if else
//////////////////
condition? if true : if false

var a = 10;
a>10?"hii":"bie"
"bie"

var a = 10;
a==10?"hii":"bie"
"hii"

var a = 10;
a>10?a+1:a-1
9

var a = 10;
a==10?a+1:a-1
11

// wrong code ////
var a = 10;
a==10?a+1:a-1?"Hii":"Bie"
11

var a = 10;
a>10?a+1:a-1?"Hii":"Bie"
"Hii"