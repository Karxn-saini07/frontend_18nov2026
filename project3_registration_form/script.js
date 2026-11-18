document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault();               // page should not reload

  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const pass    = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   // name@domain.com
  const hasDigit     = /\d/;

  // clear old messages
  document.getElementById("nameErr").textContent = "";
  document.getElementById("emailErr").textContent = "";
  document.getElementById("passErr").textContent = "";
  document.getElementById("confirmErr").textContent = "";
  document.getElementById("success").textContent = "";

  let valid = true;

  if (name.length < 3) {
    document.getElementById("nameErr").textContent = "Name must be at least 3 characters.";
    valid = false;
  }
  if (!emailPattern.test(email)) {
    document.getElementById("emailErr").textContent = "Enter a valid email, e.g. name@example.com";
    valid = false;
  }
  if (pass.length < 6 || !hasDigit.test(pass)) {
    document.getElementById("passErr").textContent = "Use 6+ characters including a number.";
    valid = false;
  }
  if (confirm !== pass || confirm === "") {
    document.getElementById("confirmErr").textContent = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").textContent = "Registration successful! Welcome, " + name + ".";
  }
});
