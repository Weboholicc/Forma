
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('error-message');
    const errorXmark = document.getElementById('error-xmark');
    const sucessCheck = document.getElementById('sucess-check');
    const sucessCheckPass = document.getElementById('sucess-check-pass');
    const errorXmarkPass = document.getElementById('error-xmark-pass');

  
   
    function validateUsername() {
      const username = usernameInput.value.trim();
    
  
      if (username === 'new_user') {
        usernameInput.style.borderColor = '#2ecc71';
        errorMessage.innerText = 'Please enter a username';
        errorMessage.innerText = ''; 
        sucessCheck.style.visibility = 'visible';
        errorXmark.style.visibility = 'hidden';

        
      } else if (username === '') {
        usernameInput.style.borderColor = '#e74c3c';
        errorMessage.innerText = 'Please enter a username';
        errorXmark.style.visibility = 'visible';
        sucessCheck.style.visibility = 'hidden';

    }
      
      else {                                            
        usernameInput.style.borderColor = '#e74c3c';
        
        errorMessage.innerText = 'Please enter valid Username';
        errorXmark.style.visibility = 'visible';
        sucessCheck.style.visibility = 'hidden';

        
    
          
      }
    }
  
    function validatePassword() {
      const password = passwordInput.value.trim();
  
      if (password === 'newuser123') {
        errorMessage.style.display = 'none';
        passwordInput.style.borderColor = '#2ecc71';
        errorXmarkPass.style.visibility = 'hidden';
        sucessCheckPass.style.visibility = 'visible';
        errorMessage.innerText = '';
        submitButton.disabled = false;
        
      } 

      else if (password === '') {
        passwordInput.style.borderColor = '#e74c3c';
        errorMessage.innerText = 'Please enter a password';
        errorXmarkPass.style.visibility = 'visible';
        sucessCheckPass.style.visibility = 'hidden';

    }
      
      
      
      else {
        passwordInput.style.borderColor = '#e74c3c'; 
        errorXmarkPass.style.visibility = 'visible';
        sucessCheckPass.style.visibility = 'hidden';
        errorMessage.innerText = 'Please enter valid Password';                                           
        errorMessage.style.display = 'block';
        submitButton.disabled = true;
        
      }
    }
    
  
  
    usernameInput.addEventListener('keyup', validateUsername);
    passwordInput.addEventListener('keyup', validatePassword);
  });


