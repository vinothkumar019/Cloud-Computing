document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validatePasswords()) {
        return;
      }
      signup();
    });
  });
  
  function signup() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("psw-repeat").value.trim();
  
    if (!username || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.message.includes("successful")) {
          window.location.href = "/signin.html";
        }
      })
      .catch((err) => {
        alert("Something went wrong! Please try again.");
        console.error(err);
      });
  }
  