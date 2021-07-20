const validateFname = () => {
    var name = document.getElementById('fname').value;
    if(name.trim().length==0){
        document.getElementById('fout').innerText="Please Enter First Name"
    }else{
        document.getElementById('fname').value = name.trim()
        document.getElementById('fout').innerText=""
    }
}


function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.trim().length === 0 ){
        document.getElementById('eout').innerText="Please Enter Email Address"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please Enter Valid Email" 
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const validatePassword = () =>{
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length is 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.background="red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText=""; 
            document.getElementById('ppout').style.background="orange"
        }
    }else{
        document.getElementById('ppout').style.background="green"
    }
}


const validateCPassword = () =>{
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does not match";
    }else{
        document.getElementById('cpout').innerText="";
    }
    
}


const getExp = () =>{ 
    var exp = document.getElementById('exp').value;
    var totalExp = exp? exp: 0;
    document.getElementById('exout').innerText=`Your Total exp is ${totalExp} years`
}