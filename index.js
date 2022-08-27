const mail = document.getElementById("mail");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("errorElement");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (password.value.length < 6) {
    messages.push("Password is too Short");
  }
  if (password.length >= 25) {
    messages.push("Password must be less tha 20");
  }
  if (password.value == password || password.value == 00000) {
    messages.push("Enter a valid password");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(", ");
  }
});
