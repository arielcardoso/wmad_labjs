let checkPwd = function(){
    let password = document.getElementById("pass").value;
    
    if(password != "1234"){
        alert("inccorect password!");
        document.getElementById("pass").value="";
        document.getElementById("pass").focus();
    }else{
        document.location.replace('https://www.google.ca');
    }
}