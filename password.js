let checkPwd = function(){
    let correctPwd = "covid19";

    let password = document.getElementById("pass");
    console.log(password);

    if (password.value != correctPwd){
        alert("Incorrect password!");
        password.value = "";
        password.focus();
    }else{
        document.location.replace('https://www.google.ca');
    }
}