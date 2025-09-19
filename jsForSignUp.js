
function validateRegisterNumber(input) {
    const value = input.value;
  
   
    if (!/^\d{0,10}$/.test(value)) {
      input.setCustomValidity("Register Number must contain only digits.");
    } 
   
    else if (value.length === 10 && value[0] === "0") {
      input.setCustomValidity("Register Number cannot start with zero.");
    } 

    else if (value.length > 10) {
      input.setCustomValidity("Register Number must be exactly 10 digits.");
    } 
    else {
      input.setCustomValidity("");
    }
  }
  

  function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("psw-repeat").value;
  

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (min 8 characters).");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
  
    return true;
  }
  

  document.getElementById("username").addEventListener("input", function() {
    validateRegisterNumber(this);
  });
  