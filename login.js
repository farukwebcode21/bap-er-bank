document.getElementById('login-submit').addEventListener('click', ()=>{
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
   
    if(userEmail == 'faruk@gmail.com' && userPassword == 'secret'){
        // console.log('valid user')
        window.location.href ='banking.html';
    }else{
        window.alert('Invalid User');
    }
});

