document.getElementById('login-submit').addEventListener('click', function(){
    const email = document.getElementById('user-email');
    const inputemail = email.value;
    const password = document.getElementById('user-password');
    const loginPassword = password.value;
    if(inputemail == "faruk@gmail.com" && loginPassword =="password"){
        window.location.href = 'banking.html'
    }else{
        window.alert('Please Input Correct UserName and password')
    }
});
