function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(a.trim().length>0 || a.trim().length>0){
        if(isNaN(a) || isNaN(b)){
            out= "Enter Valid Input"
        }else{
            if(opt == "Add"){
                out = Number(a)+Number(b)
            }else{
                out = Number(a)-Number(b)
            }
        }
    }else{
        out= "Please Enter Valid Input" 
    }
    document.getElementById('output').innerText = out
}

/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b)
    document.getElementById('output').innerText = out
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = a-b
    document.getElementById('output').innerText = out
}
*/