setInterval(function(){},time)

var myinterval = setInterval(function(){
    console.log(Math.random())
}, 3000)
undefined
VM44:2 0.008253699167830808
VM44:2 0.6834962001071692
VM44:2 0.6880761518857885
VM44:2 0.33129552475951507
VM44:2 0.4462133156220167
clearInterval(myinterval)

>> Run only once after certain amount of time

setTimeout(function(){
    console.log(Math.random())
},3000)
0.37593645092157213