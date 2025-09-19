document.addEventListener("DOMContentLoaded", function () {
  const signinForm = document.getElementById("signinForm");
  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Both username and password are required!");
      return;
    }

    fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.message.includes("successful")) {
          window.location.href = "homePage.html";
        }
      })
      .catch((err) => {
        alert("Something went wrong! Please try again.");
        console.error(err);
      });
  });
});
