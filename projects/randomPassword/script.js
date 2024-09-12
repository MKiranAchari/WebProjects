const passwordBox =document.getElementById("pass");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number="12345647890";
const symbols="@#$%^&*()_+-=[];',./{}|:<>?"
const allchar=upperCase+lowerCase+number+symbols;
function createPassword(){
    let password="";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password +=allchar[Math.floor(Math.random()*allchar.length)];
    }
    passwordBox.value =password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");   
}