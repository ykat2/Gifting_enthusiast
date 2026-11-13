function validateLogin() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var msg = document.getElementById("errorMsg");

  // if user entered empty box
  if (email === "" || password === "") {
    msg.textContent = "Please fill in all fields.";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Please enter a valid email.";
    return false;
  }

  
// if user entered wrong email format
if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Please enter a valid email.";
    return false;
  }

  // if user entered less than 8 characters
  if (password.length < 8) {
    msg.textContent = "Password must be at least 8 characters.";
    return false;
  }

  msg.textContent = "";
  window.location.href = "HomePage.html";
  return false;
}