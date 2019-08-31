var btnSignin = document.getElementById('signin');
var btnSignup = document.getElementById('signup');
var inputs = document.querySelectorAll(
    '.label-input>input[type=text],'+
    '.label-input>input[type=password],'+
    '.label-input>input[type=email]'
    );
var login= false;
var count =0;
for ( input of inputs)
{
    count++;
    input.setAttribute('id','input'+count);
    input.setAttribute('onfocus','getFocusIn('+input.id+')');
    input.setAttribute('onblur','getFocusOut('+input.id+')');
    console.log(input.id);
    
}

function getFocusIn(id)
{
    var parent = id.parentNode;
    parent.style.border=".5px solid #58af9b";
    
}

function getFocusOut(id)
{
    var parent = id.parentNode;
    parent.style.border="none";    
}

var body = document.querySelector('body');

btnSignin.addEventListener("click", function(){

    setTimeout(function(){
      
        toogleClass(true);

    },1000);
    
})

function toogleClass(open){

    if(open)
    {
        body.className = "sign-in-js";  
        !login
    }
    else
    {
        body.className =  "sign-up-js"; 
        !login   
    }
}

btnSignup.addEventListener("click", function (){

    setTimeout(function(){

        toogleClass(false);

    },1000);
   
})

