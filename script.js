//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("loginForm");

  // Show "Login as existing user" if localStorage contains credentials
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  existingBtn.addEventListener("click", () => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      alert(`Logged in as ${storedUsername}`);
    }
  });
});
