// multiple condition and multiple output (if else)
// one condition and one output(ternary)
// one condition and multiple output (switch)
switch(condition){
    case output1:
        response
    case output2:
        response
    default:
        response
}


var name = 'Eva'
switch(name){
    case 'Aakash':
        console.log(`Hi ${name}`);
        break;
    case 'Eva':
        console.log(`Hi ${name}`);
        break;
    default:
        console.log(`Hi Unknown`)
}
Hi Aakash

var input = 2;
switch (input%2){
    case 0:
        console.log(`Number ${input} is even`);
        break;
    case 1:
        console.log(`Number ${input} is odd`);
        break;
    default:
        console.log(`Default Case`);

}

switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`)
        break;
    case 1:
        console.log(`Today is monday`)
        break;
    default:
        console.log(`Wrong Input`)
}

Today is monday